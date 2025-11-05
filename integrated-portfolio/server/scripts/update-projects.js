/*
  Script: update-projects.js
  Purpose: Update production GraphQL with desired featured/order and upsert new projects
  Usage: node integrated-portfolio/server/scripts/update-projects.js [--endpoint=<url>]
*/

import fs from 'fs/promises';

const args = process.argv.slice(2);
const endpointArg = args.find(a => a.startsWith('--endpoint='));

async function loadConfig() {
  const configPath = new URL('./projects-config.json', import.meta.url);
  const raw = await fs.readFile(configPath, 'utf-8');
  const cfg = JSON.parse(raw);
  const endpoint = endpointArg ? endpointArg.replace('--endpoint=', '') : (process.env.GRAPHQL_URI || cfg.endpoint || 'https://www.johnccreations.design/api/graphql');
  return { endpoint, projects: cfg.projects };
}

async function graphqlFetch(endpoint, query, variables = {}) {
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables })
  });
  const json = await res.json();
  if (json.errors) {
    const msg = json.errors.map(e => e.message).join('; ');
    throw new Error(`GraphQL error: ${msg}`);
  }
  return json.data;
}

const GET_PROJECTS = `
  query GetAllProjects {
    projects {
      id
      title
      featured
      order
    }
  }
`;

const CREATE_PROJECT = `
  mutation CreateProject($input: ProjectInput!) {
    createProject(input: $input) {
      id
      title
      featured
      order
    }
  }
`;

const UPDATE_PROJECT = `
  mutation UpdateProject($id: ID!, $input: ProjectInput!) {
    updateProject(id: $id, input: $input) {
      id
      title
      featured
      order
    }
  }
`;

function buildInputFromConfig(cfgItem) {
  const input = {};
  // Only include fields that exist to avoid overwriting unintentionally
  const keys = ['title','shortDescription','category','status','technologies','imageUrl','liveUrl','githubUrl','featured','order'];
  for (const k of keys) {
    if (cfgItem[k] !== undefined) input[k] = cfgItem[k];
  }
  return input;
}

async function run() {
  const { endpoint, projects } = await loadConfig();
  console.log(`Using GraphQL endpoint: ${endpoint}`);
  const existing = await graphqlFetch(endpoint, GET_PROJECTS);
  const byTitle = new Map();
  for (const p of existing.projects) byTitle.set(p.title, p);

  const results = [];

  for (const cfgItem of projects) {
    const match = byTitle.get(cfgItem.title);
    const input = buildInputFromConfig(cfgItem);
    try {
      if (!match) {
        const created = await graphqlFetch(endpoint, CREATE_PROJECT, { input });
        results.push({ action: 'create', title: cfgItem.title, id: created.createProject.id });
        console.log(`Created: ${cfgItem.title}`);
      } else {
        const updated = await graphqlFetch(endpoint, UPDATE_PROJECT, { id: match.id, input });
        results.push({ action: 'update', title: cfgItem.title, id: updated.updateProject.id });
        console.log(`Updated: ${cfgItem.title}`);
      }
    } catch (err) {
      console.error(`Failed for ${cfgItem.title}: ${err.message}`);
      results.push({ action: 'error', title: cfgItem.title, error: err.message });
    }
  }

  console.log('Summary:', results);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
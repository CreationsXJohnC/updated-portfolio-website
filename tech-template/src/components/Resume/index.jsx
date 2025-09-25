import { useState, useEffect } from "react"
import "./style.css"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

// components
import BackgroundLines from "../BackgroundLines"
import ParaWriting from "../ParaWriting"
import FadeList from "../FadeList"
import ScrambleText from "../ScrambleText"
import ResumeCard from "../ResumeCard"

// assets
import ProfilePic from "../../assets/Images/Profile pic.png"
import Icon from "../Icon"
import githubIcon from "../../assets/Icon/github.svg"
import linkedinIcon from "../../assets/Icon/linkedin.svg"
import fileIcon from "../../assets/Icon/file.svg"

// jsons
import technicalSkills from "../../constants/technicalSkills.json"
import technicalSkills2 from "../../constants/technicalSkills2.json"
import qualities from "../../constants/qualities.json"
import experienceList from "../../constants/experienceList.json"

export default function Resume() {
  const controls = useAnimation()
  const [ref, inView] = useInView()
  const [hasAnimated, setHasAnimated] = useState(false)

  const handleComplete = () => {
    setHasAnimated(true)
  }

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible")
    }
  }, [inView, controls])

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const blurVariants = {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  }

  return (
    <section ref={ref} className="resume" id="resume">
      <BackgroundLines />

      <div className="resume--grid">
        <div className="resume--grid--detail">
          <div className="resume--grid--detail--pic">
            <img src={ProfilePic} alt="" />
          </div>
          <div className="resume--grid--detail--data">
            <div className="resume--grid--detail--data--name">
              <h2>
                <ParaWriting stagger={0.08} text={"David Bragg"} />
              </h2>
              <h4>
                <ScrambleText shuffle delay={0}>
                  Software Engineer
                </ScrambleText>
              </h4>
              <motion.div initial="hidden" animate={controls} variants={blurVariants} transition={{ duration: 1, delay: 0.5 }} onAnimationComplete={() => handleComplete()} className="resume--grid--detail--data--name--icons">
                <a href="" target="_blank" rel="noreferrer">
                  <Icon img={githubIcon} />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <Icon img={linkedinIcon} />
                </a>
                <a href="" target="_blank" rel="noreferrer">
                  <Icon img={fileIcon} />
                </a>
              </motion.div>
            </div>

            <div className="resume--grid--detail--data--skills">
              <h4>
                <ScrambleText shuffle delay={0}>
                  Technical Skills
                </ScrambleText>
              </h4>
              <div className="double">
                <FadeList delay={0} controls={controls} data={technicalSkills} shuffle />
                <FadeList delay={0} controls={controls} data={technicalSkills2} shuffle />
              </div>
            </div>

            <div className="resume--grid--detail--data--skills">
              <h4>
                <ScrambleText shuffle delay={0}>
                  Technical Skills
                </ScrambleText>
              </h4>

              <FadeList delay={0} controls={controls} data={qualities} shuffle />
            </div>
          </div>
        </div>

        <div className="resume--grid--experience">
          <div className="resume--grid--experience--head">
            <p className="theme--detail">
              <ScrambleText delay={0}>A highly motivated software engineer prepared to utilise exceptional software, problem-solving and communication skills to further my programming passion as a website developer.</ScrambleText>
            </p>

            <motion.h3 initial="hidden" animate={controls} variants={opacityVariant} transition={{ duration: 1, delay: 0.5 }} className="theme--text">
              <ScrambleText shuffle delay={0.5}>
                05
              </ScrambleText>{" "}
              <span className="hash">{"//"}</span>{" "}
              <ScrambleText shuffle delay={0.5}>
                Resume
              </ScrambleText>
            </motion.h3>
          </div>
          <div className="resume--grid--experience--body">
            <h4>
              <ScrambleText shuffle delay={0}>
                Experience
              </ScrambleText>
            </h4>
            {experienceList.map((item, index) => {
              return <ResumeCard key={index} experienceList={item} controls={controls} delay={index + 1} />
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

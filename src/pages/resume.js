import * as React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          childImageSharp {
            gatsbyImageData(quality: 100, formats: [AUTO, WEBP])
          }
          name
          publicURL
        }
      }
    }
  `)

  const education = [
    {
      id: 1,
      year: "2020 to 2024",
      degree: "Bachelor of ICTs (Hons)",
      where: "University of Jaffna Vavuniya Campus",
    },
    {
      id: 2,
      year: "2015 to 2018",
      degree: "GCE Advanced Level",
      where: "R/Sivali Central College",
    },
    {
      id: 3,
      year: "2008 to 2015",
      degree: "GCE Ordinary Level",
      where: "R/Sivali Central College",
    },
    // {
    //   id: 4,
    //   year: "2021-2023",
    //   degree: "Ph.D in Horriblensess ",
    //   where: "- ABC University,Los Angeles, CA",
    // },
  ]

  const experience = [
    {
      id: 1,
      year: "November 2023 - Present",
      profession: "Freelancer",
      where: "",
    },
    {
      id: 2,
      year: "July 2023 – November 2023",
      profession: "Intern Software Engineer",
      where: "Wyld Global (Pvt) Ltd",
    },
    {
      id: 3,
      year: "January 2023 - July 2023",
      profession: "Intern Software Engineer",
      where: "Explorelogy (Pvt) Ltd.",
    },
  ]

  const resume = [
    {
      id: 1,
      name: "Education",
    },
    { id: 2, name: "Experience" },
  ]

  const skillsData = [
    { name: "React JS", percentage: 60, color: "red-400" },
    { name: "Angular JS", percentage: 40, color: "yellow-500" },
    { name: "Vue JS", percentage: 40, color: "yellow-500" },
    { name: "Node JS", percentage: 40, color: "gray-600" },
    { name: "Java Script", percentage: 60, color: "indigo-500" },
    { name: "PHP", percentage: 40, color: "green-500" },
    { name: "Laravel", percentage: 30, color: "gray-600" },
    { name: "REST", percentage: 45, color: "indigo-500" },
    { name: "Tailwind CSS", percentage: 60, color: "red-500" },
    { name: "MySQL", percentage: 50, color: "gray-600" },
    { name: "MongoDB", percentage: 45, color: "red-500" },
    { name: "Tailwind CSS", percentage: 60, color: "red-500" },
  ]

  const knowladge = [
    {
      id: 1,
      name: "Jira",
    },
    {
      id: 2,
      name: "Slack",
    },
    {
      id: 3,
      name: "Lark",
    },
    {
      id: 4,
      name: "Click Up",
    },
    {
      id: 5,
      name: "Figma",
    },
    {
      id: 6,
      name: "Adobe XD",
    },
    {
      id: 7,
      name: "Miro",
    },
    {
      id: 8,
      name: "WordPress",
    },

    {
      id: 9,
      name: "XAMPP",
    },

    {
      id: 10,
      name: "VS Code",
    },
    {
      id: 11,
      name: "GitHub",
    },
    {
      id: 12,
      name: "Firebase(Backend as a Service)",
    },
  ]

  return (
    <>
      <Layout>
        <section>
          <div className="flex justify-start items-center  bg-black">
            <div className="flex flex-cols gap-7  mx-20 ">
              <div className="flex justify-start ">
                <Menu />
              </div>
              <div className=" flex-cols justify-start items-start pt-40 ">
                <Fade delay={1200} cascade damping={1e-1}>
                  <div className="flex items-center gap-7">
                    <div className="flex items-center text-2xl text-white">
                      Resume
                    </div>
                  </div>
                </Fade>
                {/* <div className="w-44 h-[1px]  bg-gradient-to-r from-red-400 to-pink-500" /> */}

                <Fade delay={1200} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    Undergraduate Trainee Full stack developer with 1 years of
                    industrial experience, And specialize in building responsive
                    web applications using modern technologies.
                  </div>
                </Fade>

                <Fade delay={1400} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    I am passionate developer and enjoy collaborating with
                    cross-functional teams to deliver high-quality software
                    solutions.
                  </div>
                </Fade>
                <Fade delay={1800} cascade damping={1e-1}>
                  <div className=" text-2xl text-white mt-7">What I've.!</div>
                </Fade>
                {/* <div className="w-44 h-[1px] bg-gradient-to-r  from-red-400 to-pink-500" /> */}
                <div className="grid grid-cols-2  gap-7   text-white justify-start items-center ">
                  <Fade delay={1900} cascade damping={1e-1}>
                    {resume.map((item, index) => (
                      <div className="flex flex-row mt-7">
                        <div
                          key={index}
                          className="flex justify-start item-center gap-3 "
                        >
                          <GatsbyImage
                            image={getImage(
                              data.allFile.nodes.find(
                                node => node.name === item.name
                              )
                            )}
                            alt={item.name}
                            className="w-7"
                          />
                          <div>{item.name}</div>
                        </div>
                      </div>
                    ))}
                  </Fade>
                </div>

                <div className="grid grid-cols-2 grid-rows-1 gap-7  ">
                  <div className="">
                    {education.map((item, index) => (
                      <Fade delay={2000} cascade damping={1e-1}>
                        <div className="border border-[#212425] rounded-lg p-5 mt-7">
                          <div class="flex flex-col ">
                            <div class="justify-start  text-lg text-white  items-center">
                              {item.year}
                            </div>
                            <div class="justify-start  text-lg text-white  items-center">
                              {item.degree}
                            </div>
                            <div class="justify-start  text-[#A6A6A6]">
                              {item.where}
                            </div>
                          </div>
                        </div>
                      </Fade>
                    ))}
                  </div>
                  <div>
                    {experience.map((item, index) => (
                      <Fade delay={2000} cascade damping={1e-1}>
                        <div className="border border-[#212425] rounded-lg p-5 mt-7 ">
                          <div class="flex flex-col">
                            <div class="justify-start  text-lg text-white  items-center">
                              {item.year}
                            </div>
                            <div class="justify-start  text-lg text-white  items-center">
                              {item.profession}
                            </div>
                            <div class="justify-start text-[#A6A6A6]">
                              {item.where}
                            </div>
                          </div>
                        </div>
                      </Fade>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center item-center bg-black text-white py-7 px-20">
            <div className="grid grid-cols-2 grid-rows-1 gap-7 ">
              <div className="flex justify-start flex-col">
                <div className="text-2xl py-7 flex justify-center items-center gap-7 ">
                  <Fade delay={2100} cascade damping={1e-1}>
                    Working Skills
                  </Fade>
                  {/* <div className="w-44 h-[1px]  bg-gradient-to-r from-red-400 to-pink-500" /> */}
                </div>

                <Fade delay={2100} cascade damping={1e-1}>
                  <div className="bg-[#0D0D0D] py-5 px-5 rounded-lg">
                    {skillsData.map((skill, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-3 py-7 justify-center items-center  "
                      >
                        <div className="flex  text-xl pt-2 pr-3  text-white  ">
                          {skill.name}{" "}
                        </div>
                        <div>
                          <span className={` text-xl text-${skill.color}`}>
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className=" flex justify-start relative w-50 h-2 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gray-200 absolute "></div>
                          <div
                            className={`h-full bg-${skill.color} ${
                              skill.color === "gray-600"
                                ? "sm:bg-indigo-500"
                                : "sm:bg-green-500"
                            } absolute`}
                            style={{ width: `${skill.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Fade>
              </div>
              <div className="flex justify-start flex-col">
                <div className="text-2xl py-7 flex justify-center items-center gap-7 ">
                  <Fade delay={2100} cascade damping={1e-1}>
                    Tools & Technologies
                  </Fade>
                </div>

                <Fade delay={2100} cascade damping={1e-1}>
                  <div className="mt-7 ">
                    {knowladge.map((item, index) => (
                      <div className="flex flex-cols justify-center  ">
                        <div className="bg-[#1C1C1C] rounded-lg text-xl px-2 py-1 mt-7">
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default Resume

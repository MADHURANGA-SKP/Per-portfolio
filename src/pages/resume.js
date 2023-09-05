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
      year: "2021-2023",
      degree: "Ph.D in Horriblensess ",
      where: "- ABC University,Los Angeles, CA",
    },
    {
      id: 2,
      year: "2021-2023",
      degree: "Ph.D in Horriblensess ",
      where: "- ABC University,Los Angeles, CA",
    },
    {
      id: 3,
      year: "2021-2023",
      degree: "Ph.D in Horriblensess ",
      where: "- ABC University,Los Angeles, CA",
    },
    {
      id: 4,
      year: "2021-2023",
      degree: "Ph.D in Horriblensess ",
      where: "- ABC University,Los Angeles, CA",
    },
  ]

  const experience = [
    {
      id: 1,
      year: "2019 - Present",
      profession: "Sr. Software Tester",
      where: "Google Inc.",
    },
    {
      id: 2,
      year: "2019 - Present",
      profession: "Sr. Software Tester",
      where: "Google Inc.",
    },
    {
      id: 3,
      year: "2019 - Present",
      profession: "Sr. Software Tester",
      where: "Google Inc.",
    },
    {
      id: 4,
      year: "2019 - Present",
      profession: "Sr. Software Tester",
      where: "Google Inc.",
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
    { name: "Html", percentage: 80, color: "yellow-400" },
    { name: "Tailwind CSS", percentage: 70, color: "red-500" },
    { name: "Php", percentage: 60, color: "green-500" },
    { name: "Laravel", percentage: 30, color: "gray-600" },
    { name: "Java Script", percentage: 10, color: "indigo-500" },
  ]

  const knowladge = [
    {
      id: 1,
      name: "Digital Design",
    },
    {
      id: 2,
      name: "Marketing",
    },
    {
      id: 3,
      name: "Communication",
    },
    {
      id: 4,
      name: "Social Media",
    },
    {
      id: 5,
      name: "Time Management",
    },
    {
      id: 5,
      name: "Flexibility",
    },
    {
      id: 5,
      name: "Print",
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
                <div className="flex items-center gap-7">
                  <Slide>
                    <div className="flex items-center text-2xl text-white">
                      Resume
                    </div>
                  </Slide>

                  <div className="w-44 h-[1px]  bg-gradient-to-r from-red-400 to-pink-500" />
                </div>

                <Fade delay={1200} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    I'm Creative Director and UI/UX Designer from Sydney,
                    Australia, working in web development and print media. I
                    enjoy turning complex problems into simple, beautiful and
                    intuitive designs.
                  </div>
                </Fade>

                <Fade delay={1400} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    My aim is to bring across your message and identity in the
                    most creative way. I created web design for many famous
                    brand companies.
                  </div>
                </Fade>
                <Fade delay={1800} cascade damping={1e-1}>
                  <div className=" text-2xl text-white mt-7">
                    What I've done!
                  </div>
                </Fade>
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
          <div className="flex justify-center item-center bg-black text-white py-7">
            <div className="grid grid-cols-2 grid-rows-1 gap-7 ">
              <div className="flex justify-start flex-col">
                <div className="text-2xl py-7 flex justify-center items-center gap-7 ">
                  <Slide>Working Skills</Slide>
                  <div className="w-44 h-[1px]  bg-gradient-to-r from-red-400 to-pink-500" />
                </div>

                <Fade delay={2100} cascade damping={1e-1}>
                  <div className="bg-[#0D0D0D] py-5 px-5 rounded-lg">
                    {skillsData.map((skill, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-3 py-7 justify-start items-center  "
                      >
                        <div className="flex justify-start text-xl pt-2  text-white  ">
                          {skill.name}{" "}
                        </div>
                        <div>
                          <span className={` text-xl text-${skill.color}`}>
                            {skill.percentage}%
                          </span>
                        </div>
                        <div className=" flex justify-start relative w-60 h-3 rounded-full overflow-hidden">
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
                  <Slide>Knowledges</Slide>
                  <div className="w-44 h-[1px]  bg-gradient-to-r from-red-400 to-pink-500" />
                </div>

                <Fade delay={2100} cascade damping={1e-1}>
                  <div className="mt-7">
                    {knowladge.map((item, index) => (
                      <div className="flex flex-cols justify-center ">
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

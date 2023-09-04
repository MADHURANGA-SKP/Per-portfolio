import * as React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

const Works = () => {
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

                  <div className="w-44 h-[1px] bg-gradient-to-r  from-red-400 to-pink-500" />
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

                <div className="grid grid-cols-2 grid-rows-2 gap-7  ">
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
        </section>
        <section></section>
      </Layout>
    </>
  )
}

export default Works

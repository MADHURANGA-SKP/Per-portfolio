import * as React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

const About = () => {
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

  const aboutgrid = [
    {
      id: 1,
      name: "Ui/Ux Design",
      discription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      id: 2,
      name: "App Development",
      discription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      id: 3,
      name: "Photography",
      discription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      id: 4,
      name: "Web Development",
      discription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
  ]

  return (
    <>
      <Layout>
        <section>
          <div className="flex justify-center items-center  bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2  mx-20 ">
              <div className="flex justify-start ">
                <Menu />
              </div>
              <div className=" flex-col justify-start items-start pt-40 ">
                <div className="flex items-center gap-7">
                  <Slide>
                    <div className="flex items-center text-2xl text-white">
                      About Me
                    </div>
                  </Slide>
                  <div className="w-44 h-[1px] bg-gradient-to-r  from-red-400 to-pink-500" />
                </div>
                <Fade delay={1000} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    I'm Creative Director and UI/UX Designer from Sydney,
                    Australia, working in web development and print media. I
                    enjoy turning complex problems into simple, beautiful and
                    intuitive designs.
                  </div>
                </Fade>

                <Fade delay={1100} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    My aim is to bring across your message and identity in the
                    most creative way. I created web design for many famous
                    brand companies.
                  </div>
                </Fade>
                <div className=" text-2xl text-white mt-7">What I do!</div>
                <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-7">
                  {aboutgrid.map((item, index) => (
                    <div className="border border-[#212425] rounded-lg p-5">
                      <div class="grid grid-rows-3 grid-flow-col">
                        <div class="row-span-3 ...  mx-5 items-center">
                          <GatsbyImage
                            image={getImage(
                              data.allFile.nodes.find(
                                node => node.name === item.name
                              )
                            )}
                            alt={item.name}
                            className="w-[20px] h-[20px]"
                          />
                        </div>
                        <div class="col-span-2 ... mr-0 text-lg text-white  items-center">
                          {item.name}
                        </div>
                        <div class="row-span-2 col-span-2 ...mr-0 text-[#A6A6A6]">
                          {item.discription}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About

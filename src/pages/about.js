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
      name: "Ui Ux Design",
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
    {
      id: 5,
      name: "Mobile App Development",
      discription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
    {
      id: 6,
      name: "IT Support",
      discription:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.",
    },
  ]

  const clients = [
    {
      id: 1,
      name: "brand",
    },
    { id: 2, name: "brand" },
    { id: 3, name: "brand" },
    { id: 4, name: "brand" },
  ]

  return (
    <>
      <Layout>
        <section>
          <div className="flex justify-center items-center  bg-black">
            <div className="flex flex-cols gap-7  mx-20 ">
              <div className="flex justify-start ">
                <Menu />
              </div>
              <div className=" flex-cols justify-start items-start pt-40 ">
                <div className="flex items-center gap-7">
                  <Slide>
                    <div className="flex items-center text-2xl text-white">
                      About Me
                    </div>
                    <div className="w-44 h-[1px] bg-gradient-to-r  from-red-400 to-pink-500" />
                  </Slide>
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
                  <div className=" text-2xl text-white mt-7">What I do!</div>
                </Fade>

                <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-7">
                  {aboutgrid.map((item, index) => (
                    <Fade delay={2000} cascade damping={1e-1}>
                      <div className="border border-[#212425] rounded-lg p-5">
                        <div class="grid grid-rows-3 grid-flow-col">
                          <div class="row-span-3 ...  mx-5 items-center pt-1">
                            <GatsbyImage
                              image={getImage(
                                data.allFile.nodes.find(
                                  node => node.name === item.name
                                )
                              )}
                              alt={item.name}
                              className="w-7"
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
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-black py-10 px-5">
            <div className="bg-[#0D0D0D] text-white">
              <div className="flex justify-center text-lg py-5">Clients</div>
              <div className="flex flex-row justify-center items-center pb-5 gap-x-16">
                {clients.map((item, index) => (
                  <GatsbyImage
                    image={getImage(
                      data.allFile.nodes.find(node => node.name === item.name)
                    )}
                    alt={item.name}
                    className="w-20 cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About

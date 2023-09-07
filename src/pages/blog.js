import * as React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"

const Blog = () => {
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

  const grid = [
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
    { name: "pasan", description: "pasan", deatils: "pasan" },
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
                      Blog
                    </div>
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
                  <div className=" text-2xl text-white mt-7">
                    What I've done!
                  </div>
                </Fade>
                <div className="grid grid-cols-2  gap-5 mt-7">
                  {grid.map((item, index) => (
                    <div
                      key={index}
                      className=" border border-[#A6A6A6] rounded-lg "
                    >
                      <div className="flex justify-center item-center mt-3 text-white mx-5">
                        {item.name}
                      </div>
                      <div className="flex justify-start item-center text-[#A6A6A6] mt-3 mx-5">
                        {item.description}
                      </div>
                      <div className="flex justify-start item-center text-white my-3 mx-5">
                        {item.deatils}
                      </div>
                    </div>
                  ))}
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

export default Blog

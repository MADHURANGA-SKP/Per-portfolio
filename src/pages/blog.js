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
    {
      name: "Blog 01",
      description: "blogs may avalible when pulished",
      deatils: "",
    },
    // { name: "Blog 02", description: "pasan", deatils: "" },
    // { name: "Blog 03", description: "pasan", deatils: "" },
    // { name: "Blog 04", description: "pasan", deatils: "" },
    // { name: "Blog 05", description: "pasan", deatils: "" },
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
                  <Fade delay={1200} cascade damping={1e-1}>
                    <div className="flex items-center text-2xl text-white">
                      Blog
                    </div>
                  </Fade>
                </div>

                <Fade delay={1200} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    Welcome to the blog page! This is where I share my thoughts
                    on various topics related to web development, programming,
                    and technology.
                  </div>
                </Fade>

                <Fade delay={1400} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    In this blog, you’ll find articles ranging from in-depth
                    tutorials and how-to guides, to discussions on best
                    practices and emerging trends in the tech industry. Whether
                    you’re a fellow developer, a tech enthusiast, or just
                    curious, there’s something here for you.
                  </div>
                </Fade>
                <Fade delay={1800} cascade damping={1e-1}>
                  <div className=" text-2xl text-white mt-7">
                    Happy reading!
                  </div>
                </Fade>
                <Fade delay={2000} cascade damping={1e-1}>
                  <div className="grid grid-cols-1  gap-5 mt-7">
                    {grid.map((item, index) => (
                      <div
                        key={index}
                        className=" border border-[#212425] rounded-lg "
                      >
                        <div className="flex justify-center item-center mt-3 text-white mx-5">
                          {item.name}
                        </div>
                        <div className="flex justify-center item-center text-[#A6A6A6] mt-3 mx-5">
                          {item.description}
                        </div>
                        <div className="flex justify-start item-center text-white my-3 mx-5">
                          {item.deatils}
                        </div>
                      </div>
                    ))}
                  </div>
                </Fade>
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

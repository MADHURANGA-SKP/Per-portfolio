import * as React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"
import { Fade, Slide } from "react-awesome-reveal"
import { useState } from "react"

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

  const [activeTab, setActiveTab] = useState("all") // Default active tab is 'all'

  const tabs = [
    { id: "all", label: "All" },
    { id: "web-designs", label: "Web Designs" },
    { id: "mockups", label: "Mockups" },
    { id: "templates", label: "Templates" },
    { id: "designs", label: "Designs" },
  ]

  const tabData = {
    all: {
      title: "All Items",
      content: [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" },
      ],
    },

    mockups: {
      title: "Mockups",
      content: [
        { id: 6, text: "Mockup 1" },
        { id: 7, text: "Mockup 2" },
      ],
    },
    "web-designs": {
      title: "Web Designs",
      content: [
        { id: 4, text: "Web Design 1" },
        { id: 5, text: "Web Design 2" },
      ],
    },
    templates: {
      title: "Templates",
      content: [
        { id: 6, text: "Templates 1" },
        { id: 7, text: "Templates 2" },
      ],
    },
    designs: {
      title: "Designs",
      content: [
        { id: 6, text: "Designs 1" },
        { id: 7, text: "Designs 2" },
      ],
    },
  }

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
                    What I've done.!
                  </div>
                </Fade>
                <Fade delay={2000} cascade damping={1e-1}>
                  <div className="mt-7">
                    <div className="flex space-x-4">
                      {tabs.map(tab => (
                        <div
                          key={tab.id}
                          onClick={() => setActiveTab(tab.id)}
                          className={`cursor-pointer px-3 py-2  rounded ${
                            activeTab === tab.id
                              ? "bg-gradient-to-r from-red-400 to-pink-500 text-white"
                              : "text-[#A6A6A6] "
                          }`}
                        >
                          {tab.label}
                        </div>
                      ))}
                    </div>
                    <div>
                      <h2>{tabData[activeTab].title}</h2>
                      <div>
                        {tabData[activeTab].content.map(item => (
                          <div key={item.id} className="text-white">
                            {item.text}
                          </div>
                        ))}
                      </div>
                    </div>
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

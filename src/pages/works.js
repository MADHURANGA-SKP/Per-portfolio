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
        { id: 1, text: "Not Visible" },
        { id: 2, text: "Not Visible" },
        { id: 3, text: "Not Visible" },
      ],
    },

    mockups: {
      title: "Mockups",
      content: [
        { id: 6, text: "Comming Soon" },
        { id: 7, text: "Comming Soon" },
      ],
    },
    "web-designs": {
      title: "Web Designs",
      content: [
        { id: 4, text: "Comming Soon" },
        { id: 5, text: "Comming Soon" },
      ],
    },
    templates: {
      title: "Templates",
      content: [
        { id: 6, text: "Comming Soon" },
        { id: 7, text: "Comming Soon" },
      ],
    },
    designs: {
      title: "Designs",
      content: [
        { id: 6, text: "Comming Soon" },
        { id: 7, text: "Comming Soon" },
      ],
    },
  }

  return (
    <>
      <Layout>
        <section>
          <div className="flex justify-start items-center  bg-black">
            <div className="flex flex-cols gap-7  mx-20 pb-20">
              <div className="flex justify-start ">
                <Menu />
              </div>
              <div className=" flex-cols justify-start items-start pt-40 ">
                <Fade delay={1200} cascade damping={1e-1}>
                  <div className="flex items-center gap-7">
                    <div className="flex items-center text-2xl text-white">
                      Work
                    </div>
                  </div>
                </Fade>
                {/* <div className="w-44 h-[1px]  bg-gradient-to-r from-red-400 to-pink-500" /> */}

                <Fade delay={1200} cascade damping={1e-1}>
                  <div className=" text-lg mt-7 text-[#A6A6A6]">
                    I embarked on my journey as a Full-Stack Developer with a
                    keen interest in both front-end and back-end technologies.
                    As a trainee, I’m learning to build dynamic and responsive
                    websites, working with databases, and understanding how to
                    create seamless and intuitive user experiences.
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

import React, { useState } from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"
import { useStaticQuery, graphql } from "gatsby"

import { Fade, Slide } from "react-awesome-reveal"
import { Link } from "gatsby"

const Contact = () => {
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

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    suggestions: "",
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    // You can add your form submission logic here
    console.log("Form data submitted:", formData)
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
                  <div className="text-2xl text-white">Drop me a line</div>
                </Fade>
                <Fade delay={1400} cascade damping={1e-1}>
                  <div>
                    <div class="mt-7 text-[#A6A6A6]">
                      love to hear from you! Whether you have a question or,
                      need assistance or may be just want to talk, please don’t
                      hesitate to reach out.
                    </div>
                    <div class="mt-24 mb-14 text-[#A6A6A6] cursor-pointer">
                      <Link to="https://github.com/MADHURANGA-SKP">
                        Github: MADHURANGA-SKP
                      </Link>
                    </div>
                    {/* <div class="mt-7 text-[#A6A6A6]">+ 01 234 567 89</div> */}
                    {/* <div class="mt-7 text-[#A6A6A6]">info@gmail.com</div> */}
                  </div>
                </Fade>

                <div className="flex items-center justify-center pb-20">
                  <div className="   mt-7 pb-8 w-full p-7 border border-[#212425] rounded-lg ">
                    <Fade delay={1600} cascade damping={1e-1}>
                      <h2 className=" text-2xl text-white ">
                        Leave somthing Here 😃 For me .!
                      </h2>
                    </Fade>

                    <form onSubmit={handleSubmit} className="">
                      <div className="mb-4 mt-7">
                        <Fade delay={1700} cascade damping={1e-1}>
                          <label
                            className="block text-[#A6A6A6] text-sm font-bold mb-2"
                            htmlFor="name"
                          >
                            Name
                          </label>

                          <input
                            className=" appearance-none border rounded w-full py-2 px-3 text-[#A6A6A6] leading-tight focus:outline-none "
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                          />
                        </Fade>
                      </div>
                      <div className="mb-4">
                        <Fade delay={1800} cascade damping={1e-1}>
                          <label
                            className="block text-[#A6A6A6] text-sm font-bold mb-2"
                            htmlFor="company"
                          >
                            Company or Org
                          </label>
                          <input
                            className=" appearance-none border rounded w-full py-2 px-3 text-[#A6A6A6] leading-tight focus:outline-none "
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company or Organization"
                          />
                        </Fade>
                      </div>
                      <div className="mb-4">
                        <Fade delay={1900} cascade damping={1e-1}>
                          <label
                            className="block text-[#A6A6A6] text-sm font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            className=" appearance-none border rounded w-full py-2 px-3 text-[#A6A6A6] leading-tight focus:outline-none "
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                          />
                        </Fade>
                      </div>
                      <div className="mb-4">
                        <Fade delay={2000} cascade damping={1e-1}>
                          <label
                            className="block text-[#A6A6A6] text-sm font-bold mb-2"
                            htmlFor="suggestions"
                          >
                            Suggestions
                          </label>
                          <textarea
                            className=" appearance-none border rounded w-full py-2 px-3 text-[#A6A6A6] leading-tight focus:outline-none  h-32"
                            id="suggestions"
                            name="suggestions"
                            value={formData.suggestions}
                            onChange={handleChange}
                            placeholder="Your Suggestions"
                            required
                          />
                        </Fade>
                      </div>
                      <div className="flex items-center justify-center">
                        <Fade delay={2100} cascade damping={1e-1}>
                          <button
                            className="bg-gradient-to-r mt-7 from-red-400 to-pink-500 text-white font-bold py-2 px-4 rounded-xl focus:outline-none "
                            type="submit"
                          >
                            Submit
                          </button>
                        </Fade>
                      </div>
                    </form>
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

export default Contact

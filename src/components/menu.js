import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image"

const Menu = () => {
  // Define the GraphQL query and store its result in the "data" variable.
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

  const socialmedia = [
    {
      id: 1,
      name: "Facebook",
    },
    {
      id: 2,
      name: "Twitter",
    },
    {
      id: 3,
      name: "Instagram",
    },
    {
      id: 4,
      name: "LinkedIn",
    },
  ]

  const submenue = [
    {
      id: 1,
      name: "Phone",
      itemName: "+123 456 7890",
    },
    {
      id: 2,
      name: "Email",
      itemName: "example@mail.com",
    },
    {
      id: 3,
      name: "Location",
      itemName: "Hong Kong, China",
    },
    {
      id: 4,
      name: "Birthday",
      itemName: "May 27, 1990",
    },
  ]

  return (
    <>
      <section>
        <div className=" pt-40 ">
          <div className="flex flex-col justify-start items-center">
            <div className="bg-[#A6A6A6] w-[240px] h-[240px] rounded-2xl flex justify-center items-center" />

            <div className="flex justify-center text-white items-center mt-7 text-2xl">
              Bostami Hasan
            </div>
            <div className="flex justify-center text-[#A6A6A6] items-center mt-7 text-xl bg-[#1D1D1D] rounded-lg py-1 px-2">
              UI/UX Designer
            </div>
            <div className="flex justify-center items-center gap-2 mt-7">
              {socialmedia.map((item, index) => (
                <div key={index} className="bg-[#1D1D1D] py-2 px-2 rounded-xl">
                  <GatsbyImage
                    image={getImage(
                      data.allFile.nodes.find(node => node.name === item.name)
                    )}
                    alt={item.id}
                    className="w-[25px] h-[25px]"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center mt-7 py-5  px-7 bg-[#212425] rounded-xl">
              <div className="py-5 px-5 space-y-5 mt-3">
                {submenue.map((item, index) => (
                  <div className="flex flex-cols-2 gap-7 justify-start items-center ">
                    <div className="flex justify-center items-center rounded-lg bg-black w-[45px] h-[45px] space-y-5">
                      <GatsbyImage
                        image={getImage(
                          data.allFile.nodes.find(
                            node => node.name === item.name
                          )
                        )}
                        alt={item.name}
                        className="w-5"
                      />
                    </div>

                    <div className="grid grid-row-2 justify-start items-center">
                      <div className="flex justify-start items-center text-base text-[#A6A6A6]">
                        {item.name}
                      </div>
                      <div className="flex justify-center item-center text-white text-lg">
                        {item.itemName}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 bg-gradient-to-r mt-7 from-red-400 to-pink-500 rounded-xl py-3 cursor-pointer px-3">
              <div className="flex justify-center items-center">
                {" "}
                <StaticImage
                  src="../images/download.png"
                  alt="Download Icon"
                  className="w-7 h-7"
                />
              </div>
              <div className="flex justify-center items-center text-white">
                Download CV
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu

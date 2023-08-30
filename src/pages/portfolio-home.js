import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const PortfolioHome = () => {
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
      name: "Linkdin",
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
      itemName: "Hong kong china",
    },
    {
      id: 4,
      name: "Birthday",
      itemName: "May 27, 1990",
    },
  ]

  return (
    <>
      <Layout>
        <section>
          <div class="grid grid-cols-2 bg-black pt-40 px-20">
            <div className="flex justify-center  ">
              <div className="flex flex-col justify-center ">
                <div className="bg-[#A6A6A6] w-[240px] h-[240px] rounded-2xl flex justify-center items-center"></div>

                <div className="flex justify-center text-white items-center mt-3 text-2xl">
                  Bostami hasan
                </div>
                <div className="flex justify-center text-[#A6A6A6] items-center mt-3 text-xl bg-[#1D1D1D] rounded-lg py-1">
                  Ui/Ux Designer
                </div>
                <div className="flex justify-center items-center gap-2">
                  {socialmedia.map((item, index) => (
                    <div
                      key={index}
                      className="mt-3 bg-[#1D1D1D] py-2 px-2 rounded-xl"
                    >
                      <GatsbyImage
                        image={getImage(
                          data.allFile.nodes.find(
                            node => node.name === item.name
                          )
                        )}
                        alt={item.id}
                        className="w-[25px] h-[25px]"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center mt-7 my-10 bg-[#212425] rounded-lg">
                  <div className="grid grid-cols-1 py-5 px-5 space-y-3 my-3">
                    {submenue.map((item, index) => (
                      <div className="flex flex-cols-2 gap-3 justify-start ">
                        <div className="flex justify-center items-center rounded-lg bg-black w-[45px] h-[45px]">
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
                      // {index < ({submenue}).length - 1 && (
                      //   <div
                      //     className={`absolute w-full h-[1px] bg-[#3D3A3A] bottom-0 left-0`}
                      //   ></div>
                      // )}
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center ">
              pasan
              <div>pasan</div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default PortfolioHome

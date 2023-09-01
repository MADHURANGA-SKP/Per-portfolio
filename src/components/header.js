import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

const Header = () => {
  //Define the GraphQL query and store its result in the "data" variable.
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

  const [scroll, setScroll] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  const header = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Resume",
    },
    {
      id: 3,
      name: "Works",
    },
    {
      id: 4,
      name: "Blogs",
    },
    {
      id: 5,
      name: "Contact",
    },
  ]

  return (
    <>
      <section
        className={
          scroll
            ? "fixed w-full z-30 duration-300"
            : "fixed w-full z-30 duration-300"
        }
      >
        <div className={scroll ? "fixed top-0 w-full bg-gray-900" : "w-full"}>
          <div className="bg-black pt-5 px-20">
            <div className="flex justify-end">
              <Link to="/" className="cursor-pointer custom-link ">
                <div className="flex items-center justify-between space-x-3 mr-20">
                  {header.map((item, index) => (
                    <div
                      className="flex flex-col justify-center items-center text-center bg-[#212425] text-white hover:bg-gradient-to-r from-red-400 to-pink-500 active:bg-gradient-to-r rounded-lg"
                      key={index}
                      style={{ width: "100px", height: "100px" }}
                    >
                      <div className="flex justify-center items-center">
                        <GatsbyImage
                          image={getImage(
                            data.allFile.nodes.find(
                              node => node.name === item.name
                            )
                          )}
                          alt={item.name}
                          className="w-[35px] h-[35px]"
                        />
                      </div>
                      <div className="mt-1">{item.name}</div>
                    </div>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          {/* {mobileMenuOpen ? (
            <button onClick={toggleMobileMenu} className="text-white text-xl">
              &#10005;
            </button>
          ) : (
            <button onClick={toggleMobileMenu} className="text-white text-xl">
              &#9776;
            </button>
          )} */}
        </div>

        {/* {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900 text-white text-center py-4">
            <Link to="/" onClick={closeMobileMenu} className="block py-2">
              About
            </Link>
            <Link to="/about" onClick={closeMobileMenu} className="block py-2">
              Resume
            </Link>
            <Link
              to="/services"
              onClick={closeMobileMenu}
              className="block py-2"
            >
              Works
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block py-2"
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block py-2"
            >
              Contact
            </Link>
          </div>
        )} */}
      </section>
    </>
  )
}

export default Header

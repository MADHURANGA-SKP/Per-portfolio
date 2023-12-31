import * as React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
// import CircularWithValueLabel from "../components/loading/loading"
import BackgroundImage from "gatsby-background-image"

const IndexPage = () => {
  // const [loading, setLoading] = React.useState(false)

  // const handleButtonClick = () => {
  //   setLoading(true)

  //   // Simulate an asynchronous operation (e.g., fetching data or loading resources)
  //   setTimeout(() => {
  //     // Set loading to false when the operation is complete
  //     setLoading(false)
  //     // Navigate to the "/about" page after loading is complete
  //     navigate("/about")
  //   }, 6000) // Simulate a 6-second loading time
  // }

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "27230.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = data.placeholderImage.childImageSharp.fluid
  return (
    <BackgroundImage
      fluid={imageData}
      Tag="div"
      className="h-screen relative"
      style={{ backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black opacity-25" />

      <div className="absolute inset-0 flex items-center justify-center card-shine-effect">
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-black/50 p-10 rounded-3xl bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] relative max-w-md overflow-hidden  bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-repeat px-8 py-16 shadow-2xl hover:bg-[position:200%_0,0_0] duration-[3500ms]">
            <div className="flex text-white/100  max-w-lg lg:text-5xl md:text-3xl text-lg font-semibold leading-normal text-center uppercase">
              Embark on a Journey to uncover the mysteries of " a Developer
            </div>
          </div>

          {/* {loading ? (
            // Show the loading spinner or message while loading
            <div className="flex justify-center items-center">
              <CircularWithValueLabel />
            </div>
          ) : (
            // Render the content of your page when loading is complete */}
          <div className="flex bg-black/50 p-10 rounded-3xl mx-10">
            <Link to="/about" className="w-full">
              <button className="group relative h-12 w-full md:px-2 px-5 md:py-0 py-3 overflow-hidden rounded-lg bg-black/50 text-lg">
                <div className="absolute inset-0 w-3 bg-[#3B71CA]/75 transition-all duration-[800ms] ease-out group-hover:w-full"></div>
                <span className="relative text-white group-hover:text-white font-semibold uppercase md:text-lg text-xs">
                  Start your Journey!
                </span>
              </button>
            </Link>
          </div>
          {/* )} */}
        </div>
      </div>
    </BackgroundImage>
  )
}

export default IndexPage

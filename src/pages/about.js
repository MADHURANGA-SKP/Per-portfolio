import * as React from "react"
import Layout from "../components/layout"
import Menu from "../components/menu"

const About = () => {
  return (
    <>
      <Layout>
        <section>
          <div className="flex justify-center items-center  bg-black">
            <div className="grid grid-cols-1 md:grid-cols-2  p">
              <div className="flex justify-center items-center pr-20">
                <Menu />
              </div>
              <div className="flex justify-center items-center pl-20">
                pasan
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  )
}

export default About

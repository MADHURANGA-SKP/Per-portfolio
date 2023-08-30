import * as React from "react"
import Layout from "../components/layout"
import videoSrc from "../video/spaceman-walking-animated-wallpaper.mp4"
import { useGlitch, GlitchHandle } from 'react-powerglitch'

const IndexPage = () => {
  // const glitch = useGlitch()
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-25" />
      
          <div className="absolute inset-0 flex items-center justify-center card-shine-effect">
          <div className="grid grid-cols-1 gap-4">
            <div className="bg-black/50 p-10 rounded-3xl bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] relative max-w-md overflow-hidden  bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-repeat px-8 py-16 shadow-2xl hover:bg-[position:200%_0,0_0] duration-[3500ms]">
              <div className="flex text-white/100  max-w-lg lg:text-5xl md:text-3xl text-lg font-semibold leading-normal text-center uppercase" >
                Embark on a<br/> Journey to uncover the mysteries of the universe with us
              </div>
            </div>
            
            <div className="flex bg-black/50 p-10 rounded-3xl mx-10">
              
            <button class="group relative h-12 w-full md:px-2 px-5 md:py-0 py-3 overflow-hidden rounded-lg bg-black/50 text-lg ">
            <div class="absolute inset-0 w-3 bg-[#3B71CA]/75 transition-all duration-[800ms] ease-out group-hover:w-full"></div>
            <span class="relative text-white group-hover:text-white font-semibold uppercase md:text-lg text-xs  ">Start your Journey!</span>
            </button>
          {/* ref={glitch.ref} */}
            </div>
          </div>
      </div>
    </div>
  );
}

export default IndexPage

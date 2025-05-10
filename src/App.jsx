import React, { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import "remixicon/fonts/remixicon.css"

const App = () => {

  const [showContent, setShowContent] = useState(false);

  useGSAP(()=>{
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 4,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function(){
        if(this.progress() >= .9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  useGSAP(() => {
    if(!showContent) return;

    gsap.to(".main", {
        scale: 1,
        rotate: 0,
        duration: 2,
        delay: "-1",
        ease: "expo.easeInOut"
    });
    gsap.to(".sky", {
        scale: 1.2,
        rotate: 0,
        duration: 2,
        delay: "-.8",
        ease: "expo.easeInOut"
    });
    gsap.to(".bg", {
        scale: 1.2,
        rotate: 0,
        duration: 2,
        delay: "-.8",
        ease: "expo.easeInOut"
    });
    gsap.to(".char", {
        // scale: .8,
        rotate: 0,
        x: "-50%",
        duration: 2,
        delay: "-.8",
        // bottom: "-73%",
        ease: "expo.easeInOut"
    });
    gsap.to(".text", {
        scale: 1.1,
        rotate: 0,
        duration: 2,
        delay: "-.8",
        ease: "expo.easeInOut"
    });



    const main = document.querySelector(".main");

    
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      
      window.addEventListener('deviceorientation', function(e) {
        let gamma = e.gamma; 
    
        
        let normalized = gamma / 90; 
        const xMove = (normalized) * 45; 
    
        gsap.to(".imagesdiv .text", { x: `${xMove * 0.2}%` });
        gsap.to(".sky", { x: xMove });
        gsap.to(".bg", { x: xMove * 1.5 });
      });
    } 
      main?.addEventListener("mousemove", function(e) {
        const xMove = (e.clientX / window.innerWidth - 0.5) * 35;
    
        gsap.to(".imagesdiv .text", { x: `${xMove * 0.2}%` });
        gsap.to(".sky", { x: xMove });
        gsap.to(".bg", { x: xMove * 1.5 });
      });
    
    
    
    
  }, [showContent]);

  return (
    <>
      <div className="svg  flex items-center justify-center  fixed top-0 left-0 z-[99] w-full h-screen overflow-hidden bg-black">
      <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
      
      <div className='main w-full overflow-hidden rotate-[-10deg] scale-[1.7]' >
          <div className=" w-full overflow-hidden relative h-screen bg-black">

          <div className="navbar overflow-hidden absolute top-0 left-0 z-[10] w-full py-5 md:py-10 px-5 md:px-10">
              <div className="logo flex items-start gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-[1vh] bg-white"></div>
                  <div className="line w-8 h-[1vh] bg-white"></div>
                  <div className="line w-5 h-[1vh] bg-white"></div>
                </div>
                <h3 className="text-[9vw] md:text-[3vw] -mt-[10px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>


            <div className="imagesdiv overflow-hidden relative w-full h-screen ">
              <img src="./sky.png"
                className='sky scale-[1.5] rotate-[-20deg] absolute top-0 left-0 w-full h-full object-cover'
              alt="" />
              <img src="./bg.png"
                className='bg scale-[1.8] rotate-[-3deg] absolute top-0 left-0 w-full h-full object-cover'
              alt="" />

              <div className="text text-white flex flex-col gap-1 absolute top-30 md:top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[5rem] md:text-[7rem] leading-none -ml-10 md:-ml-40">grand</h1>
                <h1 className="text-[5rem] md:text-[7rem] leading-none ml-5 md:ml-10">theft</h1>
                <h1 className="text-[5rem] md:text-[7rem] leading-none -ml-10 md:-ml-40">auto</h1>
              </div>

              <img src="./girlbg.png"
                 className='char absolute -bottom-[1%] md:-bottom-[73%] left-1/2 -translate-x-1/2 scale-[1.1] md:scale-[.8] rotate-[-20deg]'
              alt="" />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent ">
              <div className="flex gap-4 items-center">
              <i className="text-4xl ri-arrow-down-line"></i>
              <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img 
                className="absolute h-[55px] -top-1 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                src="./ps5.png" alt="" />
            </div>
            
          </div>

          <div className="w-full py-[10vw] md:py-[5vw] flex items-center justify-center bg-black">
            <div className="cntnr flex-col md:flex-row flex items-center text-white w-full md:h-[85vh]">
              <div className="limg relative flex items-center justify-center w-1/2 h-full">
                <img
                  className="scale-[1.7]  md:scale-[.8] "
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[80%]  md:w-[40%] py-30">
                <h1 className="text-[11vw] md:text-[4vw] leading-none">Still Running,</h1>
                <h1 className="text-[11vw] md:text-[4vw] leading-none">Not Hunting</h1>
                <p className="mt-8 text-[.7rem] md:text-[1rem] font-sans leading-none">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-1 text-[.7rem] md:text-[1rem] font-sans leading-none">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-3 text-[.7rem] md:text-[1rem] font-sans leading-none">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 md:scale-[1] px-4 md:px-8 py-4 md:py-8 text-black mt-10 text-xl md:text-3xl cursor-pointer">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
        
        
      )}
    </>
  )
}

export default App
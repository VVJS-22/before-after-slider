/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useCallback, useMemo, useState, useRef, useEffect } from 'react';
import example from './example'
const POSITION = { x: 0, y: 0 };




export const throttle = (f) => {
  let token = null,
    lastArgs = null;
  const invoke = () => {
    f(...lastArgs);
    token = null;
  };
  const result = (...args) => {
    lastArgs = args;
    if (!token) {
      token = requestAnimationFrame(invoke);
    }
  };
  result.cancel = () => token && cancelAnimationFrame(token);
  return result;
};
/// use-draggable.ts
const id = (x) => x;



export default function Home() {

  const [imageWidth, setImageWidth] = useState(100);
  const [imageLeft, setImageLeft] = useState(100);

  const imageRef = useRef();

  const [pressed, setPressed] = useState(false);
  const position = useRef({ x: 0 });

  const ref = useRef();
  const unsubscribe = useRef();

  const [openMoves, setOpenMoves] = useState(!1);
  const [ws, setWs] = useState("50%");
  const [skeletonVisible, setSkeletonVisible] = useState(!0);


  const legacyRef = useCallback((elem) => {
    imageRef.current = elem;
    if (unsubscribe.current) {
      unsubscribe.current();
    }
    if (!elem) {
      return;
    }
    const handleMouseDown = (e) => {
      // don't forget to disable text selection during drag and drop
      // operations
      e.target.style.userSelect = "none";
      setPressed(true);
    };

    elem.addEventListener("mousedown", handleMouseDown);
    unsubscribe.current = () => {
      elem.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);


  //   useEffect(() => {
  //  console.log('hello')
  //     if (!pressed) {
  //       return;
  //     }
  //     console.log(pressed)

  //     const handleMouseMove = throttle((event) => {
  //       if (!imageRef.current || !position.current) {
  //         return;
  //       }
  //       const pos = position.current;
  //       const elem = imageRef.current;
  //       console.log(pos)
  //       // position.current = onDrag({
  //       //   x: pos.x + event.movementX,
  //       // });
  //       // elem.style.transform = `translate(${pos.x}px)`;
  //     });
  //     const handleMouseUp = (e) => {
  //       e.target.style.userSelect = "auto";
  //       setPressed(false);
  //     };

  //     document.addEventListener("drag", handleMouseMove);
  //     document.addEventListener("drag", handleMouseUp);
  //     return () => {
  //       handleMouseMove.cancel();
  //       document.removeEventListener("mousemove", handleMouseMove);
  //       document.removeEventListener("mouseup", handleMouseUp);
  //     };

  //   }, [ imageRef ]);

  const onDragImage = (e) => {
    const handleMouseMove = throttle((event) => {
      if (!imageRef.current || !position.current) {
        return;
      }
      const pos = position.current;
      const elem = imageRef.current;
      // console.log(pos, elem)
      // position.current = onDrag({
      //   x: pos.x + event.movementX,
      // });
      // elem.style.transform = `translate(${pos.x}px)`;
      elem.style.left = setImageLeft(imageLeft + 1);
      // elem.style.left = `translate(${pos.x}%)`;

    });
    const handleMouseUp = (e) => {
      e.target.style.userSelect = "auto";
      setPressed(false);
    };

    document.addEventListener("drag", handleMouseMove);
    // document.addEventListener("drag", handleMouseUp);

    setImageWidth(imageWidth -1);
    setImageLeft(imageLeft  - 1);
  };

  const downs = (e) => {
    setOpenMoves(!0)
    moves(e)
  }

  const moves = (e) => {
    const wid = "100%";
    if (openMoves) {
      // console.log(openMoves)
      console.log(imageRef.current.offsetWidth)
      var t = imageRef.current.getBoundingClientRect().left,
        o = e.clientX - t;
      console.log(o)
      o >= imageRef.current.offsetWidth ? wid : wid = o < 0 ? 0 : o / imageRef.current.offsetWidth * 100 + "%"
    }
  }

  const ups = (e) => {
    // this.openMoves = !1
    (!1)
  }

  const getImgWidth = () => {
    var e = this
      , t = new Image;
    t.crossOrigin = "",
      t.src = this.imgss[1],
      t.onload = function () {
        e.skeletonVisible = !1
      }
  }


  return (
    <div>
      <div className='mt-12'>
        <div className=' text-center'>
          <p className=' text-2xl font-semibold'>
            SVR Advance AI Image Feature
          </p>
        </div>
      </div>


      <div className=" mt-12">
        <div className="flex justify-center px-12 ">

          <div className="moveChunk w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/1.jpg" lazy="loaded" />
                  </div>
                  <img alt="" className="lazyload clearImg" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/1-1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/1-1.jpg" lazy="loaded" />
                  <img onMouseMove={moves} onMouseDown={downs} onDrag={onDragImage} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Remove Unwanted Image</p>
                  <p className='mt-3 font-light text-sm  '>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>



          <div className="moveChunk w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/4.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/4.jpg" lazy="loaded" />
                  </div>
                  <img alt="" className="lazyload clearImg" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/4-1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/4-1.jpg" lazy="loaded" />
                  <img onMouseMove={moves} onMouseDown={downs} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Face cutout</p>
                  <p className='mt-3 font-light text-sm'>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>


          <div className="moveChunk w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/3.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/3.jpg" lazy="loaded" />
                  </div>
                  <img alt="" className="lazyload clearImg" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/3-1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/3-1.jpg" lazy="loaded" />
                  <img onMouseMove={moves} onMouseDown={downs} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Remove Unwanted Image</p>
                  <p className='mt-3 font-light text-sm  '>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>


        </div>


        <div className="flex justify-center px-12 ">
          <div className="moveChunk w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/5-1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/5-1.jpg" lazy="loaded" />
                  </div>
                  <img alt="" className="lazyload clearImg" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/5.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/5.jpg" lazy="loaded" />
                  <img onMouseMove={moves} onMouseDown={downs} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Enhance Photo</p>
                  <p className='mt-3 font-light text-sm  '>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>
          <div className="moveChunk w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/6-1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/6-1.jpg" lazy="loaded" />
                  </div>
                  <img alt="" className="lazyload clearImg" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/6.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/6.jpg" lazy="loaded" />
                  <img onMouseMove={moves} onMouseDown={downs} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Photo Colorizer</p>
                  <p className='mt-3 font-light text-sm  '>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>

          <div className="moveChunk w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/change-1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/change-1.jpg" lazy="loaded" />
                  </div>
                  <video className="lazyload clearImg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/change-1.mp4" muted="muted" loop="loop" autoplay="autoplay" playsinline="" t7-video-player-type="media" x5-video-player-type="h5-page" data-v-529e1f44="" jm_neat="196129796">
                    <source src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/change-1.mp4" type="video/mp4" data-v-529e1f44="" />
                    Your browser does not support video playback at the moment, try another one!
                  </video>
                  <img onMouseMove={moves} onMouseDown={downs} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Smart Anime</p>
                  <p className='mt-3 font-light text-sm  '>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>




        </div>

        <div className="flex justify-center px-12 ">
          <div className="moveChunk  w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/cartoon/cartoon-example.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/cartoon/cartoon-example.jpg" lazy="loaded" />
                  </div>
                  <img alt="" className="lazyload clearImg" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/cartoon/cartoon-example-result.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/cartoon/cartoon-example-result.jpg" lazy="loaded" />
                  <img onMouseMove={moves} onMouseDown={downs} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Smart Cartoon Selfie</p>
                  <p className='mt-3 font-light text-sm  '>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>
          <div className="moveChunk w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/11.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/11.jpg" lazy="loaded" />
                  </div>
                  <img alt="" className="lazyload clearImg" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/11-1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/11-1.jpg" lazy="loaded" />
                  <img onMouseMove={moves} onMouseDown={downs} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Smart Color Correction</p>
                  <p className='mt-3 font-light text-sm  '>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>


          <div className="moveChunk w-1/3">
            <div className="margin">
              <div className="marginBox">
                <div className="relative1 relative" >
                  <div className="posi absolute" style={{ width: `${imageWidth}%` }} >
                    <img alt="" className="lazyload originImg w-full" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9.jpg" lazy="loaded" />
                  </div>
                  <img alt="" className="lazyload clearImg" data-src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-1.jpg" src="https://d38b044pevnwc9.cloudfront.net/cutout-nuxt/home/9-1.jpg" lazy="loaded" />
                  <img onMouseMove={moves} onMouseDown={downs} draggable ref={imageRef} src="https://d38b044pevnwc9.cloudfront.net/site/en/assets/image/moveW.png" alt="" className="move cu bg-no-repeat" style={{ left: `${imageLeft}%` }} />
                </div>

                <div>
                  <p className='font-semibold text-lg'>Passport Marker</p>
                  <p className='mt-3 font-light text-sm  '>Remove Unwanted Image from the origin image</p>

                </div>

              </div>
            </div>
          </div>




        </div>
      </div>

    </div>
  )
}

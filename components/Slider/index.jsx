import React, { useCallback, useRef, useState } from "react"
import { Wrapper } from "./styles"

const Slider = ({ bImage, aImage, width}) => {

  const [aWidth, setAwidth] = useState(50)

  const handleRef = useRef()

  const moveDivisor = useCallback((e) => {
      setAwidth(e.target.value)
      handleRef.current.style.left = e.target.value+"%"
  }, [handleRef])

return (
  <Wrapper tWidth={width} aWidth={aWidth} bImage={bImage} aImage={aImage}>
      <div id="b-image">
          <figure id="a-image"/>
          <input type="range" name="range" id="slider" value={aWidth}  min="0" max="100" onInput={moveDivisor}/>
          <div id="handle" ref={handleRef}>
              <img src="/cursor.svg" alt="drag" />
          </div>
      </div>
  </Wrapper>
)
}

export default React.memo(Slider)
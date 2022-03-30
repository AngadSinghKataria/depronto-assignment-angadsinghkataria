import './Details.css'
import './Details.scss'
import { useSpring, a } from '@react-spring/web'
import React, { useState } from 'react'

function PrizeCard(props) {
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  console.log(props.bgimg);
  return (
        <div className="cardcontainer" onClick={() => set(state => !state)}>
        <a.div
          className={"c back"+props.bgimg}
          style={{ opacity: opacity.to(o => 1 - o), transform }}
        ><h1 className="PrizeH">Tap here to know more...</h1></a.div>
        <a.div
          className={"c front"+props.bgimg}
          style={{
            opacity,
            transform,
            rotateX: '180deg',
          }}
        ><h1 className="PrizeH">{props.cap}</h1></a.div>
      </div>
  );
}

export default PrizeCard;
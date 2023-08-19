import React, { useState } from 'react'
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import { ArrowRight } from '@mui/icons-material';
import { sliderItems } from "../data"

const Slider = () => {


    const [slideIndex, setSlideIndex] = useState(0);

    const itemsLength = sliderItems.length;

    const handleSlide=(direction)=>{
        if(direction==="left")
            setSlideIndex(slideIndex>0 ? slideIndex-1 : (itemsLength-1) )
        
        else if (direction==="right")
            setSlideIndex(slideIndex<(itemsLength-1) ? (slideIndex+1): 0 )

    }

  return (

    <div className="slider-container">
        <div className="slider-arrow left" onClick={()=>handleSlide("left")}>
            <ArrowLeft />
        </div>

        <div className="slider-wrapper">
        {
            sliderItems.map((item)=>(
                
                <div className="slide" key={item.id} style={
                    {
                        backgroundColor:"#"+item.bg,
                        transform:"translateX(-"+slideIndex*100+"vw)"
                    }
                }>
                    <div className="slider-imgContainer">
                        <img src={item.img} alt="" className="slider-img" />
                    </div>
                    <div className="slider-infoContainer">
                        <h1 className="slider-title">
                            {item.title}
                        </h1>
                        <p className="slider-desc">
                            {item.desc}
                        </p>
                        <button className="slider-btn">
                            SHOP NOW
                        </button>
                    </div>
                </div>

            ))
        }


        </div>

        <div className="slider-arrow right" onClick={()=>handleSlide("right")}>
            <ArrowRight />
        </div>
    </div>
  )
}

export default Slider
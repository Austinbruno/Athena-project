import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor';
interface AnimationProps {
  texts: Array<{
    heading: string
    subHeading: string
    description: string

  }>
}
const Animation = ({texts}: AnimationProps) => {



  const videos = [
    'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4',
    'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63413ff244f1dc616b7148a0_Mco-transcode.mp4',
    'https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/63455a67996ba248148c4e31_add-options%20(3)-transcode.mp4'
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  return (
    <div className="animate">
      <div className='animation'>
        {texts.map((text, index) => {
          return (
            <VisibilitySensor
              key={index}


              partialVisibility={true}
              onChange={(isVisible: boolean) => {
                if (isVisible) {
                  setCurrentVideoIndex(index)

                }
              }}
            >
              <div className='text' key={index} >
                <div className='content'>
                  <h2>{text.heading}</h2>
                  <h1>{text.subHeading}</h1>
                  <p>{text.description}</p>

                </div>

              </div>
            </VisibilitySensor>
          )

        })}


      </div>
      {videos.filter((v, i) => i === currentVideoIndex).map((video) => (<div key={video} className="video" >
        <video autoPlay loop={true} muted={true} data-object-fit="cover">
          <source src={video} data-wf-ignore="true"></source>
        </video>
      </div>))}


    </div>
  )
}

export default Animation
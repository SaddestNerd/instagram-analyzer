import React from "react"
import { CircleProgressBar, Icon } from "../../../../shared"
import "./analysingProfile.scss"

const AnalysingProfile = ({ progress }) => {
  return (
    <div className="analysing-profile-section">
      <div className="analysing-profile-block">
        <CircleProgressBar progress={progress} />
        {progress === 100 && (
          <div className="text-with-dots">
          <p className="title16-semibold-urbanist waiting-text">Wait, the server is still receiving data</p>
          <div className="loader-dots"></div>
        </div>
        )}
        <p className="title24-medium-urbanist">Analysing your account</p>
        <p className="title14-regular-urbanist">
          Your profile data is being processed, detailed profile analysis will
          be available in a few seconds
        </p>
        <div className="analysing-profile-clock">
          <div className="analysing-profile-img">
            <Icon
              type="clock"
              width={16}
              height={16}
              alt="icon"
              className="clock-img-block"
            ></Icon>
          </div>
          <p className="title14-regular-urbanist clock-text">
            From now on, your data is being recorded and tracked in real time.
            It takes time for our algorithms to analyse all the data, so{" "}
            <span className="title14-semibold-urbanist clock-text-second">
              the first analysis might not show the whole picture.
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AnalysingProfile

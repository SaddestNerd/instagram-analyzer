import React from "react"
import "./nextUpdate.scss"
import Icon from "../../../../shared/ui/Icons"
import useCountdownTimer from "../../../../shared/lib/hooks/useCountdownTimer"

const NextUpdate = () => {
  const hours = 24
  const { hoursRemaining, minutes, seconds } = useCountdownTimer(hours)

  return (
    <div className="next-update-section">
      <div className="next-update-block">
        <div>
          <p className="title14-regular-urbanist next-update-text">
            It takes time for our algorithm to analyze your profile data.
          </p>
          <p className="title14-regular-urbanist">
            Next update in{" "}
            <span className="title14-bold-urbanist">
              {hoursRemaining}h {minutes}m {seconds}s
            </span>
          </p>
        </div>
        <div className="next-update-iconbg">
          <Icon
            type="updateClock"
            alt="UpdateClockIcon"
            strokeColor="#315DF4"
          />
        </div>
      </div>
    </div>
  )
}

export default NextUpdate

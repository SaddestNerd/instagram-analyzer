import React from "react"
import * as Icons from "../lib/icons/icons"

const iconMapping = {
  logo: Icons.Logo,
}

const Icon = ({ type, width, height, color = "inherit", alt = "icon" }) => {
  const SvgIcon = iconMapping[type]

  if (!SvgIcon) {
    console.error(`Icon type "${type}" not found.`)
    return null
  }

  const styles = {
    width: width,
    height: height,
    display: "inline-block",
    fill: color,
  }

  if (typeof SvgIcon === "string") {
    return <img src={SvgIcon} alt={alt} style={styles} />
  }

  return <SvgIcon aria-label={alt} style={styles} />
}

export default Icon

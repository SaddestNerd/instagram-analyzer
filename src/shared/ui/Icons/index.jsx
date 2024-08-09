import React from "react"
import * as Icons from "../../lib/icons/icons"

const iconMapping = {
  arrow: Icons.Arrow,
  logo: Icons.Logo,
  inst: Icons.Inst,
  email: Icons.Email,
  openEye: Icons.OpenEye,
  closedEye: Icons.ClosedEye,
  userIcon: Icons.UserIcon,
}

const Icon = ({
  type,
  width,
  height,
  color,
  alt = "icon",
  className,
  strokeColor,
}) => {
  const SvgIcon = iconMapping[type]

  if (!SvgIcon) {
    return null
  }

  const styles = {
    width: width,
    height: height,
    display: "inline-block",
    fill: color,
    "--stroke-color": strokeColor,
  }

  if (typeof SvgIcon === "string") {
    return <img src={SvgIcon} alt={alt} style={styles} className={className} />
  }

  return <SvgIcon aria-label={alt} style={styles} />
}

export default Icon

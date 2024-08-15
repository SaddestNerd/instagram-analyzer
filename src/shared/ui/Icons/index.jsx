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
  instCreate: Icons.InstCreate,
  defence: Icons.Defence,
  clock: Icons.Clock,
  instCircleLoad: Icons.InstCircleLoad,
  privateIcon: Icons.PrivateIcon,
  notFoundIcon: Icons.NotFoundIcon,
  wrongIcon: Icons.WrongIcon,
  backIcon: Icons.BackIcon,
  checkEmailIcon: Icons.CheckEmailIcon,
  redExit: Icons.RedExit,
  reccomend: Icons.Reccomend,
  insights: Icons.Insights,
  recommendation: Icons.Recommendation,
  crookedArrow: Icons.CrookedArrow,
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

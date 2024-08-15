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
  likes: Icons.Likes,
  comments: Icons.Comments,
  lostFollowers: Icons.LostFollowers,
  newFollowers: Icons.NewFollowers,
  inactiveFollowers: Icons.InactiveFollowers,
  secretFans: Icons.SecretFans,
  yourFriends: Icons.YourFriends,
  yourFans: Icons.YourFans,
  updateClock: Icons.UpdateClock,
  insights: Icons.Insights,
  reccomend: Icons.Reccomend,
  crookedArrow: Icons.CrookedArrow,
  redExit: Icons.RedExit,
  news: Icons.News,
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

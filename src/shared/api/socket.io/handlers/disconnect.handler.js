import { disconnect } from "../../../../features/player/model/slice"

export const handleDisconnect = (dispatch) => {
  dispatch(disconnect())
}
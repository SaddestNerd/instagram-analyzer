import { connect } from "../../../../features/player/model/slice"

export const handleConnect = (dispatch) => {
  dispatch(connect())
}
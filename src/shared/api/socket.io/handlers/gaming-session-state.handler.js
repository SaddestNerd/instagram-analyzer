import {
  gamingSessionFinish,
  gamingSessionInit,
  gamingSessionStart,
  currentMultiplier,
  playerMakeBet,
  playerMakeCashout,
  playerCancelBet,
} from "../../../../features/gaming-session/model/slice"
import { emitActionEnum } from "../../../../shared/utils"

export const handleGamingSessionState = (event, dispatch) => {
  const { data } = event
  const action = data.action

  switch (action) {
    case emitActionEnum.GAMING_SESSION.FINISH:
      dispatch(gamingSessionFinish(data))
      break
    case emitActionEnum.GAMING_SESSION.INIT:
      dispatch(gamingSessionInit(data))
      break
    case emitActionEnum.GAMING_SESSION.START:
      dispatch(gamingSessionStart(data))
      break
    case emitActionEnum.CURRENT_MULTIPLIER:
      dispatch(currentMultiplier(data))
      break
    case emitActionEnum.PLAYER.MAKE_BET:
      dispatch(playerMakeBet(data))
      break
    case emitActionEnum.PLAYER.MAKE_CASHOUT:
      dispatch(playerMakeCashout(data))
      break
    case emitActionEnum.PLAYER.CANCEL_BET:
      dispatch(playerCancelBet(data))
      break
    default:
      console.warn("Unhandled action type:", action)
      break
  }
}

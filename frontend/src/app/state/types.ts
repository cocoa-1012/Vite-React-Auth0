import { GameSetupState } from "./slices/gameSetup";
import { SessionState } from "./slices/session/types";

export type RootState = {
  session: SessionState;
  gameSetup: GameSetupState;
};

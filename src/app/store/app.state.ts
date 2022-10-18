import { AssetState } from "./user-assets/userAssets.reducer";
import { UserState } from "./user/user.reducer";

export interface AppState {
    assetsInfo: AssetState;
    user:       UserState;
}
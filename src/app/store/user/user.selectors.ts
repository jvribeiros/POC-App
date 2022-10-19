import { createSelector, select } from "@ngrx/store";
import { AppState } from '../app.state';
import { UserState } from "./user.reducer";

export const selectUser = (state: AppState) => state.user;

export const selectUserInfo = createSelector(
    selectUser,
    (state: UserState) => state.user
);

export const selectAssetsList = createSelector(
    selectUser,
    (state: UserState) => state.assetsList
);

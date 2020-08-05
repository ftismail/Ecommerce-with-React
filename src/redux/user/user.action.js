import {userActionsTypes} from './user.types'
export const userAction = user => ({
    type: userActionsTypes.SET_CURRENT_USER,
    payload: user
  });
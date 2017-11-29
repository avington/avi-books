import * as profileActions from './../actions/profile-actions';

export function profileReducer(state = {}, action: profileActions.Action) {
  switch (action.type) {
    case profileActions.LOAD_PROFILE_SUCCESS:
      return action.payload;

    default : {
      return state;
    }
  }
}

import { ActionType } from '../../constants/action-constants';
import { Action } from '../actions/index';

// const initialState = {};

export const agreementsReducer = (state: {}, action: Action) => {
  switch (action.type) {
    case ActionType.GET_AGREEMENT_BY_UID:
      return {
        ...state,
        currentAgreement: action.payload,
      };

    case ActionType.BROADCAST_AGREEMENT:
      return {
        ...state,
      };

    case ActionType.GET_PUBLIC_KEYS:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
};

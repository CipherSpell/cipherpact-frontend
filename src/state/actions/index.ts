// import axios from "axios";

import { ActionType } from "../../constants/action-constants";

export type Action = {
  type: string;
  payload?: string; // set to string for now until we know what the payload will be sending
};

export const getAgreement = (uid: any) => {
  return async (dispatch: any) => {
    //let agreement = await axios.post('');
    dispatch({
      type: ActionType.GET_AGREEMENT_BY_UID,
      payload: "placeholder agreement",
    });
  };
};

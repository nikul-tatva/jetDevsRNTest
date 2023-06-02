import { Dispatch } from "redux";

export const addToFavorite = (item: any) => {
    return (dispatch: Dispatch) => {
      dispatch({
        type: 'ADD_TO_FAVORITES',
        payload: item,
      });
    };
  };
  
  export function removeFromFavorite (item: any) {
    return (dispatch: Dispatch) => {
      dispatch({
        type: 'REMOVE_FROM_FAVORITES',
        payload: item,
      });
    };
  };
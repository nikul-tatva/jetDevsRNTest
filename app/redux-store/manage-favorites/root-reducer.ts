import { AnyAction } from "redux";

interface nameData {
  title?: string,
  first?: string,
  last?: string
}

export interface userItem {
  id: any,
  name?: nameData,
  location?: any,
  phone?: string,
  picture?: any,
  email: string
}

interface initialFavoriteState {
  favoriteItems: userItem[],
  counter: number
}

const initialState: initialFavoriteState = {
    favoriteItems: [],
    counter: 0
  };
  
  const favoriteReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
      case 'REMOVE_FROM_FAVORITES':
        let newFavoriteItems = state.favoriteItems.filter(item => action.payload.email !== item.email );
        return Object.assign({}, state, {
          counter: state.counter - 1,
          favoriteItems: newFavoriteItems,
        });
      case 'ADD_TO_FAVORITES':
        return Object.assign({}, state, {
          counter: state.counter + 1,
          favoriteItems: [...state.favoriteItems, action.payload],
        });
      default:
        return state;
    }
  };
  
  export default favoriteReducer;
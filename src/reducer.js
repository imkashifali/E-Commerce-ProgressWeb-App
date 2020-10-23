export const initialState = {
  basket: [],
};

export const getBasketAmount = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    //First Case
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    //Second Case
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `cant remove prodoct(id ${action.id}) as it's not in basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    //Third Case
    case "set_User":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;

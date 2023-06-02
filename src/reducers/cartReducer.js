import * as actions from "../actionTypes/index";
const userReducer = (state, action) => {
    switch (action.type) {
        case actions.STORE_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };

        case actions.ADDPRODUCT:

            return {
                ...state,
                cart: state.cart.find((cartItem) => cartItem.id === action.payload.id)
                    ? state.cart.map((cartItem) =>
                        cartItem.id === action.payload.id
                            ? { ...cartItem, count: cartItem.count + 1 }
                            : cartItem
                    )
                    : [...state.cart, { ...action.payload, count: 1 }],
            };

        case actions.INCREASE_PROUCT_QUANTITY: {
            return {
                ...state,
                cart: state.cart.map((cartItem) =>
                    cartItem.id === action.payload.id
                        ? { ...cartItem, count: cartItem.count + 1 }
                        : cartItem
                ),
            };
        }

        case actions.DECREASE_PRODUCT_QUANTITY: {
            return {
                ...state,
                cart: state.cart.map((cartItem) =>
                    cartItem.id === action.payload.id
                        ? {
                            ...cartItem,
                            count: cartItem.count > 1 ? cartItem.count - 1 : 1,
                        }
                        : cartItem
                ),
            };
        }

        case actions.REMOVE_PRODUCT: {
            return {
                ...state,
                cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
            };
        }

        case actions.GET_ITEM_COUNT: {
            return {
                ...state.cart.reduce((acc, data) => (acc += data.count), 0),
            };
        }

        default:
            return state;
    }
};

export default userReducer;

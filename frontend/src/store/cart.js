import actions from '../actions/actiontypes'

const initialState = {
  selectedItems: []
}


export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.addToCart:
      const prev = state.selectedItems.find(item => item.item.name == action.payload.item.name)
      let items;

      if (prev) {
        items = state.selectedItems.map((item) => {
          if (item.item.name === action.payload.item.name) {
            return {
              item: {
                ...item.item
              },
              quantity: parseInt(item.quantity) + parseInt(action.payload.quantity)
            }
          } else {
            return item;
          }
        })
      } else {
        items = state.selectedItems.concat([{...action.payload}])
      }
      return {
        ...state,
        selectedItems: items
      }
    default:
      return state
  }
}
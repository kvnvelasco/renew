import actions from '../actions/actiontypes'

const initialState = {
  selectedItems: []
}


export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actions.addToCart:
      return {
        ...state,
        selectedItems: state.selectedItems.concat([{...action.payload}])
      }  
    default:
      return state
  }
}
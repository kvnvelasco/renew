
import actions from './actiontypes'

export function addToCart(item, qty) {
  return dispatch => {
    dispatch({
      type: actions.addToCart,
      payload:{
        item,
        quantity: qty
      }
    })
  }
}
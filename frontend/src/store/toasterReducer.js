import { ERROR_TOAST, INFO_TOAST, SUCCESS_TOAST, CLOSE_TOAST} from '../actions/toast.js' 
const initialState = {
  toasts: []
}


const toastReducer = (state = initialState, action) => {

    switch (action.type) {
      case ERROR_TOAST:
        return {
            ...state,
            toasts: [...state.toasts,
                action.payload
            ]
        }
      case INFO_TOAST:
        return {
            ...state,
            toasts: [...state.toasts,
                action.payload
            ]
        }
      case SUCCESS_TOAST:
        return {
            ...state,
            toasts: [...state.toasts,
                action.payload
            ]
        }
        case CLOSE_TOAST:
          console.log('toasts')
          console.log(state.toasts)
          return {
            ...state,
            toasts: state.toasts.slice(1)
          }
      default:
        return state
    }
  }

  export default toastReducer
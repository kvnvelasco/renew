export const ERROR_TOAST = "ERROR_TOAST"
export const INFO_TOAST = "INFO_TOAST"
export const SUCCESS_TOAST = "SUCCESS_TOAST"
export const CLOSE_TOAST = "CLOSE_TOAST"

// const toastAction = {
//     'error': ERROR_TOAST,
//     'info': INFO_TOAST,
//     'success': SUCCESS_TOAST
    

// }

  
export function dispatchErrorToast (message) {
    return {
        type: ERROR_TOAST,
        payload: {
            type: 'error',
            message: message
        }
    }
}

export function dispatchSuccessToast (message) {
    return {
        type: SUCCESS_TOAST,
        payload: {
            type: 'success',
            message: message
        }
    }
}


export function dispatchInfoToast (message) {
    return {
        type: INFO_TOAST,
        payload: {
            type: 'info',
            message: message
        }
    }
}

export function closeToast () {
    return {
        type: CLOSE_TOAST,
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { closeToast } from '../actions/toast'
import './toaster.css'

const mapStoreToProps = (store) => {
    return {
        storeState: store
    }
  }

class Toaster extends Component {

    displayToasts = (toasts) => {
        if (!toasts.length) return null;
        setTimeout(() => {
            this.props.dispatch(closeToast())
        }, 5000)
        return toasts.map((toast) => {
            return(
              <div className={toast.type}>
                <strong>{toast.message}</strong>
              </div>
            )
        })
    }

    render () {
        const toasts = this.props.storeState.toastReducer.toasts
        return (
            <div className='toasts--container'>
                {this.displayToasts(toasts)}
            </div>
        )
    }
}

export default connect(mapStoreToProps)(Toaster)
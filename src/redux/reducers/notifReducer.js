import { createReducer } from '@reduxjs/toolkit';
import { hideNotifMessage, showNotifMessage } from '../actions/notifActions';


const notificationReducer = createReducer(false, {
  [showNotifMessage]: () => true,
  [hideNotifMessage]: () => false,
});

export default notificationReducer;
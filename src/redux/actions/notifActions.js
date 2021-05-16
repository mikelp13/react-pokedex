import { createAction } from '@reduxjs/toolkit';

const showNotifMessage = createAction('notification/showNotifMessage');
const hideNotifMessage = createAction('notification/hideNotifMessage');

export { showNotifMessage, hideNotifMessage };
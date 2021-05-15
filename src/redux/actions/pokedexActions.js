import { createAction } from "@reduxjs/toolkit";

export const getPokemonsRequest = createAction("pokemon/getRequest");
export const getPokemonsSuccess = createAction("pokemon/getSuccess");
export const getPokemonsError = createAction("pokemon/getError");

export const getPokemonsInfoRequest = createAction("pokemon/getInfoRequest");
export const getPokemonsInfoSuccess = createAction("pokemon/getInfoSuccess");
export const getPokemonsInfoError = createAction("pokemon/getInfoError");

export const setFilter = createAction("pokemon/setFilter");
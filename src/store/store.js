import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo-slice";
import { useDispatch, useSelector, useStore } from "react-redux";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todo: todoReducer,
    },
  });
};

export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;
export const useAppStore = useStore;

export default makeStore;

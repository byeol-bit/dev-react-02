import { type AppDispatch, type RootState } from "../store";
import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
const useTypedDispatch = () => useDispatch<AppDispatch>();

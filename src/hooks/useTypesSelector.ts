import { TypedUseSelectorHook, useSelector } from "react-redux";
import { rootState } from "../store";

export const useTypesSelector: TypedUseSelectorHook<rootState> = useSelector;

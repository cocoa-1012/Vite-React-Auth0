/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GameSetupState,
  addData,
  gameSetupSelectors,
} from "../../state/slices/gameSetup";

const useCurrentValue = () => {
  const data: GameSetupState = useSelector(gameSetupSelectors.gameSetup);

  const [values, setValues] = useState<GameSetupState>(data);
  const dispatch = useDispatch();
  const updateToStore = () => {
    console.log(values);
    dispatch(addData(values));
  };
  const setCurrentValue = (data: any) => {
    setValues((p: any) => {
      return { ...p, ...data };
    });
  };

  return { currentValue: values, setCurrentValue, updateToStore };
};

export default useCurrentValue;

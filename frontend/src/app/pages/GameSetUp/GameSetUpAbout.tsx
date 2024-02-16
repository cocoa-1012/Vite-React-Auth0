/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "../../components/Button";
import DateField from "../../components/DateField";
import Description from "../../components/Description";
import InputField from "../../components/InputField/InputField";
import TextAreaField from "../../components/TextAreaField/TextAreaField";
import useCurrentValue from "../../hooks/useCurrentValue";
import { GameSetUpProps } from "./types";

function GameSetUpAboutPage({ isSignUp, setCurrentStep }: GameSetUpProps) {
  const { currentValue, setCurrentValue, updateToStore } = useCurrentValue();

  return (
    <div className="w-full mx-auto flex flex-col gap-4 items-center">
      <Description text="Set the details about your game night" />
      <InputField
        label="Title"
        placeholder="Enter the title of your game night"
        onValueChange={(e: any) => {
          setCurrentValue({ title: e.target.value });
        }}
        value={currentValue?.title || ""}
      />
      <TextAreaField
        label="Description"
        placeholder="Describe your game night"
        value={currentValue?.description || ""}
        onValueChange={(e: any) => {
          setCurrentValue({ description: e.target.value });
        }}
      />
      <div className="flex w-full gap-8 justify-between">
        <DateField
          label="Date"
          value={currentValue?.date || ""}
          onValueChange={(e: any) => {
            setCurrentValue({ date: e.target.value });
          }}
        />
        <InputField
          label="Time"
          placeholder="hh:mm"
          value={currentValue?.time || ""}
          onValueChange={(e: any) => {
            setCurrentValue({ time: e.target.value });
          }}
        />
      </div>
      <InputField
        label="Place"
        placeholder="Your game night's location"
        value={currentValue?.place || ""}
        onValueChange={(e: any) => {
          setCurrentValue({ place: e.target.value });
        }}
      />
      <div className="flex w-full justify-end">
        <Button
          text="Next"
          type="button"
          onClick={() => {
            updateToStore();
            setCurrentStep(isSignUp ? "collection" : "games");
          }}
        />
      </div>
    </div>
  );
}

export default GameSetUpAboutPage;

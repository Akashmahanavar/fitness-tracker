import * as React from "react";
import StackNavigator from "./StackNavigator";
import { FitnessContext } from "./context";

export default function App() {
  return (
    <FitnessContext>
      <StackNavigator />
    </FitnessContext>
  );
}

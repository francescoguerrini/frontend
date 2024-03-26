import { RadioGroup, Radio } from "@nextui-org/react";

export default function App() {
  return (
    <RadioGroup label="Evasione" orientation="horizontal">
      <Radio value="uomo">Normale</Radio>
      <Radio value="donna">Urgente</Radio>
    </RadioGroup>
  );
}

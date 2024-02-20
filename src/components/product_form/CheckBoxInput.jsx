import { RadioGroup, Radio } from "@nextui-org/react";

export default function App() {
  return (
    <RadioGroup label="Sesso" orientation="horizontal">
      <Radio value="uomo">Uomo</Radio>
      <Radio value="donna">Donna</Radio>
    </RadioGroup>
  );
}

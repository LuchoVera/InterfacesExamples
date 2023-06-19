import React, { useState } from 'react';
import { ReactNode } from 'react';
import './App.css';
import CustomButton from './common/CustomButton';
import CustomTextBox from './common/CustomTextBox';

const App = (): JSX.Element => {
  const [textBoxValue, setTextBoxValue] = useState("");

  // Create a new instance of CustomButton
  const customButton = new CustomButton({ name: "My Button" });

  // Create a new instance of CustomTextBox and pass value and onChange props
  const customTextBox = new CustomTextBox({
    value: textBoxValue,
    onChange: handleTextBoxChange
  });

  // Get the ReactNode components from CustomButton and CustomTextBox
  const customButtonComponent: ReactNode = customButton.getComponent();
  const customTextBoxComponent: ReactNode = customTextBox.getComponent();

  // Handler function for textbox value change
  function handleTextBoxChange(value: string) {
    setTextBoxValue(value);
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {customTextBoxComponent}
        {customButtonComponent}
      </div>
    </div>
  );
};

export default App;

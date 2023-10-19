import React, { useState } from "react";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import Select from "../components/Select";

const TestPage = () => {
  const [formData, setFormData] = useState({
    textInput: "",
    textArea: "",
    select: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="p-4">
      <TextInput
        label="Text Input"
        name="textInput"
        value={formData.textInput}
        onChange={handleChange}
      />
      <TextArea
        label="Text Area"
        name="textArea"
        value={formData.textArea}
        onChange={handleChange}
      />
      <Select
        label="Select"
        name="select"
        value={formData.select}
        onChange={handleChange}
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ]}
      />
    </div>
  );
};

export default TestPage;

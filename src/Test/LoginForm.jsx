import React, { useEffect, useState } from "react";
import useForm from "../Patterns/useForm";

export const LoginForm = () => {
  const initialValues = { multimetro: false, pinza: false, fuentes: false };
  const [values, handleChange, resetForm] = useForm(initialValues);
  const [dataFake, setDataFake] = useState({});
  const handleSubmit = (event) => {
    event.preventDefault();
    setDataFake(values);
    resetForm();
  };

  useEffect(() => {
    console.log(dataFake);
  }, [dataFake]);

  const formFields = [
    { name: "multimetro", type: "checkbox", label: "Multimetros" },
    { name: "pinza", type: "checkbox", label: "Pinzas" },
    { name: "fuentes", type: "checkbox", label: "Fuentes" },
  ];
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <div key={field.name}>
          <input
            type={field.type}
            name={field.name}
            checked={values[field.name]}
            onChange={handleChange}
          />
          <label htmlFor={field.name}>{field.label}</label>
        </div>
      ))}
      <button type="submit">Filtrar</button>
    </form>
  );
};

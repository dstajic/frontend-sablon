import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "../../styles/createFormBlueprintStyle.scss";

const CreateFormBlueprint = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [errorMsg, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        number: Number(data.number),
        number2: Number(data.number2),
        text: String(data.text),
        date: data.date || null,
      };

      // await createItem(payload);

      console.log("Item created", payload);
    } catch (error) {
      if (error?.response?.status) {
        if (error.response.status === 404) {
          setErrorMessage(error.response.data?.error || "Resource not found.");
        } else if (error.response.status === 500) {
          setErrorMessage(
            "Server is temporarily unavailable. Please try again later."
          );
        } else {
          setErrorMessage(`Error: ${error.response.status}`);
        }
      } else if (error?.request) {
        setErrorMessage(
          "The server is not responding. Please try again later."
        );
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }

      setShowError(true);
      console.log("Create failed:", error);
    }
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Create Item</h3>

        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          placeholder="Text"
          {...register("text", {
            required: "Text is required",
          })}
        />

        <label htmlFor="date">Date</label>
        <input type="date" id="date" {...register("date")} />

        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          placeholder="Number"
          {...register("number", {
            required: "Number is required",
          })}
        />

        <label htmlFor="number2">Number 2</label>
        <input
          type="number"
          id="number2"
          placeholder="Number 2"
          {...register("number2", {
            required: "Second number is required",
          })}
        />

        {showError && <p className="errorMessage">{errorMsg}</p>}

        <button id="submitBtn" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateFormBlueprint;

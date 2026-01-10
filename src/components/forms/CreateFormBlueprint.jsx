import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../../styles/createFormBlueprintStyle.scss";

import ErrorPopup from "../sharedComponents/errorPopupBlueprint";
import SuccessPopup from "../sharedComponents/sucessPopupBlueprint";
import ConfirmationPopup from "../sharedComponents/confirmationPopupBlueprint";
// import { createItem } from "../../services/itemService";

const CreateFormBlueprint = () => {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const [errorMsg, setErrorMessage] = useState("");
  const [successMsg, setSuccessMessage] = useState("");

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [formData, setFormData] = useState(null);

  const handleCreate = async () => {
    try {
      const payload = {
        ...formData,
        number: Number(formData.number),
        number2: Number(formData.number2),
        text: String(formData.text),
        date: formData.date || null,
      };

      // await createItem(payload);

      console.log("Item created", payload);

      setSuccessMessage("Item successfully created!");
      setShowSuccess(true);
    } catch (error) {
      setErrorMessage("Failed to create item.");
      setShowError(true);
    } finally {
      setShowConfirmation(false);
    }
  };

  const onSubmit = (data) => {
    setFormData(data);
    setShowConfirmation(true);
  };

  return (
    <div className="formContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Create Item</h3>

        <label>Text</label>
        <input {...register("text", { required: true })} />

        <label>Date</label>
        <input type="date" {...register("date")} />

        <label>Number</label>
        <input type="number" {...register("number", { required: true })} />

        <label>Number 2</label>
        <input type="number" {...register("number2", { required: true })} />

        <button id="submitBtn" type="submit">
          Create
        </button>
      </form>

      {/* ERROR */}
      {showError && (
        <ErrorPopup
          message={errorMsg}
          timeOut={2}
          onClose={() => setShowError(false)}
        />
      )}

      {/* SUCCESS */}
      {showSuccess && (
        <SuccessPopup
          message={successMsg}
          timeOut={2}
          onClose={() => setShowSuccess(false)}
        />
      )}

      {/* CONFIRMATION */}
      {showConfirmation && (
        <ConfirmationPopup
          message="Are you sure you want to create this item?"
          onYes={handleCreate}
          onNo={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default CreateFormBlueprint;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { itemUpdate } from "../../services/itemService";
import "../../styles/editFormBlueprintStyle.scss";

import ErrorPopup from "../sharedComponents/errorPopupBlueprint";
import SuccessPopup from "../sharedComponents/sucessPopupBlueprint";
import ConfirmationPopup from "../sharedComponents/confirmationPopupBlueprint";

const EditFormBlueprint = ({ item, onClose }) => {
  const { register, handleSubmit } = useForm({ mode: "onChange" });

  const [errorMsg, setErrorMessage] = useState("");
  const [successMsg, setSuccessMessage] = useState("");

  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const onSubmit = async (data) => {
    setShowConfirmation(true);
  };

  const handleConfirmEdit = async () => {
    setShowConfirmation(false);

    try {
      const payload = {
        ...dataRef,
        id: item.id,
        date: dataRef.date ? new Date(dataRef.date).toISOString() : null,
      };

      await itemUpdate(item.id, payload);

      setSuccessMessage("Item successfully updated!");
      setShowSuccess(true);

      setTimeout(() => onClose(), 2000);
    } catch (error) {
      setErrorMessage("Failed to update item.");
      setShowError(true);
    }
  };

  const [dataRef, setDataRef] = useState(null);

  const handleSubmitWrapper = (data) => {
    setDataRef(data);
    setShowConfirmation(true);
  };

  const formattedDate = item.date
    ? new Date(item.date).toISOString().split("T")[0]
    : "";

  return (
    <div className="editFormContainer">
      <form className="form" onSubmit={handleSubmit(handleSubmitWrapper)}>
        <h3>Edit Item</h3>

        <label>Text</label>
        <input
          defaultValue={item.text}
          {...register("text", { required: true })}
        />

        <label>Date</label>
        <input type="date" defaultValue={formattedDate} {...register("date")} />

        <label>Number</label>
        <input
          type="number"
          defaultValue={item.number}
          {...register("number", { required: true })}
        />

        <label>Number 2</label>
        <input
          type="number"
          defaultValue={item.number2}
          {...register("number2", { required: true })}
        />

        <button type="submit">Edit</button>
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
          message="Are you sure you want to edit this item?"
          onYes={handleConfirmEdit}
          onNo={() => setShowConfirmation(false)}
        />
      )}
    </div>
  );
};

export default EditFormBlueprint;

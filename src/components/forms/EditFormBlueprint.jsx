import React from "react";
import { useForm } from "react-hook-form";
import { itemUpdate } from "../../services/itemService";
import "../../styles/editFormBlueprintStyle.scss";

const EditFormBlueprint = ({ item, onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    try {
      const payload = {
        ...data,
        id: item.id,
        date: data.date ? new Date(data.date).toISOString() : null,
      };

      await itemUpdate(item.id, payload);

      console.log(`Edited item with id: ${item.id}`, payload);
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  const formattedDate = item.date
    ? new Date(item.date).toISOString().split("T")[0]
    : "";

  return (
    <div className="editFormContainer">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Edit Item</h3>

        <label htmlFor="text">Text</label>
        <input
          type="text"
          id="text"
          placeholder="Text"
          defaultValue={item.text}
          {...register("text", {
            required: "Text is required",
          })}
        />

        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          defaultValue={formattedDate}
          {...register("date")}
        />

        <label htmlFor="number">Number</label>
        <input
          type="number"
          id="number"
          placeholder="Number"
          defaultValue={item.number}
          {...register("number", {
            required: "Number is required",
          })}
        />

        <label htmlFor="number2">Number 2</label>
        <input
          type="number"
          id="number2"
          placeholder="Number 2"
          defaultValue={item.number2}
          {...register("number2", {
            required: "Second number is required",
          })}
        />

        <button id="submitBtn" type="submit">
          Edit
        </button>
      </form>
    </div>
  );
};

export default EditFormBlueprint;

import React, { useState } from "react";

import SuccessPopup from "../components/sharedComponents/sucessPopupBlueprint";
import ErrorPopupBlueprint from "../components/sharedComponents/errorPopupBlueprint";
import ConfirmationPopup from "../components/sharedComponents/confirmationPopupBlueprint";

const PopupTestPanel = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "16px",
          padding: "24px",
        }}
      >
        <button onClick={() => setShowSuccess(true)}>Open Success Popup</button>

        <button onClick={() => setShowError(true)}>Open Error Popup</button>

        <button onClick={() => setShowConfirmation(true)}>
          Open Confirmation Popup
        </button>
      </div>

      {/* SUCCESS */}
      {showSuccess && (
        <SuccessPopup
          message="This is a success message!"
          timeOut={2}
          onClose={() => setShowSuccess(false)}
        />
      )}

      {/* ERROR */}
      {showError && (
        <ErrorPopupBlueprint
          message="This is an error message!"
          timeOut={2}
          onClose={() => setShowError(false)}
        />
      )}

      {/* CONFIRMATION */}
      {showConfirmation && (
        <ConfirmationPopup
          message="Are you sure you want to continue?"
          onYes={() => {
            console.log("Confirmed!");
            setShowConfirmation(false);
          }}
          onNo={() => setShowConfirmation(false)}
        />
      )}
    </>
  );
};

export default PopupTestPanel;

import React from "react";

function HandleError(error, setErrorMessage, setShowError, badRequestmessage = "", NotFoundMessage = "", entity = "Item") {
    if (error.status) {
        switch (error.status) {
            case 400:
                setErrorMessage(`${badRequestmessage}. Please check your input and try again.`);
                break;
            case 401:
                message = "You are not authorized. Please log in again.";
                break;
            case 403:
                message = "You do not have permission to access this resource.";
                break;
            case 404:
                setErrorMessage(`${NotFoundMessage} was not found.`);
                break;
            case 500:
                setErrorMessage("Server is temporarily unavailable. Please refresh or try again later.");
                break;
            default:
                setErrorMessage(`Error: ${error.status}`);
        }
    } else if (error.request) {
        setErrorMessage("The server is not responding. Please try again later.");
    } else {
        setErrorMessage("Something went wrong. Please try again.");
    }

    setShowError(true);
    console.log(`An error occurred while processing ${entity}:`, error);
}
export default HandleError;

/*U .jsx fajlu se stavlja:

   catch (error) {
   HandleError(
      error,
      setErrorMessage,
      setShowError,
      setIsLoading,
      "",       // badRequestMessage
      `User with email: ${formData.email}`,         // NotFoundMessage
      "User"        // entity
   );
}
   
*/


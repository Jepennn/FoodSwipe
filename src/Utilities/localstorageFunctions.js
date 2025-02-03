// This is a file to hold out store file clean. This file is used to
// save and get the state from the session storage.

export function saveToSessionStorage(objectToSave) {
  sessionStorage.setItem("appState", JSON.stringify(objectToSave));
}

//Function to get the state from the session storage
export function getSessionState() {
  try {
    const state = sessionStorage.getItem("appState");

    //If state is not found return undefined
    return state ? JSON.parse(state) : undefined;
  } catch (error) {
    console.log("Failed to get state", error);
  }
}

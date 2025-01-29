// Show popup message when textarea is focused
function showPopup() {
    alert("Enter any special requests, like extra sugar or decaf!");
}

// Reset confirmation message
function resetMessage() {
    document.getElementById('resetMsg').innerText = "Reset Successful";
}

// Confirm form submission
function confirmSubmit() {
    return confirm("Do you want to submit?");
}

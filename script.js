//function to handle form submission and display the preview
function handleFormSubmission() {
    //get form values
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var contactNumber = document.getElementById("contactnumber").value;
    var professionalSummary = document.getElementById("professionalsummary").value;
    //validate inputs
    if (!firstName || !lastName || !email || !contactNumber || !professionalSummary) {
        alert("Please fill out all fields!");
        return;
    }
    //Create an object to store the data
    var personalDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNumber: contactNumber,
        professionalSummary: professionalSummary,
    };
    //display thre data in a preview section
    displayResumePreview(personalDetails);
}
//function to display the preview of the resume
function displayResumePreview(details) {
    var previewContainer = document.getElementById("resumePreview");
    previewContainer.innerHTML = "\n    <h2>Resume Preview</h2>\n    <p><strong>Name:</strong>".concat(details.firstName, " ").concat(details.lastName, "</p>\n    <p><strong>Email:</strong>").concat(details.email, "</p>\n    <p><strong>Contact Number:</strong>").concat(details.contactNumber, "</p>\n    <p><strong>Professional Summary:</strong>").concat(details.professionalSummary, "</p>\n\n     ");
}
//attach event listener to the form
var form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    handleFormSubmission();
});

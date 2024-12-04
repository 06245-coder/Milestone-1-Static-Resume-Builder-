//define the interface for personal details
interface PersonalDetails{
    firstName : string;
    lastName :string;
    email: string;
    contactNumber:string;
    professionalSummary:string;
}
//function to handle form submission and display the preview
function handleFormSubmission(){
    //get form values
    const firstName=(document.getElementById("firstname")as HTMLInputElement).value;
    const lastName=(document.getElementById("lastname")as HTMLInputElement).value;
    const email=(document.getElementById("email")as HTMLInputElement).value;
    const contactNumber=(document.getElementById("contactnumber")as HTMLInputElement).value;
    const professionalSummary=(document.getElementById("professionalsummary")as HTMLTextAreaElement).value;
    
//validate inputs
if(!firstName || !lastName || !email || !contactNumber ||!professionalSummary){
    alert("Please fill out all fields!");
    return;
}
//Create an object to store the data
const personalDetails: PersonalDetails={
    firstName,
    lastName,
    email,
    contactNumber,
    professionalSummary,

};
//display thre data in a preview section
displayResumePreview(personalDetails);
}
//function to display the preview of the resume
function displayResumePreview(details:PersonalDetails){
    const previewContainer=document.getElementById("resumePreview")!;
    previewContainer.innerHTML=`
    <h2>Resume Preview</h2>
    <p><strong>Name:</strong>${details.firstName} ${details.lastName}</p>
    <p><strong>Email:</strong>${details.email}</p>
    <p><strong>Contact Number:</strong>${details.contactNumber}</p>
    <p><strong>Professional Summary:</strong>${details.professionalSummary}</p>

     `;
    }
     //attach event listener to the form
     const form=document.querySelector("form")!;
     form.addEventListener("submit" ,(event)=>{
        event.preventDefault();
        handleFormSubmission();
     });

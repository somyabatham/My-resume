let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
            });
            document.querySelector("header nav a[href*=" + id + ']').classList.add('active');
        }
    });
    
    let header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 100);

    
});







// document.getElementById('contactForm').addEventListener('submit', async function(event) {
//     event.preventDefault(); // Prevent form submission
    
//     try {
//         // Get form data
//         const fullName = document.getElementById('fullName').value.trim();
//         const emailAddress = document.getElementById('emailAddress').value.trim();
//         const mobileNumber = document.getElementById('mobileNumber').value.trim();
//         const emailSubject = document.getElementById('emailSubject').value.trim();
//         const message = document.getElementById('message').value.trim();
        
//         // Form validation
//         if (!fullName || !emailAddress || !mobileNumber || !emailSubject || !message) {
//             alert('Please fill out all fields.');
//             return;
//         }

//         // Prepare data to send to backend service
//         const formData = {
//             fullName: fullName,
//             emailAddress: emailAddress,
//             mobileNumber: mobileNumber,
//             emailSubject: emailSubject,
//             message: message
//         };

//         // Example using fetch API:
//         const response = await fetch('https://localhost:3000/send-email', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//             // If the email is successfully sent, you can redirect the user to a thank you page
//             window.location.href = 'thank-you.html';
//         } else {
//             // Handle errors, such as displaying an error message to the user
//             alert('Failed to send email. Please try again later.');
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert('An error occurred. Please try again later.');
//     }
// });




























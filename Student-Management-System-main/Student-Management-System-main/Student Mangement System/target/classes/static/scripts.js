// // scripts.js
// document.addEventListener('DOMContentLoaded', () => {
//     fetchStudents();
// });

// document.getElementById('studentForm').addEventListener('submit', registerStudent);
// document.getElementById('updateForm').addEventListener('submit', saveUpdatedStudent);

// const modal = document.getElementById('updateModal');
// const span = document.getElementsByClassName('close')[0];

// span.onclick = function() {
//     modal.style.display = 'none';
// }

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = 'none';
//     }
// }

// function registerStudent(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const contactDetails = document.getElementById('contactDetails').value;
//     const address = document.getElementById('address').value;
//     const pincode = document.getElementById('pincode').value;

//     const student = {
//         name,
//         contactDetails,
//         address,
//         pincode
//     };

//     fetch('http://localhost:8080/students', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(student)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Student registered:', data);
//         addStudentToTable(data);
//         document.getElementById('studentForm').reset(); // Clear the form after submission
//     })
//     .catch(error => console.error('Error:', error));
// }

// function fetchStudents() {
//     fetch('http://localhost:8080/students')
//     .then(response => response.json())
//     .then(data => {
//         data.forEach(student => addStudentToTable(student));
//     })
//     .catch(error => console.error('Error:', error));
// }

// function addStudentToTable(student) {
//     const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
//     const newRow = table.insertRow();

//     newRow.innerHTML = `
//         <td>${student.name}</td>
//         <td>${student.contactDetails}</td>
//         <td>${student.address}</td>
//         <td>${student.pincode}</td>
//         <td>
//             <button onclick="showUpdateModal('${student.id}', '${student.name}', '${student.contactDetails}', '${student.address}', '${student.pincode}')">Update</button>
//             <button onclick="deleteStudent('${student.id}')">Delete</button>
//         </td>
//     `;
// }

// function showUpdateModal(id, name, contactDetails, address, pincode) {
//     document.getElementById('updateId').value = id;
//     document.getElementById('updateName').value = name;
//     document.getElementById('updateContactDetails').value = contactDetails;
//     document.getElementById('updateAddress').value = address;
//     document.getElementById('updatePincode').value = pincode;
//     modal.style.display = 'block';
// }

// function saveUpdatedStudent(e) {
//     e.preventDefault();

//     const id = document.getElementById('updateId').value;
//     const name = document.getElementById('updateName').value;
//     const contactDetails = document.getElementById('updateContactDetails').value;
//     const address = document.getElementById('updateAddress').value;
//     const pincode = document.getElementById('updatePincode').value;

//     const student = {
//         name,
//         contactDetails,
//         address,
//         pincode
//     };

//     fetch(`http://localhost:8080/students/${id}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(student)
//     })
//     .then(response => response.json())
//     .then(data => {
//         console.log('Student updated:', data);
//         location.reload(); // Reload the page to see the updated student list
//     })
//     .catch(error => console.error('Error:', error));
// }

// function deleteStudent(id) {
//     fetch(`http://localhost:8080/students/${id}`, {
//         method: 'DELETE'
//     })
//     .then(() => {
//         console.log('Student deleted');
//         location.reload(); // Reload the page to see the updated student list
//     })
//     .catch(error => console.error('Error:', error));
// }



document.addEventListener('DOMContentLoaded', () => {
    fetchStudents();
});

document.getElementById('studentForm').addEventListener('submit', registerStudent);
document.getElementById('updateForm').addEventListener('submit', saveUpdatedStudent);

const modal = document.getElementById('updateModal');
const span = document.getElementsByClassName('close')[0];

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function registerStudent(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const contactDetails = document.getElementById('contactDetails').value;
    const address = document.getElementById('address').value;
    const pincode = document.getElementById('pincode').value;

    const student = {
        name,
        contactDetails,
        address,
        pincode
    };

    fetch('http://localhost:8080/students/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Student registered:', data);
        addStudentToTable(data);
        document.getElementById('studentForm').reset(); // Clear the form after submission
    })
    .catch(error => console.error('Error:', error));
}

function fetchStudents() {
    fetch('http://localhost:8080/students')
    .then(response => response.json())
    .then(data => {
        data.forEach(student => addStudentToTable(student));
    })
    .catch(error => console.error('Error:', error));
}

function addStudentToTable(student) {
    const table = document.getElementById('studentsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    newRow.innerHTML = `
        <td>${student.name}</td>
        <td>${student.contactDetails}</td>
        <td>${student.address}</td>
        <td>${student.pincode}</td>
        <td>
            <button onclick="showUpdateModal('${student.id}', '${student.name}', '${student.contactDetails}', '${student.address}', '${student.pincode}')">Update</button>
            <button onclick="deleteStudent('${student.id}')">Delete</button>
        </td>
    `;
}

function showUpdateModal(id, name, contactDetails, address, pincode) {
    document.getElementById('updateId').value = id;
    document.getElementById('updateName').value = name;
    document.getElementById('updateContactDetails').value = contactDetails;
    document.getElementById('updateAddress').value = address;
    document.getElementById('updatePincode').value = pincode;
    modal.style.display = 'block';
}

function saveUpdatedStudent(e) {
    e.preventDefault();

    const id = document.getElementById('updateId').value;
    const name = document.getElementById('updateName').value;
    const contactDetails = document.getElementById('updateContactDetails').value;
    const address = document.getElementById('updateAddress').value;
    const pincode = document.getElementById('updatePincode').value;

    const student = {
        name,
        contactDetails,
        address,
        pincode
    };

    fetch(`http://localhost:8080/students/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(student)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Student updated:', data);
        location.reload(); // Reload the page to see the updated student list
    })
    .catch(error => console.error('Error:', error));
}

function deleteStudent(id) {
    fetch(`http://localhost:8080/students/${id}`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('Student deleted');
        location.reload(); // Reload the page to see the updated student list
    })
    .catch(error => console.error('Error:', error));
}

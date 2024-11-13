// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
const form = document.getElementById('addForm');
const employeeTable = document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
const count = document.getElementById('empCount');
count.innerHTML = employeeTable.rows.length - 1;

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const extension = document.getElementById('extension').value;
    const email = document.getElementById('email').value;
    const department = document.getElementById('department').value;

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    const newRow = employeeTable.insertRow(-1);

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    const idCell = newRow.insertCell(0);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    idCell.appendChild(document.createTextNode(id));
    const nameCell = newRow.insertCell(1);
    nameCell.appendChild(document.createTextNode(name));
    const extensionCell = newRow.insertCell(2);
    extensionCell.appendChild(document.createTextNode(extension));
    const emailCell = newRow.insertCell(3);
    emailCell.appendChild(document.createTextNode(email));
    const departmentCell = newRow.insertCell(4);
    departmentCell.appendChild(document.createTextNode(department));

    // CREATE THE DELETE BUTTON
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('X'));
    newRow.appendChild(deleteBtn);

    // UPDATE EMPLOYEE COUNT
    count.innerHTML = employeeTable.rows.length - 1;

    // DELETE EMPLOYEE WITH CONFIRMATION
    deleteBtn.addEventListener('click', (e) => {
        if (confirm('Are you sure you want to delete ' + name + '?')) {
            employeeTable.deleteRow(newRow.rowIndex);
            count.innerHTML = employeeTable.rows.length - 1;
        }
    })

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus

})

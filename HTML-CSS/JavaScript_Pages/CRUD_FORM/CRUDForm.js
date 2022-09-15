var selectedRow = null;
function onSubmitForm()
{
    if(validate()!=false)
    {
        var formData = readData();
        if(selectedRow==null)
        {
            insertNewRecord(formData);
        }
        else
        {
            updateRecord(formData);
        }
        resetForm();
    }
}
function readData()
{
    var formData={};
    formData["fname"]=document.getElementById("fname").value;
    formData["UserId"]=document.getElementById("UserId").value;
    formData["email"]=document.getElementById("email").value;
    formData["pass"]=document.getElementById("pass").value;
    formData["conPass"]=document.getElementById("conPass").value;
    return formData;
}
function insertNewRecord(data)
{
    var table = document.getElementById("RegisteredList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.UserId;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.pass;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.conPass;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = "<input type='button' value='Edit' onclick='onEdit(this)'><input type='button' value='Delete' onclick='onDelete(this)'>";
    selectedRow=null;
}
function resetForm()
{
    document.getElementById("fname").value="";
    document.getElementById("UserId").value="";
    document.getElementById("email").value="";
    document.getElementById("pass").value="";
    document.getElementById("conPass").value="";
}
function onEdit(td)
{
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("UserId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("pass").value = selectedRow.cells[3].innerHTML;
    document.getElementById("conPass").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(data)
{
    selectedRow.cells[0].innerHTML = data.fname;
    selectedRow.cells[1].innerHTML = data.UserId;
    selectedRow.cells[2].innerHTML = data.email;
    selectedRow.cells[3].innerHTML = data.pass;
    selectedRow.cells[4].innerHTML = data.conPass;
}
function onDelete(td)
{
    if(confirm("Are you sure to delete this record permanently?"))
    {
        row = td.parentElement.parentElement;
        document.getElementById("RegisteredList").deleteRow(row.rowIndex);
    }
}
function validate()
{
    var fname = document.forms[0]["fname"];
    var UserId = document.forms[0]["UserId"];
    var email = document.forms[0]["email"];
    var pass = document.forms[0]["pass"];
    var conPass = document.forms[0]["conPass"];

    // Validation process using if
    if(fname.value=="")
    {
        alert("Enter your Name\nThis is a required field");
        fname.focus();
        return false;
    }
    if(UserId.value=="")
    {
        alert("Enter your UserId\nThis is a required field");
        UserId.focus();
        return false;
    }
    if(email.value=="")
    {
        alert("Enter your Email\nThis is a required field");
        email.focus();
        return false;
    }
    if(pass.value=="")
    {
        alert("Enter your Password\nThis is a required field");
        pass.focus();
        return false;
    }
    if(conPass.value=="")
    {
        alert("Enter confirm Password field\nThis is a required field");
        conPass.focus();
        return false;
    }
}

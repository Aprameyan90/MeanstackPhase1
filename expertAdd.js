function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
     resetForm();
}
function readFormData() {
    var formData = {}      
    formData.name = document.getElementById("name").value;  
    return formData;                                            
}

function insertNewRecord(data) {
var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
var newRow = table.insertRow(table.length); 
var cell1 = newRow.insertCell(0);          
cell1.innerHTML = data.name                  
var cell2 = newRow.insertCell(1);           
cell2.innerHTML = "<a href='#' onClick='onDelete(this)'>Delete</a>"                
}

function onDelete(obj){

var row = obj.parentElement.parentElement;  
    document.getElementById("employeeList").deleteRow(row.rowIndex);
}

function resetForm() {
    document.getElementById("name").value="";
 
}

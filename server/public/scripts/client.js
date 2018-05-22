$(document).ready(onReady);

// globals
let totalMonthlySalary = 0;
let inputIDs = ['firstName', 'lastName', 'idNumber', 'jobTitle', 'annualSalary'];

function onReady(){
  $('#submitBtn').on('click', addEmployee);
  displayMonthlyCosts();
}

function addEmployee(){
  // check that all inputs have values
  if($('#firstName').val() && $('#lastName').val() && $('#idNumber').val()
     && $('#jobTitle').val() && $('#annualSalary').val()){
       // store the information
       let firstName = $('#firstName').val();
       let lastName = $('#lastName').val();
       let idNumber = $('#idNumber').val();
       let jobTitle = $('#jobTitle').val();
       let annualSalary = parseInt($('#annualSalary').val());

       // calculate monthly costs
       totalMonthlySalary += annualSalary / 12;

       // append information to the DOM
       let outputString = `<tr><td>${firstName}</td><td>${lastName}</td>
                           <td>${idNumber}</td><td>${jobTitle}</td>
                           <td>${annualSalary}</td><td><button onclick="deleteEmployee()">Delete</button></td></tr>`;
       $('#employeeTable').append(outputString);

       // clear the input fields
       clearInputs();

       // append monthly costs to the to DOM
       displayMonthlyCosts();

     } else {
       alert('please enter all information!');
     }
}

function clearInputs(){
  for(id of inputIDs){
    $('#' + id).val('');
  }
}

function deleteEmployee(){
  
}

function displayMonthlyCosts(){
  $('#total').empty();
  $('#total').append(`<h2>Total Monthly Cost
                     $<span>${totalMonthlySalary}</span>`);
  // If the total monthly cost exceeds $20,000:
  if(totalMonthlySalary > 20000){
    // add a red background color to the total monthly cost.
    $('#total span').css('background-color', 'red');
  }
}

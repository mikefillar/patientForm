let firstName = document.getElementById('firstName');
let middleName = document.getElementById('middleName');
let lastName = document.getElementById('lastName');
let address = document.getElementById('address');
let birthDate = document.getElementById('birthdate');
let phoneNumber = document.getElementById('phoneNumber');
let checkboxes = document.querySelectorAll('input[type="checkbox"]');
let patientForm = document.getElementById('patientForm');
patientForm.onsubmit = getPatientInfo;

function getPatientInfo(event){
    event.preventDefault();

    //firstname value checker
    let fname = firstName.previousElementSibling;
    (firstName.value == '' )? fname.innerHTML = 'This is required' : firstName = firstName.value;

    //middlename value checker
    let mname = middleName.previousElementSibling;
    (middleName.value == '' )? mname.innerHTML = 'This is required' : middleName = middleName.value;

    //middlename value checker
    let lname = lastName.previousElementSibling;
    (lastName.value == '' )? lname.innerHTML = 'This is required' : lastName = lastName.value;

    //address value checker
    let add = address.previousElementSibling;
    (address.value == '' )? add.innerHTML = 'This is required' : address = address.value;

    //birthdate value checker
    let bdate = birthDate.previousElementSibling;
    (birthDate.value == '' )? bdate.innerHTML = 'This is required' : birthDate = birthDate.value;

    //phonenumber value checker
    let phone = phoneNumber.previousElementSibling;
    (phoneNumber.value =='')? phone.innerHTML = 'This is required' : phoneNumber = phoneNumber.value;

    //gender value
    let gender = document.querySelector('input[name="gender"]:checked');
    let fmale = document.querySelector('.fmale');
    (gender!=null)? gender = gender.value : fmale.innerHTML = 'This is required';

    //symptoms checker
    let symptoms = document.querySelector('#symptoms');
    let symp = symptoms.previousElementSibling;
    (symptoms.value == '')? symp.innerHTML = 'This is required' : symptoms = symptoms.value;

    //medication checker
    let med = document.querySelector('input[name="medication"]:checked');
    let inputMed = document.getElementById('medicationText')
    let medication = '';
    let yesNo = document.querySelector('.yesNo');
    (med == null)? yesNo.innerHTML = 'This is required' : '';
    (med!=null && med.value=='Yes')? medication = inputMed.value : '';
    (med!=null && med.value=='No')? medication ='No' : '';

    //medical history checker
    let checkValues = [];
    let inputOthers = document.getElementById('inputOthers');
    checkboxes.forEach(box=>{
        (box.checked==true)? checkValues.push(box.value): '';
        if(box.checked.value ==='Others'){
            checkValues.push(inputOthers.value);
        }
    });

    let patient = {
        firstName : firstName,
        middleName : middleName,
        lastName : lastName,
        address : address,
        birthDate : birthDate,
        phoneNumber : phoneNumber,
        gender : gender,
        medHistory : checkValues,
        symptoms : symptoms,
        medication : medication
    }
    console.table(patient);

    if(confirm('Are you sure you want to add new patient?')){
        alert('Patient successfully added!');
        localStorage.setItem(firstName,JSON.stringify(patient));
    }
};

function medEnable(){
    document.getElementById('medicationText').disabled = false;
};
function medDisable(){
    document.getElementById('medicationText').disabled = true;
};
function enableOthers(){
    document.getElementById('inputOthers').disabled = false;
}
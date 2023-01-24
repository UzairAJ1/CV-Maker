window.addEventListener('load', () => {
const result_name=localStorage.getItem('Name');
    const label2 = document.getElementById('cookie1');
    label2.innerHTML =result_name;

    const result_F_name=localStorage.getItem('F_Name');
    const label3 = document.getElementById('cookie2');
    label3.innerHTML =result_F_name;

    const result_Gender=localStorage.getItem('Gender');
    const label4 = document.getElementById('cookie3');
    label4.innerHTML =result_Gender;

    const result_Email=localStorage.getItem('Email');
    const label5 = document.getElementById('cookie4');
    label5.innerHTML =result_Email;

    const result_Contact=localStorage.getItem('Contact');
    const label6 = document.getElementById('cookie5');
    label6.innerHTML =result_Contact;

    const result_Address=localStorage.getItem('Address');
    const label7 = document.getElementById('cookie6');
    label7.innerHTML =result_Address;

    const result_Website=localStorage.getItem('Website');
    const label8 = document.getElementById('cookie7');
    label8.innerHTML =result_Website;

    const result_Title=localStorage.getItem('Title');
    const label9 = document.getElementById('cookie8');
    label9.innerHTML =result_Title;

    const result_Institute=localStorage.getItem('Institute_Name');
    const label10 = document.getElementById('cookie9');
    label10.innerHTML =result_Institute;

    const result_Institute_city=localStorage.getItem('Institute_City');
    const label11 = document.getElementById('cookie10');
    label11.innerHTML =result_Institute_city;

    const result_Year=localStorage.getItem('Year');
    const label12 = document.getElementById('cookie11');
    label12.innerHTML =result_Year;

    const result_Total_marks=localStorage.getItem('Total_marks');
    const label13 = document.getElementById('cookie12');
    label13.innerHTML =result_Total_marks;

    const result_Obtained_marks=localStorage.getItem('Obtained_marks');
    const label14 = document.getElementById('cookie13');
    label14.innerHTML =result_Obtained_marks;

    const result_Position=localStorage.getItem('Position');
    const label15 = document.getElementById('cookie14');
    label15.innerHTML =result_Position;

    const result_City=localStorage.getItem('City');
    const label16 = document.getElementById('cookie15');
    label16.innerHTML =result_City;

    const result_duration=localStorage.getItem('duration');
    const label17 = document.getElementById('cookie16');
    label17.innerHTML =result_duration;

    const result_Summary=localStorage.getItem('Summary');
    const label18 = document.getElementById('cookie17');
    label18.innerHTML =result_Summary;
})
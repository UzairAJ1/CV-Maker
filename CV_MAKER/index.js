function toggleTable1() {

    document.getElementById("myTable1").classList.toggle("hidden1");
    var name = document.getElementById('Degree_Title');
    var label = document.getElementById('ins_label');
    if (name.value == 2) { label.innerHTML = "Student";
     const Title1="Student";
      localStorage.setItem("Title",Title1); }
    if (name.value == 3) { label.innerHTML = "Working"; 
    const Title2="Working";
      localStorage.setItem("Title",Title2);
    }
    
    var name1 = document.getElementById('Institute_name');
    var label1 = document.getElementById('ins-label2');
    label1.innerHTML = name1.value;
    var Result1 = document.getElementById('Institute_name').value;
    localStorage.setItem("Institute_Name",Result1);

    var name2 = document.getElementById('Institute_city');
    var label2 = document.getElementById('ins-label3');
    label2.innerHTML = name2.value;
    var Result2 = document.getElementById('Institute_city').value;
    localStorage.setItem("Institute_City",Result2);

    var name3 = document.getElementById('Passing_year');
    var label3 = document.getElementById('ins-label4');
    if (name3.value == 2) { label3.innerHTML = "2010";
     const Title3="2010";
     localStorage.setItem("Year",Title3); }
    if (name3.value == 3) { label3.innerHTML = "2015";
    const Title4="2015";
     localStorage.setItem("Year",Title4); }
    if (name3.value == 4) { label3.innerHTML = "2005";
    const Title5="2005";
    localStorage.setItem("Year",Title5); }
    if (name3.value == 5) { label3.innerHTML = "2020";
    const Title6="2020";
    localStorage.setItem("Year",Title6); }

    var name4 = document.getElementById('total_marks');
    var label4 = document.getElementById('ins-label5');
    label4.innerHTML = name4.value;
    var Result3 = document.getElementById('total_marks').value;
    localStorage.setItem("Total_marks",Result3);

    var name5 = document.getElementById('marks_obtained');
    var label5 = document.getElementById('ins-label6');
    label5.innerHTML = name5.value;
    var Result4 = document.getElementById('marks_obtained').value;
    localStorage.setItem("Obtained_marks",Result4);

}
function toggleTable2()
    {
    document.getElementById("myTable2").classList.toggle("hidden2");

    /*var name4 = document.getElementById('Institute1');
    var label4 = document.getElementById('in-label');
    label4.innerHTML = name4.value;*/

    var name = document.getElementById('position');
    var label = document.getElementById('in-label2');
    label.innerHTML = name.value;
    var Result5 = document.getElementById('position').value;
    localStorage.setItem("Position",Result5);

    var name1 = document.getElementById('city');
    var label1 = document.getElementById('in-label3');
    label1.innerHTML = name1.value;
    var Result6 = document.getElementById('city').value;
    localStorage.setItem("City",Result6);

    var name3 = document.getElementById('duration');
    var label3 = document.getElementById('in-label4');
    if (name3.value == 2) { label3.innerHTML = "1 Year";
    const Title7="1 Year";
    localStorage.setItem("duration",Title7); }
    if (name3.value == 3) { label3.innerHTML = "2 Year";
    const Title8="2 Year";
    localStorage.setItem("duration",Title8); }
    if (name3.value == 4) { label3.innerHTML = "3 Year";
    const Title9="3 Year";
    localStorage.setItem("duration",Title9); }
    if (name3.value == 5) { label3.innerHTML = "4 Year";
    const Title10="4 Year";
    localStorage.setItem("duration",Title10); }

    var name2 = document.getElementById('responsibilities');
    var label2 = document.getElementById('in-label5');
    label2.innerHTML = name2.value;

    
    
}
function CV()
{
    window.open('CV.html','_blank');
    Set_label();
}
function Set_label()
{
    const name=document.getElementById('name').value;
    localStorage.setItem("Name",name);

    const F_name=document.getElementById('F_name').value;
    localStorage.setItem("F_Name",F_name);

    if (document.getElementById('M_gender').checked) {
    const Gender="male";

      localStorage.setItem("Gender",Gender);

    }
    if (document.getElementById('F_gender').checked) {
        const Gender="Female";
    
          localStorage.setItem("Gender",Gender);
    
      }

    const Email=document.getElementById('email').value;
      localStorage.setItem("Email",Email);


    const Contact=document.getElementById('contact_no').value;
      localStorage.setItem("Contact",Contact);

    const Address=document.getElementById('Adrress1').value;
      localStorage.setItem("Address",Address);

      const Website=document.getElementById('Website1').value;
      localStorage.setItem("Website",Website);

      const Summary=document.getElementById('txtarea').value;
      localStorage.setItem("Summary",Summary);
    return;
}

//Here we define JSON text for one appointment
const appointmentJSON='{"appointment" : {"title":"Group meeting", "location":"Room - 30", "Date":"2022-11-22", "time":"10:30", "participants":[{"first_name":"Ahsan", "surname":"Nazmul", "phone":"04045667", "participation":true}, {"first_name":"Maria", "surname":"Jane", "phone":"0501234567", "participation":false}, {"first_name":"Mehdi", "surname":"hasan", "phone":"0301234567", "participation":true}] }}';
//Here we parse the JSON text to JSON object
let appointmentObj = JSON.parse(appointmentJSON);

// -----printing details of appointment and participants----------

alert("Appointment data=>\n\nTitle: " +appointmentObj.appointment.title + "\nLocation: " + appointmentObj.appointment.location + "\nDate: "+appointmentObj.appointment.Date + "\nTime: " + appointmentObj.appointment.time +
"\n\nParticipant No 1:\nFirst name: " + appointmentObj.appointment.participants[0].first_name + 
"\nLast name: "+ appointmentObj.appointment.participants[0].surname + 
"\nPhone: "+ appointmentObj.appointment.participants[0].phone +
"\nParticipation in the Meeting: "+ appointmentObj.appointment.participants[0].participation +
"\n\nParticipant No 2:\nFirst name: " + appointmentObj.appointment.participants[1].first_name + 
"\nLast name: "+ appointmentObj.appointment.participants[1].surname + 
"\nPhone: "+ appointmentObj.appointment.participants[1].phone +
"\nParticipation in the Meeting: "+ appointmentObj.appointment.participants[1].participation
+
"\n\nParticipant No 3:\nFirst name: " + appointmentObj.appointment.participants[2].first_name + 
"\nLast name: "+ appointmentObj.appointment.participants[2].surname + 
"\nPhone: "+ appointmentObj.appointment.participants[2].phone +
"\nParticipation in the Meeting: "+ appointmentObj.appointment.participants[2].participation
);

//---------end of first task-------

//Here we define a JSON text, which includes the information of an array of appointments
const appointmentArrayJSON='{"appointments" : [' +
    '{"title":"Study Meeting","location":"Room-20", "Date":"2022-03-22", "time":"09:30",' +
'"participants":[{"first_name":"Ahsan", "surname":"Nazmul", "phone":"0401234567", "participation":true},{"first_name":"Naim", "surname":"ahmed", "phone":"0501234567", "participation":false}, {"first_name":"Waime", "surname":"Robinson", "phone":"0301234567", "participation":true}]},' +

'{"title":"Cultural Meeting", "location":"Room-50", "Date":"2022-12-25", "time":"11:30",' +
'"participants":[{"first_name":"Ali", "surname":"Haider", "phone":"0601234567", "participation":true}, {"first_name":"Lisa", "surname":"Nova", "phone":"0501234567", "participation":false}]},' +

'{"title":"Sport Meeting", "location":"Lobby", "Date":"2022-11-20", "time":"14:30",' +
'"participants":[{"first_name":"Tarzan", "surname":"Holm", "phone":"0401234567", "participation":true}, {"first_name":"Thor", "surname":"Rod", "phone":"0501234567", "participation":false}, {"first_name":"Black", "surname":"Panther", "phone":"0301234567", "participation":true}]}' +
']}';
//Here we convert the JSON array text to JavaScript object
let appointmentArrayObj = JSON.parse(appointmentArrayJSON);
let data="Appointments array=>";
for(let i=0; i<appointmentArrayObj.appointments.length; i++){
    data +="\n" + "Appointment Name: "+appointmentArrayObj.appointments[i].title   +"\nLocation: " +appointmentArrayObj.appointments[i].location + "\nDate: "+appointmentArrayObj.appointments[i].Date + "\nTime: "+appointmentArrayObj.appointments[i].time+"\nParticipants: ";//'\n' not showing last participant all list
    for(let j=0; j<appointmentArrayObj.appointments[i].participants.length; j++){
        data +=appointmentArrayObj.appointments[i].participants[j].first_name + " " + appointmentArrayObj.appointments[i].participants[j].surname + ", " + appointmentArrayObj.appointments[i].participants[j].phone + ", " + "Participating: "+appointmentArrayObj.appointments[i].participants[j].participation + "\n";
    }

    data+="----------------";
       
    }
alert(data);
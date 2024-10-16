
const appointmentJSON='{"appointment" : {"title":"Group meeting", "location":"Room - 130", "Date":"2022-12-05", "time":"10:30", "participants":[{"first_name":"Arnab", "surname":"Dhar", "phone":"0449480313", "participation":true}, {"first_name":"Ali", "surname":"khalifa", "phone":"0559480313", "participation":false}, {"first_name":"Mehdi", "surname":"khan", "phone":"0339480313", "participation":true}] }}';
//Here we parse the JSON text to JSON object
let appointmentObj = JSON.parse(appointmentJSON);

// -----printing details of appointment and participants----------

alert("Appointment data=\n\nTitle: " +appointmentObj.appointment.title + "\nLocation: " + appointmentObj.appointment.location + "\nDate: "+appointmentObj.appointment.Date + "\nTime: " + appointmentObj.appointment.time +
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
    '{"title":"Study Meeting","location":"Room-120", "Date":"2022-12-06", "time":"09:30",' +
'"participants":[{"first_name":"Arnab", "surname":"Dhar", "phone":"0449480313", "participation":true},{"first_name":"Ali", "surname":"khalifa", "phone":"0559480313", "participation":false}, {"first_name":"Ram", "surname":"mondal", "phone":"0229480313", "participation":true}]},' +

'{"title":"Cultural Meeting", "location":"Room-150", "Date":"2022-12-20", "time":"11:30",' +
'"participants":[{"first_name":"mehadi", "surname":"Haider", "phone":"0779480313", "participation":true}, {"first_name":"Lisa", "surname":"halder", "phone":"0559480313", "participation":false}]},' +

'{"title":"Sport Meeting", "location":"Lobby", "Date":"2022-12-25", "time":"14:30",' +
'"participants":[{"first_name":"Taria", "surname":"prabashini", "phone":"0401234567", "participation":true}, {"first_name":"Thor", "surname":"Rod", "phone":"0501234567", "participation":false}, {"first_name":"vim", "surname":"Panther", "phone":"0301234567", "participation":true}]}' +
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
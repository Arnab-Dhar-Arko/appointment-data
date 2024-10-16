
//Here we define a JSON text, which includes the information of an array of appointments
const appointmentArrayJSON='{"appointments" : [' +
    '{"title":"Study Meeting","location":"Room-120", "Date":"2022-12-06", "time":"09:30",' +
'"participants":[{"first_name":"Arnab", "surname":"dhar", "phone":"0559480313", "participation":true},{"first_name":"ali", "surname":"ahmed", "phone":"0339480313", "participation":true}, {"first_name":"Waime", "surname":"Robinson", "phone":"0301234567", "participation":false}]},' +

'{"title":"Cultural Meeting", "location":"Room-50", "Date":"2022-12-20", "time":"11:30",' +
'"participants":[{"first_name":"Ali", "surname":"Haider", "phone":"0559480313", "participation":true}, {"first_name":"naim", "surname":"Nova", "phone":"0339480313", "participation":false}]},' +

'{"title":"Sport Meeting", "location":"Lobby", "Date":"2022-12-25", "time":"14:30",' +
'"participants":[{"first_name":"Tarzan", "surname":"khan", "phone":"0559480313", "participation":true}, {"first_name":"black", "surname":"Rod", "phone":"0339480313", "participation":false}, {"first_name":"Black", "surname":"Panther", "phone":"0301234567", "participation":true}]}' +
']}';
//Here we convert the JSON array text to JavaScript object
let appointmentArrayObj = JSON.parse(appointmentArrayJSON);
//----loop through JSON object------
let info = prompt("Which property do you want to know?\n=>'title','location','date','time','participant");
let data1= "";
switch (info){
    case 'title':
        for(let i=0; i<appointmentArrayObj.appointments.length; i++){
            data1 +="\n" + "Appointment Name: "+appointmentArrayObj.appointments[i].title;};
            break;
    case 'location':
        for(let i=0; i<appointmentArrayObj.appointments.length; i++){
            data1 +="\n" + "Location: "+appointmentArrayObj.appointments[i].location;};
            break;
    case 'date':
        for(let i=0; i<appointmentArrayObj.appointments.length; i++){
            data1 +="\n" + "Date of the meetings: "+appointmentArrayObj.appointments[i].Date;};
            break;
    case 'time':
        for(let i=0; i<appointmentArrayObj.appointments.length; i++){
            data1 +="\n" + "Time of the meetings: "+appointmentArrayObj.appointments[i].time;};
            break;
    case 'participant':
        for(let i=0; i<appointmentArrayObj.appointments.length; i++){
            data1 +="\nParticipants: ";
            for(let j=0; j<appointmentArrayObj.appointments[i].participants.length; j++){
                data1 +=appointmentArrayObj.appointments[i].participants[j].first_name + " " + appointmentArrayObj.appointments[i].participants[j].surname + ", " + appointmentArrayObj.appointments[i].participants[j].phone + ", " + "Participating: "+appointmentArrayObj.appointments[i].participants[j].participation + "\n";}
        }
}
alert(data1);

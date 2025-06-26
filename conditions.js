
//if conditions
const age=18
if (age>=18)
{
    console.log('you are major');
}
else (age<=18)
{
    console.log('you are minar');
}

//else if

const mark=39
if (mark>=90)
{
    console.log('A+');
}
else if(mark>=80)
{
    console.log('B+');
}
else if (mark>=40)
{
    console.log('C+');
}
else {
    console.log('Failed');
}

//switch conditions

const day='monday';
switch (day){
    case "monday":
        console.log('start of week');
    break;
    case 'friday':
        console.log('end of week');
    break;
    
    default:
        console.log('A regular day ')
}

//for loop

for(let i=0; i<=5 ; i++) {

    console.log('number is:'+i);
}
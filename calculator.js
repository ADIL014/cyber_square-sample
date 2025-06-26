let numbera=30;
let numberb=20;
let opertaion='/';

switch(opertaion){
    case'+':
    console.log('result:'+(numbera+numberb));
    break;
    case'-':
    console.log('result:'+(numbera-numberb));
    break;
    case'*':
    console.log('result:'+(numbera*numberb));
    break;
    case'/':
    if (numberb!==0){
         console.log('result:'+(numbera/numberb));
    }
    else{
        console.log('incorrect value');
    }
    break;
    default:
        console.log('invalid operations');

}
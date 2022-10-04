let sumbitbutton=document.getElementById('sumbitbutton');
let outputtext=document.getElementById('outputtext');

let number=[Math.floor(Math.random()*10)]

sumbitbutton.addEventListener('click',function(){
    var input=document.getElementById('userinput').value;
    if(input==number){
        outputtext.innerHTML=`you guess right,your number was${number}`;
    }
    else if(input<number)
    {
        outputtext.innerHTML="you guess too low";
    };
    if(input>number)
    {
        outputtext.innerHTML="you guess to high";
    }

});

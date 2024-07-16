var keyNumber=parseInt(Math.random()*19)+1; // [0,1] *20 =>[0,20]  [0,19]  [1;20]
console.log('key number '+keyNumber);
var attempts=3;
if(attempts===0){
    console.log("yengildingiz");
messageInput.textContent="GAME OVER";
}

function checkNumber(){
    var number1 = document.getElementById("number").value;

    if (number1 < 1 || number1 > 20) {
        var input = document.getElementById("number");
        input.value='';
        alert("Sonni 1 va 20 orasidan tanlang");
    }
}+

function getData(){
    var input = document.getElementById("number");
    var messageInput = document.getElementById("message");


    var number = parseInt(input.value);

    if(number===keyNumber){
        var body=document.getElementsByTagName("body");
        document.getElementById("keyNumber").textContent=keyNumber;
        body[0].classList.add("winner");
        body[0].classList.remove("winner1") 
        messageInput.textContent="Tabriklaymiz, yutdingiz";
        const button = document.getElementById('test');
        button.disabled = true;
``
    }else if(keyNumber < number){
        if(attempts===1){
            console.log("yengildingiz");
            messageInput.textContent="GAME OVER";
            var body=document.getElementsByTagName("body");
            body[0].classList.add("winner1");
            body[0].classList.remove("winner")
            const button = document.getElementById('test');
            button.disabled = true;   
        }else{
            attempts--;
            messageInput.textContent="💯 Qolgan urinish: "+attempts+"(Bu son katta)";
           
        }

    }
    else if (keyNumber > number){
        if(attempts===1){
            console.log("yengildingiz");
            messageInput.textContent="GAME OVER";
            var body=document.getElementsByTagName("body");
            body[0].classList.add("winner1");
            body[0].classList.remove("winner")
            const button = document.getElementById('test');
            button.disabled = true;
        }else{
            attempts--;
            messageInput.textContent="💯 Qolgan urinish: "+attempts+"(Bu son kichik)";            
        }
    }
 



    input.value='';
}

function restart(){
    location.reload();
}


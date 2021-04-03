const messagegenerator = () =>{
    const random = Math.floor(Math.random()*3)
    const random1 = Math.floor(Math.random()*3)
    let randomMessage = [];
    //console.log("This is random number " + random);
    switch (random){
        case 0:
            randomMessage = messageSet1;
        case 1:
            randomMessage = messageSet2;
        case 2:
            randomMessage = messageSet3;
    }


    return "Your secret message: '" + randomMessage[random1]+ "'";
}


const messageSet1 = ['Thank you', 'Good Bye','See you again'];

const messageSet2 = ['Could you allow me to access your personel information?','If you do not let me do it, you will be go to hell','Why do you it?'];

const messageSet3 = ['How are you?', 'Where are you from?','What do you do?'];

//console.log(messageSet1);
console.log(messagegenerator());
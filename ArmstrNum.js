function chkArmnum(){
    var armnum,len,cube,i,output;
    var sum = 0, 
    armnum = document.getElementById("armnumber").value;
    len = armnum.length;
    for(i = 0; i < 3; i++){
        cube = (armnum[i])**3;
        sum += cube;
        
    }
    if(!isNaN(armnum) && len == 3 && sum == armnum){
        output = `${armnum} is an Armstrong number.`;
    }
    else{
        if(isNaN(armnum) || len < 3 || len > 3){
            output = '<strong>Error -</strong> Enter a 3-digit number only';
        }else {
            output = `${armnum} is not an Armstrong number.`;
        }
    }
    document.getElementById('arnum').innerHTML = output;
    document.getElementById("armnumber").value = '';
}

//153, 370, 371, 407
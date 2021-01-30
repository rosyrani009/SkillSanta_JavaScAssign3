var cnum ;

function validateCreditCard(cnum){
    var f = false;
    var sum = 0;
    var same = 0;
    var result;
   
    var len = cnum.length;
    var even = cnum.charAt(15);
       
    //Check final digit is even or not.
    if(even % 2 == 0){
         f = true;
    }

    //Calculate the sum of digits.
    for( var i = 0; i < len; i++){
        sum += parseInt(cnum[i]);
        // Check there exist atleast 2 different digits.
        if(same == 0){
            for(var j = 0; j < len;j++){
                if(cnum[j] != cnum[i]){
                    same = 1;
                }
            }
        }
    }
    // Check card number is valid or not according to rules.
    if(!isNaN(cnum) && len == 16 && f == true && sum > 16 && same == 1){
         result = true;
    }
    else{
        result = false;
    }
    return result;
    
}

// 9999777788880000
// 6666666666666166

// 99a332119c011112
// 4444444444444444
// 1111111111111110
// 6666666666666661
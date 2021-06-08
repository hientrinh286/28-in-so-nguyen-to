function print(){
    let n = +document.getElementById('n').value;
    let j = 3;
    if (n>2){
        text = '<b>The first '+n+' prime numbers need to be printed are:</b>'+' 2; 3'
        for (let i = 5; j<=n ; i++){
            sqrt = Math.sqrt(i);
            let check = true;
            for (let k =2; k<=sqrt;k++){
                if (i%k==0){
                        check = false;
                        break;
                }
            }
            if (check){
                j+=1;
                text +='; '+i;
                document.getElementById('result1').innerHTML = text+'.';
            }
            
        }
    }   
    else if (n==2){
            document.getElementById('result1').innerHTML = 'The first two prime numbers are: 2; 3.';
    }
    else if (n==1) {
            document.getElementById('result1').innerHTML = 'The first prime number is: 2.';
    }
    else{
        alert('The input has to be the number and bigger than 0. Please re-input the numbers of prime number you need.');
    }
    
}
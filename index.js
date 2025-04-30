
const form=document.querySelector('form');
form.addEventListener('submit',function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('.result');

    if(height===''||height<0||isNaN(height)){
        result.innerHTML=`Please enter valid Height!`;
    }
    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML=`Please enter valid Weight!`;
    }
    else{
        const bmi= (weight/((height *height)/10000)).toFixed(2);
        if(bmi<18.5){
            result.innerHTML=`${bmi} Under Weight`;
        }
        else if(bmi>18.5&&bmi<24.9){
            result.innerHTML=`${bmi} Normal Weight ✔`;
        }
        else if(bmi>24.9){
            result.innerHTML=`${bmi}  Over Weight`;
        }
    }
   // result.innerHTML=`${height}`;
    
})
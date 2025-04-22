const form=document.querySelector('form')
console.log(form)
// height and weight upar nhi likhna chaiye function ke andar he likhna chaiye warna empty value aayege
form.addEventListener('submit',function(e){
    e.preventDefault() // means ke jo be default action tha like submit etc ka usse prevent karo
  const height=parseInt(document.querySelector('#height').value)// .value karne se string me aate hai value parseInt se integer me convert hoge
  console.log(height)
  const weight=parseInt(document.querySelector('#weight').value) 
  console.log(weight)
  const results=document.querySelector('#results')
  console.log(results)
  if(height ==='' || height<0 || isNaN(height) ){
    results.innerHTML=`Please give a valid height ${height}`;
  }
 else if(weight===''|| weight<0 ||isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`;
  }
  else{
    const bmi =(weight /((height*height)/100000)).toFixed(2);
    let message='';
    if(bmi<18.6){
        message=`You are underweight`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
        message= `You are normal`;
    }
    else {
        message= `You are overweight`;
    }
    // show the results
    results.innerHTML = `<p>${message}</p><span>${bmi}</span>`;
  }

})
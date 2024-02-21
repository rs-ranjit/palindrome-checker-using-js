const inputValue = document.getElementById("input");
const checkButton = document.getElementById("checkButton");
const content = document.getElementById("content");
const contents = document.getElementById("contents");

//validation
const validation = () =>{
   const checkRegex = /^[a-zA-Z0-9]+$/i;

    if(inputValue.value === ''){
        alert('enter a value for checking!!!');
       return false;
    }   
    else if(!checkRegex.test(inputValue.value)){
        alert('Only Characters and Numbers are checked!!!');
       return false;
    }      
    else{
        return true;
    }
};
// checkButton.addEventListener("click",validation);

checkButton.addEventListener("click", ()=>{
   const validationFlag = validation();
   if(!validationFlag){
    inputValue.value = '';
   }else
    palindrome();
});

//for checking palindrome
const palindrome =()=> {
    const variable = inputValue.value.replace(/ /g, "").toLowerCase();
    const variableReverse = variable.split('').reverse().join('');

    if (variable === variableReverse) {
        content.innerHTML = `<b>${inputValue.value}</b> is a palindrome`;
        contents.style.display = "block";
    } else {
        content.innerHTML = `<b>${inputValue.value}</b> is not a palindrome`;
        contents.style.display = "block";
    }

    inputValue.value = '';
};

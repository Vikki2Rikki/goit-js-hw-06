
const form = document.querySelector('.login-form');
console.log(form);
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event){
   event.preventDefault();

   const {
      elements: { email, password }
      } = event.currentTarget;

   if(email.value === "" || password.value === "") {
      window.alert('Заповніть усі поля!');
   }
   const personalData = { email: email.value, password: password.value};
   console.log(personalData);
   event.currentTarget.reset();
}



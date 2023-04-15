// Напиши скрипт управління формою логіна.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
const loginCollaction = {email: '', password: ''};
const inputEl = document.querySelector('.login-form');
inputEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(event){
   event.preventDefault();
   const formData = new FormData(event.currentTarget);
  const formElelments = event.currentTarget.elements;

   if(formElelments.email.value === "" || formElelments.password.value === "") {
      window.alert('Заповніть усі поля!');
   }
 
   formData.forEach((value, name) => {
     loginCollaction.email = formElelments.email.value;
     loginCollaction.password = formElelments.password.value;
     return console.log(loginCollaction);
    });
}


// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

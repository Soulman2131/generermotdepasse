const form = document.querySelector("#handleForm");

const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*%§!?@,;:'µ(-_)";

//Form ADDEVENLISTENER
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = [];
  let password = "";

  const rangeValue = document.getElementById("rangeInput").value;
  const headingPrimary = document.getElementById("heading-primary");
  const generate = document.getElementById("generate");

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) return alert("Veuiller cocher au moins une case");
  //   LOOP
  for (let i = 0; i < rangeValue; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    //
    headingPrimary.value = password;
    //
    generate.value = "copié !";
    setTimeout(() => {
      generate.value = "Générer mot de passe !";
    }, 2000);
  }

  // SELECT
  headingPrimary.select();
  navigator.clipboard.writeText(headingPrimary.value);
});

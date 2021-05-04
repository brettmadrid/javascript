const task3Element = document.getElementById("task-3");

const Function1 = () => alert("Bounce on it baby!");

const Function2 = userInput => alert(`Hi ${userInput}`);

task3Element.addEventListener("click", Function1);

const Function3 = (string1, string2, string3) =>
  alert(string1 + string2 + string3);

Function3("Ba", "Da", "Bing");

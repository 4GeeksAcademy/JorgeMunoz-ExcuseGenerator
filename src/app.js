import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function onLoad() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let quien = Math.floor(Math.random() * who.length);
  let primero = who[quien];

  let accion = Math.floor(Math.random() * action.length);
  let segundo = action[accion];

  let que = Math.floor(Math.random() * what.length);
  let tercero = what[que];

  let cuando = Math.floor(Math.random() * when.length);
  let cuarto = when[cuando];

  let Array = primero + " " + segundo + " " + tercero + " " + cuarto;
  document.getElementById("excuse").innerHTML = Array;
};

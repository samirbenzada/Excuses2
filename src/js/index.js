/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let eatWhat = ["my homework", "my backpack", "my lunch", "my money"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomWho = this.Math.floor(Math.random() * who.length);
  let randomWhat = this.Math.floor(Math.random() * what.length);
  let randomEat = this.Math.floor(Math.random() * eatWhat.length);
  let randomWhen = this.Math.floor(Math.random() * when.length);

  let excuse =
    who[randomWho] +
    " " +
    what[randomWhat] +
    " " +
    eatWhat[randomEat] +
    " " +
    when[randomWhen];

  this.document.body.querySelector("#inject").innerHTML = excuse;
};

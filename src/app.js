/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello World karen");
  console.log("Hello Rigo from the console!");
};
var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var extensiones = [".com", ".net", ".us", ".io", ".co"];

for (var i = 0; i < adj.length; i++) {
  for (var j = 0; j < pronoun.length; j++) {
    for (var k = 0; k < noun.length; k++) {
      for (let l = 0; l < extensiones.length; l++) {
        document.writeln(
          pronoun[j] + adj[i] + noun[k] + extensiones[l] + "<br/>"
        );
      }
    }
  }
}

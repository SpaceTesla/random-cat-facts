let url = "https://catfact.ninja/fact";
let generate = document.querySelector(".generate");

let getCatFact = async () => {
  let res = await fetch(url);
  let factObj = await res.json();

  let para = document.createElement("p");
  para.innerHTML = factObj.fact;
  para.classList.add("para");
  document.querySelector("body").append(para);
};

generate.addEventListener("click", getCatFact);

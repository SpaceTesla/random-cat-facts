let url = "https://catfact.ninja/fact";
let generate = document.querySelector(".generate");

let getCatFact = async () => {
  try {
    let res = await axios.get(url);
    console.log("Fact Found");
    return res.data.fact;
  } catch (err) {
    console.log("Request Failed:", err);
    return "No Fact Found";
  }
};

generate.addEventListener("click", async () => {
  let fact = await getCatFact();
  let para = document.createElement("p");
  para.innerHTML = fact;
  para.classList.add("para");
  document.querySelector("body").append(para);
});

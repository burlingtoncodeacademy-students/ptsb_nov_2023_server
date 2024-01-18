let form = document.getElementById("search-form");
let dataDiv = document.getElementById("data");
let getAllButton = document.getElementById("get-all");

// Form Event + Fetch via PARAM

// form.addEventListener("submit", async (eventObject) => {
//   eventObject.preventDefault();
//   try {
//     let searchParam = form.search.value;
//     let response = await fetch(
//       `http://localhost:8080/routes/param/${searchParam}`
//     );
//     let json = await response.json();
//     console.log(json.Results[0].item);

//     let textData = document.createElement("p");
//     textData.textContent = json.Results[0].item;
//     dataDiv.appendChild(textData);
//   } catch (err) {
//     console.log(err);
//   }
// });

// Form Event + Fetch via QUERY PARAM

form.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    let searchParam = form.search.value;
    let json = await (
      await fetch(`http://localhost:8080/routes/query?id=${searchParam}`)
    ).json();

    let textData = document.createElement("p");
    textData.textContent = json.Results[0].item;
    dataDiv.appendChild(textData);
  } catch (err) {
    console.log(err);
  }
});

getAllButton.onclick = async () => {
  try {
    let response = await fetch("http://localhost:8080/routes");
    let json = await response.json();
    console.log(json.Results);

    json.Results.forEach((i) => {
      let text = document.createElement("p");
      text.textContent = i.item;
      dataDiv.appendChild(text);
    });
  } catch (err) {
    console.log(err);
  }
};

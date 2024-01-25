const getElemId = (id) => document.getElementById(id);
const createElm = (elm) => document.createElement(elm);

const getAllButton = getElemId("get-all");
const createForm = getElemId("create");
const updateForm = getElemId("update");
const deleteForm = getElemId("delete");
const dataDiv = getElemId("data");

const fetchAll = async () => {
  try {
    const json = await (await fetch("http://localhost:9000/crud/all")).json();
    //  function call to show my stuff
    showMyStuff(json.Results);
  } catch (err) {
    console.log(err);
  }
};

fetchAll();

getAllButton.onclick = async () => {
  try {
    await fetchAll();
  } catch (err) {
    console.log(err);
  }
};

createForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const result = await fetch("http://localhost:9000/crud/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: createForm.name.value,
        category: createForm.category.value,
        price: createForm.price.value,
        emoji: createForm.emoji.value,
      }),
    });

    const json = await result.json();

    showMyStuff(json.Results);
  } catch (err) {
    console.log(err);
  }
});

updateForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();

    const json = await (
      await fetch(`http://localhost:9000/crud/update/${updateForm.id.value}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: updateForm.name.value,
          category: updateForm.category.value,
          price: updateForm.price.value,
          emoji: updateForm.emoji.value,
        }),
      })
    ).json();

    // function call to show stuff
    showMyStuff(json.Results);
  } catch (err) {
    console.log(err);
  }
});

deleteForm.addEventListener("submit", async (e) => {
  try {
    e.preventDefault();
    const json = await (
      await fetch(
        `http://localhost:9000/crud/delete/${deleteForm.delete.value}`,
        {
          method: "DELETE",
        }
      )
    ).json();

    showMyStuff(json.Results);
  } catch (err) {
    console.log(err);
  }
});

function showMyStuff(jsonArr) {
  while (dataDiv.firstChild) {
    dataDiv.removeChild(dataDiv.firstChild);
  }

  jsonArr.forEach((i) => {
    let itemDiv = createElm("div");

    // Emoji
    let h2 = createElm("h2");
    h2.textContent = i.emoji;
    itemDiv.appendChild(h2);

    // id
    let p1 = createElm("p");
    p1.textContent = i.id;
    itemDiv.appendChild(p1);

    // name
    let p2 = createElm("p");
    p2.textContent = i.name;
    itemDiv.appendChild(p2);

    // category
    let p3 = createElm("p");
    p3.textContent = i.category;
    itemDiv.appendChild(p3);

    // price
    let p4 = createElm("p");
    p4.textContent = i.price;
    itemDiv.appendChild(p4);

    // add css stuff
    itemDiv.classList.add("item");

    dataDiv.appendChild(itemDiv);
  });
}

// const nav = document.querySelector(".nav");

// nav.addEventListener("click", handleClick);

// function handleClick(event) {
//   const checkClass = nav.querySelector("li.active");

//   if (checkClass) {
//     event.target.classList.remove("active");
//   } else {
//     event.target.classList.add("active");
//   }
// }

// 1 //

// const btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", hideText);
// function hideText(event) {
//   const textDiv = document.querySelector("#text");
//   textDiv.style.display = "none";
// }

// 2 //
const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", cluck);

function cluck(event) {
  event.target.hidden = !event.target.hidden;

  const checkClass = document.querySelector("active");

  //   if (checkClass) {
  //     event.target.classList.remove("active");
  //   } else {
  //     event.target.classList.add("active");
  //   }
}

// 3 //

const wood = document.querySelector("#tree");
for (let li of tree.querySelectorAll("li")) {
  let span = document.createElement("span");
  li.prepend(span);
  span.append(span.nextSibling);
}
tre.onclick = 
const showBtn = document.querySelector(".show-more-button");
const news = document.querySelector(".linkedln-news");
// const downArrow = document.querySelector(".down-arrow");

showBtn.addEventListener("click", () => {
  // downArrow.classList.toggle("down-arrow-rotate");
  news.classList.toggle("expand-news");
  showBtn.innerText = news.classList.contains("expand-news")
    ? "Show Less"
    : "Show More";
});
const messagingElem1 = document.querySelector(".Focused");
const messagingElem2 = document.querySelector(".Other");

const messagingBodyFocused=document.querySelector(".Messaging-body-focused");
const messagingBodyOther=document.querySelector(".Messaging-body-other");



messagingElem1.style.borderBottom = "3px solid green";
messagingElem1.style.color = "green";

messagingElem2.addEventListener("click", (e) => {
  messagingBodyFocused.style.display="none";
  messagingBodyOther.style.display="flex";
  messagingElem2.style.borderBottom = "3px solid green";
  messagingElem2.style.color = "green";
  messagingElem1.style.borderBottom = "none";
  messagingElem1.style.color = "black";
});
messagingElem1.addEventListener("click", (e) => {
  messagingBodyFocused.style.display="flex";
  messagingBodyOther.style.display="none";
  messagingElem1.style.borderBottom = "3px solid green";
  messagingElem1.style.color = "green";
  messagingElem2.style.borderBottom = "none";
  messagingElem2.style.color = "black";
});
const contactMessaging = document.querySelector(".contact-Messaging");
const showHideButton = document.querySelector(
  ".Messaging-header-right-show-hide"
);

document
  .querySelector(".Messaging-header-right-show-hide")
  .addEventListener("click", (e) => {
    contactMessaging.classList.toggle("contact-Messaging-hidden");
    if (contactMessaging.classList.contains("contact-Messaging-hidden")) {
      showHideButton.style.transform = "rotate(-180deg)";
    } else {
      showHideButton.style.transform = "rotate(0deg)";
    }
  });

// const sortByOption = document.querySelector(".sort-by-option");
// const topElem = document.querySelector(".top");
// const fixedTop = document.querySelector(".xyzz");
// sortByOption.addEventListener("click", () => {
//   topElem.style.display = "block";
// });

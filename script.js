"use strict";
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let postContent = "";
    for (let object of data) {
      const objectTitle = object.title;
      const objectBody = object.body;
      /*       console.log(objectBody);
       */
      postContent += `<div class="post__item">
      <div class="post__title">${objectTitle}</div>
      <div class="post__body">${objectBody}</div>
      </div>`;
    }
    document.querySelector(".post__wrapper").innerHTML = postContent;
  });

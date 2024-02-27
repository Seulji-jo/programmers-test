// 주어진 문제를 해결하기 위해 코드를 수정하세요.

for (let i = 1; i <= 10; i++) {
  const option = document.createElement("option");
  option.value = i;
  option.textContent = `작성자 ${i}`;
  document.getElementById("authorFilter").appendChild(option);
}

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    renderPosts(posts);

    document
      .getElementById("authorFilter")
      .addEventListener("change", function (e) {
        const selectedAuthor = e.target.value;
        cleanPostList();
        if (selectedAuthor === "all") {
          renderPosts(posts);
        } else {
          renderPosts(
            posts.filter((post) => post.userId.toString() === selectedAuthor)
          );
        }
      });
  });
// ********************** 여기까지 주어진 코드 (군데군데 조금 수정) ********************** //

const renderPosts = (posts) => {
  const $postList = document.getElementById("postList");
  posts.forEach((post) => {
    const postCard = document.createElement("div");
    const postUser = document.createElement("h3");
    const postTitle = document.createElement("h3");
    const postBody = document.createElement("p");
    postUser.textContent = `작성자 ${post.userId}`;
    postTitle.textContent = post.title;
    postBody.textContent = post.body;
    postCard.appendChild(postUser);
    postCard.appendChild(postTitle);
    postCard.appendChild(postBody);
    $postList.appendChild(postCard);
  });
};

const cleanPostList = () => {
  const $postList = document.getElementById("postList");
  while ($postList.firstChild) {
    $postList.removeChild($postList.lastChild);
  }
};

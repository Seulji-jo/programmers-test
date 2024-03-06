import { fetchLangList } from "./api/index.js";

const $form = document.querySelector(".SearchInput");
const $input = document.querySelector(".SearchInput__input");

$form.addEventListener("submit", () => alert($input.value));
document.addEventListener("keydown", (event) => {
  const $suggestion = document.querySelector(".Suggestion");
  const $ul = $suggestion.querySelector("ul");
});

const createLists = (parentNode, letter, list) => {
  console.log(list);
  const $ul = parentNode.querySelector("ul");
  $ul.innerHTML = ``;
  list.forEach((item, i) => {
    const $li = document.createElement("li");
    $li.textContent = item;
    if (i === 0) $li.className = "Suggestion__item--selected";
    $ul.appendChild($li);
  });
};

$input.addEventListener("input", async (e) => {
  const res = await fetchLangList(e.target.value);
  console.log(res);
  const $suggestion = document.querySelector(".Suggestion");
  createLists($suggestion, e.target.value, res);
});

function Nodes({ $parent, initialState }) {
  this.state = initialState;
  this.$target = document.createElement("ul");
  $parent.appendChild(this.$target);

  // state를 받아서 현재 컴포넌트의 state를 변경하고 다시 렌더링하는 함수
  this.setState = (nextState) => {
    this.state = nextState;
    // render 함수 내에서 this.state 기준으로 렌더링을 하기 때문에,
    // 단순히 이렇게만 해주어도 상태가 변경되면 화면이 알아서 바뀜
    this.render();
  };
  // 파라메터가 없는 Nodes의 render 함수.
  // 현재 상태(this.state) 기준으로 렌더링 합니다.
  this.render = () => {
    this.$target.innerHTML = this.state.nodes.map(
      (node) => `<li>${node.name}</li>`
    );
  };
  this.render();
}

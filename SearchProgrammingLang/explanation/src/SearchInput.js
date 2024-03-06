export default function SearchInput({ $target, initialState, onChange }) {
  this.$element = document.createElement("form");
  this.$element.className = "SearchInput";
  this.state = initialState;

  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}">
    `;
  };

  this.render();

  this.$element.addEventListener("keyup", (e) => {
    // ArrowUp, ArrowDown 등에도 무조건 onChange가 호출되기 때문에
    // API를 다시 호출하고 다시 렌더링을 하게 됨
    const actionIgnoreKeys = [
      "Enter",
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
    ];

    if (!actionIgnoreKeys.includes(e.key)) {
      onChange(e.target.value);
    }
  });
  this.$element.addEventListener("submit", (e) => {
    e.preventDefault();
  });
}

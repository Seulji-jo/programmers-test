export const fetchLangList = async (keyword) => {
  const response = await fetch(
    `https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev/languages?keyword=${keyword}`
  );
  return response.json();
};

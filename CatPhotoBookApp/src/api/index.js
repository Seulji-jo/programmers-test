export const fetchRootData = async () => {
  const response = await fetch(
    "https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/"
  );
  return response.json();
};

export const fetchDirOrFile = async (nodeId) => {
  const res = await fetch(
    `https://l9817xtkq3.execute-api.ap-northeast-2.amazonaws.com/dev/${nodeId}`
  );
  return res.json();
};

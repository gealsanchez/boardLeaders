const URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ZYKzQxUF6CtRax1KA7GJ/scores/';

const postData = async (name, number) => {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: name, score: number }),
  });
  const data = await response.json();
  return data;
};

export default postData;
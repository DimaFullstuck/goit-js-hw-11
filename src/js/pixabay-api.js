export default function searchImagesByQuery(query) {
  const URL = 'https://pixabay.com/api/';
  const API_KEY = '45142135-0c3dcc8f867495c741718f1c0';

  return fetch(
    `${URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

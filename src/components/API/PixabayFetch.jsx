export function fetchGallery(searchQuery, page = 1) {
  return fetch(
    `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=19295709-d5276be665a4131ac0929716c&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
      }
      
      return Promise.reject(new Error(`${searchQuery} not found. `));
  });
}

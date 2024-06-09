const API_KEY = "44294638-58512edcffe42892d413550b1";
const BASE_URL = "https://pixabay.com/api/";
const PER_PAGE = 100;

export const fetchPhotos = async (perPage = PER_PAGE, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=&image_type=photo&per_page=${perPage}&page=${page}`
  );
  const data = await response.json();
  return data.hits;
};

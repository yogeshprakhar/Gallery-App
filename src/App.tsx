import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState("3");
  const apikey = "44294638-58512edcffe42892d413550b1";

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${apikey}&q=&image_type=photo&per_page=50`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-row items-center gap-1 justify-center h-20 bg-slate-300 fixed inset-0">
        <div className="m-2 text-lg font-semibold flex flex-row items-center justify-center gap-2 px-4 py-2 rounded-xl shadow-2xl bg-gray-200">
          <h1>Images Per Row</h1>
          <input
            id="rowPhoto"
            type="range"
            min={3}
            max={6}
            onChange={(event) => {
              setValue(event.target.value);
              console.log(event.target.value);
            }}
            value={value}
          />
          {value}
        </div>
      </div>
      {!isLoading && images.length === 0 && (
        <h1 className="text-center text-4xl mt-44">No Results Found!</h1>
      )}
      ;
      {isLoading ? (
        <h1 className="text-center text-4xl mt-44">Loading.....</h1>
      ) : (
        <main
          className={`mt-16 mx-20 grid gap-4`}
          style={{ gridTemplateColumns: `repeat(${value}, 1fr)` }}
        >
          {images.map((image) => (
            <ImageCard className="h-auto w-auto" image={image} />
          ))}
        </main>
      )}
    </>
  );
}

export default App;

// const fetchData = () => {
//   setNum((val) => val + 10);
//   fetch(
//     `https://pixabay.com/api/?key=${apikey}&q=&image_type=photo&per_page=${num}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       setImages(data.hits);
//       setIsLoading(false);
//     })
//     .catch((err) => console.log(err));
// };

// useEffect(() => {
//   fetch(
//     `https://pixabay.com/api/?key=${apikey}&q=&image_type=photo&per_page=${num}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       setImages(data.hits);
//       setIsLoading(false);
//     })
//     .catch((err) => console.log(err));
// }, []);

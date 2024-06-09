function ImageCard({ image }: any) {
  return (
    <>
      <div className="flex w-[100%] h-60">
        <img
          className="rounded-lg shadow-3xl mt-5 mb-5"
          height={400}
          width={350}
          src={image.webformatURL}
          alt=""
        />
      </div>
    </>
  );
}

export default ImageCard;

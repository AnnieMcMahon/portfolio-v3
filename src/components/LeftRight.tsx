const LeftRight = () => {
  return (
    <>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#certificates"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#certificates"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </>
  );
};

export default LeftRight;

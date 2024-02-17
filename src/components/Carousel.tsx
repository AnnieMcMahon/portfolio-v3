const Carousel = () => {
  return (
    <div id="carousel-container">
      <input type="radio" name="position"/>
      <input type="radio" name="position"/>
      <input type="radio" name="position" defaultChecked/>
      <input type="radio" name="position"/>
      <input type="radio" name="position"/>
      <div id="carousel">
        <div className="item"><img src="images/Certificates/Excel-VBA.jpg" alt="Excel-VBA"/></div>
        <div className="item"><img src="images/Certificates/JavaScript.png" alt="JavaScript"/></div>
        <div className="item"><img src="images/Certificates/Full-Stack.png" alt="Full Stack Engineer"/></div>
        <div className="item"><img src="images/Certificates/PostgreSQL.png" alt="PostgreSQL"/></div>
        <div className="item"><img src="images/Certificates/CSS.png" alt="CSS"/></div>
      </div>
    </div>
  );
};

export default Carousel;

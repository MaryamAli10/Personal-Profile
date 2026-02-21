import "./background.css";

function AnimatedShapes() {
  return (
    <>
      <span className="shapes" id="animatedShape1">
        +
      </span>
      <span className="shapes" id="animatedShape2">
        +
      </span>
      <span className="shapes circle" id="animatedShape3"></span>
      <span className="shapes circle" id="animatedShape4"></span>
      <span className="shapes" id="animatedShape5">
        <div className="shapes dot-grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </span>
      <span className="shapes " id="twinkling-four-point-star"></span>
    </>
  );
}

function Shapes() {
  return (
    <>
      <span className="shapes" id="shape1">
        +
      </span>
      <span className="shapes " id="medium-circle"></span>
      <span className="shapes" id="shape2">
        <div className="shapes dot-grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </span>
    </>
  );
}

function Background({ children }) {
  return (
    <div id="background">
      <AnimatedShapes />
      <Shapes />
      {children}
    </div>
  );
}

export default Background;

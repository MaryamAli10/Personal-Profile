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
      <span className="shapes dot" id="animatedShape3"></span>
      <span className="shapes dot" id="animatedShape4"></span>
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
    </>
  );
}

function Shapes() {
  return (
    <>
      <span className="shapes" id="shape1">
        +
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

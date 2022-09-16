import "./App.css";

function App() {
  return (
    <div className="app container">
      <div className="nav d-flex justify-content-between align-items-center mt-4">
        <div className="nav-item">
          <h2 className="world">World</h2>
        </div>
        <div className="nav-item">
          <div className="row">
            <h2 className="nav-row-item">Exhibition</h2>
            <h2 className="nav-row-item">Artists</h2>
            <h2 className="nav-row-item">Press</h2>
            <h2 className="nav-row-item">Shop</h2>
          </div>
        </div>
        <div className="nav-item"></div>
      </div>
      <div className="content">
        <div className="row d-flex justify-content-center">
          <div className="oval o-1 justify-content-center d-flex align-items-center">
            <div className="row text-center">
              <h3 className="gallery-text">
                The <br /> Gallery
              </h3>
              <br />
              <div>
                <button className="discover-btn">DISCOVER</button>
              </div>
            </div>
          </div>
          <div className="oval o-2"></div>
          <div className="oval o-3">
            <img
              src={require("./assets/model.png")}
              alt="model"
              height={600}
              className="model"
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="row d-flex justify-content-center">
          <div className="col-4">
            <h3 className="lb-text">
              Absolutely unique <br /> body of work
            </h3>
          </div>
          <div className="col-5">
            <h3 className="mb-text">
              We creating connections between painting and sculpture in urban
              settings, our artists adopt a thoroughly innovative approach in
              artistic fusions in balanced combination of classical and
              contemporary.
            </h3>
          </div>
          <div className="col-3 d-flex align-items-center">
            <div className="row circle-wrapper d-flex">
              <div className="circle c-1"></div>
              <div className="circle c-2"></div>
              <div className="circle c-3"></div>
              <img
                src={require("./assets/arrow.png")}
                className="arrow"
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

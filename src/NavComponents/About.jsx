
const About = () => {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-3 p-4">
        <div className="row align-items-center">
          
          {/* Left Side Image */}
          <div className="col-md-5 text-center">
            <img 
              src="./src/assets/About-image.png" 
              alt="About Us" 
              className="img-fluid rounded-3"
            />
          </div>

          {/* Right Side Content */}
          <div className="col-md-7">
            <h2 className="fw-bold mb-3 text-danger">About Our App</h2>
            <p className="text-muted">
              Welcome to <b>Healthy Foods</b>, your one-stop solution for discovering
              and ordering delicious meals from your favorite restaurants.  
              We are here to make food ordering <b>simple, fast, and affordable</b>.
            </p>

            <h5 className="fw-bold mt-4">✨ Our Mission</h5>
            <p className="text-muted">
              To deliver happiness at your doorstep with fresh, tasty, and 
              affordable meals anytime, anywhere.
            </p>

            <h5 className="fw-bold mt-4">🚀 Key Features</h5>
            <ul className="text-muted">
              <li>Easy to use interface</li>
              <li>Wide variety of restaurants & cuisines</li>
              <li>Fast delivery & real-time tracking</li>
              <li>Secure payment options</li>
            </ul>

            <div className="mt-4">
              <button className="btn btn-danger px-4 py-2">
                Download App
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About

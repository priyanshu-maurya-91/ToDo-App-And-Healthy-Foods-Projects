import { FaInstagram ,FaFacebook ,FaGithub ,FaLinkedin, FaList} from "react-icons/fa";

export default function Footer() {


  const LiItems =["Home", "Features", "Pricing", "FAQs","About","Contact"]


  return (
    <div className="footer mt-5">
    <footer className="p-5  ">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          {
            LiItems.map((list)=>(
                <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                {list}
              </a>
            </li>
          </ul>
            ))
          }
        </div>
         <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          {
            LiItems.map((list)=>(
                <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                {list}
              </a>
            </li>
          </ul>
            ))
          }
        </div>
         <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          {
            LiItems.map((list)=>(
                <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                {list}
              </a>
            </li>
          </ul>
            ))
          }
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label for="newsletter1" className="visually-hidden">
                Email address
              </label>
              <input
                id="newsletter1"
                type="email"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-primary" type="button">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2025 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3">
            <a className="link-body-emphasis" href="#" aria-label="Instagram">
              <svg className="bi" width="24" height="24">
                 <FaInstagram />
              </svg>
            </a>
          </li>
          <li className="ms-3">
            <a className="link-body-emphasis" href="#" aria-label="Facebook">
              <svg className="bi" style={{width:"25px", height:"25px"}} aria-hidden="true">
                <FaFacebook />
              </svg>
            </a>
          </li>
           <li className="ms-3">
            <a className="link-body-emphasis" href="#" aria-label="Linkdin">
              <svg className="bi" style={{width:"25px", height:"25px"}} aria-hidden="true">
                <FaGithub />
              </svg>
            </a>
          </li>
           <li className="ms-3">
            <a className="link-body-emphasis" href="#" aria-label="GitHub">
              <svg className="bi" style={{width:"25px", height:"25px"}} aria-hidden="true">
              <FaLinkedin />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </footer>
    </div>
  );
}



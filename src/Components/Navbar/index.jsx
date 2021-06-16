export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">   
        <div className="container-fluid">
          <a className="navbar-brand" >Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" >Home</a>
              <a className="nav-link" >Features</a>
              <a className="nav-link" >Pricing</a>
              <a className="nav-link disabled"  tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
    </nav>
  );
};

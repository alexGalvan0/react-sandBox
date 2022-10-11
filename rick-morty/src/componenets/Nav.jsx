function Nav(){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.google.com/"><img src="https://i.pinimg.com/564x/57/b5/ab/57b5abc66b512a07b915d4aace953b83.jpg" alt="" width="50" height="60"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://www.google.com/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com/">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://www.google.com/">Pricing</a>
                    </li>
      
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
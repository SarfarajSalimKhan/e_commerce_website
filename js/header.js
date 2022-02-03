class MyHeader extends HTMLElement
{
connectedCallback()
{
this.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light bg-info">
            <a class="navbar-brand" href="index.html"><img src="logo.png" alt="Logo"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link text-dark" href="electronics.html">Electronics</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-dark" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Clothes
                  </a>
                  <div class="dropdown-menu bg-info" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item text-dark" href="men.html">Men</a>
                    <a class="dropdown-item text-dark" href="women.html">Women</a>
                    <a class="dropdown-item text-dark" href="kids.html">Kids</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="footwears.html">Footwears</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="books.html">Books</a>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                <button class="btn btn-outline-light my-2 my-sm-0 ml-5" type="button"  data-toggle="modal" data-target="#exampleModal">Login</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label> &nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                          </div> <br>
                          <div class="form-group">
                            <label for="exampleInputPassword1">Password</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password">
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Login</button>
                      </div>
                    </div>
                  </div>
                </div>
                <button class="btn btn-outline-light my-2 my-sm-0 ml-2" type="button" data-toggle="modal" data-target="#signupModal">Sign Up</button>
                <div class="modal fade bd-example-modal-lg" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="form-group">
                            <label for="exampleInputFirstName">First Name</label>
                            <input type="text" class="form-control" id="exampleInputFirstName" aria-describedby="emailHelp" placeholder="Enter First Name">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputLastName">Last Name</label>
                            <input type="text" class="form-control" id="exampleInputLastName" aria-describedby="emailHelp" placeholder="Enter Last Name">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputUsername">Username</label>
                            <input type="text" class="form-control" id="exampleInputUsername" aria-describedby="emailHelp" placeholder="Enter Username">
                          </div>
                          <div class="form-group">
                            <label for="exampleInputNumber">Mobile Number</label>
                            <div class="input-group mb-3">
                              <div class="input-group-prepend">
                                <span class="input-group-text">+91</span>
                              </div>
                              <input type="number" class="form-control" id="exampleInputNumber" aria-describedby="emailHelp" placeholder="Enter Mobile Number">
                            </div> 
                          </div>
                          <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <div class="input-group mb-3">
                              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email">
                              <div class="input-group-append">
                                <span class="input-group-text">@gmail.com</span>
                              </div>
                             </div> 
                          </div>
                          <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Password">
                            <small id="passwordHelp" class="form-text text-muted">Password includes [A-Z],[a-z],_,-,@</small>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Sign Up</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </nav>
`
}
}
customElements.define('my-header', MyHeader)
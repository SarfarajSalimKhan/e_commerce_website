class MyFooter extends HTMLElement
{
connectedCallback()
{
this.innerHTML = `

<!-- Footer -->
<footer class="page-footer font-small text-white bg-dark mt-5">

  <div style="background-color: #6351ce;">
    <div class="container">

      <!-- Grid row-->
      <div class="row py-4 d-flex align-items-center">

        <!-- Grid column -->
        <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
          <h6 class="mb-0 text-white">Get connected with us on social networks!</h6>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-6 col-lg-7 text-center text-md-right">

          <!-- Facebook -->
          <a class="fb-ic">
            <i class="fa fa-facebook text-white mr-4"> </i>
          </a>
          <!-- Twitter -->
          <a class="tw-ic">
            <i class="fa fa-twitter text-white mr-4"> </i>
          </a>
          <!-- Google +-->
          <a class="gplus-ic">
            <i class="fa fa-google-plus text-white mr-4"> </i>
          </a>
          <!--Linkedin -->
          <a class="li-ic">
            <i class="fa fa-linkedin text-white mr-4"> </i>
          </a>
          <!--Instagram-->
          <a class="ins-ic">
            <i class="fa fa-instagram text-white"> </i>
          </a>

        </div>
        <!-- Grid column -->

      </div>
      <!-- Grid row-->

    </div>
  </div>

  <!-- Footer Links -->
  <div class="container text-center text-md-left mt-5">

    <!-- Grid row -->
    <div class="row mt-3">

      <!-- Grid column -->
      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

        <!-- Content -->
        <h6 class="text-uppercase font-weight-bold">DroneShop</h6>
        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #ba68c8;">
        <p>We sell the best products at affordable rates, shipping across the world.</p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Products</h6>
        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #ba68c8;">
        <p>
          <a href="#mobiles" class="text-white">Mobiles</a>
        </p>
        <p>
          <a href="#shoes" class="text-white">Shoes</a>
        </p>
        <p>
          <a href="#books" class="text-white">Books</a>
        </p>
        <p>
          <a href="#clothes" class="text-white">Clothes</a>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Useful links</h6>
        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #ba68c8;">
        <p>
          <a href="electronics.html" class="text-white">Electronics</a>
        </p>
        <p>
          <a href="#!" class="text-white">Clothes</a>
        </p>
        <p>
          <a href="footwears.html" class="text-white">Footwears</a>
        </p>
        <p>
          <a href="books.html" class="text-white">Books</a>
        </p>

      </div>
      <!-- Grid column -->

      <!-- Grid column -->
      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

        <!-- Links -->
        <h6 class="text-uppercase font-weight-bold">Contact</h6>
        <hr class="accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px; background-color: #ba68c8;">
        <p>
          <i class="fa fa-home mr-3 text-white"></i> Chandigarh, Sector 67, India</p>
        <p>
          <i class="fa fa-envelope mr-3 text-white"></i> sarfaraj.salim@yahoo.com</p>
        <p>
          <i class="fa fa-phone mr-3 text-white"></i> + 91 737 913 0724</p>
        <p>
          <i class="fa fa-print mr-3 text-white"></i> + 91 623 962 4873</p>

      </div>
      <!-- Grid column -->

    </div>
    <!-- Grid row -->

  </div>
  <!-- Footer Links -->

  <!-- Copyright -->
  <div class="footer-copyright text-center py-3 bg-secondary text-white-50">© 2022 Copyright:
    <a href="https://www.github.com/SarfarajSalimKhan" class="text-white"> Designed by SarfarajSalimKhan</a>
  </div>
  <!-- Copyright -->

</footer>
<!-- Footer -->


`
}
}
customElements.define('my-footer', MyFooter)
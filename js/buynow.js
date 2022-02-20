class MyCheckout extends HTMLElement
{
connectedCallback()
{
this.innerHTML = `
    <div class="container">
      <form>
            <h3>Billing Address</h3>
            <div class="form-group">
            <label for="fname"><i class="fa fa-user"></i> Full Name</label>
            <input type="text" class="form-control" id="fname" name="firstname" placeholder="John M. Doe">
            </div>
            <div class="form-group">
            <label for="email"><i class="fa fa-envelope"></i> Email</label>
            <input type="text" class="form-control" id="email" name="email" placeholder="john@example.com">
            </div>
            <div class="form-group">
            <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
            <input type="text" class="form-control" id="adr" name="address" placeholder="542 W. 15th Street">
            </div>
            <div class="form-group">
            <label for="city"><i class="fa fa-institution"></i> City</label>
            <input type="text" class="form-control" id="city" name="city" placeholder="New York">
            </div>
              <div class="form-group">
                <label for="state">State</label>
                <input type="text" class="form-control" id="state" name="state" placeholder="NY">
              </div>
              <div class="form-group">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" name="zip" placeholder="10001">
              </div>
            <h3>Payment</h3>
            <div class="form-group">
            <label for="fname">Accepted Cards</label>
            <div class="icon-container">
              <i class="fa fa-cc-visa" style="color:navy;"></i>
              <i class="fa fa-cc-amex" style="color:blue;"></i>
              <i class="fa fa-cc-mastercard" style="color:red;"></i>
              <i class="fa fa-cc-discover" style="color:orange;"></i>
            </div>
            </div>
            <div class="form-group">
            <label for="cname">Name on Card</label>
            <input type="text" class="form-control" id="cname" name="cardname" placeholder="John More Doe">
            </div>
            <div class="form-group">
            <label for="ccnum">Credit card number</label>
            <input type="text"  class="form-control" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444">
            </div>
            <div class="form-group">
            <label for="expmonth">Exp Month</label>
            <input type="text" class="form-control" id="expmonth" name="expmonth" placeholder="September">
            </div>
              <div class="form-group">
                <label for="expyear">Exp Year</label>
                <input type="text" class="form-control" id="expyear" name="expyear" placeholder="2018">
              </div>
              <div class="form-group">
                <label for="cvv">CVV</label>
                <input type="text" class="form-control" id="cvv" name="cvv" placeholder="352">
              </div>
        <div class="form-group">
        <label>
          <input type="checkbox" checked="checked" name="sameadr"> Shipping address same as billing address
        </label>
        <input type="submit" class="form-control btn btn-success" value="Continue to checkout" class="btn">
        </div>
      </form>
    </div>
  </div>

  <div class="col-25">
    <div class="container">
      <h3>Cart
        <span class="price" style="color:black">
          <i class="fa fa-shopping-cart"></i>
          <b>4</b>
        </span>
      </h3>
      <p><a href="#">Product 1</a> <span class="price">$15</span></p>
      <p><a href="#">Product 2</a> <span class="price">$5</span></p>
      <p><a href="#">Product 3</a> <span class="price">$8</span></p>
      <p><a href="#">Product 4</a> <span class="price">$2</span></p>
      <hr>
      <p>Total <span class="price" style="color:black"><b>$30</b></span></p>
    </div>
  </div>
</div>
`
}
}
customElements.define('my-checkout', MyCheckout)
import React from 'react'

const Contact_General = React.createClass({
  render () {
    return (
      <div id="contact">
        <div class="col-lg-1 col-offset-6 centered">
          <div className="section contact" id="contact" data-animate="bounceIn">
            <div className="container">
              <div className="col-md-12">

                <div className="row">

                  <div className="col-md-8 col-md-offset-2">
                    <form id="contact-form" method="post" action="contact.php">

                      <div className="messages">

                      </div>

                      <div className="controls">

                        <div className="row contact">
                          <div className="col-md-6">
                            <input type="text" name="name" className="form-control" placeholder="Firstname *" required="/required"/>
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="surname" className="form-control" placeholder="Lastname *" required="required" />
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="email" className="form-control" placeholder="Email *" required="required" />
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="phone" className="form-control" placeholder="Phone *"/>
                          </div>
                          <div className="col-md-12">
                            <textarea name="message" className="form-control" placeholder="Message *" rows="4" required="required"></textarea>
                          </div>
                          <div className="col-md-12 text-center">
                            <input type="submit" className="btn btn-primary btn-lg" value="Send message"/>
                          </div>
                        </div>
                      </div>

                    </form>
                  </div>

                </div>

              </div>
            </div>
          </div>
          </div>
        </div>
    )
  }
})

export default Contact_General

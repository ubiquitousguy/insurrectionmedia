import React from 'react'

const Contact_General = React.createClass({
  render () {
    return (
      <div id="contact">
          <div className="section contact" id="contact" data-animate="bounceIn">
            <div className="container">
              <div className="col-md-12">


                <h2 className="title">Contact me</h2>

                <div className="row">

                  <div className="col-md-8 col-md-offset-2">
                    <form id="contact-form" method="post" action="contact.php">

                      <div className="messages">

                      </div>

                      <div className="controls">

                        <div className="row">
                          <div className="col-md-6">
                            <input type="text" name="name" className="form-control" placeholder="Your firstname *" required="/required"/>
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="surname" className="form-control" placeholder="Your lastname *" required="required" />
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="email" className="form-control" placeholder="Your email *" required="required" />
                          </div>
                          <div className="col-md-6">
                            <input type="text" name="phone" className="form-control" placeholder="Your phone"/>
                          </div>
                          <div className="col-md-12">
                            <textarea name="message" className="form-control" placeholder="Message for me *" rows="4" required="required"></textarea>
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
    )
  }
})

export default Contact_General

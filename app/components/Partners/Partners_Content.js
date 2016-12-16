import React from 'react'

const Partners_Content = () => {

    const imgStyle = {
      width: "60%"
    }
    const pStyle = {
      color: "whitesmoke"
    }
    return (
      <div className="container" id="about">

        <div className="row partner-content">
          <div className="col-sm-8">
            <img className="mx-auto d-block img-fluid partner-img" src="public/assets/skybound.png" style={imgStyle} />

            <p style={pStyle}>Insurrection Media, Inc. has signed a production partnership with Robert Kirkman and David Alpert’s Skybound Entertainment. In this partnership, Insurrection will provide the resources and support for Skybound to identify, develop, and produce world-class genre series to be distributed by Insurrection in the U.S. and overseas on a multitude of over-the- top and linear video platforms.
              The Skybound team will set up and oversee production services for Insurrection and collaborate on the expansion of the intellectual property from the original series in the context of licensing and merchandise with an emphasis on video games.
            </p>
          </div>
        </div>

        <div className="row partner-content">
          <div className="offset-sm-4 col-sm-8">
            <img className="mx-auto d-block img-fluid partner-img" src="public/assets/abominable.png" />
            <p style={pStyle}>Insurrection Media, Inc. has signed a multi-year, exclusive comedy pod deal with producer Jonathan Stern (“Wet Hot American Summer,” “Childrens Hospital”) founder of Abominable Pictures, and senior entertainment executive and producer Keith Quinn (Paramount Digital, Live Planet). In this partnership, Insurrection will provide the resources and support for Stern and Quinn to identify, develop, and produce world-class comedy series to be owned and distributed by Insurrection in the U.S. and overseas on a variety of over-the-top and linear video platforms.

              Insurrection will have exclusive first-look rights to comedy projects identified and developed by Stern and Quinn. Additionally, Stern and Quinn will provide production services via Stern’s Abominable Pictures.
            </p>
          </div>
        </div>

        <div className="row partner-content">
          <div className="col-sm-8">
            <img className="mx-auto d-block img-fluid partner-img" src="public/assets/harpercollins.png" style={imgStyle} />
            <p style={pStyle}>Insurrection Media, Inc. and HarperCollins Publishers have agreed to a strategic framework where key books in SciFi, Drama, and Comedy will be optioned and developed into digital video and linear television series. The arrangement will be collaborative in that Insurrection and HarperCollins will jointly identify key titles that are most compelling and suitable for video series and then co-develop and produce shows to be owned and distributed by Insurrection in the U.S. and overseas on a multitude of over-the-top and linear video platforms.

              The first candidate for development is the Mila 2.0 trilogy, written by Debra Driza and published by Katherine Tegen Books, an imprint of HarperCollins Children's Books. The series is a suspenseful drama about a young woman who discovers that she is an artificial intelligence experiment with a dark secret past.
            </p>
          </div>
        </div>

      </div>
    )
  }


export default Partners_Content

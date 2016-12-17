// here is where we put a 404 page

import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'
import Press_2 from './Press_2'

const Press = React.createClass ({
	getInitialState() {
    	return { show: false };
  	},

    render() {
    	let close = () => this.setState({ show: false });

    	return (
	      <div className="container-fluid">
	        <h1 id="sectionHeading">Press</h1>
	        <div className="press">
	        	{/*<div className="row">
	        		<div className="col-lg-6">*/}
			        	<div className="pressPdf">
			        		<div className="img1">
				        		<img className="pressImg" id="img1" src="public/assets/press/variety_img.jpg" onClick={() => this.setState({ show: true})}></img>
				        	</div>
				        	<span className="enlarge">Click to Enlarge (+)</span>
				        </div>
				    </div>
		        	<Modal
		        		bsSize="large"
		        		height="100%"
			            show={this.state.show}
			            onHide={close}
			            container={this}
			            aria-labelledby="contained-modal-title"
			        >
			        	<Modal.Header closeButton>
			        		Media Press Releases
				        </Modal.Header>
			          <Modal.Body>
			            <iframe src="public/assets/press/variety.pdf" width="100%" height="450px"></iframe>
			          </Modal.Body>

			        </Modal>
			        <div className="col-lg-6">
			        	<Press_2 />
			        {/*</div>
			    </div>*/}
	        </div>
	      </div>
        )
    }
})


export default Press

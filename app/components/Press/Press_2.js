// here is where we put a 404 page

import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Modal from 'react-bootstrap/lib/Modal'

const Press_2 = React.createClass ({
	getInitialState() {
    	return { show: false };
  	},

    render() {
    	let close = () => this.setState({ show: false });

    	return (
	        <div className="press_2">
	        	<div className="pressPdf">
	        		<div className="img1">
		        		<img className="pressImg" id="img1" src="public/assets/press/press_announcements.jpg" onClick={() => this.setState({ show: true})}></img>
		        	</div>
		        	<span className="enlarge">Click to Enlarge (+)</span>
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
		        		Insurrection Media Press Announcements
			        </Modal.Header>
		          <Modal.Body>
		            <iframe src="public/assets/press/press_announcements.pdf" width="100%" height="450px"></iframe>
		          </Modal.Body>

		        </Modal>
	        </div>
        )
    }
})


export default Press_2

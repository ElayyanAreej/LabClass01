import React from 'react';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Modal';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
    // const [show, setShow] = useState(false);
    constructor(props){
        super(props);
        this.state={

        }
    }

     handleClose = () => {
         this.props.setShow(false)}
     handleShow = () => {
         this.props.setShow(true)}

    render(){
        return (
            <>
            <Button variant="primary" onClick={this.handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={this.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )
    }


}
export default SelectedBeast;
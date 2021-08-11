import React from 'react';
import Card from 'react-bootstrap/Card';
// import ModalHeader from 'react-bootstrap/ModalHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Modal';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  // const [show, setShow] = useState(false);

  // constructor(props){
  //     super(props);
  //     this.state={

  //     }
  // }

  //  handleClose = () => {
  //      this.props.setShow(false)}
  //  handleShow = () => {
  //      this.props.setShow(true)}
  updateState = () => {
    this.props.updateState();

  }

  closeState = () => {
    this.props.closeState();
  }

  render() {
    return (
            <>

        <Modal show={this.props.show} onHide={this.closeState}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <img src={this.props.image_url}/>
                <p>{this.props.description}</p> */}


              <Card.Img variant="top" src={this.props.image_url} />
              {this.props.description}

              {/* <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description}
                    </Card.Text>
                    </Card.Body> */}


          </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.closeState}>
                Close
              </Button>
            </Modal.Footer>
            </Modal>
          </>
        )
    }


}
        export default SelectedBeast;
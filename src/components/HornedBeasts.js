import React from 'react';
import './HornedBeasts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }

    addVote = () => {
        this.setState({
            votes: this.state.votes + 1
        })
    }

    // handleClick=(event)=>{
    //     event.preventDefualt();
    //     this.updateStateFun2();
    //     console.log(this.show);
    //     }

    updateState =()=>{
        this.props.updateState();
        console.log(this.props.title);
        // showPicture = (title) => {
        //     let pickedImage = ImgData.find(playImage => {
        //       if (playImage.title === title) {
        //         return playImage;
        //       }
        //     })
        //     this.setState({
        //       picture: pickedImage,
        //       Show: true,
        //     })
        //   }
       this.props.updateStateData(this.props.title,this.props.description,this.props.imageUrl);
          }
            
      

    render() {
        return (
            // <div>
            // <h2> {this.props.title}</h2>
            // <img onClick={this.addVote} src={this.props.imageUrl}  alt={this.props.title} title={this.props.title}></img>
            // <p>{this.props.description}</p>
            // <p>{this.state.votes}</p>

            // </div>
            <div>
            <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={this.props.imageUrl} onClick={this.updateState}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                    {this.props.description} ❤ {this.state.votes}
                    </Card.Text>
                    <Button variant="primary"  onClick={this.addVote}>Click Me To Vote! </Button>
                </Card.Body>
            </Card></div>
        )
    }
}

export default HornedBeasts;
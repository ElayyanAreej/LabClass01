import React from 'react';
import Form from 'react-bootstrap/Form'

class MyForm extends React.Component{
    updatePage =(event)=>{
        this.props.updatePage();
          }
            
    render(){
        return (
            <>
            <p>Select Number Of Horns</p>
<Form.Select aria-label="Default select example" onChange={this.props.updatePage} value={this.value} >
  <option value="-1">All Horns</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option value="100">One Hundred!!</option>
</Form.Select>
            </>
        )
    }
}
export default MyForm;
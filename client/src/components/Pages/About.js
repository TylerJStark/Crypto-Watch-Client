import React, {Component} from "react";
//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
import ListGroup from "../ListGroup";

class About extends Component {
  render () {
    return (
      <div>
          <Column size="col-3 text-center">
            <ListGroup/>
          </Column>
      </div> 
    )
  }
}
  
export default About;
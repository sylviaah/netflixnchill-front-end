/*import React from 'react';
import styled from 'styled-components';


const NavWrapper = styled.div`
    width: 100;
`;

const NavBG = styled.div``;

const NavItem = styled.div``;

const NavBar = () => {
    return <NavWrapper>
        <NavBG>
            <NavItem>Planning</NavItem>
            <NavItem>Watching</NavItem>
            <NavItem>Complete</NavItem>
        </NavBG>
    </NavWrapper>
}

NavBar.defaultProps = {

}

export default NavBar;*/

import React from "react";
import ReactDOM from "react-dom";

class Nav1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: "Planning"
    };
  }
  changeColor = () => {
    this.setState({ progress: "Planning" });
    document.getElementById("planning").style.color = "orange";
    document.getElementById("watching").style.color = "black";
    document.getElementById("completed").style.color = "black";

    document.getElementById("planning").style.backgroundColor = "white";
    document.getElementById("watching").style.backgroundColor = "gray";
    document.getElementById("completed").style.backgroundColor = "gray";
  };
  changeWatching = () => {
    this.setState({ progress: "Watching" });
    document.getElementById("planning").style.color = "black";
    document.getElementById("watching").style.color = "orange";
    document.getElementById("completed").style.color = "black";

    document.getElementById("planning").style.backgroundColor = "gray";
    document.getElementById("watching").style.backgroundColor = "white";
    document.getElementById("completed").style.backgroundColor = "gray";
  };
  changeCompleted = () => {
    this.setState({ progress: "Completed" });
    document.getElementById("planning").style.color = "black";
    document.getElementById("watching").style.color = "black";
    document.getElementById("completed").style.color = "orange";

    document.getElementById("planning").style.backgroundColor = "gray";
    document.getElementById("watching").style.backgroundColor = "gray";
    document.getElementById("completed").style.backgroundColor = "white";
  };
  render() {
    return (
      <div>
        <h1>Nav Bar Test {this.state.brand}</h1>
        <p>State : {this.state.progress}</p>

        <button
          id="planning"
          type="button"
          style={{ backgroundColor: "white", color: "orange" }}
          onClick={this.changeColor}
        >
          Planning
        </button>
        <button
          id="watching"
          type="button"
          style={{ backgroundColor: "gray" }}
          onClick={this.changeWatching}
        >
          Watching
        </button>
        <button
          id="completed"
          style={{ backgroundColor: "gray" }}
          type="button"
          onClick={this.changeCompleted}
        >
          Completed
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Nav1 />, document.getElementById("root"));

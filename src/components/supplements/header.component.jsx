import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      nbCard: 10
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ nbCard: e.target.value });
  }

  render(){
    return(
      <nav className="supp-header">
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>
            <Link to={`/monstres/1`}>Set1</Link>
          </li>
          <li>
            <Link to={`/monstres/2`}>Set2</Link>
          </li>
          <li>
            <Link to={`/monstres/3`}>Set3</Link>
          </li>
          <li>
            <Link to={`/monstres/4`}>Set4</Link>
          </li>
          <li>
            <select  onChange={this.handleChange}>
              <option value="">--Choisisez un nombre de cartes--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </li>
        </ul>
    </nav>
    )
  }
}
export default Header
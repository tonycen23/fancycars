import React, { Component } from 'react';
import { filterTypes } from '../utils/filterTypes';
import PropTypes from 'prop-types';
import '../stylesheets/filterdropdown.css';

class FilterDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }

    this.handleSort = this.handleSort.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ open: !this.state.open })
  }

  handleSort(type) {
    const { sort } = this.props;

    this.setState({ open: false });

    sort(type)
  }

  render() {
    const { open } = this.state;

    return (
      <div className="filter-dropdown">
        <span onClick={() => this.toggleMenu() }>Filter &#8964;</span>
        { open && (
          <div className="dropdown-content">
            <ul>
              <li><a onClick={()=>this.handleSort(filterTypes.nameASC)}>Sort By Name: A&#8208;Z</a></li>
              <li><a onClick={()=>this.handleSort(filterTypes.nameDSC)}>Sort By Name: Z&#8208;A</a></li>
              <li><a onClick={()=>this.handleSort(filterTypes.availability)}>Sort By Availability</a></li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

FilterDropdown.propTypes = {
  sort: PropTypes.func
}

export default FilterDropdown

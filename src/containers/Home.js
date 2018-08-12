import React, { Component } from 'react';
import { connect } from 'react-redux';
import { requestCars, setCarsFilter } from '../actions';
import { Card } from '../components/Card';
import FilterDropdown from '../components/FilterDropdown';
import PropTypes from 'prop-types';

import * as selectors from '../reducers/selectors';
import '../stylesheets/home.css';

class Home extends Component {
  constructor(props){
    super(props)

    this.sort = this.sort.bind(this);
  }

  componentWillMount() {
    document.title = "Fancy Cars"

    this.props.requestCars();
  }

  sort(type) {
    this.props.setCarsFilter(type);
  }

  renderFilterSection() {
    return (
      <div className="filter-section">
        <div className="filter-content">
          <h1 className="filter--heading">Our Fancy Cars</h1>
          <FilterDropdown sort={this.sort} />
        </div>
      </div>
    );
  }

  renderCars(cars) {
    return cars.map((car, index) => {
      return (
        <div className="car-column" key={`${car.name}`}>
          <Card car={car} />
        </div>
      );
    })
  }

  render() {
    const { cars, error } = this.props;

    if (error) {
      return <div>Unexpected Error</div>
    }

    const mainContent = cars ? (
      <div className="row">
        { this.renderFilterSection() }
        <div className="clearfix"></div>
        { this.renderCars(cars) }
      </div>
    ) : (
      <div>Loading...</div>
    );

    return (
      <main>
        <header className="header">
          <div className="overlay"></div>
          <div className="header-text">
            <h1>Fancy Cars</h1>
            <span>Take a look on our new fancy cars</span>
          </div>
        </header>
        <section className="cars-listing-section">
          <div className="container">
            { mainContent }
          </div>
        </section>
      </main>
    );
  }
}

Home.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.object),
  error: PropTypes.bool,
  requestCars: PropTypes.func,
  setCarsFilter: PropTypes.func
}

const mapStateToProps = (state) => ({ cars: selectors.getCarsAndAvailabilties(state), error: state.error });

export default connect(mapStateToProps, { requestCars, setCarsFilter })(Home);

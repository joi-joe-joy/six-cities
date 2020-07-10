import React, {PureComponent} from 'react';
import classnames from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/place/place.js";
import IconArrowSelect from "../../Icons/icon-arrow-select.svg";
import pt from 'prop-types';

const options = [
  {value: `popular`, label: `Popular`},
  {value: `to-high`, label: `Price: low to high`},
  {value: `to-low`, label: `Price: high to low`},
  {value: `top-rated`, label: `Top rated first`},
];

const withSort = (Component) => {
  class WithSort extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        selected: {value: `popular`, label: `Popular`},
        isOpen: false
      };
      this.handleOptionClick = this.handleOptionClick.bind(this);
      this.handleSelectToggle = this.handleSelectToggle.bind(this);
    }

    handleSelectToggle() {
      this.setState((state) => ({
        isOpen: !state.isOpen
      }));
    }

    handleOptionClick(option) {
      const {changeSorting} = this.props;
      this.setState({
        selected: option,
        isOpen: false
      });
      changeSorting(option.value);
    }

    render() {
      const {selected, isOpen} = this.state;
      const optionsClassName = classnames(
          `places__options places__options--custom`, {
            'places__options--opened': isOpen
          }
      );

      return (
        <Component
          {...this.props}
        >
          <span className="places__sorting-type" tabIndex="0"
            onClick={this.handleSelectToggle}>
            {selected.label}
            <IconArrowSelect width="7" height="4"
              style={{marginLeft: `5px`, marginBottom: `1px`}}/>
          </span>
          <ul className={optionsClassName}>
            {options.map((option) => (
              <li key={option.value} tabIndex="0"
                onClick={() => this.handleOptionClick(option)}
                className={classnames(`places__option`, {
                  'places__option--active': option.value === selected.value
                })}
              >{option.label}</li>
            ))}
          </ul>
        </Component>
      );
    }
  }

  WithSort.propTypes = {
    changeSorting: pt.func.isRequired
  };

  const mapDispatchToProps = (dispatch) => ({
    changeSorting(sorting) {
      dispatch(ActionCreator.changeSorting(sorting));
    }
  });

  return connect(undefined, mapDispatchToProps)(WithSort);
};

export default withSort;


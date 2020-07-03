import React, {PureComponent} from 'react';

const withActiveItem = (Component) => {
  class WithActiveItem extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeItemId: null
      };
      this.handleItemGetActive = this.handleItemGetActive.bind(this);
    }

    handleItemGetActive(itemId) {
      if (this.state.activeItemId !== itemId) {
        this.setState({
          activeItemId: itemId
        });
      }
    }

    render() {
      const {activeItemId} = this.state;
      return (
        <Component
          {...this.props}
          activeItemId={activeItemId}
          onCardHover={this.handleItemGetActive}
        />
      );
    }
  }

  WithActiveItem.propTypes = {};

  return WithActiveItem;
};

export default withActiveItem;

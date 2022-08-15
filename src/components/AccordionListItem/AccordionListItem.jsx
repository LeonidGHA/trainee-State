import { Component } from 'react';
import AccordionQuestion from './AccordionQuestion';

const btnId = {
  collapse: 'collapse - all',
  expand: 'expand-all',
};

class AccordionListItem extends Component {
  state = {
    isShow: false,
  };

  clickBtn = e => {
    if (e.target.id === btnId.expand) {
      return this.setState({
        isShow: true,
      });
    }
    if (e.target.id === btnId.collapse) {
      return this.setState({
        isShow: false,
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="accordion">
          <h1>FAQ</h1>
          <button
            type="button"
            className="btn"
            onClick={this.clickBtn}
            id={btnId.expand}
          >
            Expand All
          </button>
          <button
            type="button"
            className="btn"
            onClick={this.clickBtn}
            id={btnId.collapse}
          >
            Collapse All
          </button>
          {this.state.isShow && <AccordionQuestion />}
        </div>
      </div>
    );
  }
}

export default AccordionListItem;

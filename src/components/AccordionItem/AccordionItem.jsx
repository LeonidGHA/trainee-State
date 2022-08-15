import { Component } from 'react';

class AccordionItem extends Component {
  state = {
    isShow: false,
  };

  clickBtn = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };

  render() {
    const { clickBtn } = this;
    return (
      <div>
        <button type="button" onClick={clickBtn}>
          Click me!
        </button>

        {this.state.isShow && (
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu
              interdum diam. Donec interdum porttitor risus non bibendum.
              Maecenas sollicitudin eros in quam imperdiet placerat. Cras justo
              purus, rhoncus nec lobortis ut, iaculis vel ipsum. Donec dignissim
              arcu nec elit faucibus condimentum. Donec facilisis consectetur
              enim sit amet varius. Pellentesque justo dui, sodales quis luctus
              a, iaculis eget mauris. Aliquam dapibus, ante quis fringilla
              feugiat, mauris risus condimentum massa, at elementum libero quam
              ac ligula. Pellentesque at rhoncus dolor. Duis porttitor nibh ut
              lobortis aliquam. Nullam eu dolor venenatis mauris placerat
              tristique eget id dolor. Quisque blandit adipiscing erat vitae
              dapibus. Nulla aliquam magna nec elementum tincidunt.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default AccordionItem;

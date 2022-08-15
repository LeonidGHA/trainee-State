import { Component } from 'react';

class ListPersonSerial extends Component {
  state = {
    persons: this.props.persons,
    // persons: [],
  };
  //   componentDidMount() {
  //     console.log('hello kitty');
  //     this.setState({
  //       persons: this.props.persons,
  //     });
  //   }
  deletePerson = e => {
    console.log(e);
    const { id } = e.target;
    console.log(typeof id);
    this.setState(prevState => {
      const array = prevState.persons.filter(el => {
        console.log(el.id !== id);
        return Number(el.id) !== Number(id);
      });

      return {
        persons: array,
      };
    });
  };

  render() {
    console.log(this.state.persons);
    return (
      <ul>
        {this.state.persons.map(({ id, name, secondName, age }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{secondName}</p>
            <p>{age}</p>
            <button type="button" onClick={this.deletePerson} id={id}>
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ListPersonSerial;

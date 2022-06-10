import { Component } from 'react';

export class Searchbar extends Component {
  state = { text: '' };

  onSubmitForm = e => {
    e.preventDefault();
    if (this.state.text.trim() === '') {
      alert('введите значение ');
      return;
    }
    const onSubmit = this.props.onSubmit;

    const state = this.state;
    onSubmit(state);
  };

  handelInputChange = e => {
    const text = e.currentTarget.value.toLowerCase();
    this.setState({ text });
  };

  render() {
    return (
      <header>
        <form onSubmit={this.onSubmitForm}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            placeholder="Search images and photos"
            value={this.state.text}
            onChange={this.handelInputChange}
          />
        </form>
      </header>
    );
  }
}

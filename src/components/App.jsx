import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ServiceAPI } from './Api';

export class App extends Component {
  state = {
    text: '',
    images: [],
    page: 1,
  };

  onSearchText = text => {
    this.setState(text);
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.text !== this.state.text ||
      this.state.page !== prevState.page
    ) {
      ServiceAPI(this.state.text, this.state.page).then(data =>
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data],
          };
        })
      );
    }
  }

  getNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onSearchText} />

        {this.state.images.length > 0 ? (
          <ImageGallery data={this.state.images} />
        ) : null}

        <button
          type="button"
          onClick={() => {
            this.getNextPage();
          }}
        >
          next
        </button>
      </div>
    );
  }
}

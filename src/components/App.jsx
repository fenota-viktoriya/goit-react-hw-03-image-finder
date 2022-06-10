import { Component } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ServiceAPI } from './Api';
import { Loader } from './Loader/Loader';
import { Modals } from './Modal/Modal';

export class App extends Component {
  state = {
    text: '',
    images: [],
    page: 1,
    loader: false,
    showModal: false,
    modalImg: '',
  };

  toggleModal = img => {
    this.setState(prev => ({
      showModal: !prev.showModal,
      modalImg: img,
    }));
  };

  onSearchText = text => {
    this.setState(text);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.text !== this.state.text) {
      this.setState({
        loader: true,
        page: 1,
        images: [],
        modalImg: '',
      });
    }
    if (
      prevState.text !== this.state.text ||
      this.state.page !== prevState.page
    ) {
      ServiceAPI(this.state.text, this.state.page).then(data =>
        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data],
            loader: false,
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
        {this.state.showModal && (
          <Modals
            img={this.state.modalImg}
            alt={'asdasd'}
            closeModal={this.toggleModal}
          />
        )}
        {this.state.loader && <Loader />}

        <Searchbar onSubmit={this.onSearchText} />

        {this.state.images.length > 0 ? (
          <ImageGallery
            data={this.state.images}
            toggleModal={this.toggleModal}
          />
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

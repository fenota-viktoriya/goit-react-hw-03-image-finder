import { PureComponent } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { createPortal } from 'react-dom';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ServiceAPI } from './Api';
import { Loader } from './Loader/Loader';
import { Modals } from './Modal/Modal';
const modalRoot = document.querySelector('#modal-root');
export class App extends PureComponent {
  state = {
    text: '',
    images: [],
    page: 1,
    loader: false,
    showModal: false,
    modalImg: '',
    tags: '',
  };

  toggleModal = (img, tags) => {
    this.setState(prev => ({
      showModal: !prev.showModal,
      modalImg: img,
      tags: tags,
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
        tags: '',
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
        {this.state.showModal &&
          createPortal(
            <Modals
              img={this.state.modalImg}
              alt={this.state.tags}
              closeModal={this.toggleModal}
            />,
            modalRoot
          )}
        {this.state.loader && <Loader />}

        <Searchbar onSubmit={this.onSearchText} />

        {this.state.images.length > 0 ? (
          <ImageGallery
            data={this.state.images}
            toggleModal={this.toggleModal}
          />
        ) : null}

        {this.state.images.length > 1 && (
          <button
            type="button"
            onClick={() => {
              this.getNextPage();
            }}
          >
            next
          </button>
        )}
      </div>
    );
  }
}

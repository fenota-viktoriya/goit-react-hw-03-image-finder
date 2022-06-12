import { PureComponent } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { createPortal } from 'react-dom';
import { Container } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ServiceAPI } from '../Api';
import { Loader } from '../Loader/Loader';
import { Modals } from '../Modal/Modal';
import { ButtonNext } from 'components/Button/Button';
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
      this.setState({ loader: true });
      ServiceAPI(this.state.text, this.state.page).then(data => {
        if (data.length < 1) {
          alert('opps!');
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data],
            loader: false,
          };
        });
      });
    }
  }

  getNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  render() {
    return (
      <Container>
        {this.state.showModal &&
          createPortal(
            <Modals
              img={this.state.modalImg}
              alt={this.state.tags}
              closeModal={this.toggleModal}
            />,
            modalRoot
          )}

        <Searchbar onSubmit={this.onSearchText} />

        {this.state.images.length > 0 ? (
          <ImageGallery
            data={this.state.images}
            toggleModal={this.toggleModal}
          />
        ) : null}
        {this.state.loader && <Loader />}
        {this.state.images.length > 1 && (
          <ButtonNext getNextPage={this.getNextPage} />
        )}
      </Container>
    );
  }
}

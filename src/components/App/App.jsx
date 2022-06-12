import { PureComponent } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { createPortal } from 'react-dom';
import { Container } from './App.styled';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery';
import { ServiceAPI } from '../../service/Api';
import { Loader } from '../Loader';
import { Modals } from '../Modal';
import { ButtonNext } from '../Button';

const modalRoot = document.querySelector('#modal-root');
const PER_PAGE = 12;

export class App extends PureComponent {
  state = {
    text: '',
    images: [],
    page: 1,
    loader: false,
    showModal: false,
    modalImg: '',
    tags: '',
    totalHits: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { text, page } = this.state;
    if (prevState.text !== text) {
      this.setState({
        page: 1,
        images: [],
        modalImg: '',
        tags: '',
        totalHits: '',
      });
    }
    if (prevState.text !== text || page !== prevState.page) {
      this.setState({ loader: true });
      ServiceAPI(text, page).then(data => {
        if (data.hits.length < 1) {
          alert('opps, ничего не найдено!');
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...data.hits],
            loader: false,
            totalHits: data.totalHits,
          };
        });
      });
    }
  }

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

  getNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { modalImg, showModal, tags, images, loader, totalHits, page } =
      this.state;
    return (
      <Container>
        {showModal &&
          createPortal(
            <Modals img={modalImg} alt={tags} closeModal={this.toggleModal} />,
            modalRoot
          )}

        <Searchbar onSubmit={this.onSearchText} />

        {images.length > 0 ? (
          <ImageGallery data={images} toggleModal={this.toggleModal} />
        ) : null}

        {loader && <Loader />}

        {totalHits > page * PER_PAGE && (
          <ButtonNext getNextPage={this.getNextPage} />
        )}
      </Container>
    );
  }
}

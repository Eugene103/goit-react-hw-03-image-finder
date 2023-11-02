import { ModalImg } from 'components/ModalImg/ModalImg';
import { Component } from 'react';
import { Image } from "./ImageGalleryItem.styled";

export class ImageGalleryItem extends Component {
state = {
    setIsOpen: false
    }
    openModal = () => {
        this.setState({setIsOpen: true})
    }
    closeModal = () => {
        this.setState({setIsOpen: false})
    }
    render() {
        const { item: { webformatURL, largeImageURL, tags } } = this.props

        return < ><Image src={webformatURL} alt={tags}  onClick={this.openModal}></Image>
                <ModalImg state={this.state.setIsOpen} onClose={this.closeModal} imageUrl={largeImageURL} tags={tags} />
                </>
    }
}

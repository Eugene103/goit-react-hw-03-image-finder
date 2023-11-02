import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { List, Item } from "./ImageGallery.styled";

export const ImageGallery = ({ images }) => {
    const {hits} = images
    if (images.length === 0) {
        console.log(`0 rez`)
        return
    } return (<List>{hits.map(item => <Item key={item.id}>
<ImageGalleryItem item={item} />
    </Item>)}</List>)
}



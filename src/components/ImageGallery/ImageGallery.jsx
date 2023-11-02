import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem"
import { List, Item } from "./ImageGallery.styled";

export const ImageGallery = ({ images }) => {
    const { hits } = images
    const result = hits.filter((el => f => !el.has(f.id) && el.add(f.id))(new Set()));
    if (result.length === 0) {
        console.log(`0 rez`)
        return
    } return (<List>{result.map(item => <Item key={item.id}>
<ImageGalleryItem item={item} />
    </Item>)}</List>)
}
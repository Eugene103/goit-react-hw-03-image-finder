import { LoadMoreBtn } from "./Button.styled";

export const Button = ({onChange}) => {
    return <LoadMoreBtn type="button" onClick={onChange}>Load more</LoadMoreBtn>
}
import { fetchImages } from "Api";
import { Button } from "components/Button/Button";
import { ImageGallery } from "components/ImageGallery/ImageGallery";
import { Loader } from "components/Loader/Loader";
import { SearchBar } from "components/Searchbar/SearchBar";
import { Component } from "react";
import { Layot } from "./Layout";

export class App extends Component{
  state = {
    imageItem: [],
    page: 1,
    descriptor: "",
    error: false,
    loading: false
  };
  
  async componentDidUpdate(prevProps, prevState) {
  if (prevState.descriptor !== this.state.descriptor ||
      prevState.page !== this.state.page) {
      const { page, descriptor} = this.state
    try {
      this.setState({loading: true, error: false})
      const images = await fetchImages(page, descriptor);
      this.setState({imageItem: images})
    } catch (error) {
      this.setState({ error: true })
      alert(`Reload page`)
    } finally {
      this.setState({loading: false})
    }
    }
  }
  changeDescriptor = (value) => {
    this.setState({
      descriptor: value,
      page: 1,
    })
    
  }
  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }
  checkHitsLength = () => {
    if (this.state.imageItem.length === 0) {
      return
    } return this.state.imageItem.hits.length
  }
  render() {
    return <Layot>
      <SearchBar onChange={this.changeDescriptor} />
      <Loader visible={this.state.loading} />
      {this.state.imageItem.totalHits > 0 && <ImageGallery images={this.state.imageItem} />}
      {this.checkHitsLength() === 12 && <Button onChange={this.changePage} />}
    </Layot>
  }
}

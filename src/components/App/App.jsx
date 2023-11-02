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
    loading: false,
    loadMore: false,
  };
  
  async componentDidUpdate(prevProps, prevState) {
    if (prevState.descriptor !== this.state.descriptor ||
      prevState.page !== this.state.page) {
      const { page, descriptor} = this.state
      try {
        this.setState({ loading: true, error: false})
        const images = await fetchImages(page, descriptor);

        if (images.hits.length === 12) {
          this.setState({loadMore: true})
        } else {
          this.setState({loadMore: false})
        }

        if (this.state.imageItem.length === 0) {
          this.setState({ imageItem: images })
          return
        } 
        this.setState((prevState) => (
          prevState.imageItem.hits.push(...images.hits)))
    } catch (error) {
        this.setState({ error: true })
        console.log(error)
      alert(`Reload page`)
    } finally {
      this.setState({loading: false})
    }
    }
  }
  changeDescriptor = (value) => {
    if (this.state.descriptor === value) {
      return
    } this.setState({
      descriptor: value,
      page: 1,
      imageItem: [],
    })
  }
  changePage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }
  render() {
    return <Layot>
      <SearchBar onChange={this.changeDescriptor} />
      <Loader visible={this.state.loading} />
      {this.state.imageItem.totalHits > 0 && <ImageGallery images={this.state.imageItem} />}
      {this.state.loadMore && <Button onChange={this.changePage} />}
    </Layot>
  }
}

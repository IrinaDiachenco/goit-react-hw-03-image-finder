import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import s from './App.module.css';

export default class App extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = searchQuery => {
    if (searchQuery === this.state.searchQuery || searchQuery === '') return;
    this.setState(() => ({ searchQuery }));
  };

  render() {
    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleChange} />
        <ImageGallery searchQuery={this.state.searchQuery} />
      </div>
    );
  }
}

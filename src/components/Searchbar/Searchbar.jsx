import React, { Component } from 'react';
import PropTypes from "prop-types";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
import s from './Searchbar.module.css';

export default class Searchbar extends Component {

  static propTypes = {
  onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: '',
  } 

  reset = () => {
    this.setState({ searchQuery: '' });
  };
  

  onSubmitForm = e => {
    const { searchQuery } = this.state;

    e.preventDefault();
    
    if (searchQuery.trim() === '') {
      toast.error('Enter search word');
      return;
    }

    this.props.onSubmit(searchQuery);

    this.reset();
  };

  onChangeInput = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      
      <header>
        <div className={s.Searchbar}>
         
        <form  onSubmit={this.onSubmitForm} className={s.SearchForm}>
          <button type="submit" className={s.button}>
            <span className={s.label}>Search</span>
          </button>
          
          <input
            className={s.input}
            type="text"
              autoFocus
              autoComplete="off"
            placeholder="Search images and photos"
            value={searchQuery}
            onChange={this.onChangeInput}
          />
          </form>
          </div>
      </header>      
    );
  }
};

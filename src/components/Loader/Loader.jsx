import { Component } from 'react';
import Loader from 'react-loader-spinner';
//import s from './Loader.module.css';


export default class Preloader extends Component {
  
  render() {
    return (
      <div>
      <Loader 
       type="Grid"
        color="#43a047"
        height={70}
        width={70}
        />
      </div>
    );
  }
}
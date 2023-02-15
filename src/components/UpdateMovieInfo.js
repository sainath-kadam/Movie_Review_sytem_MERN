import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

class UpdateMovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      rating: '',
      director: '',
      actor: '',
      description: '',
      released_date: ''
      
    };
  }

  componentDidMount() {
    // console.log("Print id: " + window.location.href.split('/')[4]);
    axios
      .get('http://localhost:8082/api/movies/'+window.location.href.split('/')[4])
      .then(res => {
        console.log("Res : "+res.data.title);
        
        this.setState({
          title: res.data.title,
          rating: res.data.rating,
          director: res.data.director,
          actor: res.data.actor,
          description: res.data.description,
          released_date: res.data.released_date,
          
        })
      })
      .catch(err => {
        console.log("Error from UpdateMoviesInfo");
      })
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const data = {
      title: this.state.title,
      rating: this.state.rating,
      director: this.state.director,
      description: this.state.description,
      released_date: this.state.released_date,
      actor: this.state.actor
    };

    axios
      .put('http://localhost:8082/api/movies/'+window.location.href.split('/')[4], data)
      .then(res => {
        window.history.back();
        // window.history.back();
        
      })
      .catch(err => {
        console.log("Error in UpdateBookInfo!");
      })
  };


  render() {
    return (
      <div className="UpdateMovieInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show Review List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Movie</h1>
              <p className="lead text-center">
                  Update Movie's Review 
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={this.onSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
              <input
                type='text'
                placeholder='Title of the Movie'
                name='title'
                className='form-control'
                value={this.state.title}
                onChange={this.onChange}
              />
            </div>
            <br />

            <div className='form-group'>
            <label htmlFor="isbn">Rating</label>
              <input
                type='int'
                placeholder='Rating'
                name='rating'
                className='form-control'
                value={this.state.rating}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="director">Director</label>
              <input
                type='text'
                placeholder='Director'
                name='director'
                className='form-control'
                value={this.state.director}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="description">Description</label>
              <input
                type='text'
                placeholder='Review this Movie'
                name='description'
                className='form-control'
                value={this.state.description}
                onChange={this.onChange}
              />
            </div>

            <div className='form-group'>
            <label htmlFor="released_date">Released Date</label>
              <input
                type='date'
                placeholder='released_date'
                name='released_date'
                className='form-control'
                value={this.state.released_date}
                onChange={this.onChange}
              />
            </div>
            <div className='form-group'>
            <label htmlFor="actor">Actor</label>
              <input
                type='text'
                placeholder='Actor of this Movie '
                name='actor'
                className='form-control'
                value={this.state.actor}
                onChange={this.onChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Review</button>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default UpdateMovieInfo;
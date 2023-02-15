import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


class CreateMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      rating:'',
      director:'',
      actor:'',
      released_date:'',
      description:''
      
      
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    window.history.back();

    const data = {
      title: this.state.title,
      rating: this.state.rating,
      director: this.state.director,
      actor: this.state.actor,
      released_date: this.state.released_date,
      description: this.state.description,
      
      
    };

    axios
      .post('http://localhost:8082/api/movies', data)
      .then(res => {
        this.setState({
          title: '',
          rating:'',
          director:'',
          actor:'',
          released_date:'',
          description:''
          
          
        })
        this.props.history.push('/');
      })
      .catch(err => {
        console.log("Error in CreateMovieReview!");
      })
  };

  render() {
    return (
      <div className="CreateMovie">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/ShowMovieList" className="btn btn-outline-warning float-left">
                  Show All Review
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Review</h1>
              <p className="lead text-center">
                  Create new Review
              </p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className='form-group'>
                  <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={this.state.title}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className='form-group'>
                  <input
                    type='number'
                    placeholder='rating'
                    name='rating'
                    className='form-control'
                    value={this.state.rating}
                    onChange={this.onChange}
                  />
                </div>

                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Acotor of This Movie'
                    name='actor'
                    className='form-control'
                    value={this.state.actor}
                    onChange={this.onChange}
                  />
                </div>
                <div className='form-group'>
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
                  <input
                    type='text'
                    placeholder='Describe this Movie'
                    name='description'
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                
              

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateMovie;
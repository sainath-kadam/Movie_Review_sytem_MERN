import React, {useState} from 'react';
  function HomePage(){
    const [searching, setSearching] = useState(false);
    const [message, setMessage] = useState(null);
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const searchMovies = async(e) =>{
        e.preventDefault();
        setSearching(true);
        const url ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";;
         try{
            const response = await fetch(url);
            const data = await response.json();
            setMessage(null);
            setMovies(data.Search);
            setSearching(false);
         }catch(err){
            setMessage('An unexpected error occured.')
            setSearching(false);
         }
    }
    return (
        <div className="container mx-auto pt-6">
           <div class="flex justify-center max-w-screen-sm mx-auto overflow-hidden px-10">
           <form class="w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative" onSubmit={searchMovies}>
             <input type="text" name="query" placeholder="Search movies by name..."
                     class="appearance-none w-full outline-none focus:outline-none active:outline-none" value={query} onChange={(e) =>setQuery(e.target.value)}/>
             <button type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
             <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
           </form>
         </div>
    
         <div class="container mx-auto">{searching && !message ? ( <span> loading... </span>): message ? ( <div className = "message"> {message} </div>): (movies.map(movie => ( 
            <div class="inline-block px-2 w-64 h-64">
                 <div class="bg-white rounded-lg overflow-hidden shadow-xl my-8 py-4"key={movie.imdbID}>
                  <img src={movie.Poster} alt="movieimage" class="w-full h-64"/>
                  <div class="p-4">
                      <p class="font-medium text-lg">Title: <span class="font-normal text-base leadin-relaxed">{movie.Title}</span></p>
                       <p class="font-medium text-lg">Year of Release: <span class="font-normal text-base">{movie.Year}</span></p></div>
                        </div>
                      </div> 
                    )))}
                </div>
            </div>
        )
        
    }


export default  HomePage
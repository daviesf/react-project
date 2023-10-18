import { React } from "react";
import './cinema.css';
import MoviePoster from './moviePoster';

const Cinema = () => {

const movieData1 = {
    title: 'Como treinar o seu dragão',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/6/62/How_to_Train_Your_Dragon_%28filme%29_Poster.jpg',
  };


  const movieData2 = {
    title: 'Vingadores',
    imageUrl: 'https://br.web.img2.acsta.net/medias/nmedia/18/89/43/82/20052140.jpg',
  };


  const movieData3 = {
    title: 'Tartarugas ninja',
    imageUrl: 'https://br.web.img3.acsta.net/pictures/23/05/31/17/15/1765372.jpg',
  };

  return (
    <div className="tabelas">
        <MoviePoster title={movieData1.title} imageUrl={movieData1.imageUrl}/>
        <MoviePoster title={movieData2.title} imageUrl={movieData2.imageUrl}/>
        <MoviePoster title={movieData3.title} imageUrl={movieData3.imageUrl}/>
    </div>
  );
  };

  export default Cinema;

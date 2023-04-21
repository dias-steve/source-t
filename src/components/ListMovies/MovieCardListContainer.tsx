import { FC } from "react"
import data from '../../assets/data.json';


export interface MovieCardProps {
title: string, imageScr: string, tag?: string
}
export default function withMovieCardListContainer(MovieCard: FC<MovieCardProps> ){
    
    const listMovies : {movie: {id: number, title: string, cover:string}[]} = data
    return function Container () {
        return (
            <>
            {listMovies.movie.map(movie => (
                <MovieCard key={movie.id} title={movie.title} imageScr={movie.cover}/>
            ))}
            </>
        )
    }

}
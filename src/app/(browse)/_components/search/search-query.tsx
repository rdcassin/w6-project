import axios from "axios";
import { DetailedMovieInfo } from "./types/detailedMovieInfo";

interface Movie {
  imdbID: string;
}

interface SearchResult {
  Search?: Movie[];
  Response: string;
  Error?: string;
}

const SearchQuery = async (
  searchValue: string
): Promise<DetailedMovieInfo[] | null> => {
  const iTypeSearch = async (
    sTypeSearchImdbId: string
  ): Promise<DetailedMovieInfo> => {
    const iTypeSearchData = await axios.get<DetailedMovieInfo>(
      `https://www.omdbapi.com/?apikey=5f082e4e&i=${sTypeSearchImdbId}`
    );
    return iTypeSearchData.data;
  };

  const sTypeSearch = async (
    searchTitle: string
  ): Promise<DetailedMovieInfo[]> => {
    const sTypeSearchMoviesData = await axios.get<SearchResult>(
      `https://www.omdbapi.com/?apikey=5f082e4e&s=${searchTitle}&type=movie`
    );

    const movieList = await Promise.all(
      sTypeSearchMoviesData.data.Search?.map((movie) =>
        iTypeSearch(movie.imdbID)
      ) ?? []
    );

    return movieList;
  };

  const resultsList = await sTypeSearch(searchValue);

  return resultsList;
};

export default SearchQuery;

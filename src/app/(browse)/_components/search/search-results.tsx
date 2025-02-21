"use client";

import { useRouter } from "next/navigation";

import { Skeleton } from "@/components/ui/skeleton";

import { useResultsStore } from "../../../../../store/use-results-store";
import { DetailedMovieInfo } from "./types/detailedMovieInfo";

interface SearchResultsProps {
  results: DetailedMovieInfo[],
}

const SearchResults = ({ results }: SearchResultsProps) => {
  const { setSelectedMovie } = useResultsStore();
  const router = useRouter();

  const handleMovieClick = (movie: DetailedMovieInfo) => {
    setSelectedMovie(movie);
    router.push(`/results/${movie.imdbID}`);
  };

  return (
    <>
      {results &&
        results.map((movie) => (
          <div
            key={movie.imdbID}
            className="px-6 py-3 lg:w-1/3 md:w-1/2 w-full max-w-[348px] max-h-[600px] cursor-pointer"
            onClick={() => handleMovieClick(movie)}
          >
            <figure>
              <img
                className="w-full h-auto max-h-[450px]"
                src={movie.Poster}
                alt={"Movie Poster"}
              />
            </figure>
            <div className="flex flex-col justify-between h-[100px]">
              <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {movie.Title}
              </p>
              <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
                Genre: {movie.Genre}
              </p>
              <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
                Rated: {movie.Rated || "N/A"}
              </p>
              <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
                Cast: {movie.Actors}
              </p>
              <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
                Runtime: {movie.Runtime}
              </p>
            </div>
          </div>
        ))}
    </>
  );
};

const SearchResultsSkeleton = () => {
  return (
    <>
      {new Array(6).fill(null).map((_, i) => (
        <div
          key={i}
          className="px-6 py-3 lg:w-1/3 md:w-1/2 w-[300px] max-w-[348px] max-h-[600px]"
        >
          <figure>
            <Skeleton className="w-full h-[450px] bg-gray-300" />
          </figure>
          <Skeleton className="flex flex-col justify-between h-[100px] bg-gray-300">
            <Skeleton className="w-full bg-gray-300"></Skeleton>
            <Skeleton className="w-full bg-gray-300"></Skeleton>
            <Skeleton className="w-full bg-gray-300"></Skeleton>
            <Skeleton className="w-full bg-gray-300"></Skeleton>
            <Skeleton className="w-full bg-gray-300"></Skeleton>
          </Skeleton>
        </div>
      ))}
    </>
  );
};

export { SearchResults, SearchResultsSkeleton };

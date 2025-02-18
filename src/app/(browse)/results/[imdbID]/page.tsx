"use client";

import { useResultsStore } from "../../../../../store/use-results-store";
import { useRouter } from "next/navigation";

const MovieDetails = () => {
  const { selectedMovie, lastSearchTerm, toggleCanReturnToResults } =
    useResultsStore();
  const router = useRouter();

  const handleBackClick = () => {
    if (lastSearchTerm) {
      toggleCanReturnToResults();
      router.push(`/results?query=${lastSearchTerm}`);
    } else {
      router.push("/results/");
    }
  };

  if (!selectedMovie) {
    return <p>No movie selected.</p>;
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="flex justify-center items-center">
          <figure>
            <img
              className="w-auto h-auto max-h-[450px]"
              src={selectedMovie.Poster}
              alt={"Movie Poster"}
            />
          </figure>
        </div>
        <div className="flex flex-col w-full ml-4">
          <p className="w-full justify-center text-center font-bold text-4xl mb-4">
            {selectedMovie.Title}
          </p>
          <div className="w-full flex flex-row justify-center items-center gap-x-8 mb-4 text-sm text-gray-500">
            <p>{selectedMovie.Year}</p>
            <p>{selectedMovie.Rated}</p>
            <p>{selectedMovie.Runtime}</p>
          </div>
          {!!selectedMovie.Ratings && (
            <div className="w-full flex flex-row justify-between items-center mb-4">
              {selectedMovie.Ratings?.map((rating) => (
                <div
                  key={rating.Source}
                  className="flex flex-col flex-grow justify-center items-center"
                  style={{ width: `${100 / selectedMovie.Ratings.length}%` }}
                >
                  <p>{rating.Source}</p>
                  <p>{rating.Value}</p>
                </div>
              ))}
            </div>
          )}
          <p className="w-full">Synopsis: {selectedMovie.Plot}</p>
          <p className="w-full">Language: {selectedMovie.Language}</p>
          <p className="w-full">Genre: {selectedMovie.Genre}</p>
          <p className="w-full">Stars: {selectedMovie.Actors}</p>
          <p className="w-full">Director: {selectedMovie.Director}</p>
          <p className="w-full">Writer: {selectedMovie.Writer}</p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          onClick={handleBackClick}
          className="cursor-pointer text-sm font-bold text-yellow-400 bg-red-600 rounded-full px-6 py-4 transition-all duration-300 ease-in-out hover:text-red-600 hover:bg-yellow-400"
        >
          BACK TO SEARCH RESULTS
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

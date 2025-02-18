import { create } from "zustand";
import { DetailedMovieInfo } from "@/app/(browse)/_components/search/types/detailedMovieInfo";

interface ResultsState {
  results: DetailedMovieInfo[] | null;
  setResults: (results: DetailedMovieInfo[] | null) => void;
  selectedMovie: DetailedMovieInfo | null;
  setSelectedMovie: (movie: DetailedMovieInfo | null) => void;
  lastSearchTerm: string | null;
  setLastSearchTerm: (term: string | null) => void;
  canReturnToResults: boolean;
  toggleCanReturnToResults: () => void;
}

export const useResultsStore = create<ResultsState>((set) => ({
  results: null,
  setResults: (results) => set({ results }),
  selectedMovie: null,
  setSelectedMovie: (movie) => set({ selectedMovie: movie }),
  lastSearchTerm: null,
  setLastSearchTerm: (term) => set({ lastSearchTerm: term }),
  canReturnToResults: false,
  toggleCanReturnToResults: () => set((state) => ({ canReturnToResults: !state.canReturnToResults })),
}));
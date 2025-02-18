"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

import { useResultsStore } from "../../../../store/use-results-store";

import { PageHeaderText } from "../_components/pageHeaderText/page-header-text";
// import { DetailedMovieInfo } from "../_components/search/types/detailedMovieInfo";
import SearchQuery from "../_components/search/search-query";
import SearchInput from "../_components/search/search-input";
import { SearchResults, SearchResultsSkeleton } from "../_components/search/search-results";

const ResultsPage = () => {
  const searchParams = useSearchParams();
  const { results, setResults, setLastSearchTerm, canReturnToResults, toggleCanReturnToResults } = useResultsStore();
  const [loading, setLoading] = useState(true);
  const searchTerm = searchParams.get("query");

  useEffect(() => {
    const loadResults = async () => {
      setLoading(true);

      if (canReturnToResults) {
        toggleCanReturnToResults();
        setLoading(false);
      } else if (searchTerm) {
        try {
          const resultsData = await SearchQuery(searchTerm);
          setLastSearchTerm(searchTerm);
          setResults(resultsData);
        } finally {
          setLoading(false);
        }
      } else {
        setLastSearchTerm("")
        setResults([]);
        setLoading(false);
      }
    };

    loadResults();
  }, [searchTerm, setResults, setLastSearchTerm, canReturnToResults, toggleCanReturnToResults]);

  return (
    <>
      <PageHeaderText title={
        !!searchTerm ? "Next Search" : "Start Your Search Now!"
      }
      />
      <SearchInput />
      {!!searchTerm && (
        <PageHeaderText title="You'll Want To Watch These"
      />)}
      <div className="flex flex-wrap justify-center items-center">
        {loading ? (
          <SearchResultsSkeleton />
        ) : results && results.length > 0 ? (
          <SearchResults results={results} />
        ) : searchTerm ? (
          <p>
            {`No results found for ${searchTerm}... This is your sign to make a movie!`}
          </p>
        ) : null}
      </div>
    </>
  );
};

export default ResultsPage;

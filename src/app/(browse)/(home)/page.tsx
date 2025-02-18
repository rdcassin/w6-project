import { LandingImage } from "./_components/landing-image";
import { PageHeaderText } from "../_components/pageHeaderText/page-header-text";
import SearchInput from "../_components/search/search-input";


export const Home = () => {
  return (
    <div>
      <PageHeaderText
        title="Find the Movies for your next Party"
        subtitle="FILTER THROUGH MOVIES NOW"
      />
      <SearchInput />
      <LandingImage />
    </div>
  );
};

export default Home;

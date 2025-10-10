import useInstalledApps from "../../Hook/useInstalledApps";
import Banner from "../../Components/Banner";
import Apps from "../Apps/Apps";
import { Link } from "react-router";

const Home = () => {
  const { installedApps, loading, error } = useInstalledApps();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading apps</p>;

  return (
    <div>
      <Banner />
      <Apps appData={installedApps} />

      <div className="flex items-center justify-center mb-3">
        <Link to="/all-apps-page" className="btn btn-active btn-primary">
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;

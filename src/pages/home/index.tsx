import { useQuery } from "react-query";
import { Metric } from "../../components/metric/metric";
import { summaryData } from "../../mock/api";

export const Home = () => {
  const query = useQuery("summary", summaryData);
  if (!query.data) {
    return <>Loading...</>;
  }
  return (
    <>
      <div>
        <img src={query.data.imageUrl} alt="lizard photo"></img>

        <div className="flex flex-wrap mt-2 mx-2">
          <Metric label="humidity">{query.data.humidity}%</Metric>
          <Metric label="temperature">{query.data.temperature}°C</Metric>
          <Metric label="uv level">{query.data.uvLevel} units</Metric>
        </div>
      </div>
    </>
  );
};

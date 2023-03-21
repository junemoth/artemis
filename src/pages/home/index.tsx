import { useQuery } from "react-query";
import { Metric } from "../../components/metric/metric";
import { summaryData } from "../../mock/api";

export const Home = () => {
  const query = useQuery("summary", summaryData);

  return (
    <>
      <div>
        {query.data ? (
          <img src={query.data.imageUrl} alt="lizard"></img>
        ) : (
          <div
            style={{ width: "100vw", height: "75vw" }}
            className="w-full bg-gray-300 animate-pulse"
          ></div>
        )}

        <div className="flex flex-wrap mt-2 mx-2">
          <Metric label="humidity">
            {query.data ? `${query.data.humidity} %` : undefined}
          </Metric>
          <Metric label="temperature">
            {query.data ? `${query.data.temperature} °C` : undefined}
          </Metric>
          <Metric label="uv level">
            {query.data ? `${query.data.uvLevel} units` : undefined}
          </Metric>
        </div>
      </div>
    </>
  );
};

import { Metric } from "../../components/metric/metric";

export const Home = () => {
  return (
    <>
      <div>
        <img src="/samplecam.jpeg" alt="lizard photo"></img>

        <div className="flex flex-wrap mt-2 mx-2">
          <Metric label="humidity">123 Units</Metric>
          <Metric label="temperature">40 degrees</Metric>
          <Metric label="uv level">700 Units</Metric>
        </div>

        <img src="/samplecam.jpeg" alt="lizard photo"></img>
        <img src="/samplecam.jpeg" alt="lizard photo"></img>
        <img src="/samplecam.jpeg" alt="lizard photo"></img>
        <img src="/samplecam.jpeg" alt="lizard photo"></img>
      </div>
    </>
  );
};

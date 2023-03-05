import { resolve } from "path";

type summaryDataResponse = {
  imageUrl: string;
  temperature: number;
  humidity: number;
  uvLevel: number;
};

export const summaryData = async (): Promise<summaryDataResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        imageUrl: "/samplecam.jpeg",
        temperature: 23,
        humidity: 40,
        uvLevel: 100,
      });
    }, 5000);
  });
};

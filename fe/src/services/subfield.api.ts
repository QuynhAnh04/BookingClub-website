import axios from "../utils/axios.customize";

interface CalculatePricePayload {
  subField_id: string;
  playDate: string;
  startTime: string;
  endTime: string;
}

interface CalculatePriceResponse {
  price: number;
}

export const calculatePriceApi = (
  payload: CalculatePricePayload
): Promise<CalculatePriceResponse> => {
  const URL_API = "/api/v1/subfield/calculate-price";

  return axios.get(URL_API, {
    params: payload,
  });
};

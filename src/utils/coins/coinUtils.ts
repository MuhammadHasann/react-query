import { axiosInstance } from "@/config/base";
import { Coins } from "@/interface/coins";

export const getCoinsRouteHandlers = async () => {
  const response = await axiosInstance.get<Coins>(`/api/coins`);
  const dataResponse = response.data;

  return dataResponse;
};

export const getCoinsServerAction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    id: 1,
    coins: 25,
  };
};

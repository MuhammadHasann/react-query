import { axiosInstance } from "@/config/base";
import { usersData } from "@/config/users";
import { Users } from "@/interface/users";

export interface GetCurrentUserFilters {
  page: number;
  limit: number;
}

export const getCurrentUserRouteHandlers = async (
  filters?: GetCurrentUserFilters
) => {
  if (!filters?.page && !filters?.limit) {
    const response = await axiosInstance.get<{ result: Users[] }>(`/api/users`);
    const dataUsers = response.data.result;

    return dataUsers;
  }

  const response = await axiosInstance.get<{ result: Users[] }>(
    `/api/users?page=${filters.page}&limit=${filters.limit}`
  );
  const dataUsers = response.data.result;

  return dataUsers;
};

export const getCurrentUserServerAction = async (
  filters?: GetCurrentUserFilters
) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return usersData;
};

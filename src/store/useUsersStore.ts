import { create } from "zustand";

import { GetCurrentUserFilters } from "@/utils/users/userUtils";

type UsersStore = {
  filters?: GetCurrentUserFilters | undefined;
  setFilters: (filters?: GetCurrentUserFilters | undefined) => void;
};

export const useUsersStore = create<UsersStore>((set) => ({
  filters: undefined,
  setFilters: (filters) => set({ filters }),
}));

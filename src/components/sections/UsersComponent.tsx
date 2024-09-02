"use client";

import { useEffect } from "react";

import { useQuery } from "@tanstack/react-query";

import { useUsersStore } from "@/store/useUsersStore";
import {
  getCurrentUserRouteHandlers,
  getCurrentUserServerAction,
} from "@/utils/users/userUtils";

const UsersComponent = () => {
  const { filters } = useUsersStore((state) => state);

  const {
    data: currentUsers,
    isLoading: loadingCurrentUser,
    isError,
  } = useQuery({
    queryKey: ["users", filters],
    queryFn: () => getCurrentUserRouteHandlers(filters),
    // queryFn: () => getCurrentUserServerAction(),
  });

  if (loadingCurrentUser)
    return (
      <h1 className="text-sm font-medium text-foreground">Loading users...</h1>
    );

  if (!currentUsers || isError)
    return <h1 className="text-sm text-destructive">Nothing data users!</h1>;

  return (
    <div className="flex flex-col gap-y-4 w-full">
      {currentUsers.map((item, index) => (
        <div key={index} className="flex flex-col gap-y-0.5 w-full">
          <span className="text-sm font-medium text-foreground">
            Name: <strong>{item.name}</strong>
          </span>
          <span className="text-sm font-medium text-foreground">
            Email: <strong>{item.email}</strong>
          </span>
        </div>
      ))}
    </div>
  );
};

export default UsersComponent;

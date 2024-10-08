"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { GetCurrentUserFilters } from "@/utils/users/userUtils";

import { useUsersStore } from "@/store/useUsersStore";

const FilterComponent = () => {
  const { filters, setFilters } = useUsersStore((state) => state);

  const [filtersValue, setFiltersValue] = useState<GetCurrentUserFilters>({
    page: 1,
    limit: 10,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFilters(filtersValue);
  };

  return (
    <form className="flex flex-col gap-y-3" onSubmit={handleSubmit}>
      <h1 className="text-sm font-semibold text-foreground">Filters</h1>
      <div className="flex flex-col gap-y-2">
        <input
          type="number"
          className="py-2 px-3 w-80 h-fit bg-background text-sm text-foreground ring-1 ring-gray-400 rounded-md transition-all duration-300 focus:ring-foreground focus:outline-none focus:border-none placeholder:text-gray-400"
          placeholder="Page"
          value={filters?.page}
          onChange={(e) =>
            setFiltersValue((prevValue) => {
              const value = {
                ...prevValue,
                page: Number(e.target.value),
              };

              return value;
            })
          }
        />
        <input
          type="number"
          className="py-2 px-3 w-80 h-fit bg-background text-sm text-foreground ring-1 ring-gray-400 rounded-md transition-all duration-300 focus:ring-foreground focus:outline-none focus:border-none placeholder:text-gray-400"
          placeholder="Limit"
          value={filters?.limit}
          onChange={(e) =>
            setFiltersValue((prevValue) => {
              const value = {
                ...prevValue,
                limit: Number(e.target.value),
              };

              return value;
            })
          }
        />
        <Button type="submit" className="py-2 px-3 size-fit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default FilterComponent;

"use client";

import { useUsersStore } from "@/store/useUsersStore";

const TestPage = () => {
  const { filters } = useUsersStore((state) => state);

  return (
    <div className="flex flex-col gap-y-2 text-sm text-foreground">
      <span>
        Page: <strong>{filters?.page}</strong>
      </span>
      <span>
        Limit: <strong>{filters?.limit}</strong>
      </span>
    </div>
  );
};

export default TestPage;

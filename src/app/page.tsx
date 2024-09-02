import FilterComponent from "@/components/fragments/form/FilterComponent";
import UsersComponent from "@/components/sections/UsersComponent";

const HomePage = () => {
  return (
    <section className="flex flex-col gap-y-6 py-10 px-16 w-full">
      <FilterComponent />
      <hr />
      <UsersComponent />
    </section>
  );
};

export default HomePage;

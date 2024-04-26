import { QueryClientProvider, useQuery } from "@tanstack/react-query";
import { queryClient } from "./lib/query-client";
import { getCountries } from "./service/get-country";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Countries />
    </QueryClientProvider>
  );
}

function Countries() {
  const { data: countries } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  return (
    <ul>
      {countries?.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;

import { supabase } from "../lib/supabase";

type Country = {
  id: number;
  name: string;
};
export async function getCountries() {
  const { data, error }: { data: Country[] | null; error: unknown } =
    await supabase.from("countries").select();

  if (error) {
    console.log(error);
    return null;
  }

  return data;
}

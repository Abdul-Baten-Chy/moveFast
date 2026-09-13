import { useQuery } from "@tanstack/react-query";
import useExiosSecure from "./useExiosSecure";

function useGetParcels(email) {
  const secureAxios = useExiosSecure();
  const query = useQuery({
    queryKey: ["parcels", email],
    queryFn: async () => {
      const parcels = await secureAxios.get("/parcel", {
        params: { email: email },
      });

      return parcels.data;
    },
    enabled: !!email,
  });
  return query;
}

export default useGetParcels;

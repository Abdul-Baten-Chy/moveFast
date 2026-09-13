import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import useGetParcels from "../../hooks/useGetParcels";
import Loading from "../loading/Loading";

function DashBoard() {
  const { user, Loading: authLoading } = useContext(AuthContext);
  const {
    data: parcels,
    isLoading,
    isError,
    error,
  } = useGetParcels(user?.email);

  if (isLoading || authLoading) return <Loading />;
  if (isError) return <p>{error?.message || "something went wrong"}</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Total Parcels: {parcels.length}</h1>
    </div>
  );
}

export default DashBoard;

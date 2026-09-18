import { useContext } from "react";
import { AuthContext } from "../../context/auth/AuthContext";
import useGetParcels from "../../hooks/useGetParcels";
import Loading from "../loading/Loading";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useExiosSecure from "../../hooks/useExiosSecure";

function DashBoard() {
  const { user, Loading: authLoading } = useContext(AuthContext);
  const queryClent =useQueryClient()
  const {
    data: parcels,
    isLoading,
    isError,
    error,
  } = useGetParcels(user?.email);
  const secureAxios= useExiosSecure()
  const {isPending,isError:mutationError,mutate} =useMutation({
    mutationFn:async (id)=>{
     const res= await secureAxios.delete(`/parcel/${id}`)
     if(res.data.deletedCount===1){
      queryClent.invalidateQueries({queryKey:["parcels", user.email]})
     }
     console.log(res);
     return res     
    }
  })

  if (isLoading || authLoading || isPending) return <Loading />;
  if (isError || mutationError) return <p>{error?.message || mutationError.message || "something went wrong"}</p>;

  const handleDelete =(id)=>{
console.log(id);
mutate(id)

  }

  return (
    <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {parcels.map((parcel,i)=>{
        return <tr>
        <th> {i+1}</th>
        <td>{parcel.productName}</td>
        <td>{parcel.cost}</td>
        <td className="flex gap-4 item-center">
          <button className="hover:bg-gray-300 "
          onClick={()=>handleDelete(parcel._id)}
          >Delete</button>
          <button>Pay</button>
        </td>
      </tr>
      })}
     
    </tbody>
  </table>
</div>
  );
}

export default DashBoard;

import { use, useContext, useEffect, useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/auth/AuthContext";
import useExiosSecure from "../../hooks/useExiosSecure";
import { getCost } from "../../utils/getCost";

function SendParcel({ data }) {
  const secureAxios = useExiosSecure();
  const { user } = useContext(AuthContext);
  const rigionsData = use(data);
  const { register, control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      parcelType: "document",
      senderRegion: "",
      senderDistrict: "",
      receiverRegion: "",
      receiverDistrict: "",
    },
  });
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const onlyUniqueRegion = useMemo(() => {
    if (!rigionsData) return [];
    const region = rigionsData.map((r) => r.region);
    return [...new Set(region)];
  }, [rigionsData]);

  const getRecieverDistrict = useMemo(() => {
    if (!rigionsData || !receiverRegion) return [];
    return rigionsData
      ?.filter((r) => r.region == receiverRegion)
      .map((r) => r.district);
  }, [receiverRegion, rigionsData]);
  const getSenderDistrict = useMemo(() => {
    if (!rigionsData || !senderRegion) return [];
    return rigionsData
      ?.filter((r) => r.region == senderRegion)
      .map((r) => r.district);
  }, [senderRegion, rigionsData]);

  useEffect(() => {
    setValue("receiverDistrict", "");
  }, [receiverRegion, setValue]);
  useEffect(() => {
    setValue("senderDistrict", "");
  }, [senderRegion, setValue]);

  const onFormSubmit = async (data) => {
    const cost = getCost(data);
    const result = await Swal.fire({
      title: "Are you sure?",
      text: `Your cost is ${cost} `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I agree!",
    });
    if (result.isConfirmed) {
      const res = await secureAxios.post("/parcels", { ...data, cost });
      console.log(res);
      if (res.statusText == "OK") {
        console.log(res.data);
        Swal.fire({
          title: "submitted",
          text: "Your order has been submitted.",
          icon: "success",
        });
        reset();
      }
    }
  };

  return (
    <div className="mx-auto max-w-5xl mt-10 p-6 bg-base-100 rounded-2xl shadow-xl text-base-content">
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-6">
        {/* Parcel Type Radio Group */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 p-4 bg-base-200 rounded-xl">
          <span className="font-semibold text-sm">Parcel Type:</span>
          <label className="label cursor-pointer gap-2">
            <input
              type="radio"
              value="document"
              className="radio radio-primary"
              {...register("parcelType")}
            />
            <span className="label-text font-medium">Document</span>
          </label>

          <label className="label cursor-pointer gap-2">
            <input
              type="radio"
              value="non-document"
              className="radio radio-primary"
              {...register("parcelType")}
            />
            <span className="label-text font-medium">Non-Document</span>
          </label>
        </div>
        {/* product info */}
        <div>
          <fieldset className="border  p-6 m-4 rounded-xl border-gray-300">
            <legend className="px-2">Product info</legend>
            <div className="flex flex-col md:flex-row gap-5">
              <div>
                <label className="label text-sm font-medium">
                  Product Name
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Item description"
                  {...register("productName")}
                />
              </div>

              <div>
                <label className="label text-sm font-medium">Weight (kg)</label>
                <input
                  type="number"
                  step="0.1"
                  className="input input-bordered w-full"
                  placeholder="0.5"
                  {...register("productWeight", { valueAsNumber: true })}
                />
              </div>
            </div>
          </fieldset>
        </div>
        {/* Sender & Receiver Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sender Info */}
          <fieldset className="fieldset border border-base-300 p-4 rounded-xl space-y-3">
            <legend className="fieldset-legend font-bold text-lg px-2">
              Sender Info
            </legend>

            <div>
              <label className="label text-sm font-medium">Sender Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter Sender name"
                {...register("senderName", { required: "Name is required" })}
              />
            </div>

            <div>
              <label className="label text-sm font-medium">Email</label>
              <input
                type="email"
                value={user?.email}
                className="input input-bordered w-full"
                placeholder="sender@example.com"
                {...register("senderEmail")}
              />
            </div>

            <div>
              <label className="label text-sm font-medium">Region</label>
              <select
                className="select select-bordered w-full"
                {...register("senderRegion")}
              >
                <option value="" disabled>
                  Pick a Region
                </option>
                {onlyUniqueRegion.map((region) => (
                  <option value={region} key={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label text-sm font-medium">District</label>
              <select
                className="select select-bordered w-full"
                {...register("senderDistrict")}
              >
                <option value="" disabled>
                  Pick a District
                </option>
                {getSenderDistrict.map((district) => (
                  <option value={district} key={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>

          {/* Receiver Info */}
          <fieldset className="fieldset border border-base-300 p-4 rounded-xl space-y-3">
            <legend className="fieldset-legend font-bold text-lg px-2">
              Receiver Info
            </legend>

            <div>
              <label className="label text-sm font-medium">Receiver Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Enter receiver name"
                {...register("receiverName", { required: "Name is required" })}
              />
            </div>

            <div>
              <label className="label text-sm font-medium">Email</label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="receiver@example.com"
                {...register("receiverEmail")}
              />
            </div>

            <div>
              <label className="label text-sm font-medium">Region</label>
              <select
                className="select select-bordered w-full"
                {...register("receiverRegion")}
              >
                <option value="" disabled>
                  Pick a Region
                </option>
                {onlyUniqueRegion.map((region) => (
                  <option value={region} key={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="label text-sm font-medium">District</label>
              <select
                className="select select-bordered w-full"
                {...register("receiverDistrict")}
              >
                <option value="" disabled>
                  Pick a District
                </option>
                {getRecieverDistrict.map((district) => (
                  <option value={district} key={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
          </fieldset>
        </div>
        {/* submit button  */}
        <button
          type="submit"
          className="btn btn-primary w-full md:w-1/3 text-lg block mx-auto"
        >
          Submit Parcel Request
        </button>
      </form>
    </div>
  );
}

export default SendParcel;

function ReviewCard({ item }) {
  return (
    <div className="max-w-md bg-white rounded-3xl p-8 shadow-sm border border-gray-100 font-sans">
      <div className="text-teal-200 text-6xl leading-none font-serif mb-2">
        “
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-6">
        {item.review}
      </p>

      <div className="border-b-2 border-dashed border-teal-100 mb-6" />

      <div className="flex items-center gap-4">
        <img
          src={item.user_photoURL}
          alt={item.userName}
          className="w-12 h-12 rounded-full object-cover bg-teal-900"
        />
        <div>
          <h4 className="font-bold text-teal-950 text-base">{item.userName}</h4>
          <p className="text-gray-400 text-xs mt-0.5">{item.user_email}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;

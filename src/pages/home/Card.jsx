function Card({ icon, bgColor, title, description }) {
  const IconComponent = icon;
  return (
    <div
      className="flex flex-col items-center p-6  rounded-3xl"
      style={{ backgroundColor: bgColor }}
    >
      <IconComponent className="text-[40px] mb-4" />
      <h3 className="text-[24px] font-bold mb-4 text-center">{title}</h3>
      <p className="text-medium text-center text-[16px]/[1.4]">{description}</p>
    </div>
  );
}

export default Card;

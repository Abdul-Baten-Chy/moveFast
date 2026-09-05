import { FaBriefcase, FaMoneyBillWave } from "react-icons/fa6";
import {
  TbBox,
  TbMapPinCheck,
  TbRefresh,
  TbTruckDelivery,
} from "react-icons/tb";

export const servicesData = [
  {
    id: 1,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
    icon: TbTruckDelivery,
    bgColor: "#ffffff",
  },
  {
    id: 2,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    icon: TbMapPinCheck,
    bgColor: "#c5f061",
  },
  {
    id: 3,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
    icon: TbBox,
    bgColor: "#ffffff",
  },
  {
    id: 4,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
    icon: FaMoneyBillWave, // Font Awesome এর আইকন
    bgColor: "#ffffff",
  },
  {
    id: 5,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
    icon: FaBriefcase, // Font Awesome এর আইকন
    bgColor: "#ffffff",
  },
  {
    id: 6,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
    icon: TbRefresh,
    bgColor: "#ffffff",
  },
];

import {
  AiFillAmazonCircle,
  AiOutlineDashboard,
  AiOutlineDollar,
} from "react-icons/ai";
import {
  FaApplePay,
  FaBookReader,
  FaDraftingCompass,
  FaQuestionCircle,
} from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { MdImportContacts, MdOutlineContactMail } from "react-icons/md";
import {
  AnnouncementIcons,
  CodingIcons,
  DesignIcons,
  EngIcons,
  LaptopIcons,
  PersonIcons,
  PrintIcons,
  UzbIcons,
} from "src/icons";
import { SiAmd, SiCisco, SiLogitech, SiSpotify } from "react-icons/si";
import RusIcon from "@/icons/rus";
import TurkIcon from "@/icons/turk";
import {
  FinishRightIcon,
  OnlineCourseIcon,
  OnlineLearningIcon,
  OnlineStudentIcon,
  RightLineIcon,
} from "@/icons";

export const navigation = [
  {
    title: "sidebar_title_1",
    links: [
      {
        label: "sidebar_title_1_explore",
        route: "/",
        icon: AiOutlineDashboard,
      },
      {
        label: "sidebar_title_1_courses",
        route: "/courses",
        icon: CiViewList,
      },
      {
        label: "sidebar_title_1_books",
        route: "/books",
        icon: FaBookReader,
      },
      {
        label: "sidebar_title_1_articles",
        route: "/articles",
        icon: MdImportContacts,
      },
    ],
  },
  {
    title: "sidebar_title_2",
    links: [
      {
        label: "sidebar_title_2_about",
        route: "/about",
        icon: FaDraftingCompass,
      },
      {
        label: "sidebar_title_2_contact",
        route: "/contact",
        icon: MdOutlineContactMail,
      },
      {
        label: "sidebar_title_2_pricing",
        route: "/pricing",
        icon: AiOutlineDollar,
      },
      {
        label: "sidebar_title_2_faq",
        route: "/faq",
        icon: FaQuestionCircle,
      },
    ],
  },
];

export const categories = [
  {
    name: "design_category",
    id: 1,
    icon: DesignIcons,
  },
  {
    name: "sales_marketing_category",
    id: 2,
    icon: AnnouncementIcons,
  },
  {
    name: "development_it_category",
    id: 3,
    icon: CodingIcons,
  },
  {
    name: "engineering_architecture_category",
    id: 4,
    icon: PrintIcons,
  },
  {
    name: "personl_development_category",
    id: 5,
    icon: PersonIcons,
  },
  {
    name: "finance_accounting_category",
    id: 6,
    icon: LaptopIcons,
  },
];

export const trustedCompeny = [
  AiFillAmazonCircle,
  SiAmd,
  SiCisco,
  FaApplePay,
  SiLogitech,
  SiSpotify,
];

export const language = [
  { nativeLng: "English", lng: "en", icon: EngIcons },
  { nativeLng: "Uzbek", lng: "uz", icon: UzbIcons },
  { nativeLng: "Türkçe", lng: "tr", icon: TurkIcon },
  { nativeLng: "Русский", lng: "ru", icon: RusIcon },
];

export const howItWorks = [
  { title: "how_it_works_first_step", icon: OnlineCourseIcon },
  { icon: RightLineIcon },
  { title: "how_it_works_second_step", icon: OnlineLearningIcon },
  { icon: FinishRightIcon },
  { title: "how_it_works_third_step", icon: OnlineStudentIcon },
];

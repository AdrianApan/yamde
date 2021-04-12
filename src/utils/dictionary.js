import { FiImage } from "react-icons/fi"
import { MdFormatQuote, MdCode, MdBluetoothSearching } from "react-icons/md"
import {
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineStrikethrough,
  AiOutlineUnorderedList,
  AiOutlineOrderedList,
  AiOutlineTable,
  AiOutlineLink
} from "react-icons/ai"

export const buttonsDictionary = {
  bold: <AiOutlineBold />,
  italic: <AiOutlineItalic />,
  strikethrough: <AiOutlineStrikethrough />,
  heading1: "H1",
  heading2: "H2",
  heading3: "H3",
  ulist: <AiOutlineUnorderedList />,
  olist: <AiOutlineOrderedList />,
  table: <AiOutlineTable />,
  image: <FiImage />,
  link: <AiOutlineLink />,
  quote: <MdFormatQuote />,
  code: <MdCode />,
  hr: "HR"
}

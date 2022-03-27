import IRowData from "./IRowData";

interface IList {
  prepend?:JSX.Element
  titre?:JSX.Element | string
  style?: string
  data?: IRowData[];
  append?:JSX.Element
}

export default IList;
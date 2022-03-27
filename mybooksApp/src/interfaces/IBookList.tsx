import IBook from "./IBook";
import IList from "./IList";

interface IBookList extends IList {
  data?: IBook[];
}

export default IBookList;
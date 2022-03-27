import IRowData from "./IRowData";

interface IBook extends IRowData{
  itemData: {
    id: number;
    titre: string;
  }
}

export default IBook;

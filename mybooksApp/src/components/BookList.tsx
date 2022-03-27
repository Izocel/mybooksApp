import React, { } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin2Line } from "react-icons/ri";
import IBookList from '../interfaces/IBookList';
import Table from './Table';


const BookList: React.FC<IBookList> = ({prepend, titre, style, data, append }) => {


  /**
   * Possible de rajouter des conditions selon la donnée et le user.
   * Pour determiner les actions autorisées.
   */
  data?.forEach(rowData => {
    const itemId:string = rowData.itemData.id.toString();

    rowData.append = 
    <span id={itemId} className='clickableHolder'>
      <button className='clickableIcon text-success'><FaRegEdit/></button>
      <button className='clickableIcon text-danger'><RiDeleteBin2Line/></button>
    </span>
  });

  return (
    <Table  prepend={prepend} style={style} titre={titre} data={data} append={append}>
    </Table>
  );
}

export default BookList;

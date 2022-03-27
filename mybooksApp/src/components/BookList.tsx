import React, { } from 'react';
import IBookList from '../interfaces/IBookList';
import Table from './Table';


const BookList: React.FC<IBookList> = ({prepend, titre, style, data, append }) => {

  return (
    <Table  prepend={prepend} style={style} titre={titre} data={data} append={append}>
    </Table>
  );
}

export default BookList;

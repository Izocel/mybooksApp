import React, { } from 'react';
import IList from '../interfaces/IList';
import TableRow from './TableRow';


const Table: React.FC<IList> = ({ prepend, titre, style, data, append }) => {

  const defaultStyle = "table table-dark border borde-light";

  const getTitle = () => {
    return (
      <div className='titreTable'>
        {titre}
      </div>
    )
  };

  const getHeaders = (): JSX.Element => {

    //const appendCol = (data?[0]).

    return (
      <thead>
        <tr>
          <th><span></span></th>
          <th>id</th>
          <th>Titre</th>
          <th><span></span></th>
        </tr>
      </thead>
    );
  };

  const getRows = (): JSX.Element[] | undefined =>
    data?.map((rowData: any) => {
      return (
        <TableRow 
        prepend={rowData.prepend}
        key={rowData.key ?? rowData.itemData.id} 
        itemData={rowData.itemData}
        append={rowData.append}
        ></TableRow>
      );
    });


  const renderAll = (): JSX.Element => {
    return (
      <table className={style ?? defaultStyle}>
        {getHeaders()}
        <tbody>
          {getRows()}
        </tbody>
      </table>
    )
  };

  return (
    <div className='col'>
      {prepend}
      {getTitle()}
      {renderAll()}
      {append}
    </div>
  );
}

export default Table; // Don't forget to use export default!

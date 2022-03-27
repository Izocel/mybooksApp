import React, { } from 'react';
import IList from '../interfaces/IList';


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
    return (
      <thead>
        <tr>
          <th>id</th>
          <th>Titre</th>
        </tr>
      </thead>
    );
  };

  const getRows = (): JSX.Element => 
    data?.map((item: any) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.titre}</td>
      </tr>
    );
  });


  const renderAll = (): JSX.Element => {
    return (
      <table className={style??defaultStyle}>
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

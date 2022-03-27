import React, { } from 'react';
import IRowData from '../interfaces/IRowData';


const TableRow: React.FC<IRowData> = ({prepend, style, itemData, append },key) => {

    const getElements = ():JSX.Element[] => {
        let elements: JSX.Element[] = [];
        let count:number = 0;
        for (const field in itemData) {
            if (Object.prototype.hasOwnProperty.call(itemData, field)) {
                const value = itemData[field];
                elements.push(<td key={count++}>{value}</td>);
            }
        }
        return elements;
    }
    
    return (
        <tr key={key} className={style}>
            <td>{prepend}</td>
            {getElements()}
            <td>{append}</td>
        </tr>
    );
}

export default TableRow;

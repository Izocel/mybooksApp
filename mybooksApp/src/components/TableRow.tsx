import React, { } from 'react';
import IRowData from '../interfaces/IRowData';


const TableRow: React.FC<IRowData> = ({ prepend, style, data, append }) => {

    const getElements = () => {
        let elements: JSX.Element[] = [];
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                elements.push(<td>data[key]</td>);
            }
        }
        return elements;
    }

    const render = (): JSX.Element => {
        return (
            <tr className={style}>
                {prepend} {getElements()} {append}
            </tr>
        );
    }
    return render();
}

export default TableRow;

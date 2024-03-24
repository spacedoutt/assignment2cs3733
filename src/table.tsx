function Table() {
    return(
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Header1</th>
                        <th>Header2</th>
                        <th>Header3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Row 2, Cell 1</td>
                        <td>Row 2, Cell 2</td>
                        <td>Row 2, Cell 3</td>
                    </tr>
                    <tr>
                        <td>Row 3, Cell 1</td>
                        <td>Row 3, Cell 2</td>
                        <td>Row 3, Cell 3</td>
                    </tr>
                    <tr>
                        <td>Row 4, Cell 1</td>
                        <td>Row 4, Cell 2</td>
                        <td>Row 4, Cell 3</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table
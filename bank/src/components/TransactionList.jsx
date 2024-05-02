import TransactionItem from "./TransactionItem";

function TransctionList({transaction}) {

    const items= transaction.map((item) => {
        return  <TransactionItem  key={item.id} transactionItem={item}/>
    })
    return (
    <> 
    <h3>Transaction</h3>
    <table>
        <tbody>
            <th>Date</th>
            <th>Description</th>
            <th>category</th>
            <th>amount</th>
            {items}
        </tbody>
    </table>
    </> );
}

export default TransctionList;
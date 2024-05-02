import { useEffect, useState } from "react";
import Fillter from "./Fillter";
import NewEntry from "./NewEntry";
import TransctionList from "./TransactionList";

function AccountContainer() {
    const [transactionList, setTransactionList] = useState([])
    const [search, setSearch] = useState('')

    const baseUrl = `http://localhost:8081/transactions`;
    useEffect(() => {
        fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => setTransactionList(data))
    }, []);

    const filterdData = transactionList.filter(item=>{
        if(search) {
            return item.description.toLowerCase().includes(search.toLowerCase())
        }
        return transactionList
    })


    function handleUpdateSearch(term) {
        setSearch(term)
    }
    console.log('ter,', search);
    return (
        <>
            <h3>account</h3>
            <Fillter
                search={search}
                handleUpdate={handleUpdateSearch}
            />
            <NewEntry />
            <TransctionList transaction={filterdData} />
        </>
    );
}

export default AccountContainer;
import React from "react";
import Header from "./Header";
import './App.css';
import Balance from "./Balance";
import {IncomeExpense} from "./IncomeExpense";
import {TransactionList} from "./TransactionList";
import {AddTransaction} from "./AddTransaction";
import {GlobalProvider} from "./context/GlobalState";



export default function App(){
    return (
        <GlobalProvider>
            <Header/>
            <div className = "container">
                <Balance />
                <IncomeExpense/>
                <TransactionList/>
                <AddTransaction/>
            </div>
        </GlobalProvider>
    )
}
import React from 'react';
import BookAvailable from './transactions/BookAvailable';
import BookIssue from './transactions/BookIssue';
import ReturnBook from './transactions/ReturnBook';
import FinePay from './transactions/FinePay';

function Transactions() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Transactions</h2>
      <div className="space-y-8">
        <BookAvailable />
        <BookIssue />
        <ReturnBook />
        <FinePay />
      </div>
    </div>
  );
}

export default Transactions;


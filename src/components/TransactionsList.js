import React, { Component } from "react";
import axios from "axios";

class TransactionsList extends Component {
  state = {
    transactionList: [],
    transactionListCopy: [],
    totalTransactions: 0,
  };

  componentDidMount = async () => {
    try {
      const userResponse = await axios.get(
        `https://ironrest.herokuapp.com/findOne/flowFinanceWDFTSP?id=${this.props.match.params.id}`
      );
      console.log(userResponse);
      console.log(userResponse.data.financeData);
      const total = userResponse.data.financeData.reduce(
        (a, b) => a + Number(b.amount),
        0
      );
      this.setState({
        transactionList: [...userResponse.data.financeData],
        transactionListCopy: [...userResponse.data.financeData],
        totalTransactions: total,
      });
    } catch (err) {}
  };

  render() {
    return (
      <div className="container">
        <div className="container">
          <input className="button is-info is-light m-5" type="date"></input>
          <input className="button is-info is-light m-5" type="date"></input>
        </div>
        <table className="table table-hover table-sm m-5 caption-top table-responsive">
          <caption>List of added transactions</caption>
          <div className="table-responsive">
            <table className="table align-left">
              <thead className="shadow-sm p-3 mb-5 bg-body rounded">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount (R$)</th>
                </tr>
              </thead>
              {this.state.transactionListCopy.map((transaction) => (
                <tbody
                  className="shadow-sm p-3 mb-5 bg-body rounded"
                  key={transaction.name}
                >
                  <tr>
                    <th scope="col">
                      <p>{transaction.date}</p>
                    </th>
                    <th scope="col">
                      <p>{transaction.description}</p>
                    </th>
                    <th scope="col">
                      <p>{transaction.amount}</p>
                    </th>
                  </tr>
                </tbody>
              ))}
              {/* <tfood className="shadow-sm p-3 mb-5 bg-body rounded">
              <tr>
                <th>Total:</th>
                <th></th>
                <th></th>
                <th>{this.state.totalTransactions}</th>
              </tr>
            </tfood> */}
            </table>
          </div>
        </table>
      </div>
    );
  }
}

export default TransactionsList;

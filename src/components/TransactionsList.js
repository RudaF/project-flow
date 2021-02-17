import React, { Component } from "react";
import axios from "axios";

class TransactionsList extends Component {
  state = {
    transactionList: [],
    transactionListCopy: [],
  };

  componentDidMount = async () => {
    try {
      const userResponse = await axios.get(
        `https://ironrest.herokuapp.com/findOne/flowFinanceWDFTSP?id=${this.props.match.params.id}`
      );
      console.log(userResponse);

      this.setState({
        transactionList: [...userResponse.data.financeData],
        transactionListCopy: [...userResponse.data.financeData],
      });
    } catch (err) {}
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.transactionListCopy.map((transaction) => (
            <li key={transaction.name}>{transaction.amount}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TransactionsList;

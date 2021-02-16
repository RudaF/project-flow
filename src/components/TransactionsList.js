import React, { Component } from "react";
import { Link } from "react-router-dom";

class TransactionsList extends Component {
  state = {
    transactionList: [],
    transactionListCopy: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/flowFinanceWDFTSP/${this.props.match.params.id}`
      );
      console.log(response);

      this.setState({
        transactionList: [...response.financeData],
        transactionListCopy: [...response.financeData],
      });
    } catch (err) {}
  };

  render() {
    return <div></div>;
  }
}

export default TransactionsList;

import React, { Component } from "react";
import axios from "axios";
import Chart from "chart.js";

class TransactionsList extends Component {
  state = {
    startDate: "",
    endDate: "",
    transactionList: [],
    financeData: [],
    financeValues: [],
    financeDates: [],
    chart: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount = async () => {
    try {
      const userResponse = await axios.get(
        `https://ironrest.herokuapp.com/findOne/flowFinanceWDFTSP?id=${this.props.match.params.id}`
      );
      const financeValues = userResponse.data.financeData.map((x) => x.amount);
      const financeDates = userResponse.data.financeData.map((x) => x.date);
      const financeData = financeDates.map((date, i) => {
        return { date: date, amount: financeValues[i] };
      });

      this.setState({
        transactionList: [...userResponse.data.financeData],
        financeValues,
        financeDates,
        financeData,
      });
      this.renderGraph();
    } catch (err) {}
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      prevState.startDate !== this.state.startDate ||
      prevState.endDate !== this.state.endDate
    ) {
      const newRange = this.state.financeData.filter(
        (element) =>
          element.date >= this.state.startDate &&
          element.date <= this.state.endDate
      );
      const newDates = [];
      const newValues = [];
      for (let i = 0; i < newRange.length; i++) {
        newDates.push(newRange[i].date);
        newValues.push(newRange[i].amount);
      }

      await this.setState({ financeValues: newValues, financeDates: newDates });
      this.state.chart.destroy();
      this.renderGraph();
    }
  };

  renderGraph = () => {
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: this.state.financeDates,
        datasets: [
          {
            label: "Transactions in the period",
            data: this.state.financeValues,
            backgroundColor: "#5EBA7D",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
    this.setState({ chart: myChart });
  };

  render() {
    return (
      <div className="columns">
        <div className="container column">
          <div className="columns m-5">
            <div className="column">
              <label className="label">From:</label>
              <input
                name="startDate"
                onChange={this.handleChange}
                className="button is-info is-light"
                type="date"
                value={this.state.startDate}
              ></input>
            </div>
            <div className="column">
              <label className="label">To:</label>
              <input
                name="endDate"
                onChange={this.handleChange}
                className="button is-info is-light"
                type="date"
                value={this.state.endDate}
              ></input>
            </div>
          </div>
          <div className="container">
            <canvas id="myChart" style={{ width: "200px" }}></canvas>
          </div>
        </div>

        <div className="container column">
          <table className="table table-hover table-sm m-5 caption-top table-responsive">
            <caption>List of added transactions</caption>
            <table className="table align-left">
              <thead className="shadow-sm p-3 mb-5 bg-body rounded">
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Description</th>
                  <th scope="col">Amount (R$)</th>
                </tr>
              </thead>
              {this.state.transactionList.map((transaction) => (
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
                      <p
                        className={
                          transaction.amount < 0
                            ? "has-text-danger"
                            : "has-text-success"
                        }
                      >
                        {transaction.amount}
                      </p>
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
          </table>
        </div>
      </div>
    );
  }
}

export default TransactionsList;

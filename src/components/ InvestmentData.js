import React from "react";
import axios from "axios";

class InvestimentData extends React.Component {
  state = {
    searchInput: "",
    marketData: [],
    marketDataDisplayed: [],
  };

  componentDidMount = async () => {
    var options = {
      method: "GET",
      url:
        "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-popular-watchlists",
      headers: {
        "x-rapidapi-key": "dcfe2e76e5mshd30d251a5dbf14dp169faejsn900d5ba73384",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      this.setState({
        marketData: [...response.data.finance.result[0].portfolios],
        marketDataDisplayed: [...response.data.finance.result[0].portfolios],
      });
    } catch (error) {
      console.error(error);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.searchInput !== this.state.searchInput) {
      const filtered = this.state.marketData.filter(
        (watchlist) =>
          watchlist.name.includes(this.state.searchInput) ||
          watchlist.description.includes(this.state.searchInput)
      );
      this.setState({ marketDataDisplayed: filtered });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="field m-2">
          <label className="label">Search for a Market Watchlist</label>
          <div className="control">
            <input
              onChange={this.handleChange}
              className="input"
              type="text"
              placeholder="e.g rent"
              name="searchInput"
              value={this.state.searchInput}
            />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {this.state.marketDataDisplayed.map((item) => (
              <tr key={item.pfId}>
                <th>
                  <a
                    href={`https://finance.yahoo.com/u/yahoo-finance/watchlists/${item.pfI}?.tsrc=fin-srch`}
                  >
                    {item.name}
                  </a>
                </th>
                <th dangerouslySetInnerHTML={{ __html: item.description }}></th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default InvestimentData;

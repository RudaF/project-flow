import React from "react";
import axios from "axios";

class InvestimentData extends React.Component {
  state = {
    searchInput: "",
    marketData: [],
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
      });
      console.log(this.state.marketData);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {this.state.marketData.map((item) => (
              <tr key={item.pfId}>
                <th>{item.name}</th>
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

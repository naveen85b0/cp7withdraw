import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balanceamount: 2000}

  decreseAmount = value => {
    const {balanceamount} = this.state
    if (balanceamount > value) {
      this.setState({balanceamount: balanceamount - value})
    }
  }

  render() {
    const {balanceamount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="mainbackground">
        <div className="heading">
          <h1 className="sheading">S</h1>
          <h1 className="name">Sarah Williams</h1>
        </div>
        <div className="money">
          <p className="yourbalance">Your Balance</p>
          <p className="rupee">{balanceamount}</p>
        </div>
        <p className="para">In Rupees</p>
        <p className="rupee">Withdraw</p>
        <p className="rupee">CHOOSE SUM (IN RUPEES)</p>
        <div>
          <ul className="withdrawmoney">
            {denominationsList.map(eachitem => (
              <DenominationItem
                eachval={eachitem}
                key={eachitem.id}
                withdraw={this.decreseAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

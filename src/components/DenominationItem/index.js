// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachval, withdraw} = props
  const {value, id} = eachval
  const withdrawamount = () => withdraw(value)
  return (
    <div>
      <div className="buttonscontainer">
        <li>
          <button className="button" type="button" onClick={withdrawamount}>
            {value}
          </button>
        </li>
      </div>
    </div>
  )
}

export default DenominationItem

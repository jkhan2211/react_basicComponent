import './DonateItem.css';

function DonateItem(props) {
  

  return (
    <div className='donate-item'>
      <div>{props.date.toISOString()}</div>
      <div className='donate-item__description'>
        <h2>{props.title}</h2>
        <div className='donate-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default DonateItem;
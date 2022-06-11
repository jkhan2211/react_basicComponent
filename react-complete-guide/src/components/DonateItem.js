import './DonateItem.css';

function DonateItem() {
  const donateDate = new Date(2021, 2, 28);
  const donateTitle = 'John Doe';
  const donateAmount = 294.67;

  return (
    <div className='donate-item'>
      <div>{donateDate.toISOString()}</div>
      <div className='donate-item__description'>
        <h2>{donateTitle}</h2>
        <div className='donate-item__price'>${donateAmount}</div>
      </div>
    </div>
  );
}

export default DonateItem;
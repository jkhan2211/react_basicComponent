import DonateItem from "./components/DonateItem";
function App() {

  const donateData = [
    {
      id: 'e1',
      title: 'Joe Bloggs',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'Frank Heimer', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Mary Thomson',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Tony Stark',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Let's Get Started!</h2>
      <DonateItem
      title={donateData[0].title}
      amount={donateData[0].amount}
      date={donateData[0].date}
      ></DonateItem>
      <DonateItem
      title={donateData[1].title}
      amount={donateData[1].amount}
      date={donateData[1].date}
      ></DonateItem>
      <DonateItem
      title={donateData[2].title}
      amount={donateData[2].amount}
      date={donateData[2].date}
      ></DonateItem>

    </div>
  );
}

export default App;

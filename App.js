import * as React from 'react';
import './style.css';

export default function App() {
  const employees = [
    { id: 4, name: 'Dean', country: 'Denmark' },
    { id: 3, name: 'Carl', country: 'Canada' },
    { id: 2, name: 'Bob', country: 'Belgium' },
    { id: 1, name: 'Alice', country: 'Austria' },
    { id: 5, name: 'Ethan', country: 'Egypt' },
  ];
  const [count, setCount] = React.useState('');

  const handAcc = (e) => {
    e.preventDefault();
    let hey = [...employees].sort((a, b) => a.id - b.id);
    setCount(hey);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>
        Sort Array in <br /> Accending & Decending order!
      </h3>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .sort((a, b) => a.id - b.id)
            .map((x) => (
              <tr key={x.id}>
                <td>{x.id}</td>
                <td>{x.name}</td>
                <td>{x.country}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        style={{ margin: '15px' }}
        type="button"
        class="btn btn-warning"
        onClick={handAcc}
      >
        Accending
      </button>

      <button type="button" class="btn btn-warning">
        Decending
      </button>
    </div>
  );
}

// // 👇️ sort by Numeric property ASCENDING (1 - 100)
// const numAscending = [...employees].sort((a, b) => a.id - b.id);
// console.log(numAscending);

// // 👇️ sort by Numeric property DESCENDING (100 - 1)
// const numDescending = [...employees].sort((a, b) => b.id - a.id);
// console.log(numDescending);

// // 👇️ sort by String property ASCENDING (A - Z)
// const strAscending = [...employees].sort((a, b) => (a.name > b.name ? 1 : -1));
// console.log(strAscending);

// // 👇️ sort by String property DESCENDING (Z - A)
// const strDescending = [...employees].sort((a, b) => (a.name > b.name ? -1 : 1));
// console.log(strDescending);

// // Just Exicute these logic's before .map()

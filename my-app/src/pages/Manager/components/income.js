import React, { useEffect, useRef, useMemo, useState } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import fetching from '../../../services';

const Income = () => {
  const chartRef = useRef(null);
  const today = useMemo(() => new Date(), []);
  const currentMonth = today.getMonth() + 1;
  const client = useSelector(state => state.clientInfo); // client state in redux access
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    const currentDay = new Date();
    const fetchOption = {
      headers: {
        Authorization: `Bearer ${client.token}`
      }
    };
    fetching(`api/user/admin/revenue?year=${currentDay.getFullYear()}&month=${currentDay.getMonth() + 1}`,
      fetchOption)
      .then(result => setRevenue(result))
      .catch();
  }, [client, setRevenue]);

  // useEffect(() => {
  //   const getOrdersInMonth = (orders, month) => {
  //     const filteredOrders = orders?.filter(order => {
  //       const orderMonth = parseInt(order.date.split('/')[0], 10);
  //       return orderMonth === month;
  //     });
  //     return filteredOrders;
  //   }

  //   //Get arrays of days in a month
  //   const getDaysRangeInMonth = (init = undefined) => {
  //     const year = today.getFullYear();

  //     // Create a date object for the first day of the next month
  //     const lastDayOfMonth = new Date(year, currentMonth, 0);

  //     // Get the number of days in the current month
  //     const numberOfDays = lastDayOfMonth.getDate();

  //     // Create an array of days
  //     const days = Array.from({ length: numberOfDays }, (_, index) => (init !== undefined ? init : index + 1));

  //     return days;
  //   }
  //   //Get this month amount
  //   const getThisMonthOrderAmounts = () => {
  //     const r = getOrdersInMonth(receipts, currentMonth);
  //     const days = getDaysRangeInMonth(0);
  //     //Loop through r, add day' amount to its idx in days arr
  //     r?.forEach(element => {
  //       const orderDay = parseInt(element.date.split('/')[0], 10);

  //       days[orderDay - 1] += element.amount;
  //     });

  //     return days;
  //   }

  //   const totalArr = getThisMonthOrderAmounts();
  //   setTotal(totalArr.reduce((acc, element) => acc + element, 0));
  useEffect(() =>{ const data = {
      labels: "Months",//getDaysRangeInMonth(),
      datasets: [{
        label: `Doanh thu tháng `,//${currentMonth}`,
        data:[],
        backgroundColor: '#e6f0dc',
        borderColor: '#558838',
        borderWidth: 1
      }]
    };
    const myChart = new Chart(
      chartRef.current,
      {
        type: 'line',
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      }
    );

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
      <h3 className="align-self-start p-5">{`Doanh thu tháng ${currentMonth}/${today.getFullYear()}: ${revenue.revenue?.toLocaleString()}đ`}</h3>
      <div className='col-7'>
        <canvas className='container' ref={chartRef} />
      </div>
    </div>
  );
}

export default Income;
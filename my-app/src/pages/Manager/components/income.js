import React, { useEffect, useRef, useMemo, useState } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';

const Income = () => {
  const chartRef = useRef(null);
  const receipts = useSelector(state => state.receipt.item);
  const today = useMemo(() => new Date(), []);
  const currentMonth = today.getMonth() + 1;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getOrdersInMonth = (orders, month) => {
      const filteredOrders = orders?.filter(order => {
        const orderMonth = parseInt(order.date.split('/')[0], 10);
        return orderMonth === month;
      });
      return filteredOrders;
    }

    //Get arrays of days in a month
    const getDaysRangeInMonth = (init = undefined) => {
      const year = today.getFullYear();

      // Create a date object for the first day of the next month
      const lastDayOfMonth = new Date(year, currentMonth, 0);

      // Get the number of days in the current month
      const numberOfDays = lastDayOfMonth.getDate();

      // Create an array of days
      const days = Array.from({ length: numberOfDays }, (_, index) => (init !== undefined ? init : index + 1));

      return days;
    }
    //Get this month amount
    const getThisMonthOrderAmounts = () => {
      const r = getOrdersInMonth(receipts, currentMonth);
      const days = getDaysRangeInMonth(0);
      //Loop through r, add day' amount to its idx in days arr
      r?.forEach(element => {
        const orderDay = parseInt(element.date.split('/')[0], 10);

        days[orderDay - 1] += element.amount;
      });

      return days;
    }

    const totalArr = getThisMonthOrderAmounts();
    setTotal(totalArr.reduce((acc, element) => acc + element, 0));
    const data = {
      labels: getDaysRangeInMonth(),
      datasets: [{
        label: `Doanh thu tháng ${currentMonth}`,
        data: totalArr,
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
  }, [currentMonth, receipts, today, setTotal, total]);

  return (
    <div className='container-fluid d-flex flex-column align-items-center'>
      <h3 className="align-self-start p-5">{`Doanh thu tháng ${currentMonth}/${today.getFullYear()}: ${total.toLocaleString()}đ`}</h3>
      <div className='col-7'>
        <canvas className='container' ref={chartRef} />
      </div>
    </div>
  );
}

export default Income;
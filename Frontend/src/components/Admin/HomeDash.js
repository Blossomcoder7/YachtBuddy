import React, { useRef, useState } from 'react';
import { PieChart, Pie, Cell } from "recharts";
import Chart from 'react-apexcharts';
import './Style/HomeDash.css'

export default function HomeDash() {
    const windowWidth = useRef(window.innerWidth);
  console.log(windowWidth)

  const COLORS = ["#0088FE", "#00C49F"];
  const data = [
    { name: "Male", value: 600 },
    { name: "Female", value: 300 },

  ];
  const [bar] = useState({

    series: [{
      name: 'Application',
      data: [44, 55, 41, 67, 22, 43, 20]
    }, {
      name: 'ShortListed',
      data: [13, 23, 20, 8, 13, 27, 10]
    }, {
      name: 'Rejected',
      data: [11, 17, 15, 15, 21, 14.10]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: '10px',
                fontWeight: 800
              }
            }
          }
        },
      },
      xaxis: {
        // type: 'datetime',
        // categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
        //   '01/05/2011 GMT', '01/06/2011 GMT'
        // ],
        type: 'category', // Change the type to 'category'
        categories: ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 0.7
      }
    },
  })
  const [spline] = useState({

    series: [{
      name: 'series1',
      data: [31, 40, 28, 51, 42, 109, 100]
    }],
    options: {
      chart: {
        height: 350,
        type: 'area'
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm'
        },
      },
    },

  })
  const [timeline1] = useState({


    series: [70],
    options: {
      chart: {
        height: 150,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          }
        },
      },
      labels: ['Total'],
    },
  })
  const [timeline2] = useState({


    series: [65],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          }
        },
      },
      labels: ['ShortList'],
    },
  })
  const [timeline3] = useState({


    series: [30],
    options: {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '60%',
          }
        },
      },
      labels: ['Rejected'],
    },
  })
  return (
    <>
    <div className="dashboard_wrapper">
      <div className="com-dash-nav-c">
        <div className="day-stat">
          <div className="no-of-application">
            <div className="application">
              <p>Weekly Booking</p>
              <h6>56672</h6>
              <span>+14% Inc</span>
            </div>
            <Chart options={timeline1.options} series={timeline1.series} type="radialBar" height={150} />
          </div>
          <div className="no-of-application">
            <div className="application">

              <p>Monthly Booking</p>
              <h6>3045</h6>
              <span>+06% Inc</span>
            </div>
            <Chart options={timeline2.options} series={timeline2.series} type="radialBar" height={150} />

          </div>
          <div className="no-of-application">
            <div className="application">
              <p>Inquiries</p>
              <h6>1055</h6>
              <span>+04% Inc</span>
            </div>
            <Chart options={timeline3.options} series={timeline3.series} type="radialBar" height={150} />

          </div>

        </div>
        <div className="day-stat-1">
          <div className="stat-of-active">
            <p>Statistics of Active Application</p>
            <Chart
              options={bar.options} series={bar.series} type="bar" height={180}
            />
          </div>
          <div className="stat-of-active">
            <p>Aquisition</p>
          </div>
        </div>
        <div className="day-stat-1">
          <div className="stat-of-active">
            <p>Stat of Active Application</p>
            <Chart
              options={spline.options} series={spline.series} type="area" height={180}
            />
          </div>
          <div className="stat-of-active">
            <p>Gender Of Candidate</p>
            <PieChart width={800} height={400}>
              <Pie
                data={data}
                cx={160}
                cy={75}
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

            </PieChart>
            <div className="gender-data"></div>
          </div>
        </div>
      </div>
     
    </div>
  </>
  )
}

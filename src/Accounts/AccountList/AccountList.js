import React from 'react'

import AccountMessage from '../AccountMessage'
import './AccountList.scss'
export default class AccountList extends React.Component {
  getList(){
    return ACC_LIST.map(acc => {
      acc.operationsHistory = acc.operationsHistory.sort((a, b) => b.date - a.date)
      return acc
    }).sort((a, b) => b.key - a.key)
  }
  render() {
    return <div className="account-list custom-scroll">
      <div className="account-list__frame">
        {this.getList().map((acc, idx) => 
          <AccountMessage key={acc.key} account={acc} expand={false}></AccountMessage> //idx===0
        )}
      </div>
    </div>
  }
}

const ACC_LIST = [
  {
    key: 16,
    accountId: 57890456,
    amount: 69650,
    currency: 'RUB',
    interest: '8% годовых',
    createdDate: Date.parse('2017-01-23T13:55:00'),
    operationsHistory: [
      {
        key: 120,
        date: Date.parse('2017-03-08T19:21:00'),
        amount: 3500,
        description: 'Пополнение с карты ****0465'
      },
      {
        key: 119,
        date: Date.parse('2017-03-07T13:55:00'),
        amount: 1250,
        description: 'Пополнение с карты ****0465'
      },
      {
        key: 118,
        date: Date.parse('2017-03-05T19:16:00'),
        amount: 6800,
        description: 'Списание на карту ****0465'
      },
      {
        key: 117,
        date: Date.parse('2017-03-01T10:25:00'),
        amount: 10000,
        description: 'Пополнение с карты ****0465'
      },
      {
        key: 116,
        date: Date.parse('2017-02-20T18:10:00'),
        amount: 230,
        description: 'Начисление процентов'
      },
      {
        key: 115,
        date: Date.parse('2017-02-20T18:10:00'),
        amount: 10000,
        description: 'Пополнение с карты ****0465'
      },
      {
        key: 114,
        date: Date.parse('2017-02-13T23:18:00'),
        amount: 5300,
        description: 'Пополнение с карты ****0465'
      }
    ]
  },
  {
    key: 15,
    accountId: 57890398,
    amount: 3502,
    currency: 'USD',
    interest: '4.5% годовых',
    createdDate: Date.parse('2016-08-14T10:12:00'),
    operationsHistory: [{
        key: 214,
        date: Date.parse('2016-12-31T21:13:00'),
        amount: -96,
        description: 'Списание на карту ****1378'
      }
    ]
  },
  {
    key: 14,
    accountId: 57890239 ,
    amount: 10500,
    currency: 'RUB',
    interest: '8% годовых',
    createdDate: Date.parse('2017-03-01T20:03:00'),
    operationsHistory: [{
        key: 314,
        date: Date.parse('2017-03-05T17:15:00'),
        amount: 500,
        description: 'Пополнение с карты ****4897'
      }
    ]
  }
]

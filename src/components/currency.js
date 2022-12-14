import React, { useEffect, useState } from "react";
import Table from "./table";

import Collapse from "@mui/material/Collapse";
import { addCurrency, deactivateCurrency, getAllCurrency } from "../services/payment";
const Currency = () => {
  const [expand, setExpand] = React.useState(true);
  const tableHeadings = [
    { id: "Currency Id", label: "Currency Id", numeric: true },
    { id: "currencyName", label: "Currency Name", numeric: false },
    { id: "currencyCode", label: "Currency Code", numeric: false },
    { id: "status", label: "Status", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];

  const data = [
    {
      slNo: 1,
      currencyName: "Indian Rupee",
      currencyCode: "INR",
      status: "Active",
      action: "Deactivate",
    },
    {
      slNo: 2,
      currencyName: "US Dollar",
      currencyCode: "USD",
      status: "Active",
      action: "Deactivate",
    },
    {
      slNo: 3,
      currencyName: "British Pound",
      currencyCode: "Pound",
      status: "Inactive",
      action: "Activate",
    },
  ];

  const [currencyName, setCurrencyName] = useState('')
  const [currencyCode, setCurrencyCode] = useState('')
  const [tableData, setTableData] = useState([])

  const handleSubmit = () => {
    if (currencyName.trim() === '') return
    if (currencyCode.trim() === '') return
    addCurrency({ currencyName, currencycode: currencyCode }, (err, res) => {
      setCurrencyCode('')
      setCurrencyName('')
      if (err) return console.log(err.response)
      console.log(res)
      fetchCurrencies()
      if (res.data.messageDiscription) {
        alert(res.data.messageDiscription)
      }
    })
  }

  const handleDeactivate = row => {
    console.log(row)
    if (row.action === 'Activate') return
    deactivateCurrency({ currencyName: row.currencyName }, (err, res) => {
      if (err) return console.log(err.response)
      console.log(res)
      fetchCurrencies()
    })
  }

  const fetchCurrencies = () => {
    getAllCurrency((err, res) => {
      if (err) return console.log(err.response)
      console.log(res)
      setTableData(res.data.map(curr => {
        return {
          ...curr,
          action: curr.status === '10' ? 'Deactivate' : 'Activate',
          status: curr.status === '10' ? 'Active' : 'Inactive'
        }
      }))
    })
  }
  
  useEffect(() => {
    fetchCurrencies()
  }, [])


  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="/">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Back</span>
          </h4>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />
      <div class="row sector2 mr-1">
        <div class="col-md-6">
          <h5 class="mb-0">Currency</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-0 pb-0 pt-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Master Data</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Add Currency</a>
              </li>
            </ol>
          </nav>
        </div>
        <div class="col-md-6">
          <div
            class="btn-toolbar mb-2 mr-4 mb-md-0 float-right"
            onClick={() => setExpand(!expand)}
          >
            <a href="#" style={{ textDecoration: "none" }}>
              Add Currency
            </a>
          </div>
        </div>
      </div>
      <Collapse in={expand}>
        <div class="sector3 ml-4 mr-4 mb-5 pb-5">
          <div id="myDIV">
            <div class="row justify-content-center col-md-6 ml-auto mr-auto">
              <div class="col-12 d-flex align-items-center">
                <div class="md-form flex-1 col-md-8 pl-0 pr-0">
                  <input
                    type="text"
                    id="materialSubscriptionFormEmail"
                    class="form-control"
                    value={currencyName}
                    onChange={e => setCurrencyName(e.target.value)}
                  />
                  <label for="materialSubscriptionFormEmail">
                    Currency Name
                  </label>
                </div>
                <div class="col-md-4"></div>
              </div>
              <div class="col-12 d-flex align-items-center">
                <div class="md-form flex-1 col-md-8 pl-0 pr-0">
                  <input type="text" id="currency_code" class="form-control"
                    value={currencyCode}
                    onChange={e => setCurrencyCode(e.target.value)}
                  />
                  <label for="currency_code">Currency Code</label>
                </div>
                <div class="col-md-4">
                  <a
                    href="#."
                    class="btn swatch-gray btn-sm btn-rounded waves-effect waves-light login_btn"
                    onClick={handleSubmit}
                  >
                    Add
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Collapse>
      {
        tableData.length >= 1 &&
        <Table
          tableHeadings={tableHeadings}
          tableData={tableData}
          tableName={`Currency Details`}
          defaultSort={`currencyName`}
          onClickAction={handleDeactivate}
        />
      }
    </div>
  );
};
export default Currency;

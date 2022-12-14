import React from "react";
import { styled } from "@mui/material/styles";

import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import TableRow from "@mui/material/TableRow";
import Table from "./table";
const ReportsNew = () => {
  const [isMandate, setMandate] = React.useState(true);
  const tableHeadings = [
    { id: "refNo", label: "Reference Number", numeric: false },
    { id: "date", label: "Date", numeric: false },
    { id: "status", label: "Status", numeric: false },
    { id: "action", label: "Action", numeric: false },
  ];
  const tableData = [
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "13/11/2020",
      status: "Authorized",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "13/11/2020",
      status: "	Transaction Open Status",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "14/11/2020",
      status: "Initiated",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "14/11/2020",
      status: "Authorized",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "15/11/2020",
      status: "Rejected By NPCI",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "15/11/2020",
      status: "Authorized",
      action: "view",
    },
    {
      refNo: "d13d7632368a4f28a5986f65174fd44b",
      date: "17/11/2020",
      status: "Authorization Request Rejected",
      action: "view",
    },
  ];

  return (
    <div style={{ margin: "85px 0" }}>
      <div class="row">
        <div class="col-md-6">
          <h4 class="ml-4 mt-3 heading-color">
            <a data-toggle="tooltip" title="Back" href="/">
              <i class="fas fa-chevron-left"></i>
            </a>
            &nbsp;
            <span class="heading-color">Reports</span>
          </h4>
        </div>
      </div>
      <hr class="mt-0 ml-4 mr-4" />

      <div class="row sector2">
        <div class="col-md-12">
          <h5 class="mb-0">Create Report</h5>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb ml-2 mb-3 pb-2 pt-0">
              <li class="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li class="breadcrumb-item">
                <a href="#">Create Report</a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div id="main_content">
        <div class="row mr-auto ml-auto col-md-6">
          <div class="col pl-0">
            <li
              className={isMandate ? "selected" : "notselected"}
              id="page1"
              onClick={() => setMandate(true)}
            >
              Mandate Report
            </li>
            <li
              className={!isMandate ? "selected" : "notselected"}
              id="page2"
              onClick={() => setMandate(false)}
            >
              Payment Report
            </li>
          </div>
        </div>

        <div class="hidden_desc" id="page1_desc">
          <div class="row mr-auto ml-auto w-100 col-md-6">
            <h4 class="mt-3">Mandate Report</h4>
          </div>
          <div class="row col-md-6 ml-auto mr-auto pl-0">
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="From Date"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">From Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="To Date"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">To Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <select name="" id="" class="form-control border_select">
                  <option value="Mandate Status">Mandate Status</option>
                  <option value="1">1</option>
                  <option value="1">1</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Owner /Tenant Name
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Account Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Mandate Id / Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Assets Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Assets Type</label>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 mt-4">
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
              >
                Generate Report
              </button>
              <a href="/">
                <button
                  type="button"
                  class="btn btn-outline-primary waves-effect"
                >
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>

        <div class="hidden_desc" id="page2_desc">
          <div class="row mr-auto ml-auto w-100 col-md-6">
            <h4 class="mt-3">Payments Report</h4>
          </div>
          <div class="row col-md-6 ml-auto mr-auto pl-0">
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="From Date"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">From Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="To Date"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">To Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <select name="" id="" class="form-control border_select">
                  <option value="Mandate Status">Mandate Status</option>
                  <option value="1">1</option>
                  <option value="1">1</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Owner /Tenant Name
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Account Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Mandate Id / Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Assets Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Assets Type</label>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 mt-4">
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
              >
                Generate Report
              </button>
              <a href="/">
                <button
                  type="button"
                  class="btn btn-outline-primary waves-effect"
                >
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>

        <div id="page_content">
          <div class="row mr-auto ml-auto w-100 col-md-6">
            <h4 class="mt-3">{isMandate ? "Mandate" : "Payment"} Report</h4>
          </div>
          <div class="row col-md-6 ml-auto mr-auto pl-0">
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="From Date"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">From Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="date"
                  id="materialSubscriptionFormEmail"
                  placeholder="To Date"
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">To Date</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <select name="" id="" class="form-control border_select">
                  <option value="Mandate Status">Mandate Status</option>
                  <option value="1">1</option>
                  <option value="1">1</option>
                  <option value="1">1</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Owner /Tenant Name
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  Account Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Mandate Id / Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">
                  {" "}
                  Assets Number
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <input
                  type="text"
                  id="materialSubscriptionFormEmail"
                  placeholder=""
                  class="form-control"
                />
                <label for="materialSubscriptionFormEmail">Assets Type</label>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-6 mt-4">
              <button
                class="btn btn-primary"
                data-toggle="collapse"
                data-target=".multi-collapse"
                aria-expanded="false"
              >
                Generate Report
              </button>
              <a href="/">
                <button
                  type="button"
                  class="btn btn-outline-primary waves-effect"
                >
                  cancel
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Table
        tableHeadings={tableHeadings}
        tableData={tableData}
        tableName={`Generated Report`}
        defaultSort={`date`}
      />
      <div class="row pb-5 mb-5">
        <div class="col-md-12 text-center">
          <a href="">
            <button class="btn btn-primary">Download pdf</button>
          </a>
          <a href="">
            <button class="btn btn-primary">Download csv</button>
          </a>
          <a href="/">
            <button type="button" class="btn btn-outline-primary waves-effect">
              cancel
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ReportsNew;

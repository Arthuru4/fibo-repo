import React, { useEffect, useState } from "react";
import { getData } from "../scripts/axiosService";
import Table from "./Table";

const Data = () => {
  const [data, setData] = useState([]);
  const [conError, setConError] = useState(false);
  const getDate = (date) => {
    var dateStr =
      ("00" + (date.getMonth() + 1)).slice(-2) + "/" +
      ("00" + date.getDate()).slice(-2) + "/" +
      date.getFullYear() + " " +
      ("00" + date.getHours()).slice(-2) + ":" +
      ("00" + date.getMinutes()).slice(-2) + ":" +
      ("00" + date.getSeconds()).slice(-2);
    return `${dateStr}`
  };

  useEffect(() => {
    debugger
    getData().then(
      res => {
        setData(
          res.data.result.map(el => {
            return {address: el.address || 'not defined', input: el.input, fibo:el.fibo, date: `${getDate(new Date(el.date))}`};
          })
        );
      },
      rej => {
        setConError(true);
      }
    );
  }, []);

  return (
    <div>
      {conError && <div>connection error, try again later</div>}
      {!conError && (
        <div className={'table'}>
          <Table data={data}/>
        </div>
      )}
    </div>
  );
};

export default Data;

import axios from "axios";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Sale } from "../../models/Sale";
import { BASE_URL } from "../../utils/request";
import NotificationButton from "../notificationButtons";
import "./styles.css";

function SalesCard() {
  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate, setMinDate] = useState(min);
  const [maxDate, setMaxDate] = useState(max);

  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {


		const min = minDate.toISOString().slice(0,10)
		const max = maxDate.toISOString().slice(0,10)


    axios.get(`${BASE_URL}/sales?minDate=${min}&maxDate=${max}`).then((response) => {
      setSales(response.data.content);
    });
  }, [minDate, maxDate]);

  return (
    <div className="dsmeta-card">
      <h2 className="dsmeta-sales-title">Vendas</h2>
      <div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={minDate}
            onChange={(date: Date) => setMinDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="dsmeta-form-control-container">
          <DatePicker
            selected={maxDate}
            onChange={(date: Date) => setMaxDate(date)}
            className="dsmeta-form-control"
            dateFormat="dd/MM/yyyy"
          />
        </div>
      </div>
      <div>
        <table className="dsmeta-sales-table">
          <thead>
            <tr>
              <th className="show992">ID</th>
              <th className="show576">Data</th>
              <th>Vendedor</th>
              <th className="show992">Visitas</th>
              <th className="show992">Vendas</th>
              <th>Total</th>
              <th>Notificar</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="show992">{item.id}</td>
                  <td className="show576">{new Date(item.date).toLocaleDateString()}</td>
                  <td>{item.sellerName}</td>
                  <td className="show992">{item.visited}</td>
                  <td className="show992">{item.deals}</td>
                  <td>R$ {item.amount.toFixed(2)}</td>
                  <td>
                    <div className="dsmeta-red-button-container">
                      <NotificationButton saleId={item.id} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SalesCard;

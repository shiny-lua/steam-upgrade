import React from "react";
import Layout from "../../components/layout";
import Icon from "../../components/icon";
import { useNavigate } from "react-router-dom";
import { restApi } from "../../context/restApi";
import { getFormattedDate } from "../../context/helper";

const Orders = () => {
  const navigate = useNavigate();

  const [orders, setOrders] = React.useState([] as {
    id: string,
    dreamLevel: number,
    amount: number,
    status: string,
    date: number,
  }[]);

  React.useEffect(() => {
    const fetchOrders = async () => {
      const res = await restApi.postRequest("/get-orders");
      setOrders(res.data);
    }
    fetchOrders();
  }, []);

  return (
    <Layout>
      <div className="relative h-full mx-auto w-[96%] lg:w-[1000px] mt-5 md:mt-10">
        <div className="-z-10"><Icon icon="Effort" /></div>
        <div className="space-y-3 mb-7">
          <button onClick={() => navigate("/home")} className="relative flex gap-2 z-10 items-center">
            <Icon icon="Back" />
            <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">
              Back
            </span>
          </button>
          <div className="flex items-center gap-3">
            <div className="text-[#A9ABCD]"><Icon className="w-8" icon="Orders" /></div>
            <h2 className="text-[#F3F3F3] text-[1.4rem] font-[900] leading-[22px]">
              Orders
            </h2>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <div className={`relative min-h-[400px] flex flex-col justify-center w-full h-full bg-primary-lightDark/90 shadow-inner-[0_0px_0px_1px_rgba(0,0,0,0.3)] rounded-lg p-4 md:p-8 ${orders.length > 0 ? "justify-start" : "justify-center"}`}>
            {orders.length > 0 ? (
              <table className="w-full text-left table-auto min-w-[600px]">
                <thead>
                  <tr>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <p className="text-sm font-normal leading-[14px] text-primary-grey capitalize">
                        order id
                      </p>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <p className="text-sm font-normal leading-[14px] text-primary-grey capitalize">
                        dream level
                      </p>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <p className="text-sm font-normal leading-[14px] text-primary-grey capitalize">
                        status
                      </p>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <p className="text-sm font-normal leading-[14px] text-primary-grey capitalize">
                        amount
                      </p>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <p className="text-sm font-normal leading-[14px] text-primary-grey capitalize">
                        date
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {orders.map((order, index) => (
                    <tr key={index} className={`border-b  border-[#161620E5] ${order.status !== "accepted" ? "text-orange-800" : "text-green-400"}`}>
                      <td className="flex items-center gap-3 py-5">
                        <p className="text-sm">{order.id}</p>
                      </td>
                      <td className="p py-5">
                        <p className="text-sm">{order.dreamLevel}</p>
                      </td>
                      <td className=" py-5">
                        <p className="text-sm capitalize">{order.status}</p>
                      </td>
                      <td className="py-5">
                        <p className="text-sm">${order.amount}</p>
                      </td>
                      <td className="py-5">
                        <p className="text-sm">{getFormattedDate(order.date)}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex items-center text-sm text-primary-grey justify-center">
                No orders available. Your first order will appear here.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;

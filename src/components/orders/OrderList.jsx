import React from "react";

const OrderList = ({ ordersData, setFilteredOrders }) => {

  const handleReject = (orderNumber) => {
    setFilteredOrders(prev => prev.map(item => item.orderNumber === orderNumber ? {...item, ["status"]: "rejected"} : item))
  }
  const handleApprove = (orderNumber) => {
    setFilteredOrders(prev => prev.map(item => item.orderNumber === orderNumber ? {...item, ["status"]: "approved"} : item))
  }

  return (
    <table className="w-[1180px] xl:w-full border-separate border-spacing-y-3">
      <thead className="text-bold text-gray-600 text-sm md:text-base">
        <tr className="text-left">
          <th className="pl-5">Order Number</th>
          <th className="text-center">Price (USD) </th>
          <th className="text-center">Price (Crypto) </th>
          <th className="text-left pl-5 w-96">Oder Status</th>
          <th className="pl-5 w-[210px]">Date</th>
        </tr>
      </thead>

      <tbody className="mt-5">
        {ordersData.map((order, idx) => (
          <tr key={idx} className="bg-[#dfe1e7] hover:bg-[#d8d9dd] text-left font-semibold text-sm md:text-base">
            <td className=" p-3 rounded-l-md pl-5">{order.orderNumber}</td>
            <td className=" p-3 text-center">{order.priceUSD}</td>
            <td className=" p-3 text-center">{order.priceCrypto}</td>
            <td className=" p-3 text-left pl-6 flex items-center gap-14">
              <span>{order.status}</span>{" "}
              {order.status === "pending" && (
                <div>
                  <button onClick={() => handleReject(order.orderNumber)} className="bg-[#FF5656] hover:bg-[#f04848] text-white font-bold px-3 py-1 rounded-md text-xs mr-2">
                    Reject
                  </button>
                  <button onClick={() => handleApprove(order.orderNumber)} className="bg-[#03cf0a] hover:bg-[#37b53c] text-white font-bold px-3 py-1 rounded-md text-xs">
                    Approve
                  </button>
                </div>
              )}
            </td>
            <td className=" p-3 rounded-r-md text-sm">
              {order.date} : {order.time}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderList;

import React from "react";

const AddressList = ({ addressList }) => {
  return (
    <table className="w-[750px] md:w-full border-separate border-spacing-y-3">
      <thead className="text-bold text-gray-600" >
        <tr className="text-left text-sm md:text-base">
          <th className="pl-5 w-40">Account</th>
          <th className="text-center w-56">Coin / Token</th>
          <th className="text-left pl-3 w-[400px]">Address </th>
          <th className="text-left pl-3 w-32">Network</th>
        </tr>
      </thead>

      <tbody className="mt-5">
        {addressList.map((account, idx) => (
          <tr
            key={idx}
            className="bg-[#dfe1e7] hover:bg-[#d8d9dd] text-left font-semibold text-sm md:text-base"
          >
            <td className=" p-3 rounded-l-md">{account.account}</td>
            <td className=" p-3 text-center">{account.coinToken}</td>
            <td className=" p-3 text-left">{account.address}</td>
            <td className=" p-3 text-left"> {account.network}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AddressList;

import React, { useEffect, useState } from "react";
import icon_search from "../assets/search-line.svg";
import { accountData } from "../data";
import AddressList from "../components/address/AddressList";

const AddressListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState({
    network: "",
    coin: "",
  });
  const [filteredAdrressListItems, setFilteredAddressListItems] =
    useState(accountData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedNetwork.network) return;

    setFilteredAddressListItems((prev) => [
      ...prev,
      {
        account: "New Account",
        coinToken: selectedNetwork.coin,
        address: inputAddress,
        network: selectedNetwork.network,
      },
    ]);

    setInputAddress("");
    setSelectedNetwork({ network: "", coin: "" });
  };
  return (
    <div className="h-screen bg-[#f4f7fe] p-10">
      <h1 className="text-2xl md:text-3xl text-primary font-bold">
        Address List
      </h1>

      {/* search and form */}
      <div className="mt-5 flex-col lg:flex-row flex items-center justify-between gap-5">
        <div className="relative w-full md:w-fit flex">
          <input
            type="text"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            className="w-full md:w-96 text-sm md:text-base rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-gray-400 py-2 pl-10 pr-3"
            placeholder="Search by recipients..."
          />
          <img
            src={icon_search}
            className="size-5 absolute top-1/2 -translate-y-1/2 left-3"
            alt="search-icon"
          />
        </div>

        {/* add new account form */}
        <form onSubmit={handleSubmit} className="flex gap-2 flex-wrap">
          <input
            type="text"
            onChange={(e) => setInputAddress(e.target.value)}
            value={inputAddress}
            className="w-full sm:w-56 text-sm md:text-base rounded-lg border-2 border-gray-200 bg-white outline-none focus:border-gray-400 py-2  px-3"
            placeholder="Input Address"
            required
          />

          <select
            onChange={(e) =>
              setSelectedNetwork({
                network: e.target.value,
                coin: e.target.options[e.target.selectedIndex].getAttribute(
                  "data-coin"
                ),
              })
            }
            defaultValue={selectedNetwork.network}
            value={selectedNetwork.network}
            className="w-full sm:w-40 p-2 text-sm md:text-base rounded-lg border-2 border-gray-200 outline-none focus:border-gray-400 text-gray-600"
            required
          >
            <option value="">Select Network</option>
            <option data-coin="BTC" value="Bitcoin">
              Bitcoin
            </option>
            <option data-coin="USDT" value="ETH, BSC">
              ETH, BSC
            </option>
            <option data-coin="BNB" value="BSC">
              BSC
            </option>
            <option data-coin="ETH" value="ETH">
              ETH
            </option>
          </select>

          <button
            type="submit"
            className="bg-[#e5e6ea] px-3 py-2 flex-1 whitespace-nowrap rounded-md text-sm font-semibold hover:bg-[#dddee0]"
          >
            Add New
          </button>
        </form>
      </div>

      <hr className="border-t border-t-gray-300 my-5" />

      {/* address list table */}
      <div className="overflow-x-auto ring-2 ring-gray-500 md:ring-0">
        <AddressList addressList={filteredAdrressListItems} setFilteredAddressListItems={setFilteredAddressListItems} />
      </div>
    </div>
  );
};

export default AddressListPage;

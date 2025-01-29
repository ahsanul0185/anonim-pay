import React, { useState } from "react";
import icon_search from "../assets/search-line.svg";
import { ordersData } from "../data";
import OrderList from "../components/orders/OrderList";
import ReactPaginate from "react-paginate";

const OrdersPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(ordersData);

  const handeChangeOrderStatus = (e) => {
    const selectedStatus = e.target.value;
    if (!selectedStatus) {
      setFilteredOrders(ordersData);
      return;
    }
    setFilteredOrders(
      ordersData.filter((item) => item.status === selectedStatus)
    );
  };

  // --- code for pagination --- //

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = filteredOrders.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredOrders.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredOrders.length;
    setItemOffset(newOffset);
  };


  return (
    <div className="h-screen bg-[#f4f7fe] p-8">
      <h1 className="text-2xl md:text-3xl text-primary font-bold">Order List</h1>

      <div className="mt-5 flex justify-between gap-3">
        <div className="relative">
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

        <select
          onChange={handeChangeOrderStatus}
          defaultValue=""
          className="w-36 p-2 text-sm md:text-base rounded-lg border-2 border-gray-200 outline-none focus:border-gray-400 text-gray-600"
        >
          <option value="">Order Status</option>
          <option value="approved">Approved</option>
          <option value="pending">Pending</option>
          <option value="rejected">Rejected</option>
          <option value="expired">Expired</option>
        </select>
      </div>

      <hr className="border-t border-t-gray-300 my-5" />

      <div className="overflow-x-auto ring-2 ring-gray-500 xl:ring-0">
      <OrderList
        ordersData={currentItems}
        setFilteredOrders={setFilteredOrders}
      />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-5 py-5">
        <p className="text-gray-500 text-sm font-bold">Showing {itemOffset + 1} to {filteredOrders.length - itemsPerPage < itemOffset + 1 ? filteredOrders.length : endOffset} of {filteredOrders.length } entries</p>

        <div>
          {/* Pagination here*/}
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            className="flex items-center gap-2"
            pageLinkClassName="bg-[#89b2ff] size-6 rounded-sm grid place-items-center text-white font-semibold"
            activeLinkClassName="bg-[#73fc8c]"
            previousLinkClassName="text-gray-500 font-semibold mr-2 text-sm"
            nextLinkClassName="text-gray-500 font-semibold ml-2 text-sm"
            breakLinkClassName="text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;

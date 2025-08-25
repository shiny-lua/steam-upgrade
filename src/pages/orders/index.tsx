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

  // Pagination state
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage] = React.useState(10);

  React.useEffect(() => {
    const fetchOrders = async () => {
      const res = await restApi.postRequest("/trading-cards/history");
      setOrders(res.data.transactions);
    }
    fetchOrders();
  }, []);

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(orders.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push('...');
        pageNumbers.push(totalPages);
      }
    }
    
    return pageNumbers;
  };

  return (
    <Layout>
      <div className="relative h-full mx-auto w-[96%] lg:w-[1000px] mt-5 md:mt-10">
        <div className="-z-10"><Icon icon="Effort" className="hidden lg:block" /></div>
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
          <div className={`relative min-h-[400px] flex flex-col justify-start w-full h-full bg-primary-lightDark/90 shadow-inner-[0_0px_0px_1px_rgba(0,0,0,0.3)] rounded-lg p-4 md:p-8 ${orders.length > 0 ? "justify-start" : "justify-center"}`}>
            {orders.length > 0 ? (
              <>
                <table className="w-full text-left table-auto min-w-[600px]">
                  <thead>
                    <tr>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <p className="text-sm font-normal leading-[14px] text-primary-white capitalize">
                          order id
                        </p>
                      </th>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <p className="text-sm font-normal leading-[14px] text-primary-white capitalize">
                          dream level
                        </p>
                      </th>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <p className="text-sm font-normal leading-[14px] text-primary-white capitalize">
                          status
                        </p>
                      </th>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <p className="text-sm font-normal leading-[14px] text-primary-white capitalize">
                          amount
                        </p>
                      </th>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <p className="text-sm font-normal leading-[14px] text-primary-white capitalize">
                          date
                        </p>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="">
                    {currentOrders.map((order, index) => (
                      <tr key={index} className={`border-b  border-[#161620E5] `}>
                        <td className="flex items-center gap-3 py-5">
                          <p className="text-sm text-primary-grey">{order.id}</p>
                        </td>
                        <td className="p py-5">
                          <p className="text-sm text-primary-grey">{order.dreamLevel}</p>
                        </td>
                        <td className=" py-5">
                          <p className={`text-sm capitalize ${order.status == "failed" ? "text-red-500" : order.status == "pending" ? "text-orange-500" : "text-green-500"}`}>{order.status}</p>
                        </td>
                        <td className="py-5">
                          <p className="text-sm text-primary-grey">${order.amount}</p>
                        </td>
                        <td className="py-5">
                          <p className="text-sm text-primary-grey">{getFormattedDate(order.date)}</p>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-[#161620E5]">
                    <div className="text-sm text-primary-grey">
                      Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, orders.length)} of {orders.length} orders
                    </div>
                    <div className="flex items-center gap-2">
                      {/* Previous Button */}
                      <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                          currentPage === 1
                            ? "text-primary-grey/50 cursor-not-allowed"
                            : "text-primary-grey hover:text-white hover:bg-primary-grey/20"
                        }`}
                      >
                        Previous
                      </button>
                      
                      {/* Page Numbers */}
                      <div className="flex items-center gap-1">
                        {getPageNumbers().map((pageNumber, index) => (
                          <React.Fragment key={index}>
                            {pageNumber === '...' ? (
                              <span className="px-2 text-primary-grey">...</span>
                            ) : (
                              <button
                                onClick={() => handlePageChange(pageNumber as number)}
                                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                                  currentPage === pageNumber
                                    ? "bg-blue-600 text-white"
                                    : "text-primary-grey hover:text-white hover:bg-primary-grey/20"
                                }`}
                              >
                                {pageNumber}
                              </button>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                      
                      {/* Next Button */}
                      <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`px-3 py-1 text-sm rounded-md transition-colors ${
                          currentPage === totalPages
                            ? "text-primary-grey/50 cursor-not-allowed"
                            : "text-primary-grey hover:text-white hover:bg-primary-grey/20"
                        }`}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center text-sm text-primary-grey justify-center text-center">
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

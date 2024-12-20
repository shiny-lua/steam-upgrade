import React from "react";
import Layout from "../../components/layout";
import Icon from "../../components/icon";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigate = useNavigate();
    
    return (
    <Layout>
      <div className="relative h-full mx-auto w-[868px] mt-5 md:mt-10">
        <div className="-z-10"><Icon icon="Effort" /></div>
        <div className="space-y-3 mb-7">
          <button onClick={() => navigate("/home")}  className="relative flex gap-2 z-10 items-center">
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
        <div className="relative flex flex-col justify-center items-center min-h-[400px] w-full h-full overflow-hidden bg-primary-lightDark/90 shadow-inner-[0_0px_0px_1px_rgba(0,0,0,0.3)] rounded-lg p-8">
          <table className="w-full text-left table-auto min-w-max">
            <thead>
              <tr>
                <th className="pt-1 pb-5">
                  <p className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    type
                  </p>
                </th>
                <th className="pt-1 pb-5">
                  <p className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    status
                  </p>
                </th>
                <th className="pt-1 pb-5">
                  <p className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    date
                  </p>
                </th>
                <th className="pt-1 pb-5">
                  <p className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                    amount
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Bit" />
                  <p className="text-sm text-white">Bitcoin Top-Up</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Orders" className="w-4" />
                  <p className="text-sm text-white">14 Packs</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Orders" className="w-4" />
                  <p className="text-sm text-white">14 Packs</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Bit" />
                  <p className="text-sm text-white">Bitcoin Top-Up</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Orders" className="w-4" />
                  <p className="text-sm text-white">14 Packs</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Bit" />
                  <p className="text-sm text-white">Bitcoin Top-Up</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Bit" />
                  <p className="text-sm text-white">Bitcoin Top-Up</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Bit" />
                  <p className="text-sm text-white">Bitcoin Top-Up</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="border-b  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Bit" />
                  <p className="text-sm text-white">Bitcoin Top-Up</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
              <tr className="  border-[#161620E5]">
                <td className="flex items-center gap-3 pr-5 py-5">
                  <Icon icon="Bit" />
                  <p className="text-sm text-white">Bitcoin Top-Up</p>
                </td>
                <td className="p py-5">
                  <p className="text-sm text-white capitalize">success</p>
                </td>
                <td className=" py-5">
                  <p className="text-sm text-primary-grey">13/3/2024</p>
                </td>
                <td className="py-5">
                  <p className="text-sm text-white">$30.39</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;

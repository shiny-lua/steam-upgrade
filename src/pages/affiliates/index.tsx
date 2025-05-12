import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import Cookies from "js-cookie";

import Layout from "../../components/layout";
import Icon from "../../components/icon";
import ClaimModal from "./components/claim-modal";
import { restApi } from "../../context/restApi";
import { useGlobalContext } from "../../context";
import { showToast, copyToClipboard } from "../../context/helper";
const Affiliates = () => {
  const navigate = useNavigate()
  const [state, { dispatch }]: GlobalContextType = useGlobalContext()
  const userData = state.userData
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [status, setStatus] = React.useState({
    ranks: null as any,
    isLoading: false,
    isLoadingCode: false,
    affiliateCode: "",
    isEditing: false,
    isCopied: false,
    affiliate: {
      referrals: 0,
      buyers: 0,
      totalProfit: 0,
    },
    isClaimModalOpen: false
  })

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await restApi.postRequest("get-ranks");
      try {
        setStatus({ ...status, isLoading: true })
        const resp = await restApi.postRequest("get-user");
        setStatus({ ...status, ranks: res.data, isLoading: false, affiliateCode: resp.data.affiliateCode, affiliate: resp.data.affiliate })
        dispatch({ type: "userData", payload: resp.data })
      } catch (error) {
        setStatus({ ...status, isLoading: false, ranks: res.data })
      }
    };
    fetchData();
  }, []);

  const onClaimModal = () => {
    if (status.affiliate.totalProfit < 10) {
      return
    }
    setStatus({ ...status, isClaimModalOpen: true })
  }


  const handleCopy = () => {
    copyToClipboard(`https://steamupgrade.com/home?ref=${status.affiliateCode}`);
    setStatus({ ...status, isCopied: false })
    setTimeout(() => {
      setStatus({ ...status, isCopied: true })
    }, 1500);
  }

  const onCode = async () => {
    if (status.isLoadingCode) return;
    if (!status.isEditing) {
      setStatus({ ...status, isEditing: true })
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    } else {
      if (!status.affiliateCode || status.affiliateCode.length < 5) {
        showToast("Affiliate code must be at least 5 characters", "error");
        return;
      }
      if (!Cookies.get("authToken")) {
        showToast("Please login to update your affiliate code", "error");
        return;
      }
      setStatus({ ...status, isLoadingCode: true })
      const res = await restApi.postRequest("update-affiliate-code", { affiliateCode: status.affiliateCode });
      if (res.status === 200) {
        setStatus({ ...status, isEditing: false, isLoadingCode: false })
        showToast("Affiliate code updated successfully", "success");
      } else {
        showToast(res.message, "error");
        setStatus({ ...status, isLoadingCode: false })
      }
    }
  }

  return (
    <Layout>
      <div className="relative h-full w-full max-w-[868px] mx-auto px-4 mt-5 md:mt-10">
        <Icon icon="Effort" />
        <div className="flex flex-col xsm:flex-row items-start justify-between gap-4 mb-4">
          <div className="space-y-3">
            <button onClick={() => navigate("/home")} className="relative flex gap-2 items-center">
              <Icon icon="Back" />
              <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">
                Back
              </span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-[#A9ABCD]"><Icon icon="Affiliates" className="w-6" /></div>
              <h2 className="text-[#F3F3F3] text-[1.4rem] font-[900] leading-[22px]">
                {status.isLoading ? (<div className="w-27 h-4.5 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span>Affiliates</span>)}
              </h2>
            </div>
          </div>
          <div className="flex justify-center items-center w-[117px] h-[25px] px-[10px] py-[8px] rounded-2xl ProfitShare_bgGradient__sgQHw">
            <span className="text-[12px] font-[700] leading-[13px] bg-primary-gradient inline-block text-transparent bg-clip-text capitalize">
              10% profit share
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 xsm:mt-10 relative z-10">
          <div className="w-full bg-primary-lightDark rounded-md flex flex-col gap-5 p-4 md:p-5">
            <div className="flex gap-2 items-center">
              <Icon icon="Users" />
              {status.isLoading ? (<div className="w-24 h-4.5 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-white text-base">Share & Earn</span>)}
            </div>
            <div className="space-y-4">
              {status.isLoading ? (<div className="flex flex-col gap-1 pt-2">
                <div className="w-full h-3 bg-primary-animation rounded-sm animate-pulse"></div>
                <div className="w-3/5 h-3 bg-primary-animation rounded-sm animate-pulse"></div>
              </div>)
                : (<p className="text-primary-grey text-[0.75rem] font-[700] leading-[16.8px]">
                  Join our affiliate program and earn 10% of every purchase made
                  through your unique referral link. It's a simple way to share,
                  save and profit!
                </p>)}
              <hr className="bg-primary-dark border-primary-dark" />
              <div className="space-y-2">
                {status.isLoading ? (<div className="w-27 h-3.5 mt-6 mb-4 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-grey text-[0.75rem] font-[700]">
                  Your Affiliate Code
                </span>)}
                {status.isLoading ? (<div className="w-full h-8 bg-primary-animation rounded-md animate-pulse"></div>) : (<div className="flex items-center text-[0.85rem] text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                  <input
                    disabled={!status.isEditing}
                    ref={inputRef}
                    type="text"
                    className="inline-block bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full px-4 py-1.5 items-center"
                    value={status.affiliateCode}
                    onChange={(e) => setStatus({ ...status, affiliateCode: e.target.value })}
                  />
                  <button
                    onClick={onCode}
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 px-3 flex items-center justify-center">
                    {status.isLoadingCode ? <div className="animate-spin rounded-full border-2 border-solid border-primary-gray border-t-transparent w-3.5 h-3.5" /> : (
                      status.isEditing ? <Icon icon="Save" className="w-4 h-4" /> : <Icon icon="Edit" />
                    )}
                  </button>
                </div>)}
              </div>
              <div className="space-y-2 mt-2">
                {status.isLoading ? (<div className="w-26 h-3.5 mt-7 mb-4 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-grey text-[0.75rem] font-[700]">
                  Your Affiliate Link
                </span>)}
                {status.isLoading ? (<div className="w-full h-8 bg-primary-animation rounded-md animate-pulse"></div>) : (<div className="relative items-center text-[0.85rem] w-full text-primary-white text-sm bg-primary-dark/50 rounded-[10px] pr-1 py-1">
                  <div
                    className="bg-transparent focus:outline-none focus:ring-0 rounded-[10px] w-full min-h-8 pl-4 sm:px-4 py-1.5 items-center"
                  >
                    {status.affiliateCode ? `https://steamupgrade.com/home?ref=${status.affiliateCode}` : ""}
                  </div>
                  <button
                    onClick={handleCopy}
                    className="absolute right-1 top-1/2 -translate-y-1/2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-[#3A3B54] h-8 px-3 flex items-center justify-center">
                    {status.isCopied ? <Icon icon="Copied" className="w-4 h-4" /> : <Icon icon="Copy" />}
                  </button>
                </div>)}
              </div>
              <hr className="bg-primary-dark border-primary-dark mt-2" />
              <div className="grid grid-cols-1 xsm:grid-cols-3 gap-4 mt-4">
                <div className="flex gap-2 items-center">
                  <div className="text-[#A9ABCD]">
                    <Icon icon="Affiliates" className="w-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    {
                      status.isLoading ? (<div className="ml-1 w-6 h-4 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">{status.affiliate.referrals ? status.affiliate.referrals : 0}</span>)
                    }
                    {
                      status.isLoading ? (<div className="w-13 h-4 ml-1 mt-1 opacity-50 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-grey text-[0.81rem] font-[400]">Referrals</span>)
                    }
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Icon icon="CheckedUser" />
                  <div className="flex flex-col gap-1">
                    {
                      status.isLoading ? (<div className="w-5 h-4 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">{status.affiliate.buyers ? status.affiliate.buyers : 0}</span>)
                    }
                    {
                      status.isLoading ? (<div className="w-10 h-4 mt-1 opacity-50 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-grey text-[0.81rem] font-[400]">Buyers</span>)
                    }
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Icon icon="Users" />
                  <div className="flex flex-col gap-1">
                    {
                      status.isLoading ? (<div className="w-20 h-4 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-white text-[0.93rem] font-[900] leading-[15px]">$ {status.affiliate.totalProfit ? status.affiliate.totalProfit : 0}</span>)
                    }
                    {
                      status.isLoading ? (<div className="w-16 h-4 mt-1 opacity-50 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-grey text-[0.81rem] font-[400]">Total Profit</span>)
                    }
                  </div>
                </div>
              </div>
            </div>
            <div>
              {status.isLoading ? (<div className="w-full h-10 bg-primary-animation rounded-md animate-pulse"></div>) : (<Button onClick={onClaimModal} className={`mt-5 sm:mt-0 align-middle font-sans font-bold text-center uppercase transition-all text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 bg-primary-gradient px-4 inline-block w-full ${status.affiliate.totalProfit < 10 ? "opacity-30" : "opacity-100"}`}>
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-white normal-case text-sm">
                    Claim
                  </span>
                </div>
              </Button>)}
            </div>
            <span className="text-primary-grey text-[0.75rem] font-[700] leading-[16.8px]">
              If you have successfully generated a total profit of $10, you can proceed to claim your rewards.
            </span>
          </div>
        </div>
        {status.isClaimModalOpen && <ClaimModal isOpen={status.isClaimModalOpen} profit={status.affiliate.totalProfit} onClose={() => setStatus({ ...status, isClaimModalOpen: false })} />}
      </div>
    </Layout>
  );
};

export default Affiliates;

import React from "react";
import { Button } from "@material-tailwind/react";
import Cookies from "js-cookie";

import Layout from "../../components/layout";
import Icon from "../../components/icon";
import { Link, useNavigate } from "react-router-dom";
import { restApi } from "../../context/restApi";
import updateLevelBadge from "../../hooks/get-level-badge";
import Loading from "../../components/loading";
import { copyToClipboard } from "../../context/helper";
import { showToast } from "../../context/helper";
import { useGlobalContext } from "../../context";

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
    }
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
          <div className="w-full sm:w-[65%] bg-primary-lightDark rounded-md flex flex-col gap-5 p-4 md:p-5">
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
          </div>

          <div className="w-full sm:w-[35%] bg-primary-lightDark rounded-md flex flex-col justify-between p-4 md:p-5">
            <div className="flex flex-col gap-8">
              <div className="flex gap-2 items-center">
                <Icon icon="Users" />
                {status.isLoading ? (<div className="w-16 h-4.5 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-white text-base">Missions</span>)}
              </div>
              <hr className="bg-primary-dark border-primary-dark" />
              <div className="flex flex-col gap-3">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    {status.isLoading ? (<div className="mt-1 w-20 h-3.5 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-white text-[0.87rem] font-[700] leading-[14px]">
                      Share Level
                    </span>)}
                    {status.isLoading ? (<div className="mt-0.5 w-28 h-3 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-grey text-[0.72rem] font-[400] leading-[12px]">
                      Share your new Level
                    </span>)}
                  </div>
                  <div className="inline-flex items-center">
                    {status.isLoading ? (<div className="w-4 h-4 mt-3 mr-3 bg-primary-animation rounded-sm animate-pulse"></div>) : (<label className="relative flex items-center cursor-pointer p-3 rounded-full">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark"
                        id=":rj:"
                      />
                      <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        <Icon icon="CheckedBox" />
                      </span>
                    </label>)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    {status.isLoading ? (<div className="mt-1 w-16 h-3.5 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-white text-[0.87rem] font-[700] leading-[14px]">
                      Follow Us
                    </span>)}
                    {status.isLoading ? (<div className="mt-0.5 w-40 h-3 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-grey text-[0.72rem] font-[400] leading-[12px]">
                      Follow @SteamUpgrade on X
                    </span>)}
                  </div>
                  <div className="inline-flex items-center">
                    {status.isLoading ? (<div className="w-4 h-4 mr-3 mt-2.5 bg-primary-animation rounded-sm animate-pulse"></div>) : (<label className="relative flex items-center cursor-pointer p-3 rounded-full">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark"
                      />
                      <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        <Icon icon="CheckedBox" />
                      </span>
                    </label>)}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    {status.isLoading ? (<div className="mt-1 w-17 h-3.5 bg-primary-animation rounded-sm animate-pulse"></div>) : (<span className="text-primary-white text-[0.87rem] font-[700] leading-[14px]">
                      Steam Bio
                    </span>)}
                    {status.isLoading ? (<div className="flex flex-col">
                      <div className="mt-0.5 w-[200px] h-3 bg-primary-animation rounded-sm animate-pulse"></div>
                      <div className="mt-0.5 w-4 h-3 bg-primary-animation rounded-sm animate-pulse"></div>
                    </div>) : (<span className="text-primary-grey text-[0.72rem] font-[400] leading-[12px]">
                      Link SteamUpgrade.com in your Steam Bio
                    </span>)}
                  </div>
                  <div className="inline-flex items-center">
                    {status.isLoading ? (<div className="w-4 h-4 mt-2 mr-3 bg-primary-animation rounded-sm animate-pulse"></div>) : (<label className="relative flex items-center cursor-pointer p-3 rounded-full">
                      <input
                        type="checkbox"
                        className="peer relative appearance-none border cursor-pointer transition-all before:content[''] before:block before:bg-blue-gray-500 before:w-12 before:h-12 before:rounded-full before:absolute before:top-2/4 before:left-2/4 before:-translate-y-2/4 before:-translate-x-2/4 before:opacity-0 hover:before:opacity-10 before:transition-opacity checked:bg-blue-gray-500 checked:border-blue-gray-500 checked:before:bg-blue-gray-500 w-4 h-4 rounded-[4px] border-primary-grey bg-primary-lightDark"
                        id=":rl:"
                      />
                      <span className="text-white absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity">
                        <Icon icon="CheckedBox" />
                      </span>
                    </label>)}
                  </div>
                </div>
              </div>
            </div>
            <div>
              {status.isLoading ? (<div className="w-full h-10 bg-primary-animation rounded-md animate-pulse"></div>) : (<Button className="mt-5 sm:mt-0 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-primary-gradient px-4 inline-block w-full opacity-50" disabled placeholder=""                >
                <div className="flex gap-1 justify-center items-center">
                  <span className="text-white normal-case text-sm">
                    Claim discount
                  </span>
                </div>
              </Button>)}
            </div>
          </div>
        </div>

        <div className="relative flex flex-col  items-center min-h-[400px] w-full h-full overflow-hidden bg-primary-lightDark/90 shadow-inner-[0_0px_0px_1px_rgba(0,0,0,0.3)] rounded-lg p-3 md:p-8 mt-5">
          {status.isLoading ? <div className="flex flex-col gap-1 mt-1 w-full justify-start items-start">
            <div className="flex gap-2 w-full">
              <div className="w-10 h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
              <div className="w-full h-6 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
              <div className="w-40 h-6 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
              <div className="w-40 h-6 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
              <div className="w-40 h-6 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
              <div className="w-55 h-6 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
              <div className="w-55 h-6 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
              <div className="w-30 h-6 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
            </div>

            {Array.from({ length: 10 }).map((_, index) => (
              <div key={index} className="flex gap-2 w-full">
                <div className="w-10 h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
                <div className="w-full h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
                <div className="w-40 h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
                <div className="w-40 h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
                <div className="w-40 h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
                <div className="w-55 h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
                <div className="w-55 h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
                <div className="w-30 h-8 bg-primary-animation rounded-md m-1 my-1.5 animate-pulse"></div>
              </div>
            ))}
          </div> : (
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left table-auto min-w-[800px]">
                <thead>
                  <tr>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                        <p>#</p>
                      </div>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                        <p>Stream ID</p>
                      </div>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                        <p>country</p>
                      </div>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                        <button className="flex items-center gap-2">
                          <p>level</p>
                          <Icon icon="Sort" />
                        </button>
                      </div>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                        <button className="flex items-center gap-2">
                          <p>games</p>
                          <Icon icon="Sort" />
                        </button>
                      </div>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                        <button className="flex items-center gap-2">
                          <p>badges</p>
                          <Icon icon="Sort" />
                        </button>
                      </div>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                        <button className="flex items-center gap-2">
                          <p>playtime</p>
                          <Icon icon="Sort" />
                        </button>
                      </div>
                    </th>
                    <th className="pt-1 pb-5 whitespace-nowrap">
                      <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                        <button className="flex items-center gap-2">
                          <p>year</p>
                          <Icon icon="Sort" />
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {status.ranks?.map((rank: any, k: number) => (
                    <tr key={k} className="border-b border-[#161620E5]">
                      <td className="pr-1 py-5">
                        <p className="text-sm text-primary-grey">{k + 1}</p>
                      </td>
                      <td className="flex items-center gap-3 py-5 max-w-[170px]">
                        <Link to={`https://steamcommunity.com/profiles/${rank?.steamId}`} className="flex items-center gap-3">
                          <img src={rank?.avatar} alt="" className="w-8 h-8 rounded-full" />
                          <p className="text-sm underline text-white">{rank?.steamName}</p>
                        </Link>
                      </td>
                      <td className="pr-3 py-5">
                        <span className={`fi fi-${rank?.country.toLowerCase()} w-8`} title={rank?.country}></span>
                      </td>
                      <td className="py-5 max-w-[1px]">
                        <div
                          className="text-white text-sm relative w-8 h-8 bg-no-repeat flex justify-center items-center"
                          style={{
                            backgroundImage: updateLevelBadge(rank?.level).levelBadge ? `url(${updateLevelBadge(rank?.level).levelBadge})` : 'none',
                            backgroundPosition: `center ${updateLevelBadge(rank?.level).levelBadgeOffset}px`,
                            border: updateLevelBadge(rank?.level).levelBadgeBorder,
                            borderRadius: updateLevelBadge(rank?.level).levelBadgeBorder ? '50%' : 'none'
                          }}
                        >
                          {rank?.level}
                        </div>
                      </td>
                      <td className="py-5">
                        <div className="flex items-center gap-2">
                          {rank?.games !== "Private" ? <img src={rank?.games} alt={rank?.games} className="w-7 h-7" /> : <Icon icon="Lock" className="w-4 h-4" />}
                        </div>
                      </td>
                      <td className="py-5"><p className="text-sm text-white"> {rank?.badges}</p></td>
                      <td className="py-5">{rank?.playtime === "Private" ? <Icon icon="Lock" className="w-4 h-4" /> : <p className="text-sm text-white"> {rank?.playtime} <span className="text-primary-grey">(H)</span></p>}</td>
                      <td className="py-5 pl-6"><p className="text-sm text-white"> {rank?.years}</p></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Affiliates;

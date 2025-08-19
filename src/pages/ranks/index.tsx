import React from "react";
import Layout from "../../components/layout";
import Icon from "../../components/icon";
import { Link, useNavigate } from "react-router-dom";
import { restApi } from "../../context/restApi";
import { showToast } from "../../context/helper";
import Loading from "../../components/loading";
import updateLevelBadge from "../../hooks/get-level-badge";

const Ranks = () => {

  const navigate = useNavigate();

  const [status, setStatus] = React.useState<any>(null);
  const [globalStatus, setGlobalStatus] = React.useState<any>(null);
  const [ranks, setRanks] = React.useState<any>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentSort, setCurrentSort] = React.useState<string>('rank');

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await restApi.postRequest("get-ranks", { ladderType: currentSort });
      setRanks(res.data);
      setIsLoading(false);
    };
    fetchData();
  }, [currentSort]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await restApi.postRequest("get-global-status");
      setGlobalStatus(res.data);
      console.log(res);
    };
    fetchData();
  }, []);


  return (
    <Layout>
      <div className="relative h-full w-full max-w-[888px] mx-auto px-4 mt-5 md:mt-10">
        <Icon icon="Effort" />
        <div className="mb-5">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
            <div className="space-y-3 w-full sm:w-auto">
              <button onClick={() => navigate("/home")} className="relative flex gap-2 items-center">
                <Icon icon="Back" />
                <span className="text-[#A9ABCD] text-[0.9rem] font-[700] leading-[14px]">
                  Back
                </span>
              </button>
              <div className="flex items-center gap-3">
                <div className="text-[#A9ABCD]"><Icon icon="Ranks" className="w-8" /></div>
                <div className="flex flex-col">
                  <h2 className="text-[#F3F3F3] text-[1.4rem] font-[900] leading-[22px]">
                    Ranks
                  </h2>
                </div>
              </div>
            </div>
            {/* <div className="relative w-full sm:w-auto">
              <Icon icon="Search" />
              <input
                id="searchRank"
                className="bg-transparent w-full sm:w-[250px] h-full text-primary-grey px-6 py-2 border border-[#252633] focus:outline-none focus:ring-1 focus:ring-primary-grey focus:px-9 rounded-md placeholder:text-[14px] placeholder:font-[500] placeholder:leading-[14px] placeholder:text-[#A9ABCD] placeholder:pl-2 transition-all"
                placeholder="Search Steam ID..."
              />
            </div> */}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-20 items-center">
            <Loading size={130} />
          </div>
        ) : (
          <div>
            <div className="w-full md:w-3/4 mx-auto mb-4">
              <div className="w-full h-full grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10">
                <div className="flex flex-col justify-center items-center gap-1">
                  <Icon icon="Game" className="w-8" />
                  <h2 className="text-primary-white text-[18px] lead-[18px] font-[900]">
                    {globalStatus?.[0]?.number}
                  </h2>
                  <small className="text-primary-grey leading-[15.6px] text-[13px] font-[400] text-center">
                    {globalStatus?.[0]?.about}
                  </small>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <Icon icon="Badge" />
                  <h2 className="text-primary-white text-[18px] lead-[18px] font-[900]">
                    {globalStatus?.[1]?.number}
                  </h2>
                  <small className="text-primary-grey leading-[15.6px] text-[13px] font-[400] text-center">
                    {globalStatus?.[1]?.about}
                  </small>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                  <div className="text-primary-grey"><Icon className="w-6" icon="LevelUp" /></div>
                  <h2 className="text-primary-white text-[18px] lead-[18px] font-[900]">
                    {globalStatus?.[2]?.number}
                  </h2>
                  <small className="text-primary-grey leading-[15.6px] text-[13px] font-[400] text-center">
                    {globalStatus?.[2]?.about}
                  </small>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col justify-center items-center min-h-[400px] w-full h-full overflow-hidden bg-primary-lightDark/90 shadow-inner-[0_0px_0px_1px_rgba(0,0,0,0.3)] rounded-lg md:p-8">
              {isLoading && (
                <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-10 rounded-lg">
                  <div className="flex items-center gap-3 bg-primary-dark/90 px-4 py-2 rounded-lg">
                    <div className="animate-spin rounded-full border-2 border-solid border-white border-t-transparent w-4 h-4" />
                    <span className="text-white text-sm">Updating ranks...</span>
                  </div>
                </div>
              )}
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
                          <button onClick={() => setCurrentSort('rank')} className="flex items-center gap-2">
                            <p>level</p>
                            {currentSort === "rank" && <Icon icon="Sort" />}
                          </button>
                        </div>
                      </th>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                          <button onClick={() => setCurrentSort('games')} className="flex items-center gap-2">
                            <p>games</p>
                            {currentSort === "games" && <Icon icon="Sort" />}
                          </button>
                        </div>
                      </th>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                          <button onClick={() => setCurrentSort('badges')} className="flex items-center gap-2">
                            <p>badges</p>
                            {currentSort === "badges" && <Icon icon="Sort" />}
                          </button>
                        </div>
                      </th>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                          <button onClick={() => setCurrentSort('playtime')} className="flex items-center gap-2">
                            <p>playtime</p>
                            {currentSort === "playtime" && <Icon icon="Sort" />}
                          </button>
                        </div>
                      </th>
                      <th className="pt-1 pb-5 whitespace-nowrap">
                        <div className="text-[0.76rem] font-normal leading-[14px] text-primary-grey capitalize">
                          <button onClick={() => setCurrentSort('steam_age')} className="flex items-center gap-2">
                            <p>year</p>
                            {currentSort === "steam_age" && <Icon icon="Sort" />}
                          </button>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ranks?.map((rank: any, k: number) => (
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
                            {currentSort === "games" ?
                              <p className="text-sm text-white"> {currentSort === "games" ? rank?.gamesNum : rank?.games}</p> :
                              rank?.games !== "Private" ? <img src={rank?.games} alt={rank?.games} className="w-7 h-7" /> : <Icon icon="Lock" className="w-4 h-4" />}
                          </div>
                        </td>
                        <td className="py-5"><p className="text-sm text-white"> {currentSort === "badges" ? rank?.badgesNum : rank?.badges}</p></td>
                        <td className="py-5">{rank?.playtime === "Private" ? <Icon icon="Lock" className="w-4 h-4" /> : <p className="text-sm text-white"> {rank?.playtime} <span className="text-primary-grey">(H)</span></p>}</td>
                        <td className="py-5"><p className="text-sm text-white">{rank?.years}</p></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Ranks;

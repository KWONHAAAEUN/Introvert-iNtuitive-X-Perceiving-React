import { useApiAxios } from 'base/api/base';
import { useAuth } from 'base/hooks/Authcontext';
import { useEffect, useState } from 'react';
import ApplicationsList from './applications/ApplicationsList';
import LoanedBooksList from './loanedBooks/LoanedBooksList';
import WishBooksList from './wishes/WishBooksList';
import LoanedGameList from './loanedGame/LoanedGameList';
import UserInfo from './UserInfo';
import { useReload } from 'base/hooks/ReloadContext';
import ReadingStatus from './ReadingStatus';
import { Link, useLocation } from 'react-router-dom';

function MyPage() {
  const [showWish, setShowWish] = useState(false);
  const [showLoaned, setShowLoaned] = useState(true);
  const [showGame, setShowGame] = useState(false);
  const [auth] = useAuth();
  const [, setReload] = useReload();
  let location = useLocation();
  const [{ data }, getUserInfo] = useApiAxios(
    {
      url: `/accounts/api/users/${auth.user_id}`,
      method: 'GET',
      headers: {
        Authorization: `Bearer ${auth.access}`,
      },
    },
    { manual: true },
  );

  useEffect(() => {
    getUserInfo()
      .then(() => {
        setReload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getUserInfo, setReload]);

  return (
    <div className="ml-24 mt-10 mb-32">
      <div className="container mx-auto my-5 p-5">
        <div className="md:flex no-wrap md:-mx-2 ">
          <div className="w-full md:w-3/12 md:mx-2">
            <div className="bg-white p-3 mt-3">
              <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                <UserInfo info={data} />
              </h1>
            </div>
            <div>
              <ApplicationsList applicationList={data?.applications_set} />
            </div>

            <div className="flex items-center space-x-3 font-semibold text-gray-900 text-xl leading-8"></div>
            <div className="grid grid-cols-3"></div>
          </div>

          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8"></div>
              <div className="text-gray-700">
                <div className=" text-sm">
                  <div>
                    <div className="relative">
                      <div className="">
                        <section className="py-1 bg:gray-50">
                          <div className="w-full xl:mb-0 px-0">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                              <div className="flex justify-between">
                                <div className="flex my-5 ml-5">
                                  <button
                                    className={`${
                                      showLoaned
                                        ? 'bg-blue-500 text-white border-none px-4 py-2.5'
                                        : 'text-gray-800'
                                    }
                          bottom-20 border-2 border-blue-500 px-3 mr-2
                          
                          text-sm shadow-sm font-semibold tracking-wider rounded-full hover:bg-blue-400 
                         `}
                                    onClick={() => setShowLoaned(true)}
                                    onClickCapture={() => {
                                      setShowWish(false);
                                      setShowGame(false);
                                    }}
                                  >
                                    대출 도서
                                  </button>

                                  <button
                                    className={`${
                                      showGame
                                        ? 'bg-blue-500 text-white border-none px-5 py-2.5'
                                        : 'text-gray-800'
                                    }
                                    bottom-20 border-2 border-blue-500 px-3 mr-2
                          text-sm shadow-sm font-semibold tracking-wider rounded-full hover:bg-blue-400
                        `}
                                    onClick={() => setShowGame(true)}
                                    onClickCapture={() => {
                                      setShowWish(false);
                                      setShowLoaned(false);
                                    }}
                                  >
                                    게임 대여
                                  </button>

                                  <button
                                    className={`${
                                      showWish
                                        ? 'bg-blue-500 text-white border-none px-5 py-2.5'
                                        : 'text-gray-800'
                                    }
                          px-4 py-2 border-2 border-blue-500
                          text-sm shadow-sm font-semibold tracking-wider rounded-full hover:bg-blue-400
                       `}
                                    onClick={() => setShowWish(true)}
                                    onClickCapture={() => {
                                      setShowLoaned(false);
                                      setShowGame(false);
                                    }}
                                  >
                                    찜 도서
                                  </button>
                                </div>

                                <Link
                                  to={
                                    showLoaned
                                      ? `/accounts/modal/loanedbooks/`
                                      : showWish
                                      ? `/accounts/modal/wishes/`
                                      : `/accounts/modal/loanedgame/`
                                  }
                                  state={{ backgroundLocation: location }}
                                >
                                  <button
                                    className="bg-blue-500 mt-3 text-white hover:bg-blue-400 text-sm font-bold uppercase 
                                  px-4 py-2 mt-5 mr-4 rounded-full"
                                  >
                                    전체 내역 보기
                                  </button>
                                </Link>
                              </div>
                              {showLoaned && (
                                <LoanedBooksList
                                  loanedBookList={data?.loanedbooks_set}
                                />
                              )}
                              {showGame && (
                                <LoanedGameList
                                  loanedGameList={data?.loanedgame_set}
                                />
                              )}
                              {showWish && (
                                <div>
                                  <WishBooksList
                                    wishBookList={data?.wishes_set}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>

                    <div className="flex items-center w-full justify-center">
                      <div className="w-full">
                        <div className="bg-white shadow-xl rounded-lg py-3">
                          <div className="p-2">
                            <h3 className="font-semibold text-base text-gray-700 text-center select-none">
                              나의 도서 통계
                            </h3>
                            <ReadingStatus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4"></div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;

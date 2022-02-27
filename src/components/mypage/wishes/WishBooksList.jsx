import WishBooks from './WishBooks';
import { Link, useLocation } from 'react-router-dom';
import NoList from '../NoList';

function WishBooksList({ wishBookList }) {
  let location = useLocation();
  return (
    <div>
      <section className="py-1 bg-blueGray-50 border-t-4 border-blue-400">
        <div className="w-full xl:mb-0 px-4 py-10">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                  {/* <h3 className="font-semibold text-base text-blueGray-700">
                    찜 도서
                  </h3> */}
                </div>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <button
                    className="bg-indigo-600 mt-3 text-white hover:bg-indigo-700 text-sm font-bold uppercase px-3 py-1 rounded-full
                    transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 underline-offset-4"
                    type="button"
                  >
                    <Link
                      to={`/accounts/modal/wishes/`}
                      state={{ backgroundLocation: location }}
                    >
                      전체 내역 보기
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <div className="block w-full overflow-x-auto">
              {wishBookList ? (
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        도서명
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        저자
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        반납 상태
                      </th>
                      <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        반납 예정일
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishBookList?.slice(0, 3).map((book, index) => {
                      return <WishBooks key={index} book={book} />;
                    })}
                  </tbody>
                </table>
              ) : (
                <NoList>찜할 도서를 찾으러 가요!</NoList>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default WishBooksList;

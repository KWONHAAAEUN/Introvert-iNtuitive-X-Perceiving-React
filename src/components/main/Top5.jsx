import { useApiAxios } from 'base/api/base';
import { useAuth } from 'base/hooks/Authcontext';
import { Top5Summary } from 'components/books/BookSummary';
import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

function Top5() {
  const [auth] = useAuth();
  const [{ data: bookList, loading, error }, refetch] = useApiAxios(
    {
      url: '/books/api/books/?all',
      method: 'GET',
    },
    { manual: true },
  );

  useEffect(() => {
    refetch();
  }, [auth]);

  return (
    <div className="flex justify-center">
      <div className="h-[600px] w-[900px]">
        <Carousel
          stopAutoPlayOnHover={true}
          fullHeightHover={true}
          navButtonsProps={{
            style: {
              backgroundColor: 'cornflowerblue',
              borderRadius: 100,
            },
          }}
          // IndicatorIcon={<Home />}
          indicatorIconButtonProps={{
            style: {
              padding: '10px', // 1
              color: 'cornflowerblue', // 3
            },
          }}
          activeIndicatorIconButtonProps={{
            style: {
              backgroundColor: '#ffffff', // 2
            },
          }}
          indicatorContainerProps={{
            style: {
              marginTop: '50px', // 5
              textAlign: 'center', // 4
            },
          }}
        >
          {bookList
            ?.sort((book1, book2) => book2.count_loans - book1.count_loans)
            .slice(0, 5)
            .map((book) => (
              <div className="h-[600px] w-[900px] flex justify-center items-center">
                <Top5Summary book={book} key={book.book_num} />
              </div>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Top5;

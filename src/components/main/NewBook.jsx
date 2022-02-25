import { useApiAxios } from 'base/api/base';
import DebugStates from 'base/DebugStates';
import { useAuth } from 'base/hooks/Authcontext';
import { NewBookSummary } from 'components/books/BookSummary';
import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';

function NewBook() {
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
      <div className="h-[700px] w-[1100px]">
        <Carousel
          stopAutoPlayOnHover={true}
          fullHeightHover={false}
          indicators={false}
          navButtonsProps={{
            style: {
              backgroundColor: 'cornflowerblue',
              borderRadius: 100,
            },
          }}
        >
          {bookList?.slice(0, 3).map((book) => (
            <div className="h-[600px] w-[1000px] flex justify-center items-center">
              <NewBookSummary book={book} key={book.book_num} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default NewBook;

import { Link, useNavigate } from 'react-router-dom';
import non_image from 'components/parts/image/non_image.jpg';
import heavy_reader from 'components/parts/image/heavy_reader.png';
import React from 'react';
import LoanedIcon from 'designMaterials/LoanedIcon';
import Toggle from 'components/parts/Toggle';

function truncateString(str) {
  if (str.length > 70) {
    return str.slice(0, 70) + '...';
  } else {
    return str;
  }
}
function BookSummary({ book }) {
  const navigate = useNavigate();

  return (
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt={book?.title}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 cursor-pointer
          transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110"
          src={book?.cover_photo ? book?.cover_photo : non_image}
          onClick={() => {
            navigate(`/books/${book.book_num}/`);
          }}
        />
        <div className="flex-grow sm:pl-8">
          <h3 className="text-sm text-gray-500 mb-3 select-none">
            {book.category && `[ ${book.category} ]`}
          </h3>
          <span className="absolute inline-flex m-auto pl-80">
            <Toggle /> <LoanedIcon />
          </span>
          <h2
            className="absolute title-font font-medium text-lg text-black hover:text-blue-500 cursor-pointer grid
           transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-100 hover:font-semibold"
            onClick={() => {
              navigate(`/books/${book.book_num}/`);
            }}
          >
            {book.title}
          </h2>
          <h3 className="text-sm text-gray-500 mb-3 mt-11 select-none">
            {book.writer}
          </h3>
          <p className="font-medium text-base mb-4 select-none">
            {truncateString(book.story)}
          </p>
        </div>
      </div>
    </div>
  );
}

function NewBookSummary({ book }) {
  const navigate = useNavigate();

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto">
        <div className="lg:w-2/3 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {book.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {book.title}
            </h1>
            <div className="flex mb-4">
              <div className="flex-grow border-b-2 border-blue-300 py-2 text-lg px-1">
                {book.writer}
              </div>
            </div>
            <p className="leading-relaxed mb-4">{truncateString(book.story)}</p>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate(`/books/${book.book_num}/`);
                }}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Button
              </button>
            </div>
          </div>

          <img
            src={book?.cover_photo ? book.cover_photo : non_image}
            alt={book.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-scale-down object-center rounded"
          />
        </div>
      </div>
    </section>
  );
}

function Top5Summary({ book }) {
  const navigate = useNavigate();

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container mx-auto">
        <div className="lg:w-2/3 mx-auto flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {book.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {book.title}
            </h1>
            <div className="flex mb-4">
              <div className="flex-grow border-b-2 border-blue-300 py-2 text-lg px-1">
                {book.writer}
              </div>
            </div>
            <p className="leading-relaxed mb-4">{truncateString(book.story)}</p>

            <div className="flex justify-center">
              <button
                onClick={() => {
                  navigate(`/books/${book.book_num}/`);
                }}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Button
              </button>
            </div>
          </div>

          <img
            src={book?.cover_photo ? book.cover_photo : non_image}
            alt={book.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-scale-down object-center rounded"
          />
        </div>
      </div>
    </section>
  );
}

function HeavyReaderSummary({ book }) {
  return (
    <div>
      <img
        src={heavy_reader}
        alt="다독왕"
        className="w-screen h-screen rounded inline"
      />
      <div className="absolute top-20 left-20 px-20 py-20">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
          <p className="leading-normal text-gray-100">{book.username}</p>
        </h4>
      </div>
    </div>
  );
}

export { BookSummary, NewBookSummary, Top5Summary, HeavyReaderSummary };

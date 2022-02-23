import { useApiAxios } from 'base/api/base';
import DebugStates from 'base/DebugStates';
import useFieldValues from 'base/hooks/useFieldValues';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ConfirmationModal from 'designMaterials/ConfirmationModal';

const INIT_FILED_VALUES = {
  username: '',
  email: '',
  phone_num: '',
  position: '',
  gender: '',
  password: '',
  password2: '',
};

function SignupForm() {
  const Navigate = useNavigate();
  const [showCancleModal, setShowCancleModal] = useState(false);
  const [showSubmitModal, setshowSubmitModal] = useState(false);

  const { fieldValues, handleFieldChange } = useFieldValues(INIT_FILED_VALUES);

  const [{ error, errorMessages }, signup] = useApiAxios(
    {
      url: 'accounts/api/signup/',
      method: 'POST',
    },
    { manual: true },
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    signup({ data: fieldValues }).then(() => {
      Navigate('/accounts/login/?next=/');
    });
  };

  const handleClickSubmitButton = (e) => {
    e.preventDefault();
    setshowSubmitModal(true);
  };

  const handleClickCancleButton = (e) => {
    e.preventDefault();
    setShowCancleModal(true);
  };

  const handleCancleButton = () => {
    if (showSubmitModal) {
      setshowSubmitModal(false);
    } else if (showCancleModal) {
      setShowCancleModal(false);
    }
  };

  const handleOkButton = () => {
    if (showSubmitModal) {
      handleSubmit();
    } else if (showCancleModal) {
      Navigate('/test/');
    }
  };

  return (
    <div>
      {error &&
        `가입에 실패하였습니다. (${error.response?.status} ${error.response?.statusText})`}
      <form onSubmit={handleSubmit}>
        <div className="text-left">
          <div className="w-[5] mt-3">
            <label>이름</label>
            <lable className="ml-1 mr-3 text-red-500">*</lable>
          </div>
          <input
            className="peer w-full bg-white rounded border border-gray-300 
            focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
            text-base outline-none text-gray-700 py-1 px-3 leading-8 
            transition-colors duration-200 ease-in-out"
            name="username"
            value={fieldValues.username}
            onChange={handleFieldChange}
            placeholder="이름을 입력해주세요."
          />
          {errorMessages.username?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="text-left">
          <div className="w-[5] mt-3">
            <label>이메일</label>
            <lable className="mt-2 ml-1 mr-3 text-red-500">*</lable>
            <div>
              <input
                className="peer w-full bg-white rounded border border-gray-300 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                text-base outline-none text-gray-700 py-1 px-3 leading-8 
                transition-colors duration-200 ease-in-out"
                name="email"
                value={fieldValues.email}
                onChange={handleFieldChange}
                placeholder="이메일을 입력해주세요."
              />
              {errorMessages.email?.map((message, index) => (
                <p key={index} className="text-xs text-red-400">
                  {message}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="w-[5] mt-3">
            <label>핸드폰 번호</label>
            <lable className="ml-1 mr-3 text-red-500">*</lable>
            <div>
              <input
                className="peer w-full bg-white rounded border border-gray-300 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                text-base outline-none text-gray-700 py-1 px-3 leading-8 
                transition-colors duration-200 ease-in-out"
                name="phone_num"
                value={fieldValues.phone_num}
                onChange={handleFieldChange}
                placeholder="핸드폰 번호를 입력해주세요."
              />
              {errorMessages.phone_num?.map((message, index) => (
                <p key={index} className="text-xs text-red-400">
                  {message}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="w-[5] mt-3">
            <label className="mr-3">직급</label>
            <div>
              <select
                className="peer w-full bg-white rounded border border-gray-300 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                text-base outline-none text-gray-700 py-1 px-3 leading-8 
                transition-colors duration-200 ease-in-out"
                name="position"
                value={fieldValues.position}
                onChange={handleFieldChange}
              >
                <option>직급을 선택해주세요.</option>
                <option>사원</option>
                <option>주임</option>
                <option>대리</option>
                <option>과장</option>
                <option>차장</option>
                <option>부장</option>
                <option>전무</option>
                <option>이사</option>
                <option>대표</option>
              </select>
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="w-[5] mt-3">
            <label className="mr-3">성별</label>
            <div>
              <select
                className="peer w-full bg-white rounded border border-gray-300 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                text-base outline-none text-gray-700 py-1 px-3 leading-8 
                transition-colors duration-200 ease-in-out"
                name="gender"
                value={fieldValues.gender}
                onChange={handleFieldChange}
              >
                <option>성별을 선택해주세요.</option>
                <option>F</option>
                <option>M</option>
              </select>
            </div>
          </div>
        </div>
        <div className="text-left">
          <div className="w-[5] mt-3"></div>
          <label className="mt-2">생일</label>
          <div>
            <input
              className="peer w-full bg-white rounded border border-gray-300 
              focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
              text-base outline-none text-gray-700 py-1 px-3 leading-8 
              transition-colors duration-200 ease-in-out"
              type="date"
              name="birthdate"
              max="2022-01-01"
              onChange={(event) => {
                console.log('onChange', event);
                handleFieldChange(event);
              }}
            />
          </div>
          {/* <DatePicker
            className="bg-gray-300 w-fit text-center"
            placeholderText="생년월일"
            type="date"
            maxDate={new Date()}
            name="birthdate"
            onChange={(event) => {
              console.log('onChange', event);
              this.handleFieldChange(event);
            }}
            value={fieldValues.birthdate}
          /> */}
        </div>
        <div className="text-left">
          <div className="w-[5] mt-3">
            <label>비밀번호</label>
            <lable className="ml-1 mr-3 text-red-500">*</lable>
            <div>
              <input
                className="peer w-full bg-white rounded border border-gray-300 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                text-base outline-none text-gray-700 py-1 px-3 leading-8 
                transition-colors duration-200 ease-in-out"
                name="password"
                value={fieldValues.password}
                onChange={handleFieldChange}
                type="password"
                placeholder="비밀번호를 입력해주세요."
              />
            </div>
          </div>
          {errorMessages.password?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <div className="text-left">
          <div className="w-[5] mt-3">
            <label>비밀번호 확인</label>
            <lable className="ml-1 mr-3 text-red-500">*</lable>
            <div>
              <input
                className="peer w-full bg-white rounded border border-gray-300 
                focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                text-base outline-none text-gray-700 py-1 px-3 leading-8 
                transition-colors duration-200 ease-in-out"
                name="password2"
                value={fieldValues.password2}
                onChange={handleFieldChange}
                type="password"
                placeholder="비밀번호를 한 번 더 입력해주세요."
              />
            </div>
          </div>
          {errorMessages.non_field_errors?.map((message, index) => (
            <p key={index} className="text-xs text-red-400">
              {message}
            </p>
          ))}
        </div>
        <button
          to={`/test/`}
          onClick={handleClickCancleButton}
          className="peer mt-6 w-1/3 bg-white rounded border border-gray-300 
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
          text-base outline-none text-gray-700 py-1 px-3 leading-8 
          transition-colors duration-200 ease-in-out mr-0"
        >
          뒤로가기
        </button>
        <button
          className="peer mt-6 w-1/3 bg-indigo-500 rounded border border-gray-300 
          focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
          text-base outline-none text-white py-1 px-3 leading-8 
          transition-colors duration-200 ease-in-out ml-10"
          onClick={handleClickSubmitButton}
        >
          회원가입
        </button>

        {(showSubmitModal || showCancleModal) && (
          <ConfirmationModal
            handleOkButton={handleOkButton}
            handleCancleButton={handleCancleButton}
          >
            {showSubmitModal ? '회원가입 하시겠습니까?' : '취소하시겠습니까?'}
          </ConfirmationModal>
        )}
      </form>

      {/* <DebugStates fieldValues={fieldValues} /> */}
    </div>
  );
}

export default SignupForm;

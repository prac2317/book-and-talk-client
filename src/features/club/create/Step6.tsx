const Step6 = ({ goToPrevStep, navigate }) => {
  return (
    <form>
      <h3>모임 생성이 완료되었습니다?</h3>
      <div>
        <button onClick={goToPrevStep}>이전으로</button>
        <button
          onClick={() => {
            navigate('/');
          }}
        >
          완료
        </button>
      </div>
    </form>
  );
};

export default Step6;

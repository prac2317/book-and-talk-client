const Step3 = ({ goToPrevStep, goToNextStep, formData, setFormData, isbn13 }) => {
  return (
    <form>
      <h3>모임활동 장소를 정해주세요</h3>
      <input value={isbn13} readOnly={true} />
      <div>
        <button onClick={goToPrevStep}>이전으로</button>
        <button onClick={goToNextStep}>다음으로</button>
      </div>
    </form>
  );
};

export default Step3;

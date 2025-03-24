const Step4 = ({ goToPrevStep, goToNextStep, formData, setFormData }) => {
  return (
    <form>
      <h3>모임활동 기간을 정해주세요</h3>
      <h6>시작 날짜</h6>
      <input
        type="datetime-local"
        placeholder="시작일"
        value={formData.startDate}
        onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
        required
      />
      <h6>모임 기간</h6>
      <input
        type="number"
        placeholder="모임 기간(일)"
        value={formData.duration}
        onChange={(e) => setFormData({ ...formData, duration: Number(e.target.value) })}
        required
      />
      <div>
        <button onClick={goToPrevStep}>이전으로</button>
        <button onClick={goToNextStep}>다음으로</button>
      </div>
    </form>
  );
};

export default Step4;

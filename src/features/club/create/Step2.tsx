const Step2 = ({ goToPrevStep, goToNextStep, formData, setFormData }) => {
  return (
    <form>
      <h3>모임을 소개해주세요</h3>
      <h6>모임 이름</h6>
      <input
        type="text"
        placeholder="모임 이름"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        required
      />
      <h6>모임 소개</h6>
      <textarea
        placeholder="모임 소개"
        value={formData.clubDescription}
        onChange={(e) => setFormData({ ...formData, clubDescription: e.target.value })}
        required
      />
      <div>
        <button onClick={goToPrevStep}>이전으로</button>
        <button onClick={goToNextStep}>다음으로</button>
      </div>
    </form>
  );
};

export default Step2;

const Step5 = ({ goToPrevStep, goToNextStep, formData, setFormData, handleSubmit }) => {
  return (
    <form>
      <h3>어떤 사람들과 함께하고 싶나요?</h3>
      <h6>최대 참가자 수</h6>
      <input
        type="number"
        placeholder="최대 참가자 수"
        value={formData.maxParticipants}
        onChange={(e) => setFormData({ ...formData, maxParticipants: Number(e.target.value) })}
        required
      />
      <div>
        <button onClick={goToPrevStep}>이전으로</button>
        <button onClick={handleSubmit}>다음으로</button>
      </div>
    </form>
  );
};

export default Step5;

const InputToField = ({ currencies, convertedAmount, setTo, to }) => {
  return (
    <>
      <div className="input-group mb-3">
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            value={convertedAmount}
            readOnly
          />
          <label htmlFor="">To</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            onChange={(e) => setTo(e.target.value)}
            value={to}
          >
            {currencies &&
              Object.entries(currencies).map(([code]) => (
                <option key={code} value={code}>
                  {code.toUpperCase()}
                </option>
              ))}
          </select>

          <label htmlFor="floatingSelect">Choose Currency</label>
        </div>
      </div>
      {console.log(`to ${currencies}`)}
    </>
  );
};

export default InputToField;

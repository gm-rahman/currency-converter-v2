const InputField = ({ currencies, convert, amount, setFrom, from }) => {
  return (
    <>
      <div className="input-group mb-3">
        <div className="form-floating">
          <input
            ref={amount}
            type="number"
            className="form-control"
            min={0}
            onChange={convert}
          />
          <label htmlFor="">From</label>
        </div>

        <div className="form-floating">
          <select
            className="form-select"
            id="floatingSelect"
            onChange={(e) => setFrom(e.target.value)}
            value={from}
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
      {console.log(`from ${currencies}`)}
    </>
  );
};

export default InputField;

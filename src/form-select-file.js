import React from "react";

export default function FormSelectFile() {
  const inputFile = React.useRef();
  const selectMaxNumFiles = React.useRef();
  const selectMaxSize = React.useRef();

  let maxNumfiles = [1, 2, 3, 4, 5];
  let maxNumsize = [50, 100, 200, 500, 1000];

  const onClickButtom = () => {
    let maxNumFiles = selectMaxNumFiles.current.value;
    let maxSize = selectMaxSize.current.value;

    if (inputFile.current.files.length > maxNumFiles) {
      alert(`เลือกได้ไม่เกิน ${maxNumFiles} ไฟล์`);
      return;
    }

    for (let f of inputFile.current.files) {
      if (f.size > maxSize * 1000) {
        alert(`ขนาดของแต่ละไฟล์ต้องไม่เกิน ${maxSize} KB`);
        return;
      }
    }
    alert(`Files OK`);
  };

  return (
    <div
      className="mt-4 mx-auto p-3 rounded"
      style={{ width: "400px", background: "#cee" }}
    >
      <form>
        <div className="form-group mb-3">
          <label htmlFor="maxNumFiles" className="form-label">
            จำนวนไฟล์สูงสุด
          </label>
          <select
            id="maxNumfiles"
            className="form-select form-select-sm"
            ref={selectMaxNumFiles}
          >
            {maxNumfiles.map((i) => {
              return <option value={i}>{i}</option>;
            })}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="maxFileSize" className="form-label">
            ขนาดไลฟ์สูงสุด (KB)
          </label>
          <select
            id="maxFileSize"
            className="form-select form-select-sm"
            ref={selectMaxSize}
          >
            {maxNumsize.map((i) => {
              return <option value={i}>{i}</option>;
            })}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="file" className="form-label">
            เลือกไฟล์
          </label>
          <input
            type="file"
            id="file"
            accept="image/*"
            className="form-select form-select-sm"
            ref={inputFile}
            multiple
          />
        </div>

        <div className="text-center mt-4">
          <button
            type="button"
            className="btn btn-sm btn-primary px-4"
            onClick={onClickButtom}
          >
            OK
          </button>
        </div>
      </form>
    </div>
  );
}

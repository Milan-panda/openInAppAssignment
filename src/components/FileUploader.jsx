import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";

import MsExcel from "../assets/msExcel.svg";
import uploadIcon from "../assets/uploadIcon.svg";


const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [tableData, setTableData] = useState(null);
  const [file, setFile] = useState(null);
  const [dataUploaded, setDataUploaded] = useState(false)

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setFile(file);
    setSelectedFileName(file.path);
    setSelectedFile(file);
  };

  useEffect(()=>{
    setDataUploaded(false)
  },[setSelectedFile])

  const handleUpload = () => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];

      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Add a new column name for the new column to be inserted
      jsonData[0].splice(3, 0, "Select Tag");

      // Add a new property in each row of the new column with options for the select dropdown
      jsonData.slice(1).forEach((row) => {
        row.splice(3, 0, { options: ["tag1", "tag2", "tag3"], selected: null });
      });

      setTableData(jsonData);
    };

    reader.readAsArrayBuffer(file);
    setSelectedFileName(null)
    setDataUploaded(true)
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setSelectedFileName(null);
  };

  const handleSelectChange = (rowIndex, value) => {
    const updatedTableData = [...tableData];
    updatedTableData[rowIndex][3].selected = value;
    setTableData(updatedTableData);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
  });

  return (
    <div>
      <div className="flex justify-center items-center p-9">
        <div className="p-4 rounded-[8px] bg-white flex flex-col gap-5">
          {selectedFileName ? (
            <div className="flex flex-col items-center justify-center gap-4 border border-dashed border-[#EBEBEB] rounded-[8px]  w-80 sm:w-96 h-52">
              <img className="w-[30px]" src={MsExcel} alt="" />
              <p className="text-[#999CA0] text-[16px] font-[400] leading-[24px]">
                {selectedFileName}
              </p>
              <button
                onClick={handleRemoveFile}
                className="text-[#D33030] text-[14px] font-[400] leading-[24px]"
              >
                Remove
              </button>
            </div>
          ) : (
            <div
              {...getRootProps()}
              className="dropzone flex flex-col items-center justify-center gap-4 border border-dashed border-[#EBEBEB] rounded-[8px]  w-80 sm:w-96 h-52"
            >
              <img className="w-[30px]" src={MsExcel} alt="" />
              <input {...getInputProps()} />
              <p className="text-[#999CA0] text-[16px] font-[400] leading-[24px]">
                Drop your excel sheet here or{" "}
                <span className="text-[#605BFF] cursor-pointer hover:underline">
                  browse
                </span>
              </p>
            </div>
          )}

          <div
            onClick={handleUpload}
            className={"rounded-[8px] p-[8px] justify-center flex gap-1 cursor-pointer " + (dataUploaded ? "bg-[#b5b3ff]" : "bg-[#605BFF]")}
          >
            <img src={uploadIcon} alt="" />
            <p className="text-white text-[14px] font-semibold leading-6 ">
              Upload
            </p>
          </div>
        </div>
      </div>

      <div>
        {tableData && (
          <div>
            <h2 className="text-[24px] font-bold leading-[32px]">Table Data</h2>

            <div className="flex justify-center mt-11">
              <div className="bg-[#F5F5F5] p-3 overflow-auto">
              <table className="table-auto border-separate border-spacing-x-0 border-spacing-y-3">
                <thead>
                  <tr className="text-left">
                    {tableData[0].map((header, index) => (
                      <th key={index} className="text-[14px] font-semibold leading-[24px] capitalize text-black px-3 py-1">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex} className="bg-white rounded-[8px]">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-3 py-2">
                          {cell.options ? (
                            <select
                              value={cell.selected || ""}
                              onChange={(e) =>
                                handleSelectChange(rowIndex, e.target.value)
                              }
                              className="rounded-[8px] border border-solid border-[#EBEBEB] py-1 px-3"
                            >
                              <option value="" disabled>
                                Select Tag
                              </option>
                              {cell.options.map((option, optionIndex) => (
                                <option key={optionIndex}>{option}</option>
                              ))}
                            </select>
                          ) : (
                            <div className="tags flex gap-1">
                              {typeof cell === "string"
                                ? cell.split(",").map((tag, tagIndex) => (
                                    <span
                                      key={tagIndex}
                                      className={
                                        "tag text-[14px] font-normal leading-[24px]" +
                                        (cellIndex === 4 &&
                                          " bg-[#605BFF] p-[4px] rounded-[4px] text-white text-[10px] font-semibold leading-[16px] tracking-[0.5px] uppercase")
                                      }
                                    >
                                      {tag.trim()}
                                    </span>
                                ))
                                : 
                                  cell}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;

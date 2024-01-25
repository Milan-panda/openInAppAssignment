import { useState } from "react";
import { useDropzone } from "react-dropzone";
import * as XLSX from 'xlsx';

import MsExcel from "../assets/msExcel.svg";
import uploadIcon from "../assets/uploadIcon.svg"

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  // const [typeError, setTypeError] = useState(false);
  const [tableData, setTableData] = useState(null);
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0]

    setFile(file);
    setSelectedFileName(file.path);
    setSelectedFile(file);
  };

  const handleUpload = ()=>{
    const reader = new FileReader();

    reader.onload = (e)=>{
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'})

      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName]

      const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});

      setTableData(jsonData)
    }

    reader.readAsArrayBuffer(file)
  }


  const handleRemoveFile = ()=>{
    setSelectedFile(null)
    setSelectedFileName(null)
    setTableData(null)
  }

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
              <p className="text-[#999CA0] text-[16px] font-[400] leading-[24px]">{selectedFileName}</p>
              <button onClick={handleRemoveFile} className="text-[#D33030] text-[14px] font-[400] leading-[24px]">Remove</button>
            </div>
          ) : (
            <div
              {...getRootProps()}
              className="dropzone flex flex-col items-center justify-center gap-4 border border-dashed border-[#EBEBEB] rounded-[8px]  w-80 sm:w-96 h-52"
            >
              <img className="w-[30px]" src={MsExcel} alt="" />
              <input {...getInputProps()} />
              <p className="text-[#999CA0] text-[16px] font-[400] leading-[24px]">
                Drop your excel sheet here or <span className="text-[#605BFF] cursor-pointer hover:underline">browse</span>
              </p>
            </div>
          )}

          {/* {typeError && <div>Only Excel </div>} */}

          <div onClick={handleUpload} className="bg-[#605BFF] rounded-[8px] p-[8px] justify-center flex gap-1 cursor-pointer">
            <img src={uploadIcon} alt="" />
            <p className="text-white text-[14px] font-semibold leading-6 ">Upload</p>
          </div>
        </div>
      </div>

      <div>
      {tableData && (
        <div>
          <h2>Table Data</h2>
          <table border="1">
            <thead>
              <tr>
                {tableData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    </div>
  );
};

export default FileUploader;

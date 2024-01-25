import notification from "../assets/notification.svg";
import avatar from "../assets/avatar.png";
import FileUploader from "../components/FileUploader";

const Upload = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="flex justify-between w-full h-fit">
        <div>
          <h1 className="text-black text-[24px] font-bold leading-[32px]">Upload CV</h1>
        </div>
        <div className="flex gap-4">
          <img className="w-6" src={notification} alt="" />

          <img className="rounded-full" src={avatar} alt="" />
        </div>
      </div>

      {/* Main Area */}
      <div>
        <FileUploader />
      </div>
    </>
  );
};

export default Upload;

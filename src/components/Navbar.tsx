import { TriangleDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/");
  };

  return (
    <div className="w-full  overflow-x-hidden bg-[#307FDC] flex lg:flex-col items-center">
      <div className="lg:w-[1440px] p-4 flex justify-between">
        <div className="flex items-center gap-10">
          <p className="font-main font-bold text-white text-[18px] lg:text-[24px]">
            ELICENSE
          </p>

          <div className="flex items-center gap-[5px]  cursor-pointer">
            <p className="text-white">Penatausahaan</p>
            <TriangleDownIcon
              w={2.5}
              h={2.5}
              color="white"
              className="mt-[4px]"
            />
          </div>

          <div className="flex gap-1" onClick={navigateToDashboard}>
            <p className="text-white cursor-pointer">Permohonan</p>
            <div className="bg-red-600 w-[18px] h-[18px] flex rounded items-center justify-center">
              <p className=" text-[14px] mx-auto text-white">1</p>
            </div>
          </div>

          <div className="flex items-center gap-[5px]  cursor-pointer">
            <p className="text-white">Data Pokok</p>
            <TriangleDownIcon
              w={2.5}
              h={2.5}
              color="white"
              className="mt-[4px]"
            />
          </div>

          <div className="flex items-center gap-[5px]  cursor-pointer">
            <p className="text-white ">Konsultasi</p>
            <TriangleDownIcon
              w={2.5}
              h={2.5}
              color="white"
              className="mt-[4px]"
            />
          </div>

          <p className="text-white cursor-pointer">Tracking</p>
        </div>

        <div className="flex items-center gap-10">
          <div className="flex items-center gap-[5px] cursor-pointer">
            <p className="text-white">Bantuan</p>
            <TriangleDownIcon
              w={2.5}
              h={2.5}
              color="white"
              className="mt-[4px]"
            />
          </div>
          <p className="text-white cursor-pointer">yessyindah@bi.go.id</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

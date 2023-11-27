import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoEye } from "react-icons/io5";
import { IoMdPeople } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export {};

const Dasboard = () => {
  const table = () => {
    return (
      <tr>
        <td className="py-2 px-4">1</td>
        <td className="py-2 px-4">PJP25112023DKSPAC</td>
        <td className="py-2 px-4">BI-25-11-2023</td>
        <td className="py-2 px-4">25-11-2023</td>
        <td className="py-2 px-4">Persetujuan Baru</td>
        <td className="py-2 px-4">Penyedia Jasa Pembayaran (PJP)</td>
        <td className="py-2 px-4">PJP Kategori Izin 1</td>
        <td className="py-2 px-4">Account Issuance Services</td>
        <td className="py-2 px-4">Penerbit Uang Elektronik</td>
        <td className="py-2 px-4">PT Account Issuance Services</td>
        <td className="py-2 px-4">Baru</td>
        <td className="py-2 px-4">Proses Analisis Kesesuaian dan Kebenaran</td>
        <td className="py-2 px-4">BI: 18-12-2023</td>
        <td className="py-2 px-4">25-10-2023</td>
        <td className="py-2 px-4"></td>
        <td className="py-2 px-4"></td>
        <td className="py-2 px-4"></td>
        <td className="py-2 px-4"></td>
        <td className="py-2 px-4"></td>
        <td className="py-2 px-4">
          <div className="flex gap-2">
            <HiMiniPencilSquare className="text-[#015694] cursor-pointer" />
            <IoEye
              className="text-[#015694] cursor-pointer"
              onClick={navigateToDetail}
            />
            <MdBarChart className="text-[#015694] cursor-pointer" />
            <IoMdPeople className="text-[#015694] cursor-pointer" />
          </div>
        </td>
      </tr>
    );
  };

  const navigate = useNavigate();
  const navigateToDetail = () => {
    navigate("/detail");
  };

  return (
    <>
      <div className="flex w-full p-5 overflow-x-hidden">
        <div className="mx-auto w-[1280px] justify-center flex flex-col">
          {/* Title */}
          <div className="mx-auto flex-col py-10">
            <p className="text-center text-[20px] font-semibold ">
              Daftar Perizinan Penyedia Jasa Pembayaran (PJP)
            </p>

            <div className="flex justify-center gap-2 mx-auto w-[1280px]">
              <p className="px-[8px] py-[3px] text-white font-semibold mt-2 bg-[#015694] rounded">
                Pemohon
              </p>
              <p className="px-[8px] py-[3px] text-white font-semibold mt-2 bg-[#FFEE67] rounded">
                Operator
              </p>
              <p className="px-[8px] py-[3px] text-white font-semibold mt-2 bg-green-500 rounded">
                Supervisor
              </p>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto  min-h-[450px] rounded">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-slate-50">
                  <th className="py-1 px-4 text-left">No</th>
                  <th className="py-1 px-4 text-left min-w-[150px] max-w-[180px]">
                    Id
                  </th>
                  <th className="py-1 px-4 text-left min-w-[200px] max-w-[180px]">
                    No Surat Permohonan
                  </th>
                  <th className="py-1 px-4 text-left min-w-[150px] max-w-[180px]">
                    Tanggal surat
                  </th>
                  <th className="py-1 px-4 text-left min-w-[200px]">
                    Bentuk Permohonan
                  </th>
                  <th className="py-1 px-4 text-left min-w-[140px]">
                    Tipe Perizinan
                  </th>
                  <th className="py-1 px-4 text-left min-w-[140px]">
                    Kategori
                  </th>
                  <th className="py-1 px-4 text-left min-w-[170px]">
                    Aktivitas
                  </th>
                  <th className="py-1 px-4 text-left min-w-[170px]">Produk</th>
                  <th className="py-1 px-4 text-left min-w-[170px]">
                    Nama Perusahaan
                  </th>
                  <th className="py-1 px-4 text-left min-w-[160px]">
                    Bentuk Emiten
                  </th>
                  <th className="py-1 px-4 text-left min-w-[160px]">Status</th>
                  <th className="py-1 px-4 text-left min-w-[160px]">
                    Batas Waktu SLA
                  </th>
                  <th className="py-1 px-4 text-left min-w-[160px]">
                    Tanggal Kirm
                  </th>
                  <th className="py-1 px-4 text-left min-w-[160px]">
                    Tanggal Lain
                  </th>
                  <th className="py-1 px-4 text-left min-w-[240px]">
                    Tanggal Efektif Beroperasi
                  </th>
                  <th className="py-1 px-4 text-left min-w-[280px]">
                    Tanggal Batas Waktu Beroperasi
                  </th>
                  <th className="py-1 px-4 text-left min-w-[130px]">
                    Reference Id
                  </th>
                  <th className="py-1 px-4 text-left min-w-[220px]">
                    Nomor Izin Nasional
                  </th>
                  <th className="py-1 px-4"></th>
                </tr>
              </thead>
              <tbody>{table()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dasboard;

import { FaFolderOpen, FaList, FaRegListAlt, FaSave } from "react-icons/fa";
import { IoDocumentSharp } from "react-icons/io5";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { Input } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";

interface INonComplete {
  name: String;
  document: String;
  analisis: String;
}

const Detail = () => {
  const [selectedIndex, setSelectedIndex] = useState(100);
  const [insertData, setInsertData] = useState("");
  const [notes, setNotes] = useState("");
  const [isNoteSubmitted, setIsNoteSubmitted] = useState(false);
  const [inCompleteData, setInCompletedData] = useState<INonComplete[]>([
    {
      name: "Persetujuan 2023",
      document: "Surat persetujuan dari otoritas pengawas Bank",
      analisis: "",
    },
    {
      name: "Pernyataan 2023",
      document:
        "Surat pernyataan dari masing-masing anggota direksi, dewan komisaris dan Pemegang Saham",
      analisis: "",
    },
    {
      name: "Pernyataan 2023",
      document:
        "Surat pernyataan dan jaminan dari anggota direksi yang berwenang",
      analisis: "",
    },
    {
      name: "Struktur 2023",
      document:
        "Struktur Organisasi beserta uraian tugas, wewenang dan tanggung jawab, termasuk unit atau fungsi yang bertanggung jawab terkait perlindungan konsumen, penerapan anti pencucian uang dan pencegahan pendanaan terorisme, manajemen risiko, audit internal dan kepatuhan.",
      analisis: "",
    },
    {
      name: "Keterangan 2023",
      document:
        "Hasil Uji Tuntas hukum dari konsultan hukum independen yang dituangkan dalam bentuk Surat Pernyataan dari Konsultan Hukum tersebut disertai ringkasan eksekutif/resume dari hasil uji tuntas hukum.",
      analisis: "",
    },
    {
      name: "Direksi 2023",
      document:
        "Surat pernyataan dari anggota direksi yang berwenang bahwa seluruh dokumen perizinan yang disampaikan adalah benar dan lengkap sesuai kondisi perusahaan pada saat mengajukan izin.",
      analisis: "",
    },
  ]);

  const saveData = (idx: number, newData: string) => {
    let temp = inCompleteData;
    temp[idx].analisis = newData;

    setInCompletedData(temp);
    setInsertData("");

    setSelectedIndex(100);
    displayIncomplete();
  };

  const nonComplete = (
    no: number,
    name: String,
    document: String,
    analisis: any
  ) => {
    return (
      <tr>
        <td className="py-2 px-4 text-start align-top">{no + 2}</td>
        <td className="py-2 px-4 align-top">{document}</td>
        <td className="py-2 px-4 align-top">{name}</td>
        <td className="py-2 px-4 align-top">
          {selectedIndex === no ? (
            <Input
              onChange={(e) => {
                setInsertData(e.target.value);
              }}
              value={insertData}
              placeholder="Masukan data analisis"
              size="lg"
            />
          ) : (
            <p>{analisis}</p>
          )}
        </td>
        <td className="align-top float-left">
          <div className="flex justify-center items-center">
            {!analisis ? (
              <p className="px-[8px] py-[3px] text-white font-semibold mt-2 bg-red-500 rounded">
                Incomplete
              </p>
            ) : (
              <p className="px-[8px] py-[3px] text-white font-semibold mt-2 bg-green-500 rounded">
                Complete
              </p>
            )}
          </div>
        </td>
        <td className="align-top">
          <div className="flex gap-2 justify-center mt-3 pr-6">
            {selectedIndex === no ? (
              <FaSave
                onClick={() => {
                  saveData(no, insertData);
                }}
                className="text-[20px] text-blue-900 cursor-pointer"
              />
            ) : (
              <HiMiniPencilSquare
                onClick={() => {
                  setSelectedIndex(no);
                  setInsertData(analisis);
                }}
                className="text-[20px] text-blue-900 cursor-pointer"
              />
            )}

            <IoDocumentSharp className="text-[20px] text-blue-900 cursor-pointer" />
          </div>
        </td>
      </tr>
    );
  };

  const displayTable = () => {
    return (
      <>
        <td className="py-2 px-4 text-start align-top">1</td>
        <td className="py-2 px-4 align-top">
          Fotokopi Akta Perubahan terakhir yang memuat
        </td>
        <td className="py-2 px-4 align-top">Akta 2023</td>
        <td className="py-2 px-4 align-top">
          <p className="text-left">
            Susunan Pengurus Terkini: Anggota Direksi PT DESTIN GATEWAY adalah
            Nona Destin Herlita Tampubolon, seorang warga negara Indonesia, dan
            Dewan Komisarisnya adalah Nona Anggitha Ariitjayutyas, juga seorang
            warga negara Indonesia
          </p>
          <br />
          <p className="text-left">
            Jumlah Modal Dasar dan Modal Disetor: Modal dasar PT DESTIN GATEWAY
            adalah sebesar Rp 10.000.000.000 (sepuluh milyar Rupiah) yang
            terbagi atas 10.000 (sepuluh ribu) saham, dengan nilai nominal
            masing-masing sebesar Rp 10.000.000 (sepuluh juta Rupiah). Dari
            modal dasar tersebut, 100% atau sejumlah 10.000 saham dengan jumlah
            nilai nominal sebesar Rp 10.000.000.000 (sepuluh milyar Rupiah)
            telah ditempatkan dan disetor secara penuh oleh para pendiri yang
            mengambil bagian atas saham-saham tersebut.
          </p>
          <br />
          <p className="text-left">
            Susunan Pemegang Saham yang paling terkini: Para pemegang saham PT
            Account Issuance Services adalah PT Destin Gateway dan PT Anggitha
            Payment System. PT Destin Gateway memiliki 1.500 saham, sedangkan PT
            Anggitha Payment System memiliki 8.500 saham
          </p>
        </td>
        <td className="align-top float-left">
          <div className="flex justify-center items-center">
            <p className="px-[8px] py-[3px] text-white font-semibold mt-2 bg-green-500 rounded">
              Complete
            </p>
          </div>
        </td>
        <td className="align-top">
          <div className="flex justify-center mt-3 pr-6">
            <IoDocumentSharp className="text-[20px] text-blue-900" />
          </div>
        </td>
      </>
    );
  };

  const displayIncomplete = () => {
    return inCompleteData.map((data, index) =>
      nonComplete(index, data.name, data.document, data.analisis)
    );
  };

  return (
    <div className="flex w-full p-5 overflow-x-hidden">
      <div className="mx-auto w-[1440px] justify-center flex flex-col">
        <p className="text-[28px] font-semibold">
          Daftar Persetujuan Penyedia Jasa Pembayaran (PJP)
        </p>

        {/* Process */}
        <div className="flex gap-1 mx-auto py-20 items-center">
          <div className="w-[60px] h-[60px] border rounded-full flex justify-center items-center">
            <FaFolderOpen className="text-[32px] text-slate-700" />
          </div>

          <div className="w-[150px] h-[2px] bg-slate-300"></div>

          <div className="w-[60px] h-[60px] border rounded-full flex justify-center items-center">
            <FaList className="text-[32px] text-slate-700" />
          </div>

          <div className="w-[150px] h-[2px] bg-slate-300"></div>

          <div className="w-[60px] h-[60px] border rounded-full flex justify-center items-center">
            <FaRegListAlt className="text-[32px] text-slate-700" />
          </div>

          <div className="w-[150px] h-[2px] bg-slate-300"></div>

          <div className="w-[60px] h-[60px] border border-blue-900 rounded-full flex justify-center items-center">
            <IoDocumentSharp className="text-[32px] text-blue-900" />
          </div>
        </div>

        <p className="text-[18px] font-semibold">Unggah Document</p>
        <hr className="br-slate-200 my-4" />

        <div className="flex justify-end">
          <Button colorScheme="blue">Download Semua Dokumen</Button>
        </div>

        {/* Tabs */}
        <Tabs size="md" variant="enclosed">
          <TabList>
            <Tab>Kelembagaan</Tab>
            <Tab>Umum</Tab>
            <Tab>Pemodalan dan Keunangan</Tab>
            <Tab>Manajemen Resiko</Tab>
            <Tab>Kapabilitas Sistem Informasi</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <table className="w-full table-auto pb-5">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="py-1 px-4 text-left">No.</th>

                    <th className="py-1 px-4 text-left min-w-[200px] max-w-[180px]">
                      Jenis Dokumen
                    </th>
                    <th className="py-1 px-4 text-left min-w-[160px] max-w-[180px]">
                      Nama Dokumen
                    </th>
                    <th className="py-1 px-4 text-left min-w-[200px]">
                      Analisis
                    </th>
                    <th className="py-1 px-4 text-left min-w-[150px] max-w-[180px]">
                      Status
                    </th>
                    <th className="py-1 px-4 text-left min-w-[140px]">
                      Tindakan
                    </th>
                    <th className="py-1 px-4"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>{displayTable()}</tr>
                  {displayIncomplete()}
                </tbody>
              </table>
            </TabPanel>
            <TabPanel>
              <p>Umum</p>
            </TabPanel>
            <TabPanel>
              <p>Pemodalan dan Keunangan</p>
            </TabPanel>
            <TabPanel>
              <p>Manajemen Resiko</p>
            </TabPanel>
            <TabPanel>
              <p>Kapabilitas Sistem Informasi</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        {/* Submit */}
        <div className="w-[1300px] mx-auto">
          {isNoteSubmitted ? (
            <>
              <div className="border mx-auto rounded-xl p-5 bg-slate-100">
                <div className="flex justify-between">
                  <div className="bg-blue-300 w-[160px] rounded-lg h-[32px] flex justify-center items-center">
                    <p className="text-blue-700 font-semibold">
                      Status Persetujuan :
                    </p>
                  </div>
                  <p className="text-blue-700 font-semibold">
                    26 November 2023
                  </p>
                </div>

                <div className="py-2 flex gap-3">
                  <div>
                    <p>Oleh </p>
                    <p>Catatan </p>
                  </div>

                  <div>
                    <p>:</p>
                    <p>:</p>
                  </div>

                  <div>
                    <p>Yessy Indah Tri Utamxi</p>
                    <p>{notes}</p>
                  </div>
                </div>
              </div>

              <div></div>
            </>
          ) : (
            <>
              <p className="font-semibold py-3">Catatan :</p>
              <Input
                placeholder="Catatan pengajuan"
                size="lg"
                className="h-[300pxx]"
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />
              <div className="flex justify-end pt-5">
                <Button
                  colorScheme="blue"
                  disabled={true}
                  onClick={() => {
                    setIsNoteSubmitted(true);
                  }}
                >
                  Submit
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;

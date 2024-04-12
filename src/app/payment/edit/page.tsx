"use client";

import Image from "next/image";

export default function EditPaymentPage() {
  return (
    <main className="text-center p-5 mx-[8%]">
      <div className="text-4xl font-bold m-10 text-left">Edit Payment</div>
      <div className="flex felx-row">
        <div className="bg-cadetblue ml-10 p-11 text-left text-lg rounded-l-[50px] w-1/2 border-ash border-y-2 border-l-2">
          <div className="m-8">
            <div className="font-semibold">Name</div>
            <div>*Fetch data User1</div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Campground</div>
            <div>*Fetch data Campground</div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Date</div>
            <div>*Fetch data Date</div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Transaction Status</div>
            <div className="flex flex-row mt-1">
              <svg width="30" height="30">
                <circle cx="15" cy="15" r="15" fill="#f43f5e" />
              </svg>
              <div className="text-rose-500 ml-2 place-items-center">
                *Fetch data transaction status
              </div>
            </div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Outstanding Balance</div>
            <div className="text-rose-500">*Fetch data balance THB</div>
          </div>
        </div>
        <div
          className="p-11 text-left rounded-r-[50px] w-1/2 border-ash border-y-2 border-r-2"
          id="showQr"
        >
          <div className="flex flex-row place-items-center">
            <div className="mt-8 ml-12 text-4xl text-teal-700 font-medium">
              Total price
            </div>
            <div className="mt-12 ml-3 text-lg text-lightteal font-semibold">
              (Tax included)
            </div>
          </div>
          <div className="mt-3 ml-12 text-3xl text-gray-700 font-medium">
            THB xxx.xx
          </div>
          <div className="mt-5 mx-36 py-28 bg-slate-200 ">*Image</div>
          <div className="mt-9 text-center">
            <button className="bg-white border-[2px] border-fern px-8 py-1 mr-10 text-fern font-medium rounded-full">
              Cancel
            </button>
            <button
              className="border-[2px] border-fern bg-fern px-10 py-1 text-white font-medium rounded-full"
              onClick={nextUpload}
            >
              Next
            </button>
          </div>
        </div>
        <div
          className="p-11 text-left rounded-r-[50px] w-1/2 border-ash border-y-2 border-r-2 hidden"
          id="upload"
        >
          <div className="mt-8 ml-12 text-2xl text-teal-700 font-semibold">
            Upload new receipt
          </div>

          <div
            className="mx-10 mt-5 text-center py-28 bg-emerald-50"
            id="browse"
          >
            <div>Drag and drop</div>
            <div>or</div>
            <button
              className="mt-2 border-[2px] border-fern bg-fern px-10 py-1 text-white rounded-full"
              id="button"
              onClick={() => document.getElementById("upload_slip").click()}
            >
              Browse files
            </button>
            <input
              type="file"
              id="upload_slip"
              className="hidden"
              onChange={showSlip}
            />
          </div>
          <Image
            src=""
            alt="Preview Uploaded Image"
            id="file-preview"
            className="hidden w-[280px] mt-5 ml-[22%]"
          ></Image>
          <div className="mt-5 text-center">
            <button
              className="bg-white border-[2px] border-fern px-8 py-1 mr-10 text-fern font-medium rounded-full"
              onClick={cancelUpload}
            >
              Cancel
            </button>
            <button className="border-[2px] border-fern bg-fern px-10 py-1 text-white font-medium rounded-full">
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function nextUpload(): void {
  document.getElementById("upload").style.display = "block";
  document.getElementById("showQr").style.display = "none";
}
function cancelUpload(): void {
  const input = document.getElementById("upload_slip") as HTMLInputElement;
  input.value = "";
  document.getElementById("browse").style.display = "block";
  document.getElementById("file-preview").style.display = "none";
}

function showSlip(): void {
  document.getElementById("browse").style.display = "none";
  document.getElementById("file-preview").style.display = "block";
  const input = document.getElementById("upload_slip") as HTMLInputElement;
  const file = input.files;
  if (file) {
    const fileReader = new FileReader();
    const preview = document.getElementById("file-preview") as HTMLImageElement;
    fileReader.onload = (event) => {
      preview.src = event.target.result as string;
    };
    fileReader.readAsDataURL(file[0]);
  }
}

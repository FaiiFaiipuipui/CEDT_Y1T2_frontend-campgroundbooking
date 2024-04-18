"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import getTransaction from "@/libs/getUserTransaction";
import createTransactionSlip from "@/libs/createTransactionSlip";
import { PaymentItem } from "interface";
import { useEffect } from "react";

export default function PaymentPage() {
  // This use State is for save image data
  const [imagePreview, setImagePreview] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [name, setName] = useState<string>("");
  const [rentDate, setRentDate] = useState<string>("");
  const [campgroundName, setCampgroundName] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  const router = useRouter();
  const { data: session } = useSession();

  const urlParams = useSearchParams();
  const tid = urlParams.get("tid") as string;

  useEffect(() => {
    const fetchData = async () => {
      const transactionData = await getTransaction(tid, session.user.token);
      const transaction: PaymentItem = transactionData.data;
      console.log(transaction);
      setName(transaction.user.name);
      setRentDate(transaction.rent_date.toString());
      setCampgroundName(transaction.campground.name);
      setPrice(transaction.campground.price.toString());
    };
    fetchData();
  }, []);

  const handleSubmit = () => {
    if (imagePreview != null) {
      if (session.user && tid) {
        createTransactionSlip(session.user.token, tid, imagePreview);
        setShowPopup(true);
      }

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {
      alert("Please upload Slip");
    }
  };

  const nextUpload = () => {
    document.getElementById("upload").style.display = "block";
    document.getElementById("showQr").style.display = "none";
  };
  const back = () => {
    document.getElementById("upload").style.display = "none";
    document.getElementById("showQr").style.display = "block";
  };

  const cancelUpload = () => {
    setImagePreview(null);
  };

  const upload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (event) => {
      setImagePreview(fileReader.result);
      console.log(fileReader.result);
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <main className="text-center p-5 mx-[8%]">
      <div className="text-4xl font-bold m-10 text-left">Edit Payment</div>

      <div className="flex felx-row">
        <div className="bg-cadetblue ml-10 p-11 text-left text-lg rounded-l-[50px] w-1/2 border-ash border-y-2 border-l-2">
          <div className="m-8">
            <div className="font-semibold">Name</div>
            <div>{name}</div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Campground</div>
            <div>{campgroundName}</div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Date</div>
            <div>{rentDate.toString().split("T")[0]}</div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Transaction Status</div>
            <div className="flex flex-row mt-1">
              <svg width="30" height="30">
                <circle cx="15" cy="15" r="15" fill="#f43f5e" />
              </svg>
              <div className="text-rose-500 ml-2 place-items-center">
                Rejected
              </div>
            </div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Outstanding Balance</div>
            <div className="text-rose-500">{price} THB</div>
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
            {price}
          </div>
          <Image
            src=""
            alt="QR code Image"
            className="w-[300px] h-[300px] mt-5 ml-[20%] object-contain"
          ></Image>
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

          {imagePreview ? (
            <div className="flex items-center justify-center">
              <Image
                src={imagePreview}
                alt="Preview Uploaded Image"
                width={280}
                height={370}
                className="mt-5 object-contain"
              ></Image>
              <div
                className="absolute py-2 px-10 rounded-lg bg-gray-100 hover:bg-gray-400 hover:text-white cursor-pointer shadow-lg"
                id="preview_button"
                onClick={openModal}
              >
                Click for Preview
              </div>
            </div>
          ) : (
            <div className="mx-10 mt-5 text-center py-28 bg-emerald-50">
              <button
                className="mt-2 border-[2px] border-fern bg-fern px-10 py-1 text-white rounded-full"
                onClick={() => document.getElementById("upload_slip").click()}
              >
                Browse files
              </button>
              <input
                type="file"
                id="upload_slip"
                className="hidden"
                onChange={(event) => upload(event)}
              />
            </div>
          )}
          <div onClick={closeModal}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Enlarged Image"
              className="flex items-center justify-center mt-5"
            >
              <div className="flex flex-col items-center justify-center mt-20">
                <Image
                  src={imagePreview}
                  alt="Preview Uploaded Image"
                  width={350}
                  height={350}
                ></Image>
              </div>
            </Modal>
          </div>
          <div className="mt-5 text-center">
            <button
              className="bg-white border-[2px] border-fern px-8 py-1 mr-10 text-fern font-medium rounded-full"
              onClick={back}
            >
              Back
            </button>
            <button
              className="bg-white border-[2px] border-rose-500 px-8 py-1 mr-10 text-rose-500 font-medium rounded-full"
              onClick={cancelUpload}
            >
              Cancel
            </button>
            <button
              className="border-[2px] border-fern bg-fern px-10 py-1 text-white font-medium rounded-full"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <div
        className={`popup ${
          showPopup ? "" : "hidden"
        } my-20 mx-[30%] py-4 px-5 w-[45%] bg-[#EEFFF7] rounded-lg flex flex-row`}
      >
        <Image
          src="/img/Check.jpg"
          width={32}
          height={32}
          alt="checkbox"
          className="mr-5"
        />
        Successfully upload!
      </div>
    </main>
  );
}

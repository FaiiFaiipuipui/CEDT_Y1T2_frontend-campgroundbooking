"use client";
import { qrcode, checkBox } from "public/img";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@mui/material";
import React, { useState } from "react";
import Modal from "react-modal";
import { AddPhotoAlternate, CheckCircleOutline } from '@mui/icons-material';

export default function PaymentPage() {
  // This use State is for save image data
  const [imagePreview, setImagePreview] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  // This function is for recieve the image data from user
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  //   This function just for alert to see what we have got from user.
  //   Note that if in backend wnat to use it, you need to do these steps
  //        1. Convert the URL --> base64
  //        2. Convert base64 --> Buffer
  const handleSubmit = () => {
    if (imagePreview != null) {
      setShowPopup(true);

      // Hide the popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);
    } else {
      alert("Please upload Slip");
    }
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className=" flex justify-center items-center p-10 flex-col">
      <div className="text-5xl font-black font-bold text-center">
        Payment Information
      </div>
      <div className="flex border border-ash border-solid w-full grid grid-cols-3 gap-3 flex mt-10 rounded-2xl">
        {/* The first col */}
        <div className="bg-cadetblue w-[100%] h-[100%] rounded-l-2xl pt-2">
          <div className="justify-center items-center flex flex-row font-bold pt-7 pl-6">User</div>
          <div className="justify-center items-center flex pl-6">User1</div>

          <div className="justify-center items-center flex flex-row font-bold pt-4 pl-6">UserID</div>
          <div className="justify-center items-center flex pl-6">7894sdafsdaf45665644adsf</div>

          <div className="justify-center items-center flex flex-row font-bold pt-4 pl-6">Date</div>
          <div className="justify-center items-center flex pl-6">01/01/1111</div>

          <div className="justify-center items-center flex flex-row font-bold pt-4 pl-6">Campground</div>
          <div className="justify-center items-center flex pl-6">อุทยานแห่งชาติหาดนพรัตน์ธารา-หมู่เกาะพีพี</div>
          <div className="mt-10">
            <div className="text-sm text-[#007662] flex flex-row pl-6 font-semibold">
              {" "}
              <span className="h-[3vh] w-[3vh] flex mr-2">
                {/* <Image src={checkBox} alt="checkbox" /> */}
                <CheckCircleOutline className="pb-1"/>
              </span>
              Cannot be refunded
            </div>
            <div className="text-sm text-[#007662] flex flex-row mt-2 pl-6 font-semibold">
              {" "}
              <span className="lg:h-[3vh] lg:w-[3vh]  flex mr-2">
                {/* <Image src={checkBox} alt="checkbox" /> */}
                <CheckCircleOutline className="pb-1"/>
              </span>{" "}
              Estimated ticketing time less than 2 Days
            </div>
          </div>
        </div>

        {/* Second column */}
        <div className="pt-7 pl-6 flex flex-col ">
          <div className="text-4xl text-[#007662] font-semibold text-left">
            Total Price{" "}
            <span className="font-medium text-lg text-[#9DCAC2]">
              (Tax included)
            </span>
          </div>
          <div className="text-5xl text-black font-medium mt-2 text-left">
            THB 100.00
          </div>

          <div className="flex items-center justify-center mt-2">
            <Image src={qrcode} alt="qrcode" className="h-[38vh] w-[38vh] " />
          </div>
        </div>
        {/* Third Column */}
        <div className="flex justify-center flex-col pr-[5vw]">
          <div className="pt-7 font-medium text-xl">
            Please upload your receipt{" "}
          </div>
          <div className=" ">
            {/* This function is for adding display the input image, so that user can preview what they have input recently*/}
            {imagePreview ? (
              <div className="flex items-center justify-center ">
                <img
                  src={imagePreview}
                  alt="Uploaded Image"
                  className=" relative h-[30vh] mt-10"
                />
                <div
                  className="absolute py-2 px-10 rounded-lg bg-gray-100 hover:bg-gray-400 hover:text-white cursor-pointer shadow-lg"
                  onClick={openModal}
                >
                  <span className="text-lg  font-medium ">
                    Click for Preview
                  </span>
                </div>
              </div>
            ) : (
              <Button
                variant="contained"
                component="label"
                className="bg-lightteal w-[100%] min-h-[30vh] mt-8 hover:bg-[#C5FFE4] flex flex-col text-black cursor-default normal-case"
              >
                <div className="flex flex-row justify-center items-center pb-0.5">
                  <span className="h-[1.5vh] w-[3vh] flex pb-6">
                    {/* <Image
                      src="/img/image_icon.png"
                      alt="image"
                      width={12}
                      height={12}
                    /> */}
                    <AddPhotoAlternate className="size-5 text-[#007662]"/>
                    
                  </span>{" "}
                  filename.jpg
                </div>
                <label
                  htmlFor="file-upload"
                  className="w-[10vw] h-[5vh] flex items-center justify-center block rounded-[20vh] bg-green-500 p-2 mt-2 text-white cursor-pointer hover:bg-green-700 shadow-xl"
                >
                  <span>Browse file</span>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={(event) => handleFileUpload(event)}
                  />
                </label>
              </Button>
            )}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              contentLabel="Enlarged Image"
              className="flex items-center flex-col top-"
            >
              <div>
                <div className="h-[10vh]"></div>
                <Image
                  src={imagePreview}
                  alt="Uploaded Image"
                  width={350}
                  height={350}
                  className=""
                />
              </div>
              <button
                onClick={closeModal}
                className="bg-fern text-white font-medium px-10 py-2 rounded-2xl mt-10"
              >
                Close
              </button>
            </Modal>
          </div>
          <div className="flex flex-row p-5 justify-around">
            <div
              className="border border-green-600 border-solid py-1 lg:px-8 px-2 border-2 rounded-[5vh] text-green-700 font-bold hover:cursor-pointer"
              onClick={() => {
                window.location.reload();
              }}
            >
              {" "}
              Cancel{" "}
            </div>
            <div
              className="bg-fern  py-1 lg:px-8 px-2 border-2 rounded-[5vh] text-white font-bold hover:cursor-pointer"
              onClick={() => {
                handleSubmit();
                router.push("/dashboard");
              }}
            >
              {" "}
              Confirm{" "}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`popup ${
          showPopup ? "" : "hidden"
        } absolute top-2/3 my-[15vh] py-4 px-5 w-[45%] bg-[#EEFFF7] rounded-lg flex flex-row`}
      >
        <Image src={checkBox} alt="checkbox" className="mr-5" />
        Successfully upload!
      </div>
    </div>
  );
}

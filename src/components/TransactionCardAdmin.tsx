"use client";
import { useState } from "react";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel, {
    FormControlLabelProps,
} from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PendingIcon from "@mui/icons-material/Pending";
import Image from "next/image";
import { getImgFromArr } from 'array-to-image';

export default function TransactionCardAdmin({
    status,
    imgBase,
}: {
    status: string;
    imgBase: any;
}) {
    const [value, setValue] = useState<string>(status);
    const imgArr = imgBase.data.slip_image.data;
    console.log("img:" + imgBase.data.slip_image.data);
    // Convert the array to a Uint8Array
    const uint8Array = new Uint8Array(imgArr);

    // Convert the Uint8Array to a base64 string
    const base64String = btoa(String.fromCharCode.apply(null, uint8Array));
    console.log('Base64: '+ base64String);
    

    const handleRadioChange = (event) => {
        setValue(event.target.value);
    };


    return (
        <div className="w-[100%] h-[100%] min-w-[320px] min-h-[550px]  flex flex-row space-x-[20px]">
            <div className=" min-w-[320px] min-h-[550px] bg-white rounded-[50px] flex flex-row justify-start border border-2">
                <div
                    className="w-[2/5] min-w-[400px] rounded-l-[50px] flex justify-center items-end"

                >
                    <Image src={base64String} alt="Preview" width={300} height={200} />

                </div>

                <div className="flex flex-col">
                    <div className="w-[3/5] flex flex-col justify-center items-center p-[50px]">
                        <div className="w-full h-full grid grid-cols-2 justify-center items-start text-left space-y-[10px]">
                            <div className="col-span-2 text-4xl font-bold text-fern">
                                Customer Information
                            </div>
                            <div className="col-span-2 font-semibold text-black text-xl">
                                User&apos;s Name
                            </div>
                            <div className="col-span-2 font-normal text-black text-xl">
                                Name
                            </div>
                            <div className="col-span-2 flex flex-row justify-between items-center">
                                <div className="flex flex-col pr-[30px]">
                                    <p className="font-semibold text-black text-xl">Campground</p>
                                    <p className="font-normal text-black text-xl">
                                        อุทยานแห่งชาติหาดนพรัตน์ธารา-หมู่เกาะพีพี
                                    </p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="font-semibold text-black text-xl">Date</p>
                                    <p className="font-normal text-black text-xl">30/01/2024</p>
                                </div>
                            </div>
                            <div className="col-span-2"></div>
                            <div className="col-span-2 text-4xl font-bold text-fern">
                                Payment
                            </div>
                            <div className="col-span-2 flex flex-row justify-between items-center">
                                <div className="font-normal text-black text-xl">
                                    Campground booking
                                </div>
                                <div className="font-normal text-black text-xl">$150</div>
                            </div>
                            <div className="col-span-2 flex flex-row justify-between items-center">
                                <div className="font-normal text-black text-xl">
                                    Taxes & Fee
                                </div>
                                <div className="font-normal text-black text-xl">$0</div>
                            </div>
                            <hr className="col-span-2" />
                            <div className="col-span-2 flex flex-row justify-between items-center">
                                <div className="font-bold text-black text-xl">Total</div>
                                <div className="font-bold text-black text-xl">$150</div>
                            </div>
                        </div>
                    </div>
                    <div
                        id="tagStatus"
                        className={`w-full py-[20px] rounded-br-[50px] bg-opacity-60 ${value === "PENDING"
                                ? "bg-[#D9D9D9]"
                                : value === "REJECTED"
                                    ? "bg-[#FF0000]"
                                    : "bg-fern"
                            }`}
                    >
                        <div className="">
                            {value === "PENDING" ? (
                                <div className="flex flex-row justify-center items-center space-x-[20px]">
                                    <PendingIcon sx={{ fontSize: "50px", color: "#626262" }} />
                                    <div className="font-bold text-[40px] text-white drop-shadow-md">
                                        Payment Pending
                                    </div>
                                </div>
                            ) : value === "REJECTED" ? (
                                <div className="flex flex-row justify-center items-center space-x-[20px]">
                                    {" "}
                                    <CancelIcon sx={{ fontSize: "50px", color: "#B72323" }} />
                                    <div className="font-bold text-[40px] text-white drop-shadow-md">
                                        Payment Rejected
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-row justify-center items-center space-x-[20px]">
                                    <CheckCircleIcon
                                        sx={{ fontSize: "50px", color: "#29FB57" }}
                                    />
                                    <div className="font-bold text-[40px] text-white drop-shadow-md">
                                        Payment Completed
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="min-h-[550px] w-[10%] min-w-[370px] border border-2  rounded-[50px] pt-[30px] px-[20px] text-center">
                <p className="text-[32px] font-semibold">Transaction Status</p>
                <hr />
                <RadioGroup
                    name="transactionStatus"
                    sx={{ margin: "10px 0px 0px 20px" }}
                    value={value}
                    onChange={handleRadioChange}
                >
                    <FormControlLabel
                        value="PENDING"
                        label="Pending"
                        control={<Radio />}
                    />
                    <FormControlLabel
                        value="COMPLETE"
                        label="Completed"
                        control={<Radio />}
                    />
                    <FormControlLabel
                        value="REJECTED"
                        label="Rejected"
                        control={<Radio />}
                    />
                </RadioGroup>
            </div>
        </div>
    );
}

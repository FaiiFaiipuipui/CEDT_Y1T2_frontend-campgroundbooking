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
            <div className="text-rose-500">*Fetch data transaction status</div>
          </div>
          <div className="m-8">
            <div className="font-semibold">Outstanding Balance</div>
            <div className="text-rose-500">*Fetch data balance THB</div>
          </div>
        </div>
        <div className="p-11 text-left text-lg rounded-r-[50px] w-1/2 border-ash border-y-2 border-r-2">
          <div className="mt-8 ml-20 font-semibold">Thai-QR Payment</div>
          <div className="mt-10 mx-20 py-28 bg-slate-200 ">*Image</div>
          <div className="mt-10 text-center">
            <button className="bg-white border-[2px] border-fern px-8 py-1 mr-10 text-fern font-medium rounded-full hover:bg-fern hover:text-white">
              Cancel
            </button>
            <button className="border-[2px] border-fern bg-fern px-10 py-1 text-white font-medium rounded-full hover:bg-white hover:text-fern">
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

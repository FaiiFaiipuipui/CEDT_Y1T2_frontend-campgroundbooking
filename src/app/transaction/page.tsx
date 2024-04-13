import Link from "next/link";

export default function TransactionPage() {
  return (
    <main className="text-center p-5 mx-[8%]">
      <div className="text-4xl font-bold m-10 text-left">User Transaction</div>
      <table className="drop-shadow-lg ml-10">
        <tr className="bg-cadetblue text-xl h-20 ">
          <th className="w-1/6 font-semibold rounded-tl-[50px]">User</th>
          <th className="w-1/6 font-semibold">Campground</th>
          <th className="w-1/6 font-semibold">Date</th>
          <th className="w-1/6 font-semibold">Transaction Status</th>
          <th className="w-1/6 font-semibold rounded-tr-[50px]"></th>
        </tr>

        {/* transaction.map((obj) => (
            <tr key={obj._id}>
              <td>{obj.name}</td>
              <td>{obj.campground}</td>
              <td>{obj.rent_date}</td>
              <td className="text-center">{obj.status}</td>
              <td className="text-center">
                <Link href={`/transaction/${obj._id}`}>
                  <button className="bg-white border-[2px] border-fern px-8 py-1 mr-10 text-fern font-medium rounded-full hover:bg-fern hover:text-white">Detail</button>
                </Link>
              </td>
            </tr>
          )) */}
      </table>
    </main>
  );
}

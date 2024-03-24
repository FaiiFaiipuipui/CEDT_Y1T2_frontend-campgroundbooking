import Image from "next/image";

export default function AboutUs(){
    return (
        <main className="bg-white min-w-fit h-100 m-5 rounded-2xl sticky flex flex-col justify-start z-40 p-1 align-middle items-center gap-x-3 drop-shadow-2xl">
            <div className="px-[14%] py-[3%] flex flex-col">
                <div className="text-3xl mb-3">
                    Tippaphanun Kungwarnkanok
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="text-xl w-[70%]">
                        สวัสดีภาษาไทย Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet bibendum arcu, et sagittis mi. Integer mauris sem, placerat ac faucibus et, suscipit nec turpis. Aliquam commodo sodales metus, at eleifend mauris varius non. Morbi vitae lacus non massa ultricies molestie sed vitae lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus quam nec libero molestie elementum. Nam in nisl malesuada, sollicitudin nulla quis, dapibus tortor. Sed interdum nisi leo, id hendrerit lorem hendrerit non.
                    </div>
                    <div className="text-xl w-[30%] ml-[10%] mt-5">
                        <Image src="/img/aboutus1.jpg" alt="Tippaphanun's picture" width={300} height={200} />
                    </div>
                </div>
            </div>
            
            <div className="px-[14%] py-[3%] flex flex-col">
                <div className="text-3xl mb-3">
                    Pakarn Pahulo
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="text-xl w-[30%] mr-[10%] mt-5">
                        <Image src="/img/aboutus2.jpg" alt="Pakarn's picture" width={300} height={200} />
                    </div>
                    <div className="text-xl w-[70%]">
                        สวัสดีภาษาไทย Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet bibendum arcu, et sagittis mi. Integer mauris sem, placerat ac faucibus et, suscipit nec turpis. Aliquam commodo sodales metus, at eleifend mauris varius non. Morbi vitae lacus non massa ultricies molestie sed vitae lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus quam nec libero molestie elementum. Nam in nisl malesuada, sollicitudin nulla quis, dapibus tortor. Sed interdum nisi leo, id hendrerit lorem hendrerit non.
                    </div>
                </div>
            </div>

            <div className="px-[14%] py-[3%] flex flex-col">
                <div className="text-3xl mb-3">
                    Shama Wachanachai
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="text-xl w-[70%]">
                        สวัสดีภาษาไทย Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet bibendum arcu, et sagittis mi. Integer mauris sem, placerat ac faucibus et, suscipit nec turpis. Aliquam commodo sodales metus, at eleifend mauris varius non. Morbi vitae lacus non massa ultricies molestie sed vitae lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus quam nec libero molestie elementum. Nam in nisl malesuada, sollicitudin nulla quis, dapibus tortor. Sed interdum nisi leo, id hendrerit lorem hendrerit non.
                    </div>
                    <div className="text-xl w-[30%] ml-[10%] mt-5">
                        <Image src="/img/aboutus3.jpg" alt="Shama's picture" width={300} height={200} />
                    </div>
                </div>
            </div>
        </main>
    );
}
import { TextField } from '@mui/material';

export default function Booking(){
    return (
        <main className="text-center p-5 mx-[8%]">
            <div className="text-4xl font-bold m-10 text-left">Edit my profile</div>
                <div className='m-10 text-left'>
                    <label for="name" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                    <input type="name" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your new name and surname here"/>
                </div>
                <div className='m-10 text-left'>
                    <label for="emil" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your new email address here"/>
                </div>

                <div className="text-4xl font-bold pt-10 m-10 text-left">Edit my booking</div>
        </main>
    );
}
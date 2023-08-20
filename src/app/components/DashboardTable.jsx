'use client'
import axios from 'axios';
import React, { useState } from 'react';

const DashboardTable = () => {

    const [email, setEmail] = useState([])

    axios.get('https://digilabs-backend.vercel.app/emails')
        .then(res => setEmail(res.data))
        .catch(err => console.error(err));



    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                    Subscribers            </h3>
                <p className="text-gray-600 mt-2">
Here is the all email of subscribers!                </p>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Email</th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            email?.map((item, idx) => (
                                <tr key={idx}>

                                    <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DashboardTable;
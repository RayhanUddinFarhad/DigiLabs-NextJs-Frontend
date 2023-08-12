import Image from 'next/image';
import React from 'react';

const Blogs = () => {
    const posts = [
        {
            title: "Organize your digital assets with a new methodology here.",
            desc: "Podcasting operational management inside of workflows to establish a framework seamless. Convergence collaboratively",
            img: "/assets/blog1.png",
            authorLogo: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            authorName: "Sidi dev",
            date: "Jan 4 2022",
            position: "CEO",

            href: "javascript:void(0)"
        },
        {
            title: "Organize your digital assets with a new methodology here.",
            desc: "Keeping your eye while performing a deep dive on the start-up mentality to derive convergence collaboratively.",
            img: "/assets/blog2.png",

            authorLogo: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            authorName: "Micheal",
            date: "Jan 4 2022",
            position: "UX",

            href: "javascript:void(0)"
        },
        {
            title: "Organize your digital assets with a new methodology here.",
            desc: "Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C .",
            img: "/assets/blog3.png",

            authorLogo: "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            authorName: "Luis",
            date: "Jan 4 2022",
            position: "UI",
            href: "javascript:void(0)"
        },
       
    ]
    
    return (
        <section className="mt-12 mx-auto px-4 max-w-screen-xl  md:px-8">
            <div className="text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                Latest Blog Posts                </h1>
                <p className="mt-3 text-gray-500 max-w-screen-lg mx-auto">
                Completely synergize resource taxing relationships via premier niche markets. Professionally  cultivate one-to-one customer service with robust ideas.                </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    posts.map((items, key) => (
                        <article className="max-w-md mx-auto mt-4  rounded-md duration-300 hover:shadow-sm" key={key}>
                            <a href={items.href}>
                                <Image src={items.img} loading="lazy" alt={items.title} width={200} height={300}  className="w-full object-cover  rounded-t-md" />
                               
                                <div className="pt-3 ml-4 mr-2 mb-3">
                                    <h3 className="text-xl text-gray-900 font-bold">
                                        {items.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
                                </div>


                                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                                    <div className="flex-none  rounded-full">
                                        <Image width={32} height={32} src={items.authorLogo} className=" rounded-full"  alt={items.authorName} />
                                    </div>
                                   <div className='flex w-full justify-between '>


                                   <div className="ml-3 ">
                                        <span className="block text-gray-900 font-bold">{items.authorName}</span>
                                        <span className="block text-gray-400 text-sm">{items.position}</span>
                                    </div>

                                    <p>{items.date}</p>
                                   </div>
                                </div>
                            </a>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};

export default Blogs;
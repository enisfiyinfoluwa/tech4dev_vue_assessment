<template>
    <div style="background-image: url(/stage.webp);
    background-size: cover; height: 640px; ">
        <div class="h-[40px]"></div>
        <nav class="bg-white opacity-50 flex mx-20 rounded-3xl  pl-8 h-16 space-x-80">
            <div class="mt-3 ">

                <h2 class="text-[#4e02bf] font-bold text-2xl font-sans">rendezvous</h2>
            </div>
            <div class="mt-3 ">
                <ul class="list-none m-0 p-0">
                    <li class="float-left"><a class="block p-2 font-sans font-bold text-sm text-[#4e02bf]">Discover</a></li>
                    <li class="float-left"><a class="block p-2 font-sans font-bold text-sm text-[#4e02bf]">About us</a></li>
                    <li class="float-left"><a class="block p-2 font-sans font-bold text-sm text-[#4e02bf]">FAQs</a></li>

                    <li class="float-left"><a class="block p-2 font-sans font-bold text-sm text-[#4e02bf]">Contact us</a></li>
                </ul>
            </div>

            <div class=" mt-3 space-x-4">
                <button class="px-8 font-sans font-bold text-sm text-[#4e02bf]">
                    Log in
                </button>
                <button class=" px-8 py-3 font-sans font-bold text-sm text-white bg-[#783EAD] rounded-xl ">
                    Sign up
                </button>
            </div>
        </nav>
        <div class="h-72"></div>
        <div class="flex space-x-80">
            <div class=" ml-20 w-3/12 h-40"><p class="text-white text-3xl font-semibold">Ready to rock? Discover the Hottest events here- Your Calendar's new Best friend!</p></div>
            <div class="bg-white flex rounded-xl h-24 w-5/12 text-base">
                <div class="ml-6 mt-8 w-72">
                    <img >
                    <input class="pl-4" type="text" name="search" id="search" placeholder="Search for an event"/>
                </div>
                <div class="bg-[#E0E0E0] w-0.5 h-10 mt-6"></div>
                <div class="ml-6 mt-8 w-36">
                    <select name="categories">
                        <option>Categories</option>
                        <option>Concerts</option>
                        <option>Education</option>
                        <option>Corporate</option>
                        <option>Technology</option>

                    </select>
                    
                    
                </div>
                <button class=" my-6 w-32 px-8 py-3 font-sans font-semibold text-base text-white bg-[#783EAD] rounded-xl ">Search</button>
                
            </div>
        </div>
    </div>

</template>
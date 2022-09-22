<template>
    <div class="h-screen flex min-w-9/12 lg:w-3/12">
        <button
            class="fixed z-30 lg:hidden peer top-4 right-4 h-14 w-14 rounded-full bg-slate-700 hover:bg-slate-800 focus:bg-slate-70 transition mb-[660px]">
            <span class="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6 m-auto" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </span>
        </button>
        <div
            class="z-20 lg:block fixed top-0 lg:left-0 -left-96 h-screen w-9/12 lg:w-3/12 bg-no-repeat bg-cover bg-center bg-navigation backdrop-brightness-0 shadow-2xl peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <nav role="navigation" class="px-[10%] py-[15%] bg-black bg-opacity-30">
                <div class="flex justify-center gap-4 pb-4">
                    <img src="@/assets/logo.png" alt="" class="max-w-[200px]">
                </div>
                <div class="mt-4 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
                    <span class="uppercase px-4 text-gray-500"> Docs</span>
                    <ul class="space-y-4 mb-12 px-4 mt-8">
                        <li>
                            <a href="" class="flex gap-4 text-gray-600 hover:text-gray-800 transition"><img src=""
                                    alt="">Documentation</a>
                        </li>
                        <li>
                            <a href="" class="flex gap-4 text-gray-600 hover:text-gray-800 transition"><img src=""
                                    alt="">Playground</a>
                        </li>
                        <li>
                            <a href="" class="flex gap-4 text-gray-600 hover:text-gray-800 transition"><img src=""
                                    alt="">Components</a>
                        </li>
                        <li>
                            <a href="" class="flex gap-4 text-gray-600 hover:text-gray-800 transition"><img src=""
                                    alt="">Community</a>
                        </li>

                    </ul>
                    <ul class="space-y-4">
                        <li class="pr-2">
                            <div class="py-2 px-4 text-gray-700 uppercase">
                                <a href="" class="block">Getting Started</a>
                            </div>
                            <ul class="text-sm pb-24">
                                <li>
                                    <a href=""
                                        class="block py-2 px-5 rounded bg-cyan-500 bg-opacity-10 hover:bg-opacity-20 text-cyan-500">
                                        Installation
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="block py-2 px-5 hover:text-gray-500 transition">
                                        Programming
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="block py-2 px-5 hover:text-gray-500 transition">
                                        JavaScript
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="block py-2 px-5 hover:text-gray-500 transition">
                                        Unity
                                    </a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
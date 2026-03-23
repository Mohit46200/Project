const Header = () => {

    return (
        
        <header class="w-full border-b border-gray-200 bg-white">
            <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
            
                <div class="text-xl font-semibold tracking-widest">
                F L O O M
                </div>

                
                <nav class="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
                    <a href="#" class="hover:text-black transition">Flowers</a>
                    <a href="#" class="hover:text-black transition">Plants</a>
                    <a href="#" class="hover:text-black transition">Gifts</a>
                    <a href="#" class="hover:text-black transition">Occasions</a>
                </nav>

                
                <div class="flex items-center space-x-6 text-sm text-gray-700">
                
                
                <div class="flex items-center space-x-2 cursor-pointer">
                    <span>Send To:</span>
                    <span>🇮🇳</span>
                </div>

                
                <div class="flex items-center space-x-1 cursor-pointer hover:text-black transition">
                    <span>My Account</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-10" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M6 20c0-4 12-4 12 0"/>
                    </svg>
                </div>

                
                <div class="flex items-center space-x-1 cursor-pointer hover:text-black transition">
                    <span>Basket</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-10" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 6h15l-1.5 9h-13z"/>
                    <circle cx="9" cy="20" r="1"/>
                    <circle cx="18" cy="20" r="1"/>
                    </svg>
                </div>

                </div>
            </div>
        </header>
       
    )
}

export default Header
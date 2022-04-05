const products = [
    {
        id: 'product1',
        url: 'https://rukminim1.flixcart.com/image/150/150/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kapoo7k0/electric-kettle/p/6/s/pigeon-favourite-original-imafs7xhj5uwgrh4.jpeg?q=70',
        title: {
            shortTitle: 'Home & Kitchen',
            longTitle: 'Pigeon FAVOURITE Electric Kettle  (1.5 L, Silver, Black)'
        },
        price: {
            mrp: 1195,
            cost: 625,
            discount: '47%'
        },
        description: 'This electric kettle from Pigeon will soon become a travelers best friend, a hostelite saviour and an answer to all the midnight cravings. With this handy appliance, you can boil water and use it to make instant noodles, packet soup, coffee and green tea.',
        discount: 'Extra 10% Off',
        tagline: 'Deal of the day'
    },
    {
        id: 'product2',
        url: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kl6wx3k0/sandwich-maker/8/r/d/sandwich-01-flipkart-smartbuy-original-imagydds4zthxt8z.jpeg?q=70',
        title: {
            shortTitle: 'Sandwich Makers',
            longTitle: 'Flipkart SmartBuy Sandwich 01 Grill  (Black)'
        },
        price: {
            mrp: 1499,
            cost: 899,
            discount: '40%'
        },
        description: 'This non-stick sandwich toaster .easy to use and very handy. Directly hold over flame to make tasty toasts and toasted sandwiches. Specially designed by keeping your needs in mind, the sandwich maker makes whatever youre doing simpler, smarter and better',
        discount: 'From 99+5% Off',
        tagline: 'Pestige, Nova & more'
    },
    {
        id: 'product3',
        url: 'https://rukminim1.flixcart.com/image/150/150/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kohigsw0/resistance-tube/c/s/e/new-adjustable-single-resistance-tube-multicolor-na-ajro-deal-original-imag2xg88mhmwxz5.jpeg?q=70',
        title: {
            shortTitle: 'Fitness Gear',
            longTitle: 'AJRO DEAL New Adjustable Single Resistance Tube (Multicolor) Resistance Tube  (Multicolor)'
        },
        price: {
            mrp: 499,
            cost: 166,
            discount: '66%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 70% Off',
        tagline: 'Deal of the Day'
    },
    {
        id: 'product4',
        url: 'https://rukminim1.flixcart.com/image/300/300/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/kll7bm80/smartwatch/c/1/n/43-mo-sw-sense-500-android-ios-molife-original-imagyzyycnpujyjh.jpeg?q=70',
        title: {
            shortTitle: 'Smart Watches',
            longTitle: 'Molife Sense 500 Smartwatch  (Black Strap, Freesize)',
        },
        price: {
            mrp: 6999,
            cost: 4049,
            discount: '42%'
        },
        description: 'The Molife Sense 500, a brilliant smartwatch with a beautiful large display. Say hello to the infinity 1.7-inch display with 2.5D curved edges. Thanks to seamless Bluetooth 5.0 connectivity, you wont have to keep waiting. Bring a change to your outfit every day with changeable straps. A splash of color every day keeps the boredom away.',
        discount: 'Grab Now',
        tagline: 'Best Seller'
    },
    {
        id: 'product5',
        url: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        detailUrl: 'https://rukminim1.flixcart.com/image/416/416/k3uhhu80/hair-dryer/n/m/t/nova-2800-w-professional-nhp-8220-original-imafmvwfhmzsxdrw.jpeg?q=70',
        title: {
            shortTitle: 'Trimmers, Dryers & more',
            longTitle: 'Nova Professional NHP 8220 Hair Dryer  (1800 W, Multicolor)'
        },
        price: {
            mrp: 1899,
            cost: 1124,
            discount: '40%'
        },
        description: 'Professional AC motor: 5x longer life cycle vs conventional dryer, Includes Cool Shot Button that provides a burst of cold air to help set the desired hairstyle, Includes Diffuser for controlled airflow over wider scalp area esp. for curly hair, Removable filter for easy cleaning . Length Of Chord - 1.6 Metres, Controls consistent optimal temperature for healthy drying and professional styling',
        discount: 'From ₹499',
        tagline: 'Kubra, Nova & more'
    },
    {
        id: 'product6',
        url: 'https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SL1500_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Appliances',
            longTitle: 'AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver'
        },
        price: {
            mrp: 1650,
            cost: 1386,
            discount: '16%'
        },
        description: 'Cordless design allows for easy filling and serving; Power base with 30-inch power cord for flexible placement, plus cord wrap for compact storage,Electric water kettle with 1.0-liter capacity and 1500 watts of power for fast results (120V-60Hz),Concealed heating element; BPA-free food-contact materials; Removable filter for easy cleaning',
        discount: 'Extra 16% Off',
        tagline: 'Kettle For Instant Tea'
    },
    {
        id: 'product7',
        url: 'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
        },
        price: {
            mrp: 32999,
            cost: 30359,
            discount: '8%'
        },
        description: 'AMD Ryzen 3 3200U Dual Core Processor (Up to 3.5GHz); 4GB DDR4 Memory; 128GB PCIe NVMe SSD,15.6 inches full HD (1920 x 1080) widescreen LED backlit IPS display; AMD Radeon Vega 3 Mobile Graphics',
        discount: 'Upto 8% Off',
        tagline: 'Laptops & More'
    },
    {
        id: 'product8',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61EgKv96u2L._AC_SL1000_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/61EgKv96u2L._AC_SL1000_.jpg',
        title: {
            shortTitle: 'Appliances',
            longTitle: 'MyQ Smart Garage Door Opener Chamberlain MYQ-G0301 - Wireless & Wi-Fi enabled Garage Hub with Smartphone Control, 1 Pack, Black'
        },
        price: {
            mrp: 3700,
            cost: 3330,
            discount: '10%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 10% Off',
        tagline: 'Security & More'
    },
    {
        id: 'product9',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black',
        },
        price: {
            mrp: 2600,
            cost: 1950,
            discount: '25%'
        },
        description: 'Three levels of world-class noise cancellation for better listening experience in any environment, Alexa-enabled for voice access to music, information, and more, Noise-rejecting dual-microphone system for clear sound and voice pick-up',
        discount: 'Grab Now 25% Off',
        tagline: 'Best Seller'
    },
    {
        id: 'product10',
        url: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'WD 2TB Elements Portable External Hard Drive - USB 3.0'
        },
        price: {
            mrp: 4800,
            cost: 4080,
            discount: '15%'
        },
        description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity, Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7,Reformatting may be required for other operating systems',
        discount: 'Best offer|15% Off',
        tagline: 'Storage Gadegets & More'
    },
    {
        id: 'product11',
        url: 'https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SL1500_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Appliances',
            longTitle: 'AmazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver'
        },
        price: {
            mrp: 1650,
            cost: 1386,
            discount: '16%'
        },
        description: 'Cordless design allows for easy filling and serving; Power base with 30-inch power cord for flexible placement, plus cord wrap for compact storage,Electric water kettle with 1.0-liter capacity and 1500 watts of power for fast results (120V-60Hz),Concealed heating element; BPA-free food-contact materials; Removable filter for easy cleaning',
        discount: 'Extra 16% Off',
        tagline: 'Kettle For Instant Tea'
    },
    {
        id: 'product12',
        url: 'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
        },
        price: {
            mrp: 32999,
            cost: 30359,
            discount: '8%'
        },
        description: 'AMD Ryzen 3 3200U Dual Core Processor (Up to 3.5GHz); 4GB DDR4 Memory; 128GB PCIe NVMe SSD,15.6 inches full HD (1920 x 1080) widescreen LED backlit IPS display; AMD Radeon Vega 3 Mobile Graphics',
        discount: 'Upto 8% Off',
        tagline: 'Laptops & More'
    },
    {
        id: 'product13',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61EgKv96u2L._AC_SL1000_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/61EgKv96u2L._AC_SL1000_.jpg',
        title: {
            shortTitle: 'Appliances',
            longTitle: 'MyQ Smart Garage Door Opener Chamberlain MYQ-G0301 - Wireless & Wi-Fi enabled Garage Hub with Smartphone Control, 1 Pack, Black'
        },
        price: {
            mrp: 3700,
            cost: 3330,
            discount: '10%'
        },
        description: 'This unique product can tone your back muscles, reduce belly fat, improve blood circulation and also improves your body posture. It increases the stamina, energy and vitality of the body. The elastic resistance of the rubber training rope can be used to train and exercise in whichever way you want, according to your physical needs.',
        discount: 'Upto 10% Off',
        tagline: 'Security & More'
    },
    {
        id: 'product14',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black',
        },
        price: {
            mrp: 2600,
            cost: 1950,
            discount: '25%'
        },
        description: 'Three levels of world-class noise cancellation for better listening experience in any environment, Alexa-enabled for voice access to music, information, and more, Noise-rejecting dual-microphone system for clear sound and voice pick-up',
        discount: 'Grab Now 25% Off',
        tagline: 'Best Seller'
    },
    {
        id: 'product15',
        url: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'WD 2TB Elements Portable External Hard Drive - USB 3.0'
        },
        price: {
            mrp: 4800,
            cost: 4080,
            discount: '15%'
        },
        description: 'USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity, Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7,Reformatting may be required for other operating systems',
        discount: 'Best offer|15% Off',
        tagline: 'Storage Gadegets & More'
    },
    {
        id: 'product16',
        url: 'https://images-na.ssl-images-amazon.com/images/I/71nDX36Y9UL._AC_SL1026_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/71nDX36Y9UL._AC_SL1026_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'AmazonBasics 36 Pack AAA High-Performance Alkaline Batteries, 10-Year Shelf Life, Easy to Open Value Pack'
        },
        price: {
            mrp: 824.25,
            cost: '',
            discount: ''
        },
        description: 'AAA 1.5-volt performance alkaline batteries; ideal for a variety of devices, including game controllers, toys, flashlights, digital cameras, and clocks, 10-year leak-free shelf life; air- and liquid-tight seal locks in the power until it’s needed thanks to the improved design, which includes dual crimps, a new zinc composition, and anti-corrosion components, Delivers the amount of power needed for a specific device; ideal for game controllers, toys, flashlights, digital cameras, clocks, and more, Note: these batteries are NOT rechargeable. For reusable options, check out AmazonBasics rechargeable batteries',
        discount: '',
        tagline: 'Storage Battery & More'
    },
    {
        id: 'product17',
        url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Men\'s Clothing',
            longTitle: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
        },
        price: {
            mrp: 8246.25,
            cost: 10499.25,
            discount: '21%'
        },
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        discount: 'Extra 21% Off',
        tagline: 'Laptop bag cover'
    },
    {
        id: 'product18',
        url: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
        },
        price: {
            mrp: 5247,
            cost: '',
            discount: ''
        },
        description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
        discount: '',
        tagline: 'Laptop bag cover'
    },
    {
        id: 'product19',
        url: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
        title: {
            shortTitle: 'Men\'s Clothing',
            longTitle: 'Mens Cotton Jacket'
        },
        price: {
            mrp: 4199.25,
            cost: 5400,
            discount: '22%'
        },
        description: 'Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors., Good gift choice for you or your family member., A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.',
        discount: 'Extra 22% Off',
        tagline: 'Cotton Jacket for Men'
    },
    {
        id: 'product20',
        url: 'https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SL1500_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/91oiSVwU7OL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Appliances',
            longTitle: 'mazonBasics Stainless Steel Portable Fast, Electric Hot Water Kettle for Tea and Coffee, 1 Liter, Silver'
        },
        price: {
            mrp: 1649.25,
            cost: '',
            discount: ''
        },
        description: 'Cordless design allows for easy filling and serving; Power base with 30-inch power cord for flexible placement, plus cord wrap for compact storage, Electric water kettle with 1.0-liter capacity and 1500 watts of power for fast results (120V-60Hz), Concealed heating element; BPA-free food-contact materials; Removable filter for easy cleaning, Automatic shutoff with boil-dry protection for safety and peace of mind; Water window for precise filling and checking levels at a glance',
        discount: '',
        tagline: 'Hot water Kettle'
    },
    {
        id: 'product21',
        url: 'https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/81%2BjNVOUsJL._AC_SL1500_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Bose QuietComfort 35 II Wireless Bluetooth Headphones, Noise-Cancelling, with Alexa voice control - Black'
        },
        price: {
            mrp: 22425,
            cost: 26175,
            discount: '14%'
        },
        description: 'Three levels of world-class noise cancellation for better listening experience in any environment, Alexa-enabled for voice access to music, information, and more, Noise-rejecting dual-microphone system for clear sound and voice pick-up, Hassle-free Bluetooth pairing, personalized settings, access to future updates, and more through the Bose connect app',
        discount: 'Best Offer|14%',
        tagline: 'Wireless Bluetooth Headphones'
    },
    {
        id: 'product22',
        url: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin'
        },
        price: {
            mrp: 44925,
            cost: '',
            discount: ''
        },
        description: '21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology., No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors., Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz',
        discount: '',
        tagline: '21.5 inches Laptop '
    },
    {
        id: 'product23',
        url: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
        title: {
            shortTitle: 'Jewellery',
            longTitle: 'Pierced Owl Rose Gold Plated Stainless Steel Double'
        },
        price: {
            mrp: 824.25,
            cost: 1236.75,
            discount: '33%'
        },
        description: 'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
        discount: 'Grab Now 33% off',
        tagline: 'Rose Gold Earrings'
    },
    {
        id: 'product24',
        url: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED'
        },
        price: {
            mrp: 67499.25,
            cost: 74999.25,
            discount: '10%'
        },
        description: '49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag',
        discount: 'Extra 10% off',
        tagline: 'Gaming Monitor'
    },
    {
        id: 'product25',
        url: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
        title: {
            shortTitle: 'Jewellery',
            longTitle: 'White Gold Plated Princess'
        },
        price: {
            mrp: 749.25,
            cost: '',
            discount: ''
        },
        description: 'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine\'s Day...',
        discount: '',
        tagline: 'Diamond Ring'
    },
    {
        id: 'product26',
        url: 'https://images-na.ssl-images-amazon.com/images/I/61EgKv96u2L._AC_SL1000_.jpg',
        detailUrl: 'https://images-na.ssl-images-amazon.com/images/I/61EgKv96u2L._AC_SL1000_.jpg',
        title: {
            shortTitle: 'Appliances',
            longTitle: 'MyQ Smart Garage Door Opener Chamberlain MYQ-G0301 - Wireless & Wi-Fi enabled Garage Hub with Smartphone Control, 1 Pack, Black'
        },
        price: {
            mrp: 3708.75,
            cost: 6000,
            discount: '38%'
        },
        description: 'Smart garage control open and close your garage door from anywhere with your smartphone through the myQ App, Universal – Easy-to-add functionality to upgrade your existing garage door opener. Works with all major brands of garage door openers made after 1993 that have standard safety sensors, Requirements needed to start - a router with 2.4 gigahertz Wi-Fi frequency, router with 802.11 B/G/N, a router within 50 feet of the myQ Smart Garage Hub (more details in PDF user manual), Guest access: Securely invite up to three people to control your garage with the myQ guest feature (Note: Not intended for guests under the age of 13)',
        discount: 'Best Offer|38% off',
        tagline: 'Smart Door opener'
    },
    {
        id: 'product27',
        url: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
        title: {
            shortTitle: 'Women\'s Clothing',
            longTitle: 'Opna Women\'s Short Sleeve Moisture'
        },
        price: {
            mrp: 596.25,
            cost: '',
            discount: ''
        },
        description: '100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort',
        discount: '',
        tagline: 'Short sleeve dress for women'
    },
    {
        id: 'product28',
        url: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
        title: {
            shortTitle: 'Men\'s Clothing',
            longTitle: 'Mens Casual Premium Slim Fit T-Shirts'
        },
        price: {
            mrp: 1672.5,
            cost: '',
            discount: ''
        },
        description: 'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans., The Henley style round neckline includes a three-button placket.',
        discount: '',
        tagline: 'Man\'s Casual T-Shirts'
    },
    {
        id: 'product29',
        url: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
        title: {
            shortTitle: 'Women\'s Clothing',
            longTitle: 'MBJ Women\'s Solid Short Sleeve Boat Neck V'
        },
        price: {
            mrp: 1263.75,
            cost: 1499.25,
            discount: '15%'
        },
        description: '95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem',
        discount: 'Flat 15% off',
        tagline: 'Short Dress for Women'
    },
    {
        id: 'product30',
        url: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        detailUrl: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
        title: {
            shortTitle: 'Electronics',
            longTitle: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s'
        },
        price: {
            mrp: 8246.25,
            cost: '',
            discount: ''
        },
        description: 'Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads, Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive, The perfect balance of performance and reliability, Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
        discount: '',
        tagline: 'Best Seller'
    }
];

module.exports = products;
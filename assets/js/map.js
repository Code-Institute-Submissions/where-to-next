        // colmar map
        const colmarMarkers = [{
                coords: { lat: 48.07368, lng: 7.35665 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>Hotel Le Marechal - Les Collectionneurs</h3><p>From €95/night</p><p> Hostellerie Le Maréchal is set on the canal</p><p>Traditional and regional gourmet cuisine </p><a href="https://www.booking.com/hotel/fr/hostellerie-le-marechal.en-gb.html?aid=356980;label=gog235jc-1DCAsoTUIXaG9zdGVsbGVyaWUtbGUtbWFyZWNoYWxIM1gDaFCIAQGYAQm4ARfIAQzYAQPoAQGIAgGoAgO4AquB9P4FwAIB0gIkNGQ4ODFkMDMtMmEzZS00Y2ZhLWI2M2EtZDg3ZTFiMGQ2YTEy2AIE4AIB;sid=8f5d6c7740e4b688a551571a0ae3738e;dist=0&keep_landing=1&sb_price_type=total&type=total&" target="_blank">"View on Booking.com</a>'
            }, {
                coords: { lat: 48.07656, lng: 7.35861 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Restaurant La Soï</h3><p>They only serve tarte flambée but it is the best tarte flambée in town!</p><p>Flammekueche, Flammkuchen or tarte flambée is a speciality of the historic regions of Alsace, Saarland, Baden and Pfalz at the French-German border region.</p><a href="https://www.lasoicolmar.fr/">www.lasoicolmar.fr/</a>'
            }, {
                // https://www.thecrazytourist.com/15-best-things-colmar-france/
                coords: { lat: 48.07689, lng: 7.35817 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Maison Pfister</h3><p>In a city of sublime Disney-esque houses Maison Pfister takes the cake. It was constructed for the wealthy hatter Ludwig Schurer in 1537 and is implausibly cute and grand at the same time. You’ll be stopped in your tracks when you see this marvel of Alsatian renaissance architecture.</p>'
            }];

        // Athens map

const athensMarkers = [{
    // https://www.timeout.com/athens/restaurants/best-restaurants-in-athens & https://klimataria.gr/
                coords: { lat: 37.98045, lng: 23.72620 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Klimataria</h3> <p>For traditional Greek food, music and dance. This family-run taverna has been going strong since 1927, offering evenings packed with Mediterranean food, music and dance – a combination Greeks love. The tis oras – a grilled meat platter – is what you should go for. It includes biftekia, grilled meat patties seasoned with spices, as well as lamb and pork chops. Plus, considering Klimataria translates as ‘grape vines’, it’s no surprise the wine served here is always excellent. </p><a href="https://klimataria.gr/" target="_blank">klimataria.gr</a>'
            }, {    
                // https://www.booking.com/searchresults.en-gb.html?aid=356980&label=gog235jc-1DCAIoXDgbSAlYA2hQiAEBmAEJuAEXyAEM2AED6AEB-AECiAIBqAIDuAKVm_n-BcACAdICJDM3OTQ4NTcxLWIxN2UtNDhmNi1iZjQwLTJmNjdkMDFlNGMyNdgCBOACAQ&sb=1&sb_lp=1&src=country&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Fcountry%2Fgr.en-gb.html%3Faid%3D356980%3Blabel%3Dgog235jc-1DCAIoXDgbSAlYA2hQiAEBmAEJuAEXyAEM2AED6AEB-AECiAIBqAIDuAKVm_n-BcACAdICJDM3OTQ4NTcxLWIxN2UtNDhmNi1iZjQwLTJmNjdkMDFlNGMyNdgCBOACAQ%3B&ss=Athens%2C+Attica%2C+Greece&is_ski_area=0&ssne=Greece&ssne_untouched=Greece&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&ss_raw=athens+Greece&ac_position=0&ac_langcode=en&ac_click_type=b&dest_id=-814876&dest_type=city&iata=ATH&place_id_lat=37.975659&place_id_lon=23.734866&search_pageview_id=79a1858a27bb0013&search_selected=true

                coords: { lat: 37.97544, lng: 23.73215 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>Electra Metropolis</h3><p></p><a href="https://www.booking.com/hotel/gr/electra-metropolis.en-gb.html?aid=356980;label=gog235jc-1DCAIoXDgbSAlYA2hQiAEBmAEJuAEXyAEM2AED6AEB-AECiAIBqAIDuAKVm_n-BcACAdICJDM3OTQ4NTcxLWIxN2UtNDhmNi1iZjQwLTJmNjdkMDFlNGMyNdgCBOACAQ;sid=8f5d6c7740e4b688a551571a0ae3738e;dest_id=-814876;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1608404391;srpvid=8e738593300601c6;type=total;ucfs=1&#hotelTmpl" target="_blank">View on Booking.com</a>'
            }, 
        {           
            // https://www.planetware.com/tourist-attractions-/athens-gr-ath-ath.htm
                coords: { lat: 37.97173, lng: 23.72568 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>The Acropolis</h3><p>Few sights in the world compare to Athens Acropolis, with its Parthenon temple perched high on a rocky crag keeping watch over centuries of civilization. A reminder of the glory of ancient Athens, the Acropolis was the center of the ancient city and functioned as a citadel in its protected hilltop location.</p>'
            }, ];

        // Tbilisi map
        // https://www.foodieflashpacker.com/restaurants-in-tbilisi/
        // https://www.facebook.com/sulicowinebar/
        const tbilisiMarkers = [{
                coords: { lat: 41.70870, lng: 44.80614 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Sulico </h3><p>Suliko is breathtaking. From the moment you walk in to the moment you are seated in the lush gardens, your entire experience is fantastic. This is one of the best date spots in all of Tbilisi. </p> <p>Start your meal with the burrata. It’s perfect and rich but not too heavy. The only thing heavy here is the pours!! The sweet tomato salad is the pinnacle of freshness. This place is located beneath Zandukeli Street in an old brick building. The owner opened the place and immediately enlisted a local wine zealot to train her staff and manage her wines.</p><a href="https://www.facebook.com/sulicowinebar/" target="_blank">Check them out on Facebook</a>'
            }, {
                coords: { lat: 41.70567, lng: 44.78999 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>Bricks Room Hotel</h3><p>Well situated in the centre of Tbilisi City, Bricks Room Hotel offers air-conditioned rooms, a shared lounge, free WiFi and a terrace. The property is set 1.6 miles from Freedom Square, 1.8 miles from Rustaveli Theatre and 1.9 miles from Tbilisi Opera and Ballet Theatre. The accommodation provides a shared kitchen and a concierge service for guests.</p><a href="https://www.booking.com/hotel/ge/bricks-room.en-gb.html?aid=318615;label=New_English_EN_GBIE_5496343105-o3H%2ArANRilZd5LRixj8tfwS217246569576%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi16483151479%3Atiaud-297601666475%3Adsa-55482331735%3Alp1006965%3Ali%3Adec%3Adm;sid=8f5d6c7740e4b688a551571a0ae3738e" target="_blank">View on Booking.com</a>'
            }, 
        {
            // https://www.saltinourhair.com/georgia/tbilisi-georgia/
                coords: { lat: 41.68833, lng: 44.81104 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Sulfur Baths of Old Tbilisi</h3><p>Warm water enriched with minerals from deep underground is used inside the dome-shaped sulfur baths of Old Tbilisi. Around 8:30 AM, make your way to the domes and the mosque-shaped Orbeliani Bathhouse for a few very picturesque photos.</p><a href=""></a>'
            }, ];


        // Vienna map
        const viennaMarkers = [{
            // https://www.timeout.com/vienna/restaurants/best-restaurants-in-vienna
                coords: { lat: 48.19811, lng: 16.36208 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Neni Am Naschmarkt</h3><p>A super-cool all-day restaurant in Vienna’s biggest food market, the Naschmarkt, serving Tel Aviv-style breakfast, lunch and dinner. Grab one of the coveted tables outside, get a plate of the filo cigars filled with spinach and sheep’s cheese and soak up the atmosphere.</p> <p>As well as being a great spot for refuelling mid-shop, Neni serves the best modern Middle Eastern food in the city. The shakshuka is as good as it gets, but it’s worth branching out and ordering the Israeli breakfast: labneh, scrambled eggs, olives, salad and one of Neni’s famous fluffy pittas. Come hungry.</p><a href="https://neni.at/" target="_blank">neni.at</a>'
            }, {
                coords: { lat: 48.20227, lng: 16.37210 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>Grand Hotel Wien</h3><p>Only a 3-minute walk from the Vienna State Opera and the famous Kärntner Straße Shopping Street, the luxurious Grand Hotel Wien offers 5 restaurants, 2 bars, a spa area, and a rooftop terrace with panoramic views of Vienna. Valet parking and free WiFi are available as well.</p><a href="https://www.booking.com/hotel/at/grand-wien.en-gb.html?aid=377399;label=vienna-emzYuM5MFtKA0DtbD2zHFQS286619947823%3Apl%3Ata%3Ap11240%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-269876017%3Alp1006965%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YX-SVbABBf1_4WBEGJjkaYE;sid=8f5d6c7740e4b688a551571a0ae3738e" target="_blank">View on Booking.com</a>'
            }, 
        {
            // https://www.timeout.com/vienna/things-to-do/best-things-to-do-in-vienna
                coords: { lat: 48.21681, lng: 16.39591 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Wiener Riesenrad</h3><p>Standing proudly at the entrance to Prater amusement park, the Riesenrad ferris wheel is to Vienna what the London Eye is to London. Built in 1897, the landmark starred in 1940s thriller ‘The Third Man’, and a ride in one of its 15 stately gondolas really feels like stepping back in time.</p> <p>There’s no better way to see Vienna than from the top of this 200ft-high landmark. After a spin on the Riesenrad, take a stroll through the rather antiquated, not to mention in places rather macabre, historic funfair.</p>'
            }, ];

        // Cascais map
        // https://www.timeout.com/lisbon/restaurants/lambrettazzurra-pizzeria
        // https://www.facebook.com/LambrettazzurraPizzeria

                const cascaisMarkers = [{
                coords: { lat: 38.69838, lng: -9.41999 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Lambrettazzurra Pizzeria</h3><p>Perfect for dinner in the first serious pizzeria in Cascais.</p><p>In the centre of Cascais you will find this restaurant serving delicious cheeses, salami, and hams renowned in Italy, mixed with the taste of the famous San Marzano tomatoes, grown around Vesuvius and the traditional flours of the old mills of the city of Naples, enrich the authentic taste of the famous Pizza Napoletana.</p><a href="https://www.facebook.com/LambrettazzurraPizzeria" target="_blank">Check our their Facebook account</a>'
            }, {
                // https://www.booking.com/hotel/pt/albatroz.en-gb.html?aid=356980;label=gog235jc-1DCAMouwFCB2Nhc2NhaXNICVgDaFCIAQGYAQm4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuLg_P4FwAIB0gIkMjRhYzM0OTItNTI4ZC00M2U0LTk4YTgtNjYyYTk4MmMxNGVj2AIE4AIB

                coords: { lat: 38.70005, lng: -9.41748 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>The Albatroz Hotel</h3><p>Situated on the cliffs of the Estoril Coast, The Albatroz Hotel enjoys superb views of the Cascais Bay. This welcoming and charming 5-star unit has a sea-view swimming pool and a sunny terrace.</p><a href="https://www.booking.com/hotel/pt/albatroz.en-gb.html?aid=356980;label=gog235jc-1DCAMouwFCB2Nhc2NhaXNICVgDaFCIAQGYAQm4ARfIAQzYAQPoAQH4AQKIAgGoAgO4AuLg_P4FwAIB0gIkMjRhYzM0OTItNTI4ZC00M2U0LTk4YTgtNjYyYTk4MmMxNGVj2AIE4AIB" target="_blank">View on Booking.com</a>'
            }, 
        {
            // https://www.thecrazytourist.com/15-best-things-cascais-portugal/
                coords: { lat: 38.69155, lng: -9.43070 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Boca do Inferno</h3><p>On the side of Cascais that faces the open ocean the coastline gets rocky, as you head into the Sintra-Cascais Natural Park. Only a short of walk from the marina is the Boca do Inferno (Hell’s Mouth), a chasm in the limestone cliffs. Try to be here where the surf is choppier to see the ocean surging through the hole in the bluffs and hear it echoing up the chamber.</p>'
            }, ];

        // Sibiu map
        // https://travelaway.me/sibiu-best-restaurants/
        // http://www.jules-restaurant.ro/
                const sibiuMarkers = [{
                coords: { lat: 45.79050, lng: 24.16104 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Jules Bistro</h3><p>A refined and relaxed bistro in the historic center of Sibiu, Jules stands out for its excellent food, lovely selection of wines, and gorgeous summer terrace surrounded by Gothic architecture. The menu is eclectic, but has a French twist, with delicious dishes like Salmon Quiche, Duck Leg Confit, and Chèvre Chaud salad.</p><a href="http://www.jules-restaurant.ro/" target="_blank">Check them out</a>'
            }, {

                // https://www.booking.com/hotel/ro/t-house.en-gb.html?aid=373411;label=city-sibiu-WbeAxHHByzgog2J8%2AvSNugS383257674361%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-261710242742%3Akwd-1520443560%3Alp1006965%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybz4KBg0DTFCTn0pIbYiAXw;sid=8f5d6c7740e4b688a551571a0ae3738e
                coords: { lat: 45.80207, lng: 24.15595 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>T House</h3><p>Situated within less than 0.6 miles of Albert Huet Square and a 12-minute walk of The Council Tower of Sibiu in Sibiu, T House features accommodation with free WiFi and seating area.</p><a href="https://www.booking.com/hotel/ro/t-house.en-gb.html?aid=373411;label=city-sibiu-WbeAxHHByzgog2J8%2AvSNugS383257674361%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-261710242742%3Akwd-1520443560%3Alp1006965%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybz4KBg0DTFCTn0pIbYiAXw;sid=8f5d6c7740e4b688a551571a0ae3738e" target="_blank">View on booking.com</a>'
            }, 
        {
            // https://www.thecrazytourist.com/15-best-things-to-do-in-sibiu-romania/
                coords: { lat: 45.79847, lng: 24.15073 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Bridge of Lies</h3><p>Linking two halves of the Small Square is the oldest iron bridge in Romania.</p>'
            }, ];

        // Namur map
        // https://www.lonelyplanet.com/belgium/wallonia/namur/restaurants
            const namurMarkers = [{
                coords: { lat: 50.46221, lng: 4.86408 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Entre Sambre et Mer</h3><p>Offering great value for quality seafood, this is a family-run restaurant with a warm, unpretentious feel. Daily specials complement a fairly priced menu heavily weighted towards the sea; delicious oysters and other shellfish are highlights alongside full-of-flavour fish preparations. When the weather is fine, dining in the quiet courtyard alongside is a treat.</p>'
            }, {
                // https://www.booking.com/hotel/be/ms-elisabeth.en-gb.html?aid=373411;label=namur-eyPh_eYwT2HGVg6oHnEeWgS406089779927%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-1486720022%3Alp1006965%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybz4KBg0DTFCTn0pIbYiAXw;sid=8f5d6c7740e4b688a551571a0ae3738e
                coords: { lat: 50.46102, lng: 4.86871 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',

                content: '<h3>Péniche d hôtes MS Elisabeth</h3> <p>Within a 7-minute walk from the centre, Péniche d hôtes MS Elisabeth offers rooms decorated with wooden elements and fitted with a private bathroom. Citadelle de Namur is 50 yards away</p> <a href="https://www.booking.com/accommodation/city/be/namur.en-gb.html?aid=373411;label=namur-eyPh_eYwT2HGVg6oHnEeWgS406089779927%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-1486720022%3Alp1006965%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybz4KBg0DTFCTn0pIbYiAXw;sid=8f5d6c7740e4b688a551571a0ae3738e" target="_blank">View on booking.com</a>',
            }, 
        {
            // https://www.planetware.com/tourist-attractions-/namur-namen-b-nm-nn.htm
                coords: { lat: 50.46361, lng: 4.87136 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Church of Notre Dame and Treasury</h3><p>The ecclesiastical treasury here contains the treasure from the monastery of Oignies, which came into the possession of the convent in 1818. Its finest pieces were the work of the goldsmith Pater Hugo von Oignies who lived in the monastery during the 13th century. There are two magnificent pieces of particular acclaim that you should not miss: the cover of a gospel of 1230 from Trier decorated with enamel work, and the goblet of Gilles de Walcourt of 1238.</p>'
            }, ];             
        
        // Rijeka map
        // https://theculturetrip.com/europe/croatia/articles/the-10-best-restaurants-in-rijeka/
        // http://restoran-lovorka.incroatia.info/en/kontakt.html
            const rijekaMarkers = [{
                coords: { lat: 45.34675, lng: 14.40549 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Grill Lovorka</h3><p>A carnivore’s paradise, Grill Lovorka cooks up traditional Balkan and Croatian cuisine with a special focus on barbecued meats.</p><a href="http://restoran-lovorka.incroatia.info/en/kontakt.html" target="_blank">Visit their website</a>'
            }, {
                coords: { lat: 45.32467, lng: 14.44202 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>Apartments Porto Marina</h3><p>Situated 550 yards from The Croatian National Theatre Ivan Zajc in Rijeka, Apartments Porto Marina features accommodation with air conditioning and free WiFi.</p><a href="https://www.booking.com/hotel/hr/apartments-porto-marina.en-gb.html?aid=373411;label=rijeka-QkYM0Th6F%2AyCLDTulsFlpwS388389303072%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-1630451870%3Alp1006965%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ybz4KBg0DTFCTn0pIbYiAXw;sid=8f5d6c7740e4b688a551571a0ae3738e" target="_blank">View on booking.com</a>'
            }, 
        {
            // https://www.planetware.com/tourist-attractions-/rijeka-hr-kv-r.htm
                coords: { lat: 45.32894, lng: 14.43723 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Capuchin Church of Our Lady of Lourdes</h3><p>Built in the early 1900s to mark the 50th anniversary of the miracle of Lourdes, the Capuchin Church of Our Lady of Lourdes (Kapucinska Crkva) is one of the most recognizable attractions and so picture-perfect, it is frequently used on postcards and promotional material. Designed by Budinic, this splendid old church was almost never completed after the project ran into financial problems and was stalled for years. Thanks to generous townsfolk and parishioners, however, donations poured in to complete it, the result being a beautiful neo-Gothic structure with a splendidly ornate façade and an interior rich in detail with frescoes by Romulo Venucci, a local Croatian artist.</p>'
            }, ];
                
        // Paris, France
        // https://www.timeout.com/paris/en/restaurants/the-100-best-restaurants-in-paris
            const parisMarkers = [{
                coords: { lat: 48.88083, lng: 2.35006 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Les Arlots</h3><p>Come for the super-friendly service and leave with a belly filled with love. The wine list is written with as much care and passion as the modern bistro-style menu, putting a spotlight on small producers and natural wines. You’ll be coming back to Les Arlots again and again.</p>'
            }, {
                coords: { lat: 48.86404, lng: 2.37489 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>Hôtel Les Deux Girafes</h3><p>Hôtel Les Deux Girafes is located in Paris, 1.4 miles from Opéra Bastille, and features a fitness centre, a garden and free WiFi. The property is situated 1.5 miles from Pompidou Centre and 2.2 miles from Sainte-Chapelle</p><a href="https://www.booking.com/hotel/fr/les-2-girafes.en-gb.html?aid=377399;label=paris-uIHbvGhhHoK3x6LyNz17SwS382902578055%3Apl%3Ata%3Ap14260%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-269911447%3Alp9046392%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YX-SVbABBf1_4WBEGJjkaYE;sid=8f5d6c7740e4b688a551571a0ae3738e" target="_blank">View on booking.com</a>'
            }, 
        {
            // https://www.fodors.com/world/europe/france/paris/experiences/news/photos/20-ultimate-things-to-do-in-paris
                coords: { lat: 48.85899, lng: 2.29436 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Eiffel Tower</h3><p>The Eiffel Tower is to Paris what the Statue of Liberty is to New York and what Big Ben is to London: the ultimate civic icon. </p>'
            }, ];
               
// Bydgoszcz, Poland
// https://theculturetrip.com/europe/poland/articles/the-best-restaurants-in-bydgoszcz-poland/
            const bydgoszczMarkers = [{
                coords: { lat: 53.12145, lng: 17.99504 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/dining.png',
                content: '<h3>Pierogarnia Stary Młyn</h3><p>With its location on the cool island area where the old mill once was, Pierogarnia Stary Młyn is an ideal spot to try some of Poland’s trademark pierogi (dumplings)</p>'
            }, {
                coords: { lat: 53.12624, lng: 18.00400 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/lodging.png',
                content: '<h3>Apartamenty Bydgostia</h3><p>Located in Bydgoszcz, Apartamenty Bydgostia provides city views and free WiFi, 750 yards from Opera Nova Conference Centre and 0.7 miles from Kochanowski Park.</p><a href="https://www.booking.com/hotel/pl/apartament-bydgostia.en-gb.html?aid=830766;label=bydgoszcz-2mpt6CYW3fQ0bmQFKwdJhQS382784749321%3Apl%3Ata%3Ap1%3Ap21%2C093%2C000%3Aac%3Aap%3Aneg%3Afi%3Atiaud-297601666475%3Akwd-11563970092%3Alp1006965%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YRfRdUUL2hDPeOc6GIaLzvI;sid=8f5d6c7740e4b688a551571a0ae3738e" target="_blank">View on booking.com</a>'
            }, 
        {
            // https://www.thecrazytourist.com/15-best-things-to-do-in-bydgoszcz-poland/
                coords: { lat: 53.12161, lng: 17.99754 },
                iconImage: 'http://maps.google.com/mapfiles/kml/shapes/target.png',
                content: '<h3>Museum of Soap and Dirt</h3><p>Often ranked among the top minor museums in the country, the Museum of Soap and Dirt opened in a tenement house on the north side of Ulica Długa in 2012. Inside there’s a timeline of hygiene, with artefacts like cast-iron bathtubs from the 19th century, utensils for washing and bathing, vintage detergents ads, washing machines, dryers, soaps from all over the world and a replica of a Medieval bathhouse.</p>'
            }, ];

            const colmarMarkersOptions = {
                zoom: 13,
                center: { lat: 48.0794, lng: 7.3585 }};

            const athensMarkersOptions = {
                zoom: 13,
                center: { lat: 37.9838, lng: 23.7275 }};

            const tbilisiMarkersOptions = {
                zoom: 13,
                center: { lat: 41.7151, lng: 44.8271 }};

            const viennaMarkersOptions = {
                zoom: 13,
                center: { lat: 48.2082, lng: 16.3738 }};   
                
            const cascaisMarkersOptions = {
                zoom: 13,
                center: { lat: 38.71733, lng: -9.45156 }};                

            const sibiuMarkersOptions = {
                zoom: 13,
                center: { lat: 45.7936, lng: 24.1213 }};

            const namurMarkersOptions = {
                zoom: 13,
                center: { lat: 50.4674, lng: 4.8720 }};

            const rijekaMarkersOptions = {
                zoom: 13,
                center: { lat: 45.3271, lng: 14.4422 }};

             const parisMarkersOptions = {
                zoom: 13,
                center: { lat: 48.8566, lng: 2.3522 }};

            const bydgoszczMarkersOptions = {
                zoom: 13,
                center: { lat: 53.1235, lng: 18.0084 }};

        function initMap(markers, options) {
            // new map
            var map = new google.maps.Map(document.getElementById(`map`), options);
            // listen for click on map
            google.maps.event.addListener(map, 'click',
                function (event) {
                    // add marker
                    addMarker({ coords: event.latLng });
                });
            // loop through markers
            for (var i = 0; i < markers.length; i++) {
                addMarker(markers[i]);
            }
            // add maeker function
            function addMarker(props) {
                var marker = new google.maps.Marker({
                    position: props.coords,
                    map: map,
                    // icon:props.iconImage
                });
                // check for customer icon
                if (props.iconImage) {
                    // set icon image
                    marker.setIcon(props.iconImage);
                }

                // check content
                if (props.content) {
                    // info window on click
                    var infoWindow = new google.maps.InfoWindow({
                        content: props.content
                    });

                    // listens for click for info window
                    marker.addListener('click', function () {
                        infoWindow.open(map, marker);
                    });
                }
            }
        }


// Colmar, france: lat: 48.0794 lng: 7.3585

// Athens, Greece: lat:37.9838  lng: 23.7275

// Tbilisi, Georgia: lat: 41.7151  lng: 44.8271

// Vienna, Austria: lat:48.2082  lng:16.3738

// Cascais, Portugal: lat:38.6971   lng: 9.4223

// Sibiu, Romania: lat:45.7936  lng:24.1213

// Namur, Belgium: lat:50.4674  lng: 4.8720

// Rijeka, Croatia: lat:45.3271  lng: 14.4422

// Paris, France: lat:48.8566  lng:2.3522

// Bydgoszcz, Poland: lat:53.1235  lng: 18.0084

// markers:

// food: icon40 - http://maps.google.com/mapfiles/kml/shapes/dining.png
// Christmas tree: icon12 - http://maps.google.com/mapfiles/kml/pal2/icon12.png
// bed: icon28 - http://maps.google.com/mapfiles/kml/shapes/lodging.png
// drink/alcohol: icon27 - http://maps.google.com/mapfiles/kml/pal2/icon27.png
// drink/coffee: icon62 - http://maps.google.com/mapfiles/kml/pal2/icon62.png
// church: icon11 - http://maps.google.com/mapfiles/kml/pal2/icon11.png
// flag: icon13 -  http://maps.google.com/mapfiles/kml/shapes/target.png
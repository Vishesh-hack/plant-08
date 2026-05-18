/**
 * Plant Images Mapping
 * Maps plant names to their image paths in the Pics folder
 * Images should be stored as: Pics/[plant-name].jpg or Pics/[plant-name].png
 */

const PLANT_IMAGES = {
    // Original Plants
    'Tomato': 'Pics/tomato.jpg',
    'Basil': 'Pics/basil.jpg',
    'Lettuce': 'Pics/lettuce.jpg',
    'Rose': 'Pics/rose.jpg',
    'Sunflower': 'Pics/sunflower.jpg',
    'Mint': 'Pics/mint.jpg',
    'Parsley': 'Pics/parsley.jpg',
    'Spinach': 'Pics/spinach.jpg',
    'Carrot': 'Pics/carrot.jpg',
    'Cucumber': 'Pics/cucumber.jpg',
    'Tulip': 'Pics/tulip.jpg',
    'Daffodil': 'Pics/daffodil.jpg',
    'Thyme': 'Pics/thyme.jpg',
    'Oregano': 'Pics/oregano.jpg',
    'Bell Pepper': 'Pics/bell-pepper.jpg',
    'Broccoli': 'Pics/broccoli.jpg',
    'Lavender': 'Pics/lavender.jpg',
    'Daisy': 'Pics/daisy.jpg',
    'Sage': 'Pics/sage.jpg',
    'Chives': 'Pics/chives.jpg',
    'Apple': 'Pics/apple.jpg',
    'Banana': 'Pics/banana.jpg',
    'Orange': 'Pics/orange.jpg',
    'Strawberry': 'Pics/strawberry.jpg',
    'Mango': 'Pics/mango.jpg',
    
    // New Crops (Indian)
    'Kulthi': 'Pics/kulthi.jpg',
    'Peanut': 'Pics/peanut.jpg',
    'Tur': 'Pics/tur.jpg',
    'Bajra': 'Pics/bajra.jpg',
    'Cotton': 'Pics/cotton.jpg',
    'Rice': 'Pics/rice.jpg',
    'Wheat': 'Pics/wheat.jpg',
    'Maize': 'Pics/maize.jpg',
    'Sugarcane': 'Pics/sugarcane.jpg',
    'Soybean': 'Pics/soybean.jpg',
    'Chickpea': 'Pics/chickpea.jpg',
    'Lentil': 'Pics/lentil.jpg',
    'Mustard': 'Pics/mustard.jpg',
    'Potato': 'Pics/potato.jpg',
    'Onion': 'Pics/onion.jpg',
    'Garlic': 'Pics/garlic.jpg',
    'Ginger': 'Pics/ginger.jpg',
    'Turmeric': 'Pics/turmeric.jpg',
    'Brinjal': 'Pics/brinjal.jpg',
    'Okra': 'Pics/okra.jpg'
};

/**
 * Get image path for a plant
 * @param {string} plantName - The name of the plant (may include brackets)
 * @returns {string} - The image path or default placeholder
 */
function getPlantImagePath(plantName) {
    if (!plantName) return 'Pics/default-plant.svg';
    
    // Clean plant name (remove brackets like "(Horse gram)")
    const cleanName = plantName.replace(/\s*\(.*?\)\s*/g, '');
    
    // Check if we have a mapping for this plant
    if (PLANT_IMAGES[cleanName]) {
        return PLANT_IMAGES[cleanName];
    }
    
    // Return default placeholder if no specific image found
    return 'Pics/default-plant.svg';
}

// Expose to window for global access
window.PLANT_IMAGES = PLANT_IMAGES;
window.getPlantImagePath = getPlantImagePath;

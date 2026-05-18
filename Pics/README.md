# Plant Images Folder

This folder contains all plant images used throughout the plant-08 application.

## How to Add Images

1. **Download or find plant images** - You can use:
   - Free image sources: Unsplash, Pexels, Pixabay
   - Google Images (with CC license)
   - Your own photographs

2. **File naming convention**: Use lowercase with hyphens
   - Good: `tomato.jpg`, `bell-pepper.jpg`, `horse-gram.jpg`
   - Bad: `Tomato.JPG`, `Bell Pepper.jpg`

3. **Supported formats**: 
   - `.jpg` (recommended - good quality with smaller file size)
   - `.png` (for images that need transparency)
   - `.webp` (modern format for better compression)

4. **Image specifications**:
   - **Size**: 300x300px or larger (will be resized by CSS)
   - **Quality**: High quality, clear photos
   - **Type**: Real plant images (not drawings or illustrations)
   - **File size**: Keep under 200KB per image for performance

5. **Add the filename to `plant-images-map.js`**:
   ```javascript
   'Plant Name': 'Pics/plant-name.jpg',
   ```

## Current Plant Images Needed

### Herbs & Spices
- [ ] basil.jpg
- [ ] mint.jpg
- [ ] parsley.jpg
- [ ] thyme.jpg
- [ ] oregano.jpg
- [ ] sage.jpg
- [ ] chives.jpg
- [ ] ginger.jpg
- [ ] turmeric.jpg

### Vegetables
- [ ] tomato.jpg
- [ ] carrot.jpg
- [ ] cucumber.jpg
- [ ] bell-pepper.jpg
- [ ] broccoli.jpg
- [ ] spinach.jpg
- [ ] lettuce.jpg
- [ ] potato.jpg
- [ ] onion.jpg
- [ ] garlic.jpg
- [ ] brinjal.jpg
- [ ] okra.jpg

### Flowers
- [ ] rose.jpg
- [ ] sunflower.jpg
- [ ] tulip.jpg
- [ ] daffodil.jpg
- [ ] lavender.jpg
- [ ] daisy.jpg

### Fruits
- [ ] apple.jpg
- [ ] banana.jpg
- [ ] orange.jpg
- [ ] strawberry.jpg
- [ ] mango.jpg

### Field Crops (Indian)
- [ ] kulthi.jpg
- [ ] peanut.jpg
- [ ] tur.jpg
- [ ] bajra.jpg
- [ ] cotton.jpg
- [ ] rice.jpg
- [ ] wheat.jpg
- [ ] maize.jpg
- [ ] sugarcane.jpg
- [ ] soybean.jpg
- [ ] chickpea.jpg
- [ ] lentil.jpg
- [ ] mustard.jpg

### Other
- [ ] default-plant.jpg (generic plant/leaf image for fallback)

## Quick Links to Image Sources

1. **Unsplash** - https://unsplash.com (Free, high quality)
2. **Pexels** - https://www.pexels.com (Free, diverse images)
3. **Pixabay** - https://pixabay.com (Free, large collection)
4. **Pxhere** - https://pxhere.com (Free, public domain)

## Usage in Code

The application automatically maps plant names to their image files using `plant-images-map.js`:

```javascript
const imagePath = getPlantImagePath('Tomato');
// Returns: 'Pics/tomato.jpg'
```

The system will use a default placeholder image if a specific plant image is not found.

# Plant-08 Image System Setup Guide

## What I've Created

I've set up a complete image system for the plant-08 application:

### Files Created:
1. **`Pics/` folder** - Main directory for all plant images
2. **`Pics/plant-images-map.js`** - Mapping file that links plant names to their image paths
3. **`Pics/default-plant.svg`** - Default placeholder image (shown when specific image not found)
4. **`Pics/README.md`** - Detailed instructions for adding images

### Updates Made:
- Updated **explore.html** - Added plant-images-map.js script
- Updated **explore.js** - Changed from emoji icons to real plant images using `<img>` tags
- Updated **explore.css** - Added `.plant-image` styling with hover effects
- Updated all other HTML files to include plant-images-map.js:
  - detail.html
  - browse.html
  - guide.html
  - stage.html

## Quick Start: Adding Plant Images

### Step 1: Find Plant Images
Visit one of these free image sites:
- **Unsplash**: https://unsplash.com
- **Pexels**: https://www.pexels.com
- **Pixabay**: https://pixabay.com

### Step 2: Save Images to Pics Folder
Download images and save them as:
```
Pics/tomato.jpg
Pics/basil.jpg
Pics/rose.jpg
Pics/carrot.jpg
... etc
```

**Important**: Use lowercase filenames with hyphens for spaces:
- ✅ Good: `bell-pepper.jpg`
- ❌ Bad: `BellPepper.jpg`, `Bell Pepper.jpg`

### Step 3: That's It!
The system automatically maps plant names to images. Just refresh your browser to see them on:
- **Explore Page** (`explore.html`) - Plant grid cards
- **Browse Page** (`browse.html`) - Search results
- **Detail Page** (`detail.html`) - Plant details

## Image Mapping System

The mapping works like this:

```javascript
// In Pics/plant-images-map.js
const PLANT_IMAGES = {
    'Tomato': 'Pics/tomato.jpg',
    'Basil': 'Pics/basil.jpg',
    'Rose': 'Pics/rose.jpg',
    // ... etc
};
```

### How Plant Names Are Matched:
1. Plant name is cleaned (brackets removed: "Peanut (Groundnut)" → "Peanut")
2. Matched against PLANT_IMAGES mapping
3. If found: uses that image path
4. If not found: uses `Pics/default-plant.svg` (fallback)

## Current Plant Images Needed

### Priority: High (Most Used)
- tomato.jpg
- basil.jpg
- rose.jpg
- carrot.jpg
- cucumber.jpg
- lettuce.jpg

### Priority: Medium (Herbs & Flowers)
- mint.jpg
- parsley.jpg
- thyme.jpg
- oregano.jpg
- sage.jpg
- sunflower.jpg
- tulip.jpg
- lavender.jpg
- daisy.jpg

### Priority: Low (Fruits & Specialty Crops)
- apple.jpg
- banana.jpg
- orange.jpg
- mango.jpg
- kulthi.jpg
- peanut.jpg
- tur.jpg
- wheat.jpg
- rice.jpg

## Image Specifications

- **Size**: 300x300px minimum (will be resized by CSS)
- **Format**: .jpg, .png, or .webp
- **File Size**: Keep under 200KB each for performance
- **Type**: Real plant photos (not illustrations)
- **Quality**: Clear, high-quality images

## Troubleshooting

### Image Not Showing?
1. Check filename matches the mapping (case-sensitive part)
2. Verify file is in `Pics/` folder
3. Clear browser cache (Ctrl+Shift+Del)
4. Check browser console for errors (F12)

### Want to Add a New Plant Image?
1. Download image and save to `Pics/` folder
2. Add entry to `PLANT_IMAGES` object in `Pics/plant-images-map.js`:
   ```javascript
   'Your Plant': 'Pics/your-plant.jpg',
   ```
3. Save and refresh browser

## Example: Adding Tomato Image

### Step 1: Download
Download tomato.jpg from Unsplash

### Step 2: Save
Place in: `Pics/tomato.jpg`

### Step 3: Verify Mapping
Check that `Pics/plant-images-map.js` contains:
```javascript
'Tomato': 'Pics/tomato.jpg',
```
(It should already be there!)

### Step 4: Test
Go to explore.html and search for "Tomato" - image should appear!

## Technical Details

### How Images Are Used

**Explore Page (`explore.js`):**
```javascript
const imagePath = getPlantImagePath(plant.name);
// Returns: 'Pics/tomato.jpg' or 'Pics/default-plant.svg'

// Then used in HTML:
<img src="${imagePath}" alt="${plant.name}" onerror="this.src='Pics/default-plant.svg'">
```

**CSS Styling (`explore.css`):**
```css
.plant-image {
    width: 100%;
    height: 160px;
    object-fit: cover;        /* Crops image to fit box */
    transition: transform 0.3s ease;
}

.plant-image img:hover {
    transform: scale(1.05);   /* Zoom on hover */
}
```

## Notes

- The system gracefully falls back to `default-plant.svg` if images are missing
- Images are only loaded when needed (lazy loading not implemented yet)
- No image optimization is done automatically (consider using online tools)
- Consider using a CDN for production deployment

## Support

If you need to:
- **Add more plants**: Update `PLANT_IMAGES` in `plant-images-map.js`
- **Change default image**: Update `default-plant.svg` or replace with .jpg
- **Optimize images**: Use online tools like TinyPNG or Squoosh
- **Batch rename files**: Use PowerShell: `Get-ChildItem | Rename-Item -NewName {...}`

Enjoy your plant images! 🌿

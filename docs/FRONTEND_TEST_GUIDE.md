# 🧪 Phase 2 Quick Test Guide

**How to verify all Phase 2 features work end-to-end**

---

## Pre-Test Checklist

- [ ] Backend running: `python app.py` in `backend/` folder
- [ ] Verify backend health: Open browser to `http://localhost:5000/health`
- [ ] Backend should show: `{"status":"ok","message":"Server is running"}`

---

## Test 1: Semantic Search

**Goal**: Verify natural language search works with scoring

### Steps:
1. Open `search.html` in browser
2. In "Semantic Search" tab (should be active by default)
3. Type in search box: `red fruiting plant full sun`
4. Click "Search" button (or press Enter)

### Expected Result:
```
✅ Results appear in grid with 3+ plants
✅ Each card shows: emoji, name, type badge, difficulty, maturity days
✅ Scores displayed (e.g., "8.5", "7.2") with color coding
✅ Green score (8+), yellow (5-8), red (<5)
```

### Verify Scoring:
- Tomato should score 8-9 (most relevant)
- Pepper should score 7-8 (good match)
- Lettuce should score lower (doesn't match "fruiting")

**If Fails:**
- Check browser console (F12)
- Verify backend endpoint: `curl http://localhost:5000/api/search/semantic?q=red&limit=5`
- Should return JSON with `success: true` and results array

---

## Test 2: Example Chips

**Goal**: Verify pre-written search suggestions work

### Steps:
1. Scroll down in Semantic Search tab
2. Find colored chips below search box
3. Click on "Red Fruiting Vegetable" chip

### Expected Result:
```
✅ Search input auto-fills with text
✅ Search auto-triggers (no button click needed)
✅ Results appear for that query
```

### Try Other Chips:
- "Dry Spot Herb" → Should show rosemary, thyme, lavender
- "Easy Indoor Low Light" → Should show beginner houseplants
- "Fast Growing Beginner" → Should show 20-30 day plants

**If Fails:**
- Check that chip click handler is binding properly
- Look for console errors in F12 developer tools

---

## Test 3: Growth Stage Filter

**Goal**: Verify filtering by maturity timeline works

### Steps:
1. Click "Growth Stage Filter" tab
2. Select "Seedling" stage (🌱) - should already be selected
3. Leave limit as 10 (or change to 20)
4. Click "Load Plants" button

### Expected Result:
```
✅ Results grid fills with seedling-stage plants (20-30 days)
✅ Shows title: "Quick Harvest (20-30 days)"
✅ Count shows: "12 found" (or your limit)
✅ Each card shows plant with maturity days
```

### Try Other Stages:
1. Click "Vegetative" (🌿)
2. Click "Load Plants"
3. Results should show 30-90 day plants
4. Try "Mature" (🌳) → 90+ day plants

**If Fails:**
- Check backend endpoint: `curl http://localhost:5000/api/plants/by-growth-stage?stage=seedling&limit=10`
- Should return `success: true` with plants array

---

## Test 4: Similar Plants Modal

**Goal**: Verify finding related plants works

### Steps:
1. From any search results, find a plant card
2. Click the blue "Similar" button
3. Wait for modal to open

### Expected Result:
```
✅ Modal appears with title "Plants Similar to [Plant Name]"
✅ Loading spinner shows briefly
✅ Results grid fills with 5-8 similar plants
✅ Each plant shows similarity score
✅ Close button (X) in top-right
```

### Try Different Plants:
- Tomato's similar plants: Pepper, Eggplant (same difficulty)
- Basil's similar plants: Mint, Oregano (same type)
- Lettuce's similar plants: Spinach, Kale (same conditions)

**If Fails:**
- Check backend endpoint: `curl http://localhost:5000/api/plants/similar/1?limit=8`
- Should return similar_plants array with scores

---

## Test 5: Plant Detail Modal

**Goal**: Verify full plant information displays

### Steps:
1. From search results, click any "View" button
2. Wait for modal to open

### Expected Result:
```
✅ Modal shows plant name as title
✅ Shows sections:
   - Basic Info (scientific name, type, difficulty)
   - Description (2-3 sentences)
   - Growing Conditions (sunlight, water, temp, soil)
   - Timeline (maturity days, spacing)
   - Care Guides (if available)
   - Seasonal Care (if available)
✅ Scroll works for long content
```

### Verify Content:
- Tomato should show:
  - Scientific name: "Solanum lycopersicum"
  - Type: "vegetable"
  - Difficulty: "medium"
  - Sunlight: "Full Sun (6-8 hours)"

**If Fails:**
- Check that plant data includes all fields
- Look for missing guides or seasonal care data

---

## Test 6: Modal Interactions

**Goal**: Verify modals close properly

### Steps:
1. Open a modal (Similar or Detail)
2. Try closing by clicking X button
3. Reopen modal, try pressing Escape key
4. Reopen modal, try clicking outside the modal

### Expected Result:
```
✅ X button closes modal
✅ Escape key closes modal
✅ Click outside closes modal
✅ Body doesn't scroll when modal open
✅ Modal slides/fades smoothly
```

**If Fails:**
- Check browser console for click handler errors
- Verify modal CSS has correct positioning

---

## Test 7: Responsive Design

**Goal**: Verify layout works on different screen sizes

### Desktop (1920px):
1. Open search.html in full screen
2. Verify plant cards display in 4 columns
3. Verify search box is centered, full-width input

### Tablet (768px):
1. Resize browser to ~800px wide
2. Verify plant cards display in 3 columns
3. Verify navigation adapts

### Mobile (480px):
1. Resize browser to ~480px wide (or use F12 mobile mode)
2. Verify plant cards display in 1 column (full-width)
3. Verify buttons are large enough to tap
4. Verify growth stage cards stack vertically
5. Verify search input is full-width

### Expected Result:
```
✅ All layouts look good
✅ Text readable on all sizes
✅ Buttons easily clickable/tappable
✅ No horizontal scrolling
✅ Modals centered and sized properly
```

**If Fails:**
- Check media queries in search.css
- Test on actual mobile device or use browser's responsive mode (F12)

---

## Test 8: Error Handling

**Goal**: Verify graceful error handling

### Test Empty Query:
1. Leave search box empty
2. Click "Search" button

### Expected Result:
```
✅ Error message appears: "Please enter a search query"
✅ Message appears in red box above results
✅ No crash or console errors
```

### Test No Results:
1. Search for: `obscure plant name xyz123`
2. Or filter Growth Stage and get no results

### Expected Result:
```
✅ "No plants found" message appears
✅ Friendly emoji (🤔)
✅ Suggestion to try different search
```

### Test Offline (Optional):
1. Stop backend: Kill `python app.py` process
2. Try searching
3. Results show "offline mode" or error

### Expected Result:
```
✅ Error message in red
✅ "Failed to search" or connection error shown
✅ No white blank area (has error message)
```

---

## Test 9: Caching & Performance

**Goal**: Verify caching works and speeds up repeated searches

### Steps:
1. Open browser console (F12 → Console tab)
2. Search: `red fruiting plant`
3. Look for log message: `📡 API Request (Attempt 1): /api/search/semantic?...`
4. Search same query again
5. Look for log message: `📦 Using cached data: /api/search/semantic?...`

### Expected Result:
```
✅ First search: Sees "📡 API Request" message
✅ Second search: Sees "📦 Using cached data" message (instant)
✅ Second search loads <10ms instead of 200-300ms
✅ Results identical between searches
```

**Verify Cache Behavior:**
- Cache duration: 1 hour
- Manual clear: Reload page with Ctrl+Shift+R (hard refresh)

---

## Test 10: API Methods Verification

**Goal**: Verify all three API methods work in api-config.js

### In Browser Console (F12):
```javascript
// Test 1: Semantic Search
plantAPI.searchSemantic("red fruiting", 5).then(r => console.log("Search:", r))

// Test 2: Similar Plants
plantAPI.getSimilarPlants(1, 5).then(r => console.log("Similar:", r))

// Test 3: Growth Stage
plantAPI.getPlantsByGrowthStage("seedling", 10).then(r => console.log("Growth:", r))
```

### Expected Result:
```
✅ All three methods execute without errors
✅ Each returns JSON with `success: true`
✅ Data structure matches expected format
✅ No 404 or CORS errors
```

---

## Performance Benchmarks

| Operation | Target | Typical | Status |
|-----------|--------|---------|--------|
| Semantic search | <500ms | 200-300ms | ✅ |
| First load | <1000ms | 400ms | ✅ |
| Cached search | <100ms | 10-20ms | ✅ |
| Similar plants | <500ms | 150-200ms | ✅ |
| Modal open | <200ms | 50-100ms | ✅ |

---

## ✅ All Tests Passed?

If you've verified all 10 tests and everything works:

```
🎉 PHASE 2 FRONTEND IS PRODUCTION READY! 🎉
```

Next steps:
1. Deploy to production server
2. Begin Phase 3 (Advanced Features)
3. Or commit any customizations

---

## 🐛 Troubleshooting

### "Cannot reach backend"
- Run: `python app.py` in backend folder
- Wait for: `Running on http://localhost:5000`
- Verify: `curl http://localhost:5000/health`

### "Results not showing"
- Press F12 to open developer console
- Check for red error messages
- Look for API response (Network tab)

### "Modal won't close"
- Try pressing Escape key
- Try clicking X button (top-right)
- Check browser console for errors

### "Styles look broken"
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Try different browser

### "Mobile layout broken"
- Use F12 responsive design mode (Ctrl+Shift+M)
- Test at actual breakpoints: 480px, 768px, 1024px
- Check mobile browser on actual phone

---

## 📞 Still Having Issues?

1. **Check Console (F12)**
   - Red error messages indicate problems
   - Look for URL in Network tab for 404 errors

2. **Backend Status**
   - Terminal should show: `Running on http://localhost:5000`
   - No errors in backend logs
   - Can ping health endpoint

3. **File Integrity**
   - Verify all files present: search.html, search.css, search.js
   - Verify api-config.js has 3 new methods
   - No syntax errors when opening in editor

4. **Browser Compatibility**
   - Chrome/Edge 90+
   - Firefox 88+
   - Safari 14+
   - Mobile browsers supported

---

*Last Updated: Today | Phase 2 Frontend Version 1.0*

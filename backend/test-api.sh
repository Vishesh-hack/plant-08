#!/bin/bash
# Phase 1 Verification Test Script
# Tests all API endpoints and validates responses

echo "🌱 Plant-08 Phase 1 Verification Tests"
echo "========================================"
echo ""

API_URL="http://localhost:5000"
PASS=0
FAIL=0

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: Health Check
echo -n "Test 1: Health Check ... "
if curl -s "${API_URL}/health" | grep -q "healthy"; then
  echo -e "${GREEN}✓ PASS${NC}"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 2: Get All Plants (pagination)
echo -n "Test 2: Get All Plants (pagination) ... "
RESULT=$(curl -s "${API_URL}/api/plants/all?page=1&limit=5")
if echo "$RESULT" | grep -q '"plants"' && echo "$RESULT" | grep -q '"pagination"'; then
  PLANT_COUNT=$(echo "$RESULT" | grep -o '"total":.*[0-9]' | tail -1 | grep -o '[0-9]*')
  echo -e "${GREEN}✓ PASS${NC} (Found $PLANT_COUNT plants)"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 3: Search Plants by Name
echo -n "Test 3: Search Plants (query: tomato) ... "
if curl -s "${API_URL}/api/plants/search?q=tomato" | grep -q "Tomato"; then
  echo -e "${GREEN}✓ PASS${NC}"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 4: Get Single Plant by ID
echo -n "Test 4: Get Single Plant (basil-001) ... "
if curl -s "${API_URL}/api/plant/basil-001" | grep -q "Basil"; then
  echo -e "${GREEN}✓ PASS${NC}"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 5: Get Plants by Type
echo -n "Test 5: Get Plants by Type (herbs) ... "
RESULT=$(curl -s "${API_URL}/api/plants/by-type?type=herb")
if echo "$RESULT" | grep -q '"type":"herb"'; then
  COUNT=$(echo "$RESULT" | grep -o '"count":[0-9]*' | grep -o '[0-9]*')
  echo -e "${GREEN}✓ PASS${NC} (Found $COUNT herbs)"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 6: Get Plant Guides
echo -n "Test 6: Get Plant Guides (basil-001) ... "
if curl -s "${API_URL}/api/plant/basil-001/guides" | grep -q "seasonal_care"; then
  echo -e "${GREEN}✓ PASS${NC}"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 7: Plant Type List
echo -n "Test 7: List Plant Types ... "
RESULT=$(curl -s "${API_URL}/api/admin/plants/list-types")
if echo "$RESULT" | grep -q '"types"'; then
  TYPE_COUNT=$(echo "$RESULT" | grep -o '"count":[0-9]*' | grep -o '[0-9]*')
  echo -e "${GREEN}✓ PASS${NC} (Found $TYPE_COUNT types)"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 8: CORS Headers
echo -n "Test 8: CORS Headers ... "
if curl -s -I "${API_URL}/api/plants/all" | grep -q "Access-Control-Allow-Origin"; then
  echo -e "${GREEN}✓ PASS${NC}"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 9: Error Handling (invalid plant ID)
echo -n "Test 9: Error Handling (invalid ID) ... "
if curl -s "${API_URL}/api/plant/invalid-id" | grep -q '"error"'; then
  echo -e "${GREEN}✓ PASS${NC}"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

# Test 10: Invalid Type Filter
echo -n "Test 10: Invalid Type Filtering ... "
if curl -s "${API_URL}/api/plants/by-type?type=invalid" | grep -q '"error"'; then
  echo -e "${GREEN}✓ PASS${NC}"
  PASS=$((PASS + 1))
else
  echo -e "${RED}✗ FAIL${NC}"
  FAIL=$((FAIL + 1))
fi

echo ""
echo "========================================"
echo -e "${GREEN}Passed: $PASS${NC} | ${RED}Failed: $FAIL${NC}"
echo ""

if [ $FAIL -eq 0 ]; then
  echo -e "${GREEN}✓ All tests passed!${NC}"
  exit 0
else
  echo -e "${RED}✗ Some tests failed${NC}"
  exit 1
fi

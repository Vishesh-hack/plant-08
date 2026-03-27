// ===== Plant Care Guide Data =====
// This file contains detailed care instructions for each plant at different growth stages
// Plants are organized alphabetically by name

const GUIDE_DATA = {
    "3": { // Basil
        "name": "Basil",
        "overview": "Basil is a fragrant herb that's perfect for beginners. It grows quickly and is great for cooking. Pinch off flower buds to encourage leaf growth.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix or light potting soil. Basil seeds are small, so keep them moist.",
                "water": "Keep soil consistently moist. Mist regularly but don't overwater.",
                "sunlight": "Provide 6-8 hours of light daily. Can tolerate indirect light initially.",
                "environment": "Warm, humid conditions are ideal. Temperature is important for basil germination.",
                "temperature": "Requires 70-75°F (21-24°C) for germination. Higher temperatures speed up sprouting.",
                "pest": "Generally disease-free at this stage. Monitor soil moisture."
            },
            "seedling": {
                "soil": "Thin seedlings to 4-6 inches apart. Use well-draining potting soil.",
                "water": "Water when soil surface feels dry. Don't let soil dry out completely.",
                "sunlight": "Provide 12-14 hours of light daily. Can start moving to brighter locations.",
                "environment": "Keep warm and protected from cold drafts.",
                "temperature": "Maintain 65-75°F (18-24°C). Basil is sensitive to cold.",
                "pest": "Few pests at this stage. Watch for fungal issues in humid conditions."
            },
            "tree": {
                "soil": "Plant in well-draining soil. Basil doesn't like soggy conditions.",
                "water": "Water when top inch of soil is dry. Prefer slightly moist conditions but don't overwater.",
                "sunlight": "Needs 6-8 hours of direct sunlight daily. More sun = more flavorful leaves.",
                "environment": "Warm, protected location. Can be grown indoors or outdoors in warm season.",
                "temperature": "Prefers 70-85°F (21-29°C). Cold below 50°F may slow growth.",
                "pest": "Watch for spider mites in hot, dry conditions. Pinch off flowers to promote leaf growth."
            }
        }
    },
    "4": { // Bell Pepper
        "name": "Bell Pepper",
        "overview": "Bell peppers are warm-season vegetables that need heat and consistent water. They produce colorful, tender fruit.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix and keep warm.",
                "water": "Keep soil moist but not soggy.",
                "sunlight": "14-16 hours of bright light.",
                "environment": "Warm, stable conditions.",
                "temperature": "75-80°F (24-27°C) for best germination.",
                "pest": "Monitor damping-off with good drainage."
            },
            "seedling": {
                "soil": "Transplant into potting mix when 4-6 leaves appear.",
                "water": "Water when topsoil dries out.",
                "sunlight": "12-14 hours strong light.",
                "environment": "Avoid cold drafts.",
                "temperature": "65-75°F (18-24°C).",
                "pest": "Watch for aphids and flea beetles."
            },
            "tree": {
                "soil": "Fertile, well-draining soil with compost.",
                "water": "Consistent moisture; 1-2 inches/week.",
                "sunlight": "6-8 hours direct sun.",
                "environment": "Support heavy fruit clusters.",
                "temperature": "70-85°F (21-29°C).",
                "pest": "Prevent blossom-end rot with steady watering and calcium."
            }
        }
    },
    "5": { // Broccoli
        "name": "Broccoli",
        "overview": "Broccoli is a cool-season vegetable that forms heads of edible flower buds. It prefers fertile soil and regular moisture.",
        "stages": {
            "seed": {
                "soil": "Sow in rich, well-draining soil.",
                "water": "Keep soil moist until emergence.",
                "sunlight": "6-8 hours of sunlight.",
                "environment": "Cool conditions encourage head formation.",
                "temperature": "55-75°F (13-24°C).",
                "pest": "Watch for flea beetles and cabbage worms."
            },
            "seedling": {
                "soil": "Space seedlings 18-24 inches apart.",
                "water": "Consistent moisture is critical.",
                "sunlight": "Full sun preferred.",
                "environment": "Temperature 60-70°F (15-21°C).",
                "pest": "Use row covers against cabbage worms."
            },
            "tree": {
                "soil": "Apply balanced fertilizer; keep soil cool with mulch.",
                "water": "Regular watering, especially as heads develop.",
                "sunlight": "6 hours direct sun; afternoon shade in heat.",
                "environment": "Harvest heads before flowers open.",
                "temperature": "60-70°F (15-21°C).",
                "pest": "Monitor for aphids and diseases; practice crop rotation."
            }
        }
    },
    "6": { // Carrot
        "name": "Carrot",
        "overview": "Carrots are root vegetables that do best in deep, loose soil. They need steady moisture for straight roots.",
        "stages": {
            "seed": {
                "soil": "Fine, well-draining soil; avoid stones.",
                "water": "Keep evenly moist until germination.",
                "sunlight": "Full sun (6-8 hours).",
                "environment": "Cool to moderate temperatures.",
                "temperature": "Ideal 55-75°F (13-24°C).",
                "pest": "Protect from birds and keep surface moist."
            },
            "seedling": {
                "soil": "Thin to 2-3 inches apart.",
                "water": "Consistent watering avoids splits.",
                "sunlight": "Full sun; partial shade in hot weather.",
                "environment": "Loosen soil for root growth.",
                "temperature": "Prefers cool 55-70°F (13-21°C).",
                "pest": "Watch for carrot flies; use row covers."
            },
            "tree": {
                "soil": "Keep loose and weed-free with mulch.",
                "water": "1 inch per week evenly distributed.",
                "sunlight": "Full sun with some afternoon shade during heat.",
                "environment": "Harvest at maturity before tough skin forms.",
                "temperature": "Cool weather crop; tolerates 28-80°F but best 60-70°F.",
                "pest": "Control root maggots with crop rotation."
            }
        }
    },
    "7": { // Chives
        "name": "Chives",
        "overview": "Chives are a mild onion-flavored herb with edible flowers. They grow in clumps and are very low-maintenance.",
        "stages": {
            "seed": {
                "soil": "Fine seed-starting mix with good drainage.",
                "water": "Keep moist while germinating.",
                "sunlight": "6 hours of sun daily.",
                "environment": "Cool conditions are fine for chive seeds.",
                "temperature": "55-70°F (13-21°C).",
                "pest": "Monitor for damping off in dense sowings."
            },
            "seedling": {
                "soil": "Thin seedlings to 3-4 inches when true leaves appear.",
                "water": "Regular watering; keep soil evenly moist.",
                "sunlight": "Full sun to part shade.",
                "environment": "Good air circulation prevents disease.",
                "temperature": "60-70°F (16-21°C).",
                "pest": "Keep an eye out for onion thrips."
            },
            "tree": {
                "soil": "Fertile, well-draining soil.",
                "water": "Water weekly, more in heat.",
                "sunlight": "Full sun gives the best flavor.",
                "environment": "Divide clumps every few years to rejuvenate.",
                "temperature": "Tolerates cool and mild climates.",
                "pest": "Remove fungal leaves and avoid overhead watering."
            }
        }
    },
    "8": { // Cucumber
        "name": "Cucumber",
        "overview": "Cucumbers are warm-season vegetables that grow quickly on vines. They prefer warm conditions and consistent watering.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix. Keep moist until germination.",
                "water": "Keep soil consistently moist but not waterlogged.",
                "sunlight": "Provide 10-12 hours of indirect light. Warmth is more important than light.",
                "environment": "Warm, humid environment aids germination.",
                "temperature": "Requires 70-85°F (21-29°C) for germination. Higher temperatures speed up process.",
                "pest": "Monitor for mold if too humid. Ensure adequate air circulation."
            },
            "seedling": {
                "soil": "Transfer to potting soil when true leaves appear. Space 6-12 inches apart.",
                "water": "Water when surface feels dry. Keep consistently moist.",
                "sunlight": "Provide 14-16 hours of light daily. More light = stronger plants.",
                "environment": "Warm, well-ventilated space. Avoid cold drafts.",
                "temperature": "Maintain 70-75°F (21-24°C) for best growth.",
                "pest": "Watch for spider mites and whiteflies. Ensure good air circulation."
            },
            "tree": {
                "soil": "Plant in nutrient-rich soil with plenty of compost. Needs well-draining conditions.",
                "water": "Water deeply and regularly. Provide 1-2 inches of water per week. Moisture is crucial for fruit quality.",
                "sunlight": "Requires 6-8 hours of direct sunlight daily for fruit production.",
                "environment": "Plant on trellises or stakes to save space. Ensure proper support for vines.",
                "temperature": "Thrives in 70-85°F (21-29°C). Sensitive to cold below 60°F (15°C).",
                "pest": "Watch for powdery mildew, beetles, and aphids. Ensure good air circulation between plants."
            }
        }
    },
    "9": { // Daffodil
        "name": "Daffodil",
        "overview": "Daffodils are hardy spring bulbs producing cheerful yellow flowers. They are low-maintenance and deer-resistant.",
        "stages": {
            "seed": {
                "soil": "Use well-draining bulb soil and plant bulbs shallowly.",
                "water": "Water after planting to settle soil.",
                "sunlight": "Full sun to part shade.",
                "environment": "Cool dormant period in winter.",
                "temperature": "Chill needed below 50°F (10°C) for around 12 weeks.",
                "pest": "Avoid bulb rot by preventing standing water."
            },
            "seedling": {
                "soil": "Maintain even moisture while shoots emerge.",
                "water": "Moderate water in growing season.",
                "sunlight": "Full sun to light shade.",
                "environment": "Good drainage is critical.",
                "temperature": "Cool weather preferred 50-65°F (10-18°C).",
                "pest": "Watch for slugs and narcissus bulb fly."
            },
            "tree": {
                "soil": "Let foliage die back naturally before trimming.",
                "water": "Cut watering after foliage dies to promote dormancy.",
                "sunlight": "Keep in sunny spot for next year's blooms.",
                "environment": "Divide clumps every few years if crowded.",
                "temperature": "Very cold-hardy; tolerate freezing winter conditions.",
                "pest": "Protect from rodents digging up bulbs; use wire mesh if needed."
            }
        }
    },
    "10": { // Daisy
        "name": "Daisy",
        "overview": "Daisies are hardy annual/perennial flowers with bright petals. They are easy to grow and attract pollinators.",
        "stages": {
            "seed": {
                "soil": "Use well-draining soil and press seeds lightly.",
                "water": "Keep surface moist until seedlings emerge.",
                "sunlight": "Full sun to part shade.",
                "environment": "Moderate temperatures are ideal.",
                "temperature": "55-70°F (13-21°C).",
                "pest": "Thin seedlings to prevent damping off."
            },
            "seedling": {
                "soil": "Transplant or thin to 8-12 inches apart.",
                "water": "Water regularly but avoid waterlogging.",
                "sunlight": "6-8 hours direct sun.",
                "environment": "Good airflow reduces powdery mildew.",
                "temperature": "60-70°F (15-21°C).",
                "pest": "Remove spent flowers and dead leaves."
            },
            "tree": {
                "soil": "Fertilize lightly and maintain moderate moisture.",
                "water": "Regular watering during dry spells.",
                "sunlight": "Full sun encourages best blooms.",
                "environment": "Deadhead to encourage more flowers.",
                "temperature": "Prefers 65-75°F (18-24°C).",
                "pest": "Watch for aphids and powdery mildew."
            }
        }
    },
    "11": { // Lavender
        "name": "Lavender",
        "overview": "Lavender is a fragrant flower that prefers dry, sunny conditions and excellent drainage. It attracts pollinators and is drought-tolerant once established.",
        "stages": {
            "seed": {
                "soil": "Sow in sandy, well-draining medium.",
                "water": "Keep just moist until germination.",
                "sunlight": "Full sun.",
                "environment": "Warm day, cool night conditions.",
                "temperature": "70-75°F (21-24°C).",
                "pest": "Avoid fungal problems caused by excess moisture."
            },
            "seedling": {
                "soil": "Thin to 8-10 inches; provide good airflow.",
                "water": "Water when dry; avoid overwatering.",
                "sunlight": "At least 8 hours sun.",
                "environment": "Hang on lean soil; high humidity reduces health.",
                "temperature": "65-70°F (18-21°C).",
                "pest": "Monitor root rot; improve drainage if needed."
            },
            "tree": {
                "soil": "Lean, well-draining soil with some gravel.",
                "water": "Water deeply but infrequently after established.",
                "sunlight": "Full sun; avoid shade.",
                "environment": "Prune top growth to maintain shape.",
                "temperature": "Ideal 60-75°F (16-24°C).",
                "pest": "Protect from severe winter wetness."
            }
        }
    },
    "12": { // Lettuce
        "name": "Lettuce",
        "overview": "Lettuce is a cool-season crop that's excellent for beginners. It grows quickly and can be harvested multiple times.",
        "stages": {
            "seed": {
                "soil": "Use light seed-starting mix or potting soil. Keep moist but not waterlogged.",
                "water": "Keep soil moist. Lettuce seeds need moisture to germinate.",
                "sunlight": "Can tolerate lower light initially. 4-6 hours daily is sufficient for germination.",
                "environment": "Cool, moist environment is ideal. Avoid heat.",
                "temperature": "Lettuce prefers cool temperatures: 60-70°F (15-21°C). Can tolerate cooler conditions.",
                "pest": "Generally pest-free as a seed. Monitor soil moisture."
            },
            "seedling": {
                "soil": "Thin to 4-6 inches apart. Use well-draining potting soil.",
                "water": "Keep consistently moist. Don't allow soil to dry out.",
                "sunlight": "Provide 12-14 hours of light daily. Lettuce doesn't require intense sunlight.",
                "environment": "Cool, well-ventilated space. Protect from extreme heat.",
                "temperature": "Keep between 60-65°F (15-18°C) for optimal growth. Can bolt if too warm.",
                "pest": "Watch for slugs and snails. Ensure good air circulation to prevent fungal issues."
            },
            "tree": {
                "soil": "Plant in nutrient-rich, well-draining soil. Add extra compost.",
                "water": "Keep soil consistently moist. Provide 1-1.5 inches of water per week.",
                "sunlight": "Needs 4-6 hours of sunlight daily. Afternoon shade in hot climates prevents bolting.",
                "environment": "Cool-season crop. Plant in spring or fall in warm climates.",
                "temperature": "Best growth at 55-65°F (13-18°C). Will bolt (go to seed) if temperatures exceed 75°F (24°C).",
                "pest": "Monitor for slugs, snails, and aphids. Use row covers to protect. Keep area clean."
            }
        }
    },
    "14": { // Mint
        "name": "Mint",
        "overview": "Mint is a fast-growing herb with aromatic leaves. It's best grown in containers to control spread.",
        "stages": {
            "seed": {
                "soil": "Light, moist seed-starting mix. Press seeds onto surface.",
                "water": "Keep consistently moist but not soggy.",
                "sunlight": "Bright light for 6-8 hours daily.",
                "environment": "Humid and protected from drafts.",
                "temperature": "Ideal 68-70°F (20-21°C).",
                "pest": "Watch for damping off; avoid overwatering."
            },
            "seedling": {
                "soil": "Use well-draining potting mix; thin if crowded.",
                "water": "Water frequently; mint likes moisture.",
                "sunlight": "Provide 4-6 hours of direct sun or bright indirect light.",
                "environment": "High humidity helps leaf development.",
                "temperature": "Keep 65-75°F (18-24°C).",
                "pest": "Inspect for spider mites and whiteflies."
            },
            "tree": {
                "soil": "Keep in rich, well-draining soil with regular feeding.",
                "water": "Water regularly, keeping soil evenly moist.",
                "sunlight": "Part shade to part sun is best to prevent scorching.",
                "environment": "Trim regularly to prevent legginess.",
                "temperature": "Best at 60-70°F (16-21°C).",
                "pest": "Divide and refresh soil yearly to reduce disease build-up."
            }
        }
    },
    "16": { // Oregano
        "name": "Oregano",
        "overview": "Oregano is a hardy herb with bold flavor used in many cuisines. It prefers dry, sunny conditions.",
        "stages": {
            "seed": {
                "soil": "Use well-draining soil and press seeds into surface.",
                "water": "Keep slightly moist until germination.",
                "sunlight": "6-8 hours of direct sunlight.",
                "environment": "Warm, dry environment.",
                "temperature": "70-75°F (21-24°C).",
                "pest": "Monitor powdery mildew in high humidity."
            },
            "seedling": {
                "soil": "Thin to 8-10 inches apart.",
                "water": "Allow soil to dry slightly between waterings.",
                "sunlight": "Full sun.",
                "environment": "Good airflow; avoid overcrowding.",
                "temperature": "65-70°F (18-21°C).",
                "pest": "Use resistance to withstand pests; remove damaged leaves."
            },
            "tree": {
                "soil": "Well-draining soil with small amount of compost.",
                "water": "Water sparingly; drought-tolerant once mature.",
                "sunlight": "Full sun for strong flavor oils.",
                "environment": "Pinch tips to encourage branching.",
                "temperature": "70-85°F (21-29°C).",
                "pest": "Protect from heavy frost or wet winter conditions."
            }
        }
    },
    "17": { // Parsley
        "name": "Parsley",
        "overview": "Parsley is a biennial herb commonly used for garnishing and flavor. It grows slowly but is hardy.",
        "stages": {
            "seed": {
                "soil": "Start in well-draining potting mix. Keep seeds moist.",
                "water": "Maintain even moisture.",
                "sunlight": "Provide 6-8 hours of light daily.",
                "environment": "Cool, stable conditions help germination.",
                "temperature": "Best 60-70°F (15-21°C).",
                "pest": "Watch for slugs and snails in damp soil."
            },
            "seedling": {
                "soil": "Thin seedlings to 8-10 inches apart.",
                "water": "Water when top soil feels dry; avoid soggy soil.",
                "sunlight": "Full to part sun.",
                "environment": "Wind protection helps older leaves stay intact.",
                "temperature": "Stay around 60-70°F (15-21°C).",
                "pest": "Look for caterpillars and aphids."
            },
            "tree": {
                "soil": "Fertilize lightly and keep soil rich and moist.",
                "water": "Regular watering keeping soil moist but draining well.",
                "sunlight": "6 hours direct sun; afternoon shade in heat.",
                "environment": "Mulch to conserve moisture.",
                "temperature": "Hardy to 40°F (4°C) once established.",
                "pest": "Trim old stems and monitor for leaf miners."
            }
        }
    },
    "18": { // Rose
        "name": "Rose",
        "overview": "Roses are classic flowering plants prized for their blooms and fragrance. They need good air circulation and consistent care.",
        "stages": {
            "seed": {
                "soil": "Use a light, well-draining seed-starting mix.",
                "water": "Keep evenly moist but not waterlogged.",
                "sunlight": "Provide 8-10 hours of light daily.",
                "environment": "Cool, sheltered environment helps germination.",
                "temperature": "Maintain 65-75°F (18-24°C).",
                "pest": "Monitor for fungal disease and apply gentle fungicide if needed."
            },
            "seedling": {
                "soil": "Move into rich, well-draining soil and avoid compaction.",
                "water": "Water regularly; allow top soil to dry slightly between waterings.",
                "sunlight": "Provide 6-8 hours of direct sunlight.",
                "environment": "Good airflow reduces mildew and black spot.",
                "temperature": "Ideal 60-70°F (16-21°C).",
                "pest": "Watch for aphids and black spot; remove affected leaves."
            },
            "tree": {
                "soil": "Plant in fertile, well-draining garden soil enriched with compost.",
                "water": "Water deeply once or twice a week based on weather.",
                "sunlight": "Needs at least 6 hours of direct sun per day.",
                "environment": "Prune for shape and airflow. Mulch to retain moisture.",
                "temperature": "Thrives at 65-75°F (18-24°C); protect from frost.",
                "pest": "Control pests with insecticidal soap; monitor for fungal issues."
            }
        }
    },
    "19": { // Sage
        "name": "Sage",
        "overview": "Sage is a woody perennial herb known for its savory leaves. It prefers dry soil and good air circulation.",
        "stages": {
            "seed": {
                "soil": "Well-draining soilless mix.",
                "water": "Keep evenly moist, not saturated.",
                "sunlight": "Full sun to light shade.",
                "environment": "Warm, stable conditions.",
                "temperature": "70°F (21°C) ideal for germination.",
                "pest": "Prevent damping off with air circulation."
            },
            "seedling": {
                "soil": "Transplant into lean, sandy soil.",
                "water": "Allow soil to dry between waterings.",
                "sunlight": "6-8 hours of sun daily.",
                "environment": "Avoid overly rich soil.",
                "temperature": "65-75°F (18-24°C).",
                "pest": "Inspect for spider mites."
            },
            "tree": {
                "soil": "Light, well-draining soil with minimal fertility.",
                "water": "Water moderately; drought tolerant once established.",
                "sunlight": "Prefers full sun.",
                "environment": "Prune to maintain shape and airflow.",
                "temperature": "Comfortable at 60-70°F (16-21°C).",
                "pest": "Avoid root rot; ensure proper drainage."
            }
        }
    },
    "20": { // Spinach
        "name": "Spinach",
        "overview": "Spinach is a cool-season leafy vegetable valued for its nutritional leaves. It is quick growing and good for succession planting.",
        "stages": {
            "seed": {
                "soil": "Sow in fertile, well-drained soil.",
                "water": "Keep evenly moist for best germination.",
                "sunlight": "4-6 hours of sun is sufficient.",
                "environment": "Cool conditions reduce bolting.",
                "temperature": "Ideal 45-65°F (7-18°C).",
                "pest": "Watch for slugs and snails."
            },
            "seedling": {
                "soil": "Thin to proper spacing (3-4 inches).",
                "water": "Keep soil moist; avoid drought stress.",
                "sunlight": "Partial shade or full sun in cool weather.",
                "environment": "Prevent high heat to reduce bolting.",
                "temperature": "Keep 50-60°F (10-15°C).",
                "pest": "Use row covers to protect from leaf miners."
            },
            "tree": {
                "soil": "Feed with balanced fertilizer and keep mulch in place.",
                "water": "Regular watering with 1 inch per week.",
                "sunlight": "4-6 hours direct sunlight; shade in hot climates.",
                "environment": "Cool-season crop, harvest before heat arrives.",
                "temperature": "Keep between 50-65°F (10-18°C).",
                "pest": "Avoid bolting with consistent water and cooler soil."
            }
        }
    },
    "22": { // Sunflower
        "name": "Sunflower",
        "overview": "Sunflowers are tall, cheerful flowers that follow the sun. They are easy to grow and great for pollinators.",
        "stages": {
            "seed": {
                "soil": "Sow in loose, well-draining soil.",
                "water": "Keep soil moist until germination.",
                "sunlight": "Full sun (8-10 hours daily) is ideal.",
                "environment": "Open, sunny location with protection from strong winds.",
                "temperature": "Warm 70-78°F (21-26°C) for best germination.",
                "pest": "Check for cutworms; use collars around seedlings."
            },
            "seedling": {
                "soil": "Thin seedlings to avoid crowding and allow root growth.",
                "water": "Water deeply once a week, more in hot weather.",
                "sunlight": "Maintain full sun exposure.",
                "environment": "Stake taller varieties to prevent lodging.",
                "temperature": "Keep over 65°F (18°C) for steady growth.",
                "pest": "Watch for aphids and slugs."
            },
            "tree": {
                "soil": "Fertilize with balanced feed and maintain good drainage.",
                "water": "Keep evenly moist, especially when buds form.",
                "sunlight": "Needs full sun and 6-8 hours of direct light.",
                "environment": "Support large heads in windy areas.",
                "temperature": "Enjoys 70-85°F (21-29°C).",
                "pest": "Harvest seeds before birds strip heads; protect as needed."
            }
        }
    },
    "23": { // Thyme
        "name": "Thyme",
        "overview": "Thyme is a fragrant herb with small leaves and a woody stem. It thrives in lean soil and full sun.",
        "stages": {
            "seed": {
                "soil": "Light, sandy, well-draining soil.",
                "water": "Moist but never soggy.",
                "sunlight": "Full sun for at least 6-8 hours.",
                "environment": "Warm location with good airflow.",
                "temperature": "70-80°F (21-27°C) for germination.",
                "pest": "Keep humidity moderate to avoid mildew."
            },
            "seedling": {
                "soil": "Thin to 6-8 inches apart in nutrient-poor soil.",
                "water": "Water sparingly; thyme is drought tolerant.",
                "sunlight": "Full sun.",
                "environment": "Avoid overly rich soil that reduces flavor.",
                "temperature": "65-75°F (18-24°C).",
                "pest": "Prune to prevent sparking mold."
            },
            "tree": {
                "soil": "Sandy, well-drained soil with a touch of compost.",
                "water": "Water deeply, then allow drying between waterings.",
                "sunlight": "Full sun best; bright light in containers.",
                "environment": "Harvest frequently to encourage bushy growth.",
                "temperature": "Thrives 60-75°F (15-24°C).",
                "pest": "Check for root rot if overwatered."
            }
        }
    },
    "24": { // Tomato
        "name": "Tomato",
        "overview": "Tomatoes are warm-season vegetables that require full sunlight and consistent watering. They are one of the most rewarding plants for beginners to grow.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix or light potting soil. Keep moist but not waterlogged. Ensure good drainage.",
                "water": "Keep soil consistently moist. Water gently to avoid disturbing seeds. Mist lightly if needed.",
                "sunlight": "Provide 12-16 hours of indirect light per day. Use grow lights if starting indoors.",
                "environment": "Keep in a warm, humid environment. Ideal for seed germination trays with a humidity dome.",
                "temperature": "Maintain 70-80°F (21-27°C) for optimal germination. Nighttime can be slightly cooler.",
                "pest": "Monitor for fungal issues in humid environments. Ensure good air circulation."
            },
            "seedling": {
                "soil": "Transfer to potting soil when 2-3 leaves appear. Ensure well-draining mix.",
                "water": "Water when top inch of soil feels dry. Avoid water on leaves.",
                "sunlight": "Provide 14-16 hours of bright light daily. Gradually acclimatize to outdoor conditions.",
                "environment": "Keep away from drafts. Provide adequate spacing between seedlings for air circulation.",
                "temperature": "Maintain 65-75°F (18-24°C). Can tolerate slightly cooler nights.",
                "pest": "Check for damping-off disease. Ensure good drainage and air circulation."
            },
            "tree": {
                "soil": "Plant in nutrient-rich garden soil or large container with compost mixed in.",
                "water": "Water deeply 1-2 times per week. Provide 1-2 inches of water per week. Consistent moisture is key.",
                "sunlight": "Requires 6-8 hours of direct sunlight daily for best fruit production.",
                "environment": "Plant in warm location after last frost. Support with stakes or cages.",
                "temperature": "Thrives in 70-85°F (21-29°C). Dies in frost. Plant only after all danger of frost has passed.",
                "pest": "Watch for aphids, hornworms, and spider mites. Use natural pesticides if needed. Check leaves regularly."
            }
        }
    },
    "25": { // Tulip
        "name": "Tulip",
        "overview": "Tulips are spring-blooming bulbs with bright flowers. They need a cold period and well-draining bulbs soil.",
        "stages": {
            "seed": {
                "soil": "Start in bulb mix or well-draining compost.",
                "water": "Keep evenly moist until sprouts appear.",
                "sunlight": "Bright light; partial shade OK.",
                "environment": "Cool storage then cool soil after planting.",
                "temperature": "Chill bulbs to 35-45°F (2-7°C) before planting.",
                "pest": "Protect from rodents digesting bulbs."
            },
            "seedling": {
                "soil": "Feed lightly and avoid waterlogged conditions.",
                "water": "Moderate watering; keep soil slightly moist.",
                "sunlight": "Full to part sun.",
                "environment": "Good drainage to prevent rot.",
                "temperature": "Cool spring temperatures 50-60°F (10-15°C).",
                "pest": "Remove damaged foliage and inspect for disease."
            },
            "tree": {
                "soil": "Dry soil after flowering; reduce water to allow dormancy.",
                "water": "Minimal water as leaves die back.",
                "sunlight": "Full sun for flowering; some shade in hot climates.",
                "environment": "Allow foliage to yellow before cutting back.",
                "temperature": "Withstand chilling winters, avoid extreme heat.",
                "pest": "Control deer and rodents; fungicide for bulb rot if needed."
            }
        }
    }
};

// Tips for each plant (general) - Organized alphabetically by plant ID
const PLANT_TIPS = {
    "1": { // Apple
        "general": [
            "💡 Tip: Thin apples in early summer for larger fruit.",
            "💡 Tip: Prune in late winter while trees are dormant.",
            "💡 Tip: Ensure cross-pollination by planting at least two varieties.",
            "💡 Tip: Monitor for codling moths and aphids regularly."
        ]
    },
    "2": { // Banana
        "general": [
            "💡 Tip: Bananas produce one bunch then die; expect new shoots from roots.",
            "💡 Tip: Support heavy fruit bunches with slings as they develop.",
            "💡 Tip: Keep soil consistently moist during fruiting season.",
            "💡 Tip: Harvest bunches when fruit is still green for longer storage."
        ]
    },
    "3": { // Basil
        "general": [
            "💡 Tip: Pinch off flower buds as soon as they appear to keep the plant producing leaves.",
            "💡 Tip: Harvest from the top and it will branch out more.",
            "💡 Tip: Basil loves warmth - it's sensitive to cold temperatures.",
            "💡 Tip: Best flavor when picked in the morning after the dew dries."
        ]
    },
    "4": { // Bell Pepper
        "general": [
            "💡 Tip: Mulch bell peppers to keep soil evenly moist.",
            "💡 Tip: Ensure night temperatures stay above 55°F (13°C).",
            "💡 Tip: Remove lower leaves to improve airflow.",
            "💡 Tip: Add calcium if blossom-end rot appears."
        ]
    },
    "5": { // Broccoli
        "general": [
            "💡 Tip: Harvest broccoli before heads flower open.",
            "💡 Tip: Keep soil cool and moist using mulch.",
            "💡 Tip: Use row covers against caterpillars.",
            "💡 Tip: After main head harvest, watch for side shoots."
        ]
    },
    "6": { // Carrot
        "general": [
            "💡 Tip: Thin carrots early to prevent forked roots.",
            "💡 Tip: Maintain consistent moisture for straight, tender roots.",
            "💡 Tip: Add sand to heavy soils for better root development.",
            "💡 Tip: Protect from carrot fly with row covers."
        ]
    },
    "7": { // Chives
        "general": [
            "💡 Tip: Cut chives frequently to promote fresh growth.",
            "💡 Tip: Divide every 2-3 years for vigor.",
            "💡 Tip: Mulch lightly in winter to protect crowns.",
            "💡 Tip: Grow in full sun with regular moisture."
        ]
    },
    "8": { // Cucumber
        "general": [
            "💡 Tip: Consistent watering prevents bitter cucumbers.",
            "💡 Tip: Harvest cucumbers regularly to encourage more fruit production.",
            "💡 Tip: Use trellises to save space and improve air circulation.",
            "💡 Tip: Pollination is important - ensure bees or other pollinators can access flowers."
        ]
    },
    "9": { // Daffodil
        "general": [
            "💡 Tip: Daffodils are deer-resistant and low-maintenance.",
            "💡 Tip: Divide crowded clumps every few years after bloom.",
            "💡 Tip: Avoid cutting foliage until it yellows naturally.",
            "💡 Tip: Plant in groups for best visual impact."
        ]
    },
    "10": { // Daisy
        "general": [
            "💡 Tip: Deadhead daisies regularly to encourage more blooms.",
            "💡 Tip: Provide full sun and moderate watering.",
            "💡 Tip: Cut back in late season to promote next-year growth.",
            "💡 Tip: Divide overcrowded clumps every few years."
        ]
    },
    "11": { // Lavender
        "general": [
            "💡 Tip: Avoid excessive fertilizer; lavender thrives in lean soil.",
            "💡 Tip: Trim after flowering to prevent woody growth.",
            "💡 Tip: Provide full sun and good drainage.",
            "💡 Tip: Overwinter in dry, cool conditions for best survival."
        ]
    },
    "12": { // Lettuce
        "general": [
            "💡 Tip: Harvest outer leaves while the plant is small for continuous harvest.",
            "💡 Tip: Lettuce is a cool-season crop - plant in spring or fall.",
            "💡 Tip: Cut-and-come-again varieties allow multiple harvests from one plant.",
            "💡 Tip: Provide afternoon shade in hot climates to prevent bolting."
        ]
    },
    "14": { // Mint
        "general": [
            "💡 Tip: Grow mint in containers to prevent invasive spread.",
            "💡 Tip: Pinch tips regularly to keep plants bushy.",
            "💡 Tip: Avoid overfertilizing to preserve essential oil flavor.",
            "💡 Tip: Harvest leaves in the morning when oil content is highest."
        ]
    },
    "16": { // Oregano
        "general": [
            "💡 Tip: Oregano prefers slightly dry conditions; do not overwater.",
            "💡 Tip: Harvest leaves before flowers open for best aroma.",
            "💡 Tip: Pinch back stems in spring to encourage bushiness.",
            "💡 Tip: Mulch lightly but avoid blocking airflow."
        ]
    },
    "17": { // Parsley
        "general": [
            "💡 Tip: Keep parsley moist for lush leaf growth.",
            "💡 Tip: Cut from the outside first to encourage new shoots.",
            "💡 Tip: Provide partial shade in hot climates.",
            "💡 Tip: Divide clumps every 2-3 years to maintain vigor."
        ]
    },
    "18": { // Rose
        "general": [
            "💡 Tip: Deadhead roses frequently to encourage repeat blooming.",
            "💡 Tip: Apply a layer of mulch to retain moisture and discourage weeds.",
            "💡 Tip: Feed with balanced rose fertilizer during active growth.",
            "💡 Tip: Prune in late winter for better air circulation and shape."
        ]
    },
    "19": { // Sage
        "general": [
            "💡 Tip: Harvest sage leaves often to keep plants productive.",
            "💡 Tip: Do not overwater; let soil dry slightly between irrigation.",
            "💡 Tip: Prune after bloom to prevent legginess.",
            "💡 Tip: Provide full sun with good drainage."
        ]
    },
    "20": { // Spinach
        "general": [
            "💡 Tip: Succession sow spinach every 2-3 weeks for continuous harvest.",
            "💡 Tip: Provide afternoon shade in hot weather to prevent bolting.",
            "💡 Tip: Keep soil consistently moist to avoid bitter leaves.",
            "💡 Tip: Harvest outer leaves first to extend growing period."
        ]
    },
    "22": { // Sunflower
        "general": [
            "💡 Tip: Plant sunflowers where they get full sun and wind protection.",
            "💡 Tip: Stake tall varieties to prevent stem breakage.",
            "💡 Tip: Harvest seeds once heads turn brown and dry.",
            "💡 Tip: Allow some mature heads for birds after cutting."
        ]
    },
    "23": { // Thyme
        "general": [
            "💡 Tip: Prune thyme after flowering to keep it compact.",
            "💡 Tip: Avoid overwatering to prevent root rot.",
            "💡 Tip: Harvest leaves before flowering for best flavor.",
            "💡 Tip: Grow in lean soil to reinforce strong herb flavor."
        ]
    },
    "24": { // Tomato
        "general": [
            "💡 Tip: Prune suckers (shoots between main stem and branches) for better fruit production.",
            "💡 Tip: Once flowering starts, reduce nitrogen fertilizer to encourage fruiting.",
            "💡 Tip: Harvest when fruits are fully colored but still slightly firm.",
            "💡 Tip: Determinate varieties are more compact; indeterminate varieties grow tall and need support."
        ]
    },
    "25": { // Tulip
        "general": [
            "💡 Tip: Allow tulip foliage to yellow before removing to recharge bulbs.",
            "💡 Tip: Plant bulbs 6-8 inches deep for stronger stems.",
            "💡 Tip: Deadhead spent flowers to preserve bulb energy.",
            "💡 Tip: Leave leaves in place until fully withered."
        ]
    }
};

// ===== Convert GUIDE_DATA → PLANTS (REQUIRED FOR EXPLORE PAGE) =====

const PLANTS = Object.keys(GUIDE_DATA).map(id => {
    return {
        id: id,
        name: GUIDE_DATA[id].name,
        category: getCategory(GUIDE_DATA[id].name)
    };
});

// ===== Category Helper Function =====
function getCategory(name) {
    const vegetables = ['Tomato', 'Carrot', 'Cucumber', 'Bell Pepper', 'Broccoli', 'Spinach', 'Lettuce'];
    const herbs = ['Basil', 'Mint', 'Parsley', 'Thyme', 'Oregano', 'Sage', 'Chives'];
    const flowers = ['Rose', 'Sunflower', 'Tulip', 'Daffodil', 'Lavender', 'Daisy'];

    if (vegetables.includes(name)) return 'Vegetable';
    if (herbs.includes(name)) return 'Herb';
    if (flowers.includes(name)) return 'Flower';

    return 'Other';
}

// ===== Plant Care Guide Data =====
// This file contains detailed care instructions for each plant at different growth stages
// Plants are organized alphabetically by name

const GUIDE_DATA = {
    "1": { // Apple
        "name": "Apple",
        "overview": "Apple trees are rewarding to grow and provide fruit for many years. They require well-drained soil, full sunlight, and regular pruning for optimal fruit production.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix or well-draining potting soil. Keep moist but not waterlogged.",
                "water": "Keep soil consistently moist during germination. Mist lightly if needed.",
                "sunlight": "Provide 12-16 hours of indirect light per day. Use grow lights if starting indoors.",
                "environment": "Keep in a warm, humid environment. Best results with stratification (cold period).",
                "temperature": "Maintain 65-75°F (18-24°C). Apple seeds benefit from cold stratification.",
                "pest": "Generally secure at this stage. Monitor for mold and fungal issues."
            },
            "seedling": {
                "soil": "Transfer to potting soil when first leaves appear. Ensure well-draining mix.",
                "water": "Water when top inch of soil feels dry. Avoid water on leaves.",
                "sunlight": "Provide 14-16 hours of bright light daily. Gradually acclimatize to outdoor conditions.",
                "environment": "Keep away from drafts. Provide adequate air circulation.",
                "temperature": "Maintain 60-70°F (15-21°C). Young seedlings prefer cooler conditions.",
                "pest": "Monitor for aphids and spider mites. Ensure good air circulation."
            },
            "tree": {
                "soil": "Plant in nutrient-rich garden soil with good drainage. Mix compost into planting hole.",
                "water": "Water deeply 1-2 times per week during growing season. Ensure deep, consistent moisture.",
                "sunlight": "Requires 6-8 hours of direct sunlight daily for fruit production.",
                "environment": "Plant in full sun location with good air circulation. Support young trees with stakes.",
                "temperature": "Thrives in 60-75°F (15-24°C). Most varieties need winter chill hours.",
                "pest": "Watch for aphids, codling moths, and fungal diseases. Prune for air circulation and disease prevention."
            }
        }
    },
    "2": { // Banana
        "name": "Banana",
        "overview": "Bananas are tropical fruits that require warm temperatures and consistent moisture. They grow quickly and produce fruit within 9-12 months of planting.",
        "stages": {
            "seed": {
                "soil": "Use well-draining potting soil mixed with peat moss. Keep moist but well-draining.",
                "water": "Keep soil consistently moist. Mist regularly to maintain humidity.",
                "sunlight": "Provide 12-14 hours of bright light daily. Bananas prefer warm conditions.",
                "environment": "Warm, humid environment is essential. Use a propagation mat if available.",
                "temperature": "Maintain 75-85°F (24-29°C) for optimal germination and growth.",
                "pest": "Monitor for spider mites and fungal issues in humid conditions."
            },
            "seedling": {
                "soil": "Transfer to larger container when first leaves appear. Use well-draining mix.",
                "water": "Keep soil consistently moist. Bananas prefer regular moisture.",
                "sunlight": "Provide 14-16 hours of bright light. More light encourages faster growth.",
                "environment": "Maintain warm, humid conditions for healthy growth.",
                "temperature": "Maintain 75-85°F (24-29°C). Bananas are very sensitive to cold.",
                "pest": "Watch for spider mites and fungal diseases. Provide good air circulation."
            },
            "tree": {
                "soil": "Plant in rich, well-draining soil with plenty of organic matter.",
                "water": "Water regularly and deeply; bananas need consistently moist soil.",
                "sunlight": "Requires full sun; at least 6-8 hours of direct sunlight daily.",
                "environment": "Protect from strong winds. Plant in location with shelter.",
                "temperature": "Prefers 78-86°F (26-30°C). Dies in frost. Keep warm year-round.",
                "pest": "Monitor for spider mites, scale insects, and fungal leaf spots. Provide good drainage."
            }
        }
    },
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
    "13": { // Mango
        "name": "Mango",
        "overview": "Mango trees are tropical fruits that require warm temperatures and good drainage. They produce sweet, juicy fruit and can live for many decades.",
        "stages": {
            "seed": {
                "soil": "Use well-draining potting soil mixed with peat moss. Keep moist but not waterlogged.",
                "water": "Keep soil consistently moist during germination. Mist regularly.",
                "sunlight": "Provide 12-14 hours of bright light daily. Light supports germination.",
                "environment": "Warm, humid environment essential. Maintain consistent warmth.",
                "temperature": "Maintain 75-85°F (24-29°C) for optimal germination and growth.",
                "pest": "Monitor for fungal issues in humid conditions. Ensure good air circulation."
            },
            "seedling": {
                "soil": "Transfer to larger container when first leaves appear. Use well-draining mix.",
                "water": "Keep soil consistently moist. Mango seedlings prefer regular moisture.",
                "sunlight": "Provide 14-16 hours of bright light. More light encourages faster growth.",
                "environment": "Maintain warm, humid conditions for healthy growth.",
                "temperature": "Maintain 75-85°F (24-29°C). Mangoes are very sensitive to cold.",
                "pest": "Watch for spider mites and fungal diseases. Provide good air circulation."
            },
            "tree": {
                "soil": "Plant in rich, well-draining soil with good organic matter content.",
                "water": "Water regularly; mango trees prefer evenly moist soil but not waterlogged.",
                "sunlight": "Requires full sun; at least 6-8 hours of direct sunlight daily.",
                "environment": "Protect from strong winds. Plant in sheltered, warm location.",
                "temperature": "Prefers 80-90°F (27-32°C). Dies in frost. Keep consistently warm.",
                "pest": "Monitor for scale insects, spider mites, and fungal leaf spots. Good drainage prevents diseases."
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
    "15": { // Orange
        "name": "Orange",
        "overview": "Orange trees are subtropical fruits that produce sweet, juicy fruit. They require full sunlight, regular watering, and well-drained soil for best results.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix or light potting soil. Keep moist but well-draining.",
                "water": "Keep soil consistently moist during germination. Water gently but regularly.",
                "sunlight": "Provide 12-14 hours of indirect light per day. Use grow lights if indoors.",
                "environment": "Warm environment ideal. Maintain consistent moisture.",
                "temperature": "Maintain 70-80°F (21-27°C) for optimal germination.",
                "pest": "Monitor for damping-off disease. Ensure good drainage and air circulation."
            },
            "seedling": {
                "soil": "Transfer to potting soil when first leaves appear. Ensure well-draining mix.",
                "water": "Water when top inch of soil feels dry. Avoid overwatering.",
                "sunlight": "Provide 14-16 hours of bright light daily. Gradually introduce to outdoor light.",
                "environment": "Keep warm and protected from drafts.",
                "temperature": "Maintain 65-75°F (18-24°C). Young trees prefer moderate warmth.",
                "pest": "Watch for spider mites and fungal issues. Ensure adequate air circulation."
            },
            "tree": {
                "soil": "Plant in rich, well-draining soil with compost mixed in.",
                "water": "Water deeply and regularly; orange trees need consistent moisture.",
                "sunlight": "Requires 6-8 hours of direct sunlight daily for sweet fruit.",
                "environment": "Plant in warm, sunny location with shelter from strong winds.",
                "temperature": "Thrives in 65-85°F (18-29°C). Protect from frost and freezing.",
                "pest": "Watch for scale insects, spider mites, and fungal diseases. Prune for air circulation."
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
    "21": { // Strawberry
        "name": "Strawberry",
        "overview": "Strawberries are fast-growing fruits perfect for beginners. They produce sweet berries within 4-5 months and can be grown in garden beds or containers.",
        "stages": {
            "seed": {
                "soil": "Use seed-starting mix or light potting soil. Keep moist but not waterlogged.",
                "water": "Keep soil consistently moist. Mist lightly to prevent drying.",
                "sunlight": "Provide 12-16 hours of indirect light per day. Good light promotes germination.",
                "environment": "Warm environment ideal. Light is important for strawberry seed germination.",
                "temperature": "Maintain 65-75°F (18-24°C) for optimal germination.",
                "pest": "Generally disease-free. Monitor for mold in overly moist conditions."
            },
            "seedling": {
                "soil": "Transfer to potting soil when first leaves appear. Ensure well-draining mix.",
                "water": "Water when soil surface feels dry. Don't let soil dry out completely.",
                "sunlight": "Provide 14-16 hours of bright light daily. Strawberries love light.",
                "environment": "Maintain moderate humidity. Good air circulation is important.",
                "temperature": "Maintain 60-70°F (15-21°C) for healthy seedling growth.",
                "pest": "Watch for spider mites in dry conditions. Monitor for fungal issues."
            },
            "tree": {
                "soil": "Plant in well-draining soil with organic matter. Sandy loam is ideal.",
                "water": "Water regularly and deeply; keep soil consistently moist.",
                "sunlight": "Requires full sun; at least 6-8 hours of direct sunlight daily.",
                "environment": "Plant in raised beds or containers for best drainage.",
                "temperature": "Prefers 60-80°F (15-27°C). Cool nights improve sugar content.",
                "pest": "Watch for spider mites, slugs, and fungal diseases. Good drainage prevents root issues."
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
    "13": { // Mango
        "general": [
            "💡 Tip: Young mango trees benefit from light pruning for shape.",
            "💡 Tip: Mango trees can take 3-5 years to produce fruit.",
            "💡 Tip: Provide consistent watering but avoid waterlogging.",
            "💡 Tip: Harvest when fruit develops color and slight give when squeezed."
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
    "15": { // Orange
        "general": [
            "💡 Tip: Orange trees need 5-6 years before producing significant fruit.",
            "💡 Tip: Thin young fruit to prevent overcrowding and ensure larger oranges.",
            "💡 Tip: Water deeply but allow soil to dry between waterings.",
            "💡 Tip: Harvest when fruit is fully colored and slightly soft to pressure."
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
    "21": { // Strawberry
        "general": [
            "💡 Tip: Replace strawberry plants every 3-4 years for best production.",
            "💡 Tip: Remove runners on June-bearing varieties for stronger plants.",
            "💡 Tip: Mulch around plants to keep berries clean and prevent rot.",
            "💡 Tip: Harvest berries in the morning when they're cool and firm."
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
    },
    "kulthi-001": { // Kulthi (Horse gram)
        "name": "Kulthi (Horse gram)",
        "overview": "Kulthi is a drought-tolerant pulse legume grown for grain and fodder in dry regions. It improves soil fertility through nitrogen fixation.",
        "stages": {
            "seed": {
                "soil": "Light to medium well-drained soils; avoid waterlogging.",
                "water": "Sow in moist soil; keep lightly moist until germination.",
                "sunlight": "Full sun (6-8 hours daily minimum).",
                "environment": "Warm, dry climate is ideal. Provides good air circulation.",
                "temperature": "Maintain 20-25°C for germination.",
                "pest": "Monitor for early pest activity; generally hardy at this stage."
            },
            "seedling": {
                "soil": "Keep soil aerated; avoid waterlogging.",
                "water": "Water lightly as needed; drought tolerant.",
                "sunlight": "Provide full sun exposure.",
                "environment": "Ensure good air circulation between plants.",
                "temperature": "Tolerates 15-35°C well.",
                "pest": "Watch for early leaf damage; usually not an issue at this stage."
            },
            "vegetative": {
                "soil": "Light, well-drained soil; add organic matter if available.",
                "water": "Weed at 25-30 days; avoid waterlogging and keep soil aerated.",
                "sunlight": "Full sun for strong plant development.",
                "environment": "Ensure good spacing between plants.",
                "temperature": "Thrives in warm conditions.",
                "pest": "Monitor for leaf spots; improve drainage if issues appear."
            },
            "mature": {
                "soil": "Well-drained soil to prevent pod rot.",
                "water": "Maintain moderate moisture at pod-fill stage if rainfall is low.",
                "sunlight": "Full sun ensures proper pod development.",
                "environment": "Support plants if needed; ensure air flow.",
                "temperature": "Warm, dry conditions aid pod maturation.",
                "pest": "Harvest when 70-80% pods are dry and seeds rattle in pods."
            }
        }
    },
    "peanut-001": { // Peanut (Groundnut)
        "name": "Peanut (Groundnut)",
        "overview": "Peanut is an important oilseed legume with underground pods. It requires careful moisture management during the pegging stage.",
        "stages": {
            "seed": {
                "soil": "Well-drained sandy loam; prepare fine tilth.",
                "water": "Sow 4-5 cm deep in moist soil; avoid waterlogging.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Warm climate; good air circulation essential.",
                "temperature": "Maintain 25-30°C for best germination.",
                "pest": "Generally secure at this stage; monitor for soil-borne pests."
            },
            "seedling": {
                "soil": "Keep soil aerated and well-drained.",
                "water": "Water moderately; ensure consistent moisture.",
                "sunlight": "Full sun exposure for strong growth.",
                "environment": "Protect from waterlogging.",
                "temperature": "Prefers warm conditions (20-30°C).",
                "pest": "Monitor for early seedling pests."
            },
            "vegetative": {
                "soil": "Light, well-draining soil with organic matter.",
                "water": "Weed at 20 and 35 days; earth up lightly for peg entry.",
                "sunlight": "Full sun ensures vigorous growth.",
                "environment": "Good spacing allows for peg penetration into soil.",
                "temperature": "Warm, sunny conditions ideal.",
                "pest": "Watch for leaf spots and early pest damage."
            },
            "mature": {
                "soil": "Well-drained soil is critical for pod development.",
                "water": "Critical irrigation at flowering, pegging, and pod fill stages.",
                "sunlight": "Full sun for pod maturation.",
                "environment": "Loose soil allows pegs to penetrate and develop pods.",
                "temperature": "Harvest when 70-80% pods mature and shells turn brown.",
                "pest": "Monitor for pod borers; manage moisture to prevent diseases."
            }
        }
    },
    "pigeonpea-001": { // Tur (Pigeon pea)
        "name": "Tur (Pigeon pea)",
        "overview": "Tur is a staple pulse crop that enriches soil through nitrogen fixation. It's semi-arid adapted and valuable for rotational farming.",
        "stages": {
            "seed": {
                "soil": "Well-drained loam to clay loam; prepare fine seedbed.",
                "water": "Sow directly in moist soil; keep soil lightly moist.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Warm climate; adequate spacing between seeds.",
                "temperature": "Maintain 25-30°C for germination.",
                "pest": "Monitor for early pests; generally hardy."
            },
            "seedling": {
                "soil": "Keep soil well-aerated; avoid waterlogging.",
                "water": "Water moderately; tur tolerates some drought.",
                "sunlight": "Full sun exposure essential.",
                "environment": "Ensure good air circulation.",
                "temperature": "Adapts to 15-35°C temperature range.",
                "pest": "Watch for early pest activity; usually minimal."
            },
            "vegetative": {
                "soil": "Well-drained soil; can tolerate poor soils.",
                "water": "Early weeding (25-30 days) is critical; avoid excess moisture.",
                "sunlight": "Full sun for strong plant structure.",
                "environment": "Good spacing prevents disease.",
                "temperature": "Thrives in warm conditions.",
                "pest": "Monitor for pod borers; wilt disease can occur in wet soil."
            },
            "mature": {
                "soil": "Well-drained soil to prevent root diseases.",
                "water": "Irrigation not usually needed except in severe drought.",
                "sunlight": "Full sun aids pod maturation.",
                "environment": "Harvest when pods turn brown and rattle.",
                "temperature": "Pod fill in warm, dry conditions optimal.",
                "pest": "Harvest when 70-80% pods are mature; store dry to prevent pests."
            }
        }
    },
    "bajra-001": { // Bajra (Pearl millet)
        "name": "Bajra (Pearl millet)",
        "overview": "Bajra is a drought-resistant coarse cereal ideal for semi-arid regions. It requires minimal inputs and is highly nutritious.",
        "stages": {
            "seed": {
                "soil": "Light, well-drained soil suitable for millet.",
                "water": "Sow on moist soil; keep lightly moist until germination.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Warm conditions essential; ensure adequate spacing.",
                "temperature": "Maintain 25-30°C for germination.",
                "pest": "Monitor for seed-borne pests."
            },
            "seedling": {
                "soil": "Keep soil well-drained; thin seedlings if needed.",
                "water": "Water lightly as needed; bajra is drought tolerant.",
                "sunlight": "Full sun exposure critical.",
                "environment": "Ensure good air flow between seedlings.",
                "temperature": "Tolerates heat well (20-35°C).",
                "pest": "Watch for early leaf damage."
            },
            "vegetative": {
                "soil": "Light to medium soils; can tolerate poor soil.",
                "water": "Early weed control at 25-30 days is essential.",
                "sunlight": "Full sun for vigorous growth.",
                "environment": "Good spacing allows for air circulation.",
                "temperature": "Warm climate optimal.",
                "pest": "Monitor for shoot fly attack; use resistant varieties."
            },
            "mature": {
                "soil": "Well-drained soil for grain quality.",
                "water": "Minimal irrigation needed; extremely drought tolerant.",
                "sunlight": "Full sun throughout growth.",
                "environment": "Harvest when panicles turn brown and grain is hard.",
                "temperature": "Dry grain harvest when ready.",
                "pest": "Store dry grain in ventilated containers to prevent moisture damage."
            }
        }
    },
    "cotton-001": { // Cotton
        "name": "Cotton",
        "overview": "Cotton is a major fiber crop requiring careful pest management and regular monitoring. It's water-intensive during key growth stages.",
        "stages": {
            "seed": {
                "soil": "Well-prepared, well-drained soil with organic matter.",
                "water": "Sow in moist soil; ensure good drainage.",
                "sunlight": "Full sun (8+ hours daily).",
                "environment": "Warm climate essential; good air circulation.",
                "temperature": "Maintain 20-25°C for germination.",
                "pest": "Monitor for soil pathogens; use treated seeds."
            },
            "seedling": {
                "soil": "Ensure soil remains well-aerated.",
                "water": "Water regularly; avoid waterlogging.",
                "sunlight": "Full sun exposure crucial.",
                "environment": "Provide support as plants grow.",
                "temperature": "Thrives in warm conditions (20-30°C).",
                "pest": "Watch for seedling pests; spray if necessary."
            },
            "vegetative": {
                "soil": "Well-drained fertile soil; add compost if available.",
                "water": "Maintain consistent moisture; critical at flowering.",
                "sunlight": "Full sun for flowering.",
                "environment": "Remove lower leaves to improve air circulation.",
                "temperature": "Warm, dry conditions aid growth.",
                "pest": "Monitor closely for bollworms, jassids, and whiteflies."
            },
            "mature": {
                "soil": "Well-drained soil prevents boll rot.",
                "water": "Irrigation during boll development is critical.",
                "sunlight": "Full sun for boll maturation.",
                "environment": "Ensure good airflow through canopy.",
                "temperature": "Harvest bolls when 80-90% open and lint is white.",
                "pest": "Regular monitoring and integrated pest management essential."
            }
        }
    },
    "rice-001": { // Rice
        "name": "Rice",
        "overview": "Rice is the world's primary staple grain. It requires flooded paddies and careful water management throughout its growth cycle.",
        "stages": {
            "seed": {
                "soil": "Prepare fine seedbed in nursery beds.",
                "water": "Soak seeds 24 hours; maintain moist seedbed.",
                "sunlight": "Full sun for nursery beds.",
                "environment": "Protected nursery conditions optimal.",
                "temperature": "Maintain 25-30°C for germination.",
                "pest": "Monitor for nursery pests; use treated seeds if available."
            },
            "seedling": {
                "soil": "Keep nursery soil moist; transplant at 30-45 days.",
                "water": "Maintain consistent moisture in nursery.",
                "sunlight": "Full sun for healthy seedling growth.",
                "environment": "Adequate spacing in nursery beds.",
                "temperature": "Warm conditions ideal (25-30°C).",
                "pest": "Watch for nursery diseases; manage water carefully."
            },
            "vegetative": {
                "soil": "Transplant to main field with flooded paddies.",
                "water": "Maintain 5-10 cm water depth throughout season.",
                "sunlight": "Full sun exposure in main field.",
                "environment": "Ensure proper water management.",
                "temperature": "Warm season crop; prefers 25-30°C.",
                "pest": "Monitor for stem borers and leaf spots."
            },
            "mature": {
                "soil": "Drain paddies 15-20 days before harvest.",
                "water": "Gradually reduce water level before harvest.",
                "sunlight": "Full sun aids grain filling.",
                "environment": "Harvest when grains turn golden brown.",
                "temperature": "Maturity in warm, dry conditions optimal.",
                "pest": "Harvest when 80-90% grains are mature and hard."
            }
        }
    },
    "wheat-001": { // Wheat
        "name": "Wheat",
        "overview": "Wheat is a staple rabi crop requiring cool season conditions. It's the foundation for many global cuisines.",
        "stages": {
            "seed": {
                "soil": "Well-prepared soil with good fertility.",
                "water": "Sow in moist soil; water lightly.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Cool season crop; plant in rabi.",
                "temperature": "Cool conditions (10-20°C) optimal for germination.",
                "pest": "Monitor for seed-borne pathogens."
            },
            "seedling": {
                "soil": "Ensure good soil contact for germination.",
                "water": "Water regularly until established.",
                "sunlight": "Full sun exposure necessary.",
                "environment": "Adequate spacing between plants.",
                "temperature": "Cool season conditions ideal.",
                "pest": "Watch for early seedling pests."
            },
            "vegetative": {
                "soil": "Well-fertilized soil for shoot growth.",
                "water": "Regular watering during winter rains; irrigate if needed.",
                "sunlight": "Full sun for strong plant structure.",
                "environment": "Good air circulation prevents disease.",
                "temperature": "Cool conditions (5-25°C) ideal.",
                "pest": "Monitor for wheat rust and aphids."
            },
            "mature": {
                "soil": "Well-drained soil prevents lodging.",
                "water": "Irrigation at grain-fill stage critical.",
                "sunlight": "Full sun for grain development.",
                "environment": "Harvest when grains turn golden.",
                "temperature": "Warm, dry conditions aid ripening.",
                "pest": "Harvest when moisture content is 12-14%."
            }
        }
    },
    "maize-001": { // Maize
        "name": "Maize",
        "overview": "Maize is a versatile crop used for food, feed, and industry. It requires good soil fertility and consistent moisture.",
        "stages": {
            "seed": {
                "soil": "Well-prepared, fertile soil with organic matter.",
                "water": "Sow 4-5 cm deep in moist soil.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Warm season crop; ensure good drainage.",
                "temperature": "Maintain 20-25°C for germination.",
                "pest": "Monitor for seed-borne pests and soil pathogens."
            },
            "seedling": {
                "soil": "Keep soil well-aerated and moist.",
                "water": "Water regularly until established.",
                "sunlight": "Full sun exposure critical.",
                "environment": "Thin seedlings to proper spacing.",
                "temperature": "Warm conditions ideal (20-30°C).",
                "pest": "Watch for early pests; spray if necessary."
            },
            "vegetative": {
                "soil": "Fertile soil; add nitrogen as needed.",
                "water": "Maintain consistent moisture; crucial during flowering.",
                "sunlight": "Full sun for strong plant growth.",
                "environment": "Remove lower leaves for air circulation.",
                "temperature": "Warm, sunny conditions optimal.",
                "pest": "Monitor for stem borers; timely spray if needed."
            },
            "mature": {
                "soil": "Well-drained soil prevents root rot.",
                "water": "Critical irrigation at tasseling and grain-fill.",
                "sunlight": "Full sun for grain development.",
                "environment": "Support plants to prevent lodging.",
                "temperature": "Harvest when silks dry and kernels are hard.",
                "pest": "Monitor moisture stress; harvest when cobs are solid."
            }
        }
    },
    "sugarcane-001": { // Sugarcane
        "name": "Sugarcane",
        "overview": "Sugarcane is a long-season cash crop requiring heavy inputs and extensive water management.",
        "stages": {
            "seed": {
                "soil": "Well-prepared, fertile soil with organic matter.",
                "water": "Plant setts in moist soil; ensure good drainage.",
                "sunlight": "Full sun (8+ hours daily).",
                "environment": "Warm climate; long growing season.",
                "temperature": "Maintain 20-25°C for sprouting.",
                "pest": "Use disease-free setts; monitor for pests."
            },
            "seedling": {
                "soil": "Ensure soil remains well-aerated.",
                "water": "Water regularly; sugarcane needs consistent moisture.",
                "sunlight": "Full sun exposure essential.",
                "environment": "Adequate spacing for plant development.",
                "temperature": "Warm conditions (20-30°C) optimal.",
                "pest": "Monitor for early pests; manage disease risk."
            },
            "vegetative": {
                "soil": "Fertile soil; add nutrients as required.",
                "water": "Heavy irrigation throughout growing season.",
                "sunlight": "Full sun for canopy development.",
                "environment": "Good spacing; manage weeds carefully.",
                "temperature": "Warm season; long growth period needed.",
                "pest": "Monitor for major pests; lodging can be an issue."
            },
            "mature": {
                "soil": "Well-maintained soil for final growth push.",
                "water": "Continue irrigation until harvest.",
                "sunlight": "Full sun throughout maturity.",
                "environment": "Harvest mature stalks when sugar content peaks.",
                "temperature": "Cool winter months can concentrate sugars.",
                "pest": "Harvest before ratooning; manage pest pressure."
            }
        }
    },
    "soybean-001": { // Soybean
        "name": "Soybean",
        "overview": "Soybean is a high-protein oilseed legume that improves soil fertility. It's increasingly important globally.",
        "stages": {
            "seed": {
                "soil": "Well-drained soil with good organic matter.",
                "water": "Sow in moist soil; maintain moderate moisture.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Warm climate essential.",
                "temperature": "Maintain 20-25°C for germination.",
                "pest": "Use quality seed; monitor for soil pathogens."
            },
            "seedling": {
                "soil": "Keep soil aerated and well-drained.",
                "water": "Water regularly; avoid waterlogging.",
                "sunlight": "Full sun exposure critical.",
                "environment": "Adequate spacing between plants.",
                "temperature": "Warm conditions ideal (20-30°C).",
                "pest": "Watch for seedling pests and diseases."
            },
            "vegetative": {
                "soil": "Well-drained, fertile soil optimal.",
                "water": "Maintain consistent moisture; weed regularly.",
                "sunlight": "Full sun for flowering and pod development.",
                "environment": "Good air circulation prevents disease.",
                "temperature": "Warm season crop.",
                "pest": "Monitor for rust disease and pod damage."
            },
            "mature": {
                "soil": "Well-drained soil for pod maturation.",
                "water": "Irrigation during pod-fill critical.",
                "sunlight": "Full sun for quality grain.",
                "environment": "Harvest when pods turn brown and rattle.",
                "temperature": "Dry conditions aid maturity.",
                "pest": "Harvest when moisture content reaches 13-14%."
            }
        }
    },
    "chickpea-001": { // Chickpea (Gram)
        "name": "Chickpea (Gram)",
        "overview": "Chickpea is a rabi pulse crop providing excellent nutrition and soil benefits through nitrogen fixation.",
        "stages": {
            "seed": {
                "soil": "Well-drained loam; prepare fine seedbed.",
                "water": "Sow in moist soil; keep lightly moist.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Cool season crop; good air flow.",
                "temperature": "Cool conditions (15-20°C) for germination.",
                "pest": "Monitor for early pests."
            },
            "seedling": {
                "soil": "Ensure good soil aeration.",
                "water": "Water lightly; chickpea tolerates some dryness.",
                "sunlight": "Full sun exposure necessary.",
                "environment": "Adequate spacing between plants.",
                "temperature": "Cool season optimal.",
                "pest": "Watch for early pest activity."
            },
            "vegetative": {
                "soil": "Well-drained soil; avoid waterlogging.",
                "water": "Weed at 25-30 days; early weeding crucial.",
                "sunlight": "Full sun for flowering.",
                "environment": "Good spacing and air flow.",
                "temperature": "Cool rabi season ideal.",
                "pest": "Monitor for pod borers and wilt disease."
            },
            "mature": {
                "soil": "Well-drained soil for pod maturation.",
                "water": "Minimal irrigation; rainfed crop mostly.",
                "sunlight": "Full sun throughout maturity.",
                "environment": "Harvest when pods turn brown.",
                "temperature": "Dry conditions for pod ripening.",
                "pest": "Harvest when 70-80% pods are mature."
            }
        }
    },
    "lentil-001": { // Lentil
        "name": "Lentil",
        "overview": "Lentil is a cool-season pulse crop providing complete nutrition and improving soil structure.",
        "stages": {
            "seed": {
                "soil": "Well-drained loam; prepare fine seedbed.",
                "water": "Sow directly; keep soil lightly moist.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Cool season crop; good drainage.",
                "temperature": "Cool conditions (10-15°C) for germination.",
                "pest": "Monitor for early seed-borne pests."
            },
            "seedling": {
                "soil": "Keep soil aerated; avoid waterlogging.",
                "water": "Water lightly as needed.",
                "sunlight": "Full sun exposure essential.",
                "environment": "Adequate spacing between plants.",
                "temperature": "Cool rabi conditions ideal.",
                "pest": "Watch for early pest activity."
            },
            "vegetative": {
                "soil": "Well-drained, low-fertility soil okay.",
                "water": "Early weed control critical; keep soil moist but not wet.",
                "sunlight": "Full sun for flowering.",
                "environment": "Good spacing prevents disease.",
                "temperature": "Cool season optimal.",
                "pest": "Monitor for wilt and aphids."
            },
            "mature": {
                "soil": "Well-drained soil for pod maturation.",
                "water": "Harvest when pods turn golden brown.",
                "sunlight": "Full sun for grain quality.",
                "environment": "Harvest timing crucial for grain size.",
                "temperature": "Cool, dry conditions ideal.",
                "pest": "Harvest when 70-80% pods mature."
            }
        }
    },
    "mustard-001": { // Mustard
        "name": "Mustard",
        "overview": "Mustard is a rabi oilseed providing edible oil and leafy greens. It's quick-growing and resilient.",
        "stages": {
            "seed": {
                "soil": "Well-prepared, fertile soil.",
                "water": "Sow in moist soil; keep lightly moist.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Cool season crop; good drainage.",
                "temperature": "Cool conditions (10-20°C) for germination.",
                "pest": "Monitor for seed-borne pests."
            },
            "seedling": {
                "soil": "Keep soil aerated and moist.",
                "water": "Water regularly until established.",
                "sunlight": "Full sun exposure necessary.",
                "environment": "Thin seedlings to proper spacing.",
                "temperature": "Cool season conditions.",
                "pest": "Watch for early pests."
            },
            "vegetative": {
                "soil": "Fertile soil for leaf growth.",
                "water": "Regular watering; early weed control essential.",
                "sunlight": "Full sun for plant vigor.",
                "environment": "Good spacing and air flow.",
                "temperature": "Cool, moist conditions ideal.",
                "pest": "Monitor for aphids and leaf spots."
            },
            "mature": {
                "soil": "Well-drained soil for seed pod development.",
                "water": "Minimal irrigation; mostly rainfed.",
                "sunlight": "Full sun for seed pod maturity.",
                "environment": "Harvest when pods turn brown.",
                "temperature": "Dry conditions aid ripening.",
                "pest": "Harvest when seed pods are mature and brown."
            }
        }
    },
    "potato-001": { // Potato
        "name": "Potato",
        "overview": "Potato is a cool-season tuber crop providing high yields. It requires careful management of water and nutrients.",
        "stages": {
            "seed": {
                "soil": "Well-drained, fertile soil with organic matter.",
                "water": "Plant seed potatoes in moist soil.",
                "sunlight": "Full sun (6+ hours daily).",
                "environment": "Cool season crop; good drainage essential.",
                "temperature": "Cool conditions (15-20°C) for sprouting.",
                "pest": "Use disease-free certified seed potatoes."
            },
            "seedling": {
                "soil": "Keep soil aerated and moist.",
                "water": "Water regularly for root establishment.",
                "sunlight": "Full sun exposure necessary.",
                "environment": "Adequate spacing between seed pieces.",
                "temperature": "Cool to moderate conditions.",
                "pest": "Monitor for seedling pests."
            },
            "vegetative": {
                "soil": "Loose, fertile soil for tuber development.",
                "water": "Maintain consistent moisture; critical during tuber enlargement.",
                "sunlight": "Full sun for canopy development.",
                "environment": "Earth up regularly to cover tubers.",
                "temperature": "Cool conditions (15-25°C) ideal.",
                "pest": "Monitor for late blight and early blight."
            },
            "mature": {
                "soil": "Well-drained soil for harvest quality.",
                "water": "Reduce irrigation gradually before harvest.",
                "sunlight": "Full sun aids tuber maturation.",
                "environment": "Harvest when skin sets and foliage dies.",
                "temperature": "Cool harvest conditions optimal.",
                "pest": "Cure potatoes after harvest to harden skin."
            }
        }
    },
    "onion-001": { // Onion
        "name": "Onion",
        "overview": "Onion is a rabi crop providing good market value. It requires careful water management and weed control.",
        "stages": {
            "seed": {
                "soil": "Well-prepared, fertile soil.",
                "water": "Sow in moist seedbed; maintain moisture.",
                "sunlight": "Full sun for healthy seedlings.",
                "environment": "Cool season; protected nursery beds.",
                "temperature": "Cool conditions (15-20°C) for germination.",
                "pest": "Monitor for nursery pests."
            },
            "seedling": {
                "soil": "Keep nursery soil moist; transplant at 6-8 weeks.",
                "water": "Maintain consistent moisture in nursery.",
                "sunlight": "Full sun for green foliage.",
                "environment": "Adequate seedling density.",
                "temperature": "Cool conditions optimal.",
                "pest": "Watch for nursery diseases."
            },
            "vegetative": {
                "soil": "Transplant to main field with fertile soil.",
                "water": "Maintain consistent moisture; weed regularly.",
                "sunlight": "Full sun for bulb development.",
                "environment": "Good spacing for air circulation.",
                "temperature": "Cool to moderate conditions.",
                "pest": "Monitor for thrips and diseases."
            },
            "mature": {
                "soil": "Well-drained soil for bulb maturation.",
                "water": "Reduce water gradually before harvest.",
                "sunlight": "Full sun throughout growth.",
                "environment": "Harvest when tops fall and bulbs are mature.",
                "temperature": "Warm, dry conditions aid maturity.",
                "pest": "Cure harvested bulbs in warm, dry conditions."
            }
        }
    },
    "garlic-001": { // Garlic
        "name": "Garlic",
        "overview": "Garlic is a specialized rabi crop with high medicinal and culinary value. It requires proper chilling for clove development.",
        "stages": {
            "seed": {
                "soil": "Well-prepared, fertile soil with good drainage.",
                "water": "Plant cloves in moist soil; ensure drainage.",
                "sunlight": "Full sun (6+ hours daily).",
                "environment": "Cool season crop; well-drained beds.",
                "temperature": "Cool conditions (10-15°C) for sprouting.",
                "pest": "Use healthy, disease-free cloves."
            },
            "seedling": {
                "soil": "Keep soil moist and aerated.",
                "water": "Water regularly for root establishment.",
                "sunlight": "Full sun exposure necessary.",
                "environment": "Adequate spacing between cloves.",
                "temperature": "Cool season conditions.",
                "pest": "Monitor for early pests."
            },
            "vegetative": {
                "soil": "Fertile soil with organic matter.",
                "water": "Maintain consistent moisture; early weeding crucial.",
                "sunlight": "Full sun for foliage growth.",
                "environment": "Good spacing and air flow.",
                "temperature": "Proper cooling essential for clove development.",
                "pest": "Monitor for thrips and foliar diseases."
            },
            "mature": {
                "soil": "Well-drained soil for bulb maturation.",
                "water": "Reduce irrigation before harvest.",
                "sunlight": "Full sun throughout growth.",
                "environment": "Harvest when leaves yellow and dry.",
                "temperature": "Cool to warm transition aids ripening.",
                "pest": "Cure bulbs in warm, dry place before storage."
            }
        }
    },
    "ginger-001": { // Ginger
        "name": "Ginger",
        "overview": "Ginger is a tropical rhizome crop requiring warm, moist conditions and shade. It has significant medicinal value.",
        "stages": {
            "seed": {
                "soil": "Well-prepared, fertile soil with organic matter.",
                "water": "Plant rhizomes in moist soil; ensure drainage.",
                "sunlight": "Partial shade preferred; 50% shade ideal.",
                "environment": "Warm, humid conditions essential.",
                "temperature": "Warm conditions (20-25°C) for sprouting.",
                "pest": "Use disease-free, high-quality seed rhizomes."
            },
            "seedling": {
                "soil": "Keep soil moist and well-aerated.",
                "water": "Water regularly; ginger needs consistent moisture.",
                "sunlight": "Dappled shade or 50% shade optimal.",
                "environment": "Humid conditions support growth.",
                "temperature": "Warm, tropical conditions (20-30°C).",
                "pest": "Monitor for early pests and diseases."
            },
            "vegetative": {
                "soil": "Fertile soil with high organic matter.",
                "water": "Maintain high moisture; mulch heavily.",
                "sunlight": "Partial shade; protect from direct sun.",
                "environment": "Good drainage despite high moisture needs.",
                "temperature": "Warm, humid conditions ideal.",
                "pest": "Monitor for rhizome rot and leaf spots."
            },
            "mature": {
                "soil": "Well-drained soil for rhizome development.",
                "water": "Maintain moisture but allow slight drying before harvest.",
                "sunlight": "Light shade during maturation.",
                "environment": "Harvest after 8-10 months when leaves dry.",
                "temperature": "Warm conditions throughout growth.",
                "pest": "Cure rhizomes in dry place after harvest."
            }
        }
    },
    "turmeric-001": { // Turmeric
        "name": "Turmeric",
        "overview": "Turmeric is a tropical rhizome spice with significant medicinal and commercial value. It requires warm, moist conditions.",
        "stages": {
            "seed": {
                "soil": "Well-prepared, fertile soil rich in organic matter.",
                "water": "Plant rhizomes in moist soil; ensure drainage.",
                "sunlight": "Partial shade preferred; 30-50% shade.",
                "environment": "Warm, humid conditions essential.",
                "temperature": "Warm conditions (20-25°C) for sprouting.",
                "pest": "Use healthy, certified seed rhizomes."
            },
            "seedling": {
                "soil": "Keep soil moist and rich in organic matter.",
                "water": "Water regularly; turmeric prefers moist conditions.",
                "sunlight": "Dappled shade or partial shade optimal.",
                "environment": "Humid conditions support shoot growth.",
                "temperature": "Warm, tropical conditions (25-30°C).",
                "pest": "Monitor for early pests and diseases."
            },
            "vegetative": {
                "soil": "Very fertile soil with high organic matter.",
                "water": "Maintain consistent moisture; mulch heavily.",
                "sunlight": "Partial shade; protect from intense sun.",
                "environment": "Good drainage despite high moisture.",
                "temperature": "Warm, humid conditions ideal.",
                "pest": "Monitor for leaf blotch and rhizome diseases."
            },
            "mature": {
                "soil": "Well-drained soil for rhizome development.",
                "water": "Reduce moisture slightly before harvest.",
                "sunlight": "Light shade during maturation.",
                "environment": "Harvest after 7-10 months when leaves dry.",
                "temperature": "Consistent warm conditions throughout.",
                "pest": "Harvest, clean, and dry rhizomes properly."
            }
        }
    },
    "brinjal-001": { // Brinjal (Eggplant)
        "name": "Brinjal (Eggplant)",
        "overview": "Brinjal is a warm-season vegetable requiring consistent care and pest management for good fruit production.",
        "stages": {
            "seed": {
                "soil": "Well-prepared seedbed with organic matter.",
                "water": "Sow seeds in moist soil; maintain moisture.",
                "sunlight": "Full sun for healthy seedlings.",
                "environment": "Warm conditions; protected nursery beds.",
                "temperature": "Warm conditions (25-30°C) for germination.",
                "pest": "Monitor for nursery pests."
            },
            "seedling": {
                "soil": "Keep nursery soil moist; transplant at 6-8 weeks.",
                "water": "Maintain consistent moisture.",
                "sunlight": "Full sun for strong seedling growth.",
                "environment": "Adequate space in nursery beds.",
                "temperature": "Warm season; maintain warmth.",
                "pest": "Watch for seedling pests and diseases."
            },
            "vegetative": {
                "soil": "Transplant to field with fertile, well-drained soil.",
                "water": "Maintain consistent moisture; weed regularly.",
                "sunlight": "Full sun for vigorous growth.",
                "environment": "Good spacing for air circulation.",
                "temperature": "Warm season (20-30°C) optimal.",
                "pest": "Monitor for shoot borers and leaf spots."
            },
            "mature": {
                "soil": "Well-drained soil for fruit development.",
                "water": "Maintain consistent moisture throughout fruiting.",
                "sunlight": "Full sun for quality fruit.",
                "environment": "Support plants; remove lower leaves.",
                "temperature": "Warm conditions for continued fruiting.",
                "pest": "Harvest fruits at 60-70 days; control pests regularly."
            }
        }
    },
    "okra-001": { // Okra (Lady finger)
        "name": "Okra (Lady finger)",
        "overview": "Okra is a warm-season vegetable with quick-growing, high-yielding potential when managed well.",
        "stages": {
            "seed": {
                "soil": "Well-drained, fertile soil.",
                "water": "Soak seeds 24 hours; sow in moist soil.",
                "sunlight": "Full sun (6-8 hours daily).",
                "environment": "Warm season crop; direct sowing common.",
                "temperature": "Warm conditions (25-35°C) for germination.",
                "pest": "Monitor for early pests."
            },
            "seedling": {
                "soil": "Keep soil moist and well-aerated.",
                "water": "Water regularly until established.",
                "sunlight": "Full sun exposure essential.",
                "environment": "Thin seedlings to proper spacing.",
                "temperature": "Warm conditions (25-30°C) optimal.",
                "pest": "Watch for seedling pests."
            },
            "vegetative": {
                "soil": "Fertile soil; add nutrients as needed.",
                "water": "Maintain consistent moisture; weed regularly.",
                "sunlight": "Full sun for vigorous growth.",
                "environment": "Good spacing for air circulation.",
                "temperature": "Warm season throughout.",
                "pest": "Monitor for whiteflies and yellow vein mosaic."
            },
            "mature": {
                "soil": "Well-drained soil for continuous fruiting.",
                "water": "Maintain consistent moisture throughout.",
                "sunlight": "Full sun for continuous pod production.",
                "environment": "Harvest pods frequently for tenderness.",
                "temperature": "Warm conditions sustain fruiting.",
                "pest": "Harvest every 2-3 days for tender, quality pods."
            }
        }
    }
};

// ===== Plant Tips for new plants =====
const PLANT_TIPS_NEW = {
    "kulthi-001": {
        "general": [
            "💡 Tip: Kulthi tolerates poor soils better than most pulses.",
            "💡 Tip: Early weeding at 25-30 days is crucial for good yields.",
            "💡 Tip: Minimal inputs needed - an ideal low-cost crop.",
            "💡 Tip: Harvest when pods turn brown and seeds rattle inside."
        ]
    },
    "peanut-001": {
        "general": [
            "💡 Tip: Earth up the soil lightly when flowers begin to fall.",
            "💡 Tip: Moisture at flowering and pegging is critical for pod development.",
            "💡 Tip: Gypsum application helps prevent aflatoxin contamination.",
            "💡 Tip: Dry harvested pods before storage to prevent fungal growth."
        ]
    },
    "pigeonpea-001": {
        "general": [
            "💡 Tip: Tur enriches soil through nitrogen fixation; ideal for crop rotation.",
            "💡 Tip: Early weeding is essential; late weeding reduces yields.",
            "💡 Tip: Can be intercropped with cereals or grown as sole crop.",
            "💡 Tip: Harvest pods when 70-80% mature for best grain quality."
        ]
    },
    "bajra-001": {
        "general": [
            "💡 Tip: Bajra is extremely drought-tolerant - ideal for low-rainfall areas.",
            "💡 Tip: Thin seedlings early to ensure proper spacing.",
            "💡 Tip: Harvest grain when panicles turn brown and grain is hard.",
            "💡 Tip: Use as green fodder if grain yield is poor."
        ]
    },
    "cotton-001": {
        "general": [
            "💡 Tip: Monitor cotton regularly for pests - early detection is key.",
            "💡 Tip: Balanced nutrition prevents many physiological disorders.",
            "💡 Tip: Remove lower leaves to reduce pest hiding spaces.",
            "💡 Tip: Harvest bolls when they crack open naturally."
        ]
    },
    "rice-001": {
        "general": [
            "💡 Tip: Maintain 5-10 cm water depth throughout growth for maximum yield.",
            "💡 Tip: Drain paddies 15-20 days before harvest for easier harvesting.",
            "💡 Tip: Use quality seeds and treated nursery practices.",
            "💡 Tip: Harvest when 80-90% grains turn golden brown."
        ]
    },
    "wheat-001": {
        "general": [
            "💡 Tip: Wheat is sensitive to waterlogging - ensure good drainage.",
            "💡 Tip: Irrigation at flowering and grain-fill stages is critical.",
            "💡 Tip: Monitor for rust diseases in humid conditions.",
            "💡 Tip: Harvest when grain moisture reaches 12-14% for best quality."
        ]
    },
    "maize-001": {
        "general": [
            "💡 Tip: Maize needs consistent moisture - mulch to retain water.",
            "💡 Tip: Nitrogen fertilizer is crucial for high yields.",
            "💡 Tip: Support plants in windy conditions to prevent lodging.",
            "💡 Tip: Harvest cobs when kernels are hard and silks turn brown."
        ]
    },
    "sugarcane-001": {
        "general": [
            "💡 Tip: Sugarcane is a long-season crop requiring patience and planning.",
            "💡 Tip: Use disease-free setts to prevent major diseases.",
            "💡 Tip: Heavy irrigation throughout growth is mandatory.",
            "💡 Tip: Harvest at optimal sugar content for best returns."
        ]
    },
    "soybean-001": {
        "general": [
            "💡 Tip: Soybean enriches soil with nitrogen - excellent for rotation.",
            "💡 Tip: Avoid waterlogging; soybean is sensitive to wet conditions.",
            "💡 Tip: Harvest when pods turn brown and rattle.",
            "💡 Tip: Use combine harvester for efficient harvesting."
        ]
    },
    "chickpea-001": {
        "general": [
            "💡 Tip: Chickpea is a cool-season rabi crop - plant timing is crucial.",
            "💡 Tip: Early weed control in first 30 days determines yield.",
            "💡 Tip: Pod borers are a major pest - monitor regularly.",
            "💡 Tip: Harvest when pods turn brown completely."
        ]
    },
    "lentil-001": {
        "general": [
            "💡 Tip: Lentil is hardy and low-input - ideal for marginal soils.",
            "💡 Tip: Early weeding critical; late weeding reduces yields significantly.",
            "💡 Tip: Monitor for wilt disease in poorly drained fields.",
            "💡 Tip: Harvest at 100-120 days for best grain quality."
        ]
    },
    "mustard-001": {
        "general": [
            "💡 Tip: Mustard is quick-growing - from seed to harvest in 90 days.",
            "💡 Tip: Harvest leaves early for greens; let plants mature for seeds.",
            "💡 Tip: Avoid overwatering to prevent lodging.",
            "💡 Tip: Use for intercropping with slower-growing crops."
        ]
    },
    "potato-001": {
        "general": [
            "💡 Tip: Use certified, disease-free seed potatoes for best results.",
            "💡 Tip: Earth up soil as plants grow to protect tubers from light.",
            "💡 Tip: Consistent moisture is critical during tuber enlargement.",
            "💡 Tip: Harvest when foliage dies down completely."
        ]
    },
    "onion-001": {
        "general": [
            "💡 Tip: Onion requires good weed management throughout growth.",
            "💡 Tip: Proper plant spacing prevents diseases and pest damage.",
            "💡 Tip: Cure harvested bulbs in warm, dry place for storage.",
            "💡 Tip: Monitor for thrips and spray neem if infestation occurs."
        ]
    },
    "garlic-001": {
        "general": [
            "💡 Tip: Garlic requires cold winter period for proper clove development.",
            "💡 Tip: Use healthy, disease-free cloves for planting.",
            "💡 Tip: Mulch plants in winter to protect from extreme cold.",
            "💡 Tip: Harvest when leaves completely dry and yellow."
        ]
    },
    "ginger-001": {
        "general": [
            "💡 Tip: Ginger grows best in shade with 50% shade cover optimal.",
            "💡 Tip: High organic matter in soil is essential for good yields.",
            "💡 Tip: Maintain high moisture throughout growing season.",
            "💡 Tip: Harvest after 8-10 months when leaves dry completely."
        ]
    },
    "turmeric-001": {
        "general": [
            "💡 Tip: Turmeric requires very rich soil with high organic matter.",
            "💡 Tip: Partial shade protects plants from intense heat.",
            "💡 Tip: Heavy mulching maintains moisture and soil temperature.",
            "💡 Tip: Harvest after 7-10 months for maximum rhizome development."
        ]
    },
    "brinjal-001": {
        "general": [
            "💡 Tip: Regular harvesting encourages continuous fruiting.",
            "💡 Tip: Pest management is critical - monitor daily in peak season.",
            "💡 Tip: Support plants to prevent branch breaking under fruit load.",
            "💡 Tip: Fruits are ready 60-70 days after transplanting."
        ]
    },
    "okra-001": {
        "general": [
            "💡 Tip: Harvest okra pods every 2-3 days while tender.",
            "💡 Tip: Missed harvests lead to tough, fibrous pods.",
            "💡 Tip: Direct sowing gives better plants than transplanting.",
            "💡 Tip: High temperatures increase pod production."
        ]
    }
};

// Merge tips with original PLANT_TIPS
Object.assign(PLANT_TIPS, PLANT_TIPS_NEW);

// ===== Convert GUIDE_DATA → PLANTS (REQUIRED FOR EXPLORE PAGE) =====

const EXCLUDED_PLANT_NAMES = new Set(['Apple', 'Banana', 'Orange', 'Strawberry', 'Mango']);

const PLANTS = Object.keys(GUIDE_DATA)
    .map(id => {
        return {
            id: id,
            name: GUIDE_DATA[id].name,
            category: getCategory(GUIDE_DATA[id].name)
        };
    })
    .filter(plant => !EXCLUDED_PLANT_NAMES.has(plant.name));

// Expose to window for global access
window.GUIDE_DATA = GUIDE_DATA;
window.PLANTS = PLANTS;

// ===== Category Helper Function =====
function getCategory(name) {
    // Clean plant name first (remove brackets)
    const cleanName = name.replace(/\s*\(.*?\)\s*/g, '');
    
    const vegetables = ['Tomato', 'Carrot', 'Cucumber', 'Bell Pepper', 'Broccoli', 'Spinach', 'Lettuce', 'Potato', 'Onion', 'Garlic', 'Ginger', 'Turmeric', 'Brinjal', 'Okra'];
    const herbs = ['Basil', 'Mint', 'Parsley', 'Thyme', 'Oregano', 'Sage', 'Chives'];
    const flowers = ['Rose', 'Sunflower', 'Tulip', 'Daffodil', 'Lavender', 'Daisy'];
    const fruits = ['Apple', 'Banana', 'Orange', 'Strawberry', 'Mango'];
    const crops = ['Kulthi', 'Peanut', 'Tur', 'Bajra', 'Cotton', 'Rice', 'Wheat', 'Maize', 'Sugarcane', 'Soybean', 'Chickpea', 'Lentil', 'Mustard'];

    if (vegetables.includes(cleanName)) return 'Vegetable';
    if (herbs.includes(cleanName)) return 'Herb';
    if (flowers.includes(cleanName)) return 'Flower';
    if (fruits.includes(cleanName)) return 'Fruit';
    if (crops.includes(cleanName)) return 'Crop';

    return 'Other';
}

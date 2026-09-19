# -AI-ML-Techniques-to-Distinguish-Vehicular-Movement-on-Highway-and-Service-Road
The matcher does **not** pick a road from a pretty map pin. It Kalman-filters GNSS, then scores two hypotheses (highway vs service) using distance, heading, speed class, and fog/visibility.
## Two audiences
| Mode | Who | What they see |
| --- | --- | --- |
| **Rider** | Driver / citizen | Only their GPS match, warnings, and map |
| **Government** | NHAI / state ITS desk | Control room: simulated fleet, Merge Guardian, telemetry lab, analytics |
Toggle **Rider / Government** on the homepage or in the sidebar. Fleet names are **demo vehicles**, not other logged-in users.
## What it does
- Live map: OpenStreetMap streets or Esri satellite, TomTom traffic, rain / clouds
- **Track my GPS** or **Play sim** along Indian NH / NE / flyover / rural corridors
- JSON in / JSON out: `device_id`, lat, lng, alt, speed, heading → `highway_name`, `road_type`, `confidence_score`
- Black-spot rings and a list under the map (service-road zipper, rural cut, flyover touchdown)
- **Merge Guardian**: merge risk from black-spot history + rain + fog + speed
- Ride Analyst chatbot (Gemini) for live match / weather questions
- 15 UI languages

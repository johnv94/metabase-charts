# Metabase Charts

This directory contains an extraction of Metabase's visualization components, structured as a reusable library.

## Visualizations

The following visualizations are exported via `Visualizations` object:

- Line
- Bar
- Area
- Combo
- Waterfall
- Number (Scalar)
- Trend (SmartScalar)
- Progress
- Gauge
- Pie
- Funnel
- Scatter
- Sankey
- Row
- Map
- ObjectDetail
- Text
- Heading
- Link
- IFrame

## Usage

```typescript
import { Visualizations } from "metabase-charts";

const MyChart = Visualizations.Line;
```

## Status

**Experimental Extraction.**

This package contains the source code for the visualizations but currently retains dependencies on:
- `metabase/lib` (Metabase core utilities)
- `metabase/store` (Redux state)
- `metabase/css` (Global styles)

To make this fully standalone, these dependencies need to be mocked, extracted, or the components need to be refactored to be pure components receiving all data via props.

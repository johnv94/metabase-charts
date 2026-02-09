import { AreaChart } from "metabase/visualizations/visualizations/AreaChart";
import { BarChart } from "metabase/visualizations/visualizations/BarChart";
import { ComboChart } from "metabase/visualizations/visualizations/ComboChart";
import { Funnel } from "metabase/visualizations/visualizations/Funnel";
import { Gauge } from "metabase/visualizations/visualizations/Gauge";
import { Heading } from "metabase/visualizations/visualizations/Heading";
import { IFrameViz } from "metabase/visualizations/visualizations/IFrameViz";
import { LineChart } from "metabase/visualizations/visualizations/LineChart";
import { LinkViz } from "metabase/visualizations/visualizations/LinkViz";
import { Map } from "metabase/visualizations/visualizations/Map";
import { ObjectDetail } from "metabase/visualizations/visualizations/ObjectDetail";
import { PieChart } from "metabase/visualizations/visualizations/PieChart";
import { Progress } from "metabase/visualizations/visualizations/Progress";
import { RowChart } from "metabase/visualizations/visualizations/RowChart";
import { SankeyChart } from "metabase/visualizations/visualizations/SankeyChart";
import { Scalar } from "metabase/visualizations/visualizations/Scalar";
import { ScatterPlot } from "metabase/visualizations/visualizations/ScatterPlot";
import { SmartScalar } from "metabase/visualizations/visualizations/SmartScalar";
import { Text } from "metabase/visualizations/visualizations/Text";
import { WaterfallChart } from "metabase/visualizations/visualizations/WaterfallChart";

export const Visualizations = {
  Line: LineChart,
  Bar: BarChart,
  Area: AreaChart,
  Combo: ComboChart,
  Waterfall: WaterfallChart,
  Number: Scalar,
  Trend: SmartScalar,
  Progress: Progress,
  Gauge: Gauge,
  Pie: PieChart,
  Funnel: Funnel,
  Scatter: ScatterPlot,
  Sankey: SankeyChart,
  Row: RowChart,
  Map: Map,
  ObjectDetail: ObjectDetail,
  Text: Text,
  Heading: Heading,
  Link: LinkViz,
  IFrame: IFrameViz,
};

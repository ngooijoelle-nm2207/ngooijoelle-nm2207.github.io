/*import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';*/

const AFE = 'Africa Eastern and Southern';
const AFW = 'Africa Western and Central';
const ARB = 'Arab World';
const CSS = 'Carribbean small states';
const CEB = 'Central Europe and the Baltics';
const EAS = 'East Asia & Pacific';
const EMU = 'Euro area';
const ECS = 'Europe & Central Asia';
const EUU = 'European Union';
const LCN = 'Latin America & Caribbean';
const MEA = 'Middle East & North Africa';
const NC = 'North America';
const SAS = 'South Asia';
const SSF = 'Sub-Saharan Africa';

new svgMap({
  targetElementID: 'svgMap',
  data: {
    data: {
      legalrights: {
        name: 'Strength of Legal Rights',
        format: '{0}',
      },
      gdp: {
        name: 'GDP per capita',
        format: '{0}',
        thousandSeparator: ',',
        thresholdMax: 61000,
        thresholdMin: 3000,
      },
    },
    applyData: 'gdp',
    values: {
      AFE: { legalrights: 4.54, gdp: 3540.66 },
      AFW: { legalrights: 5.86, gdp: 4021.17 },
      ARB: { legalrights: 3.09, gdp: 13568.29 },
      CSS: { legalrights: 5.31, gdp: 15725.59 },
      CEB: { legalrights: 7.0, gdp: 32711.83 },
      EAS: { legalrights: 7.24, gdp: 17959.77 },
      EMU: { legalrights: 4.84, gdp: 45767.57 },
      ECS: { legalrights: 6.5, gdp: 34766.82 },
      EUU: { legalrights: 5.63, gdp: 43435.47 },
      LCN: { legalrights: 5.24, gdp: 15571.36 },
      MEA: { legalrights: 3.19, gdp: 15709.48 },
      NC: { legalrights: 10.0, gdp: 60625.44 },
      SAS: { legalrights: 5.5, gdp: 6161.23 },
      SSF: { legalrights: 5.15, gdp: 3733.61 },
    },
  },
});

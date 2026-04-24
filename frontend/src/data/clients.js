import au from "../clients/au.png";
import bombay_hospital from "../clients/bombay_hospital.png";
import dotsquares from "../clients/dotsquares.png";
import genpact from "../clients/genpact.png";
import jecrc from "../clients/jecrc.png";
import mahatma_gandhi_hospital from "../clients/mahatma_gandhi_hospital.png";
import nav from "../clients/nav.png";
import sk_finance from "../clients/sk_finance.png";
import tp from "../clients/tp.png";
import double_bed from "../vectors/double-bed.svg"
import clock from "../vectors/clock.svg"
import building from "../vectors/building.svg"
import award from "../vectors/award.svg"

export const CLIENTS = [
  { id: "c01", logo: au },
  { id: "c02", logo: bombay_hospital },
  { id: "c03", logo: dotsquares },
  { id: "c04", logo: genpact },
  { id: "c05", logo: jecrc },
  { id: "c06", logo: mahatma_gandhi_hospital },
  { id: "c07", logo: nav },
  { id: "c08", logo: sk_finance },
  { id: "c09", logo: tp },
];

export const STATS = [
  { value: '500+', label: 'Rooms Managed', icon: double_bed },
  { value: '10+', label: 'Years Experience', icon: clock },
  { value: '50+', label: 'Properties', icon: building },
  { value: '25+', label: 'Top Brand Clients', icon: award },
]
import {
  Accordion,
  AccordionItemHeading,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import './Forecast.css';

const Forecast = ({data}) => {
    return (
      <>
        <label className="title">Daily</label>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="daily-item">
                            <img className="icon-small" src={`icons/${item.weather[0].icon}.png`} alt="weather" />
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    );
}

export default Forecast;
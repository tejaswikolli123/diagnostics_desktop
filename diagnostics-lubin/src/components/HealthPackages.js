import React from "react";
import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HealthPackages = () => {
  // Data arrays for dynamic rendering
  const popularTests = [
    "Kidney Function Test (KFT)",
    "Complete Blood Count Test",
    "Lipid Profile Test",
    "Thyroid Profile Test",
    "Vitamin D Test",
    "Vitamin B12 Test",
    "Liver Function Test (LFT)",
    "Calcium Test",
    "Allergy Test",
    "HbA1c Test",
  ];

  const popularPackages = [
    "LupiKavach Health Package - Orchid",
    "LupiKavach Health Screen Package - Daisy",
    "LupiKavach Pre Operative",
    "LupiKavach Diabetic Screen",
    "LupiKavach Vitamin Check",
    "LupiKavach Diabetic Heart Screen",
    "LupiKavach Fever Check Gold",
    "LupiKavach Healthy Women Package - Rose",
    "Health checkup in Hyderabad",
    "Health checkup in mumbai",
    "Health checkup in Banglore",
    "Health checkup in Ahemadabad",
    "Health checkup in Bhopal",
    "Health checkup in Nagpur",
    "Health checkup in Nashik",
    "Health checkup in Delhi",
  ];

  const presenceInCity = [
    "Boduppal",
    "Chandanagar",
    "Madinaguda",
    "Habsiguda",
    "Gandipet",
    "Karmanghat",
    "Kokapet",
    "Kondapur",
    "Kukatpally",
    "LB Nagar",
  ];

  const otherCities = [
    "Pathology Lab in Mumbai",
    "Pathology Lab in Pune",
    "Pathology Lab in Ranchi",
    "Pathology Lab in Kolkata",
    "Pathology Lab in Nashik",
    "Pathology Lab in Bhopal",
    "Pathology Lab in Indore",
    "Pathology Lab in Raipur",
    "Pathology Lab in Varanasi",
    "Pathology Lab in Jabalpur",
    "Pathology Lab in Hyderabad",
    "Pathology Lab in Chennai",
    "Pathology Lab in Nagpur",
    "Pathology Lab in Patna",
    "Pathology Lab in Siliguri",
    "Pathology Lab in Guwahati",
    "Pathology Lab in Kolhapur",
    "Pathology Lab in Bangalore",
    "Pathology Lab in Darjeeling",
    "Pathology Lab in Navi Mumbai",
  ];

  const renderItems = (items) => (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px", // Adjust gap between words
        justifyContent: "center",
        paddingY: "20px",
      }}
    >
      {items.map((item, index) => (
        <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ fontSize: "14px", textAlign: "center" }}>
            {item}
          </Typography>
          {/* Add a vertical divider between words, except for the last one */}
          {index < items.length - 1 && <Divider orientation="vertical" sx={{ height: "30px", marginX: "8px" }} />}
        </Box>
      ))}
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "#E5FEEF", paddingY: "50px" }}>
      {/* Accordion 1: Popular Tests */}
      <Accordion sx={{ width: "90%", marginX: "auto", backgroundColor: "#E5FEEF", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "#00B32D", color: "white" }} />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            color: "#6C4675",
            fontWeight: "400",
            fontSize: "20px",
            borderBottom: "2px solid #00B32D",
          }}
        >
          Popular Tests
        </AccordionSummary>
        <AccordionDetails>{renderItems(popularTests)}</AccordionDetails>
      </Accordion>

      {/* Accordion 2: Popular Health Packages */}
      <Accordion sx={{ width: "90%", marginX: "auto", backgroundColor: "#E5FEEF", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "#00B32D", color: "white" }} />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            color: "#6C4675",
            fontWeight: "400",
            fontSize: "20px",
            borderBottom: "2px solid #00B32D",
          }}
        >
          Popular Health Packages
        </AccordionSummary>
        <AccordionDetails>{renderItems(popularPackages)}</AccordionDetails>
      </Accordion>

      {/* Accordion 3: Presence in Your City */}
      <Accordion sx={{ width: "90%", marginX: "auto", backgroundColor: "#E5FEEF", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "#00B32D", color: "white" }} />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            color: "#6C4675",
            fontWeight: "400",
            fontSize: "20px",
            borderBottom: "2px solid #00B32D",
          }}
        >
          Our Presence in Your City (Mumbai)
        </AccordionSummary>
        <AccordionDetails>{renderItems(presenceInCity)}</AccordionDetails>
      </Accordion>

      {/* Accordion 4: Presence in Other Cities */}
      <Accordion sx={{ width: "90%", marginX: "auto", backgroundColor: "#E5FEEF", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ backgroundColor: "#00B32D", color: "white" }} />}
          aria-controls="panel4-content"
          id="panel4-header"
          sx={{
            color: "#6C4675",
            fontWeight: "400",
            fontSize: "20px",
            borderBottom: "2px solid #00B32D",
          }}
        >
          Our Presence in Other Cities
        </AccordionSummary>
        <AccordionDetails>{renderItems(otherCities)}</AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default HealthPackages;

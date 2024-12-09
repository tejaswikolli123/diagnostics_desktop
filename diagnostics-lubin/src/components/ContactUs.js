import React from "react";
import { Box, Stack, Typography, Avatar, Divider } from "@mui/material";
import {
  FacebookOutlined as FacebookOutlinedIcon,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

const ContactUs = () => {
  return (
    <Box sx={{ backgroundColor: "#6C4675", width: "100%" }}>
    
      <Box sx={{ color: "white", padding: "50px" }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <img
            src="https://lupindiagnostics.com/assets/images/logo-white.png"
            alt="Lupin Diagnostics Logo"
            height="55px"
          />
          <Typography variant="h5">Contact Us: +91 7030 300 400</Typography>
          <Stack direction="row" spacing={1}>
            <Avatar
              variant="rounded"
              sx={{ backgroundColor: "#9D65A8", cursor: "pointer" }}
            >
              <FacebookOutlinedIcon />
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{ backgroundColor: "#9D65A8", cursor: "pointer" }}
            >
              <Instagram />
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{ backgroundColor: "#9D65A8", cursor: "pointer" }}
            >
              <LinkedIn />
            </Avatar>
            <Avatar
              variant="rounded"
              sx={{ backgroundColor: "#9D65A8", cursor: "pointer" }}
            >
              <YouTube />
            </Avatar>
          </Stack>
        </Stack>
      </Box>

      <Divider variant="middle" sx={{ border: "1px solid white" }} />

      
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "25px",
          gap: "25px",
        }}
      >
      
        {[
          {
            title: "Book an Appointment",
            items: [
              "Book a Home Collection",
              "Book a Centre Visit",
              "Create Your Own Package",
            ],
          },
          {
            title: "Blood Tests & Packages",
            items: [
              "Lupikavach Health Packages",
              "Disease | Organ | Habit wise Tests",
              "Directory of Services (DOS)",
            ],
          },
          {
            title: "For Doctors",
            items: [
              "Pathology Core Facilities",
              "Knowledge Centre",
              "Doctor V-Logs",
            ],
          },
          {
            title: "Partner With Us",
            items: [
              "Lupimitra (Franchise)",
              "Lupi Plus",
              "Hospital Laboratory Management",
              "Retail Laboratory Management",
            ],
          },
          {
            title: "About Us",
            links: [
              "About Lupin Diagnostics",
              "Why Lupin Diagnostics",
              "Our Management",
              "Our Doctors",
              "Accreditations & Certifications",
              "Compliance",
              "Newsroom",
              "Logistics",
            ],
          },
          {
            title: "Contact Us",
            links: ["Feedback", "Reach Out to Us"],
          },
          {
            title: "",
            links: ["Center Locator", "Blogs", "Careers", "Informative Videos"],
          },
        ].map((section, index) => (
          <Box key={index} sx={{ padding: "15px" }}>
            
            {section.title && (
              <Typography
                variant="h5"
                sx={{ color: "white", fontWeight: "700", lineHeight: "250%" }}
              >
                {section.title}
              </Typography>
            )}

          
            {section.items &&
              section.items.map((item, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "200%",
                  }}
                >
                  {item}
                </Typography>
              ))}

          
            {section.links &&
              section.links.map((link, idx) => (
                <Typography
                  key={idx}
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "200%",
                  }}
                >
                  {link}
                </Typography>
              ))}
          </Box>
        ))}
      </Box>

      <Divider variant="middle" sx={{ border: "1px solid white" }} />

      
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          padding: "25px",
          gap: { xs: "15px", sm: "50px" },
        }}
      >
        {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((text, idx) => (
          <Typography
            key={idx}
            sx={{
              fontSize: "20px",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            {text}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ContactUs;


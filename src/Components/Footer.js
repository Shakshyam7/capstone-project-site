import React from "react";
import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

// This is the code I downloaded from Chakra UI
// https://pro.chakra-ui.com/components/free

function Footer() {
  return (
    <div
      style={{
        width: "100%",
        background: "#212529",
        padding: "56px",
        color: "rgba(255, 255, 255, 0.87)",
        position: "fixed",
        bottom: 0
        
      }}
    >
      <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
        <Stack spacing={{ base: "4", md: "5" }}>
          <Stack justify="space-between" direction="row" align="center">
            <div
              style={{
                color: "rgba(209, 81, 111, 0.87)",
                fontSize: "2rem",
              }}
            >
              ArtShop
            </div>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="#"
                aria-label="LinkedIn"
                icon={
                  <FaInstagram
                    fontSize="1.25rem"
                    color="rgba(209, 81, 111, 0.87)"
                  />
                }
              />
              <IconButton
                as="a"
                href="#"
                aria-label="GitHub"
                icon={<FaFacebook fontSize="1.25rem" color="#1877f2" />}
              />
              <IconButton
                as="a"
                href="#"
                aria-label="Twitter"
                icon={<FaTwitter fontSize="1.25rem" color="1da1f2" />}
              />
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} Artshop . All rights reserved.
          </Text>
        </Stack>
      </Container>
    </div>
  );
}

export default Footer;

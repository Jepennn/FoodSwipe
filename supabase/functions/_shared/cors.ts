
//This file is used to share cors headers between different functions

//This cors headers will be change later when we have a domain

export const corsHeaders = {
  "Access-Control-Allow-Origin": "*", // Tillåt alla ursprung
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Tillåtna metoder
  "Access-Control-Allow-Headers": "Authorization, Content-Type", // Tillåtna rubriker
};

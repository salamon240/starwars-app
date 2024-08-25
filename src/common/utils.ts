import { useState } from "react";

export function formatHeader(key: string) {
  return key
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateUniqueId(){
  // Use a timestamp combined with a random number for better uniqueness
  return `${Date.now()}_${Math.floor(Math.random() * 10000)}`;
};



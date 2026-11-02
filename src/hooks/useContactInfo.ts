"use client";

import { useCMSStore } from "@/store/useCMSStore";
import { getContactInfo, type ContactInfo } from "@/lib/contact";

/** Live contact details from the CMS global settings (loaded by the Navbar on every page) */
export function useContactInfo(): ContactInfo {
  const globalConfig = useCMSStore((s) => s.globalConfig);
  return getContactInfo(globalConfig);
}

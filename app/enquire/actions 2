"use server";

import { Resend } from "resend";
import { getPropertyBySlug } from "@/data/properties";

const resend = new Resend(process.env.RESEND_API_KEY);

export type EnquiryFormState = {
  status: "idle" | "error" | "success";
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitEnquiry(
  previousState: EnquiryFormState,
  formData: FormData,
): Promise<EnquiryFormState> {
  const propertySlug = formData.get("propertySlug");

  if (typeof propertySlug !== "string" || !propertySlug.trim()) {
    return {
      status: "error",
      message: "No property was selected.",
    };
  }

  const selectedProperty = getPropertyBySlug(propertySlug);

  if (!selectedProperty) {
    return {
      status: "error",
      message: "The selected property could not be found.",
    };
  }

  const fullName = formData.get("fullName");

  if (typeof fullName !== "string" || !fullName.trim()) {
    return {
      status: "error",
      message: "Please enter your full name.",
    };
  }

  const email = formData.get("email");

  if (typeof email !== "string" || !email.trim()) {
    return {
      status: "error",
      message: "Please enter your email address.",
    };
  }

  const normalizedEmail = email.trim().toLowerCase();

  if (!emailPattern.test(normalizedEmail)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  const phoneNumber = formData.get("phoneNumber");

  if (typeof phoneNumber !== "string") {
    return {
      status: "error",
      message: "The phone number is invalid.",
    };
  }
  const enquiry = formData.get("enquiry");

  if (typeof enquiry !== "string" || !enquiry.trim()) {
    return {
      status: "error",
      message: "Please enter your enquiry.",
    };
  }

  const enquiryPayload = {
    property: selectedProperty,
    fullName: fullName.trim(),
    phoneNumber: phoneNumber.trim() || undefined,
    email: normalizedEmail,
    message: enquiry.trim(),
  };

  const { error } = await resend.emails.send({
    from: "Casa Clara <onboarding@resend.dev>",
    to: "delivered@resend.dev",
    replyTo: enquiryPayload.email,
    subject: `New enquiry: ${enquiryPayload.property.title}`,
    text: [
      `Property: ${enquiryPayload.property.title}`,
      `Name: ${enquiryPayload.fullName}`,
      `Email: ${enquiryPayload.email}`,
      `Phone: ${enquiryPayload.phoneNumber ?? "Not provided"}`,
      "",
      enquiryPayload.message,
    ].join("\n"),
  });

  if (error) {
    return {
      status: "error",
      message: "We couldn’t send your enquiry. Please try again.",
    };
  }

  return {
    status: "success",
    message: "Your enquiry has been received.",
  };
}

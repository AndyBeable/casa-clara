"use client";

import { submitEnquiry, type EnquiryFormState } from "@/app/enquire/actions";
import { useActionState, useRef, useEffect } from "react";

const initialState: EnquiryFormState = {
  status: "idle",
  message: "",
};

type EnquiryFormProps = {
  propertySlug: string;
};

const controlClassName =
  "h-12 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20";

const submitButtonClassName =
  "inline-flex h-11 items-center justify-center rounded-full bg-foreground px-6 text-sm font-semibold text-background transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:opacity-60";

export default function EnquiryForm({ propertySlug }: EnquiryFormProps) {
  const [state, formAction, isPending] = useActionState(
    submitEnquiry,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  const messageClassName =
    state.status === "error"
      ? "text-red-700"
      : state.status === "success"
        ? "text-emerald-700"
        : "text-muted";

  return (
    <form
      ref={formRef}
      action={formAction}
      aria-label="Property enquiry"
      className="mb-8 max-w-2xl rounded-2xl border border-border bg-surface p-4 sm:p-6"
    >
      <input type="hidden" name="propertySlug" value={propertySlug} />
      <div className="grid gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="fullName"
            className="text-sm font-medium text-foreground"
          >
            Full name
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            required
            className={controlClassName}
            placeholder="Full Name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-foreground"
          >
            Email address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={controlClassName}
            placeholder="hello@youraddress.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="phoneNumber"
            className="text-sm font-medium text-foreground"
          >
            Phone number{" "}
            <span className="font-normal text-muted">(optional)</span>
          </label>

          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            autoComplete="tel"
            className={controlClassName}
            placeholder="+34 612 345 678"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="enquiry"
            className="text-sm font-medium text-foreground"
          >
            Your enquiry
          </label>

          <textarea
            id="enquiry"
            name="enquiry"
            required
            className={`${controlClassName} min-h-32 resize-y py-3`}
            placeholder="I am interested in this property"
          />
        </div>
      </div>

      <button
        type="submit"
        className={`${submitButtonClassName} mt-6`}
        disabled={isPending}
      >
        {isPending ? "Sending…" : "Send enquiry"}
      </button>

      <p
        aria-live="polite"
        className={`mt-4 min-h-5 text-sm font-medium ${messageClassName}`}
      >
        {state.message}
      </p>
    </form>
  );
}

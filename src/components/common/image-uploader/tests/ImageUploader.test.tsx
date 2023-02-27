import { render, screen, cleanup } from '@testing-library/react';
import user from "@testing-library/user-event";
import { afterEach, describe, expect, it, test } from "vitest";
import ImageUploader from "../ImageUploader";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const handleInputChange = () => {}

describe("Image uploader component mounts", () => {
  const RenderedComponent = render(<ImageUploader />);
  it("Contains a hidden input referenced in DOM", async () => {
    //Checked!
    const hiddenInput = await RenderedComponent.findByPlaceholderText("hidden_input");
    expect(hiddenInput).toContain({ name: "upload picture" });
  });

  it("Contains a button that triggers a click", async () => {
    //can't find the element!
    const CloudButton = await RenderedComponent.getByRole("button", { name: "CloudIconWrapper" });
    user.click(CloudButton);
    expect(CloudButton).toBeCalled();
  })
})
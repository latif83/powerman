"use client";
import { addEvent } from "@/actions/actions";
import { useState } from "react";

export default function Manage() {
  // Reset form fields
  // setTitle('');
  // setDescription('');
  // setDueDate('');
  //   };

  const [loading, setLoading] = useState(false);

  const submitEvent = async (formData) => {
    setLoading(true);
    let newTask = {
      title: formData.get("title"),
      des: formData.get("des"),
      date: formData.get("date"),
    };

    await addEvent(newTask)

    setLoading(false)

  };

  return (
    <form action={submitEvent}>
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="des" placeholder="Description" />
      <input type="date" name="date" placeholder="Event Date" />
      <button type="submit">Add Event</button>
    </form>
  );
}

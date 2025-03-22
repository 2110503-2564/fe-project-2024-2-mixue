"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; 
import deleteAppt from "@/libs/deleteAppt";

export default function ApptDeleteBtn({ id, token }: { id: string; token: any }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    const confirmDelete = window.confirm("Are you sure you want to delete this Appointment?");
    if (!confirmDelete) return;

    setIsDeleting(true);

    try {
        await deleteAppt(id, token);
        alert("Appointment deleted successfully!");
        router.push('/appointment')
        router.refresh();
     
      } catch (error) {
        alert("Failed to delete Appointment.");
      }

    setIsDeleting(false);
  }

  return (
    <button
      onClick={handleDelete} 
      className="p-3 px-10 m-4 rounded-lg bg-red-500 text-white font-poppins text-xl shadow-lg 
                 hover:bg-red-800 transition duration-300 disabled:opacity-50"
      disabled={isDeleting} 
    >
      {isDeleting ? "Deleting..." : "Delete"} 
    </button>
  );
}

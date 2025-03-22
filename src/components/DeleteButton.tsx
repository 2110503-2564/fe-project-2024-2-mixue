"use client";

import deleteDentist from "@/libs/deleteDentist";
import { useState } from "react";
import { useRouter } from "next/navigation"; 

export default function DeleteButton({ id, token }: { id: string; token: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter();

  async function handleDelete() {
    const confirmDelete = window.confirm("Are you sure you want to delete this dentist?");
    if (!confirmDelete) return;

    setIsDeleting(true);

    try {
        await deleteDentist(id, token);
        alert("Dentist deleted successfully!");
        router.push("/dentist"); 
        router.refresh(); 
      } catch (error) {
        alert("Failed to delete dentist.");
      }

    setIsDeleting(false);
  }

  return (
    <button
      onClick={handleDelete} 
      className="p-3 px-6 m-4 rounded-lg bg-red-500 text-white font-poppins text-xl shadow-lg 
                 hover:bg-red-800 transition duration-300 disabled:opacity-50"
      disabled={isDeleting} 
    >
      {isDeleting ? "Deleting..." : "Delete"} 
    </button>
  );
}

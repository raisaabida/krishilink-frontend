import { auth } from "../firebase.config";

const API = import.meta.env.VITE_API_URL;

async function authHeader() {
  const token = await auth.currentUser?.getIdToken();
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
}

// ✅ PUBLIC
export async function getCrops() {
  const res = await fetch(`${API}/crops`);
  return res.json();
}

export async function getCropById(id) {
  const res = await fetch(`${API}/crops/${id}`);
  return res.json();
}

// 🔐 PROTECTED
export async function addCrop(data, ownerEmail) {
  const res = await fetch(`${API}/crops`, {
    method: "POST",
    headers: await authHeader(),
    body: JSON.stringify({ ...data, ownerEmail }),
  });
  return res.json();
}

export async function getInterests() {
  const res = await fetch(`${API}/interests`, {
    headers: await authHeader(),
  });
  return res.json();
}

export async function sendInterest(cropId, data) {
  const res = await fetch(`${API}/crops/${cropId}/interest`, {
    method: "POST",
    headers: await authHeader(),
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteCrop(id) {
  const res = await fetch(`${API}/crops/${id}`, {
    method: "DELETE",
    headers: await authHeader(),
  });
  return res.json();
}

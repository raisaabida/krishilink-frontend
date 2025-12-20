const API = import.meta.env.VITE_API_URL;

export async function getCrops() {
  const res = await fetch(`${API}/crops`);
  return res.json();
}

export async function getCropById(id) {
  const res = await fetch(`${API}/crops/${id}`);
  return res.json();
}

// Add ownerEmail automatically
export async function addCrop(data, ownerEmail) {
  const res = await fetch(`${API}/crops`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, ownerEmail }),
  });
  return res.json();
}

export async function getInterests() {
  const res = await fetch(`${API}/interests`);
  return res.json();
}

export async function sendInterest(cropId, data) {
  const res = await fetch(`${API}/crops/${cropId}/interest`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function deleteCrop(id) {
  const res = await fetch(`${API}/crops/${id}`, {
    method: "DELETE",
  });
  return res.json();
}

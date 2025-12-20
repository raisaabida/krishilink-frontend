/**
 * Simple simulated backend stored in localStorage.
 * This file exposes functions to work with crops, users and interests.
 * No Lorem text, and custom notifications used (not default alert).
 */

const LS_KEY = 'krishilink_db_v1';

function seed() {
  const existing = localStorage.getItem(LS_KEY);
  if (existing) return JSON.parse(existing);
  const now = Date.now();
  const db = {
    users: [
      { id: 'u1', name: 'Mr Owner', email: 'owner@example.com', photo: '', password: 'Owner123' },
      { id: 'u2', name: 'Rahim', email: 'rahim@example.com', photo: '', password: 'Rahim123' }
    ],
    crops: [
      {
        id: 'c1',
        name: 'Tomato',
        type: 'Vegetable',
        pricePerUnit: 55,
        unit: 'kg',
        quantity: 400,
        description: 'Fresh organic tomatoes harvested this week.',
        location: 'Bogura',
        image: '/assets/tomato.jpg',
        owner: { ownerEmail: 'owner@example.com', ownerName: 'Mr Owner', id: 'u1' },
        interests: [],
        createdAt: now - 1000*60*60*24
      },
      {
        id: 'c2',
        name: 'Sweet Corn',
        type: 'Grain',
        pricePerUnit: 30,
        unit: 'kg',
        quantity: 200,
        description: 'Sweet corn, tasty and juicy.',
        location: 'Rangpur',
        image: '/assets/corn.jpg',
        owner: { ownerEmail: 'owner@example.com', ownerName: 'Mr Owner', id: 'u1' },
        interests: [],
        createdAt: now - 1000*60*60*48
      }
    ]
  };
  localStorage.setItem(LS_KEY, JSON.stringify(db));
  return db;
}

function readDb() { return seed(); }
function writeDb(db) { localStorage.setItem(LS_KEY, JSON.stringify(db)); return db; }

export function getLatestCrops(limit=6) {
  const db = readDb();
  return db.crops.sort((a,b)=>b.createdAt - a.createdAt).slice(0, limit);
}
export function getAllCrops() { return readDb().crops.slice().sort((a,b)=>b.createdAt - a.createdAt); }
export function getCropById(id) { return readDb().crops.find(c => c.id===id); }

export function addCrop(crop, user) {
  const db = readDb();
  const newCrop = { ...crop, id: 'c'+(Date.now()), owner: { ownerEmail: user.email, ownerName: user.name, id: user.id }, interests: [], createdAt: Date.now() };
  db.crops.push(newCrop);
  writeDb(db);
  return newCrop;
}

export function updateCrop(id, patch) {
  const db = readDb();
  const idx = db.crops.findIndex(c=>c.id===id);
  if (idx===-1) throw new Error('Crop not found');
  db.crops[idx] = { ...db.crops[idx], ...patch };
  writeDb(db);
  return db.crops[idx];
}

export function deleteCrop(id) {
  const db = readDb();
  db.crops = db.crops.filter(c=>c.id!==id);
  writeDb(db);
  return true;
}

export function submitInterest(cropId, interest) {
  const db = readDb();
  const crop = db.crops.find(c=>c.id===cropId);
  if (!crop) throw new Error('Crop not found');
  // ensure owner can't submit
  if (crop.owner && crop.owner.ownerEmail === interest.userEmail) throw new Error('Owner cannot submit interest');
  // disable duplicate interest per user per crop
  const existing = crop.interests.find(i=>i.userEmail===interest.userEmail);
  if (existing) throw new Error('You have already sent an interest for this crop');
  const newInterest = { ...interest, _id: 'i'+Date.now(), status:'pending', cropId };
  crop.interests.push(newInterest);
  writeDb(db);
  return newInterest;
}

export function updateInterest(cropId, interestId, status) {
  const db = readDb();
  const crop = db.crops.find(c=>c.id===cropId);
  if (!crop) throw new Error('Crop not found');
  const item = crop.interests.find(i=>i._id===interestId);
  if (!item) throw new Error('Interest not found');
  item.status = status;
  // reduce quantity if accepted
  if (status === 'accepted') {
    crop.quantity = Math.max(0, (crop.quantity - (item.quantity || 0)));
  }
  writeDb(db);
  return item;
}

export function registerUser(user) {
  const db = readDb();
  const exists = db.users.find(u=>u.email===user.email);
  if (exists) throw new Error('Email already exists');
  const newUser = { id: 'u'+Date.now(), ...user };
  db.users.push(newUser);
  writeDb(db);
  return newUser;
}

export function loginUser(email, password) {
  const db = readDb();
  const u = db.users.find(x=>x.email===email && x.password===password);
  if (!u) throw new Error('Invalid credentials');
  return u;
}

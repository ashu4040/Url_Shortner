export const cookieOptions = {
  httpOnly: true,
  secure: true, // ✅ must be true on HTTPS (Render is HTTPS)
  sameSite: "None", // ✅ required for cross-origin (frontend/backend on different domains)
  maxAge: 1000 * 60 * 60, // 1 hour
};

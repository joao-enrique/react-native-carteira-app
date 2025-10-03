import rateLimit from "../config/upstash";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await rateLimit.limit(req.ip);
    if (!success) {
      return res.status(429).json({ message: "Too many requests" });
    }
    next();
    } catch (error) {
        console.error("Rate limiting error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export default rateLimiter;


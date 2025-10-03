import { Redis } from '@upstash/redis'
import { RateLimit } from '@upstash/ratelinit'
import 'dotenv/config'


const rateLimit = new RateLimit({
  redis: Redis.fromEnv(),
  limiter: RateLimit.slindingWindow(4, "60s")
});

export default rateLimit
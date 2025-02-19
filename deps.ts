import EventEmitter from "https://deno.land/x/events@v1.0.0/mod.ts"
import { connect } from "https://deno.land/x/redis@v0.25.5/mod.ts"
import type { Redis as Client } from "https://deno.land/x/redis@v0.25.5/mod.ts"
import randomBytes from "https://deno.land/std@0.139.0/node/_crypto/randomBytes.ts"

export { EventEmitter, connect, Client, randomBytes};
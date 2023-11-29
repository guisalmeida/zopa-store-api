const bcrypt = require("bcrypt");

export async function hashPassword(password: string): Promise<string | null> {
  return await bcrypt.hash(password, 8);
}

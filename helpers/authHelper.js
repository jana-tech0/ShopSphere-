import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    if (!password) throw new Error("Password is empty or undefined");

    const saltRounds = 10;
    console.log("Generating salt...");
    const salt = await bcrypt.genSalt(saltRounds);
    console.log("Salt generated:", salt);

    console.log("Hashing password...");
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed Password:", hashedPassword);

    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password:", error.message);
    return null;
  }
};

export const comparePassword = async (password, hashedPassword) => {
  console.log("Entered Password:", password);
  console.log("Stored Hashed Password:", hashedPassword);

  const match = await bcrypt.compare(password, hashedPassword);
  console.log("Password Match Result:", match ? "✅ Match" : "❌ No Match");

  return match;
};

import type { RequestHandler } from "express";
import { userSchema } from "../validation/index"
import * as bcrypt from 'bcryptjs';
import { User, userRole } from "../models/User"
import jwt from "jsonwebtoken";

export const register: RequestHandler = async (req, res) => {
    const parsedBody = userSchema.parse(req.body);
    const { name, email, password } = parsedBody;
    const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);
 
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role: userRole.USER
    })

    res.json({
        message: "User created successfully",
        user:{
            id: user._id,
            name: user.name,
            email: user.name,
            role: user.role
        }
    })
}

export const signin: RequestHandler = async(req, res) => {
  
   try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
         if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
       if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
     const token = jwt.sign(
      {
        userId: user._id.toString(),
        role: user.role,
      }, process.env.JWT_SECRET as string,
    );
       

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });

   } catch(error){
        res.status(500).json({ message: "Server error" });
   }
}

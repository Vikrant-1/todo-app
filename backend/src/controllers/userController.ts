import { Request, Response } from "express";
import { User } from "../models/userModel";
import zod from "zod";

const zodRegisterCheck = zod.object({
  username: zod.string().trim().min(3),
  password: zod.string().trim().min(6),
  name: zod.string().trim().min(2),
  avatar: zod.string(),
});

const registerUser = async (req: Request, res: Response) => {
  try {
    const { username, password, name, avatar } = req.params;

    const check = zodRegisterCheck.safeParse(req.params);

    if (!check.success) {
      return res.status(401).json({
        message: check.error,
      });
    }

    const newUser = await User.create({
      username: username,
      password: password,
      name: name,
      avatar: avatar,
    });


    if (!newUser) {
      return res.status(401).json({
        message: "Failed to create User",
      })
    };

    return res.status(201).json({
      message: "User Created Successfully !!",
      data: {
        id: newUser._id,
        name: newUser.name,
        username: newUser.username,
      }
    });
  } catch (error) { }
};

const zodLoginCheck = zod.object({
  username: zod.string().min(3),
  password: zod.string().min(6),
})

const loginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.params;
    const check = zodLoginCheck.safeParse(req.params);

    if (!check.success) {
      return res.status(401).json({
        message: check.error,
      })
    };

    const checkUser = await User.findOne({ username });

    if (!checkUser) {
      return res.status(401).json({
        message: 'User not found',
      })
    }

    //TODO :check password and compare

  } catch (error) { }
};

const updateAvatar = (req: Request, res: Response) => {
  try {
  } catch (error) { }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      message: "User found",
      data: user,
    })
  } catch (error) { }
};

const updateUser = (req: Request, res: Response) => {
  try {
  } catch (error) { }
};

const updatePassword = (req: Request, res: Response) => {
  try {
  } catch (error) { }
};

export {
  registerUser,
  loginUser,
  updateAvatar,
  updatePassword,
  updateUser,
  getUser,
};

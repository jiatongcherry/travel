// app/api/login/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import connectDB from '../../../lib/mongodb';
import User from '../../../lib/models/User';

interface LoginRequest {
  email: string;
  password: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
}

export async function POST(request: Request) {
  try {
    // // 连接数据库
    // await connectDB();

    // 解析请求体
    const { email, password }: LoginRequest = await request.json();
    console.log('登录请求:', { email, password });
    if (!email || !password) {
      return NextResponse.json({ error: '邮箱和密码不能为空' }, { status: 400 });
    }

    // 查找用户
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ error: '用户不存在' }, { status: 404 });
    }

    // 验证密码
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ error: '密码错误' }, { status: 401 });
    }

    // 登录成功，返回用户信息（排除密码）
    const userResponse: UserResponse = {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
    };

    return NextResponse.json({ message: '登录成功', user: userResponse });
  } catch (error) {
    console.error('登录错误:', error);
    return NextResponse.json({ error: '服务器错误' }, { status: 500 });
  }
}
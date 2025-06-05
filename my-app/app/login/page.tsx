// app/login/page.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('请填写邮箱和密码');
      return;
    }

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || '登录失败');
        return;
      }

      // 登录成功，重定向到 /blog
      router.push('/blog');
    } catch (err) {
      setError('服务器错误，请稍后重试');
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* 背景层 */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-50"></div>
      {/* 登录表单 */}
      <div className="absolute z-[100] w-full h-full top-[50%] flex flex-col items-center justify-center transform -translate-y-1/2 space-y-4">
        <div className="w-[90%] max-w-md bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold text-center mb-4">登录</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                邮箱
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="请输入邮箱"
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                密码
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="请输入密码"
                className="w-full p-2 border rounded text-black"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-rose-600 text-white rounded hover:bg-rose-700 transition-all duration-300"
            >
              登录
            </button>
          </form>
          <p className="text-center mt-4">
            没有账户？{' '}
            <Link href="/register" className="text-rose-600 hover:underline">
              注册
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
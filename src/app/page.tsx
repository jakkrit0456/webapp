"use client";

import React from "react";

export default function ContactPage() {

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [tel, setTel] = React.useState(""); 
  const [texterea, setTexterea] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('ส่งข้อมูลเรียบร้อยเเล้ว!!!');
    //ส่งข้อมูลไปยัง Database หรือ API
  }
  

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rouded-xl shadow-lg w-full max-w-wd">
        <h2 className="test-2xl font-bold mb-6 text-gray-800">ติดต่อเรา</h2>

        <form onSubmit={handleSubmit} className="sspace-y-4">
          {/* ชื่อ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">ชื่อของคุณ</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value) }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณากรอกชื่อของคุณ"
              required />
          </div>

          {/* อีเมล */}
          <div>
            <label className="block text-sm font-medium text-gray-700">อีเมลของคุณ</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value) }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณากรอกอีเมลของคุณ"
              required />
          </div>

          {/* เบอร์โทรศัพท์ */}
          <div>
            <label className="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
            <input
              type="text"
              value={tel}
              onChange={(e) => setTel(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณากรอกเบอร์โทรศัพท์ของคุณ"
              required />
          </div>

          {/* ข้อความเพิ่มเติม */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">ข้อความเพิ่มเติม</label>
            <input
              type="text"
              value={texterea}
              onChange={(e) => setTexterea(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณากรอกข้อความเพิ่มเติมของคุณ (ถ้ามี)" />
          </div> */}
          <div>
            <label className="block text-sm font-medium text-gray-700">ข้อความเพิ่มเติม</label>
            <textarea
              value={texterea}
              onChange={(e) => setTexterea(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="กรุณากรอกข้อความเพิ่มเติมของคุณ (ถ้ามี)"
              rows={4} />
          </div>

          {/* ปุ่มส่งข้อมูล */}
          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
              ส่งข้อมูล
          </button>

        </form>
      </div>
    </main>
  )
}
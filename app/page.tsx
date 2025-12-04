"use client";

import { useState } from "react";

export default function Home() {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#050608] text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/5 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="text-sm font-semibold tracking-[0.35em] uppercase">
            ShenAir Studio
          </div>
          <nav className="hidden gap-6 text-xs md:flex">
            <a href="#about" className="hover:text-slate-300">
              About
            </a>
            <a href="#photos" className="hover:text-slate-300">
              Stills
            </a>
            <a href="#films" className="hover:text-slate-300">
              Films
            </a>
            <a href="#pricing" className="hover:text-slate-300">
              Pricing
            </a>
            <a href="#contact" className="hover:text-slate-300">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="border-b border-white/5">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row md:items-center md:py-20">
          <div className="flex-1 space-y-6">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
              Director • Cinematography • Stills
            </p>
            <h1 className="text-3xl font-semibold tracking-wide md:text-4xl">
              ShenAir Studio
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300">
              珅航影像專注人物、人像、紀實與活動影像，結合照片與影片創作。
              以電影感構圖、真實情緒與光線設計，安靜地記錄每一次不重來的瞬間，
              把畫面留給當下的人和故事。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#films"
                className="rounded-full bg-slate-100 px-6 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-black hover:bg-white"
              >
                View Films
              </a>
              <a
                href="#photos"
                className="rounded-full border border-slate-500 px-6 py-2 text-[11px] uppercase tracking-[0.25em] text-slate-200 hover:border-slate-200"
              >
                View Stills
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center md:justify-end">
            <div className="w-full max-w-sm">
              <div className="aspect-square w-full overflow-hidden rounded-xl border border-white/10 bg-black flex items-center justify-center">
                <img
                  src="/stills/logo.jpeg"
                  alt="ShenAir Studio Logo"
                  className="h-[80%] w-[80%] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-b border-white/5 bg-[#06080d] py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="space-y-4">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
              About
            </p>
            <h2 className="text-xl font-semibold">ShenAir Studio 珅航影像</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              ShenAir Studio 由珅航創立，結合攝影與剪輯，提供人物、人像、
              活動紀實與品牌影像等服務。拍攝時重視光線、構圖與當下情緒，
              偏好自然、不打擾的拍攝方式，讓被拍的人可以輕鬆做自己。
            </p>
            <p className="text-sm leading-relaxed text-slate-300">
              在影片創作上偏向電影感視角，注重鏡頭運動與畫面節奏，
              不追求花俏特效，而是讓聲音、呼吸與眼神慢慢堆疊成一支作品。
              適合記錄活動、品牌故事以及個人作品集。
            </p>
          </div>

          <div className="aspect-[4/5] w-full overflow-hidden rounded-xl border border-white/10">
            <img
              src="/stills/still2.jpeg"
              alt="Behind the Scenes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section
        id="photos"
        className="border-b border-white/5 bg-[#050608] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
                Selected Stills
              </p>
              <h2 className="text-lg font-semibold">精選攝影作品</h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              以橫式畫面為主，保留現場空氣感與距離感。
              真實的光線、表情與細節，比完美姿勢更重要。
            </p>
          </div>

          <div className="mb-6">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10">
              <img
                src="/stills/still1.jpeg"
                alt="Featured Still"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
              <img
                src="/stills/still3.jpeg"
                alt="Still 2"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
              <img
                src="/stills/still4.jpeg"
                alt="Still 3"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
              <img
                src="/stills/still5.jpeg"
                alt="Still 4"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
              <img
                src="/stills/still6.jpeg"
                alt="Still 5"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="films"
        className="border-b border-white/5 bg-[#030712] py-18 md:py-20"
      >
        <div className="mx-auto max-w-4xl px-6 md:px-4">
          <div className="space-y-4">
            <p className="text-[12px] uppercase tracking-[0.35em] text-slate-400">
              Film Works
            </p>
            <h2 className="text-xl font-semibold">影片作品｜Cinematic</h2>
            <p className="text-sm leading-relaxed text-slate-300">
              影片多以真實紀錄為底，搭配簡單的運鏡與剪輯節奏，
              讓當下的聲音、空景與細小表情自然被看見。
              適合活動紀錄、品牌故事、個人形象與 Side Project 作品。
            </p>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="relative w-full max-w-4xl bg-black">
              <video
                className="w-full h-auto"
                controls
                preload="metadata"
                poster="/films/main-film.jpg"
              >
                <source src="/videos/main-film.mp4" type="video/mp4" />
                您的瀏覽器不支援 HTML5 影片播放。
              </video>
            </div>
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="border-b border-white/5 bg-[#050608] py-16 md:py-20"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-6 space-y-2">
            <p className="text-[11px] uppercase tracking-[0.35em] text-slate-400">
              Pricing
            </p>
            <h2 className="text-lg font-semibold">拍攝方案與地區費用</h2>
            <p className="max-w-xl text-sm text-slate-400">
              依地區提供半天、全天與加時計費方案。實際拍攝會先確認行程與需求，
              希望在清楚的溝通下，給你合理又安心的預算範圍。
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/40 p-5">
              <h3 className="text-sm font-semibold">北部｜北北基</h3>
              <ul className="space-y-1 text-sm text-slate-200">
                <li>半天（4 小時內）：6000</li>
                <li>全天（8 小時內）：10000</li>
                <li>加時費：2000 / 小時</li>
              </ul>
              <p className="mt-2 text-[11px] text-slate-400">
                適合北北基地區的人像拍攝、活動紀錄與小型專案，
                通勤時間相對彈性，檔期也較好安排。
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/40 p-5">
              <h3 className="text-sm font-semibold">中部</h3>
              <ul className="space-y-1 text-sm text-slate-200">
                <li>半天：12000</li>
                <li>全天：18000</li>
                <li>拍到隔天過夜：+1200</li>
                <li>加時費：2200 / 小時</li>
              </ul>
              <p className="mt-2 text-[11px] text-slate-400">
                若需連續拍攝或跨天行程，可事先溝通時間與流程，
                避免趕場，讓拍攝節奏更舒服。
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-xl border border-white/10 bg-black/40 p-5">
              <h3 className="text-sm font-semibold">南部</h3>
              <ul className="space-y-1 text-sm text-slate-200">
                <li>半天：15000</li>
                <li>全天：25000</li>
                <li>拍到隔天住宿費：1800</li>
                <li>加時費：2800 / 小時</li>
              </ul>
              <p className="mt-2 text-[11px] text-slate-400">
                以高雄、台南等地為主，會一併考量交通與住宿安排，
                讓拍攝過程穩定、不匆忙。
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-white/10 bg-black/40 p-5">
            <h3 className="mb-2 text-sm font-semibold">檔案交付</h3>
            <ul className="space-y-1 text-sm text-slate-200">
              <li>照片格式：RAW、JPEG</li>
              <li>影片格式：MP4、MOV</li>
              <li>交付方式：提供 Google 雲端硬碟下載連結</li>
              <li>燒錄光碟：每片 150 元</li>
            </ul>
            <p className="mt-2 text-[11px] text-slate-400">
              若有特別需求（例如外接硬碟交付、特定編碼格式或備份規劃），
              都可以在洽談時一起討論，找到最適合你的方式。
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="border-b border-white/5 bg-[#030712] py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 space-y-2">
            <p className="text-[12px] uppercase tracking-[0.35em] text-slate-400">
              Contact
            </p>
            <h2 className="text-xl font-semibold text-slate-100">
              聯絡方式 / Contact
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-slate-400">
              如果你有拍攝想法、正在規劃活動，或只是想先聊聊可能性，
              都歡迎先透過下面的方式聯絡，不一定要準備好所有細節才開始。
            </p>
          </div>

          <div className="space-y-10">

            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  主要聯絡渠道
                </p>

                <p className="mt-3 text-base text-slate-200">
                  TikTok：{" "}
                  <span className="font-semibold">@ShenAirStudio</span>
                </p>

                <p className="mt-1 text-base text-slate-200">
                  LINE： <span className="font-semibold">yukan11</span>
                </p>
              </div>

              <div className="space-y-2 text-sm leading-relaxed text-slate-400">
                <p>
                  TikTok 上會不定期更新最新影片、剪輯實驗和側拍花絮，
                  可以快速感受整體風格與節奏。
                </p>
                <p>
                  若有合作企劃或正式拍攝需求，建議用 LINE 溝通細節，
                  包含日期、地點、預算與期待的畫面。
                </p>
              </div>
            </div>

<div>
  <p className="text-sm text-slate-300 mb-3">快速掃描前往</p>

  <div className="flex flex-row gap-6 flex-wrap">

    {/* TikTok */}
    <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/40 px-4 py-4">
      <img
        src="/stills/tiktok.jpeg"
        alt="TikTok QR"
        className="h-32 w-32 rounded border border-white/20 object-contain cursor-pointer hover:opacity-80 transition"
        onClick={() => setPreviewSrc("/stills/tiktok.jpeg")}
      />
      <div className="space-y-1">
        <p className="text-sm font-semibold text-slate-100">TikTok</p>
        <p className="text-sm text-slate-400">
          掃描 QR Code 直接開啟 ShenAir Studio TikTok 作品頁。
        </p>
      </div>
    </div>

    {/* LINE */}
    <div className="flex items-center gap-4 rounded-lg border border-white/10 bg-black/40 px-4 py-4">
      <img
        src="/stills/line.jpeg"
        alt="LINE QR"
        className="h-32 w-32 rounded border border-white/20 object-contain cursor-pointer hover:opacity-80 transition"
        onClick={() => setPreviewSrc("/stills/line.jpeg")}
      />
      <div className="space-y-1">
        <p className="text-sm font-semibold text-slate-100">LINE</p>
        <p className="text-sm text-slate-400">
          掃描加入 LINE 聯絡帳號，適合初步討論拍攝與預算。
        </p>
      </div>
    </div>

  </div>
</div>

          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-[11px] text-slate-500">
          <span>ShenAir Studio © 2025</span>
          <span>All Rights Reserved.</span>
        </div>
      </footer>

      {previewSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setPreviewSrc(null)}
        >
          <img
            src={previewSrc}
            alt="QR Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}
    </main>
  );
}

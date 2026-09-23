import cvShot from "./assets/screenshots/cv.jpg";
import ldStoreShot from "./assets/screenshots/ld-store-anh3.jpg";
import lvDeltaForceShot from "./assets/screenshots/lv-delta-force.jpg";
import lvHealthShot from "./assets/screenshots/lv-health.jpg";
import lvShoppingShot from "./assets/screenshots/lv-shopping.jpg";

type Status = "live" | "dev" | "offline";

type Node = {
  codename: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: Status;
  url?: string;
  github?: string;
  shot?: string;
};

const nodes: Node[] = [
  {
    codename: "cv",
    name: "CV Song Ngữ",
    tagline: "Không phải PDF tĩnh",
    description:
      "Hồ sơ cá nhân với nội dung chỉnh sửa qua dashboard, hiển thị song ngữ Anh/Việt, in ra PDF một cột sạch sẽ.",
    stack: ["React", "Vite", "TypeScript"],
    status: "live",
    url: "https://cv-levinh.vercel.app",
    github: "https://github.com/levinh0612/levinh-cv",
    shot: cvShot,
  },
  {
    codename: "lv-health",
    name: "Nhật Ký Sức Khỏe",
    tagline: "Theo dõi cân nặng & InBody",
    description:
      "Ghi cân nặng, chỉ số InBody, bữa ăn và buổi tập mỗi ngày, phân tích xu hướng theo thời gian.",
    stack: ["Next.js"],
    status: "live",
    url: "https://lv-health.vercel.app",
    github: "https://github.com/levinh0612/lv-health",
    shot: lvHealthShot,
  },
  {
    codename: "lv-shopping",
    name: "Sắm Sửa",
    tagline: "Danh sách mua sắm thông minh",
    description:
      "Gom link sản phẩm muốn mua, theo dõi giá, phân loại theo trạng thái săn sale từ 9.9 đến 12.12.",
    stack: ["Next.js"],
    status: "live",
    url: "https://lv-shopping.vercel.app",
    github: "https://github.com/levinh0612/lv-shopping",
    shot: lvShoppingShot,
  },
  {
    codename: "ld-store-anh3",
    name: "Anh Ba Cơm Tấm",
    tagline: "Gọi đặt món, giao tận nơi",
    description:
      "Storefront đặt món cho quán cơm tấm gia đình — hơn 160 món, thực đơn theo danh mục, đặt hàng qua điện thoại/Zalo.",
    stack: ["React", "Vite"],
    status: "live",
    url: "https://ld-store-anh3.vercel.app",
    shot: ldStoreShot,
  },
  {
    codename: "lv-delta-force",
    name: "Delta Force Tân Binh",
    tagline: "Hướng dẫn 7 ngày cho team WP",
    description:
      "Lộ trình 7 ngày cho người mới chơi Delta Force kèm bản đồ, operator, tips theo trình độ, nhật ký raid, máy tính loadout và quiz.",
    stack: ["React", "Vite", "TypeScript"],
    status: "live",
    url: "https://lv-delta-force.vercel.app",
    github: "https://github.com/levinh0612/lv-delta-force",
    shot: lvDeltaForceShot,
  },
  {
    codename: "poke-task-master",
    name: "PokéTask Master",
    tagline: "Todo list kiểu gamify",
    description:
      "Ứng dụng quản lý công việc theo hướng game hoá, lấy cảm hứng Pokémon. Đang phát triển, chưa triển khai.",
    stack: ["Next.js"],
    status: "dev",
  },
  {
    codename: "landing-page-factory",
    name: "Landing Page Factory",
    tagline: "Nền tảng dựng landing page",
    description:
      "Quản lý vòng đời landing page marketing — từ thư viện template, tạo dự án, triển khai đến giám sát. Monorepo nhiều dịch vụ.",
    stack: ["React", "Node", "Prisma", "PostgreSQL"],
    status: "dev",
    github: "https://github.com/levinh0612/landing-page-factory",
  },
];

const statusMeta: Record<Status, { label: string; dot: string; text: string }> = {
  live: { label: "LIVE", dot: "bg-[var(--live)] status-live", text: "text-[var(--live)]" },
  dev: { label: "DEV", dot: "bg-[var(--amber)]", text: "text-[var(--amber)]" },
  offline: { label: "OFFLINE", dot: "bg-[var(--ink-faint)]", text: "text-[var(--ink-faint)]" },
};

/** Corner-bracket + reticle mark — mirrors public/favicon.svg so tab icon and in-page logo match. */
function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M8 8 L8 12 M8 8 L12 8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M24 8 L24 12 M24 8 L20 8" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M8 24 L8 20 M8 24 L12 24" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.5" />
      <path d="M24 24 L24 20 M24 24 L20 24" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.5" />
      <circle cx="16" cy="16" r="5.5" fill="none" stroke="var(--amber)" strokeWidth="1.8" />
      <circle cx="16" cy="16" r="2" fill="var(--amber)" />
    </svg>
  );
}

function NodePreview({ node }: { node: Node }) {
  if (node.shot) {
    return (
      <div className="relative aspect-video overflow-hidden border-b border-[var(--line)] bg-[var(--bg)]">
        <img
          src={node.shot}
          alt={`Ảnh chụp giao diện ${node.name}`}
          loading="lazy"
          className="h-full w-full object-cover object-top grayscale-[35%] transition-all duration-500 ease-out group-hover:scale-[1.06] group-hover:grayscale-0"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-raised)] via-transparent to-transparent opacity-90" />
        <div className="pointer-events-none absolute inset-0 translate-y-[-100%] bg-gradient-to-b from-transparent via-[rgba(255,180,84,0.08)] to-transparent transition-transform duration-700 ease-out group-hover:translate-y-[100%]" />
      </div>
    );
  }

  return (
    <div className="relative flex aspect-video items-center justify-center overflow-hidden border-b border-[var(--line)] bg-[repeating-linear-gradient(135deg,var(--line)_0px,var(--line)_1px,transparent_1px,transparent_14px)]">
      <span className="border border-[var(--amber-dim)] px-3 py-1 text-[11px] tracking-[0.2em] text-[var(--amber)]">
        ĐANG XÂY DỰNG
      </span>
    </div>
  );
}

function NodeCard({ node, index }: { node: Node; index: number }) {
  const meta = statusMeta[node.status];
  return (
    <article
      className="rise group relative overflow-hidden border border-[var(--line)] bg-[var(--bg-raised)] transition-colors duration-300 hover:border-[var(--line-bright)]"
      style={{ animationDelay: `${index * 90}ms` }}
    >
      <NodePreview node={node} />

      <div className="p-6">
        <div className="flex items-center justify-between text-xs tracking-widest text-[var(--ink-faint)]">
          <span>NODE {String(index + 1).padStart(2, "0")}</span>
          <span className={`inline-flex items-center gap-2 ${meta.text}`}>
            <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
            {meta.label}
          </span>
        </div>

        <p className="mt-5 text-xs text-[var(--ink-faint)]">/{node.codename}</p>
        <h3 className="font-display mt-1 text-2xl font-semibold leading-tight text-[var(--ink)]">
          {node.name}
        </h3>
        <p className="mt-1 text-sm text-[var(--amber)]">{node.tagline}</p>

        <p className="mt-4 text-[13px] leading-relaxed text-[var(--ink-dim)]">
          {node.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {node.stack.map((s) => (
            <span
              key={s}
              className="border border-[var(--line)] px-2 py-0.5 text-[11px] text-[var(--ink-dim)]"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-4 border-t border-[var(--line)] pt-4 text-sm">
          {node.url ? (
            <a
              href={node.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--ink)] transition-colors hover:text-[var(--amber)]"
            >
              Mở app <span aria-hidden>↗</span>
            </a>
          ) : (
            <span className="text-[var(--ink-faint)]">Chưa triển khai</span>
          )}
          {node.github && (
            <a
              href={node.github}
              target="_blank"
              rel="noreferrer"
              className="ml-auto text-[var(--ink-faint)] transition-colors hover:text-[var(--ink)]"
              aria-label={`GitHub của ${node.name}`}
            >
              {"</>"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  const liveCount = nodes.filter((n) => n.status === "live").length;

  return (
    <div className="min-h-screen bg-[var(--bg)]">
      <header className="border-b border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2.5">
            <Logo className="h-6 w-6 text-[var(--ink-faint)]" />
            <span className="font-display text-lg font-bold tracking-tight">
              LV<span className="text-[var(--amber)]">.</span>ECOSYSTEM
            </span>
          </div>
          <div className="hidden items-center gap-2 text-xs text-[var(--ink-faint)] sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--live)] status-live" />
            {liveCount}/{nodes.length} NODE ĐANG HOẠT ĐỘNG
          </div>
        </div>
      </header>

      <section className="grid-field relative overflow-hidden border-b border-[var(--line)]">
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="rise text-xs tracking-[0.3em] text-[var(--ink-faint)]">
            TRẠM ĐIỀU PHỐI CÁ NHÂN
          </p>
          <h1 className="font-display text-glow rise mt-5 max-w-3xl text-[2.5rem] font-semibold leading-[1.05] sm:text-6xl">
            Mọi webapp tôi làm,
            <br />
            quy về <span className="text-[var(--amber)]">một điểm.</span>
          </h1>
          <p
            className="rise mt-6 max-w-xl text-sm leading-relaxed text-[var(--ink-dim)] sm:text-base"
            style={{ animationDelay: "120ms" }}
          >
            Danh mục các sản phẩm cá nhân — từ CV, sức khỏe, mua sắm đến các nền
            tảng đang xây. Mỗi node dưới đây là một dự án độc lập, tự vận hành.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {nodes.map((node, i) => (
            <NodeCard key={node.codename} node={node} index={i} />
          ))}
        </div>
      </main>

      <footer className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-xs text-[var(--ink-faint)] sm:flex-row sm:items-center sm:justify-between">
          <span>Lê Vinh · levinh0612</span>
          <a
            href="https://github.com/levinh0612"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-[var(--ink)]"
          >
            github.com/levinh0612 ↗
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;

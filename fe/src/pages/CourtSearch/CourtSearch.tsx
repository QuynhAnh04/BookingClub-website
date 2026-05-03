import { useEffect, useMemo, useState } from "react";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import CourtSearchCard from "../../components/common/CourtSearchCard/CourtSearchCard";
import Pagination from "../../components/common/Pagination/Pagination";
import "./CourtSearch.css";

interface CourtItem {
  id: string;
  name: string;
  address: string;
  priceRange: string;
  rating: number;
  images: string[];
}

const MOCK_DATA: CourtItem[] = Array.from({ length: 36 }).map((_, i) => ({
  id: `C${i + 1}`,
  name: `Sân Thứ ${i + 1}`,
  address: i % 3 === 0 ? "Quận 1, TP.HCM" : i % 3 === 1 ? "Quận 3, TP.HCM" : "Thủ Đức, TP.HCM",
  priceRange: "100.000đ - 300.000đ",
  rating: Math.round((4 + Math.random()) * 10) / 10,
  images: ["https://picsum.photos/400/300?random=" + i],
}));

function CourtSearch() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 9;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return MOCK_DATA;
    return MOCK_DATA.filter((c) => c.name.toLowerCase().includes(q) || c.address.toLowerCase().includes(q));
  }, [query]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);

  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <main className="court-search-page">
      <header className="search-header">
        <h1>Tìm kiếm sân</h1>
        <p>Tìm sân theo tên hoặc vị trí</p>
      </header>

      <SearchBar value={query} onChange={(v) => { setQuery(v); setPage(1); }} />

      <section className="results">
        <div className="results-grid">
          {pageItems.map((c) => (
            <CourtSearchCard key={c.id} court={c} />
          ))}
        </div>

        <Pagination page={page} totalPages={totalPages} onChange={setPage} />
      </section>
    </main>
  );
}

export default CourtSearch;

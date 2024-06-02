"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useAtomValue } from "jotai";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useState, useEffect } from "react";
import { selectedSymbol } from "@/app/english/state/english";
import { pdfMap } from "../data/index";
import { Progress, Spin } from "antd";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url,
).toString();
const PDF_LINK = "https://leexiao.site/file/en.pdf";
export default function PhoneticsPdf() {
  const select = useAtomValue(selectedSymbol);
  useEffect(() => {
    if (!select) return;
    let no = pdfMap.get(select.text);
    if (no) {
      toPage(no - 4);
    }
  }, [select]);
  const [totalPages, setTotalPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setTotalPages(numPages);
  }

  const next = () => {
    if (pageNumber + 1 >= totalPages) return;
    setPageNumber(pageNumber + 1);
  };
  const prev = () => {
    if (pageNumber - 1 <= 0) return;
    setPageNumber(pageNumber - 1);
  };
  const toPage = (page: number) => {
    if (!page || page < 1 || page > totalPages - 1) return;
    setPageNumber(page);
  };
  const [percent, setPercent] = useState(0);
  const onLoadProgress = ({ loaded, total }) => {
    setPercent(loaded / total * 100);
  };
  return (
    <div className="phonetics-pdf-wrapper">
      <div className="page-controls">
        <button disabled={pageNumber - 1 <= 0} onClick={prev}>
          ‹
        </button>
        <span>
          {pageNumber} of {totalPages}
        </span>
        <button disabled={pageNumber + 1 >= totalPages} onClick={next}>
          ›
        </button>
      </div>

      <div className="pdf-content">
        <Document
          file={PDF_LINK}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<Progress type="circle" percent={percent} format={percent=>`${percent.toFixed(2)}%`} />}
          onLoadProgress={onLoadProgress}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

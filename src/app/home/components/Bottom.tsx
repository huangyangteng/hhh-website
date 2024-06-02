"use client";
import Link from "next/link";
import { Tooltip } from "antd";

import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneFilled,
  PhoneOutlined,
  ReadOutlined,
  FileTextOutlined,
  WechatOutlined,
} from "@ant-design/icons";

export default function Bottom() {
  return (
    <footer className="home-bottom">
      <div className="footer-inner">
        <div className="footer-left">
          <Link href={"https://beian.miit.gov.cn/"}>蜀ICP备2021027437号-1</Link>
        </div>
        <div className="footer-icons">
          <Tooltip title={"github"}>
            <Link target="_blank" href="https://github.com/huangyangteng">
              <GithubOutlined />
            </Link>
          </Tooltip>
          <Tooltip title={"hhhyangteng"}>
            <Link target="_blank" href="/wechat">
              <WechatOutlined />
            </Link>
          </Tooltip>
          <Tooltip title={"hyangteng@gmail.com"}>
            <Link target="_blank" href={"mailto:hyangteng@gmail.com"}>
              <MailOutlined />
            </Link>
          </Tooltip>
          <Tooltip title={"blog"}>
            <Link
              target="_blank"
              href="https://juejin.cn/user/4388906148312295/posts?sort=popular"
            >
              <ReadOutlined />
            </Link>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

function RecommendItem({ item }) {
  return (
    <Link href={item.link} target={"_blank"} className="recommend-item">
      <img src={item.logo} alt={item.name} />
      <div>
        <h4>{item.name}</h4>
        <p>{item.description}</p>
      </div>
    </Link>
  );
}

export default function RecommendedReading() {
  const list = [
    {
      name: "酷壳-CoolShell",
      description: "享受编程和技术所带来的快乐 – Coding Your Ambition",
      link: "https://coolshell.cn/",
      logo: "https://coolshell.cn/coolshell_logo.png",
    },
    {
      name: "当然我在扯淡",
      description: "王垠的blog",
      link: "https://www.yinwang.org/",
      logo: "https://www.yinwang.org/images/Yc.jpg",
    },
    {
      name: "overreacted",
      description:
        "由Redux的创始人之一Dan Abramov 创立，分享了他关于 React 的技巧",
      link: "https://overreacted.io/",
      logo: "https://source.boringavatars.com/beam",
    },
    {
      name: "程序员英语学习指南",
      description:
          "专为程序员编写的英语学习指南。" ,
      link: "https://a-programmers-guide-to-english.harryyu.me/",
      logo: "https://avatars.githubusercontent.com/u/2942913?s=48&v=4",
    },
    {
      name: "小猪佩奇学英语",
      description:
          "专为程序员编写的英语学习指南。" ,
      link: "https://www.bilibili.com/video/BV1gB4y1B7CC/",
      logo: "/images/buzhang.jpg"
    },
    {
      name: "150天听懂英文剧",
      description:
          "跟我150天，保证你不看字幕听懂英文剧" ,
      link: "https://www.bilibili.com/video/BV1Gx421U7vV/",
      logo: "/images/buzhang.jpg"
    },
    {
      name: "六个月即能学好英语",
      description:
          "用6个月把英语学到母语水平" ,
      link: "https://www.bilibili.com/video/BV1LK4y147Ho/?spm_id_from=333.337.search-card.all.click&vd_source=6baf3861f0497525dc85a8a0b6bed689",
      logo: "https://source.boringavatars.com/marble/120/Maria%20Mitchell?colors=264653,2a9d8f,e9c46a,f4a261,e76f51"
    },

  ];
  return (
    <section className="recommend-reading">
      <header>
        <i></i>
        <h3>Recommended Learning Resources</h3>
        <i></i>
      </header>
      <div className="recommend-reading-list">
        {list.map((item) => (
          <RecommendItem key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
}

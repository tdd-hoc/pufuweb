import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css"; // fen có thể thêm CSS riêng

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // 1s, chỉ chạy 1 lần
  }, []);

 return (
    <div className="app">
      {/* Header trên cùng */}
      <header className="header">
        <img src="/image.png" alt="Logo" className="logo" />
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="overlay">
          <div className="content">
            {/* Cột bên trái */}
            <div className="column left">
           
              <p>
                Pufu ra đời từ những ký ức thân quen: là mùi cơm thơm dẻo bên bếp
                nhà, là bàn tay mẹ vun từng chén gạo và là tình yêu cây lúa ngấm
                vào máu thịt.
                <br />
                Chúng tôi tạo nên Pufu với tất cả nhiệt huyết, trách nhiệm và
                niềm tin: thực phẩm dinh dưỡng là nền tảng cho một cuộc sống
                khỏe mạnh và ý nghĩa.
                <br />
                Với mong muốn lan tỏa giá trị đó từ Việt Nam ra thế giới, Pufu
                cam kết mang đến những sản phẩm giàu dinh dưỡng, an toàn cho sức
                khỏe, trách nhiệm với xã hội và thân thiện với môi trường.
              </p>
            </div>

            {/* Cột bên phải */}
            <div className="column right" data-aos="fade-left">
              <h2>Năng lượng thuần khiết từ thiên nhiên</h2>
              <ul>
                <li>Môi trường (E): canh tác chuẩn SRP, giảm phát thải, bao bì kraft phân hủy sinh học.</li>
                <li>Xã hội (S): đồng hành cùng nông dân, trao cơ hội nghề thủ công cho phụ nữ nông thôn.</li>
                <li>Quản trị (G): minh bạch, kiểm soát chất lượng nghiêm ngặt.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

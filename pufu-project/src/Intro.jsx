import "./Intro.css";

export default function Intro() {
  return (
    <div className="container">
      {/* Cột trái */}
      <div className="left">
        <h1>Image background ruộng lúa</h1>
        <h2>Tiêu đề</h2>

        <p>
          <b>Pufu</b> ra đời từ những ký ức thân quen: là mùi cơm thơm dẻo bên
          bếp nhà, là bàn tay mẹ vun từng chén gạo và là tình yêu cây lúa ngấm
          vào máu thịt.
        </p>

        <p>
          Chúng tôi tạo nên <b>Pufu</b> với tất cả nhiệt huyết, trách nhiệm và
          niềm tin: thực phẩm dinh dưỡng là nền tảng cho một cuộc sống khỏe
          mạnh và ý nghĩa.
        </p>

        <p>
          Với mong muốn lan tỏa giá trị đó từ Việt Nam ra thế giới,{" "}
          <b>Pufu</b> cam kết mang đến những sản phẩm giàu dinh dưỡng, an toàn
          cho sức khỏe, trách nhiệm với xã hội và thân thiện với môi trường.
        </p>
      </div>

      {/* Cột phải */}
      <div className="right">
        <h3>Logo <i>pufu</i></h3>
        <p className="slogan">“Năng lượng thuần khiết từ thiên nhiên”</p>

        <div className="center-box">
          Nằm trung tâm và tiếp theo 3 icon mũi tên ở dưới
        </div>

        <h4>Triết lý ESG:</h4>
        <ul>
          <li>
            <b>Môi trường (E):</b> canh tác chuẩn SRP, giảm phát thải, bao bì
            kraft phân hủy sinh học.
          </li>
          <li>
            <b>Xã hội (S):</b> đồng hành cùng nông dân, trao cơ hội nghề thủ
            công cho phụ nữ nông thôn.
          </li>
          <li>
            <b>Quản trị (G):</b> minh bạch, kiểm soát chất lượng nghiêm ngặt.
          </li>
        </ul>
      </div>
    </div>
  );
}

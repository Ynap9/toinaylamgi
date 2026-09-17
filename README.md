# Tối Nay Làm Gì 🌙

**Tiếng Việt** · [English](README.en.md)

**Mã nguồn: [github.com/Ynap9/toinaylamgi](https://github.com/Ynap9/toinaylamgi)**

Tối nay chưa biết làm gì? Mở hòm, quay một lựa chọn và để buổi tối có chút bất ngờ: đọc truyện, chơi game, đánh cờ, đi cafe, xem phim, code hay về quê.

Ứng dụng chạy hoàn toàn trên máy của bạn, không cần đăng nhập hay backend. Bạn có thể bật/tắt các lựa chọn có sẵn, thêm việc của riêng mình và lưu ngay trong trình duyệt.

## Tính năng

- Hòm quay kiểu CS với âm thanh, độ hiếm và hiệu ứng mở hòm.
- 16 lựa chọn có sẵn, mỗi lựa chọn có ảnh minh hoạ và một câu lục bát vui.
- Bật/tắt lựa chọn có sẵn, thêm tối đa 50 lựa chọn tự đặt tên.
- Giao diện tiếng Việt và tiếng Anh.

## Chạy trên máy

Cần **Node.js 22.12+** và phiên bản **pnpm** ghi trong [package.json](package.json).

```sh
git clone https://github.com/Ynap9/toinaylamgi.git
cd toinaylamgi
pnpm install --frozen-lockfile
pnpm start
```

Mở [127.0.0.1:5173](http://127.0.0.1:5173). Không cần tạo `.env` hay cấu hình dịch vụ bên ngoài. Nếu cổng đang bận, chạy `pnpm start --port 5188`.

Các lệnh phát triển:

```sh
pnpm test       # Chạy kiểm tra
pnpm build      # Tạo bản build
pnpm preview    # Xem bản build tại http://127.0.0.1:4173
```

Máy chủ chỉ lắng nghe trên `127.0.0.1`. Sau khi cài dependencies, ứng dụng tải tài nguyên từ máy; các liên kết bên ngoài chỉ mở khi bạn bấm vào.

## Thêm lựa chọn có sẵn

Danh sách nằm ở [src/lib/todos.ts](src/lib/todos.ts). Mỗi mục gồm `name`, `sub`, `rarity` (0–4), `image` và `quip`. Ảnh tương ứng đặt tại `public/todo-<image>.webp`, tên tiếng Anh thêm trong [src/lib/i18n.ts](src/lib/i18n.ts). Nhớ ghi nguồn ảnh vào [ATTRIBUTION.md](ATTRIBUTION.md).

## Dữ liệu của bạn

Danh sách lựa chọn, ngôn ngữ, âm thanh và lượt quay tự lưu bằng cookie trong trình duyệt hiện tại. Xóa cookie sẽ đặt lại dữ liệu; dữ liệu không đồng bộ giữa các thiết bị. Lượt quay hiển thị là của riêng trình duyệt này.

Nếu cookie bị chặn hoặc danh sách quá lớn, ứng dụng sẽ báo chưa lưu.

## Đóng góp

Chào đón mọi người [báo lỗi, đề xuất ý tưởng](https://github.com/Ynap9/toinaylamgi/issues/new) hoặc fork repo và [gửi PR vào `main`](https://github.com/Ynap9/toinaylamgi/compare). Bạn có thể dùng tiếng Việt hoặc tiếng Anh, mở draft PR để trao đổi.

Chỉ cần mô tả rõ thay đổi và cách đã kiểm tra. Với thay đổi code, hãy chạy test và build khi có thể. Giữ thông tin bí mật ngoài repo và ghi công nguồn sử dụng.

## Nguồn gốc

Dự án phát triển tiếp từ [Trưa Nay Ăn Gì](https://github.com/truanayangi-com/truanayangi) của nagisanzenin và cộng đồng, giữ nguyên lịch sử Git. Ảnh minh hoạ từ Unsplash, âm thanh từ SourceSounds. Xem [ghi công tác giả và tài nguyên](ATTRIBUTION.md).

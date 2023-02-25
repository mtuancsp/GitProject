let diemLy = parseFloat(prompt('Nhap diem Vat Ly: '));
let diemToan = parseFloat(prompt('Nhap diem Toan Hoc: '));
let diemHoa = parseFloat(prompt('Nhap diem Hoa Hoc: '));

let diemTB = ((diemHoa+diemToan+diemLy)/3).toFixed(2);
let tongDiem = diemHoa+diemToan+diemLy;

document.write('Diem trung binh: '  + diemTB + '<br>');
document.write('Tong diem: '  + tongDiem);
export interface reviewType {
  id: number;
  user_name: string;
  comment: string;
  rating: number;
}

export const reviewData: reviewType[] = [
  {
    id: 1,
    user_name: "bam_fashionista",
    comment: 'ตอนแรกก็ลังเลเพราะไม่เคยสั่งจากร้านนี้มาก่อน แต่พอได้รับของเท่านั้นแหละ ประทับใจสุดๆ! เสื้อผ้าคุณภาพดีเกินราคา สีตรงปก ผ้านุ่ม ไม่บาง ใส่แล้วดูดีมากๆ ค่ะ',
    rating: 5,
  },
  {
    id: 2,
    user_name: "ton.styleman",
    comment: "สั่งเสื้อเชิ้ตมาใส่ทำงาน พอใส่แล้วเพื่อนที่ออฟฟิศยังทักเลยว่าดูดีขึ้น! เนื้อผ้าไม่ร้อน ใส่สบายและดูมีสไตล์มากๆ ซักแล้วไม่ยับง่ายด้วยครับ",
    rating: 5,
  },
  {
    id: 3,
    user_name: "mild.dailylook",
    comment: "เคยสั่งจากหลายเว็บ เสื้อบางเว็บได้มาไม่ตรงปกเลย แต่ร้านนี้คือเป๊ะทุกอย่าง! ลายและสีสวยมากเหมือนในรูปจริงๆ",
    rating: 5,
  },
  {
    id: 4,
    user_name: "junez_closet",
    comment: "ฉันตามหาสไตล์เสื้อผ้าแนวเกาหลีมานาน ร้านนี้คือตอบโจทย์ที่สุด ใส่แล้วรู้สึกมั่นใจในตัวเอง ผ้าดี ใส่แล้วเข้าทรงพอดีแบบไม่ต้องแก้ไขอะไรเลย",
    rating: 5,
  },
  {
    id: 5,
    user_name: "bestboy.bkk",
    comment: "โดยรวมคือเกินคาดครับ ผมสั่งเสื้อยืดกับกางเกงยีนส์มาอย่างละตัว ทั้งสองชิ้นคุณภาพดีมาก ใส่แล้วรู้สึกได้เลยว่าผ้ามีคุณภาพ ไม่ใช่ของตลาดนัดทั่วไป",
    rating: 5,
  },
];

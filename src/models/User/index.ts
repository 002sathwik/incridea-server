import { builder } from "../../builder";
import "./query";
import "./mutation";
import { Role } from "@prisma/client";

export const avatarList = [
  {
    id: "1",
    name: "avatar1",
    url: "https://res.cloudinary.com/dh1bowbbe/image/upload/v1706813980/mario-removebg-preview_t2hziu.png",
  },
  {
    id: "2",
    name: "avatar2",
    url: "https://res.cloudinary.com/dh1bowbbe/image/upload/v1706813980/avatar2-removebg-preview_qw3yvu.png",
  },
  {
    id: "3",
    name: "avatar3",
    url: "https://res.cloudinary.com/dh1bowbbe/image/upload/v1706813980/avatar1-removebg-preview_t9nfqo.png",
  },
  {
    id: "4",
    name: "avatar4",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113027/8%20bit/image-removebg-preview.png",
  },
  {
    id: "5",
    name: "avatar5",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113014/8%20bit/captainamerica.png",
  },
  {
    id: "6",
    name: "avatar6",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113013/8%20bit/blackwidow.png",
  },
  {
    id: "7",
    name: "avatar7",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113012/8%20bit/batman.png",
  },
  {
    id: "8",
    name: "avatar8",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113013/8%20bit/Baron_Zemo-removebg-preview.png",
  },
  {
    id: "9",
    name: "avatar9",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113020/8%20bit/clipart4398211.png",
  },
  {
    id: "10",
    name: "avatar10",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113018/8%20bit/clipart2752355.png",
  },
  {
    id: "11",
    name: "avatar11",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113024/8%20bit/groot.png",
  },
  {
    id: "12",
    name: "avatar12",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113025/8%20bit/image-removebg-preview_1.png",
  },
  {
    id: "13",
    name: "avatar13",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113025/8%20bit/harrypotter.png",
  },
  {
    id: "14",
    name: "avatar14",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113013/8%20bit/black_widow.png",
  },
  {
    id: "15",
    name: "avatar15",
    url: "https://res.cloudinary.com/dg1941jdi/image/upload/v1707113030/8%20bit/samusaran.png",
  },
];

builder.enumType(Role, {
  name: "Role",
});

builder.prismaObject("User", {
  fields: (t) => ({
    id: t.exposeID("id"),
    name: t.exposeString("name"),
    email: t.exposeString("email"),
    role: t.expose("role", {
      type: Role,
    }),
    isVerified: t.exposeBoolean("isVerified"),
    createdAt: t.expose("createdAt", { type: "Date" }),
    phoneNumber: t.exposeString("phoneNumber", {
      nullable: true,
    }),
    profileImage: t.exposeString("profileImage", {
      nullable: true,
    }),
    college: t.relation("College", {
      nullable: true,
    }),
    xp: t.relation("XP", {
      nullable: true,
    }),
    hotel: t.relation("UserInHotel", {
      nullable: true,
    }),
  }),
});

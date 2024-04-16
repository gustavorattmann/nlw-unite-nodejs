import { prisma } from "../src/lib/prisma";

async function seed() {
  await prisma.event.create({
    data: {
      id: "361a4cd6-97ab-420e-b2f8-00170094b3dd",
      title: "Unite Summit",
      slug: "unite-summit",
      details: "Um evento para devs apaixonados(as) por código!",
      maximumAttendees: 120,
    },
  });
}

seed().then(() => {
  console.log("Database seeded!");
  prisma.$disconnect();
});

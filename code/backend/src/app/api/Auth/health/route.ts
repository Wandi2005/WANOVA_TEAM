export async function GET() {
  return Response.json({
   status: "OK",
    message: "Backend siap digunakan",
    time: new Date(),
  });
}
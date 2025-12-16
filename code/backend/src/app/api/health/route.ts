export async function GET() {
  return Response.json({
    status: "OK",
    service: "Arsip Digital API",
    time: new Date()
  });
}
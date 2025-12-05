export async function GET(request) {
  return Response.json({
    message: 'Welcome to Corso Command Dashboard API',
    timestamp: new Date().toISOString(),
  });
}

export async function POST(request) {
  const data = await request.json();
  return Response.json({
    message: 'Command received',
    command: data,
    timestamp: new Date().toISOString(),
  });
}

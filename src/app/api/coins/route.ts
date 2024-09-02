import { NextResponse } from "next/server";

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return NextResponse.json({
    id: 1,
    coins: 25,
  });
};

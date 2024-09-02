import { usersData } from "@/config/users";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // Retrieve query parameters for page and limit
  const { searchParams } = new URL(request.url);
  const pageParam = searchParams.get("page");
  const limitParam = searchParams.get("limit");

  // If there are no pages and limits, return all data
  if (!pageParam && !limitParam) {
    return NextResponse.json({
      result: usersData,
    });
  }

  const page = parseInt(pageParam || "1", 10);
  const limit = parseInt(limitParam || "10", 10);

  // Calculate start index and end index for pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  // Cut data according to pagination
  const paginatedData = usersData.slice(startIndex, endIndex);

  return NextResponse.json(
    {
      result: paginatedData,
      page: page,
      limit: limit,
      total: usersData.length,
    },
    { status: 200 }
  );
};

// To handle a POST request to /api
export const POST = async (request: NextRequest) => {
  // Do whatever you want
  return NextResponse.json({ data: "Hello World" }, { status: 200 });
};

import { API_STATUS, RESPONSE_APIREST } from '@/src/lib/res_definitions';
import { createServerRouteClient } from '@/src/lib/supabase';
import { get } from 'lodash';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

function handleError(error: any): RESPONSE_APIREST {
  return {
    data: null,
    status: API_STATUS.SERVER_ERROR,
    error: get(error, 'message', 'server error'),
  };
}

export async function GET() {
  const todosTbl = createServerRouteClient(cookies).from('todos');
  try {
    const result = await todosTbl.select('*').order('id', { ascending: true });
    return NextResponse.json({ ...result });
  } catch (error) {
    return NextResponse.json(handleError(error));
  }
}

export async function POST(req: Request) {
  const supaRouteServerClient = createServerRouteClient(cookies);
  const todosTbl = supaRouteServerClient.from('todos');
  try {
    const { obj_data } = await req.json();
    const {
      data: { user },
    } = await supaRouteServerClient.auth.getUser();
    const newData = { ...obj_data, user_id: user?.id };
    const result = await todosTbl.insert(newData).select();
    return NextResponse.json({ ...result });
  } catch (error) {
    return NextResponse.json(handleError(error));
  }
}

export async function PUT(req: NextRequest) {
  const todosTbl = createServerRouteClient(cookies).from('todos');
  try {
    const { obj_data } = await req.json();
    const id = req.nextUrl.searchParams.get('id') || 0;
    const result = await todosTbl
      .update({ ...obj_data })
      .eq('id', id)
      .select();
    return NextResponse.json({ ...result });
  } catch (error) {
    return NextResponse.json(handleError(error));
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id') || 0;
  const todosTbl = createServerRouteClient(cookies).from('todos');
  try {
    const result = await todosTbl.delete().eq('id', id).select('*');
    return NextResponse.json({ ...result });
  } catch (error) {
    return NextResponse.json(handleError(error));
  }
}

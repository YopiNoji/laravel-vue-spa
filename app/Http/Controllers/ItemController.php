<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ItemCollection;
use App\Models\Item;

class ItemController extends Controller
{
  public function store(Request $request)
  {
    $item = new Item([
      'title' => $request->get('title'),
      'user_id' => $request->get('user_id'),
      'comment' => $request->get('comment'),
      'price' => $request->get('price'),
      'count' => $request->get('count'),
    ]);
    \Log::debug(print_r($item,true));
    $item->save();
    return response()->json('success');
  }
  public function getAll()
  {
    return new ItemCollection(Item::all());
  }
  public function getByUserId($user_id)
  {
    return new ItemCollection(Item::where('user_id',$user_id)->get());
  }

  public function edit($id)
  {
    $item = Item::find($id);
    \Log::debug(print_r($item,true));
    return response()->json($item);
  }

  public function update($id, Request $request)
  {
    $item = Item::find($id);
    \Log::debug(print_r($item,true));
    $item->update($request->all());
    return response()->json('successfully updated');
  }

  public function delete($id)
  {
    $item = Item::find($id);
    \Log::debug(print_r($item,true));
    $item->delete();
    return response()->json('successfully deleted');
  }
}
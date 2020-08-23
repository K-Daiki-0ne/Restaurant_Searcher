<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserFavoriteRestaurant extends Model
{
    protected $fillable = ['restaurant_id', 'favorite_restaurant'];

    public function restaurant() {
        return $this->belongTo('App\UserForm');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserForm extends Model
{
    protected $fillable = ['name', 'password'];

    public function restaurant(){
        return $this->hasMany('App\UserFavoriteRestaurant');
    }
}

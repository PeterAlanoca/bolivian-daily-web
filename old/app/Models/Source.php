<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Source extends Model
{
    protected $fillable = ['name', 'url', 'state'];

    public function news(): HasMany
    {
        return $this->hasMany(News::class);
    }
}

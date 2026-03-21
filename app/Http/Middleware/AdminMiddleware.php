<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    public function handle(Request $request, Closure $next): Response
    {
        if (auth()->check() && in_array(auth()->user()->access, ['admin', 'editor'])) {
            return $next($request);
        }

        if (!auth()->check()) {
            return redirect()->route('admin.login');
        }

        abort(403, 'No tienes permisos para acceder al panel de administración.');
    }
}

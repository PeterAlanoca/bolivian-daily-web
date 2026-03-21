<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function index()
    {
        $users = User::orderBy('id', 'asc')->paginate(10);
        return view('admin.users.index', compact('users'));
    }

    public function create()
    {
        return view('admin.users.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'access' => 'required|in:admin,editor,user',
            'state' => 'required|in:A,I',
        ]);

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'access' => $request->access,
            'state' => $request->state,
        ]);

        return redirect()->route('admin.users.index')->with('success', 'Usuario creado correctamente.');
    }

    public function edit(User $user)
    {
        // Don't allow editing the super admin (ID 1) unless it's the super admin themselves
        if($user->id === 1 && auth()->id() !== 1) {
            return redirect()->route('admin.users.index')->with('error', 'No tienes permisos para editar al Super Administrador.');
        }
        
        return view('admin.users.edit', compact('user'));
    }

    public function update(Request $request, User $user)
    {
        if($user->id === 1 && auth()->id() !== 1) {
            return redirect()->route('admin.users.index')->with('error', 'No tienes permisos para modificar al Super Administrador.');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,'.$user->id,
            'password' => 'nullable|string|min:6',
            'access' => 'required|in:admin,editor,user',
            'state' => 'required|in:A,I',
        ]);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->access = $request->access;
        $user->state = $request->state;
        
        if ($request->filled('password')) {
            $user->password = Hash::make($request->password);
        }

        $user->save();

        return redirect()->route('admin.users.index')->with('success', 'Usuario actualizado correctamente.');
    }

    public function destroy(User $user)
    {
        if($user->id === 1) {
            return redirect()->route('admin.users.index')->with('error', 'El Super Administrador no puede ser eliminado.');
        }
        
        if($user->id === auth()->id()) {
            return redirect()->route('admin.users.index')->with('error', 'No puedes eliminar tu propio usuario.');
        }

        $user->delete();
        return redirect()->route('admin.users.index')->with('success', 'Usuario eliminado correctamente.');
    }
}

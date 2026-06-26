<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Acceso Admin | Bolivian Daily</title>
    <style>
        :root {
            --bg: #f8f9fa;
            --text: #222;
            --border: #e0e0e0;
            --red: #cc0000;
            --black: #0d0d0d;
        }
        * { box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: var(--bg);
            color: var(--text);
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }
        .login-card {
            background: #fff;
            padding: 40px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
            width: 100%;
            max-width: 400px;
            border-top: 4px solid var(--black);
        }
        .login-logo {
            text-align: center;
            font-family: 'Playfair Display', serif;
            font-size: 28px;
            font-weight: 900;
            margin-bottom: 24px;
        }
        .form-group {
            margin-bottom: 20px;
        }
        .form-label {
            display: block;
            margin-bottom: 8px;
            font-size: 14px;
            font-weight: 600;
        }
        .form-control {
            width: 100%;
            padding: 12px;
            border: 1px solid var(--border);
            border-radius: 4px;
            font-size: 16px;
        }
        .form-control:focus {
            outline: none;
            border-color: #666;
        }
        .btn {
            width: 100%;
            padding: 12px;
            background-color: var(--black);
            color: #fff;
            border: none;
            border-radius: 4px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.2s;
        }
        .btn:hover {
            background-color: #333;
        }
        .error {
            color: var(--red);
            font-size: 13px;
            margin-top: 4px;
        }
        .alert-error {
            background: #ffebee;
            color: var(--red);
            padding: 12px;
            border-radius: 4px;
            margin-bottom: 20px;
            font-size: 14px;
        }
    </style>
</head>
<body>

    <div class="login-card">
        <div class="login-logo">Bolivian Daily</div>

        @if($errors->any())
            <div class="alert-error">
                {{ $errors->first() }}
            </div>
        @endif

        <form action="{{ route('admin.login.submit') }}" method="POST">
            @csrf
            
            <div class="form-group">
                <label class="form-label" for="email">Correo Electrónico</label>
                <input class="form-control" type="email" id="email" name="email" value="{{ old('email') }}" required autofocus>
            </div>

            <div class="form-group">
                <label class="form-label" for="password">Contraseña</label>
                <input class="form-control" type="password" id="password" name="password" required>
            </div>

            <button type="submit" class="btn">Ingresar al Panel</button>
        </form>
    </div>

</body>
</html>

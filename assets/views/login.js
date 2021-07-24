if ($_POST){
    $numberphone = trim($_POST['numberphone']);
    $password = trim($_POST['password']);

    if ($numberphone == 'numberphone' && $password == 'password')
    {
        console.log('đăng nhập thành công')
    } else {
        console.log('số điện thoại hoặc mật khẩu không đúng')
    }
}

  
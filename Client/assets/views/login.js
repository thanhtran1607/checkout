if ($_POST){
    $numberphone = trim($_POST['numberphone']);
    $password = trim($_POST['password']);

    if ($numberphone == 'số điện thoại' && $password == 'matkhau')
    {
        console.log('đăng nhập thành công')
    } else {
        console.log('số điện thoại hoặc mật khẩu không đúng')
    }
}


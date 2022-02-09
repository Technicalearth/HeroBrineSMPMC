let copy_ip_btn = document.getElementById("copy-ip");
let server_ip = document.getElementById("server-ip");
let success = document.getElementById("success");

copy_ip_btn.addEventListener("click", () => {
    server_ip.select();
    document.execCommand("copy");
    success.style.display = "block";
});
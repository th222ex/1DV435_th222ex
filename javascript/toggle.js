// JavaScript Document

function toggleTable(hide)
{
if (hide) {
document.getElementById("loginTable").style.display="table";
document.getElementById("loginLink").onclick = toggleTable(false);

} else {
document.getElementById("loginTable").style.display="none";
document.getElementById("loginLink").onclick = toggleTable(true);
}
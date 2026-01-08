export default function SidebarAdmin() {
    return (
      <div className="w-60 bg-gray-200 h-screen p-4"> 
        <ul className="space-y-2">
          <li>
            <a href="/admin/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/admin/orders">Kelola Pesanan</a>
          </li>
        </ul>
      </div>
    );
  }
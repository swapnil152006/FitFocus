export default function StatCard({
  title,
  value,
  icon,
  color = "bg-blue-500",
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-slate-500 text-sm">{title}</h3>

        <p className="text-3xl font-bold mt-2">{value}</p>
      </div>

      <div
        className={`w-14 h-14 rounded-xl ${color} flex items-center justify-center text-white text-2xl`}
      >
        {icon}
      </div>
    </div>
  );
}
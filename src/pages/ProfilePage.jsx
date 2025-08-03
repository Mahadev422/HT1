import { FiUpload } from "react-icons/fi";

export default function ProfilePage() {
  const user = {
    name: "Maya Verma",
    userId: 'maya_verma_422',
    image: "/avatar.png",
    documents: [
      { name: "Policy_Agreement.pdf", uploadedAt: "2025-08-01" },
      { name: "Terms_Of_Service.pdf", uploadedAt: "2025-08-02" },
      { name: "Policy_Agreement.pdf", uploadedAt: "2025-08-01" },
      { name: "Terms_Of_Service.pdf", uploadedAt: "2025-08-02" },
      { name: "Policy_Agreement.pdf", uploadedAt: "2025-08-01" },
      { name: "Terms_Of_Service.pdf", uploadedAt: "2025-08-02" },
    ],
  };

  return (
      <section className="relative max-w-4xl mx-auto p-5 mt-5">
        <div className="flex items-center gap-6">
          <img
            src={user.image}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500"
          />
          <div>
            <h2 className="text-3xl font-bold">{user.name}</h2>
            <p className="text-slate-600">{user.userId}</p>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Uploaded Documents</h3>
          </div>

          <ul className="space-y-4">
            {user.documents.map((doc, idx) => (
              <li
                key={idx}
                className="bg-gray-100 p-4 rounded-xl flex justify-between items-center shadow"
              >
                <div>
                  <p className="font-medium text-slate-800">{doc.name}</p>
                  <p className="text-slate-500 text-sm">Uploaded on {doc.uploadedAt}</p>
                </div>
                <button className="text-xs px-3 py-1 bg-slate-200 hover:bg-slate-300 rounded-md font-medium text-slate-800">
                  View
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="fixed bottom-15 left-1/2 transform -translate-x-1/2">
          <input
            id="upload-doc"
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={() => {}}
          />
          <label
            htmlFor="upload-doc"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer hover:bg-blue-700 transition"
          >
            <FiUpload />
            Choose PDF
          </label>
        </div>
      </section>
  );
}

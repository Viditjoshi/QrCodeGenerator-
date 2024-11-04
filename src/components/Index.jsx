import { useState } from "react";
import QRcode from "react-qr-code";

const QrCodeGenerator = () => {
    const [qrcode, setQrcode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQrCode = () => {
        setQrcode(input);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-3xl font-bold mb-6">QR Code Generator</h1>

            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <input
                    type="text"
                    name="Qr-code"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your value here"
                    className="p-2 rounded bg-gray-800 text-white focus:outline-none focus:ring focus:ring-blue-500"
                />
                <button
                    onClick={handleGenerateQrCode}
                    disabled={!input.trim()}
                    className={`px-4 py-2 bg-blue-600 rounded text-white font-semibold transition-opacity duration-300 ${input.trim() ? 'hover:bg-blue-700' : 'opacity-50 cursor-not-allowed'
                        }`}
                >
                    Generate
                </button>
            </div>

            <div className="mt-8 p-4 bg-white rounded shadow-lg">
                {qrcode ? (
                    <QRcode id="qr-code-value" value={qrcode} className="w-40 h-40 md:w-48 md:h-48" />
                ) : (
                    <p className="text-gray-500">Your QR code will appear here.</p>
                )}
            </div>
        </div>
    );
}

export default QrCodeGenerator;

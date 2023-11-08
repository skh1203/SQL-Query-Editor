import Modal from "react-modal";

export default function ModalComponent({ isOpen, onRequestClose, csvData, closeModal }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="CSV Data Modal"
        >
            <div className="space"></div>
            <button className="modal-button" onClick={closeModal}>
                X
            </button>
            {csvData.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            {csvData[0].map((columnName, index) => (
                                <th key={index} className="modal-columns">
                                    {columnName}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {csvData.slice(1).map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="modal-data">
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Loading data...</p>
            )}
        </Modal>
    );
}

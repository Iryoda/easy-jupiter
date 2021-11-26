import { IScheduleResponse as ISchedule } from 'jupiter-reader';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface IFileContext {
    file: ISchedule[];
    setFileData: (array: ISchedule[]) => void;
}

const FileContext = createContext<IFileContext>({} as IFileContext);

export const FileProvider: React.FC = ({ children }) => {
    const [file, setFile] = useState<ISchedule[]>([{} as ISchedule]);

    const setFileData = useCallback(
        (array: ISchedule[]) => {
            setFile(array);
        },
        [setFile],
    );

    return (
        <FileContext.Provider value={{ setFileData, file }}>
            {children}
        </FileContext.Provider>
    );
};

export const useFile = (): IFileContext => {
    const context = useContext(FileContext);
    return context;
};

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { jupiterReadFromInput } from 'jupiter-reader';
import { useFile } from 'hooks/useFile';
import { useStep } from 'hooks/useSteps';
import * as S from './styles';

export type DropAreaProps = {
    setErrorMensage(msg: string): void;
};

const DropArea = ({ setErrorMensage }: DropAreaProps) => {
    const { setFileData } = useFile();
    const { setStep } = useStep();

    const onDrop = useCallback(
        (acceptedFiles) => {
            try {
                setStep('second');
                acceptedFiles.map(async (file: File | Blob) => {
                    const result = await jupiterReadFromInput(file);
                    setFileData(result);
                });
            } catch (error) {
                setErrorMensage(error as string);
            }
        },
        [setFileData, setErrorMensage, setStep],
    );

    const { getRootProps, getInputProps } = useDropzone({
        onDrop,
        maxFiles: 1,
    });

    return (
        <S.Wrapper {...getRootProps({ classname: 'dropzone' })}>
            <input {...getInputProps()} />
            <p>
                arraste o arquivo Jupiterweb.html para aqui ou Clique para
                escolher o arquivo
            </p>
        </S.Wrapper>
    );
};

export default DropArea;

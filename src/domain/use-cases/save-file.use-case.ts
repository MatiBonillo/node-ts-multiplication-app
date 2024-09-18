import fs from 'fs';
export interface SaveFileUseCase{
    execute: (options: Options) => boolean;
}

export interface Options{
    fileContent: string;
    destination?: string;
    fileName?: string;
    fileDestination?: string;
}

export class SaveFile implements SaveFileUseCase{
    constructor(
        /**
         * repository: StorageRepository
         */
    ){}
    execute ({fileContent,
        destination = 'outputs',
        fileName = 'table'
    }: Options): boolean {
        try {
            fs.mkdirSync(destination, { recursive: true });

            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
            console.log('File created!');
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
        
    }
}

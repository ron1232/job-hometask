import React, { ReactElement, useEffect, useState } from 'react';
import http from './utils/http';
import { File } from './utils/file';
import Container from '@material-ui/core/Container';
import FileComponent from './components/File';
import Error from './components/Error';

const App: React.FC = (): ReactElement => {
  const [files, setFiles] = useState<Array<File>>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, res } = await http.get(
          'https://mighty-sierra-05836.herokuapp.com/files'
        );

        if (res.ok) {
          return setFiles(data.files);
        }

        setError('Response was not okay');
      } catch (error) {
        console.error(error);
        setError('Response was not okay');
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth='sm'>
      {error ? (
        <Error error={error} />
      ) : (
        files.map((file) => <FileComponent file={file} key={file.name} />)
      )}
    </Container>
  );
};

export default App;

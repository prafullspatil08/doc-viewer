import { ViewerType, getbaseUrl } from 'docviewhelper';
export const viewers: {
  name: ViewerType;
  docs: string[];
  custom: boolean;
  acceptedUploadTypes: string;
  viewerUrl?: string;
}[] = [
  {
    name: 'google',
    docs: [
      'https://docs.google.com/document/d/1OAOjCCzpsPGAKgV1XLva5oK6GEFO8iANFI40vauYoyg/edit',
      'https://go.microsoft.com/fwlink/?LinkID=521962',
      'https://file-examples.com/storage/fe2356939c62607a6a1903b/2017/10/file_example_TIFF_1MB.tiff',
      `${getbaseUrl()}/assets/file_example_PPT_250kB.ppt`,
      'https://calibre-ebook.com/downloads/demos/demo.docx',
      'https://file-examples.com/storage/fe2356939c62607a6a1903b/2017/10/file-example_PDF_1MB.pdf',
      `${getbaseUrl()}/assets/file_example_PPTX_250kB.pptx`,
    ],
    custom: true,
    acceptedUploadTypes: '',
  },
  {
    name: 'office',
    docs: [
      'https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.docx',
      'https://file-examples-com.github.io/uploads/2017/02/file_example_XLSX_50.xlsx',
      `${getbaseUrl()}/assets/file_example_PPT_250kB.ppt`,
      `${getbaseUrl()}/assets/file_example_PPTX_250kB.pptx`,
    ],
    custom: true,
    acceptedUploadTypes: '',
  },
  {
    name: 'mammoth',
    docs: [`${getbaseUrl()}/assets/file-sample_100kB.docx`],
    custom: false,
    acceptedUploadTypes:
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  },
  {
    name: 'pdf',
    docs: [`${getbaseUrl()}/assets/file-sample_150kB.pdf`],
    custom: false,
    acceptedUploadTypes: 'application/pdf',
  },
  {
    name: 'url',
    docs: [
      // eslint-disable-next-line max-len
      'https://docs.google.com/document/d/1OAOjCCzpsPGAKgV1XLva5oK6GEFO8iANFI40vauYoyg/edit',
      `https://github.com/rushikes-salunke/technology-blog-tailwindcss/blob/dev_prafull/src/assets/Security%20Risks.docx`,
    ],
    custom: true,
    acceptedUploadTypes: '',
  },
];

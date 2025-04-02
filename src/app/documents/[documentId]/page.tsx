import { Editor } from "./editor";
import Toolbar from "./toolbar";
interface DocumentsIdPageProps {
    params : Promise<{documentId: string}>
}

const DoucmentsIdPage = async ({params} : DocumentsIdPageProps) => {
const {documentId} = await params;
    return (
        <div className="min-h-screen bg-[#fafbfd]">
            <Toolbar/>
            <Editor/>
        </div>
    );
}
 
export default DoucmentsIdPage;
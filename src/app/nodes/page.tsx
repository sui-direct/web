import { Status } from "@/actions/nodes/Status";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import "./nodes.scss";

export default async function Nodes() {
    const status = await Status();

    return (
        <main className="w-full flex justify-center relative overflow-clip sm:py-24 mt-4">
            <div id="nodes" className="w-[90%] lg:w-[40%] container">
                <Table className="border-[1px] border-gray-500">
                    <TableHeader>
                        <TableRow className="border-gray-500 hover:bg-white/10">
                            <TableHead className="w-full">Address</TableHead>
                            <TableHead className="w-[150px]">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {status.map((node, index) => (
                            <TableRow className="border-gray-500 hover:bg-white/10" key={index}>
                                <TableCell className="font-medium">{node.url}</TableCell>
                                <TableCell className="flex justify-center py-4">
                                    <StatusIcon status={node.status} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </main>
    );
}

function StatusIcon({ status }: { status: boolean }) {
    return (
        <span className={"status " + (status ? "online" : "offline")}>
            <span></span>
        </span>
    );
}

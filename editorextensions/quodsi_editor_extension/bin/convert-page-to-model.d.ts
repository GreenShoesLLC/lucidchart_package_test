import { PageProxy } from 'lucid-extension-sdk';
export declare class ConvertPageToModel {
    /**
     * Converts a PageProxy instance into a model representation.
     * For each block on the page, it creates lists based on the number of incoming and outgoing lines.
     * It also categorizes lines based on their connection to blocks.
     * @param page - The PageProxy instance to convert.
     */
    convert(page: PageProxy): void;
    private processOutgoingOnlyBlocks;
    private processIncomingOnlyBlocks;
    private processBothIncomingAndOutgoingBlocks;
    private addInitialActivityDataToBlock;
    /**
     * Placeholder method to process blocks with no lines.
     */
    private processNoLinesBlocks;
    private processSoloOutgoingLines;
    private addInitialConnectorDataToLine;
    /**
     * Placeholder method to process lines that are one of many outgoing lines from a block.
     */
    private processManyOutgoingLines;
    /**
     * Adds shapeData to a block in the bothIncomingAndOutgoingBlocks category.
     * Sets q_objecttype to 'activity' and q_data to an empty string.
     * @param block - The BlockProxy instance to which shapeData will be added.
     */
    private addShapeDataToBlock;
    /**
     * Prints the text areas of a given block.
     * @param block - The BlockProxy instance to print.
     * @param blockType - A description of the block type (e.g., 'Outgoing Only Block').
     */
    private printBlockTextAreas;
    /**
     * Prints the details of a given line.
     * @param line - The LineProxy instance to print.
     * @param lineType - A description of the line type (e.g., 'Solo Outgoing Line').
     */
    private printLineDetails;
}

import {marked} from 'marked';
import DOMPurify from 'dompurify';

/**
 * Converts markdown syntax to readable format
 * @param data - the data written in markdown syntax
 */

function rawMarkup(data : string) {
    return DOMPurify.sanitize(marked.parse(data));
}

export { rawMarkup }
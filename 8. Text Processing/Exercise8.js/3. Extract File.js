// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. 
// //(Beware of files like template.bak.pptx, as template.bak should be the file name, while pptx is the extension).

function solve(string) {
    let fileFullName = string.split('\\').pop();
    let lastDotIndex = fileFullName.lastIndexOf('.');
    
    let fileName = fileFullName.substring(0, lastDotIndex);
    let fileExtension = fileFullName.substring(lastDotIndex + 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx');
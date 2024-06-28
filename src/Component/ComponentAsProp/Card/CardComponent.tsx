import React from 'react'
import { TextCardProps } from './TextCard'
import { ImageCardProps } from './ImageCard'
import ParagraphCard, { ParagraphCardProps } from './ParagraphCard'
type CardComponentProps = {
    variant: 'text' | 'image' | 'paragraph';
    text: string ;
    imageurl: string;
    paragraph: string;
    componentText: React.ComponentType<TextCardProps>;
    componentImage: React.ComponentType<ImageCardProps>;
    componentParagraph: React.ComponentType<ParagraphCardProps>
}
export default function CardComponent({variant, componentText: TextCard, componentImage: ImageCard, componentParagraph: ComponentParagraph, text, imageurl, paragraph}: CardComponentProps) {
  return (
    <div>
        {variant === 'text' && (<TextCard text={text}/>)}
        {variant === 'image' && (<ImageCard imageUrl={imageurl}/>)}
        {variant === 'paragraph' && (<ComponentParagraph paragraph={paragraph}/>)}
    </div>
  )
}

import * as React from 'react';
import { mergeClasses } from '@/lib/utils';
import Typography from '@/components/general/typography';

interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ label, className, ...props }: TagProps, ref) => {
    return (
      <div
        ref={ref}
        className={mergeClasses(
          'flex items-center justify-center rounded-xl bg-gray-200 px-2 py-1 text-sm',
          className // Make sure to include any custom class
        )}
        {...props}
      >
        <Typography variant="body3" className="font-medium text-center whitespace-normal">
          {label}
        </Typography>
      </div>
    );
  }
);

Tag.displayName = 'Tag';

export default Tag;

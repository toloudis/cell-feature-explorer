/**
 * Icon wrapper to use @ant-design/icons loaded from CDN
 * This avoids Vite SVG data URI bundling issues
 */

// Access the global icons object loaded from CDN
const Icons = (window as any).icons;

// Export individual icons from the global CDN object
export const LoadingOutlined = Icons?.LoadingOutlined;
export const PictureOutlined = Icons?.PictureOutlined;
export const CloseOutlined = Icons?.CloseOutlined;
export const DownloadOutlined = Icons?.DownloadOutlined;
export const CheckOutlined = Icons?.CheckOutlined;
export const InfoCircleOutlined = Icons?.InfoCircleOutlined;
export const DotChartOutlined = Icons?.DotChartOutlined;
export const SyncOutlined = Icons?.SyncOutlined;
export const UploadOutlined = Icons?.UploadOutlined;

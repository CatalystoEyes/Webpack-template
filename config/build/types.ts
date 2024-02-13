export interface BuildPaths {
    entry: string
    html: string
    output: string
}

export type Mode = 'production' | 'development'
export type BuildPlatform = 'mobile' | 'desktop'

export interface BuildOptions {
    port: number
    paths: BuildPaths
    mode: Mode
    platform: BuildPlatform
}
# Texture Guidelines

In *Generals Zero Hour*, there are several variations of textures adapted to different seasons, weather conditions,
times of day, and more. Each variation is updated accordingly, and the suffixes in the DDS filenames indicate the type
and condition of the texture.

## Texture Naming Structure

>[!TIP]
> the `_en` and `_rn` textures invalid because 99% of textures with these suffixes do not have proper night lighting but
> are simply darkened versions of the base texture. They only increase the brightness from `_dn` to `_en`.

### Summer Textures

- `<none>`: Pristine texture.
- `_d`: Damaged texture.
- `_e`: Really Damaged texture.
- `_r`: Rubble texture.
- `_g`: Garrison texture.
- `_dg`: Damaged Garrison texture.

### Winter Textures

- `_s`: Pristine Snow texture.
- `_ds`: Damaged Snow texture.
- `_es`: Really Damaged Snow texture.
- `_rs`: Rubble Snow texture.
- `_sg`: Snow Garrison texture.
- `_dsg`: Damaged Snow Garrison texture.

### Summer Night Textures

- `_n`: Night texture.
- `_dn`: Damaged Night texture.
- `_en`: Invalid texture, to be removed with Mod Builder.
- `_rn`: Invalid texture, to be removed with Mod Builder.
- `_ng`: Night Garrison texture.
- `_dng`: Damaged Night Garrison texture.

### Winter Night Textures

- `_sn`: Snow Night texture.
- `_dsn`: Damaged Snow Night texture.
- `_esn`: Invalid texture, to be removed with Mod Builder.
- `_rsn`: Invalid texture, to be removed with Mod Builder.
- `_sng`: Snow Night Garrison texture.
- `_dsng`: Damaged Snow Night Garrison texture.

## Vehicle Texture Variations

- `<none>`: Pristine vehicle texture.
- `_d`: Damaged vehicle texture.
- `_d1`: Wrecked vehicle texture.

## PSD Layer Naming Conventions

- If the Background layer is flattened, then it is the original retail texture (DDS) in best discovered quality.
- If the bottom layer is not the original retail texture (DDS), then it has a name that represents the source texture
  name in sufficient detail. That can be a DDS or TGA or a processed (AI upscale) texture, for example
  `cbcnvstr01_s.dds realesr-general-wdn-x4v3`. Or a "merged" aka composited PSD image of the same (and never another!)
  texture set, for example `cbcnvstr01 merged`.
- If PSD textures are modified, then their edits need to move to lower order textures that use higher order merged
  textures (Pristine -> Damages, Summer -> Winter, ...).
- Layer & Group names are lower case and use common keywords such as "damage", "light", "barricades", "snow", or any
  other name that gives it meaning.
- Layer & Group names may end on a texture variant suffix (`_d`, `_g`, `_e`, ...) which helps to identify the origin
  texture variant.
- Layers & Groups can be copied to other texture variants and are expected to be identical if they share the same name
  within the same texture set.
- Groups meant to be used to assemble an alpha channel are named `_alpha` and will be hidden before saving the image
  file.

## Working with Textures

1. **Editing Software**: Use software like **Photoshop**, **GIMP**, or **Paint.NET** for editing DDS
   textures.

2. **PSD**: When working with **PSD** files, maintain an organized layer structure and use clear names for each texture
   variant (e.g., `_d`, `_g`). Layers with an alpha channel should be named `_alpha` and hidden before saving the file.

3. **Saving and Conversion**: After editing, textures should not be manually exported as DDS files. This should be
handled automatically by the build pipeline using Mod Builder to ensure optimal quality and file size.

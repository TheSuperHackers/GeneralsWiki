# Texture Guidelines

In *Command & Conquer: Generals and Zero Hour*, there are several variations of textures adapted to different seasons,
weather conditions, times of day, and more. Each variation is updated accordingly, and the suffixes in the
DDS filenames indicate the type and condition of the texture.

## Texture Naming Structure

> [!TIP]
> the `_en` and `_rn` textures are invalid because 99% of textures with these suffixes do not have proper night lighting
> but are simply darkened versions of the base texture. They only increase the brightness from `_dn` to `_en`.

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

- If the Background layer is flattened, it represents the original retail texture (DDS) in best discovered quality.
- If the bottom layer is not the original retail texture (DDS), it must be named to reflect the source texture
  name in sufficient detail. That can be a DDS or TGA or a processed (AI upscale) texture, for example
  `cbcnvstr01_s.dds realesr-general-wdn-x4v3`. Or a "merged" aka composited PSD image of the same (and never another!)
  texture set, for example `cbcnvstr01 merged`.
- If PSD textures are modified, edits must move to lower-order textures that use higher-order merged
  textures (Pristine -> Damages, Summer -> Winter, ...).
- Layer & Group names are lower case and use common keywords such as "damage", "light", "barricades", "snow", or any
  other name that gives it meaning.
- Layer & Group names must end on a texture variant suffix (`_d`, `_g`, `_e`, ...) which helps to identify the origin
  texture variant.
- Layers & Groups can be copied to other texture variants and are expected to be identical if they share the same name
  within the same texture set.
- Groups meant to be used to assemble an alpha channel are named `_alpha` and must be hidden before saving the image
  file.

## Working with Textures

1. **Editing Software**: Use software like **Photoshop**, **GIMP**, or **Paint.NET** for editing DDS
   textures.

2. **PSD**: When working with **PSD** files, maintain an organized layer structure and use clear names for each texture
   variant (e.g., `_d`, `_g`). Layers with an alpha channel must be named `_alpha` and hidden before saving the file.

3. **Saving and Conversion**: Don’t manually export DDS files. Texture conversion should be automated by the build
pipeline via Mod Builder to ensure optimal quality and file size.

## Typical Errors in Textures

Many textures have small, and sometimes big visual discrepancies between damage, weather or garrison states.
Fixing this requires reassembling textures from other parts of the texture set.

### Texture Resolution Mismatches

Zero Hour textures are often aggressively downscaled, unlike Generals, which utilizes around 500 higher-resolution
assets. Winter texture sets in Zero Hour tend to be significantly smaller than their Summer counterparts, leading to
noticeable quality loss on Winter maps. Improving these undersized Winter textures is one of the most difficult tasks
in texture refinement.

### Damage Transition Mistakes

Damage transitions are frequently inconsistent across weather variants. The progression from pristine to rubble is
rarely seamless—details may vanish or shift between states. For instance, a damaged feature in the `(_d)` texture
might disappear entirely in the `(_e)` version. Some fixes are simple overlays, but others demand detailed repair work.

### Window Barricade Discrepancies

Window barricades—used to represent infantry occupation—often vary wildly in alignment and appearance across
damage states. They may shift slightly, vanish completely, or be visually incoherent from one texture to the next.

### Window Reflections Problems

Reflections on windows often misalign between damage and garrison states. These mismatches affect nearby damage
effects and barricades. Reflection intensity also varies too much and can bleed incorrectly over snow. Reflections
typically reside in the Alpha Channel of pristine and damaged `(_d)` textures, but are sometimes mistakenly included
in `(_e)` textures. Shapes frequently don’t match the actual window geometry, and reflections can overlay unwanted
visual elements.

### Night Light Inconsistencies

Night lights, mainly found on windows, show visual discrepancies across damage and garrison states.
They commonly clash with barricade placements and can spill unrealistically over snowy surfaces.

### Rubble Textures Anomalies

Rubble and heavily damaged `(_e)`/`(_r)` textures sometimes include damage holes defined by black Alpha Channel
regions. While intentional in some cases, this can result in parts like walls or roofs appearing suspended with no
connection to adjacent structures—especially evident when viewed up close.

### Alpha Channel Errors

Some textures contain outdated or irrelevant Alpha Channels that can be safely removed. Others are missing
Alpha data entirely, though in many cases, this can be reconstructed using neighboring textures in the same set.

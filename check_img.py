from PIL import Image
im = Image.open(r'C:\Users\选择永恒\Desktop\bigplayer_poster.png')
print('Dimensions:', im.size, '| Ratio:', round(im.size[0]/im.size[1], 3))

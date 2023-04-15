from src.diamond.bottom_triangle import BottomTriangle
from src.diamond.top_triangle import TopTriangle

class Diamond:
    def __init__ (self, dimension):
        self.topTriangle = TopTriangle(dimension)
        self.bottomTriangle = BottomTriangle(dimension)

    def generate_diamond(self):
        top = self.topTriangle.generate()
        bottom = self.bottomTriangle.generate()
        bottom.pop(0)
        return top + bottom
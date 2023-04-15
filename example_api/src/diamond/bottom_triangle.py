class BottomTriangle:
    def __init__(self, dimension):
        self.dimension = dimension

    def generate(self):
        result = []
        for i in range(self.dimension):
            line = ''
            for j in range(self.dimension - i):
                line += '**'
            for j in range(i):
                line = ' ' + line + ' '
            result.append(line)
        return result
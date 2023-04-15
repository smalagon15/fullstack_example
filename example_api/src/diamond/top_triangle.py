

class TopTriangle:
    def __init__(self, dimension):
        self.dimension = dimension

    def generate(self):
        result = []
        for i in range(self.dimension):
            line = ''
            for j in range(i+1):
                line += '**'
            for j in range(self.dimension - i -1):
                line = ' ' + line + ' '
            result.append(line)
        return result
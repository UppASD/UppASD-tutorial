Search.setIndex({"docnames": ["basics/basics", "finitetemp/finitetemp", "guide", "index", "magnon/magnon", "quick-reference", "references", "sld/sld", "switching/switching"], "filenames": ["basics/basics.rst", "finitetemp/finitetemp.rst", "guide.rst", "index.rst", "magnon/magnon.rst", "quick-reference.rst", "references.rst", "sld/sld.rst", "switching/switching.rst"], "titles": ["UppASD on supercomputers", "Finite temperatures", "Instructor\u2019s guide", "UppASD tutorial", "Magnon", "Quick Reference", "References", "Spin-lattice dynamics", "Switching"], "terms": {"The": [0, 4, 7], "sourc": 0, "code": 0, "i": [0, 4, 7], "distribut": 0, "http": 0, "github": 0, "com": 0, "along": [0, 7], "document": 0, "grow": 0, "set": [0, 2], "exampl": [0, 4, 6, 7], "To": 0, "obtain": 0, "download": 0, "unpack": 0, "releas": 0, "wget": 0, "archiv": 0, "ref": [0, 7], "tag": 0, "v6": 0, "0": [0, 7], "tar": 0, "gz": 0, "xvzf": 0, "cd": 0, "clone": 0, "git": 0, "repositori": [0, 2], "can": 0, "built": 0, "run": 0, "desktop": 0, "laptop": 0, "comput": [0, 6], "well": 0, "gener": [0, 6], "advic": 0, "how": [0, 4], "build": 0, "found": 0, "user": 0, "manual": 0, "In": [0, 7], "thi": [0, 4, 7], "section": 0, "provid": 0, "instruct": 0, "program": 0, "two": [0, 6], "differ": [0, 7], "avail": [0, 4, 7], "hpe": 0, "crai": 0, "ex": 0, "central": 0, "instal": 0, "softwar": 0, "gnu": 0, "toolchain": 0, "compil": 0, "wrapper": 0, "ml": 0, "prgenv": 0, "8": 0, "2": [0, 7], "make": 0, "dep": 0, "gfortran": 0, "ftn": 0, "one": 0, "testsuit": 0, "instanc": 0, "asd": 0, "test": 0, "up": [0, 2], "python": 0, "environ": 0, "graphic": 0, "interfac": 0, "first": [0, 6, 7], "step": 0, "follow": 0, "load": 0, "activ": 0, "anaconda": 0, "A": [0, 6], "conda": 0, "pdc": 0, "21": 0, "11": 0, "anaconda3": 0, "2021": 0, "05": 0, "init": 0, "sh": [0, 7], "creat": [0, 4], "name": 0, "asd_gui_env": 0, "3": [0, 7], "6": [0, 7], "vtk": 0, "numpi": 0, "scipi": 0, "matplotlib": 0, "yaml": 0, "pyyaml": 0, "panda": 0, "jsoncpp": 0, "tbb": 0, "2020": 0, "node": 0, "alloc": 0, "interact": [0, 7], "us": [0, 4, 7], "batch": 0, "job": 0, "request": 0, "4": 0, "core": 0, "share": 0, "partit": 0, "hour": 0, "command": 0, "salloc": 0, "n": [0, 7], "t": 0, "00": [0, 7], "p": [0, 7], "project": 0, "where": 0, "need": 0, "replac": 0, "an": [0, 4], "At": 0, "autumn": 0, "school": 0, "20222": 0, "reserv": 0, "have": 0, "been": 0, "dedic": 0, "edu22": 0, "2022": [0, 6], "10": [0, 7], "date": 0, "todai": 0, "typic": 0, "output": 0, "look": 0, "like": 0, "grant": 0, "591571": 0, "wait": 0, "resourc": 0, "configur": 0, "nid001015": 0, "ar": [0, 4, 7], "readi": 0, "now": 0, "your": 0, "next": 0, "you": 0, "login": 0, "via": 0, "ssh": 0, "x": [0, 7], "simul": [0, 3, 6], "16": [0, 7], "walltim": 0, "templat": 0, "jobscript": 0, "bin": 0, "bash": 0, "l": [0, 6], "abov": 0, "requir": 0, "get": 0, "full": [0, 7], "modul": 0, "sbatch": 0, "charg": 0, "j": [0, 6, 7], "myjob": 0, "script": [0, 7], "02": [0, 7], "wall": 0, "clock": 0, "time": 0, "number": [0, 4, 7], "task": 0, "c": 0, "cpu": 0, "per": [0, 4], "export": 0, "omp_num_thread": 0, "echo": 0, "initi": [0, 7], "hostnam": 0, "execut": 0, "sd": 0, "path": 0, "out": 0, "log": 0, "finish": 0, "intel": 0, "xeon": 0, "base": 0, "buildenv": 0, "2018a": 0, "eb": 0, "ifort": 0, "07": 0, "nsc1": 0, "variabl": 0, "mesa_gl_version_overrid": 0, "exclus": 0, "01": 0, "32": 0, "parallel": 0, "over": 0, "memori": 0, "openmp": 0, "thread": 0, "explor": 0, "perform": 0, "depend": [0, 7], "problem": 0, "size": [0, 7], "With": 0, "weak": 0, "scale": 0, "meant": 0, "effienc": 0, "when": 0, "chang": 0, "proport": 0, "strong": 0, "fix": [0, 7], "system": [0, 4, 7], "nx": 0, "12": 0, "ny": 0, "nc": 0, "rang": 0, "from": [0, 6, 7], "24": 0, "nz": 0, "vari": 0, "e": 2, "g": 2, "what": 2, "do": 2, "dai": 2, "befor": 2, "common": 2, "supercomput": 3, "dardel": 3, "tetralith": 3, "exercis": [3, 4], "switch": 3, "finit": 3, "temperatur": 3, "magnon": 3, "spin": [3, 4, 6], "lattic": [3, 6], "dynam": [3, 6], "sld": 3, "dimer": 3, "trimer": 3, "bcc": [3, 4], "fe": [3, 4], "tutori": 4, "1": [4, 7], "largest": 4, "head": 4, "fcc": 4, "crystal": 4, "structur": 4, "collinear": 4, "spectra": 4, "influenc": 4, "uniaxi": 4, "anisotropi": 4, "show": 4, "calcul": 4, "wave": 4, "spectrum": 4, "standard": 4, "understand": 4, "atom": [4, 7], "unit": [4, 7], "cell": [4, 7], "togeth": 4, "content": 4, "magnet": [4, 7], "thermal": 4, "plot": 4, "question": 4, "line": 4, "below": 4, "indic": 4, "file": [4, 7], "readili": 4, "so": 4, "skubic2008": 6, "b": 6, "skubic": 6, "hellsvik": 6, "nordstr\u00f6m": 6, "o": 6, "eriksson": 6, "method": 6, "atomist": 6, "implement": 6, "phy": 6, "conden": 6, "matter": 6, "20": 6, "315203": 6, "2008": 6, "hellsvik2019": [6, 7], "d": 6, "thonig": 6, "k": [6, 7], "modin": 6, "iu\u015fan": 6, "bergman": 6, "bergqvist": 6, "delin": 6, "principl": 6, "accuraci": 6, "rev": 6, "99": 6, "104302": 6, "2019": 6, "sadhukhan2022": 6, "sadhukhan": 6, "y": [6, 7], "kvashnin": 6, "coupl": [6, 7], "dimension": 6, "cri3": 6, "105": 6, "104418": 6, "we": 7, "model": 7, "zero": 7, "damp": 7, "gilbert": 7, "veloc": 7, "verlet": 7, "point": 7, "iter": 7, "implicit": 7, "midpoint": 7, "solver": 7, "express": 7, "hamiltonian": 7, "effect": 7, "field": 7, "interatom": 7, "forc": 7, "contain": 7, "eq": 7, "27": 7, "31": 7, "main": 7, "input": 7, "inpsd": 7, "dat": 7, "simid": 7, "scnobas": 7, "ncell": 7, "bc": 7, "boundari": 7, "condit": 7, "vacuum": 7, "period": 7, "00000": 7, "sym": 7, "symmetri": 7, "cubic": 7, "2d": 7, "hexagon": 7, "do_prnstruct": 7, "do_sortcoup": 7, "aunit": 7, "do_hoc_debug": 7, "posfil": 7, "momfil": 7, "exchang": 7, "jfile": 7, "nosym": 7, "initmag": 7, "phonfil": 7, "ll": 7, "llfile": 7, "mml": 7, "mmlfile": 7, "initlatt": 7, "do_ld": 7, "mode": 7, "r": 7, "nstep": 7, "20000": 7, "timestep": 7, "1e": 7, "lattdamp": 7, "temp": 7, "do_lavrg": 7, "do_proj_lavrg": 7, "lavrg_step": 7, "lavrg_buff": 7, "do_ltottraj": 7, "ltottraj_step": 7, "ltottraj_buff": 7, "do_prn_eeff": 7, "eeff_step": 7, "eeff_buff": 7, "do_prn_einteff": 7, "einteff_step": 7, "einteff_buff": 7, "do_avrg": 7, "do_proj_avrg": 7, "avrg_step": 7, "avrg_buff": 7, "do_tottraj": 7, "tottraj_step": 7, "tottraj_buff": 7, "do_prn_beff": 7, "beff_step": 7, "beff_buff": 7, "do_prn_binteff": 7, "binteff_step": 7, "binteff_buff": 7, "plotenergi": 7, "posit": 7, "term": 7, "basi": 7, "vector": 7, "coordin": 7, "moment": 7, "983607": 7, "180328": 7, "within": 7, "ionic": 7, "mass": 7, "displac": 7, "column": 7, "site": 7, "type": 7, "three": 7, "direct": 7, "z": 7, "harmon": 7, "constant": 7, "maptyp": 7, "9": 7, "compon": 7, "order": 7, "xx": 7, "xy": 7, "xz": 7, "yx": 7, "yy": 7, "yz": 7, "zx": 7, "zy": 7, "zz": 7, "slc": 7, "see": 7, "row": 7, "nearest": 7, "neighbour": 7, "map": 7, "th": 7, "second": 7, "third": 7, "fourth": 7, "respec": 7, "each": 7, "For": 7, "dimersld": 7, "a_": 7, "iji": 7, "001": 7, "trimersld": 7, "either": 7, "ijk": 7, "option": 7, "group": 7, "bccfesld": 7, "mm": 7, "cutoff": 7, "variant": 7, "runbccf": 7, "gronbech": 7, "jensen": 7, "farago": 7, "measur": 7, "phase": 7, "canon": 7, "rescal": 7}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"uppasd": [0, 3], "supercomput": 0, "dardel": 0, "tetralith": 0, "exercis": [0, 2], "1": 0, "finit": 1, "temperatur": 1, "instructor": 2, "": 2, "guid": 2, "why": 2, "we": 2, "teach": 2, "thi": 2, "lesson": 2, "intend": 2, "learn": 2, "outcom": 2, "time": 2, "prepar": 2, "other": 2, "practic": 2, "aspect": 2, "interest": 2, "question": 2, "you": 2, "might": 2, "get": 2, "typic": 2, "pitfal": 2, "tutori": 3, "section": 3, "refer": [3, 5, 6], "magnon": 4, "quick": 5, "spin": 7, "lattic": 7, "dynam": 7, "sld": 7, "simul": 7, "dimer": 7, "trimer": 7, "bcc": 7, "fe": 7, "switch": 8}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 57}, "alltitles": {"UppASD on supercomputers": [[0, "uppasd-on-supercomputers"]], "UppASD on Dardel": [[0, "uppasd-on-dardel"]], "UppASD on Tetralith": [[0, "uppasd-on-tetralith"]], "Exercises": [[0, "exercises"]], "Exercise 1": [[0, "exercise-1"]], "Finite temperatures": [[1, "finite-temperatures"]], "Instructor\u2019s guide": [[2, "instructor-s-guide"]], "Why we teach this lesson": [[2, "why-we-teach-this-lesson"]], "Intended learning outcomes": [[2, "intended-learning-outcomes"]], "Timing": [[2, "timing"]], "Preparing exercises": [[2, "preparing-exercises"]], "Other practical aspects": [[2, "other-practical-aspects"]], "Interesting questions you might get": [[2, "interesting-questions-you-might-get"]], "Typical pitfalls": [[2, "typical-pitfalls"]], "UppASD tutorial": [[3, "uppasd-tutorial"]], "Sections": [[3, null]], "References": [[3, null], [6, "references"]], "Magnon": [[4, "magnon"]], "Quick Reference": [[5, "quick-reference"]], "Spin-lattice dynamics": [[7, "spin-lattice-dynamics"]], "SLD simulation of a dimer": [[7, "sld-simulation-of-a-dimer"]], "SLD simulation for trimer": [[7, "sld-simulation-for-trimer"]], "bcc Fe": [[7, "bcc-fe"]], "Switching": [[8, "switching"]]}, "indexentries": {}})
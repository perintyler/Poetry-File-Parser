/** MockData.jsx *
 * 
 * This file contains the raw plaintext contents of an example poetry file.
 * This file gets used when a user uses the "upload one for me" button. It's
 * also used for testing purposes.
 **/

export const MOCKFILE_CONTENTS = `
[[package]]
name = "atomicwrites"
version = "1.4.0"
description = "Atomic file writes."
category = "dev"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*"

[[package]]
name = "attrs"
version = "21.4.0"
description = "Classes Without Boilerplate"
category = "dev"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*"

[package.extras]
dev = ["coverage[toml] (>=5.0.2)", "hypothesis", "pympler", "pytest (>=4.3.0)", "six", "mypy", "pytest-mypy-plugins", "zope.interface", "furo", "sphinx", "sphinx-notfound-page", "pre-commit", "cloudpickle"]
docs = ["furo", "sphinx", "zope.interface", "sphinx-notfound-page"]
tests = ["coverage[toml] (>=5.0.2)", "hypothesis", "pympler", "pytest (>=4.3.0)", "six", "mypy", "pytest-mypy-plugins", "zope.interface", "cloudpickle"]
tests_no_zope = ["coverage[toml] (>=5.0.2)", "hypothesis", "pympler", "pytest (>=4.3.0)", "six", "mypy", "pytest-mypy-plugins", "cloudpickle"]

[[package]]
name = "cachecontrol"
version = "0.12.11"
description = "httplib2 caching for requests"
category = "main"
optional = false
python-versions = ">=3.6"

[package.dependencies]
lockfile = {version = ">=0.9", optional = true, markers = "extra == \\"filecache\\""}
msgpack = ">=0.5.2"
requests = "*"

[package.extras]
filecache = ["lockfile (>=0.9)"]
redis = ["redis (>=2.10.5)"]

[[package]]
name = "cachy"
version = "0.3.0"
description = "Cachy provides a simple yet effective caching library."
category = "main"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*"

[package.extras]
redis = ["redis (>=3.3.6,<4.0.0)"]
memcached = ["python-memcached (>=1.59,<2.0)"]
msgpack = ["msgpack-python (>=0.5,<0.6)"]

[[package]]
name = "certifi"
version = "2021.10.8"
description = "Python package for providing Mozilla's CA Bundle."
category = "main"
optional = false
python-versions = "*"

[[package]]
name = "cffi"
version = "1.15.0"
description = "Foreign Function Interface for Python calling C code."
category = "main"
optional = false
python-versions = "*"

[package.dependencies]
pycparser = "*"

[[package]]
name = "cfgv"
version = "3.3.1"
description = "Validate configuration and produce human readable error messages."
category = "dev"
optional = false
python-versions = ">=3.6.1"

[[package]]
name = "charset-normalizer"
version = "2.0.12"
description = "The Real First Universal Charset Detector. Open, modern and actively maintained alternative to Chardet."
category = "main"
optional = false
python-versions = ">=3.5.0"

[package.extras]
unicode_backport = ["unicodedata2"]

[[package]]
name = "cleo"
version = "1.0.0a4"
description = "Cleo allows you to create beautiful and testable command-line interfaces."
category = "main"
optional = false
python-versions = ">=3.6,<4.0"

[package.dependencies]
crashtest = ">=0.3.1,<0.4.0"
pylev = ">=1.3.0,<2.0.0"

[[package]]
name = "colorama"
version = "0.4.4"
description = "Cross-platform colored terminal text."
category = "dev"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*"

[[package]]
name = "coverage"
version = "6.3.2"
description = "Code coverage measurement for Python"
category = "dev"
optional = false
python-versions = ">=3.7"

[package.extras]
toml = ["tomli"]

[[package]]
name = "crashtest"
version = "0.3.1"
description = "Manage Python errors with ease"
category = "main"
optional = false
python-versions = ">=3.6,<4.0"

[[package]]
name = "cryptography"
version = "37.0.2"
description = "cryptography is a package which provides cryptographic recipes and primitives to Python developers."
category = "main"
optional = false
python-versions = ">=3.6"

[package.dependencies]
cffi = ">=1.12"

[package.extras]
docs = ["sphinx (>=1.6.5,!=1.8.0,!=3.1.0,!=3.1.1)", "sphinx-rtd-theme"]
docstest = ["pyenchant (>=1.6.11)", "twine (>=1.12.0)", "sphinxcontrib-spelling (>=4.0.1)"]
pep8test = ["black", "flake8", "flake8-import-order", "pep8-naming"]
sdist = ["setuptools_rust (>=0.11.4)"]
ssh = ["bcrypt (>=3.1.5)"]
test = ["pytest (>=6.2.0)", "pytest-benchmark", "pytest-cov", "pytest-subtests", "pytest-xdist", "pretend", "iso8601", "pytz", "hypothesis (>=1.11.4,!=3.79.2)"]

[[package]]
name = "deepdiff"
version = "5.8.0"
description = "Deep Difference and Search of any Python object/data."
category = "dev"
optional = false
python-versions = ">=3.6"

[package.dependencies]
ordered-set = ">=4.1.0,<4.2.0"

[package.extras]
cli = ["click (==8.0.3)", "pyyaml (==5.4.1)", "toml (==0.10.2)", "clevercsv (==0.7.1)"]

[[package]]
name = "distlib"
version = "0.3.4"
description = "Distribution utilities"
category = "main"
optional = false
python-versions = "*"

[[package]]
name = "dulwich"
version = "0.20.35"
description = "Python Git Library"
category = "main"
optional = false
python-versions = ">=3.6"

[package.dependencies]
certifi = "*"
urllib3 = ">=1.24.1"

[package.extras]
fastimport = ["fastimport"]
https = ["urllib3[secure] (>=1.24.1)"]
pgp = ["gpg"]
watch = ["pyinotify"]

[[package]]
name = "entrypoints"
version = "0.3"
description = "Discover and load entry points from installed packages."
category = "main"
optional = false
python-versions = ">=2.7"

[[package]]
name = "filelock"
version = "3.6.0"
description = "A platform independent file lock."
category = "main"
optional = false
python-versions = ">=3.7"

[package.extras]
docs = ["furo (>=2021.8.17b43)", "sphinx (>=4.1)", "sphinx-autodoc-typehints (>=1.12)"]
testing = ["covdefaults (>=1.2.0)", "coverage (>=4)", "pytest (>=4)", "pytest-cov", "pytest-timeout (>=1.4.2)"]

[[package]]
name = "flatdict"
version = "4.0.1"
description = "Python module for interacting with nested dicts as a single level dict with delimited keys."
category = "dev"
optional = false
python-versions = "*"

[[package]]
name = "html5lib"
version = "1.1"
description = "HTML parser based on the WHATWG HTML specification"
category = "main"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*"

[package.dependencies]
six = ">=1.9"
webencodings = "*"

[package.extras]
all = ["genshi", "chardet (>=2.2)", "lxml"]
chardet = ["chardet (>=2.2)"]
genshi = ["genshi"]
lxml = ["lxml"]

[[package]]
name = "httpretty"
version = "1.1.4"
description = "HTTP client mock for Python"
category = "dev"
optional = false
python-versions = ">=3"

[[package]]
name = "identify"
version = "2.5.0"
description = "File identification library for Python"
category = "dev"
optional = false
python-versions = ">=3.7"

[package.extras]
license = ["ukkonen"]

[[package]]
name = "idna"
version = "3.3"
description = "Internationalized Domain Names in Applications (IDNA)"
category = "main"
optional = false
python-versions = ">=3.5"

[[package]]
name = "importlib-metadata"
version = "4.11.3"
description = "Read metadata from Python packages"
category = "main"
optional = false
python-versions = ">=3.7"

[package.dependencies]
typing-extensions = {version = ">=3.6.4", markers = "python_version < \\"3.8\\""}
zipp = ">=0.5"

[package.extras]
docs = ["sphinx", "jaraco.packaging (>=9)", "rst.linker (>=1.9)"]
perf = ["ipython"]
testing = ["pytest (>=6)", "pytest-checkdocs (>=2.4)", "pytest-flake8", "pytest-cov", "pytest-enabler (>=1.0.1)", "packaging", "pyfakefs", "flufl.flake8", "pytest-perf (>=0.9.2)", "pytest-black (>=0.3.7)", "pytest-mypy (>=0.9.1)", "importlib-resources (>=1.3)"]

[[package]]
name = "iniconfig"
version = "1.1.1"
description = "iniconfig: brain-dead simple config-ini parsing"
category = "dev"
optional = false
python-versions = "*"

[[package]]
name = "jeepney"
version = "0.8.0"
description = "Low-level, pure Python DBus protocol wrapper."
category = "main"
optional = false
python-versions = ">=3.7"

[package.extras]
test = ["pytest", "pytest-trio", "pytest-asyncio (>=0.17)", "testpath", "trio", "async-timeout"]
trio = ["trio", "async-generator"]

[[package]]
name = "keyring"
version = "23.5.0"
description = "Store and access your passwords safely."
category = "main"
optional = false
python-versions = ">=3.7"

[package.dependencies]
importlib-metadata = ">=3.6"
jeepney = {version = ">=0.4.2", markers = "sys_platform == \\"linux\\""}
pywin32-ctypes = {version = "<0.1.0 || >0.1.0,<0.1.1 || >0.1.1", markers = "sys_platform == \\"win32\\""}
SecretStorage = {version = ">=3.2", markers = "sys_platform == \\"linux\\""}

[package.extras]
docs = ["sphinx", "jaraco.packaging (>=8.2)", "rst.linker (>=1.9)", "jaraco.tidelift (>=1.4)"]
testing = ["pytest (>=6)", "pytest-checkdocs (>=2.4)", "pytest-flake8", "pytest-cov", "pytest-enabler (>=1.0.1)", "pytest-black (>=0.3.7)", "pytest-mypy"]

[[package]]
name = "lockfile"
version = "0.12.2"
description = "Platform-independent file locking module"
category = "main"
optional = false
python-versions = "*"

[[package]]
name = "msgpack"
version = "1.0.3"
description = "MessagePack (de)serializer."
category = "main"
optional = false
python-versions = "*"

[[package]]
name = "mypy"
version = "0.950"
description = "Optional static typing for Python"
category = "dev"
optional = false
python-versions = ">=3.6"

[package.dependencies]
mypy-extensions = ">=0.4.3"
tomli = {version = ">=1.1.0", markers = "python_version < \\"3.11\\""}
typed-ast = {version = ">=1.4.0,<2", markers = "python_version < \\"3.8\\""}
typing-extensions = ">=3.10"

[package.extras]
dmypy = ["psutil (>=4.0)"]
python2 = ["typed-ast (>=1.4.0,<2)"]
reports = ["lxml"]

[[package]]
name = "mypy-extensions"
version = "0.4.3"
description = "Experimental type system extensions for programs checked with the mypy typechecker."
category = "dev"
optional = false
python-versions = "*"

[[package]]
name = "nodeenv"
version = "1.6.0"
description = "Node.js virtual environment builder"
category = "dev"
optional = false
python-versions = "*"

[[package]]
name = "ordered-set"
version = "4.1.0"
description = "An OrderedSet is a custom MutableSet that remembers its order, so that every"
category = "dev"
optional = false
python-versions = ">=3.7"

[package.extras]
dev = ["pytest", "black", "mypy"]

[[package]]
name = "packaging"
version = "21.3"
description = "Core utilities for Python packages"
category = "main"
optional = false
python-versions = ">=3.6"

[package.dependencies]
pyparsing = ">=2.0.2,<3.0.5 || >3.0.5"

[[package]]
name = "pexpect"
version = "4.8.0"
description = "Pexpect allows easy control of interactive console applications."
category = "main"
optional = false
python-versions = "*"

[package.dependencies]
ptyprocess = ">=0.5"

[[package]]
name = "pkginfo"
version = "1.8.2"
description = "Query metadatdata from sdists / bdists / installed packages."
category = "main"
optional = false
python-versions = "*"

[package.extras]
testing = ["coverage", "nose"]

[[package]]
name = "platformdirs"
version = "2.5.2"
description = "A small Python module for determining appropriate platform-specific dirs, e.g. a \\"user data dir\\"."
category = "main"
optional = false
python-versions = ">=3.7"

[package.extras]
docs = ["furo (>=2021.7.5b38)", "proselint (>=0.10.2)", "sphinx-autodoc-typehints (>=1.12)", "sphinx (>=4)"]
test = ["appdirs (==1.4.4)", "pytest-cov (>=2.7)", "pytest-mock (>=3.6)", "pytest (>=6)"]

[[package]]
name = "pluggy"
version = "1.0.0"
description = "plugin and hook calling mechanisms for python"
category = "dev"
optional = false
python-versions = ">=3.6"

[package.dependencies]
importlib-metadata = {version = ">=0.12", markers = "python_version < \\"3.8\\""}

[package.extras]
dev = ["pre-commit", "tox"]
testing = ["pytest", "pytest-benchmark"]

[[package]]
name = "poetry-core"
version = "1.1.0a7"
description = "Poetry PEP 517 Build Backend"
category = "main"
optional = false
python-versions = ">=3.7,<4.0"

[package.dependencies]
importlib-metadata = {version = ">=1.7.0", markers = "python_version < \\"3.8\\""}

[[package]]
name = "poetry-plugin-export"
version = "1.0.2"
description = "Poetry plugin to export the dependencies to various formats"
category = "main"
optional = false
python-versions = ">=3.7,<4.0"

[package.dependencies]
poetry = ">=1.2.0b1dev0,<2.0.0"

[[package]]
name = "pre-commit"
version = "2.19.0"
description = "A framework for managing and maintaining multi-language pre-commit hooks."
category = "dev"
optional = false
python-versions = ">=3.7"

[package.dependencies]
cfgv = ">=2.0.0"
identify = ">=1.0.0"
importlib-metadata = {version = "*", markers = "python_version < \\"3.8\\""}
nodeenv = ">=0.11.1"
pyyaml = ">=5.1"
toml = "*"
virtualenv = ">=20.0.8"

[[package]]
name = "ptyprocess"
version = "0.7.0"
description = "Run a subprocess in a pseudo terminal"
category = "main"
optional = false
python-versions = "*"

[[package]]
name = "py"
version = "1.11.0"
description = "library with cross-python path, ini-parsing, io, code, log facilities"
category = "dev"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*"

[[package]]
name = "pycparser"
version = "2.21"
description = "C parser in Python"
category = "main"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*"

[[package]]
name = "pylev"
version = "1.4.0"
description = "A pure Python Levenshtein implementation that's not freaking GPL'd."
category = "main"
optional = false
python-versions = "*"

[[package]]
name = "pyparsing"
version = "3.0.8"
description = "pyparsing module - Classes and methods to define and execute parsing grammars"
category = "main"
optional = false
python-versions = ">=3.6.8"

[package.extras]
diagrams = ["railroad-diagrams", "jinja2"]

[[package]]
name = "pytest"
version = "6.2.5"
description = "pytest: simple powerful testing with Python"
category = "dev"
optional = false
python-versions = ">=3.6"

[package.dependencies]
atomicwrites = {version = ">=1.0", markers = "sys_platform == \\"win32\\""}
attrs = ">=19.2.0"
colorama = {version = "*", markers = "sys_platform == \\"win32\\""}
importlib-metadata = {version = ">=0.12", markers = "python_version < \\"3.8\\""}
iniconfig = "*"
packaging = "*"
pluggy = ">=0.12,<2.0"
py = ">=1.8.2"
toml = "*"

[package.extras]
testing = ["argcomplete", "hypothesis (>=3.56)", "mock", "nose", "requests", "xmlschema"]

[[package]]
name = "pytest-cov"
version = "2.12.1"
description = "Pytest plugin for measuring coverage."
category = "dev"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*"

[package.dependencies]
coverage = ">=5.2.1"
pytest = ">=4.6"
toml = "*"

[package.extras]
testing = ["fields", "hunter", "process-tests", "six", "pytest-xdist", "virtualenv"]

[[package]]
name = "pytest-mock"
version = "3.7.0"
description = "Thin-wrapper around the mock package for easier use with pytest"
category = "dev"
optional = false
python-versions = ">=3.7"

[package.dependencies]
pytest = ">=5.0"

[package.extras]
dev = ["pre-commit", "tox", "pytest-asyncio"]

[[package]]
name = "pytest-sugar"
version = "0.9.4"
description = "pytest-sugar is a plugin for pytest that changes the default look and feel of pytest (e.g. progressbar, show tests that fail instantly)."
category = "dev"
optional = false
python-versions = "*"

[package.dependencies]
packaging = ">=14.1"
pytest = ">=2.9"
termcolor = ">=1.1.0"

[[package]]
name = "pywin32-ctypes"
version = "0.2.0"
description = ""
category = "main"
optional = false
python-versions = "*"

[[package]]
name = "pyyaml"
version = "6.0"
description = "YAML parser and emitter for Python"
category = "dev"
optional = false
python-versions = ">=3.6"

[[package]]
name = "requests"
version = "2.27.1"
description = "Python HTTP for Humans."
category = "main"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*, !=3.5.*"

[package.dependencies]
certifi = ">=2017.4.17"
charset-normalizer = {version = ">=2.0.0,<2.1.0", markers = "python_version >= \\"3\\""}
idna = {version = ">=2.5,<4", markers = "python_version >= \\"3\\""}
urllib3 = ">=1.21.1,<1.27"

[package.extras]
socks = ["PySocks (>=1.5.6,!=1.5.7)", "win-inet-pton"]
use_chardet_on_py3 = ["chardet (>=3.0.2,<5)"]

[[package]]
name = "requests-toolbelt"
version = "0.9.1"
description = "A utility belt for advanced users of python-requests"
category = "main"
optional = false
python-versions = "*"

[package.dependencies]
requests = ">=2.0.1,<3.0.0"

[[package]]
name = "secretstorage"
version = "3.3.2"
description = "Python bindings to FreeDesktop.org Secret Service API"
category = "main"
optional = false
python-versions = ">=3.6"

[package.dependencies]
cryptography = ">=2.0"
jeepney = ">=0.6"

[[package]]
name = "shellingham"
version = "1.4.0"
description = "Tool to Detect Surrounding Shell"
category = "main"
optional = false
python-versions = "!=3.0,!=3.1,!=3.2,!=3.3,>=2.6"

[[package]]
name = "six"
version = "1.16.0"
description = "Python 2 and 3 compatibility utilities"
category = "main"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*"

[[package]]
name = "termcolor"
version = "1.1.0"
description = "ANSII Color formatting for output in terminal."
category = "dev"
optional = false
python-versions = "*"

[[package]]
name = "toml"
version = "0.10.2"
description = "Python Library for Tom's Obvious, Minimal Language"
category = "dev"
optional = false
python-versions = ">=2.6, !=3.0.*, !=3.1.*, !=3.2.*"

[[package]]
name = "tomli"
version = "2.0.1"
description = "A lil' TOML parser"
category = "dev"
optional = false
python-versions = ">=3.7"

[[package]]
name = "tomlkit"
version = "0.10.2"
description = "Style preserving TOML library"
category = "main"
optional = false
python-versions = ">=3.6,<4.0"

[[package]]
name = "tox"
version = "3.25.0"
description = "tox is a generic virtualenv management and test command line tool"
category = "dev"
optional = false
python-versions = "!=3.0.*,!=3.1.*,!=3.2.*,!=3.3.*,!=3.4.*,>=2.7"

[package.dependencies]
colorama = {version = ">=0.4.1", markers = "platform_system == \\"Windows\\""}
filelock = ">=3.0.0"
importlib-metadata = {version = ">=0.12", markers = "python_version < \\"3.8\\""}
packaging = ">=14"
pluggy = ">=0.12.0"
py = ">=1.4.17"
six = ">=1.14.0"
toml = ">=0.9.4"
virtualenv = ">=16.0.0,<20.0.0 || >20.0.0,<20.0.1 || >20.0.1,<20.0.2 || >20.0.2,<20.0.3 || >20.0.3,<20.0.4 || >20.0.4,<20.0.5 || >20.0.5,<20.0.6 || >20.0.6,<20.0.7 || >20.0.7"

[package.extras]
docs = ["pygments-github-lexers (>=0.0.5)", "sphinx (>=2.0.0)", "sphinxcontrib-autoprogram (>=0.1.5)", "towncrier (>=18.5.0)"]
testing = ["flaky (>=3.4.0)", "freezegun (>=0.3.11)", "pytest (>=4.0.0)", "pytest-cov (>=2.5.1)", "pytest-mock (>=1.10.0)", "pytest-randomly (>=1.0.0)", "psutil (>=5.6.1)", "pathlib2 (>=2.3.3)"]

[[package]]
name = "typed-ast"
version = "1.5.3"
description = "a fork of Python 2 and 3 ast modules with type comment support"
category = "dev"
optional = false
python-versions = ">=3.6"

[[package]]
name = "types-requests"
version = "2.27.25"
description = "Typing stubs for requests"
category = "dev"
optional = false
python-versions = "*"

[package.dependencies]
types-urllib3 = "<1.27"

[[package]]
name = "types-urllib3"
version = "1.26.14"
description = "Typing stubs for urllib3"
category = "dev"
optional = false
python-versions = "*"

[[package]]
name = "typing-extensions"
version = "4.2.0"
description = "Backported and Experimental Type Hints for Python 3.7+"
category = "main"
optional = false
python-versions = ">=3.7"

[[package]]
name = "urllib3"
version = "1.26.9"
description = "HTTP library with thread-safe connection pooling, file post, and more."
category = "main"
optional = false
python-versions = ">=2.7, !=3.0.*, !=3.1.*, !=3.2.*, !=3.3.*, !=3.4.*, <4"

[package.extras]
brotli = ["brotlicffi (>=0.8.0)", "brotli (>=1.0.9)", "brotlipy (>=0.6.0)"]
secure = ["pyOpenSSL (>=0.14)", "cryptography (>=1.3.4)", "idna (>=2.0.0)", "certifi", "ipaddress"]
socks = ["PySocks (>=1.5.6,!=1.5.7,<2.0)"]

[[package]]
name = "virtualenv"
version = "20.14.1"
description = "Virtual Python Environment builder"
category = "main"
optional = false
python-versions = "!=3.0.*,!=3.1.*,!=3.2.*,!=3.3.*,!=3.4.*,>=2.7"

[package.dependencies]
distlib = ">=0.3.1,<1"
filelock = ">=3.2,<4"
importlib-metadata = {version = ">=0.12", markers = "python_version < \\"3.8\\""}
platformdirs = ">=2,<3"
six = ">=1.9.0,<2"

[package.extras]
docs = ["proselint (>=0.10.2)", "sphinx (>=3)", "sphinx-argparse (>=0.2.5)", "sphinx-rtd-theme (>=0.4.3)", "towncrier (>=21.3)"]
testing = ["coverage (>=4)", "coverage-enable-subprocess (>=1)", "flaky (>=3)", "pytest (>=4)", "pytest-env (>=0.6.2)", "pytest-freezegun (>=0.4.1)", "pytest-mock (>=2)", "pytest-randomly (>=1)", "pytest-timeout (>=1)", "packaging (>=20.0)"]

[[package]]
name = "webencodings"
version = "0.5.1"
description = "Character encoding aliases for legacy web content"
category = "main"
optional = false
python-versions = "*"

[[package]]
name = "zipp"
version = "3.8.0"
description = "Backport of pathlib-compatible object wrapper for zip files"
category = "main"
optional = false
python-versions = ">=3.7"

[package.extras]
docs = ["sphinx", "jaraco.packaging (>=9)", "rst.linker (>=1.9)"]
testing = ["pytest (>=6)", "pytest-checkdocs (>=2.4)", "pytest-flake8", "pytest-cov", "pytest-enabler (>=1.0.1)", "jaraco.itertools", "func-timeout", "pytest-black (>=0.3.7)", "pytest-mypy (>=0.9.1)"]

[metadata]
lock-version = "1.1"
python-versions = "^3.7"
content-hash = "2faf18664a94b0dc94c937c24fe8fdbf95aefe3e6bc85e2346fe935047bca353"

[metadata.files]
atomicwrites = [
    {file = "atomicwrites-1.4.0-py2.py3-none-any.whl", hash = "sha256:6d1784dea7c0c8d4a5172b6c620f40b6e4cbfdf96d783691f2e1302a7b88e197"},
    {file = "atomicwrites-1.4.0.tar.gz", hash = "sha256:ae70396ad1a434f9c7046fd2dd196fc04b12f9e91ffb859164193be8b6168a7a"},
]
attrs = [
    {file = "attrs-21.4.0-py2.py3-none-any.whl", hash = "sha256:2d27e3784d7a565d36ab851fe94887c5eccd6a463168875832a1be79c82828b4"},
    {file = "attrs-21.4.0.tar.gz", hash = "sha256:626ba8234211db98e869df76230a137c4c40a12d72445c45d5f5b716f076e2fd"},
]
cachecontrol = [
    {file = "CacheControl-0.12.11-py2.py3-none-any.whl", hash = "sha256:2c75d6a8938cb1933c75c50184549ad42728a27e9f6b92fd677c3151aa72555b"},
    {file = "CacheControl-0.12.11.tar.gz", hash = "sha256:a5b9fcc986b184db101aa280b42ecdcdfc524892596f606858e0b7a8b4d9e144"},
]
cachy = [
    {file = "cachy-0.3.0-py2.py3-none-any.whl", hash = "sha256:338ca09c8860e76b275aff52374330efedc4d5a5e45dc1c5b539c1ead0786fe7"},
    {file = "cachy-0.3.0.tar.gz", hash = "sha256:186581f4ceb42a0bbe040c407da73c14092379b1e4c0e327fdb72ae4a9b269b1"},
]
certifi = [
    {file = "certifi-2021.10.8-py2.py3-none-any.whl", hash = "sha256:d62a0163eb4c2344ac042ab2bdf75399a71a2d8c7d47eac2e2ee91b9d6339569"},
    {file = "certifi-2021.10.8.tar.gz", hash = "sha256:78884e7c1d4b00ce3cea67b44566851c4343c120abd683433ce934a68ea58872"},
]
cffi = [
    {file = "cffi-1.15.0-cp27-cp27m-macosx_10_9_x86_64.whl", hash = "sha256:c2502a1a03b6312837279c8c1bd3ebedf6c12c4228ddbad40912d671ccc8a962"},
    {file = "cffi-1.15.0-cp27-cp27m-manylinux1_i686.whl", hash = "sha256:23cfe892bd5dd8941608f93348c0737e369e51c100d03718f108bf1add7bd6d0"},
    {file = "cffi-1.15.0-cp27-cp27m-manylinux1_x86_64.whl", hash = "sha256:41d45de54cd277a7878919867c0f08b0cf817605e4eb94093e7516505d3c8d14"},
    {file = "cffi-1.15.0-cp27-cp27m-win32.whl", hash = "sha256:4a306fa632e8f0928956a41fa8e1d6243c71e7eb59ffbd165fc0b41e316b2474"},
    {file = "cffi-1.15.0-cp27-cp27m-win_amd64.whl", hash = "sha256:e7022a66d9b55e93e1a845d8c9eba2a1bebd4966cd8bfc25d9cd07d515b33fa6"},
    {file = "cffi-1.15.0-cp27-cp27mu-manylinux1_i686.whl", hash = "sha256:14cd121ea63ecdae71efa69c15c5543a4b5fbcd0bbe2aad864baca0063cecf27"},
    {file = "cffi-1.15.0-cp27-cp27mu-manylinux1_x86_64.whl", hash = "sha256:d4d692a89c5cf08a8557fdeb329b82e7bf609aadfaed6c0d79f5a449a3c7c023"},
    {file = "cffi-1.15.0-cp310-cp310-macosx_10_9_x86_64.whl", hash = "sha256:0104fb5ae2391d46a4cb082abdd5c69ea4eab79d8d44eaaf79f1b1fd806ee4c2"},
    {file = "cffi-1.15.0-cp310-cp310-macosx_11_0_arm64.whl", hash = "sha256:91ec59c33514b7c7559a6acda53bbfe1b283949c34fe7440bcf917f96ac0723e"},
    {file = "cffi-1.15.0-cp310-cp310-manylinux_2_12_i686.manylinux2010_i686.whl", hash = "sha256:f5c7150ad32ba43a07c4479f40241756145a1f03b43480e058cfd862bf5041c7"},
    {file = "cffi-1.15.0-cp310-cp310-manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:00c878c90cb53ccfaae6b8bc18ad05d2036553e6d9d1d9dbcf323bbe83854ca3"},
    {file = "cffi-1.15.0-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:abb9a20a72ac4e0fdb50dae135ba5e77880518e742077ced47eb1499e29a443c"},
    {file = "cffi-1.15.0-cp310-cp310-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:a5263e363c27b653a90078143adb3d076c1a748ec9ecc78ea2fb916f9b861962"},
    {file = "cffi-1.15.0-cp310-cp310-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:f54a64f8b0c8ff0b64d18aa76675262e1700f3995182267998c31ae974fbc382"},
    {file = "cffi-1.15.0-cp310-cp310-win32.whl", hash = "sha256:c21c9e3896c23007803a875460fb786118f0cdd4434359577ea25eb556e34c55"},
    {file = "cffi-1.15.0-cp310-cp310-win_amd64.whl", hash = "sha256:5e069f72d497312b24fcc02073d70cb989045d1c91cbd53979366077959933e0"},
    {file = "cffi-1.15.0-cp36-cp36m-macosx_10_9_x86_64.whl", hash = "sha256:64d4ec9f448dfe041705426000cc13e34e6e5bb13736e9fd62e34a0b0c41566e"},
    {file = "cffi-1.15.0-cp36-cp36m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:2756c88cbb94231c7a147402476be2c4df2f6078099a6f4a480d239a8817ae39"},
    {file = "cffi-1.15.0-cp36-cp36m-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:3b96a311ac60a3f6be21d2572e46ce67f09abcf4d09344c49274eb9e0bf345fc"},
    {file = "cffi-1.15.0-cp36-cp36m-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:75e4024375654472cc27e91cbe9eaa08567f7fbdf822638be2814ce059f58032"},
    {file = "cffi-1.15.0-cp36-cp36m-manylinux_2_5_i686.manylinux1_i686.whl", hash = "sha256:59888172256cac5629e60e72e86598027aca6bf01fa2465bdb676d37636573e8"},
    {file = "cffi-1.15.0-cp36-cp36m-manylinux_2_5_x86_64.manylinux1_x86_64.whl", hash = "sha256:27c219baf94952ae9d50ec19651a687b826792055353d07648a5695413e0c605"},
    {file = "cffi-1.15.0-cp36-cp36m-win32.whl", hash = "sha256:4958391dbd6249d7ad855b9ca88fae690783a6be9e86df65865058ed81fc860e"},
    {file = "cffi-1.15.0-cp36-cp36m-win_amd64.whl", hash = "sha256:f6f824dc3bce0edab5f427efcfb1d63ee75b6fcb7282900ccaf925be84efb0fc"},
    {file = "cffi-1.15.0-cp37-cp37m-macosx_10_9_x86_64.whl", hash = "sha256:06c48159c1abed75c2e721b1715c379fa3200c7784271b3c46df01383b593636"},
    {file = "cffi-1.15.0-cp37-cp37m-manylinux_2_12_i686.manylinux2010_i686.whl", hash = "sha256:c2051981a968d7de9dd2d7b87bcb9c939c74a34626a6e2f8181455dd49ed69e4"},
    {file = "cffi-1.15.0-cp37-cp37m-manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:fd8a250edc26254fe5b33be00402e6d287f562b6a5b2152dec302fa15bb3e997"},
    {file = "cffi-1.15.0-cp37-cp37m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:91d77d2a782be4274da750752bb1650a97bfd8f291022b379bb8e01c66b4e96b"},
    {file = "cffi-1.15.0-cp37-cp37m-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:45db3a33139e9c8f7c09234b5784a5e33d31fd6907800b316decad50af323ff2"},
    {file = "cffi-1.15.0-cp37-cp37m-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:263cc3d821c4ab2213cbe8cd8b355a7f72a8324577dc865ef98487c1aeee2bc7"},
    {file = "cffi-1.15.0-cp37-cp37m-win32.whl", hash = "sha256:17771976e82e9f94976180f76468546834d22a7cc404b17c22df2a2c81db0c66"},
    {file = "cffi-1.15.0-cp37-cp37m-win_amd64.whl", hash = "sha256:3415c89f9204ee60cd09b235810be700e993e343a408693e80ce7f6a40108029"},
    {file = "cffi-1.15.0-cp38-cp38-macosx_10_9_x86_64.whl", hash = "sha256:4238e6dab5d6a8ba812de994bbb0a79bddbdf80994e4ce802b6f6f3142fcc880"},
    {file = "cffi-1.15.0-cp38-cp38-manylinux_2_12_i686.manylinux2010_i686.whl", hash = "sha256:0808014eb713677ec1292301ea4c81ad277b6cdf2fdd90fd540af98c0b101d20"},
    {file = "cffi-1.15.0-cp38-cp38-manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:57e9ac9ccc3101fac9d6014fba037473e4358ef4e89f8e181f8951a2c0162024"},
    {file = "cffi-1.15.0-cp38-cp38-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:8b6c2ea03845c9f501ed1313e78de148cd3f6cad741a75d43a29b43da27f2e1e"},
    {file = "cffi-1.15.0-cp38-cp38-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:10dffb601ccfb65262a27233ac273d552ddc4d8ae1bf93b21c94b8511bffe728"},
    {file = "cffi-1.15.0-cp38-cp38-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:786902fb9ba7433aae840e0ed609f45c7bcd4e225ebb9c753aa39725bb3e6ad6"},
    {file = "cffi-1.15.0-cp38-cp38-win32.whl", hash = "sha256:da5db4e883f1ce37f55c667e5c0de439df76ac4cb55964655906306918e7363c"},
    {file = "cffi-1.15.0-cp38-cp38-win_amd64.whl", hash = "sha256:181dee03b1170ff1969489acf1c26533710231c58f95534e3edac87fff06c443"},
    {file = "cffi-1.15.0-cp39-cp39-macosx_10_9_x86_64.whl", hash = "sha256:45e8636704eacc432a206ac7345a5d3d2c62d95a507ec70d62f23cd91770482a"},
    {file = "cffi-1.15.0-cp39-cp39-macosx_11_0_arm64.whl", hash = "sha256:31fb708d9d7c3f49a60f04cf5b119aeefe5644daba1cd2a0fe389b674fd1de37"},
    {file = "cffi-1.15.0-cp39-cp39-manylinux_2_12_i686.manylinux2010_i686.whl", hash = "sha256:6dc2737a3674b3e344847c8686cf29e500584ccad76204efea14f451d4cc669a"},
    {file = "cffi-1.15.0-cp39-cp39-manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:74fdfdbfdc48d3f47148976f49fab3251e550a8720bebc99bf1483f5bfb5db3e"},
    {file = "cffi-1.15.0-cp39-cp39-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:ffaa5c925128e29efbde7301d8ecaf35c8c60ffbcd6a1ffd3a552177c8e5e796"},
    {file = "cffi-1.15.0-cp39-cp39-manylinux_2_17_ppc64le.manylinux2014_ppc64le.whl", hash = "sha256:3f7d084648d77af029acb79a0ff49a0ad7e9d09057a9bf46596dac9514dc07df"},
    {file = "cffi-1.15.0-cp39-cp39-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:ef1f279350da2c586a69d32fc8733092fd32cc8ac95139a00377841f59a3f8d8"},
    {file = "cffi-1.15.0-cp39-cp39-win32.whl", hash = "sha256:2a23af14f408d53d5e6cd4e3d9a24ff9e05906ad574822a10563efcef137979a"},
    {file = "cffi-1.15.0-cp39-cp39-win_amd64.whl", hash = "sha256:3773c4d81e6e818df2efbc7dd77325ca0dcb688116050fb2b3011218eda36139"},
    {file = "cffi-1.15.0.tar.gz", hash = "sha256:920f0d66a896c2d99f0adbb391f990a84091179542c205fa53ce5787aff87954"},
]
cfgv = [
    {file = "cfgv-3.3.1-py2.py3-none-any.whl", hash = "sha256:c6a0883f3917a037485059700b9e75da2464e6c27051014ad85ba6aaa5884426"},
    {file = "cfgv-3.3.1.tar.gz", hash = "sha256:f5a830efb9ce7a445376bb66ec94c638a9787422f96264c98edc6bdeed8ab736"},
]
charset-normalizer = [
    {file = "charset-normalizer-2.0.12.tar.gz", hash = "sha256:2857e29ff0d34db842cd7ca3230549d1a697f96ee6d3fb071cfa6c7393832597"},
    {file = "charset_normalizer-2.0.12-py3-none-any.whl", hash = "sha256:6881edbebdb17b39b4eaaa821b438bf6eddffb4468cf344f09f89def34a8b1df"},
]
cleo = [
    {file = "cleo-1.0.0a4-py3-none-any.whl", hash = "sha256:cdd0c3458c15ced3a9f0204b1e53a1b4bee3c56ebcb3ac54c872a56acc657a09"},
    {file = "cleo-1.0.0a4.tar.gz", hash = "sha256:a103a065d031b7d936ee88a6b93086a69bd9c1b40fa2ebfe8c056285a66b481d"},
]
colorama = [
    {file = "colorama-0.4.4-py2.py3-none-any.whl", hash = "sha256:9f47eda37229f68eee03b24b9748937c7dc3868f906e8ba69fbcbdd3bc5dc3e2"},
    {file = "colorama-0.4.4.tar.gz", hash = "sha256:5941b2b48a20143d2267e95b1c2a7603ce057ee39fd88e7329b0c292aa16869b"},
]
coverage = [
    {file = "coverage-6.3.2-cp310-cp310-macosx_10_9_x86_64.whl", hash = "sha256:9b27d894748475fa858f9597c0ee1d4829f44683f3813633aaf94b19cb5453cf"},
    {file = "coverage-6.3.2-cp310-cp310-macosx_11_0_arm64.whl", hash = "sha256:37d1141ad6b2466a7b53a22e08fe76994c2d35a5b6b469590424a9953155afac"},
    {file = "coverage-6.3.2-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:f9987b0354b06d4df0f4d3e0ec1ae76d7ce7cbca9a2f98c25041eb79eec766f1"},
    {file = "coverage-6.3.2-cp310-cp310-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:26e2deacd414fc2f97dd9f7676ee3eaecd299ca751412d89f40bc01557a6b1b4"},
    {file = "coverage-6.3.2-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:4dd8bafa458b5c7d061540f1ee9f18025a68e2d8471b3e858a9dad47c8d41903"},
    {file = "coverage-6.3.2-cp310-cp310-musllinux_1_1_aarch64.whl", hash = "sha256:46191097ebc381fbf89bdce207a6c107ac4ec0890d8d20f3360345ff5976155c"},
    {file = "coverage-6.3.2-cp310-cp310-musllinux_1_1_i686.whl", hash = "sha256:6f89d05e028d274ce4fa1a86887b071ae1755082ef94a6740238cd7a8178804f"},
    {file = "coverage-6.3.2-cp310-cp310-musllinux_1_1_x86_64.whl", hash = "sha256:58303469e9a272b4abdb9e302a780072c0633cdcc0165db7eec0f9e32f901e05"},
    {file = "coverage-6.3.2-cp310-cp310-win32.whl", hash = "sha256:2fea046bfb455510e05be95e879f0e768d45c10c11509e20e06d8fcaa31d9e39"},
    {file = "coverage-6.3.2-cp310-cp310-win_amd64.whl", hash = "sha256:a2a8b8bcc399edb4347a5ca8b9b87e7524c0967b335fbb08a83c8421489ddee1"},
    {file = "coverage-6.3.2-cp37-cp37m-macosx_10_9_x86_64.whl", hash = "sha256:f1555ea6d6da108e1999b2463ea1003fe03f29213e459145e70edbaf3e004aaa"},
    {file = "coverage-6.3.2-cp37-cp37m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:e5f4e1edcf57ce94e5475fe09e5afa3e3145081318e5fd1a43a6b4539a97e518"},
    {file = "coverage-6.3.2-cp37-cp37m-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:7a15dc0a14008f1da3d1ebd44bdda3e357dbabdf5a0b5034d38fcde0b5c234b7"},
    {file = "coverage-6.3.2-cp37-cp37m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:21b7745788866028adeb1e0eca3bf1101109e2dc58456cb49d2d9b99a8c516e6"},
    {file = "coverage-6.3.2-cp37-cp37m-musllinux_1_1_aarch64.whl", hash = "sha256:8ce257cac556cb03be4a248d92ed36904a59a4a5ff55a994e92214cde15c5bad"},
    {file = "coverage-6.3.2-cp37-cp37m-musllinux_1_1_i686.whl", hash = "sha256:b0be84e5a6209858a1d3e8d1806c46214e867ce1b0fd32e4ea03f4bd8b2e3359"},
    {file = "coverage-6.3.2-cp37-cp37m-musllinux_1_1_x86_64.whl", hash = "sha256:acf53bc2cf7282ab9b8ba346746afe703474004d9e566ad164c91a7a59f188a4"},
    {file = "coverage-6.3.2-cp37-cp37m-win32.whl", hash = "sha256:8bdde1177f2311ee552f47ae6e5aa7750c0e3291ca6b75f71f7ffe1f1dab3dca"},
    {file = "coverage-6.3.2-cp37-cp37m-win_amd64.whl", hash = "sha256:b31651d018b23ec463e95cf10070d0b2c548aa950a03d0b559eaa11c7e5a6fa3"},
    {file = "coverage-6.3.2-cp38-cp38-macosx_10_9_x86_64.whl", hash = "sha256:07e6db90cd9686c767dcc593dff16c8c09f9814f5e9c51034066cad3373b914d"},
    {file = "coverage-6.3.2-cp38-cp38-macosx_11_0_arm64.whl", hash = "sha256:2c6dbb42f3ad25760010c45191e9757e7dce981cbfb90e42feef301d71540059"},
    {file = "coverage-6.3.2-cp38-cp38-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:c76aeef1b95aff3905fb2ae2d96e319caca5b76fa41d3470b19d4e4a3a313512"},
    {file = "coverage-6.3.2-cp38-cp38-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:8cf5cfcb1521dc3255d845d9dca3ff204b3229401994ef8d1984b32746bb45ca"},
    {file = "coverage-6.3.2-cp38-cp38-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:8fbbdc8d55990eac1b0919ca69eb5a988a802b854488c34b8f37f3e2025fa90d"},
    {file = "coverage-6.3.2-cp38-cp38-musllinux_1_1_aarch64.whl", hash = "sha256:ec6bc7fe73a938933d4178c9b23c4e0568e43e220aef9472c4f6044bfc6dd0f0"},
    {file = "coverage-6.3.2-cp38-cp38-musllinux_1_1_i686.whl", hash = "sha256:9baff2a45ae1f17c8078452e9e5962e518eab705e50a0aa8083733ea7d45f3a6"},
    {file = "coverage-6.3.2-cp38-cp38-musllinux_1_1_x86_64.whl", hash = "sha256:fd9e830e9d8d89b20ab1e5af09b32d33e1a08ef4c4e14411e559556fd788e6b2"},
    {file = "coverage-6.3.2-cp38-cp38-win32.whl", hash = "sha256:f7331dbf301b7289013175087636bbaf5b2405e57259dd2c42fdcc9fcc47325e"},
    {file = "coverage-6.3.2-cp38-cp38-win_amd64.whl", hash = "sha256:68353fe7cdf91f109fc7d474461b46e7f1f14e533e911a2a2cbb8b0fc8613cf1"},
    {file = "coverage-6.3.2-cp39-cp39-macosx_10_9_x86_64.whl", hash = "sha256:b78e5afb39941572209f71866aa0b206c12f0109835aa0d601e41552f9b3e620"},
    {file = "coverage-6.3.2-cp39-cp39-macosx_11_0_arm64.whl", hash = "sha256:4e21876082ed887baed0146fe222f861b5815455ada3b33b890f4105d806128d"},
    {file = "coverage-6.3.2-cp39-cp39-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:34626a7eee2a3da12af0507780bb51eb52dca0e1751fd1471d0810539cefb536"},
    {file = "coverage-6.3.2-cp39-cp39-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:1ebf730d2381158ecf3dfd4453fbca0613e16eaa547b4170e2450c9707665ce7"},
    {file = "coverage-6.3.2-cp39-cp39-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:dd6fe30bd519694b356cbfcaca9bd5c1737cddd20778c6a581ae20dc8c04def2"},
    {file = "coverage-6.3.2-cp39-cp39-musllinux_1_1_aarch64.whl", hash = "sha256:96f8a1cb43ca1422f36492bebe63312d396491a9165ed3b9231e778d43a7fca4"},
    {file = "coverage-6.3.2-cp39-cp39-musllinux_1_1_i686.whl", hash = "sha256:dd035edafefee4d573140a76fdc785dc38829fe5a455c4bb12bac8c20cfc3d69"},
    {file = "coverage-6.3.2-cp39-cp39-musllinux_1_1_x86_64.whl", hash = "sha256:5ca5aeb4344b30d0bec47481536b8ba1181d50dbe783b0e4ad03c95dc1296684"},
    {file = "coverage-6.3.2-cp39-cp39-win32.whl", hash = "sha256:f5fa5803f47e095d7ad8443d28b01d48c0359484fec1b9d8606d0e3282084bc4"},
    {file = "coverage-6.3.2-cp39-cp39-win_amd64.whl", hash = "sha256:9548f10d8be799551eb3a9c74bbf2b4934ddb330e08a73320123c07f95cc2d92"},
    {file = "coverage-6.3.2-pp36.pp37.pp38-none-any.whl", hash = "sha256:18d520c6860515a771708937d2f78f63cc47ab3b80cb78e86573b0a760161faf"},
    {file = "coverage-6.3.2.tar.gz", hash = "sha256:03e2a7826086b91ef345ff18742ee9fc47a6839ccd517061ef8fa1976e652ce9"},
]
crashtest = [
    {file = "crashtest-0.3.1-py3-none-any.whl", hash = "sha256:300f4b0825f57688b47b6d70c6a31de33512eb2fa1ac614f780939aa0cf91680"},
    {file = "crashtest-0.3.1.tar.gz", hash = "sha256:42ca7b6ce88b6c7433e2ce47ea884e91ec93104a4b754998be498a8e6c3d37dd"},
]
cryptography = [
    {file = "cryptography-37.0.2-cp36-abi3-macosx_10_10_universal2.whl", hash = "sha256:ef15c2df7656763b4ff20a9bc4381d8352e6640cfeb95c2972c38ef508e75181"},
    {file = "cryptography-37.0.2-cp36-abi3-macosx_10_10_x86_64.whl", hash = "sha256:3c81599befb4d4f3d7648ed3217e00d21a9341a9a688ecdd615ff72ffbed7336"},
    {file = "cryptography-37.0.2-cp36-abi3-manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:2bd1096476aaac820426239ab534b636c77d71af66c547b9ddcd76eb9c79e004"},
    {file = "cryptography-37.0.2-cp36-abi3-manylinux_2_17_aarch64.manylinux2014_aarch64.manylinux_2_24_aarch64.whl", hash = "sha256:31fe38d14d2e5f787e0aecef831457da6cec68e0bb09a35835b0b44ae8b988fe"},
    {file = "cryptography-37.0.2-cp36-abi3-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:093cb351031656d3ee2f4fa1be579a8c69c754cf874206be1d4cf3b542042804"},
    {file = "cryptography-37.0.2-cp36-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:59b281eab51e1b6b6afa525af2bd93c16d49358404f814fe2c2410058623928c"},
    {file = "cryptography-37.0.2-cp36-abi3-manylinux_2_24_x86_64.whl", hash = "sha256:0cc20f655157d4cfc7bada909dc5cc228211b075ba8407c46467f63597c78178"},
    {file = "cryptography-37.0.2-cp36-abi3-musllinux_1_1_aarch64.whl", hash = "sha256:f8ec91983e638a9bcd75b39f1396e5c0dc2330cbd9ce4accefe68717e6779e0a"},
    {file = "cryptography-37.0.2-cp36-abi3-musllinux_1_1_x86_64.whl", hash = "sha256:46f4c544f6557a2fefa7ac8ac7d1b17bf9b647bd20b16decc8fbcab7117fbc15"},
    {file = "cryptography-37.0.2-cp36-abi3-win32.whl", hash = "sha256:731c8abd27693323b348518ed0e0705713a36d79fdbd969ad968fbef0979a7e0"},
    {file = "cryptography-37.0.2-cp36-abi3-win_amd64.whl", hash = "sha256:471e0d70201c069f74c837983189949aa0d24bb2d751b57e26e3761f2f782b8d"},
    {file = "cryptography-37.0.2-pp37-pypy37_pp73-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:a68254dd88021f24a68b613d8c51d5c5e74d735878b9e32cc0adf19d1f10aaf9"},
    {file = "cryptography-37.0.2-pp37-pypy37_pp73-manylinux_2_24_x86_64.whl", hash = "sha256:a7d5137e556cc0ea418dca6186deabe9129cee318618eb1ffecbd35bee55ddc1"},
    {file = "cryptography-37.0.2-pp38-pypy38_pp73-macosx_10_10_x86_64.whl", hash = "sha256:aeaba7b5e756ea52c8861c133c596afe93dd716cbcacae23b80bc238202dc023"},
    {file = "cryptography-37.0.2-pp38-pypy38_pp73-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:95e590dd70642eb2079d280420a888190aa040ad20f19ec8c6e097e38aa29e06"},
    {file = "cryptography-37.0.2-pp38-pypy38_pp73-manylinux_2_24_x86_64.whl", hash = "sha256:1b9362d34363f2c71b7853f6251219298124aa4cc2075ae2932e64c91a3e2717"},
    {file = "cryptography-37.0.2-pp38-pypy38_pp73-win_amd64.whl", hash = "sha256:e53258e69874a306fcecb88b7534d61820db8a98655662a3dd2ec7f1afd9132f"},
    {file = "cryptography-37.0.2-pp39-pypy39_pp73-macosx_10_10_x86_64.whl", hash = "sha256:1f3bfbd611db5cb58ca82f3deb35e83af34bb8cf06043fa61500157d50a70982"},
    {file = "cryptography-37.0.2-pp39-pypy39_pp73-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:419c57d7b63f5ec38b1199a9521d77d7d1754eb97827bbb773162073ccd8c8d4"},
    {file = "cryptography-37.0.2-pp39-pypy39_pp73-manylinux_2_24_x86_64.whl", hash = "sha256:dc26bb134452081859aa21d4990474ddb7e863aa39e60d1592800a8865a702de"},
    {file = "cryptography-37.0.2-pp39-pypy39_pp73-win_amd64.whl", hash = "sha256:3b8398b3d0efc420e777c40c16764d6870bcef2eb383df9c6dbb9ffe12c64452"},
    {file = "cryptography-37.0.2.tar.gz", hash = "sha256:f224ad253cc9cea7568f49077007d2263efa57396a2f2f78114066fd54b5c68e"},
]
deepdiff = [
    {file = "deepdiff-5.8.0-py3-none-any.whl", hash = "sha256:6b71714a6a5fb4cd6ab74c97f53303029118f96128082422342a9129a5f25c8f"},
    {file = "deepdiff-5.8.0.tar.gz", hash = "sha256:7e641c0cd6429c9e1b64a07b8f7713382a5626afe18c72bcafa8a4343c05c701"},
]
distlib = [
    {file = "distlib-0.3.4-py2.py3-none-any.whl", hash = "sha256:6564fe0a8f51e734df6333d08b8b94d4ea8ee6b99b5ed50613f731fd4089f34b"},
    {file = "distlib-0.3.4.zip", hash = "sha256:e4b58818180336dc9c529bfb9a0b58728ffc09ad92027a3f30b7cd91e3458579"},
]
dulwich = [
    {file = "dulwich-0.20.35-cp310-cp310-macosx_10_15_x86_64.whl", hash = "sha256:428b5fbb79f8cfba2f5ac6826cc813d1903b44b0780e9ec57e54cbd0f44feb61"},
    {file = "dulwich-0.20.35-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:581c6aa825c9267794747c5cc5ec3831960d96ca7fd9eb0158989e9a4099cbb1"},
    {file = "dulwich-0.20.35-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:e11cc7a30b42dbbe5a0b6ebbfbfbb07138a5ffd6175bab2ddbabc9882a1c0438"},
    {file = "dulwich-0.20.35-cp310-cp310-win_amd64.whl", hash = "sha256:22c61a24edb699564b49a9701b723a08fa773f5d3322e8a0cabda897ae86816e"},
    {file = "dulwich-0.20.35-cp36-cp36m-macosx_10_14_x86_64.whl", hash = "sha256:9759cf611503681bcdd2950c9d2db04d1c057ecbb62d6fccd095b13771864f1c"},
    {file = "dulwich-0.20.35-cp36-cp36m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:8d683b4f30b1dae6b1668336f62f10ff57ebf2a1252c7cc76ad3eeff973879eb"},
    {file = "dulwich-0.20.35-cp36-cp36m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:9d85b6b41c4be6df9ecdc4014d3cbe78a5a44a73c97bccbefac3e5de83bb74be"},
    {file = "dulwich-0.20.35-cp36-cp36m-win_amd64.whl", hash = "sha256:6dc9b082f6ace9890de572260a575a09a996d617f5930edd2858c6f8fedfd7fb"},
    {file = "dulwich-0.20.35-cp37-cp37m-macosx_10_14_x86_64.whl", hash = "sha256:28ac2374f09487b02a8cb9b2fad083c358fc927bcfe9803d971614bc00e25076"},
    {file = "dulwich-0.20.35-cp37-cp37m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:195b21c7a8f85cb2de8938d54fcc6d589d1ccbceaa63bb117796b531065bb68b"},
    {file = "dulwich-0.20.35-cp37-cp37m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:9bdea3a4e8e5e3b1dbd513d9ab8a692f8a9a6f4760633e25c006446bce56fc5e"},
    {file = "dulwich-0.20.35-cp37-cp37m-win_amd64.whl", hash = "sha256:3d3d07b5aa51e6b7d08707c62932da86adbbaaa62552a0129b37d413735c7786"},
    {file = "dulwich-0.20.35-cp38-cp38-macosx_10_14_x86_64.whl", hash = "sha256:5d94cd182fb0da4ec2f182be977b27b9cc1d7dbd0ee9bbf991e101a95fdcd3d8"},
    {file = "dulwich-0.20.35-cp38-cp38-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:f563e9f51e83c47a7df2f3cea79919f700e50d1e5556b6b753730b9cd2be1f47"},
    {file = "dulwich-0.20.35-cp38-cp38-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:f221c3c2fd10260419905bb673cd00129d491e3ed38c7a8d3ac2c7662682dd9b"},
    {file = "dulwich-0.20.35-cp38-cp38-win_amd64.whl", hash = "sha256:c4f4c59445dc5c2341e9cb2fe35e51a890e8a5f42178abec0a96044811c558a9"},
    {file = "dulwich-0.20.35-cp39-cp39-macosx_10_15_x86_64.whl", hash = "sha256:3616a949053eb6bdf34581f57d1f6cb7192a4bb635be1a02c37f6f6dda032277"},
    {file = "dulwich-0.20.35-cp39-cp39-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:134a2f586847c2c58569959a784d7a875b551df4226b639267302217799e4234"},
    {file = "dulwich-0.20.35-cp39-cp39-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:c008b6b562af76cf011d3b5450a0d30edc96feeee7856b081d7400bc7cf42653"},
    {file = "dulwich-0.20.35-cp39-cp39-win_amd64.whl", hash = "sha256:bf228800785754d7a55d52c5f122c26c3ced51f0f3df727fde2c9fefb71d5d76"},
    {file = "dulwich-0.20.35.tar.gz", hash = "sha256:953f6301a9df8a091fa88d55eed394a88bf9988cde8be341775354910918c196"},
]
entrypoints = [
    {file = "entrypoints-0.3-py2.py3-none-any.whl", hash = "sha256:589f874b313739ad35be6e0cd7efde2a4e9b6fea91edcc34e58ecbb8dbe56d19"},
    {file = "entrypoints-0.3.tar.gz", hash = "sha256:c70dd71abe5a8c85e55e12c19bd91ccfeec11a6e99044204511f9ed547d48451"},
]
filelock = [
    {file = "filelock-3.6.0-py3-none-any.whl", hash = "sha256:f8314284bfffbdcfa0ff3d7992b023d4c628ced6feb957351d4c48d059f56bc0"},
    {file = "filelock-3.6.0.tar.gz", hash = "sha256:9cd540a9352e432c7246a48fe4e8712b10acb1df2ad1f30e8c070b82ae1fed85"},
]
flatdict = [
    {file = "flatdict-4.0.1.tar.gz", hash = "sha256:cd32f08fd31ed21eb09ebc76f06b6bd12046a24f77beb1fd0281917e47f26742"},
]
html5lib = [
    {file = "html5lib-1.1-py2.py3-none-any.whl", hash = "sha256:0d78f8fde1c230e99fe37986a60526d7049ed4bf8a9fadbad5f00e22e58e041d"},
    {file = "html5lib-1.1.tar.gz", hash = "sha256:b2e5b40261e20f354d198eae92afc10d750afb487ed5e50f9c4eaf07c184146f"},
]
httpretty = [
    {file = "httpretty-1.1.4.tar.gz", hash = "sha256:20de0e5dd5a18292d36d928cc3d6e52f8b2ac73daec40d41eb62dee154933b68"},
]
identify = [
    {file = "identify-2.5.0-py2.py3-none-any.whl", hash = "sha256:3acfe15a96e4272b4ec5662ee3e231ceba976ef63fd9980ed2ce9cc415df393f"},
    {file = "identify-2.5.0.tar.gz", hash = "sha256:c83af514ea50bf2be2c4a3f2fb349442b59dc87284558ae9ff54191bff3541d2"},
]
idna = [
    {file = "idna-3.3-py3-none-any.whl", hash = "sha256:84d9dd047ffa80596e0f246e2eab0b391788b0503584e8945f2368256d2735ff"},
    {file = "idna-3.3.tar.gz", hash = "sha256:9d643ff0a55b762d5cdb124b8eaa99c66322e2157b69160bc32796e824360e6d"},
]
importlib-metadata = [
    {file = "importlib_metadata-4.11.3-py3-none-any.whl", hash = "sha256:1208431ca90a8cca1a6b8af391bb53c1a2db74e5d1cef6ddced95d4b2062edc6"},
    {file = "importlib_metadata-4.11.3.tar.gz", hash = "sha256:ea4c597ebf37142f827b8f39299579e31685c31d3a438b59f469406afd0f2539"},
]
iniconfig = [
    {file = "iniconfig-1.1.1-py2.py3-none-any.whl", hash = "sha256:011e24c64b7f47f6ebd835bb12a743f2fbe9a26d4cecaa7f53bc4f35ee9da8b3"},
    {file = "iniconfig-1.1.1.tar.gz", hash = "sha256:bc3af051d7d14b2ee5ef9969666def0cd1a000e121eaea580d4a313df4b37f32"},
]
jeepney = [
    {file = "jeepney-0.8.0-py3-none-any.whl", hash = "sha256:c0a454ad016ca575060802ee4d590dd912e35c122fa04e70306de3d076cce755"},
    {file = "jeepney-0.8.0.tar.gz", hash = "sha256:5efe48d255973902f6badc3ce55e2aa6c5c3b3bc642059ef3a91247bcfcc5806"},
]
keyring = [
    {file = "keyring-23.5.0-py3-none-any.whl", hash = "sha256:b0d28928ac3ec8e42ef4cc227822647a19f1d544f21f96457965dc01cf555261"},
    {file = "keyring-23.5.0.tar.gz", hash = "sha256:9012508e141a80bd1c0b6778d5c610dd9f8c464d75ac6774248500503f972fb9"},
]
lockfile = [
    {file = "lockfile-0.12.2-py2.py3-none-any.whl", hash = "sha256:6c3cb24f344923d30b2785d5ad75182c8ea7ac1b6171b08657258ec7429d50fa"},
    {file = "lockfile-0.12.2.tar.gz", hash = "sha256:6aed02de03cba24efabcd600b30540140634fc06cfa603822d508d5361e9f799"},
]
msgpack = [
    {file = "msgpack-1.0.3-cp310-cp310-macosx_10_9_universal2.whl", hash = "sha256:96acc674bb9c9be63fa8b6dabc3248fdc575c4adc005c440ad02f87ca7edd079"},
    {file = "msgpack-1.0.3-cp310-cp310-macosx_10_9_x86_64.whl", hash = "sha256:2c3ca57c96c8e69c1a0d2926a6acf2d9a522b41dc4253a8945c4c6cd4981a4e3"},
    {file = "msgpack-1.0.3-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:b0a792c091bac433dfe0a70ac17fc2087d4595ab835b47b89defc8bbabcf5c73"},
    {file = "msgpack-1.0.3-cp310-cp310-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:1c58cdec1cb5fcea8c2f1771d7b5fec79307d056874f746690bd2bdd609ab147"},
    {file = "msgpack-1.0.3-cp310-cp310-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:2f97c0f35b3b096a330bb4a1a9247d0bd7e1f3a2eba7ab69795501504b1c2c39"},
    {file = "msgpack-1.0.3-cp310-cp310-win32.whl", hash = "sha256:36a64a10b16c2ab31dcd5f32d9787ed41fe68ab23dd66957ca2826c7f10d0b85"},
    {file = "msgpack-1.0.3-cp310-cp310-win_amd64.whl", hash = "sha256:c1ba333b4024c17c7591f0f372e2daa3c31db495a9b2af3cf664aef3c14354f7"},
    {file = "msgpack-1.0.3-cp36-cp36m-macosx_10_9_x86_64.whl", hash = "sha256:c2140cf7a3ec475ef0938edb6eb363fa704159e0bf71dde15d953bacc1cf9d7d"},
    {file = "msgpack-1.0.3-cp36-cp36m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:6f4c22717c74d44bcd7af353024ce71c6b55346dad5e2cc1ddc17ce8c4507c6b"},
    {file = "msgpack-1.0.3-cp36-cp36m-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:47d733a15ade190540c703de209ffbc42a3367600421b62ac0c09fde594da6ec"},
    {file = "msgpack-1.0.3-cp36-cp36m-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:c7e03b06f2982aa98d4ddd082a210c3db200471da523f9ac197f2828e80e7770"},
    {file = "msgpack-1.0.3-cp36-cp36m-win32.whl", hash = "sha256:3d875631ecab42f65f9dce6f55ce6d736696ced240f2634633188de2f5f21af9"},
    {file = "msgpack-1.0.3-cp36-cp36m-win_amd64.whl", hash = "sha256:40fb89b4625d12d6027a19f4df18a4de5c64f6f3314325049f219683e07e678a"},
    {file = "msgpack-1.0.3-cp37-cp37m-macosx_10_9_x86_64.whl", hash = "sha256:6eef0cf8db3857b2b556213d97dd82de76e28a6524853a9beb3264983391dc1a"},
    {file = "msgpack-1.0.3-cp37-cp37m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:0d8c332f53ffff01953ad25131272506500b14750c1d0ce8614b17d098252fbc"},
    {file = "msgpack-1.0.3-cp37-cp37m-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:9c0903bd93cbd34653dd63bbfcb99d7539c372795201f39d16fdfde4418de43a"},
    {file = "msgpack-1.0.3-cp37-cp37m-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:bf1e6bfed4860d72106f4e0a1ab519546982b45689937b40257cfd820650b920"},
    {file = "msgpack-1.0.3-cp37-cp37m-win32.whl", hash = "sha256:d02cea2252abc3756b2ac31f781f7a98e89ff9759b2e7450a1c7a0d13302ff50"},
    {file = "msgpack-1.0.3-cp37-cp37m-win_amd64.whl", hash = "sha256:2f30dd0dc4dfe6231ad253b6f9f7128ac3202ae49edd3f10d311adc358772dba"},
    {file = "msgpack-1.0.3-cp38-cp38-macosx_10_9_universal2.whl", hash = "sha256:f201d34dc89342fabb2a10ed7c9a9aaaed9b7af0f16a5923f1ae562b31258dea"},
    {file = "msgpack-1.0.3-cp38-cp38-macosx_10_9_x86_64.whl", hash = "sha256:bb87f23ae7d14b7b3c21009c4b1705ec107cb21ee71975992f6aca571fb4a42a"},
    {file = "msgpack-1.0.3-cp38-cp38-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:8a3a5c4b16e9d0edb823fe54b59b5660cc8d4782d7bf2c214cb4b91a1940a8ef"},
    {file = "msgpack-1.0.3-cp38-cp38-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:f74da1e5fcf20ade12c6bf1baa17a2dc3604958922de8dc83cbe3eff22e8b611"},
    {file = "msgpack-1.0.3-cp38-cp38-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:73a80bd6eb6bcb338c1ec0da273f87420829c266379c8c82fa14c23fb586cfa1"},
    {file = "msgpack-1.0.3-cp38-cp38-win32.whl", hash = "sha256:9fce00156e79af37bb6db4e7587b30d11e7ac6a02cb5bac387f023808cd7d7f4"},
    {file = "msgpack-1.0.3-cp38-cp38-win_amd64.whl", hash = "sha256:9b6f2d714c506e79cbead331de9aae6837c8dd36190d02da74cb409b36162e8a"},
    {file = "msgpack-1.0.3-cp39-cp39-macosx_10_9_universal2.whl", hash = "sha256:89908aea5f46ee1474cc37fbc146677f8529ac99201bc2faf4ef8edc023c2bf3"},
    {file = "msgpack-1.0.3-cp39-cp39-macosx_10_9_x86_64.whl", hash = "sha256:973ad69fd7e31159eae8f580f3f707b718b61141838321c6fa4d891c4a2cca52"},
    {file = "msgpack-1.0.3-cp39-cp39-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:da24375ab4c50e5b7486c115a3198d207954fe10aaa5708f7b65105df09109b2"},
    {file = "msgpack-1.0.3-cp39-cp39-manylinux_2_17_x86_64.manylinux2014_x86_64.whl", hash = "sha256:a598d0685e4ae07a0672b59792d2cc767d09d7a7f39fd9bd37ff84e060b1a996"},
    {file = "msgpack-1.0.3-cp39-cp39-manylinux_2_5_i686.manylinux1_i686.manylinux_2_17_i686.manylinux2014_i686.whl", hash = "sha256:e4c309a68cb5d6bbd0c50d5c71a25ae81f268c2dc675c6f4ea8ab2feec2ac4e2"},
    {file = "msgpack-1.0.3-cp39-cp39-win32.whl", hash = "sha256:494471d65b25a8751d19c83f1a482fd411d7ca7a3b9e17d25980a74075ba0e88"},
    {file = "msgpack-1.0.3-cp39-cp39-win_amd64.whl", hash = "sha256:f01b26c2290cbd74316990ba84a14ac3d599af9cebefc543d241a66e785cf17d"},
    {file = "msgpack-1.0.3.tar.gz", hash = "sha256:51fdc7fb93615286428ee7758cecc2f374d5ff363bdd884c7ea622a7a327a81e"},
]
mypy = [
    {file = "mypy-0.950-cp310-cp310-macosx_10_9_universal2.whl", hash = "sha256:cf9c261958a769a3bd38c3e133801ebcd284ffb734ea12d01457cb09eacf7d7b"},
    {file = "mypy-0.950-cp310-cp310-macosx_10_9_x86_64.whl", hash = "sha256:b5b5bd0ffb11b4aba2bb6d31b8643902c48f990cc92fda4e21afac658044f0c0"},
    {file = "mypy-0.950-cp310-cp310-macosx_11_0_arm64.whl", hash = "sha256:5e7647df0f8fc947388e6251d728189cfadb3b1e558407f93254e35abc026e22"},
    {file = "mypy-0.950-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:eaff8156016487c1af5ffa5304c3e3fd183edcb412f3e9c72db349faf3f6e0eb"},
    {file = "mypy-0.950-cp310-cp310-win_amd64.whl", hash = "sha256:563514c7dc504698fb66bb1cf897657a173a496406f1866afae73ab5b3cdb334"},
    {file = "mypy-0.950-cp36-cp36m-macosx_10_9_x86_64.whl", hash = "sha256:dd4d670eee9610bf61c25c940e9ade2d0ed05eb44227275cce88701fee014b1f"},
    {file = "mypy-0.950-cp36-cp36m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:ca75ecf2783395ca3016a5e455cb322ba26b6d33b4b413fcdedfc632e67941dc"},
    {file = "mypy-0.950-cp36-cp36m-win_amd64.whl", hash = "sha256:6003de687c13196e8a1243a5e4bcce617d79b88f83ee6625437e335d89dfebe2"},
    {file = "mypy-0.950-cp37-cp37m-macosx_10_9_x86_64.whl", hash = "sha256:4c653e4846f287051599ed8f4b3c044b80e540e88feec76b11044ddc5612ffed"},
    {file = "mypy-0.950-cp37-cp37m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:e19736af56947addedce4674c0971e5dceef1b5ec7d667fe86bcd2b07f8f9075"},
    {file = "mypy-0.950-cp37-cp37m-win_amd64.whl", hash = "sha256:ef7beb2a3582eb7a9f37beaf38a28acfd801988cde688760aea9e6cc4832b10b"},
    {file = "mypy-0.950-cp38-cp38-macosx_10_9_universal2.whl", hash = "sha256:0112752a6ff07230f9ec2f71b0d3d4e088a910fdce454fdb6553e83ed0eced7d"},
    {file = "mypy-0.950-cp38-cp38-macosx_10_9_x86_64.whl", hash = "sha256:ee0a36edd332ed2c5208565ae6e3a7afc0eabb53f5327e281f2ef03a6bc7687a"},
    {file = "mypy-0.950-cp38-cp38-macosx_11_0_arm64.whl", hash = "sha256:77423570c04aca807508a492037abbd72b12a1fb25a385847d191cd50b2c9605"},
    {file = "mypy-0.950-cp38-cp38-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:5ce6a09042b6da16d773d2110e44f169683d8cc8687e79ec6d1181a72cb028d2"},
    {file = "mypy-0.950-cp38-cp38-win_amd64.whl", hash = "sha256:5b231afd6a6e951381b9ef09a1223b1feabe13625388db48a8690f8daa9b71ff"},
    {file = "mypy-0.950-cp39-cp39-macosx_10_9_universal2.whl", hash = "sha256:0384d9f3af49837baa92f559d3fa673e6d2652a16550a9ee07fc08c736f5e6f8"},
    {file = "mypy-0.950-cp39-cp39-macosx_10_9_x86_64.whl", hash = "sha256:1fdeb0a0f64f2a874a4c1f5271f06e40e1e9779bf55f9567f149466fc7a55038"},
    {file = "mypy-0.950-cp39-cp39-macosx_11_0_arm64.whl", hash = "sha256:61504b9a5ae166ba5ecfed9e93357fd51aa693d3d434b582a925338a2ff57fd2"},
    {file = "mypy-0.950-cp39-cp39-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:a952b8bc0ae278fc6316e6384f67bb9a396eb30aced6ad034d3a76120ebcc519"},
    {file = "mypy-0.950-cp39-cp39-win_amd64.whl", hash = "sha256:eaea21d150fb26d7b4856766e7addcf929119dd19fc832b22e71d942835201ef"},
    {file = "mypy-0.950-py3-none-any.whl", hash = "sha256:a4d9898f46446bfb6405383b57b96737dcfd0a7f25b748e78ef3e8c576bba3cb"},
    {file = "mypy-0.950.tar.gz", hash = "sha256:1b333cfbca1762ff15808a0ef4f71b5d3eed8528b23ea1c3fb50543c867d68de"},
]
mypy-extensions = [
    {file = "mypy_extensions-0.4.3-py2.py3-none-any.whl", hash = "sha256:090fedd75945a69ae91ce1303b5824f428daf5a028d2f6ab8a299250a846f15d"},
    {file = "mypy_extensions-0.4.3.tar.gz", hash = "sha256:2d82818f5bb3e369420cb3c4060a7970edba416647068eb4c5343488a6c604a8"},
]
nodeenv = [
    {file = "nodeenv-1.6.0-py2.py3-none-any.whl", hash = "sha256:621e6b7076565ddcacd2db0294c0381e01fd28945ab36bcf00f41c5daf63bef7"},
    {file = "nodeenv-1.6.0.tar.gz", hash = "sha256:3ef13ff90291ba2a4a7a4ff9a979b63ffdd00a464dbe04acf0ea6471517a4c2b"},
]
ordered-set = [
    {file = "ordered-set-4.1.0.tar.gz", hash = "sha256:694a8e44c87657c59292ede72891eb91d34131f6531463aab3009191c77364a8"},
    {file = "ordered_set-4.1.0-py3-none-any.whl", hash = "sha256:046e1132c71fcf3330438a539928932caf51ddbc582496833e23de611de14562"},
]
packaging = [
    {file = "packaging-21.3-py3-none-any.whl", hash = "sha256:ef103e05f519cdc783ae24ea4e2e0f508a9c99b2d4969652eed6a2e1ea5bd522"},
    {file = "packaging-21.3.tar.gz", hash = "sha256:dd47c42927d89ab911e606518907cc2d3a1f38bbd026385970643f9c5b8ecfeb"},
]
pexpect = [
    {file = "pexpect-4.8.0-py2.py3-none-any.whl", hash = "sha256:0b48a55dcb3c05f3329815901ea4fc1537514d6ba867a152b581d69ae3710937"},
    {file = "pexpect-4.8.0.tar.gz", hash = "sha256:fc65a43959d153d0114afe13997d439c22823a27cefceb5ff35c2178c6784c0c"},
]
pkginfo = [
    {file = "pkginfo-1.8.2-py2.py3-none-any.whl", hash = "sha256:c24c487c6a7f72c66e816ab1796b96ac6c3d14d49338293d2141664330b55ffc"},
    {file = "pkginfo-1.8.2.tar.gz", hash = "sha256:542e0d0b6750e2e21c20179803e40ab50598d8066d51097a0e382cba9eb02bff"},
]
platformdirs = [
    {file = "platformdirs-2.5.2-py3-none-any.whl", hash = "sha256:027d8e83a2d7de06bbac4e5ef7e023c02b863d7ea5d079477e722bb41ab25788"},
    {file = "platformdirs-2.5.2.tar.gz", hash = "sha256:58c8abb07dcb441e6ee4b11d8df0ac856038f944ab98b7be6b27b2a3c7feef19"},
]
pluggy = [
    {file = "pluggy-1.0.0-py2.py3-none-any.whl", hash = "sha256:74134bbf457f031a36d68416e1509f34bd5ccc019f0bcc952c7b909d06b37bd3"},
    {file = "pluggy-1.0.0.tar.gz", hash = "sha256:4224373bacce55f955a878bf9cfa763c1e360858e330072059e10bad68531159"},
]
poetry-core = [
    {file = "poetry-core-1.1.0a7.tar.gz", hash = "sha256:4622ae680842ac9b1b9c3b0e8dc467c2e291d1a5c434b6bd413907a2e5571d92"},
    {file = "poetry_core-1.1.0a7-py3-none-any.whl", hash = "sha256:724e8b5368f270461e622396305d0c2e760ec9d4c14d072e6b944da9384c67de"},
]
poetry-plugin-export = [
    {file = "poetry-plugin-export-1.0.2.tar.gz", hash = "sha256:4b4edcfa3656c11e5529a8f365f084933402cf7f9306163fdfe44e6735d7cf16"},
    {file = "poetry_plugin_export-1.0.2-py3-none-any.whl", hash = "sha256:f27209ee3c162757bc08a6d0f534f4bdf8d737e966aa07d84e0058c8ab3ed66e"},
]
pre-commit = [
    {file = "pre_commit-2.19.0-py2.py3-none-any.whl", hash = "sha256:10c62741aa5704faea2ad69cb550ca78082efe5697d6f04e5710c3c229afdd10"},
    {file = "pre_commit-2.19.0.tar.gz", hash = "sha256:4233a1e38621c87d9dda9808c6606d7e7ba0e087cd56d3fe03202a01d2919615"},
]
ptyprocess = [
    {file = "ptyprocess-0.7.0-py2.py3-none-any.whl", hash = "sha256:4b41f3967fce3af57cc7e94b888626c18bf37a083e3651ca8feeb66d492fef35"},
    {file = "ptyprocess-0.7.0.tar.gz", hash = "sha256:5c5d0a3b48ceee0b48485e0c26037c0acd7d29765ca3fbb5cb3831d347423220"},
]
py = [
    {file = "py-1.11.0-py2.py3-none-any.whl", hash = "sha256:607c53218732647dff4acdfcd50cb62615cedf612e72d1724fb1a0cc6405b378"},
    {file = "py-1.11.0.tar.gz", hash = "sha256:51c75c4126074b472f746a24399ad32f6053d1b34b68d2fa41e558e6f4a98719"},
]
pycparser = [
    {file = "pycparser-2.21-py2.py3-none-any.whl", hash = "sha256:8ee45429555515e1f6b185e78100aea234072576aa43ab53aefcae078162fca9"},
    {file = "pycparser-2.21.tar.gz", hash = "sha256:e644fdec12f7872f86c58ff790da456218b10f863970249516d60a5eaca77206"},
]
pylev = [
    {file = "pylev-1.4.0-py2.py3-none-any.whl", hash = "sha256:7b2e2aa7b00e05bb3f7650eb506fc89f474f70493271a35c242d9a92188ad3dd"},
    {file = "pylev-1.4.0.tar.gz", hash = "sha256:9e77e941042ad3a4cc305dcdf2b2dec1aec2fbe3dd9015d2698ad02b173006d1"},
]
pyparsing = [
    {file = "pyparsing-3.0.8-py3-none-any.whl", hash = "sha256:ef7b523f6356f763771559412c0d7134753f037822dad1b16945b7b846f7ad06"},
    {file = "pyparsing-3.0.8.tar.gz", hash = "sha256:7bf433498c016c4314268d95df76c81b842a4cb2b276fa3312cfb1e1d85f6954"},
]
pytest = [
    {file = "pytest-6.2.5-py3-none-any.whl", hash = "sha256:7310f8d27bc79ced999e760ca304d69f6ba6c6649c0b60fb0e04a4a77cacc134"},
    {file = "pytest-6.2.5.tar.gz", hash = "sha256:131b36680866a76e6781d13f101efb86cf674ebb9762eb70d3082b6f29889e89"},
]
pytest-cov = [
    {file = "pytest-cov-2.12.1.tar.gz", hash = "sha256:261ceeb8c227b726249b376b8526b600f38667ee314f910353fa318caa01f4d7"},
    {file = "pytest_cov-2.12.1-py2.py3-none-any.whl", hash = "sha256:261bb9e47e65bd099c89c3edf92972865210c36813f80ede5277dceb77a4a62a"},
]
pytest-mock = [
    {file = "pytest-mock-3.7.0.tar.gz", hash = "sha256:5112bd92cc9f186ee96e1a92efc84969ea494939c3aead39c50f421c4cc69534"},
    {file = "pytest_mock-3.7.0-py3-none-any.whl", hash = "sha256:6cff27cec936bf81dc5ee87f07132b807bcda51106b5ec4b90a04331cba76231"},
]
pytest-sugar = [
    {file = "pytest-sugar-0.9.4.tar.gz", hash = "sha256:b1b2186b0a72aada6859bea2a5764145e3aaa2c1cfbb23c3a19b5f7b697563d3"},
]
pywin32-ctypes = [
    {file = "pywin32-ctypes-0.2.0.tar.gz", hash = "sha256:24ffc3b341d457d48e8922352130cf2644024a4ff09762a2261fd34c36ee5942"},
    {file = "pywin32_ctypes-0.2.0-py2.py3-none-any.whl", hash = "sha256:9dc2d991b3479cc2df15930958b674a48a227d5361d413827a4cfd0b5876fc98"},
]
pyyaml = [
    {file = "PyYAML-6.0-cp310-cp310-macosx_10_9_x86_64.whl", hash = "sha256:d4db7c7aef085872ef65a8fd7d6d09a14ae91f691dec3e87ee5ee0539d516f53"},
    {file = "PyYAML-6.0-cp310-cp310-macosx_11_0_arm64.whl", hash = "sha256:9df7ed3b3d2e0ecfe09e14741b857df43adb5a3ddadc919a2d94fbdf78fea53c"},
    {file = "PyYAML-6.0-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:77f396e6ef4c73fdc33a9157446466f1cff553d979bd00ecb64385760c6babdc"},
    {file = "PyYAML-6.0-cp310-cp310-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:a80a78046a72361de73f8f395f1f1e49f956c6be882eed58505a15f3e430962b"},
    {file = "PyYAML-6.0-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:f84fbc98b019fef2ee9a1cb3ce93e3187a6df0b2538a651bfb890254ba9f90b5"},
    {file = "PyYAML-6.0-cp310-cp310-win32.whl", hash = "sha256:2cd5df3de48857ed0544b34e2d40e9fac445930039f3cfe4bcc592a1f836d513"},
    {file = "PyYAML-6.0-cp310-cp310-win_amd64.whl", hash = "sha256:daf496c58a8c52083df09b80c860005194014c3698698d1a57cbcfa182142a3a"},
    {file = "PyYAML-6.0-cp36-cp36m-macosx_10_9_x86_64.whl", hash = "sha256:897b80890765f037df3403d22bab41627ca8811ae55e9a722fd0392850ec4d86"},
    {file = "PyYAML-6.0-cp36-cp36m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:50602afada6d6cbfad699b0c7bb50d5ccffa7e46a3d738092afddc1f9758427f"},
    {file = "PyYAML-6.0-cp36-cp36m-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:48c346915c114f5fdb3ead70312bd042a953a8ce5c7106d5bfb1a5254e47da92"},
    {file = "PyYAML-6.0-cp36-cp36m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:98c4d36e99714e55cfbaaee6dd5badbc9a1ec339ebfc3b1f52e293aee6bb71a4"},
    {file = "PyYAML-6.0-cp36-cp36m-win32.whl", hash = "sha256:0283c35a6a9fbf047493e3a0ce8d79ef5030852c51e9d911a27badfde0605293"},
    {file = "PyYAML-6.0-cp36-cp36m-win_amd64.whl", hash = "sha256:07751360502caac1c067a8132d150cf3d61339af5691fe9e87803040dbc5db57"},
    {file = "PyYAML-6.0-cp37-cp37m-macosx_10_9_x86_64.whl", hash = "sha256:819b3830a1543db06c4d4b865e70ded25be52a2e0631ccd2f6a47a2822f2fd7c"},
    {file = "PyYAML-6.0-cp37-cp37m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:473f9edb243cb1935ab5a084eb238d842fb8f404ed2193a915d1784b5a6b5fc0"},
    {file = "PyYAML-6.0-cp37-cp37m-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:0ce82d761c532fe4ec3f87fc45688bdd3a4c1dc5e0b4a19814b9009a29baefd4"},
    {file = "PyYAML-6.0-cp37-cp37m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:231710d57adfd809ef5d34183b8ed1eeae3f76459c18fb4a0b373ad56bedcdd9"},
    {file = "PyYAML-6.0-cp37-cp37m-win32.whl", hash = "sha256:c5687b8d43cf58545ade1fe3e055f70eac7a5a1a0bf42824308d868289a95737"},
    {file = "PyYAML-6.0-cp37-cp37m-win_amd64.whl", hash = "sha256:d15a181d1ecd0d4270dc32edb46f7cb7733c7c508857278d3d378d14d606db2d"},
    {file = "PyYAML-6.0-cp38-cp38-macosx_10_9_x86_64.whl", hash = "sha256:0b4624f379dab24d3725ffde76559cff63d9ec94e1736b556dacdfebe5ab6d4b"},
    {file = "PyYAML-6.0-cp38-cp38-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:213c60cd50106436cc818accf5baa1aba61c0189ff610f64f4a3e8c6726218ba"},
    {file = "PyYAML-6.0-cp38-cp38-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:9fa600030013c4de8165339db93d182b9431076eb98eb40ee068700c9c813e34"},
    {file = "PyYAML-6.0-cp38-cp38-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:277a0ef2981ca40581a47093e9e2d13b3f1fbbeffae064c1d21bfceba2030287"},
    {file = "PyYAML-6.0-cp38-cp38-win32.whl", hash = "sha256:d4eccecf9adf6fbcc6861a38015c2a64f38b9d94838ac1810a9023a0609e1b78"},
    {file = "PyYAML-6.0-cp38-cp38-win_amd64.whl", hash = "sha256:1e4747bc279b4f613a09eb64bba2ba602d8a6664c6ce6396a4d0cd413a50ce07"},
    {file = "PyYAML-6.0-cp39-cp39-macosx_10_9_x86_64.whl", hash = "sha256:055d937d65826939cb044fc8c9b08889e8c743fdc6a32b33e2390f66013e449b"},
    {file = "PyYAML-6.0-cp39-cp39-macosx_11_0_arm64.whl", hash = "sha256:e61ceaab6f49fb8bdfaa0f92c4b57bcfbea54c09277b1b4f7ac376bfb7a7c174"},
    {file = "PyYAML-6.0-cp39-cp39-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:d67d839ede4ed1b28a4e8909735fc992a923cdb84e618544973d7dfc71540803"},
    {file = "PyYAML-6.0-cp39-cp39-manylinux_2_17_s390x.manylinux2014_s390x.whl", hash = "sha256:cba8c411ef271aa037d7357a2bc8f9ee8b58b9965831d9e51baf703280dc73d3"},
    {file = "PyYAML-6.0-cp39-cp39-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:40527857252b61eacd1d9af500c3337ba8deb8fc298940291486c465c8b46ec0"},
    {file = "PyYAML-6.0-cp39-cp39-win32.whl", hash = "sha256:b5b9eccad747aabaaffbc6064800670f0c297e52c12754eb1d976c57e4f74dcb"},
    {file = "PyYAML-6.0-cp39-cp39-win_amd64.whl", hash = "sha256:b3d267842bf12586ba6c734f89d1f5b871df0273157918b0ccefa29deb05c21c"},
    {file = "PyYAML-6.0.tar.gz", hash = "sha256:68fb519c14306fec9720a2a5b45bc9f0c8d1b9c72adf45c37baedfcd949c35a2"},
]
requests = [
    {file = "requests-2.27.1-py2.py3-none-any.whl", hash = "sha256:f22fa1e554c9ddfd16e6e41ac79759e17be9e492b3587efa038054674760e72d"},
    {file = "requests-2.27.1.tar.gz", hash = "sha256:68d7c56fd5a8999887728ef304a6d12edc7be74f1cfa47714fc8b414525c9a61"},
]
requests-toolbelt = [
    {file = "requests-toolbelt-0.9.1.tar.gz", hash = "sha256:968089d4584ad4ad7c171454f0a5c6dac23971e9472521ea3b6d49d610aa6fc0"},
    {file = "requests_toolbelt-0.9.1-py2.py3-none-any.whl", hash = "sha256:380606e1d10dc85c3bd47bf5a6095f815ec007be7a8b69c878507068df059e6f"},
]
secretstorage = [
    {file = "SecretStorage-3.3.2-py3-none-any.whl", hash = "sha256:755dc845b6ad76dcbcbc07ea3da75ae54bb1ea529eb72d15f83d26499a5df319"},
    {file = "SecretStorage-3.3.2.tar.gz", hash = "sha256:0a8eb9645b320881c222e827c26f4cfcf55363e8b374a021981ef886657a912f"},
]
shellingham = [
    {file = "shellingham-1.4.0-py2.py3-none-any.whl", hash = "sha256:536b67a0697f2e4af32ab176c00a50ac2899c5a05e0d8e2dadac8e58888283f9"},
    {file = "shellingham-1.4.0.tar.gz", hash = "sha256:4855c2458d6904829bd34c299f11fdeed7cfefbf8a2c522e4caea6cd76b3171e"},
]
six = [
    {file = "six-1.16.0-py2.py3-none-any.whl", hash = "sha256:8abb2f1d86890a2dfb989f9a77cfcfd3e47c2a354b01111771326f8aa26e0254"},
    {file = "six-1.16.0.tar.gz", hash = "sha256:1e61c37477a1626458e36f7b1d82aa5c9b094fa4802892072e49de9c60c4c926"},
]
termcolor = [
    {file = "termcolor-1.1.0.tar.gz", hash = "sha256:1d6d69ce66211143803fbc56652b41d73b4a400a2891d7bf7a1cdf4c02de613b"},
]
toml = [
    {file = "toml-0.10.2-py2.py3-none-any.whl", hash = "sha256:806143ae5bfb6a3c6e736a764057db0e6a0e05e338b5630894a5f779cabb4f9b"},
    {file = "toml-0.10.2.tar.gz", hash = "sha256:b3bda1d108d5dd99f4a20d24d9c348e91c4db7ab1b749200bded2f839ccbe68f"},
]
tomli = [
    {file = "tomli-2.0.1-py3-none-any.whl", hash = "sha256:939de3e7a6161af0c887ef91b7d41a53e7c5a1ca976325f429cb46ea9bc30ecc"},
    {file = "tomli-2.0.1.tar.gz", hash = "sha256:de526c12914f0c550d15924c62d72abc48d6fe7364aa87328337a31007fe8a4f"},
]
tomlkit = [
    {file = "tomlkit-0.10.2-py3-none-any.whl", hash = "sha256:905cf92c2111ef80d355708f47ac24ad1b6fc2adc5107455940088c9bbecaedb"},
    {file = "tomlkit-0.10.2.tar.gz", hash = "sha256:30d54c0b914e595f3d10a87888599eab5321a2a69abc773bbefff51599b72db6"},
]
tox = [
    {file = "tox-3.25.0-py2.py3-none-any.whl", hash = "sha256:0805727eb4d6b049de304977dfc9ce315a1938e6619c3ab9f38682bb04662a5a"},
    {file = "tox-3.25.0.tar.gz", hash = "sha256:37888f3092aa4e9f835fc8cc6dadbaaa0782651c41ef359e3a5743fcb0308160"},
]
typed-ast = [
    {file = "typed_ast-1.5.3-cp310-cp310-macosx_10_9_x86_64.whl", hash = "sha256:9ad3b48cf2b487be140072fb86feff36801487d4abb7382bb1929aaac80638ea"},
    {file = "typed_ast-1.5.3-cp310-cp310-macosx_11_0_arm64.whl", hash = "sha256:542cd732351ba8235f20faa0fc7398946fe1a57f2cdb289e5497e1e7f48cfedb"},
    {file = "typed_ast-1.5.3-cp310-cp310-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:5dc2c11ae59003d4a26dda637222d9ae924387f96acae9492df663843aefad55"},
    {file = "typed_ast-1.5.3-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:fd5df1313915dbd70eaaa88c19030b441742e8b05e6103c631c83b75e0435ccc"},
    {file = "typed_ast-1.5.3-cp310-cp310-win_amd64.whl", hash = "sha256:e34f9b9e61333ecb0f7d79c21c28aa5cd63bec15cb7e1310d7d3da6ce886bc9b"},
    {file = "typed_ast-1.5.3-cp36-cp36m-macosx_10_9_x86_64.whl", hash = "sha256:f818c5b81966d4728fec14caa338e30a70dfc3da577984d38f97816c4b3071ec"},
    {file = "typed_ast-1.5.3-cp36-cp36m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:3042bfc9ca118712c9809201f55355479cfcdc17449f9f8db5e744e9625c6805"},
    {file = "typed_ast-1.5.3-cp36-cp36m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:4fff9fdcce59dc61ec1b317bdb319f8f4e6b69ebbe61193ae0a60c5f9333dc49"},
    {file = "typed_ast-1.5.3-cp36-cp36m-win_amd64.whl", hash = "sha256:8e0b8528838ffd426fea8d18bde4c73bcb4167218998cc8b9ee0a0f2bfe678a6"},
    {file = "typed_ast-1.5.3-cp37-cp37m-macosx_10_9_x86_64.whl", hash = "sha256:8ef1d96ad05a291f5c36895d86d1375c0ee70595b90f6bb5f5fdbee749b146db"},
    {file = "typed_ast-1.5.3-cp37-cp37m-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:ed44e81517364cb5ba367e4f68fca01fba42a7a4690d40c07886586ac267d9b9"},
    {file = "typed_ast-1.5.3-cp37-cp37m-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:f60d9de0d087454c91b3999a296d0c4558c1666771e3460621875021bf899af9"},
    {file = "typed_ast-1.5.3-cp37-cp37m-win_amd64.whl", hash = "sha256:9e237e74fd321a55c90eee9bc5d44be976979ad38a29bbd734148295c1ce7617"},
    {file = "typed_ast-1.5.3-cp38-cp38-macosx_10_9_x86_64.whl", hash = "sha256:ee852185964744987609b40aee1d2eb81502ae63ee8eef614558f96a56c1902d"},
    {file = "typed_ast-1.5.3-cp38-cp38-macosx_11_0_arm64.whl", hash = "sha256:27e46cdd01d6c3a0dd8f728b6a938a6751f7bd324817501c15fb056307f918c6"},
    {file = "typed_ast-1.5.3-cp38-cp38-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:d64dabc6336ddc10373922a146fa2256043b3b43e61f28961caec2a5207c56d5"},
    {file = "typed_ast-1.5.3-cp38-cp38-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:8cdf91b0c466a6c43f36c1964772918a2c04cfa83df8001ff32a89e357f8eb06"},
    {file = "typed_ast-1.5.3-cp38-cp38-win_amd64.whl", hash = "sha256:9cc9e1457e1feb06b075c8ef8aeb046a28ec351b1958b42c7c31c989c841403a"},
    {file = "typed_ast-1.5.3-cp39-cp39-macosx_10_9_x86_64.whl", hash = "sha256:e20d196815eeffb3d76b75223e8ffed124e65ee62097e4e73afb5fec6b993e7a"},
    {file = "typed_ast-1.5.3-cp39-cp39-macosx_11_0_arm64.whl", hash = "sha256:37e5349d1d5de2f4763d534ccb26809d1c24b180a477659a12c4bde9dd677d74"},
    {file = "typed_ast-1.5.3-cp39-cp39-manylinux_2_17_aarch64.manylinux2014_aarch64.whl", hash = "sha256:c9f1a27592fac87daa4e3f16538713d705599b0a27dfe25518b80b6b017f0a6d"},
    {file = "typed_ast-1.5.3-cp39-cp39-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_12_x86_64.manylinux2010_x86_64.whl", hash = "sha256:8831479695eadc8b5ffed06fdfb3e424adc37962a75925668deeb503f446c0a3"},
    {file = "typed_ast-1.5.3-cp39-cp39-win_amd64.whl", hash = "sha256:20d5118e494478ef2d3a2702d964dae830aedd7b4d3b626d003eea526be18718"},
    {file = "typed_ast-1.5.3.tar.gz", hash = "sha256:27f25232e2dd0edfe1f019d6bfaaf11e86e657d9bdb7b0956db95f560cceb2b3"},
]
types-requests = [
    {file = "types-requests-2.27.25.tar.gz", hash = "sha256:805ae7e38fd9d157153066dc4381cf585fd34dfa212f2fc1fece248c05aac571"},
    {file = "types_requests-2.27.25-py3-none-any.whl", hash = "sha256:2444905c89731dbcb6bbcd6d873a04252445df7623917c640e463b2b28d2a708"},
]
types-urllib3 = [
    {file = "types-urllib3-1.26.14.tar.gz", hash = "sha256:2a2578e4b36341ccd240b00fccda9826988ff0589a44ba4a664bbd69ef348d27"},
    {file = "types_urllib3-1.26.14-py3-none-any.whl", hash = "sha256:5d2388aa76395b1e3999ff789ea5b3283677dad8e9bcf3d9117ba19271fd35d9"},
]
typing-extensions = [
    {file = "typing_extensions-4.2.0-py3-none-any.whl", hash = "sha256:6657594ee297170d19f67d55c05852a874e7eb634f4f753dbd667855e07c1708"},
    {file = "typing_extensions-4.2.0.tar.gz", hash = "sha256:f1c24655a0da0d1b67f07e17a5e6b2a105894e6824b92096378bb3668ef02376"},
]
urllib3 = [
    {file = "urllib3-1.26.9-py2.py3-none-any.whl", hash = "sha256:44ece4d53fb1706f667c9bd1c648f5469a2ec925fcf3a776667042d645472c14"},
    {file = "urllib3-1.26.9.tar.gz", hash = "sha256:aabaf16477806a5e1dd19aa41f8c2b7950dd3c746362d7e3223dbe6de6ac448e"},
]
virtualenv = [
    {file = "virtualenv-20.14.1-py2.py3-none-any.whl", hash = "sha256:e617f16e25b42eb4f6e74096b9c9e37713cf10bf30168fb4a739f3fa8f898a3a"},
    {file = "virtualenv-20.14.1.tar.gz", hash = "sha256:ef589a79795589aada0c1c5b319486797c03b67ac3984c48c669c0e4f50df3a5"},
]
webencodings = [
    {file = "webencodings-0.5.1-py2.py3-none-any.whl", hash = "sha256:a0af1213f3c2226497a97e2b3aa01a7e4bee4f403f95be16fc9acd2947514a78"},
    {file = "webencodings-0.5.1.tar.gz", hash = "sha256:b36a1c245f2d304965eb4e0a82848379241dc04b865afcc4aab16748587e1923"},
]
zipp = [
    {file = "zipp-3.8.0-py3-none-any.whl", hash = "sha256:c4f6e5bbf48e74f7a38e7cc5b0480ff42b0ae5178957d564d18932525d5cf099"},
    {file = "zipp-3.8.0.tar.gz", hash = "sha256:56bf8aadb83c24db6c4b577e13de374ccfb67da2078beba1d037c17980bf43ad"},
]
`;


外链999!wailian999！

[S45] C++：lambda
来源：http://www.sxryk.cn/163mgxrtdqu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163mftjttwo.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xadbknvg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ozglwyia.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163amsveeuc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ikuscebg.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163qjpwicla.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163uvhepxeg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163oqknsnil.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163qkbgehdk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163oginityv.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163herwhnyj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163msxqtwou.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163cedjimbl.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163zhkqiipv.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163glkivroo.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163exrsgpru.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163attaxnmd.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163mwdmbwyd.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tgrywlsg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kwbleiah.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163lkkdmujk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mjxqnonz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163whkntmyp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163wrbfoejq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163tzvypaxk.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163nuuwhqcl.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ackxdgcc.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163slciatuh.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163llryscgj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163gkoogrjz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vpfufwmd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dawmslac.html

================================================================================
来源：http://www.aibaodan.cn/163eyzqoaak.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pnxtifkc.html

================================================================================
来源：http://www.xuanzx.com/163xvkticas.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163jpfuogkd.html

println("Hello")
来源：http://www.xuanzx.com/163wybkvppv.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lsvhagfb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163hgbtlpan.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163amuvxdgm.html

"值: $b"
来源：http://www.aibaodan.cn/163qstknkzr.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qiocorvf.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ftmkbmjq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163jsqqitvl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163kaojuinx.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163iljygwzz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163diarjpwn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163scgkvcwr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ubdspxqv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163htmpibxv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163fpneqwul.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xlaqkkfn.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163guqrusaq.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163stdpglkg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163dqzzwgcb.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163eqpscswx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163jdocjowl.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ixpufoxa.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163sxbfjkih.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ygcvjpgw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rsmyoeaj.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ejkllrpt.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ehejyxhw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163jftsepgo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xticukdr.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163hdzmhqcb.html

print("Hello")
来源：http://www.xuanzx.com/163shnhadkd.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163zeuztvdp.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163klaqrtfs.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163nqwfthqw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dpdgpvyb.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ftddmfpa.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kaupibtt.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163dmfjwyin.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vzybzkfq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163svpmyvyl.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163yvupibmj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163fxqzcqcy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163qofckxdu.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163udhwbtbe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163mpnpncue.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163dlwsbtqk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ljqaojfu.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163pudanhoj.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163eonalbsq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hoaponhy.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163osovpwlv.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163tpggyofv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xekdxxco.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dxoeqsum.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163dylywtfe.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163xzplypwk.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163abajltkj.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rqdythsz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163fioxfzrx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wcckehfj.html

print("Hello")
来源：http://www.aibaodan.cn/163vtrdgkqg.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163cmpzmmrl.html

local a = 1
来源：http://www.aibaodan.cn/163vmdbekuq.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163llfbghej.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163kwavdoau.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163geowymkm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163jgmlzgkf.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163rwewvdpi.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qetgaink.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163dneqhmdg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163pzyltmec.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163vfybqskv.html

"a" .. "b"
来源：http://www.sxryk.cn/163ixivigmv.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163gqnajckx.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163spvtvytq.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163sfajelrp.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163thziyiaa.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163bumklele.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163zofqziut.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163coqyesmm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bdnneoty.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163badrgshz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163bujrqprx.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qceiiwlw.html

"值: $a"
来源：http://www.xuanzx.com/163jeytsfep.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163yztwcrgo.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163drkdtrrt.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163detkysaw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163xwdhcjzi.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163jaxqpksy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163dmifmwwb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163mbnginmf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163lwbtngxs.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163hyzoqxgw.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163nzwkjluq.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hlwioyfl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163hdgpfhse.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xuzvmeoc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dafmhxmc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163soxkxnbi.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ujxcsqzu.html

println("Hello")
来源：http://www.aibaodan.cn/163eqhyojks.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ljfxfydd.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zjtaqmfp.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ychdhyop.html

s"值: $b"
来源：http://www.aibaodan.cn/163tugnkzed.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gdkiblok.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163zpvawvfg.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163iuhhekij.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163oubrrngm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163mvhrurxr.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163bdkxbgeg.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163fmgorcdz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163hzrzlhea.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163ybvryrnm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163nefuxjeg.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vgwccipg.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163uzandjqk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163xsmqlght.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ylhqcvlp.html

================================================================================
来源：http://www.aibaodan.cn/163wtscyyke.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lqjkpoik.html

================================================================================
来源：http://www.sxryk.cn/163bxuuslge.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ikafwkae.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163sorimvlq.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163rsnzsffm.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163mfmmgijz.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163fftppueb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nvldmbnk.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163cbrehyfv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163gceshrpt.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163daeqkjjm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163avzfhjho.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163oidahpkg.html

{**a, **b}
来源：http://www.xuanzx.com/163frtpnpxm.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163uugjuxam.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163nnhxxjyb.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163keolnowz.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vucskesi.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163nglbkshs.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163crrtngab.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163fsohyshp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163yskzbtpn.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163wouainqs.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qgikbhxi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163pidmbxpt.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163obbfwrsf.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163mtekljnz.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163cueaqlph.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163guwzrrhi.html

defaultdict(list)
来源：http://www.xuanzx.com/163ixkqiujh.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xtrdgfhd.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163tulurbsf.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ocntuuji.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rnkzmhht.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163vcatfkvf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163spifbrxo.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163wqgnnlym.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163pyvrrpvl.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163vinlemnl.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163zrzgczuy.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163jsewvtkk.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163frqwlbao.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qsmwddkx.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163klvfmafx.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163suiywvod.html

list(zip(*m))
来源：http://www.aibaodan.cn/163ngbozaay.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lufwxjli.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163nyzngcnx.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163zcuxfisg.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163fweevtzp.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163wedomlml.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163vddjgqeu.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163wbctrizu.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163fcueadmx.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163fiqaypae.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163mdwsrikg.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163kbbzlkpd.html

UserId = int
来源：http://www.aibaodan.cn/163hyqdvtwd.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163txhfvqnq.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163unfsybtu.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163llzyyqsh.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163cbhyirgb.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163qlqbytgl.html

python -m pytest -q
来源：http://www.sxryk.cn/163gihyexmo.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163etyoizph.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163tzivlvgx.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163humniaya.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163ykdjuytb.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163eninxljr.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163rigkxncz.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163fuitnuwt.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163zxczvkuf.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163ceasezno.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163dukfpuut.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163aeoffopu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163abpvjsmt.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163slepeons.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xqnvoxft.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163cbisubkl.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163galhmzsx.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163erxxship.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163kkrocpah.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163gwxlphvk.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ftzwgjwi.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xldvnhws.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163tfukbcct.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163elwdfpxl.html

namespace App\Http;
来源：http://www.sxryk.cn/163mteetoul.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163kisfrhlq.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ongqgsdk.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163tvljddrp.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163jaxlixou.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ulhupdjc.html

?string $name = null
来源：http://www.aibaodan.cn/163dcfddvil.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163sskhpdze.html

int|string $id
来源：http://www.xuanzx.com/163pqrjjrbr.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163rubeldoa.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163vnahwika.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163fqetylnl.html

public readonly string $name
来源：http://www.aibaodan.cn/163eknoecxy.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163witmdamt.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163hyjywsmg.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163wyavizfk.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163nwgzrwrn.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163amldsigh.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163zbhmldcs.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163eyjkishx.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163yjatotnr.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163znbhmgva.html

$obj?->method()
来源：http://www.aibaodan.cn/163kiontict.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163rirxmljz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163educbdzv.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163xfcvhvbo.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163cklduozj.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163ylweeafp.html

"值: {$a}"
来源：http://www.aibaodan.cn/163frvflqqj.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zlybbjyz.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163jxwjguth.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xpaiiskj.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163qubwxfla.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163wvkhpqkh.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163mexrcece.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163jhzhhyry.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163rutdoqph.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163xcuclypm.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163uhgmsbja.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163xkbdowil.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163shkynhnw.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163nldirazo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163hgtrdmef.html

[U65] PHP：会话
来源：http://www.sxryk.cn/163mespbmwi.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.aibaodan.cn/163lobjnhwt.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163ohaiofki.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163kuswbprv.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163jmovkyat.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163onmpyvur.html

[U68] PHP：PDO 连接
来源：http://www.xuanzx.com/163fmtmbznr.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163gxykjpfi.html

[U69] PHP：PDO 预处理
来源：http://www.aibaodan.cn/163lgzsvwmh.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.xuanzx.com/163syanwyuw.html

[U70] PHP：PDO 事务
来源：http://www.aibaodan.cn/163lvbpdamo.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.aibaodan.cn/163twnsoodi.html


<!-- 参考信息 -->
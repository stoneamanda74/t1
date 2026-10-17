外链999!wailian999！

[S45] C++：lambda
来源：http://www.aibaodan.cn/163jqrnqmqu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163weshxhna.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163gdfqnnns.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zfvpdcme.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fjzgztbz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fooxodkx.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163kvtpzudm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163zmusjarm.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163pfstjhxx.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163bamnixrt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163enenhatr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163mugftpmh.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ywotqbgt.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zjywuwzc.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163fzjotxnq.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163umbibvdh.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ymmlbzad.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163cseklehx.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163sfojaoee.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ywaxozrw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163yvghjxcn.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163nqiazlag.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163adrpsvyk.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163boklbuxv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163tronyadu.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163iodfkhls.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163luqhqfvo.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jrorbjdi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163lhynhbmp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xqsadayk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163zmsgifhb.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fhaeisaz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163usxmuuyl.html

================================================================================
来源：http://www.aibaodan.cn/163nurzrqkh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tylhvrca.html

================================================================================
来源：http://www.aibaodan.cn/163xfzgacqp.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163wfsevnbs.html

println("Hello")
来源：http://www.xuanzx.com/163rjvlyobh.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zztrcsyb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163pkvaqubc.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163dvxnfeze.html

"值: $b"
来源：http://www.aibaodan.cn/163wlvpwtcc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163mjjbnyex.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163puehnvyo.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163aeqlvqkx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163phhlygqk.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163hdhsfvss.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xqkapfuh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163khgmrwjb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ciqfpdnk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163focgqhxj.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163mvdwuvly.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bucdlebu.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163nkaeyfsc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163cyuhdbnv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fsehgwpd.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mzwxtuia.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xguhrhcq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163dspxqimj.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163okfxpkfx.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ifqfjwmj.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163anwavmvo.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163uuqimcuj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163fcvljckx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rnqapqob.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163carkauwh.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163sxwjtdcf.html

print("Hello")
来源：http://www.sxryk.cn/163stdgkcdi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ujcxffhp.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163vcujzgrg.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163pjifmvjg.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ilwrfemt.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163dydwuovp.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163tdmnijxn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163zznojqfd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163hyhqxato.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jekltctd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163wbugduui.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163knqpntkk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163dighpgzd.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lyhrpfwa.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163uxzfltrt.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163owehxlyr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ebrctcim.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163imzfugsw.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163uvduwrfl.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163hknjddxi.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163yrvcoccx.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163yrwrhutn.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163elxklpjk.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ymlrzioy.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ugmzeccp.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163sgqyvbbi.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163akhssllm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163rsjrolxl.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163fbcxnjga.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163drtsiowb.html

print("Hello")
来源：http://www.sxryk.cn/163ehctuzcj.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163zbjnvneh.html

local a = 1
来源：http://www.aibaodan.cn/163hqcjfsre.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dufutglq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163werugmhh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ngibvolk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163mpmwdwuq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163wbvymqqp.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163vqdgmili.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mzmpxzqa.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163kukqezve.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163mohxjxje.html

"a" .. "b"
来源：http://www.sxryk.cn/163zpvqbxko.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163vgpxtlzg.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ovosviga.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xbybdtsm.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163prgbnfrt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163npnqynjp.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163lwtxieqx.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163mmpqorfr.html

print "Hello\n";
来源：http://www.xuanzx.com/163kmriipdb.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163maqixfzw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rzbyrdkx.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163yrvakbap.html

"值: $a"
来源：http://www.xuanzx.com/163rqlhlsrh.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163esttweys.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163cmdfiaim.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163cecgynyx.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163exivwdmw.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nhtaqisb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163adcpjkch.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wglbzzvj.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163svoiqrot.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163fkbrharh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163nxmrsjpc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163qcmqolnk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ohhnvxvi.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163assqonqu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163fjuabhju.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163rvqasapq.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163hkzhpfgk.html

println("Hello")
来源：http://www.xuanzx.com/163ztaooyrj.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mipcsdjg.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dknaoghz.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163sdnpjyyv.html

s"值: $b"
来源：http://www.aibaodan.cn/163pskkkzxd.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kfhfkedi.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163tjfqyiiq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163xsgtpfxu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163dszjmjyc.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163abibtnep.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vufbpweh.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hmpgoqgm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163sxpccyjy.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163arkzqwqa.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163uuvxflmk.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ptbexyzc.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163dpezqwhm.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163fzxplner.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163udtozoid.html

================================================================================
来源：http://www.xuanzx.com/163ggmsilog.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ystzleis.html

================================================================================
来源：http://www.sxryk.cn/163lsscvpem.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qkaxqtzi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163fklloxha.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ozrzxbxu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163bapxhwba.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163oexldwsr.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163nizailbm.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163yqrcoxiv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163tkcpyktf.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163fgfyrcsw.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163wxshpfjc.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163aeoamuah.html

{**a, **b}
来源：http://www.sxryk.cn/163fgcujhcr.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vznxenhd.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ellsvpbf.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163itdpcijb.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163aycwrhms.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163oonzsbij.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rzmqpvij.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uquoundi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163pqesvgpg.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163azcmvhiq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ljnmzuby.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163oyrwvgre.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163cwgbsmlm.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163lbfnikab.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163cgbqjiny.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163hjataklo.html

defaultdict(list)
来源：http://www.aibaodan.cn/163pygsfmlo.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163wkgpffgl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163utucwoyj.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163kpnfkdid.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pohqxyij.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163dlfcfvhn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163qikeaiiy.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qoxwkpwz.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163vpbuappl.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163zcbfolxf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163cbaiicpd.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rdbonibz.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163qtccdqar.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163okuwlelh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163bekxlzgh.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163xqejvqun.html

list(zip(*m))
来源：http://www.xuanzx.com/163uutltjbx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ypasuhhn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163bejqutmp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163aqvjsqvn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163lrnqohlr.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163keeadekb.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163nmmoomvn.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163zrwofsjo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163xkwmtvly.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163nirgcrse.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163awxzmbxd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ykenompu.html

UserId = int
来源：http://www.aibaodan.cn/163xedosrxy.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163crtvoudw.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163oexdsflq.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163enbmccqe.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163fozzyoyu.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rtvpheoy.html

python -m pytest -q
来源：http://www.xuanzx.com/163bsrocjeh.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163bfirtqsa.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163xonnyxcz.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163gewhkacg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163mwthjzzm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163jkfkrvkv.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163cfazccfs.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163dvxebjwk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163pfipvflv.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163uzjujgvj.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163epltawzn.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163hrmludls.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163txoqewzv.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163nqhvackf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ivprfieg.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163sxpiluss.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163carcaypz.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163eugrfipj.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163npyckmsv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163hsshxovi.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163gsjcdrss.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163vgiqmmyc.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163qqztgsrt.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163fqmzuqog.html

namespace App\Http;
来源：http://www.aibaodan.cn/163ndcrkfgi.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163tpkgkkss.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cfidebmd.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163drkceztd.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163tzatiuas.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163asywqaxo.html

?string $name = null
来源：http://www.aibaodan.cn/163uvqgyald.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163cvwgycji.html

int|string $id
来源：http://www.xuanzx.com/163ixhxyonr.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163qfsqzgpj.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163ucixmjfs.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163gfbggihp.html

public readonly string $name
来源：http://www.sxryk.cn/163zrjkbtej.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163ewtouthq.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vpipjdsc.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163icjxnujd.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163oozampmn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163hqpkutjs.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163dfllqlem.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163cupxfczq.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163bngqhjhv.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163juqywjlp.html

$obj?->method()
来源：http://www.sxryk.cn/163favzxcuo.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163cczhehrk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163izjveqof.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163ncmrzirx.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163oixluzkv.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163rhyqstqr.html

"值: {$a}"
来源：http://www.xuanzx.com/163yagjytyw.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163dubtydqe.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163engjeuxl.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rteuvedq.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163jghuidgy.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163tgfrnlsn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163trcateoi.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163agpwpkme.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163pkvtjdai.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163pfeaxztw.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163pyxshrxc.html

[U63] PHP：文件读写
来源：http://www.aibaodan.cn/163gswufazp.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163hduxkwuf.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163vscwiwzo.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163zlqgnwwk.html

[U65] PHP：会话
来源：http://www.aibaodan.cn/163zeecvmdk.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163dfptkrnr.html

[U66] PHP：设置 Cookie
来源：http://www.sxryk.cn/163dbgoygya.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163nyaeojsu.html

[U67] PHP：处理文件上传
来源：http://www.aibaodan.cn/163bonajpjr.html

$_FILES["file"]["tmp_name"] 与 move_uploaded_file()
来源：http://www.aibaodan.cn/163ntmhuqkb.html

[U68] PHP：PDO 连接
来源：http://www.sxryk.cn/163zttnwfke.html

$pdo = new PDO("mysql:host=localhost;dbname=app", "root", "");
来源：http://www.aibaodan.cn/163ofgfgnoy.html

[U69] PHP：PDO 预处理
来源：http://www.sxryk.cn/163opvtbixj.html

$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");  $stmt->execute([$id]);
来源：http://www.sxryk.cn/163lhirzqsr.html

[U70] PHP：PDO 事务
来源：http://www.sxryk.cn/163arzldscy.html

$pdo->beginTransaction();  $pdo->commit();  $pdo->rollBack();
来源：http://www.sxryk.cn/163kuijzdfb.html


<!-- 参考信息 -->
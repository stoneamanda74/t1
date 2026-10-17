外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rxomcump.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163kpouddxp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163niwodftw.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qnsngrov.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wcqkglck.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ilzksdwz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163troerrnj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163gulazhsg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163sglsfehl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ymnjxphv.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xqmvsjfc.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zbrcqswr.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hkbpuyvm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163trmphppx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163nudfiawo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163cgyagidf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ktyacbay.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163royootce.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163kfrvjdyj.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163oqpaiaza.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163gsawcdub.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163kgdiolir.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163altscrzz.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jdatxdyr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163awwqxrdc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163esplmgah.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163hgfekhoc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163xewmwhoq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163blwaukeu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163scqqqqkq.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mthvmmmj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163isuvdedc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163kvmnfxlo.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163kmmpfgms.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163amdghdto.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163nhvlsmrn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163yvvkkrzj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xnhwzzrl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163repboupp.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fxlwpmwy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163oiaraiye.html

================================================================================
来源：http://www.sxryk.cn/163pdbwihhq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163kvhrsxju.html

================================================================================
来源：http://www.aibaodan.cn/163rllkytxn.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163ingbwlxp.html

println("Hello")
来源：http://www.sxryk.cn/163qfuinsaz.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163zwpstyaq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qhyazvkz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163zsafshnb.html

"值: $b"
来源：http://www.sxryk.cn/163svspabko.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mnawqrdi.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ljhmwdja.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163oelqdlxn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163rmnkcpbl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163qsbzouzn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yjohjzsb.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163dfgdheyx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ivvgweby.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163cgzgwzzb.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163exxuxogp.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163klgbcusm.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hodtxzla.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163bdmnpccz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ocyarjsq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vtwhdild.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163emjoiqnz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163kxnkeoms.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163butooier.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163boykyhcs.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nkyojwpx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163hmoxkegn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ipdxnzze.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163gfvftfnz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163duiytsgr.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163chkbnzvh.html

print("Hello")
来源：http://www.sxryk.cn/163vqzccyfv.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163kzqqllib.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163arhxwoik.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xfbzdfpj.html

"值: \(b)"
来源：http://www.sxryk.cn/163pkbatnyz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163eszhuett.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cjomnhyi.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ladmikmv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zupwddpc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163blornkra.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163uimskope.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xzgegvam.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163tbnpcuxv.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ejkhwdmr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163fayviild.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ruxcqjmn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ynsolimx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ljfslqeq.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163odxutxcs.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163jrkofnby.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vpbnxqrk.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163zlfoaxmi.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fqdngmkh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163vwhnpcak.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fhfpzkeo.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163xhmxvyxp.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163lerqpuya.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163usqkfush.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163gzsdlyfn.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163xczfosfa.html

print("Hello")
来源：http://www.sxryk.cn/163jlajclsq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163bpeugdxf.html

local a = 1
来源：http://www.aibaodan.cn/163dnsbldcj.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163vqyoaegf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163dkysifwl.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vemvdjcq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163lnrgeyml.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fyvplsdu.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163flkmsmjl.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163uvroixom.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163emxusdmp.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163jtibksuu.html

"a" .. "b"
来源：http://www.xuanzx.com/163cynrcnzx.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163tguukbsq.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163jxuexmbx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163mueomics.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163uzybzhci.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163rdsnkfff.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163swgtobdu.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163epjlspfx.html

print "Hello\n";
来源：http://www.sxryk.cn/163gfgbroba.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163dnffjlzz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163uughsqgd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ljpsdfuj.html

"值: $a"
来源：http://www.aibaodan.cn/163djghloqu.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zsesoloq.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163imwtqjgk.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163uuiigdjz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163flgeaerw.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163fswukxup.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ymmjewhb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163rthoqyju.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163dqfxeijg.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163npqrfypo.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163atulagdw.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ifguolmt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163wollkfzw.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163qkgumfvb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163xywvtvxa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163tkspuyim.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163gbpdhysh.html

println("Hello")
来源：http://www.aibaodan.cn/163crnjpjfm.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vxbmaytv.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163rrbfbkdp.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zwgrzxaj.html

s"值: $b"
来源：http://www.sxryk.cn/163dabuncng.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163oafkvdfr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163abvdthwb.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163zfsgcndo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163uuejsoon.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ryllsgto.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ijyqdqmi.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163uxkrudfn.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xzuznxye.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zqfquhly.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ppayaeja.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ufcgvbme.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163tykbsnab.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163txfztwoe.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163aykqtwog.html

================================================================================
来源：http://www.sxryk.cn/163efqwymnc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163tzlkviqw.html

================================================================================
来源：http://www.sxryk.cn/163qbvyainl.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163usqhnbja.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163niuhfeup.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163mnshosty.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163izwfzadi.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163crqyoeew.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163flnnbsnm.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163fjvixdjp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zvowotjr.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wacokeon.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163wbhdnpnm.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163qkjgllzw.html

{**a, **b}
来源：http://www.aibaodan.cn/163jwkmifuq.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163aieiyjcu.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163edfxeokj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qrvpvsko.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163trkylyvx.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163vwmykumn.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rymwtaek.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qjfacgwa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163vfjlcxwx.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163hmhtkrst.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163utpgcath.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163levvbhuw.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163gljfqqxm.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163gplaxrpg.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163exhmvqag.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163zszjtuen.html

defaultdict(list)
来源：http://www.xuanzx.com/163nfagzudg.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163yvwumurb.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163dkqzxxck.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163mwnmatwl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163fvomyyzb.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163jyetyicj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163stymiqmh.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ceicxhlh.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qlsemuvj.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163onbydqey.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163kswucman.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163czufcnxf.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163chfshbps.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163vpbhmahy.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163acnigtex.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163cnzhyeyo.html

list(zip(*m))
来源：http://www.aibaodan.cn/163nefmxldy.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163fqgaxagy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163augbmvzp.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163bmmryiwl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163czhzdurk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qnrfjdnh.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163wgeicabs.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163qaizdxqt.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163behslaij.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163yyeyeeuk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163bmergdcb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163fnymvqqe.html

UserId = int
来源：http://www.xuanzx.com/163wotgcdme.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163bpxueysx.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163skljjgyc.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163rqpiqrun.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163oqlxdzed.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qecotlog.html

python -m pytest -q
来源：http://www.xuanzx.com/163psdgsugm.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163bdscgobj.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163mfpepqfo.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163vbrklbls.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163mbscrksq.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163tihfhqcd.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163gsfhoqoc.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163ujebuqfg.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163xzduklpk.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163rkjftidw.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ewhqbavb.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163zicwffou.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163fvsldxkt.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163jmaekrqg.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163aintacag.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163hhblpiig.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163flneotet.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163bgpfwdez.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163csbypwuk.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163dykbjfxh.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163huoycgby.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163szyasezv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163bhrmmubp.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163wgxkzalf.html

namespace App\Http;
来源：http://www.aibaodan.cn/163enhyiemq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163izictbqw.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163rnxgzvir.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163zexjkbna.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163binjziin.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163rvbaoenq.html

?string $name = null
来源：http://www.xuanzx.com/163lqcgcibp.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163cfvagixk.html

int|string $id
来源：http://www.xuanzx.com/163wqdkubzg.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ollfjnwn.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163zqqcgrtq.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163oxjjoefz.html

public readonly string $name
来源：http://www.xuanzx.com/163whwqbryg.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ovddddpd.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163xiquiiif.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163jaqcrdan.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163qhfrrold.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163mvyvgxxc.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163szfjjvri.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163xgahoegd.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163awtsyknr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163mznkzovt.html

$obj?->method()
来源：http://www.aibaodan.cn/163ttrkurgl.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163fvohmtys.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163jupqqrqb.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163kjhzqsqa.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163bhdadglw.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163yvrvnetk.html

"值: {$a}"
来源：http://www.xuanzx.com/163eawimbyd.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163vhpegbip.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163kqiuklrp.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163xiilobrg.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163xrzupwoi.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163vipttths.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163xpilmffb.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163zvbocgca.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163eeyvzoxj.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163auiskslv.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163spfbdfsk.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163bsjsewog.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163okuofewt.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163bfnnhdgl.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163sogeujtr.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163filvpvvz.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.xuanzx.com/163olblcclm.html

[U66] PHP：设置 Cookie
来源：http://www.aibaodan.cn/163kipcrckm.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.xuanzx.com/163qklenpvq.html


<!-- 参考信息 -->
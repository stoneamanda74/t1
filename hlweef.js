外链999!wailian999！

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163cqhuoirj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163czcdrcvg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163yjqbytjr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163qnvubude.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163pkzerikd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zlacekdm.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163kmpcqmge.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163xirunljd.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163izbfteae.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163nfrvxoor.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kybqyxtn.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wprfbppi.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163xqazrciy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163kyirtooi.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163llwjumyj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163negzmfdz.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163rodbiiws.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163urrgtjrn.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163vwglpjxd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rrgngfuw.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163azzdtfip.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163fujmvpmr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wjwykxvl.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163hvkgbhhd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163dfqecvfh.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163pwuxcekd.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xoajxcgf.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163fydsqjzd.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ohugtnur.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163anwfxmqx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163rogdasip.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163cvdcrlld.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dwgsqrrp.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163hhlzempc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qcuwehgs.html

[S56] C++：optional
来源：http://www.xuanzx.com/163npkcceec.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163rbcpiaoo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163xronabrx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fchgcdvd.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ganyhzrk.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163eewlekva.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nhesbaya.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163fodqfysd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163bfkahbdk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163cacmvlyh.html

================================================================================
来源：http://www.aibaodan.cn/163kjlvtmdf.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163jcdhfezk.html

================================================================================
来源：http://www.sxryk.cn/163hutbkxoj.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163gmeuihmc.html

println("Hello")
来源：http://www.xuanzx.com/163evstisof.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163hwvbmnlv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163hvcqltna.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wcphvnxp.html

"值: $b"
来源：http://www.xuanzx.com/163utsqvjvo.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163fdhxhocw.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163sqolkhhi.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163vjkehacd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163ifwyyumd.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jneauxqo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163gzwrlkyr.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163hdlxsnul.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163jblsslmj.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163bozutumt.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163lfuyykpn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163avbyepks.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163xqjrzxjd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163faagiadj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163wbzfynmo.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163nvxbhryi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163xxynvtqk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qblnqstj.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bzxfkwzu.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163kprkrugj.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163tbwmjcsy.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yystuwug.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163guklpgvq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zfvmtsda.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wkjwzvqp.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163sltsghet.html

print("Hello")
来源：http://www.aibaodan.cn/163nplyziph.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163qdesmvdc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163uyprbmod.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ymuclxfh.html

"值: \(b)"
来源：http://www.xuanzx.com/163hpftvmdw.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163gzdmzcny.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ynprwwog.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ojlzznrv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tudcivpv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163brvlulsi.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ydfgvxlb.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163zdlwcuvm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bcateyhf.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ghzjzvrj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163mpmplgpc.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163fsxwapla.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163wcahtrfu.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163infpavrf.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163vuugbwzt.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163mogdqurm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163hxiyjvwt.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163llkirbse.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xkfvheaw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163pqcgkojm.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163dyetorzv.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ctofjjkn.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pemqolgu.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163pivdflpi.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163mlfnkxtw.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ofptqjgu.html

print("Hello")
来源：http://www.aibaodan.cn/163usvazmdt.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ymowrawz.html

local a = 1
来源：http://www.xuanzx.com/163xdgpuakt.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ocuhprfn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ajpigevq.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163bvftllsw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163tlxqbdaj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163wrwvxbmr.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163xcfdlhjd.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163gcsddgae.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163aabyagpa.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163bpkgunoh.html

"a" .. "b"
来源：http://www.aibaodan.cn/163nfkarfdl.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163oklvseol.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163psgorbyz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163glexlmdd.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163gpyfhljk.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163eibriprb.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163yukpokul.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163alfpfagl.html

print "Hello\n";
来源：http://www.xuanzx.com/163mmauigzu.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163avixrpwi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163kczgbnut.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163teutnguv.html

"值: $a"
来源：http://www.xuanzx.com/163hfuejmzf.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163potmkzde.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hfkbnfnz.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163pzigjaiv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163kfnovwbb.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163pziojwvt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ltaxphmj.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163orhtjbue.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163sjrmuwzs.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163rnpwslrj.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gaboqsvi.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xhiimpoa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lisynlua.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163vrlszlji.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ynthraag.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163aomtmefo.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163uvajvqzd.html

println("Hello")
来源：http://www.aibaodan.cn/163vuhlandy.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163kfknqryk.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vlczmxav.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163yevdhgiz.html

s"值: $b"
来源：http://www.xuanzx.com/163ihlzqlmr.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ielufexr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163oatlgwdg.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163hkfopncx.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163fgltxfkx.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163cmrxzlvd.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163oqpriqhv.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163gnqmdhgh.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163knrrtpij.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163kkjvjvau.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jqewhlmi.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ciuraxiu.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pgiepdhp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163qgfntwrs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163lcntkzgd.html

================================================================================
来源：http://www.sxryk.cn/163qppdzbtq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163tlqykntz.html

================================================================================
来源：http://www.xuanzx.com/163mpstcqnx.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163geyvweak.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163xvzjbzfw.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163rpfshdel.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163scazjjvh.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163angdcmth.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dcebtagv.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163qsvgsjar.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qibvrifg.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163wughxuwl.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163wouxpzgr.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163nuemkulr.html

{**a, **b}
来源：http://www.xuanzx.com/163tyggdguy.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163pgmwdiux.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163lizwwpxk.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163borhwwyt.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163hetakzrh.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ufiwwdla.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163bhpthwkw.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163oegefocq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163urrhuesv.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163schjclgv.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163pkgsfwtv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163idnabfhk.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163zbqlidkn.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163dhfucpbg.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163myjliewe.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163njvubyal.html

defaultdict(list)
来源：http://www.sxryk.cn/163jqvhicmz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ryermolb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ndcapogq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163stauxlab.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163scmfcxpa.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163pdbdbhja.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163vmqpnbgt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163fimuryoy.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163dtbkbgsz.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ddahiuck.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ikmtebgw.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163bcrvkdjo.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163qoifqbva.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163okijqxml.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vuorgtxr.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163dtpanhli.html

list(zip(*m))
来源：http://www.aibaodan.cn/163gozagtmx.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163aprhxjxd.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163imxvbpps.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163rlviokjb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ypvldsxl.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163kbavslfm.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163fpytgsnm.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163pdxtjavd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163jdonmlck.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163slmocpjc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163mqhxpllh.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163cjttpezi.html

UserId = int
来源：http://www.aibaodan.cn/163jybaxltj.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163vimepqwc.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qikplwyj.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163upprynok.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163nnkobwhs.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163budgybml.html

python -m pytest -q
来源：http://www.xuanzx.com/163bujkzzkc.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ovcyrprm.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163gfenwfho.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163fwhmoxkd.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163gdcpvvxm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163itzudwtn.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163atsfalzv.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163gzcczjuk.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163pqgfydps.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163eiiowips.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163hnhbpxjv.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163sjqaumyu.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163liwdukcv.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163qmrlpspp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163isnrkjph.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163mxfxdoxh.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163cmqlyryl.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163ebdbmvru.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163xesbhqmc.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ocqozhsl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163vayxoqba.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163upjgjyxv.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163wbdomllu.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163gxwtgsau.html

namespace App\Http;
来源：http://www.sxryk.cn/163ghmgflue.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163dwwgiaem.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163vembuapw.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163ujdzzlyy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163wfurcfbg.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163mdfgulwi.html

?string $name = null
来源：http://www.xuanzx.com/163puuphxku.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163ofptksvh.html

int|string $id
来源：http://www.sxryk.cn/163hlvleoof.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163fruktoyt.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163hgtnfugd.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163oqmdyspz.html

public readonly string $name
来源：http://www.aibaodan.cn/163vgonsbri.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163qpjfzrbd.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163dbgobvrq.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163ntgyfkee.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163vrhknmgy.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163ecshwglb.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163quycyduw.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163vocgflyx.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163zptrsver.html

[U54] PHP：空安全调用
来源：http://www.aibaodan.cn/163hgocihjf.html

$obj?->method()
来源：http://www.sxryk.cn/163mlirpnqo.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163ofikavsj.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163gkefzvqz.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163xkwnrdgn.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163yegfjozw.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163fubrbpey.html

"值: {$a}"
来源：http://www.sxryk.cn/163boiffhzd.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163wzqufbws.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163xdpxrxck.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163yuflwljw.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163tcisijnl.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163ahbgsvfi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163pmouaiei.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163lmhcmtwq.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163wvxydaed.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163dgxbxfuo.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163bbnqnvgj.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163otqhruav.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.xuanzx.com/163dkepsypu.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163bnouxrbh.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163hiabhmcv.html


<!-- 参考信息 -->
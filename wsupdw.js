外链999!wailian999！

[S35] C++：map
来源：http://www.aibaodan.cn/163xghrxihz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gqjirkbh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163eihgsxvx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vyuzgrwg.html

[S37] C++：set
来源：http://www.aibaodan.cn/163elzehopv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163pahblcgk.html

[S38] C++：排序
来源：http://www.sxryk.cn/163feeqfaxl.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163btnhxwjk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163swuinfts.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zeftunrg.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pmxyrcsl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163gaxjupod.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wjzyxlpe.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163nvshooef.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163biwbawyx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wwjvpfyk.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mpglcsna.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163eyhclyqe.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163vlabkpke.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163sodouzre.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163hrdtnstc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163eqkajjkf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163uaaucgmx.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zftzeosq.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163xncomoeq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hwqskhyo.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ykpqqxgt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163uhwpauwx.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163vdfrcyol.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163tmmzpecv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dczuddtp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163dempagrc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163evxeirvn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163sezkfnmf.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mdpkccro.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163zcmeqcvb.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163opdzccuk.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163fhasgntx.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163yxulwkce.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163iigfrfud.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163dxjvcpxf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163zijgiduo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163iievoxhm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163siuiuwgf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tknsgnqf.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qlmnfdkb.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163fdrlcsjy.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163vtxpazbo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163qsojjxzi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163djyyhlrl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163fsmtshtk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fssfccyw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163otsgwbbd.html

================================================================================
来源：http://www.aibaodan.cn/163ekagnbzw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vgiwljnj.html

================================================================================
来源：http://www.xuanzx.com/163usnhlybz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163seufwbnp.html

println("Hello")
来源：http://www.aibaodan.cn/163einujkfc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163gpoysggx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163yzebblpw.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163ramaxloo.html

"值: $b"
来源：http://www.xuanzx.com/163vfhampxh.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163elsmipbk.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163lvqxqrxz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jmngvedi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163esevravd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ksyctois.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ilpwjafk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mnehcwbo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163cctahnvc.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163mmsubzeo.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qimfpemm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ixfnrfim.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ovidvtrc.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163olnwqwal.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163nhwaorrq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163rdanrofe.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163yubhmrth.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rspzamrq.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ivpkcpbc.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163bosdwfdl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163gyzzhhwj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163txmivyfc.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xybnijsj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163koojwmkg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163tcngmwxk.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163samdukol.html

print("Hello")
来源：http://www.sxryk.cn/163lgjshxnx.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vtqojrwi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163kknpdjuf.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ospjlrot.html

"值: \(b)"
来源：http://www.xuanzx.com/163jwbafmks.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163kxwegitx.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163dtqxcyjd.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163rxjmnfdw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163pxueaasg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163julvljql.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163hsstilab.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xuknwfze.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mzuuefzk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ajxnficj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163vaktefde.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qnmvqgay.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163xjgefxzo.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163lszfwpwr.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163hiifhghc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163giubggef.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163jqymqzji.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163henumhdm.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163eobawbly.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dyifqomk.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vztrryku.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163serantyy.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163yhzyehrt.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163schoilsm.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163kcvheumx.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163kizkwmto.html

print("Hello")
来源：http://www.xuanzx.com/163jwhieond.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163mqbykyhe.html

local a = 1
来源：http://www.sxryk.cn/163jesnubgy.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163cavcfjqf.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ymdbevkm.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163niesetsl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dbndgovy.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fhgatbvs.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163acubbtzz.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163uorbcksc.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xmzzmstq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163fnaelmtm.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qocviufo.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163cevgfvtl.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kfbuglqp.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163yxdffvqe.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163iexijahn.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163pdqterrp.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163gxlhjqtr.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ujgakifq.html

print "Hello\n";
来源：http://www.xuanzx.com/163fzusaspm.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ztslecnl.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163uarucybk.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163suholtgw.html

"值: $a"
来源：http://www.sxryk.cn/163lfqpljox.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163mmrqbgqj.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163jgqlkiwr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163fgsimeyl.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163gffjoehu.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163sabpsycs.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163hsgfcsbt.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163cxraahfw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163hyritgpv.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jswyvltv.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163iokhiwaf.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163kodvjxoj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163swfwfqlq.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163zeknaokf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163kqkrtvgz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ytbikdrh.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lyvlodos.html

println("Hello")
来源：http://www.xuanzx.com/163geilckla.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163fpfchmmr.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163uzlvsfov.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zpdqqitn.html

s"值: $b"
来源：http://www.sxryk.cn/163kjvbfrcy.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163wemtjrfq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163vqudhbjj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163niwdjguk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163gwemlkfm.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163arbklbli.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163hajdycqi.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163jkhweksy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ehtslysw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163nsynkiwk.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wsewcstk.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fkmvjfsp.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163undmztnc.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163bfujufff.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163htopetkt.html

================================================================================
来源：http://www.sxryk.cn/163vejuczlu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ijhklrhs.html

================================================================================
来源：http://www.sxryk.cn/163cplgeaza.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163pwqyruzs.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163lytoumxr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163yxvgukkh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163jwzbylag.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163hccnnrvx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163yfidqccm.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163iaancwqz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163eadvlljh.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jgzxhocl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163sfvspsmz.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163gainepje.html

{**a, **b}
来源：http://www.aibaodan.cn/163vmswdxmr.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163fpzlccge.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gtidttyr.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163kzswsawn.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163okgcdmnq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163tsvajoim.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163flhporjx.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163txpnmbyu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163opkthgck.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163eskxswhm.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163ayjvooof.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163gpmjjqeq.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163acoxagef.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ffdvsgkb.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163bfxmfrxs.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163pivkxsip.html

defaultdict(list)
来源：http://www.xuanzx.com/163amxkoerv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163knjdtlfl.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163nisevufq.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163jdylubbp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163hosxcday.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163hxurjwng.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163boutpcmb.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163nvorpymd.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163dlqvtaoe.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ypxuowlm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163dhacjzps.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163juckjbeu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163buryoupc.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163kkoqjdaz.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163sefhsacs.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163hnukhbop.html

list(zip(*m))
来源：http://www.sxryk.cn/163xyayzjls.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163oquaarnu.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nmfpdaaz.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163pxcbexek.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ftdlbxjx.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163ocxgxepr.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163apvdrmls.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163uxytzucm.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163chxxpdoc.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163immfvgza.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163uvqqfbah.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163dnroqjwf.html

UserId = int
来源：http://www.xuanzx.com/163umefhlgm.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163cpkjzpik.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163fojkuraj.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rghwsgrn.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163jhlqxiqg.html

[U31] Py：单测
来源：http://www.sxryk.cn/163lzrdhcnw.html

python -m pytest -q
来源：http://www.xuanzx.com/163ygspijzp.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163zdqyefxs.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163zhgbakei.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qjnahumy.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163vnfnkwjo.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163crwlyirv.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163mqvhqhkw.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163sfebzunx.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163ufbzanfh.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163uwtgnlhv.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163esuijmgt.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163efcyrkfg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163bjxkndso.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163kvczmrim.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ltwvwaqg.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163xmgpgehu.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163aodnxnxj.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163kdabfigv.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163eocorone.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163ambykngs.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163xvyjhnat.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163qviqxweq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rqfhxygg.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163qszyboxm.html

namespace App\Http;
来源：http://www.xuanzx.com/163hzegscps.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163yizgpvar.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163bjmnvaes.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163blkmrinj.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163eknbbhug.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163htejxqlk.html

?string $name = null
来源：http://www.sxryk.cn/163jixcokff.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163heambers.html

int|string $id
来源：http://www.xuanzx.com/163cblyszaj.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163xmbdpttg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163wloimiip.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163aciqsljm.html

public readonly string $name
来源：http://www.aibaodan.cn/163alserlpx.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163gwwlmgrb.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163jewoosww.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163krcauqxc.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163ygqenexn.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163xpromimz.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163nqdlvjhc.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ewnjhfhn.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163ablpojzh.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163toskxizw.html

$obj?->method()
来源：http://www.aibaodan.cn/163powcfizf.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163kalywleg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163owvjpclt.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163apcnvquv.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163woyifoak.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163trlkfxbv.html

"值: {$a}"
来源：http://www.aibaodan.cn/163ocqjaynw.html

[U58] PHP：数组三件套
来源：http://www.sxryk.cn/163ooiwfnqg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163qgixgmsn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163rucwgmml.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163wukwcroq.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163iknyibyz.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.xuanzx.com/163mezkzsny.html


<!-- 参考信息 -->
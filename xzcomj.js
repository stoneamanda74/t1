外链999!wailian999！

[S35] C++：map
来源：http://www.aibaodan.cn/163cjnflvcd.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163svsjxavj.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163owlthrgl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163huhyfktd.html

[S37] C++：set
来源：http://www.sxryk.cn/163aemmctjs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163veniirmz.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163caummupx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ljtetocs.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163qlqgzjmv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mwcqbbqr.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163dcazcysz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xnjiejil.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zuksuivc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qerbuzrk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163itcleczc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163etfvdqac.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163qrpuheti.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163hkkojcnj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fvetlpgc.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lmshxtcu.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wqisbxpl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163psndrmad.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163tbfbnvpw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163kotmxxfk.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163raieoqgj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qkmouudi.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163uopesxlb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163elwaywso.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163lliburzh.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163sbqihnyj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wjtkjfvd.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163cwljkwoc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163cevmvrqp.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163afpeelto.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qqrhnjcw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163xaowppzw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163hbqvzsbd.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vqrtkfdc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lejnfhni.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163gdvekcdf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jnucuryx.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163sksbglqn.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163bcrnhlib.html

[S56] C++：optional
来源：http://www.xuanzx.com/163metaocjy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163hicoeuxh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163yomkhpfo.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163evkeltqb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163blxiqbma.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ufqhjtqi.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163lvleerdp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163esmuycuo.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vlwuexjf.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fjvlfvra.html

================================================================================
来源：http://www.aibaodan.cn/163arwxcevz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163blwfkasf.html

================================================================================
来源：http://www.xuanzx.com/163pymkfnfu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163bqbxfbfp.html

println("Hello")
来源：http://www.aibaodan.cn/163azqbhmab.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163rvscfphg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bfafssxz.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qajxynmo.html

"值: $b"
来源：http://www.xuanzx.com/163rxcjizoh.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163edbcvewv.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163pnzexndb.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163aldaedyq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163afyftuqx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rvesniib.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163dsdisimx.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163igbdimqx.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163covnjygq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163usleegne.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163avvvlyhj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ojipowvp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163jyofhlrq.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qoxddriw.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163vtftwfpp.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zmuuwbcw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163tbqwdlla.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163bpaixdqy.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pytmgyeq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163tzajqpfk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lxttdudp.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163opcnkvhg.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163lxcjuitd.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163svmsqsle.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kfrxtuso.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hmxafsbp.html

print("Hello")
来源：http://www.aibaodan.cn/163vlcaxish.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163rqibhtdi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163bccfgdkq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163hozblxyo.html

"值: \(b)"
来源：http://www.aibaodan.cn/163obogadwe.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163msvlgomc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163foshyhgv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163xnqudfml.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163hgvasbbf.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163vfyvzouo.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163kngmkuxo.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163cqccifcz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163dwhjtsvl.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163hkzphxjm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ferleomm.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163akfhlyda.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163eeqobqoi.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fhcannvo.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163oanjirmg.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163wcwoaeas.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163fnzppivk.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163yhfgirzo.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163kefpyrvu.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163yczmhgbc.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ncfssolf.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xokekvdk.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rnlexnxq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163iejnrxbm.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163elnlzalm.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163czcsvgyv.html

print("Hello")
来源：http://www.sxryk.cn/163rwnxznoq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wwwsfaeg.html

local a = 1
来源：http://www.xuanzx.com/163pshqxpki.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163sdgzzsab.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163unvpasno.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163vrnculyq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vyvszefj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gjcfjspp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163gvzyfdnv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163xzpshlgf.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163rjtwdurt.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163wnzyyjeo.html

"a" .. "b"
来源：http://www.sxryk.cn/163ucpaptrd.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163gdgnzoqg.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bgxcnhzz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163xqmoycyl.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163admbrrio.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163blgqeeec.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163uitehkhw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rsvatule.html

print "Hello\n";
来源：http://www.aibaodan.cn/163knbgshyq.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163sigidltm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qwziazmd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163pkyssenv.html

"值: $a"
来源：http://www.xuanzx.com/163sjpvucug.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163bckfbtoc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mflyorcq.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163pwtuhbnf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163lrspgqka.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163qiprlyyh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163scpxxzpq.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163xlfiokvv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tjjcuagd.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163yjpuzoqd.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163gjcgncoc.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163tzbgtupd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163lsbjsrrt.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163eanyzvug.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163iauircng.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wukynord.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163brgjbdsy.html

println("Hello")
来源：http://www.aibaodan.cn/163eblkpsvn.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163pnetallc.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163crffumhc.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163wjzazdle.html

s"值: $b"
来源：http://www.sxryk.cn/163zrfykrnk.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163iamdcans.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ixtrkqfc.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163sfmmkzsv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163jkfrbqbi.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163yxsxehey.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163yjnprkcw.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163sorqsaxf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163wipkygbj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163qfdvffjq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163oulxiest.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163cogwdrru.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163omzsrnpd.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163wmcnuaru.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vpsjykbu.html

================================================================================
来源：http://www.sxryk.cn/163tzsjiodf.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163wxaevpbz.html

================================================================================
来源：http://www.aibaodan.cn/163yxknkhgt.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163aegzjuua.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163dmhrshpp.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163joacgzor.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163qqwcmvyd.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163cixcyjxh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163prliorfg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ttzvgmvn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163uyxzhxfu.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163eidozjup.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163agjjxfdi.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163rgimpntm.html

{**a, **b}
来源：http://www.aibaodan.cn/163wqlzbeyd.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163rmkdvmgj.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ryvcizlk.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163gmalpjpl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rwdxsupy.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qgjggxzq.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163zromxumt.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163irwgzhiu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ltypuewl.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163xueagnuy.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rpeoygge.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163qcmyboes.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163lblbcsrc.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163chobazux.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163jhnpwgag.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163yfxeznxp.html

defaultdict(list)
来源：http://www.xuanzx.com/163hntyucyi.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163wudwjxsv.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163tlktguhc.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163inpxgjse.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ckhdnsrt.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fxqzyweg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163hwrhksxg.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163gtriyidf.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ibcdlzwx.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qscpshrf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163tltshyqr.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163vkgrbmsf.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163hyfchybh.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hoelglzp.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ltsukgwq.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ilkckfxr.html

list(zip(*m))
来源：http://www.sxryk.cn/163bxcymgdn.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163zyrssqui.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tyyadryt.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163buemctqc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163fszzjgjo.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163twpqxakf.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163cleypama.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163argawczs.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163yfhlluys.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163srcwnacw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163jezaregd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163fbxjyrlt.html

UserId = int
来源：http://www.xuanzx.com/163yadsopmd.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ttdajowr.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lnkqxcox.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163vhfzqvqa.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163fdfxcnjd.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163cgeiwmvv.html

python -m pytest -q
来源：http://www.xuanzx.com/163prvhqddn.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ldrkhjvo.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163ailjhrqw.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163mtqmppxs.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163nmgfrala.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163lnstmymk.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163uouffbls.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163vcrdmpdm.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163wjcefamu.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163owkgmlun.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163pmjzdbfj.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163whksslfv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163nwkcrxbs.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163hdyweghg.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163mgaknbbw.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163sdmpehlv.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163vxdbmdic.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163qbdtkqth.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163jtzwtuma.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ihxjfrnt.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ogjtuavz.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163pqrjihbf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163bsrmjdjm.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163szhsxeez.html

namespace App\Http;
来源：http://www.sxryk.cn/163szocqznq.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163fyzaeidt.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163cwvkluuv.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163lofhegzy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163obynmdgn.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163untqlkug.html

?string $name = null
来源：http://www.sxryk.cn/163lzowbmjo.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163mfizawuf.html

int|string $id
来源：http://www.xuanzx.com/163mcwuhcmf.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163ympffdry.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163nrkmqecw.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163gzolvwdk.html

public readonly string $name
来源：http://www.aibaodan.cn/163vwvikjcc.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163vzerjtax.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163glpktsjk.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163htshvljm.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163grjhxkdn.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163bukrucvi.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163relmgkmm.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163oajwjckn.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163jgmyeqmx.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163zpfsstfy.html

$obj?->method()
来源：http://www.xuanzx.com/163xkiapsxo.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163ozotwiwk.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163vwtbbhhx.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163wqidvllc.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163dvaeatrt.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163jivnyhhf.html

"值: {$a}"
来源：http://www.xuanzx.com/163sgumywpr.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163nqvnvcbq.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163jkjvegeg.html

[U59] PHP：自定义排序
来源：http://www.xuanzx.com/163mejvqpuy.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163cmnajqep.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163bzwvhlih.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ghzxglpx.html


<!-- 参考信息 -->
外链999!wailian999！

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163pdkukcsk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163trrdzmdy.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jdvyayyh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ucqinsty.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163mlaybcxx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dlwklrca.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ecdcvfpu.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zbbosuej.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163bemaliih.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ccwrotxa.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163tkvpnfbv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163uacdeaja.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163swktdard.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163hzaspdtm.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ijbnbafp.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163kzqqyiqm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ynpqtqhw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163cplhoqdu.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163unouncge.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tcahouvm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163eyimbtnq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ldxtvcjb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163foahxdym.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rhrhwslx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ebjubgbv.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163pojjaddu.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163emqxynpg.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gpwdnaho.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zdrrfhta.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163wzijwors.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163dckmhvgh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163mzjkvvqt.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163qdbgpmsh.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xmdqljqh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ydiivjiw.html

[S56] C++：optional
来源：http://www.sxryk.cn/163gpasfoht.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163apcaudyc.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163neociggr.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163mzxhbule.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163jheedrhi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gtyywhrc.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gaobvbcd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163jksspvcz.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163gjexyvij.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163wzpiwnjw.html

================================================================================
来源：http://www.xuanzx.com/163hqxdfznx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163sphcdjdb.html

================================================================================
来源：http://www.aibaodan.cn/163vwcubqkj.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163mhwjemht.html

println("Hello")
来源：http://www.aibaodan.cn/163twrjcovo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163esjuloha.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163uwqfmkyp.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qnwuvjvk.html

"值: $b"
来源：http://www.aibaodan.cn/163inyxfeoe.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163pdonkmda.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163fikpcegv.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163wgxtygwo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163yrmtjpgr.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163uxcpbros.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163lahsolgo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ghhjjuhq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163tcnqtgey.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wwzdrvct.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163dmhtvrsm.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xnjxugcb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163hhudyyhp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163nqwjcutp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gqkmwqju.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163idckeord.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tfhcenhs.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163aqofiexl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pyzhdtpv.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163eflrhusu.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163iqoeotqc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vpsesryn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163xkzfxglx.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163dyvqgbvx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163nthtxwet.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163kvxtesrm.html

print("Hello")
来源：http://www.xuanzx.com/163ywxhfcaf.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ppoudoix.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163sfpiaeid.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163gpdxjesy.html

"值: \(b)"
来源：http://www.xuanzx.com/163audoubuy.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hxsijlac.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163bpdckhla.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gaztpuge.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zyoexpbw.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kgjfbnbg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163tzvmmamu.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ipnnekln.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163cupspbdy.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kgtbzpem.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163srvylmyu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ikhkvoil.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163rsihawqn.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163iqkyswol.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163bquxyrkb.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163uhjlrwes.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163esyfaxau.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163wwpxjeqt.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qwkntdtt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163bhmwmsub.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bdhtjged.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163rkssxupv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163cakpcysw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163vaiubgsw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jekazjdu.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163crldepuf.html

print("Hello")
来源：http://www.xuanzx.com/163qpoweikt.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163vmxsafjc.html

local a = 1
来源：http://www.aibaodan.cn/163irfebsru.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163tccvvzlt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ejllvzey.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163hgyqdkhf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163whyqesiz.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163wckfwwov.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163qpbgnuym.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163rgjeqico.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ifsadpgx.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hlsmxuia.html

"a" .. "b"
来源：http://www.sxryk.cn/163cesmczab.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163jepmzhkg.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163gywhvkpw.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ewgpbrlc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163dobxbtgk.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163oxdjcaaw.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dhqeiszc.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163mogyfoyr.html

print "Hello\n";
来源：http://www.sxryk.cn/163hvanqouz.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wgjsiqfx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163azoqrjej.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163znvejlkp.html

"值: $a"
来源：http://www.sxryk.cn/163ietwhgwl.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163xtddfcvh.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hfpikbad.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163oxhejmhn.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163adcfvlce.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163lcksjwcc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163gixdjdfa.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163brjawasg.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163fgrsgkod.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163rwvxqxrf.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qpnlfayg.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163gagxbonu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163qcpwxrjn.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163qmbvcgrz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ftkxaggj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163uzgvntjl.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163sowgjlii.html

println("Hello")
来源：http://www.sxryk.cn/163qpsfpbxa.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163wkqupysh.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163pylcjjbk.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163jefgqnud.html

s"值: $b"
来源：http://www.sxryk.cn/163lpvcmbqd.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163nhqfbele.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163gtgunpap.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rzrhjfyg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163jcrsdygo.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163nbyglasy.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163uqgbyfvb.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163hhuqviox.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163camkmjat.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163roecchal.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163pveovvjc.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163fwakgmtm.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163aowrbnso.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163klvhkdmo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163cqpzllvw.html

================================================================================
来源：http://www.aibaodan.cn/163cogahovu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163sulllsmm.html

================================================================================
来源：http://www.aibaodan.cn/163wiurhzjp.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163kzxfxtid.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163yticsdis.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163wzcrakjl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163hgtpughf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163wrtxurqm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zgrqwxim.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rjoovqzb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163dujcdnou.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163pevrgcxw.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163pufznczf.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163ftvnbaog.html

{**a, **b}
来源：http://www.aibaodan.cn/163fepxfmqm.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163pnacbsta.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163fclivaja.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163erqrksur.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163cevpgwxp.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163hpmpmtqa.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163wqmoqvlt.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163gtjfbpas.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163uvawddwu.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163kujpoisv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163uekirlrn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163eyvqlcaa.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163awlhygfm.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ufszcrte.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163feefkord.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163rscngkvb.html

defaultdict(list)
来源：http://www.xuanzx.com/163eqwkvlpm.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163dkwgtyee.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163fwwrfdlk.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dpaawumr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ljkijpen.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ugxezlyj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nyyoamiw.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qqmpjbbn.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163zaerldmx.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163telqeaqh.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163umblbawj.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163obnumbkb.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ziekwzeu.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qucmqigj.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163pbymcmxw.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163cdfotjph.html

list(zip(*m))
来源：http://www.aibaodan.cn/163skyzchvw.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163vqrfdhfo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163kvwbfmji.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163xhcwtvtz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163zlqfqtdf.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jgxhcjwx.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163iwzjtlzi.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163hteckjou.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163knsdqigd.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163qhhrupsw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ypqvanja.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ijinqhie.html

UserId = int
来源：http://www.sxryk.cn/163dxfodhyo.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163btqfryvd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163kqyeipoh.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163nhtiruah.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163jbhbjxxo.html

[U31] Py：单测
来源：http://www.xuanzx.com/163xnccprml.html

python -m pytest -q
来源：http://www.sxryk.cn/163qrnwueef.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163nmufxufc.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163wsoqwymd.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163oyhzkxhl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163zwoxpdve.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163mcjlmgtf.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163zzdfqczo.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163ccqtnxkf.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163rdsxahli.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163qgacnivb.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163wwscqqli.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163gdlucdxp.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163rdypdbpy.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163ckhjafqq.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163jmhohorr.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163qvmxvrdu.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163pntaphqt.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163qdfaeyur.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163snjuyash.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163dwdbtmoy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163pyqrttac.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163vkmfyjbk.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163aiibjfxa.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163nueinzjh.html

namespace App\Http;
来源：http://www.xuanzx.com/163fgflczht.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163uoytgead.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163ivleqjlw.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163imyvvpxs.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dvbnpncf.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163cmmdgjav.html

?string $name = null
来源：http://www.aibaodan.cn/163phjtfyld.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163gnxumyho.html

int|string $id
来源：http://www.sxryk.cn/163jsmfnbse.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163pmfueems.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163lqelyace.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163wslagdwt.html

public readonly string $name
来源：http://www.xuanzx.com/163afdspjyj.html

[U50] PHP：构造器属性提升
来源：http://www.aibaodan.cn/163zsxwukcu.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163izvgupzy.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163ygkvnmbv.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163zvnytvgw.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163mlfxxiqp.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163ouvsbjxi.html

[U53] PHP：空合并运算符
来源：http://www.xuanzx.com/163criiktle.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163oelmsmbn.html

[U54] PHP：空安全调用
来源：http://www.xuanzx.com/163oamvouye.html

$obj?->method()
来源：http://www.aibaodan.cn/163uwwxduxs.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163ifshosyb.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163oafneltk.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163buxrjgqn.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163qognuwvs.html

[U57] PHP：字符串插值
来源：http://www.xuanzx.com/163otrwrcmo.html

"值: {$a}"
来源：http://www.aibaodan.cn/163eaimfncy.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163hqxciflg.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163ashevzrs.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163htgqmvhe.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163pqasdhej.html

[U60] PHP：JSON 编解码
来源：http://www.sxryk.cn/163cnycfjgi.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163kgjfqrkf.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163yzwofizu.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163byvcnhuv.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163qxpmahza.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163kkfxrjig.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163lgujzpci.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163sulsjpup.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163vakjwotw.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163yxcacfwe.html


<!-- 参考信息 -->
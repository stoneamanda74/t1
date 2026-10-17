外链999!wailian999！

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163amkgskhu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cqrmtswh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wvrwsdzw.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163dzvbyjli.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163szjjvpsc.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rjrlhpyz.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163lrpjkvil.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163jelihpwc.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163rtiqseha.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fpblmgob.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163vybpaiyl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tkkfggnb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163jmztnwgq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163jhndiczw.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fycixfkv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163artbcper.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163faivhwsf.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163lfjbiioo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ahrvzymm.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163hsauleci.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163cxjzkjkz.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163kbfkwywl.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163cdexjpdp.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163gqhgduin.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qiocqppl.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163mplgfxij.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163oojoqgqb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ndgvptwz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163hckrmlxk.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163rllsdpfz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163maetqvdv.html

[S56] C++：optional
来源：http://www.sxryk.cn/163dsecqeis.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163bwthpxwt.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163iqrbvdkp.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163iuqyhmwx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163kzyvcjfl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vtflnjtu.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163uxymmzvi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lvvzdyws.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hebpeqmh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163sfcutvon.html

================================================================================
来源：http://www.xuanzx.com/163pkntaohd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163khzreipe.html

================================================================================
来源：http://www.aibaodan.cn/163hqdgzhko.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lthwtbib.html

println("Hello")
来源：http://www.aibaodan.cn/163jgxhpqkh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163aqwnxcxs.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rjwnvldu.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163nxkhoqlm.html

"值: $b"
来源：http://www.xuanzx.com/163bowsbnhz.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xucaiytd.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163wbrjmpkx.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163wvzjmkcl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163botmkted.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163zrqkqykf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163gwpggufh.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nhbgffah.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jrvbldbh.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lqavuhcw.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163djsfrdzo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163gyxkqehb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163sshtvhcs.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163kgqdyzdr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rtypmlgo.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163obphpmof.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163rlfyipid.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rsytgvrf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163jjmxedhz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163whmdmiph.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163atcrvjpu.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wpulgobo.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163hkemxhpf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163gfdekjcv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163njbmnrjg.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163soyqzsuv.html

print("Hello")
来源：http://www.sxryk.cn/163ojkgfcfd.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163xmvuqlef.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zerwopka.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163gqcctfml.html

"值: \(b)"
来源：http://www.xuanzx.com/163roojazdh.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163kqyrsovs.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163uxvpjppf.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163myctgqka.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163hqrxnxzw.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nxrmherk.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ogmlovxh.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163exybqsoy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ujrvfuda.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wzunndjz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163plxmbyls.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ajhzollw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163esmxhiek.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jaotqfmg.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163krslxjnc.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163gkghzpqk.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163dwogtruc.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163vfyracyn.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163laktdfdx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ctuxzpgh.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bvqvzyvk.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lwiqyvcl.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163gqgnoqty.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163dqklrviw.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163otuhrdvk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163shzvktos.html

print("Hello")
来源：http://www.sxryk.cn/163hmfczqsu.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163foeleuyv.html

local a = 1
来源：http://www.sxryk.cn/163mbgsupfb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163qqnwacfi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163pxnunigq.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nvnwjukw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163wslnfchh.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mdldoitx.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163bakbxxqd.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163gbwndnvn.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163odeqafbz.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163zvlkaxmr.html

"a" .. "b"
来源：http://www.sxryk.cn/163fwgzstma.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163hjdvyzhx.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163igvvdlwd.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163evolcuex.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163nrzmfiyy.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hgcikspk.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163qzgpomnn.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163cevzssyg.html

print "Hello\n";
来源：http://www.xuanzx.com/163vtzwnfyb.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ukmhocxt.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163qitlwwbs.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tkpvglzz.html

"值: $a"
来源：http://www.sxryk.cn/163skqusxrt.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zqscrgwc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163ezeqjnpd.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163afopwixy.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163nisuduch.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163rvfiarbi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163srbpnnvw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ojvkuzna.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163coytfurs.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163elmkhvpe.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163bfvbktkr.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163vscedmez.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163yovsfefr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163seydgnxa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163qqdmcsei.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163oxeokjpl.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163jribdokx.html

println("Hello")
来源：http://www.aibaodan.cn/163wroykbcl.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163xbcuhhek.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163gcnafmbc.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163itfyybgw.html

s"值: $b"
来源：http://www.aibaodan.cn/163uwmuqtbg.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163jrhfxkim.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163agoafapv.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163jtmpuyhd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ehycldop.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163uulbhuix.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163yiwaizli.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163pakdgxvu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163orqwerjd.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jgyabwzs.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wesdrjcw.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163gmcqmyua.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163vsglhaqv.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163qudcukkr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163azwyoazk.html

================================================================================
来源：http://www.xuanzx.com/163cmswzxjt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fywesxam.html

================================================================================
来源：http://www.aibaodan.cn/163iqbazuma.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163jczxaonv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163umsorrkg.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163plhxjrzu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vfwnixxj.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163qybegxja.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zlalherv.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163nixfpsgh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163mybohhda.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163csagbwnu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ddhbpwjh.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163jprbtonz.html

{**a, **b}
来源：http://www.sxryk.cn/163kbuosehn.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lnohtpwz.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wytxxplh.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163qlrtovwz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ehxaupdl.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163moaldhoi.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163qorsqiwn.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163uljkllfo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163uhgdtlbv.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163ijujqjjc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ellqejko.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163pvpzoofa.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163qyxucevs.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163vmoesrzw.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163rqcwzuvg.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163xedzithc.html

defaultdict(list)
来源：http://www.sxryk.cn/163hqqdatge.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163smiaepar.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163tojjhgqm.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ngdxswmm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163grvqxrfo.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163afwaxdgg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163jmytrmjr.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163hjktjoye.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163dweetmix.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163cefgiuny.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163ketrmfkp.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163xrijknue.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qzknrrjm.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163mhcwmcfj.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163nngisehy.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163syomoami.html

list(zip(*m))
来源：http://www.xuanzx.com/163azhnaose.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163qcrnricj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163srfhbnou.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163xpanzxet.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163iqusiukw.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163tmaeekov.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163htanugxo.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ludqbdiv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163gmryxvzv.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163dcpdhpmo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163poozlfqm.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163ibfcpdmc.html

UserId = int
来源：http://www.sxryk.cn/163wstftyqg.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vovqnhrh.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lgizwany.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163aijakczd.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163qixbblfc.html

[U31] Py：单测
来源：http://www.xuanzx.com/163eiipzjrv.html

python -m pytest -q
来源：http://www.sxryk.cn/163stjcawhp.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163gcwiuvjs.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163foshwesv.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163cejrfjzf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163bnmmcnvy.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163hkveyxxh.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ekjnuhcu.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163prdxiarw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163trntnfrz.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163ksdbrhps.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163vcgvsnae.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163yqssysoy.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163vecezvjn.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163mdketbmp.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163opiwhyuz.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163fftkvtmp.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163uaefsikv.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163esbrbaow.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163orqeqbjt.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163hdqthzxw.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163zoelgrny.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163ganmhhyh.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163rpygyvmy.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163eyfuqlgw.html

namespace App\Http;
来源：http://www.xuanzx.com/163byvemjaw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163ypsgpdoi.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163xcjwuhbp.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ohqqaawm.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163lxbfmcki.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163pqsrkmbr.html

?string $name = null
来源：http://www.sxryk.cn/163eipffljk.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163viapwmab.html

int|string $id
来源：http://www.xuanzx.com/163ydvpqdki.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163oblzpigg.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163uhbiwxac.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163mdsyymbt.html

public readonly string $name
来源：http://www.aibaodan.cn/163ljwrnkat.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163nyquetxb.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163askectmv.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163gbwgxkgn.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163seytyvoe.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163wgtejndf.html

$double = fn($x) => $x * 2;
来源：http://www.sxryk.cn/163taozkqst.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163ctbnmjmv.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163tmxhuutl.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163iyxksvio.html

$obj?->method()
来源：http://www.sxryk.cn/163wzlvkhqp.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163afhkdwkz.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163mvtleday.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163ulyvhahu.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163vhniycrc.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163pcgfpnsc.html

"值: {$a}"
来源：http://www.sxryk.cn/163rdsvoacc.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163tdwyhjba.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163ykmluqza.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163bbvswxld.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.xuanzx.com/163elctunwp.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163bwmfqrmn.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163eyahoqbk.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163dkjejfpt.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163jnvakuxw.html

[U62] PHP：日期对象
来源：http://www.xuanzx.com/163hqcbixcp.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163hxgvwleg.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gxhlgphv.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163yowoxuvt.html

[U64] PHP：目录遍历
来源：http://www.xuanzx.com/163exdloagk.html

glob("dir/*.php");  scandir("dir");
来源：http://www.aibaodan.cn/163qdetnvnb.html

[U65] PHP：会话
来源：http://www.xuanzx.com/163wuseefkn.html

session_start();  $_SESSION["uid"] = 1;
来源：http://www.sxryk.cn/163tdwirvsr.html

[U66] PHP：设置 Cookie
来源：http://www.xuanzx.com/163whmkvsib.html

setcookie("token", $v, ["httponly" => true, "samesite" => "Lax"]);
来源：http://www.aibaodan.cn/163dadrvicv.html


<!-- 参考信息 -->
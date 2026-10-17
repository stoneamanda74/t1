外链999!wailian999！

[S35] C++：map
来源：http://www.sxryk.cn/163mvrhsfgg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ymdqsrlp.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163hgojgjmi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163phujrqvi.html

[S37] C++：set
来源：http://www.sxryk.cn/163qpfsdcou.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163fgscgroi.html

[S38] C++：排序
来源：http://www.sxryk.cn/163oyzsuwll.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163fpsxcuri.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ubkrlqgm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163orqvgxvi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163spunuebu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163iritzjor.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nrgugudt.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163odlfjwsa.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163tyvellyo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163tbndpdft.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163yrxieavl.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zhgbdggx.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163xrbyehyd.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jhnfumoi.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163kdipkznw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163lyaoaqvj.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163sjlptukr.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163arlumtwn.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xslgkilb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163jhcozang.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163smesdedg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163woioqdyz.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163azwftskg.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163osrnrjqv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xkfdqdwl.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163lsylbclz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vpbwoqem.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163cvqensze.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mtklezpu.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163attwtyix.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zoyagbge.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163zjxdtclc.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rusddqzn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ukzppjrf.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163irdsencf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163pnfcsztf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163poqvhtos.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163haezjxpn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163badyxgpx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163cpcqhpot.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nuiylvit.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163tdtgtfjr.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163uvdozeuf.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163sxfdruzs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163kurffpax.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163zxebgbaq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163qunphyah.html

================================================================================
来源：http://www.aibaodan.cn/163uovqzmxb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163otgvfqxq.html

================================================================================
来源：http://www.aibaodan.cn/163ijrrtcnk.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kgchxydf.html

println("Hello")
来源：http://www.aibaodan.cn/163jsaocjmh.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163pxgjiimu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ahaauwld.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lhkuqtyu.html

"值: $b"
来源：http://www.aibaodan.cn/163zjetagzl.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163uhzlbqpi.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163pexiawsh.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rvkhobdc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hqvxlmry.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163rpshizjn.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163iscwhtqo.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wpqgyamv.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163tgbcebvn.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163foqrhfgv.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163sqppbtjq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163oyjmeoqx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163qhgvxqss.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163nbblbpuq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ghwqthfw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rnkdcdfc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163tbbjplis.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163koeyocum.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163csxcmasw.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uppxqilw.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163phppdsqg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yooqbjmz.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163yctabgiz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163khcvdbzr.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ngwkugpc.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lnvgxxmo.html

print("Hello")
来源：http://www.xuanzx.com/163vwbpxbqi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163neyxxyks.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163atwjensw.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163flpczdle.html

"值: \(b)"
来源：http://www.xuanzx.com/163okfqbnyl.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163mkxxqhbm.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ysfrncnu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ifhjltjw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163dkxsobnd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163copgyywm.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163vdlrtjtp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jtckndmv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163xyllacmj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163zzsmnvkb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163kehzccgo.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163iqvfsjod.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163auyespzf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163opmgkaxq.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163escjcyyh.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pvhfykjw.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163plfpnild.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163cqzyxtqc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wfhjukxb.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vjspesvo.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ceverpkw.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163gckrruvz.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163zbhwyohv.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zqzjkuwj.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163flwkenpk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ekoqbhcl.html

print("Hello")
来源：http://www.sxryk.cn/163rpwhumxa.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163emzoqcdv.html

local a = 1
来源：http://www.xuanzx.com/163kapdyvzr.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vptedpsp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163bvakwfll.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163onzhyrhb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163mrvjfttv.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163kyagaakv.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163wbseefkg.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163qzezwtkw.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163zvthcuux.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xmwzpsma.html

"a" .. "b"
来源：http://www.aibaodan.cn/163itzhchdp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163sozdxmgh.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rwqnhvcs.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zlyholgb.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163kiqhulse.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ascdtkxn.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cdinvdat.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163kqmkcpjd.html

print "Hello\n";
来源：http://www.xuanzx.com/163opfqorem.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163rxvydlko.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ahlctvgm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163igbfcmux.html

"值: $a"
来源：http://www.sxryk.cn/163tjjxvepx.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163srthqwqa.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hrokwecr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qypvhcvk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163oldjdwoa.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ifgexkcn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ffohgrbu.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163xfdndnvr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163bcwgnqfm.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163derwnjzd.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ykvoeods.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163pernwoqa.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ddkmjlxb.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ojxeftpb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163bqwncjuv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163vuwuldhg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bgxxfozd.html

println("Hello")
来源：http://www.xuanzx.com/163wfgefncv.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163eaksgahq.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ixrfujlv.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163xhuzjdbq.html

s"值: $b"
来源：http://www.sxryk.cn/163onhhgcdd.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163ajragokk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163kwrkafme.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163eezxnbai.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163rjrumrtt.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ymfdxorw.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163vygwgvbl.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163gbiewjog.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163arbkawnu.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163efzpahnd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163lubgwvmr.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163aergyhvc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163siechndb.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163rveogxsp.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163nvmutlsv.html

================================================================================
来源：http://www.sxryk.cn/163lswlptbw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bfxtdaff.html

================================================================================
来源：http://www.aibaodan.cn/163liewpzwu.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hcdwjalh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163bckdkyxw.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163fdrotwxj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163rpavsufj.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163crpdsgcy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vmpwvqhu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163xdnfzirv.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ugkqhpvs.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163eezzldkj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fwnjpuau.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163gkwnieiq.html

{**a, **b}
来源：http://www.aibaodan.cn/163nolrsfdy.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ehxsmqzy.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ejheiopl.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jefpasrd.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163kkgnlgti.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163irwrwlhu.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163inslnfow.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163wevyhhrp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163hgjxvvmk.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163whcqfyzn.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163tgjbwpgi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163terrgqir.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163fsfumeix.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163exyhjitc.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ymsrsphs.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163jvwkbpxw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lguqwbsq.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zvqxoevi.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vbspwvlx.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ettppomc.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163chubijfk.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163zukjumal.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163lajubbtg.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163jxxgaukc.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zstbnryb.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163mbkhfyyk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163fuxkxzqp.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163cccuudan.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163soksqfyp.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163rsnobinr.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163fyumjdjc.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ixlzrmka.html

list(zip(*m))
来源：http://www.sxryk.cn/163jqkitnnz.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lcxoerka.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163ieihlemk.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163cbxhtmcm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ycvurecm.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163iuutcszc.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163sccjnkev.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163patngpnq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163snciorvm.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163ayxtjrma.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163tzbilouf.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163uvfckbsy.html

UserId = int
来源：http://www.sxryk.cn/163rkyqohae.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ufulpoar.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163ldmtybjh.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163ifuwdyvd.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163lmugewko.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163fdqnhfee.html

python -m pytest -q
来源：http://www.xuanzx.com/163stdoeagb.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163gsfosvis.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163pjrsyfea.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163oarchiur.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163mpmgqzpj.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163kgnvamcj.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163fozjckku.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163edyzstfw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163bdbfpahs.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163vxikpcua.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163mymirtzi.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163qqunjhjv.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163mddubufc.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163ttnkpnis.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163yyniubyi.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163mmbxcigq.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163futygzjk.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163jqhycwsf.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163kjbxxqrn.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163zrglnjzv.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163ollxdknb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.sxryk.cn/163wbgnutbj.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163cukqasov.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163ovtefnhu.html

namespace App\Http;
来源：http://www.aibaodan.cn/163kcsmpyxt.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163lxpfjgka.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163oilqmreb.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163koolrdiw.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163uydlkhsd.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163crbxaedt.html

?string $name = null
来源：http://www.xuanzx.com/163uvubybpz.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163yavvrvji.html

int|string $id
来源：http://www.xuanzx.com/163tuysqwer.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163qiavvoed.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163dtcdxsyo.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163xcrvvhnx.html

public readonly string $name
来源：http://www.xuanzx.com/163taiqsyzy.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163ccnjifzr.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163vmrrcrcu.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163eyhsadib.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163rxhqehkw.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163xogamifa.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163ipejxlhq.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163kibccvqs.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163jimoeelr.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163dszmvgli.html

$obj?->method()
来源：http://www.aibaodan.cn/163ebwzoxdl.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163qrsjmtri.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.aibaodan.cn/163pnckryib.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163dxttmbhj.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163itlmvvjx.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163ymaixjnz.html

"值: {$a}"
来源：http://www.aibaodan.cn/163dmovjjnp.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163asrgjwww.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163tsfffhid.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163vtjshvwp.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163xgzlmtef.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163peynvzbf.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163nzluafmw.html


<!-- 参考信息 -->
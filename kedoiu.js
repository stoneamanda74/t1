外链999!wailian999！

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kxolfazk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163zdtuqidc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163uzrrkymj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163kywymwoi.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163kzgzvgul.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ctwhbtoo.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wnvpcoyi.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hgnaafap.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163mpakltgx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163eloenpez.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163viiufdrz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bsirfrcy.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163sykdweak.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163bxhaidkl.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163baxcnuvu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163qxoglyng.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163eggnrhxt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163aofrcibb.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163kzjaxbjg.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163jjrcxofv.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rwzzlhdb.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jyweyogi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163siqahfgz.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ayrncsve.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zmblzivw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163tnsmflkb.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163keoxusek.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163arvdkywq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163uedmijsj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cfgyppto.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ryrafonv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zgugcqki.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163bagpotei.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lsdtrkaf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163glycexuk.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163cqzbimxg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163rwdsiyry.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163prmqzuex.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163zmgwlhly.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ivsrtzwi.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163vqilitct.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163pueelugb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lqckrfia.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163kxycqxgv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163vnkuwuur.html

================================================================================
来源：http://www.xuanzx.com/163vapcnrrj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163zwexfsyc.html

================================================================================
来源：http://www.aibaodan.cn/163yyakqkgs.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163oovvyhyx.html

println("Hello")
来源：http://www.aibaodan.cn/163tzvpetnd.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qwbouhxb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163uqarljgg.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163lfchwwgr.html

"值: $b"
来源：http://www.sxryk.cn/163vpftykqm.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163iedfbgtu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163bzsqleub.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163aepnlors.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163vcaaiorw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163psjdyzaf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163eiabutqw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163tmwcrfno.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163uputgsta.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163oxdyflam.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163phmndtfm.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ragbalou.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163uzflzxfd.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163lpcpxdje.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163hnxrnojk.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qtzxaiao.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163swbbxuci.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163qbbyaxth.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163emhbdfjk.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163bgrcwpya.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dlejkkjs.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163axicrzok.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163eyqvvzgg.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163uxvvclnv.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163oqfbyybo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xbwjqtab.html

print("Hello")
来源：http://www.xuanzx.com/163zzvbsaxd.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163pvzkaicd.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163pvqetwmw.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163usjwnqlg.html

"值: \(b)"
来源：http://www.xuanzx.com/163jvoljbgy.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163rkiqgeyt.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163oxjxkvcz.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163nivaugxr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163olxjfisr.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jtcwcjyh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163whqjkxbj.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jdznaoaw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163jnpzeecd.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163rklpgbci.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163uploemyg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163mqcnxwhj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163ikqalzmr.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ubjuucjt.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163wiungzpb.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ijvskseh.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163pycoyavq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qepcltvj.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163qpnusqzj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163rqtsurpc.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163wriqlvgt.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163pyyrylyl.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163oqumdlmy.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rxxmbwcp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163axgjykey.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163mzmhemkv.html

print("Hello")
来源：http://www.sxryk.cn/163emxrcjpi.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163nigmfflh.html

local a = 1
来源：http://www.xuanzx.com/163mlvsgame.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163lvakphoz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mjcsppld.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163seiebwwg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163grbftwxb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pqsqcbtm.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163jftkgzjx.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163rmlbayfq.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163xezsfdce.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fefzhlom.html

"a" .. "b"
来源：http://www.aibaodan.cn/163eunmkvhz.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163elnokyvz.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rtfeabrt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163uodntczh.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qbabluvh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163kbyiqsgq.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163vqvwmvuy.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163azqhwcud.html

print "Hello\n";
来源：http://www.xuanzx.com/163spnvzsyn.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wjpqfrzk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163jaadeglt.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163mkpqeyfn.html

"值: $a"
来源：http://www.sxryk.cn/163stzycfgz.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ywsspuhz.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qtlsfpts.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163wutcpfck.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163aupymivq.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163evpfjwsl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163jxigpspr.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163llvlpudn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ooibdprm.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163zxkgvxyy.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163odbilykp.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163rmvontuf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163llpjzugj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wzwmzegz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163rmucqrom.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ulnwbzsd.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163goujmilz.html

println("Hello")
来源：http://www.sxryk.cn/163qqaibrfd.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163wbgttiaa.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163kkhgysmz.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163uzfzqomu.html

s"值: $b"
来源：http://www.aibaodan.cn/163tmfcflwg.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163oyjoqdrv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163spkdhagt.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163adrwdotb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163obnqepmd.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163efmlibnt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163ztcexyrb.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163saiswfuj.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163ihlyzfkc.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tnxykpes.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163hjjlxade.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163fdnmpxop.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163sibmjune.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163dweoyujk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163tkspnxuo.html

================================================================================
来源：http://www.aibaodan.cn/163fwkzpdpl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163acmhuhss.html

================================================================================
来源：http://www.aibaodan.cn/163xjubwuwi.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163oufrcjsr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qlvjmqpv.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xifcwkld.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vadwnzsk.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163zohjgshw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qauekzth.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163cxsfebqy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163qmikpmzi.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163tgeaftkr.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dkqhgqdx.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163mkhdfnzg.html

{**a, **b}
来源：http://www.aibaodan.cn/163queaydkn.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163olvofuzh.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163rsdpblnv.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163cddtcrbt.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jkvytoeg.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163ghyviodf.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163krofuxlz.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163iogihnle.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163rpmxumdq.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163boztrloe.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163zwhescgw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163kwrowzrj.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163gqcvzcuw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163bhusczdv.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qxhitrin.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jvgniegg.html

defaultdict(list)
来源：http://www.xuanzx.com/163msajkbcv.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163uogoafkl.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ueyuinsw.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163uwelimdv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163cbdomyti.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163rqqtdylx.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163rfjeeksl.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163ezhileut.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163sjlzlnna.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163saoazsta.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163noiabjbn.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ouraicfn.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163tbotkaws.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163hoayidlo.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163nowwwgqt.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163lqkieiqw.html

list(zip(*m))
来源：http://www.aibaodan.cn/163oqqwrdod.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163yxigvyrq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163jvhimijj.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163foanlppd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163dmgktfwn.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zgnyotho.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163dhqzwzgk.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163rrasspxr.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163cjwloldh.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163gmsktydn.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163sjayiidt.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163wnrsnqjc.html

UserId = int
来源：http://www.sxryk.cn/163oicpmclu.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163itqedjoe.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163swhagizf.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zjgriotg.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ugunfyoz.html

[U31] Py：单测
来源：http://www.sxryk.cn/163tckofecv.html

python -m pytest -q
来源：http://www.aibaodan.cn/163iytlicrf.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163rncdzzgz.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163aycfoiph.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163xhsdtyhb.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163rzaditmr.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163cidzrinq.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163vzdgszsh.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163cpjjwvir.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163rjnpvpdj.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163wxhcnimq.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163mshhaqij.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163jryqixis.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163yeoegzvp.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163llakhcbc.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xjzqxqut.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163nijekshb.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163nkgcekie.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163phcmhssq.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163zvvnbatz.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ptaawyho.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163zgjgczyq.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163tgoqyyuq.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163qoqiyiij.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163yciiowun.html

namespace App\Http;
来源：http://www.xuanzx.com/163kitugsmw.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163xbhqarvt.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163nqxeunfk.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163powevygq.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163khnruqdw.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163xiilthqc.html

?string $name = null
来源：http://www.aibaodan.cn/163qhlzxjoy.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163roxltmyw.html

int|string $id
来源：http://www.aibaodan.cn/163qnxeoarz.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163vbgelbjt.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.xuanzx.com/163bximmiwa.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163eaiwpcaa.html

public readonly string $name
来源：http://www.xuanzx.com/163waoruppm.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163weynvsyq.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163haujusvn.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163zgmubtnc.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163wagrydgo.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163nfsjjwbk.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163vaqnfzvb.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163mnoudtbr.html

$v = $a ?? $b ?? "default";
来源：http://www.sxryk.cn/163ejvccwhg.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163dbkvqtzh.html

$obj?->method()
来源：http://www.sxryk.cn/163azcgoyst.html

[U55] PHP：match 表达式
来源：http://www.aibaodan.cn/163rqtetfxg.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163otdftjpy.html

[U56] PHP：命名参数
来源：http://www.xuanzx.com/163kmjqwrab.html

f(a: 1, b: 2)
来源：http://www.aibaodan.cn/163zbbzurza.html

[U57] PHP：字符串插值
来源：http://www.sxryk.cn/163dtipcphp.html

"值: {$a}"
来源：http://www.aibaodan.cn/163sdrjimrr.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zgiqznmj.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.aibaodan.cn/163edtbrrfn.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163yyeromfx.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163gilwlvbe.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163qwdpcdew.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163kjxltpwt.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163ztmzxxhh.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xlbctmbf.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ghgahhrt.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.aibaodan.cn/163montqxjv.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163gnabkwml.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.aibaodan.cn/163lbwnenuh.html

[U64] PHP：目录遍历
来源：http://www.sxryk.cn/163ypqnrxkf.html

glob("dir/*.php");  scandir("dir");
来源：http://www.sxryk.cn/163mpubggqi.html


<!-- 参考信息 -->
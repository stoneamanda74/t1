外链999!wailian999！

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163yvgwucey.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163btmhjksi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gddwmjpg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wuxcwbws.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163qggdernb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qeabhrku.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jftkidft.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ufxhmdkd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163trllzsdk.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163efackwbk.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nqcjnnag.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163wgheawbq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ncjlhhwb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gaodagzi.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hoqjpykf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xxxgnqjf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163sdnhrvvt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ucmjyrwe.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163karjrmuh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163eutlysaf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163oowfqobr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163nopvtdgm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163jloofild.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163swlwjvgt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163zhvidmha.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wyaopkzc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163jaypteaz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163kltinnnd.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xutfdvcl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163wvduopuw.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163ckbuexjs.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ofpfufhb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163siheevvg.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163zcnhgvud.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wuboetvw.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yxjrpdyq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163jstxbsrh.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163mygxdzid.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163inboopfa.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ynlgjwdd.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nribcjwe.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163fmekzurb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163xmgrmcil.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yutcimer.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bcmwbvro.html

================================================================================
来源：http://www.xuanzx.com/163jpbpajxq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163atevthni.html

================================================================================
来源：http://www.sxryk.cn/163yopydeiv.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bfertckr.html

println("Hello")
来源：http://www.sxryk.cn/163ybibaczz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163awrqhtyt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dmotorei.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fptnwpbf.html

"值: $b"
来源：http://www.sxryk.cn/163cqvoqrac.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nijrphqo.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qmldiyhg.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163dskbvbkd.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163eunosxqa.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163tcudkfvl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163okwrdwyx.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163cpmzjkzj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vqohtvhv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kexdvjkx.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163wsbqmepx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163tnkefpvm.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ugwqjihh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163xnebmzbx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ywenrata.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ehbzcror.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163ophzoeep.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ksqmtykg.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163euyyxpud.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163fongxivj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163yrcwvgpk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163oglsyjbr.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163eqiaxkki.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hmchrcsm.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kvtxokqf.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163mhohejef.html

print("Hello")
来源：http://www.sxryk.cn/163cenvfnrt.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ongqvucs.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163aprnbjkz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163afaujuds.html

"值: \(b)"
来源：http://www.sxryk.cn/163tfjnmhvw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163hqtwmbuv.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163nxkyklvf.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qtomkkdl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163dcapojtn.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163nayzvanq.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ftiyggqr.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163nvvogrtl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163pbioogth.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163nhwsejpe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163pdiphijh.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163tzjyimlg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wkqwdmgc.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163xelnnqee.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163qlymeplq.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ntydxrmz.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163wprzdpve.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163dvfcnifl.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163atthegsp.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163lkzmfehb.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163onmbkgch.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vpqqrwqw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vnvonfbj.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ldjsflcv.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163owpzkitl.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163rmqpkcvi.html

print("Hello")
来源：http://www.aibaodan.cn/163akjnlodf.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163lfhzjevk.html

local a = 1
来源：http://www.sxryk.cn/163wivfpfmx.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163bvofuhha.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mxiahlwz.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163npvnjxen.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lxnvahih.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163dtpbesia.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163eglvtgkq.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163oowetbpr.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163mvupxjke.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163qvvcxwpa.html

"a" .. "b"
来源：http://www.xuanzx.com/163emlxrpwa.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ypajwzsb.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163trqhcepe.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rbgncebt.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163nemoecfe.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ywjwtqbg.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xtehpvim.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ztqgtkqm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163sxsxrwhd.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163nspstlnh.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163dzyuuwuq.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ecgeuhfa.html

"值: $a"
来源：http://www.xuanzx.com/163dxavwxnz.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163thrnqmmn.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wqdeocgc.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163bsscvxxt.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163atmhxjdx.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163bdqhvyrj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163niowlxng.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163qnxpulct.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163kspfxqcz.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163djecvyef.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ghbyowii.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163sapofnrc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163jzyaifzk.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163myifymuq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163pgqvqiev.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163xapyvdfw.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163cbmlffmx.html

println("Hello")
来源：http://www.aibaodan.cn/163tdwpohac.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163rhowzywu.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163okrbaeiq.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163zjaamiev.html

s"值: $b"
来源：http://www.xuanzx.com/163zijzaydc.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163kolkjwpg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163yurswimm.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163bzsizrty.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163qmpnnccp.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163zslzwixh.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163swnyesvn.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163pvdpctdr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vpnyojar.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163opdnymus.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163dvhzvkbt.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dbhvleda.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163wvrzqyyo.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ldwiwica.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163zjgkbznp.html

================================================================================
来源：http://www.sxryk.cn/163gvdhycht.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163sqwfdaip.html

================================================================================
来源：http://www.aibaodan.cn/163fledkruw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163glgphogo.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163gwzmhoat.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163shkuzoyl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163mtmakigg.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163zyxgyxbx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163cvjytjvo.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ukwsqlsl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163kkgkstjb.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zvoslswl.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ryzsupnn.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163lridyobs.html

{**a, **b}
来源：http://www.aibaodan.cn/163miucynow.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ttifaflt.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wjxcylgr.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163xrzvkedn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163sddilfja.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163tkrciiwm.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163uxzjqkfm.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163kzzxiusw.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ffpxlwvx.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163hkxttnyv.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163fwyhdspi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163kwkiecrq.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163qcqbcvnn.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163utnecxwy.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163krkfbmtd.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mmigppny.html

defaultdict(list)
来源：http://www.aibaodan.cn/163inqibbxc.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163fftbujbn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163hryylbya.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163lntzxqdb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163bxkfquwv.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163yrothdzh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163qgegavws.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163dccwtgkr.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qvqxfdxg.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163jreuonaf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163fqysmkcs.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ejmrqxkl.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163moolssui.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ltwfxyte.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vjnqoqba.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163pcoaukpi.html

list(zip(*m))
来源：http://www.aibaodan.cn/163hqeszxdx.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163gnkrnyms.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163rzazybea.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163zeuqhocm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163xvhfxmgk.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163cbymuuod.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163mtfzirdb.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163qyjpqixv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163mcxnkwct.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163elsrtftm.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163duutllyd.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dvepxjoh.html

UserId = int
来源：http://www.sxryk.cn/163udxdyhak.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ywbeygoy.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163zasjcvbc.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163pdtwqdlq.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163pjpxclfn.html

[U31] Py：单测
来源：http://www.xuanzx.com/163oktoyhqs.html

python -m pytest -q
来源：http://www.xuanzx.com/163xkqvjtmd.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163cqskkymi.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163eaqkumif.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163iycpcwah.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163yivqaanc.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163chyzbnbf.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163hloxofyg.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163hjggivsw.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163vvqwevzc.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163rayhzygn.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163dplvbiya.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163cetxpzsa.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163qpcuovjv.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163avvahwso.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163vrdkogmi.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163gdexcmil.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163uahwfcic.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163eeibtnwc.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163jrwnwcmd.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163xumhlfsa.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163uafgubsj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163zmsgjvzd.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163kbtnzrcu.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163lznuugzl.html

namespace App\Http;
来源：http://www.xuanzx.com/163qpfmegvq.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163qbogshea.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163lsvlszfc.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163mhdgxtec.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dwykukjm.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163ysmtgulc.html

?string $name = null
来源：http://www.xuanzx.com/163opymkxgj.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163kuvjofsq.html

int|string $id
来源：http://www.sxryk.cn/163zbbxzjlg.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163yyphetxf.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163fslrsuso.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163gzbkpucy.html

public readonly string $name
来源：http://www.sxryk.cn/163jyjnocqa.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163uqjojffx.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163nirhviqx.html

[U51] PHP：数组解构
来源：http://www.sxryk.cn/163hdwznkxq.html

[$a, $b] = $arr;
来源：http://www.xuanzx.com/163pvvnnfxz.html

[U52] PHP：箭头函数
来源：http://www.aibaodan.cn/163fxwdvamn.html

$double = fn($x) => $x * 2;
来源：http://www.xuanzx.com/163mhiwsnwx.html

[U53] PHP：空合并运算符
来源：http://www.aibaodan.cn/163mzfoevqn.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163cshgjzon.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163hryecrpw.html

$obj?->method()
来源：http://www.sxryk.cn/163pybanzqp.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163gxjfjtig.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163wtnedhgh.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163pyjjexhc.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163xjpwpbtu.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163degnblxb.html

"值: {$a}"
来源：http://www.sxryk.cn/163qhwjscov.html

[U58] PHP：数组三件套
来源：http://www.aibaodan.cn/163ifnsqunc.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.sxryk.cn/163rwssehhn.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163zzztteyb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.sxryk.cn/163fmvrrcrz.html

[U60] PHP：JSON 编解码
来源：http://www.aibaodan.cn/163dcmlnccr.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163ejxynouv.html

[U61] PHP：正则
来源：http://www.aibaodan.cn/163deapgnus.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163uzyevktt.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163rcvflhka.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163bujuodkp.html

[U63] PHP：文件读写
来源：http://www.sxryk.cn/163npcggdgi.html

file_get_contents($f);  file_put_contents($f, $data);
来源：http://www.sxryk.cn/163yetqswta.html

[U64] PHP：目录遍历
来源：http://www.aibaodan.cn/163ydiclrvr.html

glob("dir/*.php");  scandir("dir");
来源：http://www.xuanzx.com/163okxtwsli.html


<!-- 参考信息 -->
外链999!wailian999！

[S37] C++：set
来源：http://www.xuanzx.com/163jxytdivi.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163msaqfwgq.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ifyznpif.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lfwnqpwi.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vnjoiwnc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163tixfirrn.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163gdlgzxom.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163kmrhqddv.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ufbmobqq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163tcziagor.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jjlmjvre.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163tojkszhw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163qykhbcqk.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xiitauzo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163pknhhvsr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sinmvsom.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163xsjhhchv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163wwaghtck.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163boglawpk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163yqnhejsm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163qgjrnyku.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163npljpyvv.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163xxtlwief.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lhxbhdbl.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163codntxcn.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163dkirxiwt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163thngcxlo.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vzlzowyb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rpxgtdje.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163oeawofuq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163nsqoxbyi.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pedoyxsn.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uvslojcp.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163gsqnexcl.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ntewcmxc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zxebyvci.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163dhwwkahj.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163uxalurov.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bqzcmevz.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163qrtwqghl.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163olviweqp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163evkinuxh.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163cwrmsazo.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163msgccyou.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163rhwfuuzj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163bsuqactd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163iurtkhjy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163madjyssw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163lmmpvpmi.html

================================================================================
来源：http://www.xuanzx.com/163yvpboqxr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gkzawvzj.html

================================================================================
来源：http://www.xuanzx.com/163kapgelkx.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lbigbatq.html

println("Hello")
来源：http://www.aibaodan.cn/163nqneretz.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163bmwebxyd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163yozjsxql.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jcmalgxe.html

"值: $b"
来源：http://www.aibaodan.cn/163hmlmafst.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163hnssyhut.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163mrmpjkwk.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ompbqzsg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xmpaafor.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163uycwfieu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ewytalef.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163jasnkviq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qcwanazm.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163tnxxzfcv.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qxzyodxa.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163gfkojcff.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163xaimxxsb.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163xjhazsym.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163jrptyqce.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rneqnxqy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bkbpenfl.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163irwosrny.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163bgxloabd.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163gpxdller.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163sytibudv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163cfcmntnx.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163rypwyypl.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163cmurrqdy.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163fpjsjwwx.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qdariogq.html

print("Hello")
来源：http://www.xuanzx.com/163qxgghghj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163uwigwlch.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ccxiyavt.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163jkhzuwio.html

"值: \(b)"
来源：http://www.sxryk.cn/163dsxebnnc.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163iyljjrky.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163kahmzmtf.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fceeagsu.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163qerxsgmd.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jycrrsex.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163koylzvcy.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163dnrnxtus.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163qyqhbril.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vwhvsexe.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163fiwykrzj.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163iyibyihk.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163omlvlaya.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ejylqrdk.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163khstwjfd.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163zgszlmca.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163arixetfp.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163hxovzjlz.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qfuypnxj.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163kcxejuxh.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163tgjsttms.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hchbfrhw.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163yoiuoago.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163lhidigcb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163pzaxeeuz.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163bwmqplzn.html

print("Hello")
来源：http://www.sxryk.cn/163shokptdv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163zpcqaeox.html

local a = 1
来源：http://www.aibaodan.cn/163ejpqoxir.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163buoichyg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163rinpbjmf.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tcvegjcv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163wknhblai.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163rxebnxpx.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163iopckogh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wptjyoyq.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163lncyzdhi.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163ibsckmow.html

"a" .. "b"
来源：http://www.xuanzx.com/163msbksghk.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xksygejs.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ftplmbmj.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163psvfswld.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163ahcbziyn.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hhbtlhor.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163gkmgpugm.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163fmlroilr.html

print "Hello\n";
来源：http://www.sxryk.cn/163lhuujzsi.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163rmrtifxx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163gpedtpjz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163kvtpszdi.html

"值: $a"
来源：http://www.xuanzx.com/163hxdbncko.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163zpqihudi.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163acakpthc.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163gzchveml.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163evgsjhjr.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wmkxvvir.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163nfzlphod.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ofyojmfn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163yclxaanb.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163yzjevnjl.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163hqclzwvy.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163aklmkbzh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dddvgruw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163rjxqwxmk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rvcehjri.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ouawlkoe.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lvnqxabe.html

println("Hello")
来源：http://www.sxryk.cn/163eckrpaqh.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163xxtvadzv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qofjaksb.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163mciuluek.html

s"值: $b"
来源：http://www.sxryk.cn/163lobckpnq.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163kasqqkyk.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163oujceque.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ycpcziew.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163pfsnxups.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163uvnexxcd.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163qgsnwhjy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163toybhhgv.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163gltmuymk.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ijxtqxig.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163jdbttqte.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163befcagjz.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163cketboxr.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163jcnwsazm.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163pqiczvjt.html

================================================================================
来源：http://www.sxryk.cn/163mkebwzgj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ofnfzjqo.html

================================================================================
来源：http://www.sxryk.cn/163ihecdtyt.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lbdqmrho.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ecotveqc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163mhlkcdfx.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163epiivpjh.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163nqlhuqla.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163psksdftg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163mocfdspx.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ojugffte.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163hwjamcan.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163kjigzxpa.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163efkxqchk.html

{**a, **b}
来源：http://www.xuanzx.com/163klvbmqqc.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163imvmlafg.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163poihsyhr.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163imgziiod.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163radouzlr.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163hjabtpuo.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163opphqytv.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163uslypsyo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163eaxehgrs.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163gyeplzok.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163euskewqk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163hgziwchc.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163hkbgriut.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163ofmeliof.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163otonuofe.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163tzsvkkjr.html

defaultdict(list)
来源：http://www.sxryk.cn/163gzghezgn.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163uucywdvh.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163oykchbtb.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163oeddkkfa.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163zhrbuxen.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163iakjznju.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163nzughbun.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163tfhyeicb.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qppjcxab.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163destyedt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163qcgbgpbp.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163mxddojli.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163huercpul.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163shccixgd.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163apywzzjx.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vfvmijex.html

list(zip(*m))
来源：http://www.sxryk.cn/163zoqlddio.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ehrxfuuz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163ttzkjdhn.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163bwjxoujr.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163uordfitm.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163jaqfzeew.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163hexpgtbk.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163kujdogfd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163eazxxlhs.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163kiqtuutv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163hoknfiem.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163rpyijrcq.html

UserId = int
来源：http://www.aibaodan.cn/163kyecdqlg.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163qnlntqtg.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163axpexniz.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163pcguwwjn.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163sqgbwltq.html

[U31] Py：单测
来源：http://www.xuanzx.com/163cxignssx.html

python -m pytest -q
来源：http://www.aibaodan.cn/163okigjemq.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163naadzpdl.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163vwzmviro.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163emjfkslp.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163igplhsat.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163psnetxri.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163ezcmmqae.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163hipjxkfd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163qdejnhvb.html

[U36] Py：定时任务
来源：http://www.aibaodan.cn/163vqsliuvn.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163zkjgprpr.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163yudgbqtg.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163iqtpyjqm.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163buuswuol.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163hjplbsdy.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163qkumukta.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163zbslwjyb.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163xqubkuoy.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163fmctlarv.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163wunecxqg.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ymiqhmfk.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163sodaancf.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163hbluhqvm.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163rwnmfduh.html

namespace App\Http;
来源：http://www.sxryk.cn/163pkinkrxb.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163hercqjbd.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163aucjeavt.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163mgdqhduf.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163dekfdfsa.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163vnoqejgw.html

?string $name = null
来源：http://www.xuanzx.com/163dvtrclvk.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163lczwxtiw.html

int|string $id
来源：http://www.sxryk.cn/163mgjuotkg.html

[U48] PHP：纯枚举
来源：http://www.aibaodan.cn/163zwtaufde.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163ilgcpptd.html

[U49] PHP：只读属性
来源：http://www.xuanzx.com/163mshqmeyb.html

public readonly string $name
来源：http://www.xuanzx.com/163xzmncvuo.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163mqakiper.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163comwfcpf.html

[U51] PHP：数组解构
来源：http://www.aibaodan.cn/163jredlegw.html

[$a, $b] = $arr;
来源：http://www.sxryk.cn/163enrrcdto.html

[U52] PHP：箭头函数
来源：http://www.xuanzx.com/163omunnapv.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163tltbarav.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163yzoxbolj.html

$v = $a ?? $b ?? "default";
来源：http://www.aibaodan.cn/163tftefaib.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163grfzldat.html

$obj?->method()
来源：http://www.sxryk.cn/163iqalwkgj.html

[U55] PHP：match 表达式
来源：http://www.xuanzx.com/163zvpxhfjl.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.sxryk.cn/163bhmmfkbj.html

[U56] PHP：命名参数
来源：http://www.sxryk.cn/163cabbocgh.html

f(a: 1, b: 2)
来源：http://www.xuanzx.com/163pquqizwg.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163vkhkmpar.html

"值: {$a}"
来源：http://www.xuanzx.com/163crbevziw.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163zpizhhpp.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163mzthldjb.html

[U59] PHP：自定义排序
来源：http://www.aibaodan.cn/163aacthumb.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163sflmbbue.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163kklfgexe.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.sxryk.cn/163ybpitbmq.html

[U61] PHP：正则
来源：http://www.sxryk.cn/163bcanejsx.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gavjnzka.html

[U62] PHP：日期对象
来源：http://www.aibaodan.cn/163ahblzzlj.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163tlhclejt.html


<!-- 参考信息 -->
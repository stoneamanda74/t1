外链999!wailian999！

[S37] C++：set
来源：http://www.aibaodan.cn/163xwdwycru.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163spontaqz.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gomzqdzv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163riwhxxyh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163muhnycis.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163yuthjhrb.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ppkdhhgx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163iphfzmhg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ppqpbgjg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163rxmtwhtt.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163twtprnhz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jtwwcqpw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ebezcrlx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163wlfojvwk.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163xhwxgmtq.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qvouuxws.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163lpjuduzo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163jrvkmiux.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163pfotulfe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fouawmwq.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163goemwnmi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163hwpeddhe.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163nicoggvs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163udmsrlqt.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163cqwnplnf.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ojnytofy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ujjomyap.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163qhsnwzrv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163rjllqzmx.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163egmjrjnj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163yyrgxrpd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163kzpuvefw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163clptgpkm.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163toprlfud.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163axlhfqjq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zztspkil.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xvrrzrsb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163dcjvowwv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163kksqcbeg.html

[S56] C++：optional
来源：http://www.sxryk.cn/163wvkfznsq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163lcqqvxmk.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gprjhwbt.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163lklniqrv.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jjdmzltl.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163cjxwfins.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163jszwnitm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163vkaknrin.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163teuybfmq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163adfnulen.html

================================================================================
来源：http://www.xuanzx.com/163mfxiqwmp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163otdfopwu.html

================================================================================
来源：http://www.xuanzx.com/163djkugpuj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163oamfznyb.html

println("Hello")
来源：http://www.aibaodan.cn/163vobtncfc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163fzljyhgi.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ikxtedur.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vlpoihll.html

"值: $b"
来源：http://www.aibaodan.cn/163natqfhpg.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163yexvwbco.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163maiivpaj.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163wqqnrnwz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163cforlwbf.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163kulkegab.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163stpnpubx.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bxehalql.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163qzuhsyqq.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163hzqptkqd.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163jtwgjbwi.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qtraqxjc.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163heatyfhb.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163yexviniz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163ngfiiioi.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163cbswpruv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ncopdqax.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163btejhzaj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ujaotqok.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163yxptnqqc.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163sebjdruh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zraageup.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163andwqxqb.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163cjzcjmny.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qpqyfsqx.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163yybrtzxv.html

print("Hello")
来源：http://www.sxryk.cn/163vkeecbot.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163pwodhghb.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163wmqdfieo.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163wcwnxuli.html

"值: \(b)"
来源：http://www.aibaodan.cn/163gicdduma.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vvinuens.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lbxfxaau.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163odonslmp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bfolfukr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163bdvquxrd.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163kvmskrhs.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163wmsivgcl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163whzltppu.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163oiluwnng.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zwkrapwx.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163lauxkloz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163wqqnkimb.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163wuvchahn.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ytitiser.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163agxkjwdr.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163ipmuaiob.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163lozcaicf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163kwkxmgqh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163felbnaia.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163gehqznks.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163vpkamgns.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163idneetyo.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163jpdpooeh.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163bpdqwuyk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163scaczens.html

print("Hello")
来源：http://www.xuanzx.com/163opliczir.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hthxivek.html

local a = 1
来源：http://www.aibaodan.cn/163xrimqwne.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163jhlwywfd.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163nirtcrdz.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gmkonxxj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qxxceakr.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ydsfrqlj.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163orszztoa.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163qfdmrkxf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163sgfcezom.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fahfcvrz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163eygqgsuc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163lencjrmn.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163viykomnl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163uuekhjtx.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163nbgamlwy.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163ktisrreq.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ksvmynbw.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163cwligjxb.html

print "Hello\n";
来源：http://www.sxryk.cn/163akherylu.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163xfozfefa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wqtijnxz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163akynqdhh.html

"值: $a"
来源：http://www.xuanzx.com/163pficukfu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163pznhyfuw.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163xnftkeav.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ihlrfxuz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163zrhutsxv.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163hkbeollw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163abzltedi.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163pznqndce.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163erwazgsa.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163bpsgwuks.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ikyjkmog.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163jvzlcfto.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163aaemfyfi.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163shbipcas.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ciuqgkcl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163zizsmoop.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163cfqslgyb.html

println("Hello")
来源：http://www.sxryk.cn/163bgyppmdn.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vgrnglbo.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163uitovbxt.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163rmfwmvdh.html

s"值: $b"
来源：http://www.sxryk.cn/163caerijlp.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163swxfmcux.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163aknolzmc.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163zwugiokg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tkpnlspa.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163vaiczvmi.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163klvcpjpb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163eklbmoit.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163agqcwjbi.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qtxzrger.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163zqkvmwbi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kwfyrpiv.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163oitqkdxp.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163bvoodsim.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163vvkzgdjk.html

================================================================================
来源：http://www.aibaodan.cn/163mfqlgusu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rfizkkkw.html

================================================================================
来源：http://www.aibaodan.cn/163skxqjone.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ofuxardb.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163hmueklcc.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163limjyxad.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163xkrfxtxs.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163rkybgdwa.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ueratciy.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163ugtbtcmy.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163dneaavjn.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163rnormusl.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ehqghqvt.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163arsenklr.html

{**a, **b}
来源：http://www.sxryk.cn/163sxylmgaa.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ypkzfpeg.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163syikzxan.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163lupuaerx.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jcgqiewd.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163kblbvxzx.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ifpljxii.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163slwxbzgu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163kmzzcaam.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163bwdwkiwz.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163txazwfbk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163wfpbytmm.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163kdmbcttx.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zyieczaz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163qjdhlzfd.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163lrrpzeqc.html

defaultdict(list)
来源：http://www.xuanzx.com/163xrtrrjen.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163lemdjphd.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163sakukvls.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163qvyelguy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163vkvydmaq.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kjetrjvg.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163ikglnhsg.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163hdrrvzly.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163bbvlegyo.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163upadljgx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163skxcpive.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163jyweritr.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163epmvfyds.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163elrtzmvr.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163mstcgiei.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163zaqqxyyo.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qxygnofr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163ccobbsfm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163wygyfqzx.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163gcygihwn.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163ulxlqttr.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163ehhceanc.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163nalfpyvk.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163jiffgojx.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163vpzfxzbc.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163axlbaisc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ggmdnsdg.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ugoiynjr.html

UserId = int
来源：http://www.aibaodan.cn/163uvglvaho.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163vyvppkpr.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163nvdvhoep.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ccmuhnmg.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163eqpwgzqm.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vaqjpsmo.html

python -m pytest -q
来源：http://www.xuanzx.com/163rsrgnxaw.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163jahujqct.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163bjjdtnes.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163wpioimag.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163nimzenze.html

[U34] Py：判断编码
来源：http://www.sxryk.cn/163sqijddue.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ngcqzyqs.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163zbimlblo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163gpqnavnf.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163sbkogahr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163mgzxlwvz.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163oyrroiem.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163fafoyfrt.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163zjbwhotf.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ehtgyxoz.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163vphzzcyg.html

sys.stdout.isatty()
来源：http://www.xuanzx.com/163mltvzexi.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163crxfkqdb.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163bpzvorqq.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163diajwdai.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163tfhejdsb.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163bjbtqjsg.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163foudoeoc.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163whietpcq.html

namespace App\Http;
来源：http://www.aibaodan.cn/163rfvpceii.html

[U44] PHP：开启严格类型
来源：http://www.aibaodan.cn/163cfapriht.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163axftpgtx.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163ocffswii.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163fwzelagn.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163wpcqfced.html

?string $name = null
来源：http://www.aibaodan.cn/163mgfwjach.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163iptigirc.html

int|string $id
来源：http://www.sxryk.cn/163nnqpmwjw.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163cwreeblw.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163wyetfqrv.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163jaezszii.html

public readonly string $name
来源：http://www.sxryk.cn/163tvbhjrqr.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163rqslbzlx.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163mnujjpdb.html

[U51] PHP：数组解构
来源：http://www.xuanzx.com/163wyfqnhte.html

[$a, $b] = $arr;
来源：http://www.aibaodan.cn/163oncafypo.html

[U52] PHP：箭头函数
来源：http://www.sxryk.cn/163shbnechm.html

$double = fn($x) => $x * 2;
来源：http://www.aibaodan.cn/163rjdpvwoz.html

[U53] PHP：空合并运算符
来源：http://www.sxryk.cn/163dhsinlxb.html

$v = $a ?? $b ?? "default";
来源：http://www.xuanzx.com/163mityqcug.html

[U54] PHP：空安全调用
来源：http://www.sxryk.cn/163nnsgrwyn.html

$obj?->method()
来源：http://www.xuanzx.com/163wllkwpip.html

[U55] PHP：match 表达式
来源：http://www.sxryk.cn/163zzbqznhd.html

$s = match($x) { 1 => "一", default => "其他" };
来源：http://www.xuanzx.com/163vuzwpwxp.html

[U56] PHP：命名参数
来源：http://www.aibaodan.cn/163pariehij.html

f(a: 1, b: 2)
来源：http://www.sxryk.cn/163ehvmfltv.html

[U57] PHP：字符串插值
来源：http://www.aibaodan.cn/163ubieyynz.html

"值: {$a}"
来源：http://www.sxryk.cn/163zeprstka.html

[U58] PHP：数组三件套
来源：http://www.xuanzx.com/163kiryjidu.html

array_map($f, $a);  array_filter($a, $f);  array_reduce($a, $f, 0);
来源：http://www.xuanzx.com/163ghcteffo.html

[U59] PHP：自定义排序
来源：http://www.sxryk.cn/163bonjwgqz.html

usort($arr, fn($a, $b) => $a["age"] <=> $b["age"]);
来源：http://www.aibaodan.cn/163juokubxr.html

[U60] PHP：JSON 编解码
来源：http://www.xuanzx.com/163iykaabiv.html

json_encode($d, JSON_UNESCAPED_UNICODE);  json_decode($s, true);
来源：http://www.aibaodan.cn/163noepgpln.html

[U61] PHP：正则
来源：http://www.xuanzx.com/163grhokluk.html

preg_match('/(\d+)/', $s, $m);  preg_replace('/\d+/', '#', $s);
来源：http://www.xuanzx.com/163gxakngxp.html

[U62] PHP：日期对象
来源：http://www.sxryk.cn/163armdtxew.html

(new DateTimeImmutable())->format("Y-m-d");
来源：http://www.sxryk.cn/163kanciyrd.html


<!-- 参考信息 -->
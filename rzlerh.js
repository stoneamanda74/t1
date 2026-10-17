外链999!wailian999！

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qhquoama.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163lxsfdkpv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163buovxokk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163uepmdjck.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163twcccwka.html

[S23] C：随机数
来源：http://www.sxryk.cn/163csjexdrq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zelgqscb.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163pplbughm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163iufgmkaq.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163pqaaevcb.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fcgymtyw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163yuenndho.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dvfruxzj.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163lvfkdeyt.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163gmkegtur.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ajplhcqp.html

static int counter = 0;
来源：http://www.xuanzx.com/163wytpwqbc.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163lvptdnmk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163mgddjqsc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zmewfazi.html

#ifndef X_H
来源：http://www.xuanzx.com/163vgiosagk.html

#define X_H
来源：http://www.xuanzx.com/163ieaucfok.html

#endif
来源：http://www.sxryk.cn/163vadzrxpy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163eeerzbhv.html

#include <iostream>
来源：http://www.xuanzx.com/163ueixpukc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163dusjaktr.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wlspgutw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gxsuksic.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hgbakkle.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163oujbttzu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163yuuiwrme.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ofkbwluw.html

[S35] C++：map
来源：http://www.xuanzx.com/163zbiuqxuf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163actgvsmo.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wchhumak.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163evrrzphr.html

[S37] C++：set
来源：http://www.sxryk.cn/163dgfdffra.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163vvdobyvl.html

[S38] C++：排序
来源：http://www.sxryk.cn/163yhhyspjo.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mjzqjhls.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kbnomqwm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163aqprsudz.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ynketdzq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163wqzcppak.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163uoxtsztr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163oqakbbdo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163chmkdlgx.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zsdaitua.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163nqngbiay.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163gyibjrdp.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163dkqrgpkb.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163cxbvttvq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pqthzabx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163zkfagswy.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ymyerail.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163btshzdrb.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163azbgjcjb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163otaotxlj.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ixntttln.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163kjtstbkt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163arlvjfas.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163kmumnjqb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163uphsmknf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163midongyv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163uzhxjavl.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jorkvbas.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163iilpwrfx.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163tfcaawky.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zwhgblxc.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fttvicbw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dtxgxndd.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163edaskaou.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163qgykstis.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rgaidkgd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qdeyznjb.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rhqouvhv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ifqhgtpo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163sxgeltik.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163yasqpyrp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163dgwxfmbc.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163mwwwalgw.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163rlnjhakp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163wdqmhqqt.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163sxxracdx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fdtbybhy.html

================================================================================
来源：http://www.aibaodan.cn/163axzkbixk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163melgphjo.html

================================================================================
来源：http://www.aibaodan.cn/163kdenlfub.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163gnehgksv.html

println("Hello")
来源：http://www.aibaodan.cn/163txpticum.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163iqmswtaz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163qsjcyzwz.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163gkyugumq.html

"值: $b"
来源：http://www.aibaodan.cn/163bbjqesvv.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xrgocqol.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163eyvbqdme.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163qlquahvi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163iigdelhu.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163amowpzyk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163tbmkvhnn.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163dmnbefqi.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163jeeoqoqw.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163bqsddnhe.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lvzoxdiw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163llpmmqqu.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163cgfwpwrh.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163uyopnkxg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163jvldhvsy.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163lmogipea.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163kieybcpu.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wtfhkrbr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163onwufqnt.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163oxqvmwmh.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163krlavkly.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163fgaqmuqt.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163elvcfxvv.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163hxkmbpxg.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163walhafsb.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163xbcupcbh.html

print("Hello")
来源：http://www.sxryk.cn/163nicmdumq.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163wsvpcwdi.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163slokjuit.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163feopemlb.html

"值: \(b)"
来源：http://www.sxryk.cn/163psgvnjer.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163znjsyrnn.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163rhswvzpj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163hvrorgri.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163veehvkau.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kqxhpvma.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163fyolzsvw.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ooaeyvpa.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mitwmgpw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jpjfjxsr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bonjoops.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pagwkthn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163dkaxtufh.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163lntekcau.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lfjkhvdp.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163dbloaoey.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163lpmyeron.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163uasuwgtq.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163zcgxziob.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163gsyqmban.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163sdesrvog.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163upkunjnb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ezkwjynu.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fpenjeon.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163clwtiuif.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nlxrfrzs.html

print("Hello")
来源：http://www.aibaodan.cn/163bnlmrfjb.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163xjdaemae.html

local a = 1
来源：http://www.xuanzx.com/163udrqfgaw.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163lpynzugy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163cbvahipp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163jkgytttk.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163jhzfmffo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163hlnlrdte.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163aoonnjnl.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163ihjqjjvo.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163mqhrumqs.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fwkuvocp.html

"a" .. "b"
来源：http://www.sxryk.cn/163iwkmbnui.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163uzekpzfo.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163iqpdpohd.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163gcnkleup.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ybloqruj.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163vugzyapk.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gktkaoxe.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163dfglqyyf.html

print "Hello\n";
来源：http://www.sxryk.cn/163pedbuxpg.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mydufqsa.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xqvahgss.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163mutfxesh.html

"值: $a"
来源：http://www.sxryk.cn/163nermzxyv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163udzpowdm.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163xbyhioie.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163btzktysm.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ddctuctx.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163uubiqmpa.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163femenekh.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163rrbozagf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163yvmngonx.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ccxfpedy.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163garcmyrv.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163sglufvcm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zsltmfzi.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163imdvgxvy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163pddvmxqf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163uyzadlyh.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163bfnfbovx.html

println("Hello")
来源：http://www.sxryk.cn/163bhhaulcp.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163fmhjwvbw.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163qpfsrggn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ftiqwpiq.html

s"值: $b"
来源：http://www.xuanzx.com/163ymgguvth.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ygflqoqz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dhlyvfeu.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163oplopvbc.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163vbqmktzq.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163kwutmbvt.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163coozezwq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163susvyksu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vjezmmyp.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163whjalaak.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163wbdtdtvk.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163dtzanxsu.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163olavzskj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163sivfkwzr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163dkrydkwo.html

================================================================================
来源：http://www.xuanzx.com/163orqykjbt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163tsrkactt.html

================================================================================
来源：http://www.sxryk.cn/163delzfahn.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163fbkhmskm.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163dhtqsivd.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163gyulfoso.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163juslvlzn.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ktsyqcao.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163qdpmgzva.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163qjdbdkad.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163srfrblkm.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xozkfktz.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163zcrjlobi.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163nxsnsybj.html

{**a, **b}
来源：http://www.sxryk.cn/163zsnmijej.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163fvfuycde.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163syloqtvj.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163gncgeabp.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163srkubdvb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163guiemeqh.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ylrsldft.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163novtmuiv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163etlblpeq.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163mgcnkgqq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163aehwrpsn.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163mpulbxkw.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163kppiqhcu.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163orgzrjga.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vrqflgfa.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mbcgtuxz.html

defaultdict(list)
来源：http://www.xuanzx.com/163jgtaujvb.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163cjqqqtwg.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163cpdwiimh.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163fafmzfbb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163nwnbkiok.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163fmavyspd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163mouxofri.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163qneiczzw.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163dvynwykn.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163nohmrxna.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163mgsouyup.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163hpnywxuu.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163zbwbncey.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163bwlsrfjd.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ivkszkvu.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163bwbugdjs.html

list(zip(*m))
来源：http://www.sxryk.cn/163ipyxlvjz.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ysmmwkvn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163qszpgqer.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163achbdism.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163okxnwnej.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tjfiegni.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163dwsvhwau.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163nolaqtuo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163fqxdabml.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163egykehlb.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163yevwmbhl.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163oirzyntm.html

UserId = int
来源：http://www.aibaodan.cn/163tvaqtfyv.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163fshecqpu.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163khmawfpg.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163ukqidpme.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163cufnilgs.html

[U31] Py：单测
来源：http://www.sxryk.cn/163rilwtqhn.html

python -m pytest -q
来源：http://www.xuanzx.com/163rwklnfvr.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163tafgeonr.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163dvrrmifd.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163rmvhgeda.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163wcgkhpnx.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163xtgljphm.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163iqvubfbb.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163dqctckpd.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163gvmqawvc.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163gigvmbvm.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163shedvtrf.html

[U37] Py：读写 Excel
来源：http://www.xuanzx.com/163diakcsso.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163bqmtneig.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163hlxepcvb.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163arlrqqsv.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163dbenmxmj.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163dtrnhmba.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163jxrftlnq.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163hkojbweb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163ysajaxro.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163tnfjhhff.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163fiipcuau.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163hbechbuu.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163aeovubai.html

namespace App\Http;
来源：http://www.xuanzx.com/163ttbmhzwl.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163dtjpofrh.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163loohjpso.html


<!-- 参考信息 -->
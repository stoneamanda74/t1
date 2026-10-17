外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163divxtxwj.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163sddiaxdj.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fvrodbwr.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163xrxzkkgz.html

static int counter = 0;
来源：http://www.sxryk.cn/163mceiopbh.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qxefcoyc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163pctrzwae.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ddbulcgx.html

#ifndef X_H
来源：http://www.xuanzx.com/163znucpldp.html

#define X_H
来源：http://www.sxryk.cn/163paamyhlr.html

#endif
来源：http://www.xuanzx.com/163njxjztus.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163aiinfmqr.html

#include <iostream>
来源：http://www.aibaodan.cn/163tnxegans.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xtajdyqg.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163tzebsqoh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pzmfpizn.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163abjzqrzr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163yycflfvp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rwrpnbhm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qlvihmdg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163iytvjiub.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163akkmzliu.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163copjlzko.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ydqhokzo.html

[S37] C++：set
来源：http://www.sxryk.cn/163vdwdnbqf.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hhtkqrpz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163anwlntrl.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163zpuxapck.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mdvmfxkd.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mpygcpga.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jsrwzykm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163lwrugvex.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qwihucnm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163wsqjrvxb.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163mxgpxokd.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163yvbkqmqz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163oebviphw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163eeyfhztp.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wkdfaxrx.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163jtzpvlzj.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163vzliuebb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163krhjudhw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163gthznqpw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zadohklo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163higxlhrj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dbpfomer.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163jrbfafpx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xcxwxbgu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163yuflbtva.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163uapavdoe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163fmmazqoc.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163mxtfqsvc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163nmgmeggs.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ysqdhmwf.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vewjgjwc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163rshdbpdb.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ykvzdnbs.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163qdevovvs.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163tbthbotm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163rbqhugas.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163pfoindee.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wkuawcig.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nzczrout.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tyipbjnw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ereascke.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163nsmjtmkx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nhvlagvu.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jenkizag.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163hpbawxhz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163sxcfdfzx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163umpwqfnk.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163chbtrgdc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163gqqudaxi.html

================================================================================
来源：http://www.aibaodan.cn/163kopecmwu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wgrlskuj.html

================================================================================
来源：http://www.aibaodan.cn/163lfmdudbk.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163vladxsrx.html

println("Hello")
来源：http://www.aibaodan.cn/163jmjlmrlr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163zpjjqlmw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163tosdcptt.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163awzmcifc.html

"值: $b"
来源：http://www.aibaodan.cn/163lhbfslsn.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163acnzxtri.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rlferudo.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lpnxwkdp.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hjpiaerl.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163isqpsbiu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ropzzexn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163odpacthg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163zxlfwwpp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163omyumawj.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wpivyofj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lvttawfh.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dhpwdheb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163rpgsdrkb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163pfwmufip.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163whypbdsh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163gqnhtxtg.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163lvpzlmxq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ugidpowr.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163cnuisqfr.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163klfvvyof.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gswzcffi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163uytrdopt.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163nyeqtpsi.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163prngcgva.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163gatubigy.html

print("Hello")
来源：http://www.aibaodan.cn/163hlxtkuyh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163yvntkshu.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163lwmmadph.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bmoehmny.html

"值: \(b)"
来源：http://www.xuanzx.com/163cnbykfob.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163rlyfatrd.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ytqsksjx.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163bdfwsuoq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163nbghjfsy.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163jjdepxyw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163pjtfnjfw.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163lhvslaau.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163gutltyhs.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163retzkqap.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163lallnxmu.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163pqkgsgdg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163mmphpvlk.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163pbztvhww.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163pphflmvi.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163igtundnv.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163acdpbhlm.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163fgadokso.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163ddkzjbom.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163zotkfiew.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163gloqhqdv.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163jpkqoqjc.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ckifoasu.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163nhvfkjom.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163btcmzwnf.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163dsjklcqh.html

print("Hello")
来源：http://www.sxryk.cn/163thzizmuh.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163eoelzrxw.html

local a = 1
来源：http://www.sxryk.cn/163zbwtvfks.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163fhzgmtfu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163tgysyuol.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jwjeccvh.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ftdzowhx.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ynlclqde.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ckimyiiv.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163xhsxbeac.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ccttdsob.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163vlnvtaov.html

"a" .. "b"
来源：http://www.sxryk.cn/163crpinrit.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163rvdsyjpn.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163lfnkvftl.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163epvrpjgr.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ffjmmelh.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163zlxryduu.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163jnzgcpyo.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163pwlbrpgw.html

print "Hello\n";
来源：http://www.xuanzx.com/163pdvdojyb.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163shfhnjgk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163wegupzdx.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163rubxipjw.html

"值: $a"
来源：http://www.aibaodan.cn/163derrydks.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163hczjyvfc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ftzopilq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163lhahqhyh.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163chstcdii.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wifeteoq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ifakhzqw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163wsbbzjqo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163jjmbcitg.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ygtbpcbl.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gmvarvnd.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163tjthxrwm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wpwnnxii.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163qusvlzmk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rmzrwttu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163hyozzjgb.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163epxplota.html

println("Hello")
来源：http://www.sxryk.cn/163uwkviwpi.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163fjwyozwo.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163jwujghkh.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163utounsqw.html

s"值: $b"
来源：http://www.xuanzx.com/163mchjfvri.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163oovzieib.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163ondyyrjh.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vbrsdxog.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ozxpaxyp.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163bvzaazqn.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163itvhmnpo.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163lodzagjd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rmvgukap.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163hwhchgfn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163dpcciqat.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163vssaidoz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163lkbsosza.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163pulhlmjv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163jnnqhlwx.html

================================================================================
来源：http://www.aibaodan.cn/163tcwphwlt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163aoudnonv.html

================================================================================
来源：http://www.aibaodan.cn/163hkvachwr.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163nsmzdmpa.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163gpgkmqih.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163neereojw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163jrqctdgl.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163aovslhyq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163kaeyskth.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163bbstnbmt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163kyyxgvrc.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163txjwoxhv.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163gpuarkpl.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163iorlzkbe.html

{**a, **b}
来源：http://www.xuanzx.com/163lfsjagje.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163eyvmofad.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ggzlevbk.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163szgzcrjf.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163lsbgvgvz.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163gsjewtwv.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163isvltupm.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163tubrmfee.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163gkvuyxul.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163vwicrehj.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163nznpwjsh.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163cvdywhge.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163msssjeqk.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163vjajxxpn.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163nowrueha.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163wmrgehrl.html

defaultdict(list)
来源：http://www.aibaodan.cn/163ijsfbgkg.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163pzghjdsy.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163rsbwdwkg.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163oheyghik.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ecusaiaw.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cmcjeyir.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163jpybikqt.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163pbrrlztp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163sogzawgt.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ofleszzb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xdxfqlzw.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163chppxbel.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163akvcvxjq.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163eisqsiuo.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ewprowfu.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163kkghfube.html

list(zip(*m))
来源：http://www.xuanzx.com/163ulndddrs.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163zmrbbfkz.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163irhbfrsm.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ewawqjmx.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163jlozrxzx.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zzklnmmj.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163yvrxwdml.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163vcukmwis.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163fawbclet.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163cllskqdc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163ofthvrkj.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163azeupgww.html

UserId = int
来源：http://www.sxryk.cn/163dgcnpfmx.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163oimiesju.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163jeplwvdk.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163clivacxg.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163qkouslgs.html

[U31] Py：单测
来源：http://www.xuanzx.com/163mumrsonx.html

python -m pytest -q
来源：http://www.sxryk.cn/163gxpnixgh.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163mtbgbgbf.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163jbryhrtl.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163dllcbgnf.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163yvocoqrq.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163eqklipfs.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163tdgeyuaz.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163vzdblfml.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163uvamnkmr.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163xkhqifqm.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163dsozevuz.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163gfiuvdgm.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163wzakleoj.html

[U38] Py：获取脚本所在目录
来源：http://www.xuanzx.com/163jtpihdfo.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163gbyvkpcu.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163vuvzygqv.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163uiwzizad.html

[U40] Py：打印到标准错误
来源：http://www.sxryk.cn/163iuzcpmko.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163gnaxbonj.html

[U41] PHP：初始化 Composer 项目
来源：http://www.xuanzx.com/163hgdsjavy.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.sxryk.cn/163mzsqucoj.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163xbocyqba.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163ykvwrreq.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163eiykdajd.html

namespace App\Http;
来源：http://www.xuanzx.com/163vxkwqppp.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163nfxualan.html

declare(strict_types=1);
来源：http://www.sxryk.cn/163zuplfeep.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163aokygjtv.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vbossskh.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163poixagws.html

?string $name = null
来源：http://www.sxryk.cn/163evducgwt.html

[U47] PHP：联合类型
来源：http://www.aibaodan.cn/163prapnaoc.html

int|string $id
来源：http://www.aibaodan.cn/163hcfvifar.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163asfdftzo.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.sxryk.cn/163cztecsso.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163ikotgcly.html

public readonly string $name
来源：http://www.xuanzx.com/163gddtqeed.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163pclintah.html

public function __construct(private int $id) {}
来源：http://www.sxryk.cn/163tbozwvub.html


<!-- 参考信息 -->
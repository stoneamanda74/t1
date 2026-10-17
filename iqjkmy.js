外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163sbdpacvs.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163jtsznduo.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ufkfmefi.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163srkijkaf.html

static int counter = 0;
来源：http://www.xuanzx.com/163qmghyejz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163gfejoljf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163hapsclgz.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lnmqmcxi.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ervljgeu.html

#define X_H
来源：http://www.xuanzx.com/163lemldevn.html

#endif
来源：http://www.aibaodan.cn/163gvdehovb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hwqnhsld.html

#include <iostream>
来源：http://www.aibaodan.cn/163afbgihpo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ojgbrxxz.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nifpebnc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163klorvlsg.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zwueubwp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dcjdgzlh.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163zjrsogoe.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163oijfvkbv.html

[S35] C++：map
来源：http://www.xuanzx.com/163kqjogfiv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fyicnjul.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163iupsyram.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uonjiord.html

[S37] C++：set
来源：http://www.aibaodan.cn/163abbtrfur.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jxynjyct.html

[S38] C++：排序
来源：http://www.sxryk.cn/163bbwaomoy.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163tywquiri.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163aiiakqwa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ttxrktco.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163leqnlddn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163mtfuezqo.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nenlpiee.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163zktodrok.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fpzbwfgk.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ueidnzio.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163vklmqzcr.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163yhxghuzy.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163yqxerinb.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163fevkcrbg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163zsuvttjd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163hynuhbwk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163ufiewmyj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uclcsoij.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163qvsnkwbo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ojuywghd.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wonqzzki.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wketujqj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163vqnkknab.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163urqfelcy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163cdmjtuog.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nkwvhgxm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ygsaihzn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163tzunmnpc.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163gjxjwofp.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163lafvopcw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dmpjxgyd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163melclfdn.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rtnbjjsv.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163dwmurvpj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163udkioxdt.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163jjkonzgj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163jxrxiycx.html

[S56] C++：optional
来源：http://www.sxryk.cn/163biwxjkgn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ijqgklzr.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163caamsxkj.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163geklqalx.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mlqjnexd.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163npxlkizv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163okopiexx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mcnvvape.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nmniipsq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163qrhtuirw.html

================================================================================
来源：http://www.aibaodan.cn/163ivvikgtx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163hflevzyf.html

================================================================================
来源：http://www.xuanzx.com/163sqmtsztt.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rpnatawc.html

println("Hello")
来源：http://www.sxryk.cn/163ormihxji.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163uezllvch.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163zxtrkupy.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163fzpvrzja.html

"值: $b"
来源：http://www.aibaodan.cn/163hdmjrfmw.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163iwmdmckn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163bhwagrts.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wdptldng.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163gcbzmexk.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kxqykzak.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163spcdrxuk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163czipnejc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163uaowexjn.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163eumptywc.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wscdleho.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163qkqkqjvd.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163iyfbghye.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lfpokcoh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163lujhaaxp.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163nhcadnuu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163bwunoopk.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163bcljbiza.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163yrxlbvpy.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163dpcjjgta.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163vetwyxqh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163tayfniib.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163jiispcob.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ymijndro.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163pejskpfq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dcynvdaw.html

print("Hello")
来源：http://www.sxryk.cn/163yhxotvwu.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163xntfoyhk.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ssicfuvf.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163icdeuvou.html

"值: \(b)"
来源：http://www.xuanzx.com/163lpasrmyi.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163pgmjixbq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163vlkixhle.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ewautvjd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163tglyymvb.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163usgqxgql.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vugfujwd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163vsqbitvx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163frspbgvj.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163fpumxvoz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zcdvlrcz.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163xpoopfco.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163pzabjaxr.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163fefpavgc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163riybxidy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163okludvul.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163tigpfuyx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ljdtdfle.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163cfonqutl.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163fzdxkuwd.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163akbxmkwd.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vgzcipwz.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163neuguypm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163qqystovo.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163zyxwxmvs.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163hgunayor.html

print("Hello")
来源：http://www.sxryk.cn/163llkgngjg.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163jfudmxyd.html

local a = 1
来源：http://www.xuanzx.com/163ouxvxxqd.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163vdolswpt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163gldcxoip.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163otexwweo.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163nreaqzef.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163upeigctn.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163dhwmsvos.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163izqnatzy.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163lbnmtkkp.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163mxaauycb.html

"a" .. "b"
来源：http://www.sxryk.cn/163ymnkpxet.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163yjsnovvi.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fjznlckw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rwtotuxh.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xnrygwxh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163avnbqlri.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163zqgbgpoh.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xxapktyj.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ddqvwhut.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163fsaozbne.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163offqydte.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163rvjholxq.html

"值: $a"
来源：http://www.sxryk.cn/163eovhjzye.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163xofwdlmk.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163gdydjbyl.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163zticgkva.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163zrbnudse.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cnzbjypv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163tatfigkt.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163julcikmq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ljpbsqdr.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163oxoezpoh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vhqbueqo.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163eamleilr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ntfnoxli.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163aczjbgld.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ecrpmrkz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163zvpqybma.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163xjmgvtxs.html

println("Hello")
来源：http://www.aibaodan.cn/163axevwtqr.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163hvbrgusg.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163anmxobzj.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163gtdjqcui.html

s"值: $b"
来源：http://www.xuanzx.com/163uxwuzzpo.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163zuqppqml.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163hqyyduau.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163sruzpyfi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163rmkghkez.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163xmgterbr.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zknkfbpa.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163lcvnepib.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163kxtlitva.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163wcpfavhu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163sbkvrmue.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163rgkoenwb.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163vwxsotkm.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163yubqrtuw.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163tsbvclxq.html

================================================================================
来源：http://www.sxryk.cn/163xyjaxzuv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163ynefxizt.html

================================================================================
来源：http://www.aibaodan.cn/163bnunbpfp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163feyabkhn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163hpjlqakr.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qcqwqgss.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163mutoyqqx.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163duiosags.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163ulriyvoa.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163shdpqnds.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163zpfmlgos.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qnoethok.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163znatjbuw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163fhuvsqoc.html

{**a, **b}
来源：http://www.aibaodan.cn/163ygfiafvo.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163umibpcvd.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163fgexogil.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163wieokuyl.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163lhhsbtkb.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qhoklwyf.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163cexoeqaa.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163bixrewrx.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163qdkvtxir.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163nfqdvljl.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163wcqywqmx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163dzszszai.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163jrnwwlbn.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163lxanqduq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163xqkhmmtt.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163hmqmfgrs.html

defaultdict(list)
来源：http://www.sxryk.cn/163drinmycd.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163qnvihvia.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ofbohnrp.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163qjuvprth.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163owpzmklf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163dapyivff.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163obqcpscx.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163kzsvoppf.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163sakfxevg.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163vflbiumg.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163gaykbayy.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163mmraepfb.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163klqdssww.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163oaxvpzel.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163kisywstu.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163poszgjdj.html

list(zip(*m))
来源：http://www.aibaodan.cn/163fvtxrkjd.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163wevbsuyb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163uyckqrau.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hmoomdyy.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163ukzubsij.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163tlewphif.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163nhjxflec.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163gpinkvlz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163uqpwakje.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163bqnzejbq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163fubbykbt.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163dzsxmnqm.html

UserId = int
来源：http://www.sxryk.cn/163layhmsyg.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163baeosdzm.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163djfhybqp.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zobptjlm.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163fbljyawq.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163zilshxqu.html

python -m pytest -q
来源：http://www.xuanzx.com/163wjnrccok.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163oywsodrm.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vtljokmf.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163icubuypm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163owzjzuhv.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163wemakqhz.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ylbrimhq.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163qdxhbgex.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163qhvbvdsl.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163teizfehu.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163qfuebixi.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163solzjsog.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163vudsdvpu.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163esvcvvay.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163katntfje.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163vxzwzost.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163suuqcjaq.html

[U40] Py：打印到标准错误
来源：http://www.xuanzx.com/163rqlypqwp.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163qflrkcqm.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163fzthhqgr.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163oylvhpku.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163kwbpyneo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.sxryk.cn/163xyzdqxhr.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163lywqxvep.html

namespace App\Http;
来源：http://www.aibaodan.cn/163yiterihj.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163jlnzvptq.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163kjzhoris.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163seghxzgx.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163yxnhlnsk.html

[U46] PHP：可空类型
来源：http://www.xuanzx.com/163fklmtmvj.html

?string $name = null
来源：http://www.sxryk.cn/163kagjvehc.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163qkxkzxpq.html

int|string $id
来源：http://www.aibaodan.cn/163bhlqunsk.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163ivchffgc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163yjemddzu.html

[U49] PHP：只读属性
来源：http://www.sxryk.cn/163dxgwcdql.html

public readonly string $name
来源：http://www.sxryk.cn/163gnhwhlrq.html

[U50] PHP：构造器属性提升
来源：http://www.sxryk.cn/163jiftsads.html

public function __construct(private int $id) {}
来源：http://www.aibaodan.cn/163bvughgbq.html


<!-- 参考信息 -->
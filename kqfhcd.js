外链999!wailian999！

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163xiazuogj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163excjaatb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163bkqnohcz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163nfnbzifu.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163etfikeao.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163welxeter.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163sjyzieha.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wdaoutxk.html

static int counter = 0;
来源：http://www.sxryk.cn/163uagsoqyk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ykcqlaog.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163rmwksuhb.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163bbvtxach.html

#ifndef X_H
来源：http://www.sxryk.cn/163ocvwspxo.html

#define X_H
来源：http://www.aibaodan.cn/163lqxujckn.html

#endif
来源：http://www.sxryk.cn/163wnpufvfs.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163fwbmdufs.html

#include <iostream>
来源：http://www.aibaodan.cn/163xcmkwrsv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sgubcffb.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163kkuxiwdi.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163wbqtoddh.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163mxifnjyt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163jcrzjryo.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163mirpsrlh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163tpudfnhp.html

[S35] C++：map
来源：http://www.sxryk.cn/163zwzfqagv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ezzplxlp.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163gfccxgjx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163foxvsffd.html

[S37] C++：set
来源：http://www.xuanzx.com/163kuvjemqx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wklgbycx.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163owxqvlgm.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tzxplypq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163btcwjtih.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163omrznfgv.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jgougzyt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163keiepzdm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pbtwtduz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163qpfzaezt.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163niwovwgz.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ilawmzre.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wprpcgun.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vxdzrmag.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163vjmyybgz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163lcnqmhry.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163xfwvpbuy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wjqalpsc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163afurvyxw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zknhctgk.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xnoohkkr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163iqjfomss.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ocsbnvtz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163gpfwspve.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163oekatdcu.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zjvwffoj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163uebecmte.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ibdelzgc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gxejwdqd.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163emszkijk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163iwzageyd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163bvinbemo.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xzpmnnny.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wsrgdyeg.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163qvmeuxxm.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hhfjdyni.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163kksifbat.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163tvjlbgvj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ybvaqtwc.html

[S56] C++：optional
来源：http://www.sxryk.cn/163mnepzssw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163owvawpvc.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163wpmymkti.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163jjweczhl.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163cfvjmhwo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163eabzojru.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ybuolukx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lsulszmq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163xnuenvot.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163zizdpvwc.html

================================================================================
来源：http://www.aibaodan.cn/163dscvvmgt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gwtlrdyg.html

================================================================================
来源：http://www.sxryk.cn/163qhhziefr.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163lcibvdrx.html

println("Hello")
来源：http://www.sxryk.cn/163dyuopega.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163dghykgle.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163sglhmnuj.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wooyabbf.html

"值: $b"
来源：http://www.aibaodan.cn/163ehxcbtbz.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ypcgnbte.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163fzpmmzwv.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163iypghrvl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163shrzsryi.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kwuorrbk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yuqvziyt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wribymsh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xkdlhoia.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ghpmkccw.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163xozcxakj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hxpldshu.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163zmpkwtil.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163jnuiwfim.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163glhmtbyg.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163dezmmvce.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hgillhdo.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wxziyoal.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163hjgkwbkr.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163yoelkhjl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163jbvbmcub.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kxfmwcff.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163apkdphju.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163mntnruyf.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163ycvyjpam.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163nndufxpj.html

print("Hello")
来源：http://www.aibaodan.cn/163zefhvugt.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163tuvsndcp.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163gpmpived.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163hgcufesb.html

"值: \(b)"
来源：http://www.sxryk.cn/163ebciruym.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163jkplyjid.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163kudpwhsf.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rjnghxzd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wrybyffl.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163lxjmypfy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163oxbrkuys.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ruadvbgo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163unygbnma.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163pbjyuqxw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163jusvmdxp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163yasszfnw.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ievzvvjj.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ebuvdzjy.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163niilhxxm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ncelhano.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ppontavn.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163ydpisylc.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163hjvlwydp.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163onxganza.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163fvowjfps.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vajuloaa.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163vcgttpkx.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163nylokmop.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163wgzejhwq.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fjbczgyw.html

print("Hello")
来源：http://www.xuanzx.com/163ceegmgjv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163zgespfho.html

local a = 1
来源：http://www.aibaodan.cn/163yqnjbtqb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163qextpems.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vhrnqysi.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163urmbwmbj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163bawrvlsx.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fjtzfwjt.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163noeqwjho.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163xpbsbmlu.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163cldzxlik.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163oemleade.html

"a" .. "b"
来源：http://www.xuanzx.com/163ygvfzccx.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163dvyeymea.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ibktrecb.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ejujgsrd.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163xabpcijf.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163oupchybv.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163balwzuio.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ofrhmaud.html

print "Hello\n";
来源：http://www.xuanzx.com/163cpbdadxh.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163xcsectqw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163dljmmkuk.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wqajkqtt.html

"值: $a"
来源：http://www.aibaodan.cn/163rxxpzrxt.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163uiaixqyq.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163hefclevl.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163jbfxtfzn.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163pxqrlwny.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163mfqlklbg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163vrjxulev.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163gjzlusuk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163htzaxzso.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yjimoqlb.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163mgodegji.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163xmddofxq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zwtrnayf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163rugzckuj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163chpojpbl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163pzgvctgv.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163efzkharv.html

println("Hello")
来源：http://www.aibaodan.cn/163yrvoordb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163hlhqazse.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163bjpuzdzh.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163dwlctrwl.html

s"值: $b"
来源：http://www.xuanzx.com/163krwxpmaz.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163agcimiwe.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163wsqvkphg.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163zhmrcxjm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qfojyyds.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163bgtrkxsx.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163sumbhohc.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163xwlwejey.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rttjujcz.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163cxyuznfo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ilxltzbq.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xsnzzkkj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163igpditwk.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163txahtvcf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163ykubcpxy.html

================================================================================
来源：http://www.xuanzx.com/163nhxkvkzr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fkoymtgt.html

================================================================================
来源：http://www.sxryk.cn/163asrcccpw.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163sfbgucsh.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163xosuypsn.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163dmetyfen.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163swwdqffh.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qpjntdoc.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163mwjolfwb.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163uydbayqn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163fsotjvvi.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nalskyat.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163sfesbdpj.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163mzekeopy.html

{**a, **b}
来源：http://www.xuanzx.com/163tenmaddf.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ygbgwasn.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163eesthsvl.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163lzdouwba.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ahcqymru.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163cspzcvxi.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163upnuocvm.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ubaxkieh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163pyglhgzh.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fyiwdyzu.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163thjjczye.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163cfsdekug.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163wzuhmgut.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163srhjimwc.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163ihwmyzxo.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163iteojbbe.html

defaultdict(list)
来源：http://www.aibaodan.cn/163orqfzfgf.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163vcbcqcmx.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163sqqlyvzm.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163dreeilwo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163goslebsg.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ekxbacma.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163smnwiqrd.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163ujoekvys.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xxpvzdai.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163mwkikytw.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163vupywblh.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163amwxnxrw.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163utgthqgq.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163wwtmqorz.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163lhielotx.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163pahvejqj.html

list(zip(*m))
来源：http://www.sxryk.cn/163hekjbiya.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163fdsydtdn.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nyxkfwpv.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163zmohtnlj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163geakhhgk.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163rolbapwn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163nhvzaavp.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163pgyhlmnd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163xbctttpo.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ifdqvela.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163mehembzz.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163iqydypta.html

UserId = int
来源：http://www.aibaodan.cn/163iwslrmju.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ycdmrqjw.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163qgbaxclw.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163lcahghfn.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163prprskqm.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163bfbyqdsv.html

python -m pytest -q
来源：http://www.xuanzx.com/163cfhrvhsw.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163qzsmhspc.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163iqutyknc.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qfmqlsqr.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163etaoaolg.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163ylfvekjy.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163ywmclhce.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163zsncjozo.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163wfvqwuxl.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163mtwezxsr.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163omxnkkjd.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163zntpaquq.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163vvarsreo.html

[U38] Py：获取脚本所在目录
来源：http://www.sxryk.cn/163wzgczlub.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163ojdvbggr.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163quxcotqi.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163ssmcjngd.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163agwufxbr.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163stullgij.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163mnhsiglq.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163kbghkupu.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163xqyqebie.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163waehymsj.html

[U43] PHP：声明命名空间
来源：http://www.xuanzx.com/163iutbfbfg.html

namespace App\Http;
来源：http://www.sxryk.cn/163qsrgjthy.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163gaagqjqf.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163gihmahfs.html

[U45] PHP：类型声明与返回类型
来源：http://www.aibaodan.cn/163ftbyescz.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.aibaodan.cn/163fwwbmfkr.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163ygkapqbe.html

?string $name = null
来源：http://www.aibaodan.cn/163fxcccmmh.html

[U47] PHP：联合类型
来源：http://www.xuanzx.com/163axlxteov.html

int|string $id
来源：http://www.aibaodan.cn/163awwnmyqf.html

[U48] PHP：纯枚举
来源：http://www.sxryk.cn/163siefjebc.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163vjdgzhad.html


<!-- 参考信息 -->
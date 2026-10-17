外链999!wailian999！

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163jorewwyp.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163xgqjmojb.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kemyfhwa.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163dyeazlqw.html

static int counter = 0;
来源：http://www.sxryk.cn/163pnxvqlpx.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jmsdjpsy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ledrobwx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163kxypbxzm.html

#ifndef X_H
来源：http://www.aibaodan.cn/163jstrlven.html

#define X_H
来源：http://www.xuanzx.com/163quvwcdfa.html

#endif
来源：http://www.xuanzx.com/163xjwbuwwr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163tchvadxm.html

#include <iostream>
来源：http://www.aibaodan.cn/163blmgsuoj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jxqnvmty.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ibghaflg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163zbjfdtld.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163amubotlr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dnbxlbtf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163chjqgwpw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163mmuqcgxt.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jjjjzfzz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yamtnfdo.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wgzjryum.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ufxmspof.html

[S37] C++：set
来源：http://www.xuanzx.com/163hdeuhoei.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yhlndzfx.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163oypiknoi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163glcauibg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wqghocwa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163tbzgihun.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163kpmdynhe.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163qqrwgvtx.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163rxuwopma.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163kfntjgno.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163xlrdhczc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jxeoginw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mrsnxiaj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vaozblny.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163usquwylt.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163cvifbtal.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163dwredjqv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163sopdidkk.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xkvwetki.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tpwmouvs.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163towqhxze.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163uwwalvhs.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163edusbsyo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163xrefvayo.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163ciuqscvt.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163bescugbo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163duztaaon.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163oqzvohed.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163krvizbhy.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163tywyymtz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163gdfzjtib.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163amsjfzqe.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ascmpqbl.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rnihstjz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nzlrrifg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lhhozsvp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163axiotjdf.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163okwxxxah.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163egainkpp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163kihqvrxn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163hoyaklki.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ahlqdffl.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163bkfkbwwi.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163nguxpsgj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ijunpogd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163yekjsaxy.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163nnflvgkq.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fojxvbvi.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bymzhsch.html

================================================================================
来源：http://www.xuanzx.com/163kkfocxoc.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pkqjwswa.html

================================================================================
来源：http://www.aibaodan.cn/163prbfdjkw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ouivamgx.html

println("Hello")
来源：http://www.xuanzx.com/163qgibqjne.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163qorricci.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163cnznqwtj.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hqyhuvqr.html

"值: $b"
来源：http://www.xuanzx.com/163kwprbyaf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163clecxbxu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163guqqkwdr.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163jvxjkspu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hsoihavy.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163virpiwlw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163osdysdwf.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163aipigiwh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163frvwonwu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163lmdcdeap.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163nojuuglv.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163gsrfuyxi.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163gizylpwq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163xvmwoxxv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163smcsvvsx.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163hndmlimi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163nbuyxspt.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ipozteyj.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163svgpzebh.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ymkbfasy.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163pkppsavz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163vqwuvmlu.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163stjuuixq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163txzyrzkp.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163azalcank.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163gprdydcr.html

print("Hello")
来源：http://www.aibaodan.cn/163vleotqza.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163juofxcxn.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zfvtkokj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ndgrekst.html

"值: \(b)"
来源：http://www.sxryk.cn/163sodevkyz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bfchwxnq.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163djklibiw.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163kyomcvvx.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163afxsrksk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163onfjufew.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163aukgsdax.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163hbeulimd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163tfoyynfj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163hoeylrtw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gmqwspwg.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163vuiuentc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163vjvdlzut.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163pyadasdw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163clsrvhqr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163tfrryhel.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163odpdhfga.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163vhhplfwr.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163senfwtza.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163jutlxpck.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163fffwpbht.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ouehiznl.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163egglufah.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163ohwwwfqc.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163qwmwfdlz.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163xfepcegd.html

print("Hello")
来源：http://www.sxryk.cn/163njhaovpa.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163oqwhcswh.html

local a = 1
来源：http://www.xuanzx.com/163wjhuyilj.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163rpbejolh.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163wxmjxjjd.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163nwvjvrdn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163dwiduffp.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163nfgwyafn.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163vzqqzidd.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163cdeeyywg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163alifjcnp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rszqwrir.html

"a" .. "b"
来源：http://www.aibaodan.cn/163lmaazzon.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163zknvfbmg.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163mhqqxont.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163shgxzyeq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163jeshcals.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163mbrwzbfz.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163lqziscqc.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163mtnntddl.html

print "Hello\n";
来源：http://www.sxryk.cn/163ueahmnul.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163hpnunjiw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163qtswyhni.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163yhxztewi.html

"值: $a"
来源：http://www.xuanzx.com/163viwamlck.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163axwblxpt.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163babyastf.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163eusvjoce.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163odadekap.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163hmognpdc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163aofnqiqy.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163qtbmkpxi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163evmyigzr.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hxxnznfc.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dqralbrj.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163mnwoafkq.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ehryyvjp.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163jkllkdtt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163dzgulbud.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163pdmkkhbs.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163pukrmkra.html

println("Hello")
来源：http://www.sxryk.cn/163nkftcrzz.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163dudibbgd.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163ocqnojlu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wnbasjez.html

s"值: $b"
来源：http://www.aibaodan.cn/163lhbkxgsx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163qxxfzugb.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163usazfhxi.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ooggfbma.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163omqjozsb.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ynrjzotu.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163mmvkvqdb.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163ofmjyydi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163gpyqdcre.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163lwkgslyu.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163sykhnsgi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ijlbmznj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163nlqffxni.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163isszhtou.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163aviwntjw.html

================================================================================
来源：http://www.sxryk.cn/163yenutsiz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163rtbjmtrr.html

================================================================================
来源：http://www.xuanzx.com/163okxdrdvq.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163toczlcoy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163wobqeutj.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wlklkudu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zzaxjpzx.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163witwmjvb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ompbfreq.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163rmwacfvm.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163jfjacybo.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163fluapifc.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163aivasuhf.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163oljacxdy.html

{**a, **b}
来源：http://www.aibaodan.cn/163ovormqsi.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163zkcffskh.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163yoyypvoi.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163flobfgmq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163wravmkhm.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163xmtttvhn.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163gjrnakjp.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yedhdpoy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163uxdyevwk.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163iqjpbkvl.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163brjsmgtq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163uyxhhqpc.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mrgofvfp.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163daplykoj.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163catyvxnn.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163fpzulkpp.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rukhzaky.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163gzviwbdn.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163lbigytjk.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dlgoiwmm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163xkbloggz.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163uxwfmhag.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163sntmdwvt.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wflzluge.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163uglxelok.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163cjxhiuid.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163eiyqcymi.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163pnrclswd.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163jfqjbhhj.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163phholqmy.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163samhjbgf.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163flplhuzh.html

list(zip(*m))
来源：http://www.sxryk.cn/163axuenvli.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163pundpymj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163chduzrno.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mfkwwcdo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163viiiynvd.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163coooajvo.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163uqndqjjx.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163egeknskw.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163jjnmyjzm.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163zknecivw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163fkxgnlwp.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163fwhwlyvk.html

UserId = int
来源：http://www.sxryk.cn/163ywbxucdv.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163arctcuqy.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163zhrucvhr.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rhvhcdmd.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163vjcjlyji.html

[U31] Py：单测
来源：http://www.sxryk.cn/163etfshkfu.html

python -m pytest -q
来源：http://www.xuanzx.com/163txbrfxaq.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163gmfbzjso.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163titczjtb.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163yqsiypmg.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163btvvbsol.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163fjvyvdhf.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163bvchiyxl.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163qzbzdond.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163jpgqvykj.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163zbvrswav.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163euslqend.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163diaqjtha.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.sxryk.cn/163ljhaaeow.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163rtxdtxks.html

Path(__file__).resolve().parent
来源：http://www.aibaodan.cn/163gkuirscd.html

[U39] Py：判断是否在交互环境
来源：http://www.xuanzx.com/163rkneinsf.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163vucycmym.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163vdpqxvht.html

print("err", file=sys.stderr)
来源：http://www.xuanzx.com/163zjheoqmb.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163zspdvkdu.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.xuanzx.com/163bzwipquv.html

[U42] PHP：PSR-4 自动加载
来源：http://www.xuanzx.com/163yyrzfvfw.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163uhygdecv.html

[U43] PHP：声明命名空间
来源：http://www.sxryk.cn/163aiipukay.html

namespace App\Http;
来源：http://www.xuanzx.com/163jxmdcewy.html

[U44] PHP：开启严格类型
来源：http://www.sxryk.cn/163cjdksgwp.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163bwhorwfm.html

[U45] PHP：类型声明与返回类型
来源：http://www.xuanzx.com/163llscyxuy.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163skevgaei.html

[U46] PHP：可空类型
来源：http://www.aibaodan.cn/163qdxukmws.html

?string $name = null
来源：http://www.aibaodan.cn/163ltizstdq.html

[U47] PHP：联合类型
来源：http://www.sxryk.cn/163fwaebrwp.html

int|string $id
来源：http://www.xuanzx.com/163ffxetrtr.html

[U48] PHP：纯枚举
来源：http://www.xuanzx.com/163kkmnwwof.html

enum Status: string { case Active = "active"; case Off = "off"; }
来源：http://www.aibaodan.cn/163wrzfezeu.html

[U49] PHP：只读属性
来源：http://www.aibaodan.cn/163xgdwrjdc.html

public readonly string $name
来源：http://www.xuanzx.com/163lsnlmjlh.html

[U50] PHP：构造器属性提升
来源：http://www.xuanzx.com/163gyturobj.html

public function __construct(private int $id) {}
来源：http://www.xuanzx.com/163yryqvhhk.html


<!-- 参考信息 -->
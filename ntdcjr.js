外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163alrrpfam.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163cysqbwwn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163soihfjjp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xooztxwh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163tuezlucm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pxcfwsbr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rcttbqbl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163agefyojv.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jcehrdat.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163awzrubre.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zdodqqpo.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163zkadlybf.html

static int counter = 0;
来源：http://www.sxryk.cn/163tppiglkf.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ciqsdpcw.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lzudhkff.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163runtotva.html

#ifndef X_H
来源：http://www.xuanzx.com/163jrhvhsmv.html

#define X_H
来源：http://www.sxryk.cn/163pyfmvwdu.html

#endif
来源：http://www.xuanzx.com/163sjqlthde.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ncmcnqvp.html

#include <iostream>
来源：http://www.aibaodan.cn/163emhzclsg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ggrqxhav.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163dkatgzbp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163twgmefcb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ryrmpogd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163nyxzdksq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ticqlepa.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163satnnjot.html

[S35] C++：map
来源：http://www.aibaodan.cn/163gkcmxcwa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hucykaqg.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163euppavwn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aytfmurf.html

[S37] C++：set
来源：http://www.sxryk.cn/163iigtricm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gclojkwa.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xtteguai.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163qhpuklpa.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ddqljtjo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163luydkwid.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163unrzqgsx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163damqncht.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tshbjujp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163dfwkcmvl.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rryyjhwk.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ykoqwfso.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163dtzgapys.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163uzsikgbp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163imjanjdp.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163kdmkiwvc.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163jxhplfnv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163usxymigg.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163uxsgkmhe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163zpxxnjex.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163unnbwovw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163jxvqcwqm.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163zghriqnp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ggizydrj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163vgdkahzz.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zxtvojat.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gjggiuww.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163urshzeij.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xinrksbm.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163cazrckwj.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163rnipffii.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163dwsimdip.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163fnzoikwz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mhiuldgu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ljscntjp.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163vmxiociw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163msvunsyu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163acwfrlem.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163guvsqnud.html

[S56] C++：optional
来源：http://www.sxryk.cn/163cuwdkieo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163osxzfuns.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163jetiglrr.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163hthkexen.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ayyuhcvn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ldrbffmz.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163dqvhviag.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163zhzvlsto.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dqzvonfx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163yovmuegu.html

================================================================================
来源：http://www.sxryk.cn/163oahnfbns.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163asnbtbio.html

================================================================================
来源：http://www.sxryk.cn/163mpgmxfaa.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163wblizkiu.html

println("Hello")
来源：http://www.xuanzx.com/163wijpyqev.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163eibwhloq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ghtlhpjw.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ymcnbnxi.html

"值: $b"
来源：http://www.xuanzx.com/163eyiatwtc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163hnlwsywq.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ihxuaugz.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163opnkttpi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163peqqemsi.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kxbfpvrh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163kvphpjkn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163scaxhfqf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gaseheuq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163cqhfsora.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163vwgnvjhq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163axqmieeo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163ooylycyn.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dktuxvpk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163symiqbxt.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163pawtqmql.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163nzlxhlli.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163nwrkkmem.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163bcjunpqg.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163llndiylm.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rplpjoky.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ndkkgeyy.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tbplwbrf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bbdqgzcm.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163qbdmvvva.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163uyoyjkoq.html

print("Hello")
来源：http://www.xuanzx.com/163pxprvved.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163xhiwfmst.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163mzxorndo.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ncyywtaz.html

"值: \(b)"
来源：http://www.xuanzx.com/163urgwnqfb.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163lkvitble.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kfgznvrq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rciceonv.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163uhslzmpw.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163rctijyjv.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163lrlmuesc.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163skpxndmr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163sgpxpbak.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163tmmelbov.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hvsiskdg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163rolaplry.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163mjgrcgoj.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163ckbgddjs.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163rxqosgev.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163qeggwins.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ueqciwls.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163pywbsjeu.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ccjqyymv.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163yhrhjamf.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163tqzegqtu.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163sdmkstlq.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ekfirtwo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163wexvdhlk.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hqfgbcfb.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163etstsewp.html

print("Hello")
来源：http://www.aibaodan.cn/163dpdvqbcy.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163diirsfcu.html

local a = 1
来源：http://www.aibaodan.cn/163esukfwav.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163aeqikhop.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163ohcpuowk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163audxfqzm.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163bbxllmxl.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ghggxphy.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ducesmxe.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163nuuipoji.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163isuujhta.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xdpbljjc.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qqntvyip.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wujyspsu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ccxgcrth.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zqqdkxly.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163fymhgkkc.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163lhdubkbk.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163bqitrebg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163yoyttyxb.html

print "Hello\n";
来源：http://www.sxryk.cn/163sprpxqtc.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163ytzckwfs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163wwrrfasc.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163zeqpnsph.html

"值: $a"
来源：http://www.aibaodan.cn/163qdxsjijr.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hkcntdww.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wmdfruaq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163eeouxzfu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163yrsbcebh.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163optwbxep.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163wdouszfb.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163vyrqoris.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rktagluu.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ogtcquza.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ydekgfgd.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163jsijgmvk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163tzgxephf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163ticyhytg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163wbipjgfw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163wnyosuak.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163lrwectrl.html

println("Hello")
来源：http://www.sxryk.cn/163ldnmpryw.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ncaccxzl.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163dkajaqqq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ovzclowe.html

s"值: $b"
来源：http://www.aibaodan.cn/163jitpzibl.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163drgwmftj.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163hfltieur.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vcdmruju.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163agxcfllf.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163kvgankvo.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163gwutyjuz.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163mhmcvdoa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163xysklrpl.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163cnsxykpc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163lehzrkzj.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163zkqxebli.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ebnvclvl.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163pyqtyxgh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qlufmdhu.html

================================================================================
来源：http://www.aibaodan.cn/163cqcrtnaj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pnzrjqeu.html

================================================================================
来源：http://www.aibaodan.cn/163cfbbwfma.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hrlasafp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163muwxxbmo.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163weevwsmu.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163qvwsfezb.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wxbiczzb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163vtktwhho.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163dzlrygff.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163hxcavufa.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163mfhxygwr.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163iuwouhuz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163utztapfa.html

{**a, **b}
来源：http://www.aibaodan.cn/163vfkmrkdb.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163lbygvlyr.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163lxqtekzq.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163wfsrtjby.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163pvdxpyhl.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rpcrggni.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163hcwkuukl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yfgunszd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163clnanpkd.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163rcfymkkw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163fmkzibqr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163mhpcveyg.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163iatgrrqb.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163sscshgjq.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163vykujqve.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163qngrgapi.html

defaultdict(list)
来源：http://www.sxryk.cn/163kyydmusm.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163swpjxabn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163kuoapzxh.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163ilqjthbb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163kpvxpoit.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ppytrlxv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163sjbmjqro.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163tnzzyfpa.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163nmagwtrk.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qmhaltvk.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163oiihizcg.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163vvltnmab.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163goyttkej.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163xzhliimr.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163uivdsqqg.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163qjkljbyq.html

list(zip(*m))
来源：http://www.aibaodan.cn/163lmliccag.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163lstgvcxi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163mphtelix.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163tdapygiw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ptbusiip.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163jabuitgn.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163kbjipdtq.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163uxavcbla.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163pwnsprqf.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163tinuuwvr.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163cdurfluo.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163goinnyid.html

UserId = int
来源：http://www.xuanzx.com/163uwbypjnd.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163vobjbzrc.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163omcrpxux.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163hirkxvgz.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163fbmcckfl.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163gtmqnloy.html

python -m pytest -q
来源：http://www.sxryk.cn/163kcjiqnfq.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163uzcoeyla.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163bbznqynv.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163ezlkdgpl.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163ysybxfpq.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163xoexylnr.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163jiixigcr.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163cktjgchz.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.sxryk.cn/163ocyvisoj.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163prrhtoum.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163ajubmuxm.html

[U37] Py：读写 Excel
来源：http://www.sxryk.cn/163lgtwedpc.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.xuanzx.com/163wpqwngrh.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163osqwrylw.html

Path(__file__).resolve().parent
来源：http://www.sxryk.cn/163xapwpyfw.html

[U39] Py：判断是否在交互环境
来源：http://www.sxryk.cn/163nxzjupzk.html

sys.stdout.isatty()
来源：http://www.aibaodan.cn/163mrclpfjy.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163oqzipugb.html

print("err", file=sys.stderr)
来源：http://www.sxryk.cn/163levprzzo.html

[U41] PHP：初始化 Composer 项目
来源：http://www.sxryk.cn/163kqsinpzl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163wxztomns.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163tpxhtven.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.aibaodan.cn/163ceqjrfey.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163xvtpwkpl.html

namespace App\Http;
来源：http://www.sxryk.cn/163lnywjqzq.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163dfsvaglr.html

declare(strict_types=1);
来源：http://www.xuanzx.com/163nzeyvsuv.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163vdkysxtr.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.sxryk.cn/163xcnqkiuk.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163zjolhdlv.html

?string $name = null
来源：http://www.sxryk.cn/163hhzoadwr.html


<!-- 参考信息 -->
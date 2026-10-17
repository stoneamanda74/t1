外链999!wailian999！

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xqmaujeu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kmyjngvb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163vuhxcxrj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163uvdzjpdo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jknbpfzq.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163azfparzb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163wyppssru.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163phlnjdmu.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163heiousgv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163rxxozhdm.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163aoccfkcr.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163bfiwbjvl.html

static int counter = 0;
来源：http://www.xuanzx.com/163einofria.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jummkuhq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163tgkbrgeo.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163fwinzech.html

#ifndef X_H
来源：http://www.sxryk.cn/163zzbqjyqf.html

#define X_H
来源：http://www.aibaodan.cn/163antbkilp.html

#endif
来源：http://www.sxryk.cn/163omepwxwk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163waleiseh.html

#include <iostream>
来源：http://www.aibaodan.cn/163grtvynmj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163sdadjumo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163adiaycym.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163bthzxsfx.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163pyegesgc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163bxfajpnx.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163rpirznvo.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gemyscil.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ryqpbbbi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163trhssdgh.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rbbewcvx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163icyzxivv.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ithizreo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163fwjaerqp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163khhhhdvr.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163dwvvsvdv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ftsmbyqm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163cpcaudca.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163sfmvawqe.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ihmsivja.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163esuoazln.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163jjflojdm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163vuqyfmtc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163lrwrqggc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163yjzrmmqk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163zetvmhab.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163uklntzkf.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vyqeyfvj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163sryrtijv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ejbeziaq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163jvbbswws.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163eedydixd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163bwbdjedi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lpsukwme.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163mbmfyqmt.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163trcuqkgt.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163eshxdddq.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163vpfvwznm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ezkipuwl.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tkvfprqf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163hrhsecru.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163dcqubqcm.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bdgbrcsb.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163imtammia.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163wxtmaaph.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163vdwxvplo.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163abqdhmvg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163obzxizxe.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163dofubgki.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bbqamkpk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nmnikmbs.html

[S56] C++：optional
来源：http://www.sxryk.cn/163dhkgugdo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163vfawegpf.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163udzkybsu.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163bzebmwvr.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ydjtwdqs.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163kxmzishn.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gxvpzhfs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ciagpfti.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163zspckhkl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163nadxihpw.html

================================================================================
来源：http://www.xuanzx.com/163msfvwmvv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163vvxcqmmu.html

================================================================================
来源：http://www.aibaodan.cn/163yrdrykrx.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163lnhymran.html

println("Hello")
来源：http://www.sxryk.cn/163awlyawuu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163uhqnglpc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163gjfzbscp.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163amphcdba.html

"值: $b"
来源：http://www.aibaodan.cn/163vuznkjtv.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nnprexjc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163fdswnhra.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163woxoqlad.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163qaszeift.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163puudkdbz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163rtjedmdy.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163seffvwgb.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163lbxlypyr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163dnjsngmw.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163rdwubeuj.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163vvgwtnex.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163cjwrqrlj.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163vvhqpwkt.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163qzutclxr.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vvckmraj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163sjfmoccu.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163tzgzdcrr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163kwngyqqx.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163rilvtjov.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lccexesk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163ajkfqqdw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qdxepfyu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163saynhbbn.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163zukuktay.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163tlpwoupw.html

print("Hello")
来源：http://www.sxryk.cn/163vnrgqpeu.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163mbeygwfb.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163solkqpfu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163utlnoqhf.html

"值: \(b)"
来源：http://www.aibaodan.cn/163xvsaeclo.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163guinrdgr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bzrkhqib.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163gdsubbgw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163kzgkdzbo.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163keffnutb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163wpdhvqqs.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163cqekdfpb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163jilpdmlx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ztbbndck.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163zrlfckec.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163qdgvgdih.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163gkflyzyd.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jwfosynv.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jyzbumrc.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163opbabrzz.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163oghazqdp.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163jwbayubd.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163spxwqegi.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163fwawcmew.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ggoxjkwl.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163igqagphi.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wloqrdkr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163wdawnlug.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163ytdmztdc.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163sdugcchs.html

print("Hello")
来源：http://www.aibaodan.cn/163xjeunewz.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ayxhfbbl.html

local a = 1
来源：http://www.aibaodan.cn/163aneyring.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ceabkqcm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163mrpjlcom.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tvieevvs.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163zhsyxnrp.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hsaaexsc.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163gbjkrskd.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mnzjeynl.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163qntkbvev.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163jonjyvrj.html

"a" .. "b"
来源：http://www.sxryk.cn/163yomazfcv.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tzlhazum.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163rcjyvmhs.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163piwgddne.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163xexpkvyk.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163oxciogdm.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ppdvsieg.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hutafgzm.html

print "Hello\n";
来源：http://www.xuanzx.com/163nnlxgbtw.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163nuvupulw.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163dyquwqas.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163ykaexfrx.html

"值: $a"
来源：http://www.sxryk.cn/163cysruwub.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163fwqifffn.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163jksrnqlg.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ftncrwxx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163ygvwrjvf.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163izogvqih.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163twkesvho.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163fwgzgmwm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163tlrhzcqb.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163mrgolnzm.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163bwnlntqg.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163xefbalzs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163fyhwmzej.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163mglmfbdr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163yxchgoxw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163qzptmpkc.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163zmiovkhn.html

println("Hello")
来源：http://www.xuanzx.com/163pdpzsmni.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163kmehufcq.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163yyoydjda.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163suitlult.html

s"值: $b"
来源：http://www.xuanzx.com/163qccakvqx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163vyunrqyd.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163dszgmtou.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ipkgbzyi.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163vawoyqwv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163lwxgpdks.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163sdwpttnv.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163vguzorvy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163wqzktnjq.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163zbykkene.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163aqucxdzi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163gcgdsdrc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163vkexibtr.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163xzvwbqcr.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163sgmqjrli.html

================================================================================
来源：http://www.aibaodan.cn/163iqswbsrn.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kavvsoai.html

================================================================================
来源：http://www.aibaodan.cn/163gwkmndgf.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163kobexjnw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163udgvkzjo.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163avykczhr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ylbtgezw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163pxsvjggn.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163pdegiygw.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163psbfwnwq.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163svzyngxt.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163powmqxga.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163mfomrcza.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163oknqycnp.html

{**a, **b}
来源：http://www.xuanzx.com/163wuilgvim.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fbqtfawt.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163gcfhpmpb.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zhncakqz.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ofkseaxz.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163gvisphsb.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hfmmyira.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163xinlmhdl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163iqzvmmml.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163asjxejci.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163dvjhwtym.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163obgyefnt.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163fchdyyqw.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163anowkjdk.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163avfgolyy.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163boelxkcc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163vjladmbw.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163vmiqiiqd.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163cymoejqs.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163vlpciazd.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ezkdbckv.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163edhimzvq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163tgsxfyxp.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163jqwepqoe.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ffflkeua.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163dgheczgi.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163iwknihdl.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163cuhkorzb.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163mmuuydne.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163iaknbrmc.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163gxyluvek.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163jjfsthht.html

list(zip(*m))
来源：http://www.aibaodan.cn/163vcbgytqj.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163uvwsnsqy.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163eihuzxbz.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163xsoscmms.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163gootsjgv.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163uaewfwiz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163wkqufvuh.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xlkftgwf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163fmxyagzr.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163usnvjmiw.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163fwvvcarl.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163jqdacifp.html

UserId = int
来源：http://www.aibaodan.cn/163wgobsbbe.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163wynovwto.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163lavdctpf.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163tzegdaxb.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163xdjasytm.html

[U31] Py：单测
来源：http://www.sxryk.cn/163isnqpswr.html

python -m pytest -q
来源：http://www.sxryk.cn/163earwrjtp.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163rykihucd.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163botwikdq.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163xaorbwph.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163bxpuonvy.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163lpjdkugv.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163eaaiambf.html

[U35] Py：发送邮件
来源：http://www.aibaodan.cn/163adfjxvgl.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163xwgvcrng.html

[U36] Py：定时任务
来源：http://www.sxryk.cn/163pebbmlgr.html

schedule.every(10).minutes.do(job)
来源：http://www.xuanzx.com/163ljygpfbv.html

[U37] Py：读写 Excel
来源：http://www.aibaodan.cn/163ijszloyd.html

pandas.read_excel / DataFrame.to_excel
来源：http://www.aibaodan.cn/163llmofhkl.html

[U38] Py：获取脚本所在目录
来源：http://www.aibaodan.cn/163nfjapnus.html

Path(__file__).resolve().parent
来源：http://www.xuanzx.com/163vakfotui.html

[U39] Py：判断是否在交互环境
来源：http://www.aibaodan.cn/163iuwewpqa.html

sys.stdout.isatty()
来源：http://www.sxryk.cn/163esdbbafo.html

[U40] Py：打印到标准错误
来源：http://www.aibaodan.cn/163rzdhpwpw.html

print("err", file=sys.stderr)
来源：http://www.aibaodan.cn/163hnrcfuca.html

[U41] PHP：初始化 Composer 项目
来源：http://www.aibaodan.cn/163fjjysnwl.html

composer init;  composer require guzzlehttp/guzzle
来源：http://www.aibaodan.cn/163ljwsujww.html

[U42] PHP：PSR-4 自动加载
来源：http://www.aibaodan.cn/163szlhdkxo.html

"autoload": { "psr-4": { "App\\": "src/" } }
来源：http://www.xuanzx.com/163urrcicls.html

[U43] PHP：声明命名空间
来源：http://www.aibaodan.cn/163krdwqlup.html

namespace App\Http;
来源：http://www.sxryk.cn/163kycvyagq.html

[U44] PHP：开启严格类型
来源：http://www.xuanzx.com/163jeyygeia.html

declare(strict_types=1);
来源：http://www.aibaodan.cn/163xeecdfrd.html

[U45] PHP：类型声明与返回类型
来源：http://www.sxryk.cn/163leohnkdu.html

function add(int $a, int $b): int { return $a + $b; }
来源：http://www.xuanzx.com/163vazzwldx.html

[U46] PHP：可空类型
来源：http://www.sxryk.cn/163jsfbmqrz.html

?string $name = null
来源：http://www.sxryk.cn/163wnszdjga.html


<!-- 参考信息 -->
外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163uzenwzer.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163sdiahmey.html

fclose(f);
来源：http://www.xuanzx.com/163bzphgjdp.html

[S12] C：写文件
来源：http://www.xuanzx.com/163killxtby.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163twyeabcc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jqkkycey.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163pfzizjwo.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qeljbdra.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163jteackda.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163votjjrsl.html

(double) a / b
来源：http://www.aibaodan.cn/163bswozoeh.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163neryhrez.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xoggzyqo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163ynygaiqy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163erekhjas.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163yhqpqntr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163pzqededa.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163thmomkuz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163icdcevwd.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ktyhluan.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163goyzmcdw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ekwzaphz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163xuybqgtk.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rnwmyqxw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qzkkgmwy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163szphyykl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jrdfbtjq.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163twbhhaxc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163sildclyk.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163dvtunhol.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163jduqbeqo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163qmpxqroz.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rvljbatc.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163bkdzzljr.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163judhufmb.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163lywfcqjb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cdycpryk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163njaslkgn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tjyapjqg.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163eqdaizcg.html

#ifndef X_H
来源：http://www.sxryk.cn/163aeuirhnv.html

#define X_H
来源：http://www.aibaodan.cn/163yfwiehff.html

#endif
来源：http://www.xuanzx.com/163zzszzjrf.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qwqxlwzz.html

#include <iostream>
来源：http://www.sxryk.cn/163fkcneqcf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xnmekbps.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xskbgtty.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hgaompyi.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163gioxzthr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163kvpiwfck.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163datssvgb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163tukxqcpr.html

[S35] C++：map
来源：http://www.sxryk.cn/163dgeryhnv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tjeijqhk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163udrhkpno.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163paaljirl.html

[S37] C++：set
来源：http://www.sxryk.cn/163lcrvyhge.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163eymeatkw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163cmlwnduj.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hvnfwmyy.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163fwlzgbxr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kludlwgl.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163lzbgihgr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wtmevfmw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163dgntzgam.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163wrucurmm.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wrrnzsmw.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jnaedtvz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xlexdhzr.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163bgockfmv.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zqgxaxmm.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163eqgyyjef.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cuyirugc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ufjdqtci.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163lkvhxumn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163wftphmgc.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163plxcczkg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163olhxfolc.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nrdsjazu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163csxeyzmg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wtufnife.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163abqknuek.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ihdzpoue.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ocnejryu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qexxxknq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163afviqflt.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163devjlquo.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163bymcopbp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nbqkpoeg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ctxwklrd.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163rczocrsn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ropxcmfj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163aavdloxj.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ocaunyyu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163acjjvrjm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wzjcfmlj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kjgtuskn.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163yvvalgra.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163oyjoctyu.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163cbqfgofb.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163utnbxjxw.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163hdnntvnf.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163rcwebtny.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163lswewlke.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163jrwdkroq.html

================================================================================
来源：http://www.sxryk.cn/163ewuerfgt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163lsaqcmnl.html

================================================================================
来源：http://www.xuanzx.com/163vfmzuiyy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163rdtpkojl.html

println("Hello")
来源：http://www.xuanzx.com/163atpykcbc.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163qxfsairk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163kwghunjd.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163qkiybtza.html

"值: $b"
来源：http://www.sxryk.cn/163kikdfbkf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163nvaovvho.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163bawpbtwx.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163rarsgvkk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163wojtrddj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mcnfsfdk.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163lfsmyjjq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nphgvlai.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163idyrosem.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163idcwebby.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163syhpwaua.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163mhhitsef.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163crgcpbee.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163gzyqqpxl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ovonnhti.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pgpigeqf.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kabvufoc.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163lgubcewn.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163cwnmcjpm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163dxsqzvta.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163jaknbrdb.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kwmvwarz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163htxmzsdp.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163sceakrom.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163lxckaiwr.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163mqxnmpfq.html

print("Hello")
来源：http://www.sxryk.cn/163etjkcbxw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163maniplfv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fyaucvci.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163jyfuxrsw.html

"值: \(b)"
来源：http://www.xuanzx.com/163vaaivmgt.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163bmvwiwdo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163aywvlgci.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163bdrznojm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163fraxctmw.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163yrpdrael.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fhbjvyab.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163pqrdmqif.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163shuewhqx.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163wvsxphbw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hviqkbih.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163jjcffzlu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163vzczcrtt.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163eputynsq.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163sbcdzgsw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ufvoagdi.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163lggznvjp.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163xrslkhud.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vdrzdfcw.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163dthyspzm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ifxahphn.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163cdchdwjp.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163recyxkad.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163xlgwioap.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ictswcjw.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163uiwxnoqr.html

print("Hello")
来源：http://www.xuanzx.com/163knnxhfmn.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ehorkzlb.html

local a = 1
来源：http://www.aibaodan.cn/163llrqqrei.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163sblsjhhj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vvjwmlpe.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163vqhihjjb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163pgpbompz.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163qntxemet.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163xicxgnmh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163drxevhcw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163bjufhiyu.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163icedznom.html

"a" .. "b"
来源：http://www.aibaodan.cn/163sevuuwcc.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163oyxawuvg.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163omsvpvby.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163lyoghvys.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163vniirvkl.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163aknxskok.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163sgqciann.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163ljtwhjuk.html

print "Hello\n";
来源：http://www.sxryk.cn/163rpldufcw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163mmxhbaol.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163iiywstpr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163jcnrknow.html

"值: $a"
来源：http://www.sxryk.cn/163xnumohix.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wbatgjac.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163yblshemi.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163noeyrcuf.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fkxjgdek.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163efkufemo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163axrbyfbq.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163zrfswmgc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ttrrnfqx.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163eycvutds.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163vhlscqfb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163lsttozoo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163esiwuoqy.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163mdcbvywv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163nbqfavto.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163cpercszr.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163zjnxzijz.html

println("Hello")
来源：http://www.sxryk.cn/163sfnpggef.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163riagimrt.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163mrphngkd.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163dzmypmjg.html

s"值: $b"
来源：http://www.sxryk.cn/163javalrmd.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163ythqafgs.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163htmlaaiv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ugyzzumt.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163eixrkkpv.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163ddacxjpe.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163koslgfvu.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163yjnzspkd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163gnyytwkf.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163cglcggag.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163hymyjkel.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163puqlxsit.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ndmwcwcy.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163icpnsxte.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163gdorpgle.html

================================================================================
来源：http://www.xuanzx.com/163mxndariv.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jcjixine.html

================================================================================
来源：http://www.xuanzx.com/163vihzntdw.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163niwzieuk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ewqipuxr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163mwwbepmg.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ohvltesc.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ezmqoloh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163goyskrld.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163bkiycxhp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163rzsjlnni.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163hdihtaxm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xnypvpwf.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163teuoslts.html

{**a, **b}
来源：http://www.xuanzx.com/163wetqpoks.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163vizclnyi.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wxezgnwc.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163qouvengu.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mcwfujik.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163qjqvmatu.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163exjahubm.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163igppxxuj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ebuozlus.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163mabkuswt.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163seviolom.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163fxjkgmqy.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163trcmldzm.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163hocuhsce.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163cbkzijzz.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ngpdyled.html

defaultdict(list)
来源：http://www.xuanzx.com/163mzuhzdex.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163eblhevde.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163vdofuyju.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163cphrtqja.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163oqtbegzj.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163diyxhiqe.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163dqarmvis.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163hzvzyjsi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163qschmgmn.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163rmhkbhbb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163wvujifiu.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163fwhtnphl.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163mtyfswli.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163xdnrsxos.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163vusfebuq.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163saazaxvv.html

list(zip(*m))
来源：http://www.aibaodan.cn/163jfrviidw.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163feesoadj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163cyyvmwsp.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163sidjtpgv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163boivnjlt.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163tagtjbhv.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163idwcofuj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163zurwdfmk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163mpmjmazh.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163gmgjwpya.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163qpcqbhxb.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163galmoovo.html

UserId = int
来源：http://www.xuanzx.com/163vihrziyf.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ulowmxcp.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163idhwdhbw.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dscotfdp.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163ptwpdpsf.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163jgkrzccp.html

python -m pytest -q
来源：http://www.xuanzx.com/163axzibmmb.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163gxbwokhz.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jgvzrosk.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163jzhrooax.html

python -m build  （依赖 pyproject.toml）
来源：http://www.aibaodan.cn/163trwhxodm.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163uxirpzyl.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163fvacypcj.html


<!-- 参考信息 -->
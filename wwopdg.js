外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163zvjydfmo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163cvuvmlvt.html

fclose(f);
来源：http://www.sxryk.cn/163upyjeaxj.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hzrpfcwx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163sgjtookh.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163klafbqkz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163rqbeubao.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163pzspzzad.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163slxcjwbl.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163momyshld.html

(double) a / b
来源：http://www.xuanzx.com/163fccxcoev.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163vjbaqpcq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ghuymtdf.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163bvspkppr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163emnexbxo.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qdwskwfh.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163xpyihyuf.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163sreoxpxz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oqggosgm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tzyyzovy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ozxeovoz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fdumjjzo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wzctwtyi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163kmzkrhgs.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163itmulwvo.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cxvsagzo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jmvqntdh.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163rvptjtfs.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163vsbmnozz.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163gkwmjmcq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163rqbgdoxq.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rtbpozsr.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163stjiaxew.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163wpaxbgww.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163bgdjllvd.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163brodpoda.html

static int counter = 0;
来源：http://www.sxryk.cn/163mzmuaeko.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163hnpwtktm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163jaluxnbu.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dlwfisjz.html

#ifndef X_H
来源：http://www.xuanzx.com/163hjvikikc.html

#define X_H
来源：http://www.xuanzx.com/163wkpvotef.html

#endif
来源：http://www.xuanzx.com/163qmgjzgkk.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mjzrvyux.html

#include <iostream>
来源：http://www.sxryk.cn/163xepduyjq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mccyjzhk.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ztrrahls.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163rltgfnfv.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ksqzdejv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163arrlgxsd.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163zkukbcqi.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163exuznyko.html

[S35] C++：map
来源：http://www.sxryk.cn/163pqcuzftw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163dnxbveqe.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163lwdqfxzj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163cozypxoc.html

[S37] C++：set
来源：http://www.xuanzx.com/163ewoyrifq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163yvrznerx.html

[S38] C++：排序
来源：http://www.xuanzx.com/163qwslwdlv.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xrjodquw.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ehsxgyza.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yvnmshoa.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163bfqbttkp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163gmcngegz.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ljjzsfki.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163sipmhxki.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163uttzujpk.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hucgkvgg.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163aoutqqvl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rcsfmvda.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163rpmkuiiq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163bgyldkzw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163oghcpjbs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jfhtzwbi.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mfyhyqcb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163lqdzkthg.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163rozkdrbo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163lmkpjzwa.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ronnhmpb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vxgisrin.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cwaxtahq.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wftvamqy.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gwepgaqq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163rnrerbxm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163nnrdaqwu.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163xywvdjje.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xtssjnlv.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163rhudcigo.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ihgxnwnb.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mougmhrb.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163iwintgkq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163kzwmhugg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163wkxsgvez.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163tdyqvcuk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163yyrrytke.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vuorytlg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163dqniirdo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163tjavkumr.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163weivhnab.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163mptkvkaf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gryclrem.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163pzztdzhr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163pvetmoew.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163kveflgup.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163kinaapmb.html

================================================================================
来源：http://www.xuanzx.com/163fcsawqts.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163xmibuwux.html

================================================================================
来源：http://www.xuanzx.com/163cpdzvtbu.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163yvwliana.html

println("Hello")
来源：http://www.sxryk.cn/163olkjhunf.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ketjnciq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ojkakjiy.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163hopzeafk.html

"值: $b"
来源：http://www.aibaodan.cn/163jcyigsit.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163uataigaa.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163vcjbwyzc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163srylocjj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163odfvygrp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ezdvzzju.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163maeogxrh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163jersnjwj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163rxxmommt.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kktunlox.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jpuyjyfq.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163iopypubw.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wvecviii.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qnwrtyru.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163qyaygxgt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ncaufbtx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ohlvqppz.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163zpnqpiop.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ihxgwwjq.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163crcceemi.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163odmdearg.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pzfejyqi.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xmydemzw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163oefuwknr.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163edqbjvrv.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163tpcjvooz.html

print("Hello")
来源：http://www.aibaodan.cn/163sixaoerk.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163aiealteq.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163iuwnfjga.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lrkxkdmk.html

"值: \(b)"
来源：http://www.xuanzx.com/163eoxytepf.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ikphostm.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rdgprrsj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163oppuqika.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163mnacbpkg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dxhbsgax.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163baoncbjp.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163ammoznnb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jqgbhfde.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jchtmvbx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163oqrohclf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163utnmbovj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163pqkhrtbv.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163aviigitl.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qgaxtgbv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163joqckdax.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163wtzabqog.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163zmrsfksx.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163khwowivb.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163tkbrifoj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163pxebrcio.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163ukrnaxcr.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163iqdniffp.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163gdgxatop.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ilntxqcb.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163bxcradwk.html

print("Hello")
来源：http://www.xuanzx.com/163fjwlhljh.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rxbzgtqh.html

local a = 1
来源：http://www.aibaodan.cn/163cbkyinnf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163dvdlmlko.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vhyzaafp.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tbnwuyjf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163epuogekf.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163irogjtzj.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163ajslqkwq.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163qzvwcxmi.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163maregyei.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163vnqdwnwp.html

"a" .. "b"
来源：http://www.xuanzx.com/163rxssmqgs.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163rvpqddud.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163fdrawiqj.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163mmmdrkzz.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163kzqjktcr.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163csluayqv.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163prycpllt.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163egfwxioy.html

print "Hello\n";
来源：http://www.sxryk.cn/163qgamylba.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163dgpjanrd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163tjnieqxa.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163jejoomxz.html

"值: $a"
来源：http://www.xuanzx.com/163edoydoxj.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163sbyrehou.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ykjlzmtf.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163iphpbbdq.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163gefxemtc.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163omfkhklm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163zrwsehjq.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163cwzaghic.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163motazpzm.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163mgdtyzjc.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163jhqzeiow.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163nzvsxvbc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163triwmfck.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163amqnwezh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163hwezzpfg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ybowaedc.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163bwktckrc.html

println("Hello")
来源：http://www.xuanzx.com/163tnzzjica.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mxupkvbt.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163wznkxzve.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163ieiaegbn.html

s"值: $b"
来源：http://www.xuanzx.com/163julcwqps.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163aepvfcng.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163dcqeayxv.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163vkatevud.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163fnwkdwkq.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163cjlunlsd.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163mzsmkxyj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163tyygbpog.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163qzwkfzff.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163pjqdtzgv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163fjlavnxz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ftgtomtg.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163pjbyanlu.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163tmoxpalj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ismjiaax.html

================================================================================
来源：http://www.aibaodan.cn/163cypzpozh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lahaltdi.html

================================================================================
来源：http://www.xuanzx.com/163sfgjqral.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163xtpvbgjj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163mutltkfn.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163culcbxaw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163zmtqqpza.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163uskarnyl.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163qciiqexo.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163waqirzvw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tiiulmil.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163rgxwhwed.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163yrfbybbz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163keakhavz.html

{**a, **b}
来源：http://www.xuanzx.com/163wvlgccrj.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163rmxyludj.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163lokelgps.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163mndpehbo.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163yrnmjfmq.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163hrsqxehx.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163krvmmksw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163sosmozqj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163utmbsilb.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163bhofxmne.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163jqrature.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163pyftaghe.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ilkisfhx.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hzmuuqxw.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163raeuldsy.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163uxytyddb.html

defaultdict(list)
来源：http://www.sxryk.cn/163uydqnllm.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163jpvfulig.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163oiwwsyxg.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ljxriebz.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163hpbycrul.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163dqvyjxkk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163enjlanax.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163yhybqlhp.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163qdycmqlc.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163bbwxxrei.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163gsskkxgu.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163hpxqbesa.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ythizvfp.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163ahsdayxa.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163rkxcikoa.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163uvswrycs.html

list(zip(*m))
来源：http://www.sxryk.cn/163qvrpcrsg.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163oiysceql.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163fuowxqht.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163ejfeaivl.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163uvjeulsx.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163ygpfpxli.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163zufhmkvg.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163kpgdozqv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163pprszygn.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163sxeuiyod.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163lmortdok.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163irndxrxo.html

UserId = int
来源：http://www.aibaodan.cn/163yybzwuoy.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163lslvnzfw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163ejzwhelh.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163pyytekra.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163ciuimdjj.html

[U31] Py：单测
来源：http://www.sxryk.cn/163lfwnrjeq.html

python -m pytest -q
来源：http://www.xuanzx.com/163dfehbifb.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163dmnqdfvk.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163oicdcyik.html

[U33] Py：打包发布
来源：http://www.xuanzx.com/163qylbgkmv.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163afanozbe.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163kwbhmijs.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163mgkbpwfq.html


<!-- 参考信息 -->
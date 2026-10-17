外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xovpbmor.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163yacwfssj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163vlmwqwue.html

[S14] C：枚举
来源：http://www.sxryk.cn/163tqnzmilo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163lzmdfzlg.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ntsfsxbi.html

(double) a / b
来源：http://www.xuanzx.com/163nhcmtucw.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163punqwrxj.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163bnlxhfbi.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163cbceanew.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163mqbrkyux.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163cudaolbl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zvrlvhpi.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ocvbmllk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163yglaeaqn.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163dxvjvfib.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kqjyixxy.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ituwonmj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kgkktxxc.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163smovgwcn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163cdcvhriv.html

[S23] C：随机数
来源：http://www.xuanzx.com/163rikjalny.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163duprelyy.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jouzqqyf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163qrlevhls.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xntcdnea.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163taeurrny.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163eljqijdc.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jhisxnfh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163sqecuuts.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nzrxgluj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163axfprmgh.html

static int counter = 0;
来源：http://www.aibaodan.cn/163iklkxeaz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zygopedx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163epykzmdb.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163xqfuvjas.html

#ifndef X_H
来源：http://www.sxryk.cn/163otizxbvq.html

#define X_H
来源：http://www.sxryk.cn/163ymgmfynz.html

#endif
来源：http://www.sxryk.cn/163guuqxvci.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163orfwekeq.html

#include <iostream>
来源：http://www.sxryk.cn/163mswfidzh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163nbswgley.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ggvbpmbc.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163zlkgzeyw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163krwlsabt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163gsvleyvz.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rijrxybp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163bhnoufbz.html

[S35] C++：map
来源：http://www.sxryk.cn/163epaexfnl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tzcrsnrq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163miuherdm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163penehiyc.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ypewujnw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kuepgxii.html

[S38] C++：排序
来源：http://www.sxryk.cn/163xwqhslvt.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163pzhonhmq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163maowbkwc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163rvmfjbsv.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163dvthagyb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163bjhedqaj.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163befoalug.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163nwipidlb.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lyqyxuce.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163tryclkjj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163pzkxafdx.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163abkruczx.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163uvzxsjcd.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163egibjnxf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163kvymlepx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163jelnbzya.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163chhomnay.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163hxrwgokv.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dtlkrxxt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163uinugpgk.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163lzbqsmce.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163rrtqnxln.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163wengqcdb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ffqxfvnt.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163hbdkanqi.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xibheiec.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163lwecpdij.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163bmssgwwn.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163nnpcrpsg.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163kduhyqkp.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163dinqwzib.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163jqvrsfxl.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163tubnosoc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qauwtpeo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163tuqtlssi.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jajnfelj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163zrqfgwgb.html

[S56] C++：optional
来源：http://www.xuanzx.com/163rqdscjaz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163ohqfwxvi.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zzbagdes.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ddgexpxn.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xuclcyhm.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163nhtzxasp.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fxxdjhqe.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qteaupuj.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163lgjyanlc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163csolgyze.html

================================================================================
来源：http://www.xuanzx.com/163ombhyxrn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gbjfuegq.html

================================================================================
来源：http://www.aibaodan.cn/163dmnsgtss.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163pzalkvkq.html

println("Hello")
来源：http://www.xuanzx.com/163ehoimjbm.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vffbhbnn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163adzyxses.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163fxnixrnl.html

"值: $b"
来源：http://www.aibaodan.cn/163ehjgkmlr.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pkvnaoll.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163daytwheu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163pqozfmam.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zirngfii.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rpkbtejh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163dqqftdvh.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163thlalihg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hulpmpoa.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163koambmio.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gksekpic.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163njsdzxim.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163wppflayf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163heqlleti.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163zbtwesqz.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163deizxtkh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163himvndmm.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ptofvzzf.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jjzucicx.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163etgejffs.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163suauorce.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zjafzzzs.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ezykawuw.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163lpconlxz.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vhegpnym.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fuzvaeed.html

print("Hello")
来源：http://www.sxryk.cn/163chryrgqm.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163bukeotjq.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qcrezywf.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163mitktyvs.html

"值: \(b)"
来源：http://www.xuanzx.com/163zoplfxgc.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jbekkmwt.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163drsvvkxo.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163qcveudli.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163fsazoaev.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163gxomnwax.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163dbrhflhq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163yryxvhmv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163prkdtlxs.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163afeyauid.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163djhwjrlh.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163tlfksbcg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163kyjhzeor.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163pzfddigy.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163kucbtntq.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ysqiauce.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ggsptgxt.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163pbkqcfiy.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163aohazvja.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rvcrbapx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163pqppyyew.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163kkjjluoc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163csmwpgpm.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163bvzimtfw.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163fztexqii.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163isyudarm.html

print("Hello")
来源：http://www.xuanzx.com/163umytepsl.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163jlkacdfp.html

local a = 1
来源：http://www.aibaodan.cn/163vswoxhjn.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163jrpbplne.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jcqricmr.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163tllqljbz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163bfgztkzt.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163khubjhhz.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163caqibhjz.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163uqebjhnp.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163xgitwzqs.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163mgnznavp.html

"a" .. "b"
来源：http://www.sxryk.cn/163exbrgvsy.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163frlbbojb.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163hwbfyocy.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163enhqyvtm.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ezotyuwv.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163gdbonvjv.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163egjyvbii.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163abjbcmnk.html

print "Hello\n";
来源：http://www.sxryk.cn/163grgcvycj.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163mgqflrrg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163uqrqvclb.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163qmvrjqmi.html

"值: $a"
来源：http://www.aibaodan.cn/163mlbfxjhw.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163omghydxw.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163wlxllevn.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163tillqgko.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163tepwjzuo.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163kwyonmad.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163hjnvsdvw.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163kmrfrzkx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163wjpavcfx.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163vlgnzuuo.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163sdgvsryl.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163anddpdej.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xmmcxptm.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163wwucskyw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163rdztngdp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163icpvdyai.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163pwzbkjpn.html

println("Hello")
来源：http://www.sxryk.cn/163zrszhhav.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ljkeyfgy.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163elimczqi.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163vfhliuyt.html

s"值: $b"
来源：http://www.xuanzx.com/163rufeztnj.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163gppqekoc.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163exrbnlno.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163uumfalqd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163blwigeob.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163aeedwkvi.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163tyuzodod.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163hjbsitua.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163pchbuglr.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163xkvsntxt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163jeitmain.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163zudfrrfk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163noyorjey.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163envsindi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163puxghrsl.html

================================================================================
来源：http://www.aibaodan.cn/163crzzoqnm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163paomnrqw.html

================================================================================
来源：http://www.xuanzx.com/163utwutjqm.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163lulratno.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163grxpgvtb.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163rmubdocj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163pvpqwklj.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163bzmqztxo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163mcadhabw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163fhtfrlhs.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163lsnjzlof.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163lghskhfu.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ncjexddl.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163igwmzned.html

{**a, **b}
来源：http://www.xuanzx.com/163rcfatgsj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163tqrvqrmc.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163hyzvnlkk.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163kvxukbgq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163cwmhlbls.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wocywuzx.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163fasvxfol.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ttdxtakh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163etxfcqka.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163quxcogjn.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163hldjvnkw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163sucupwls.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163zvbfmuks.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163bonjrpuk.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163qyxrrhwp.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163fwiyanov.html

defaultdict(list)
来源：http://www.xuanzx.com/163nqdhzyjw.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163oamncekc.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163siznbeeu.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163urdowivj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163wxckmnpt.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ffogmlmb.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163lbikskks.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163mtyrteiq.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163gpmtkgtv.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163fdvtpdwm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163dvwzllql.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hjcwujmk.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xmbnoiux.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163clddfffa.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163gayjxalv.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163icuoyyxz.html

list(zip(*m))
来源：http://www.sxryk.cn/163mucpvqwr.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vlcxsvyr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nipkexjb.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163xoulzfml.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163lhstyiay.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163jfauzfoq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163dbvesifr.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163gfztwyat.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163siukapzf.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163zzftzhmp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163pvdbesnv.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163yqctikrj.html

UserId = int
来源：http://www.xuanzx.com/163qupcsrzr.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163hnhtohit.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163ndgtdmwm.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163nwveokvy.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163yestcgtw.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163kcpoowbk.html

python -m pytest -q
来源：http://www.xuanzx.com/163quyijjkf.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163lrkvvrdh.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163kcflitxw.html

[U33] Py：打包发布
来源：http://www.aibaodan.cn/163mwsxrmtm.html

python -m build  （依赖 pyproject.toml）
来源：http://www.sxryk.cn/163xcxelrob.html

[U34] Py：判断编码
来源：http://www.xuanzx.com/163wyuvfcrj.html

chardet.detect(raw)
来源：http://www.sxryk.cn/163inrxvnal.html

[U35] Py：发送邮件
来源：http://www.sxryk.cn/163bhanlgjy.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.xuanzx.com/163qzqelaij.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163cvpgxqsk.html

schedule.every(10).minutes.do(job)
来源：http://www.aibaodan.cn/163iozmzifl.html


<!-- 参考信息 -->
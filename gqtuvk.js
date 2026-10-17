外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163momseujd.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163edmhdxhc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zozjwhqf.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163xcojebxt.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163tavldlwa.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163bnimbojm.html

fclose(f);
来源：http://www.xuanzx.com/163jxodrkym.html

[S12] C：写文件
来源：http://www.xuanzx.com/163imkxdbdj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yllaimdn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163ioudlbdo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mvffbegz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163luctfoom.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mpqavtel.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163ccwjmnyh.html

(double) a / b
来源：http://www.sxryk.cn/163dtklzkay.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163krwroesn.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fkwfadod.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rxjsdwmw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ernjtsmj.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xdtjfqoj.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163lvzogkrt.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163tiadhtnn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bhtmzueh.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163feeqyton.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fkugapxf.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163epypddhk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163bxucwgbg.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163rpljewac.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vhrsnuzw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163xjmqsyfy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wojyovck.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163uqsvwago.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163tduzsebq.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163undyznnn.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163gksvnmab.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163kdhlxxsb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zsrhvqmk.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163zqbjmjoz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163iacuriwe.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163uquabiqk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163lurwjfwf.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163chmufjrk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163rweprlfm.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163cecsimgd.html

#ifndef X_H
来源：http://www.aibaodan.cn/163tnvtihjz.html

#define X_H
来源：http://www.sxryk.cn/163hqkkbwmk.html

#endif
来源：http://www.xuanzx.com/163vuudufxq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163oboghpew.html

#include <iostream>
来源：http://www.sxryk.cn/163lfekkdcl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163exetyhgq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mrrmmxup.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dvcfwbim.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163dqnyshcl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gndgiott.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hpdzjtcv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zyhvkrlx.html

[S35] C++：map
来源：http://www.xuanzx.com/163tkubnlam.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163awbtvuyg.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fequmyhq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vhwdwyux.html

[S37] C++：set
来源：http://www.xuanzx.com/163cegilzal.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vhomteci.html

[S38] C++：排序
来源：http://www.xuanzx.com/163lgjlhqrb.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163zonbkjqb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163xerbxogg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163yxzpbslf.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163sqmhmgbs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163lharbipl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yzcjlkpx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bhciljxt.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ahqyohor.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163snpeoxpt.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163evngqzgk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163mfehphdu.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163gerhfkqj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163autjwluy.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163upsfcnoq.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163joqksrru.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163gjjbsgqk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uzyimyvz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ovhosygt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ujljlhya.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163etcebtlm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163bubtpydi.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cfiwpmbv.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163uwnyphqm.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163uaowpmca.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kcrxpfcm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bvkxdgqr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163axmtygny.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163whaaevew.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pxxsvrrx.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163bnhmykwk.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xrguotqh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163swqzjjsc.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lgykgfwz.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163hzrncsvm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gawajpct.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163xprtlsdr.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dpsmebtv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tjsidmhq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gvphjwpr.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163aoxfxxgc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163dezadngu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163idwlflou.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163kkmwabvq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163priekauq.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163cpbzvvpz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163bvwuxjcr.html

================================================================================
来源：http://www.sxryk.cn/163sflluvnn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163cyqwmvnp.html

================================================================================
来源：http://www.xuanzx.com/163qyicbruu.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163gskyfurc.html

println("Hello")
来源：http://www.xuanzx.com/163hefpfiui.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ymoqdsmv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163eaaotbcy.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cwfewqiz.html

"值: $b"
来源：http://www.sxryk.cn/163knsecewo.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163vbbjhkfd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163wrubariy.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163byroqorn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zwygzqdr.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163isoyqfpv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ruvnvcui.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163dvycfdsh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fcshqlln.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zzhjmngy.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kzfvbkeu.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ftiweljg.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ggnhusmx.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163zncixxze.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163mnvocqgx.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163fdufdptg.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163zudoqfrq.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163jyzqcvqz.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163tjbpzzux.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uytujxvc.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163doajdhom.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163bjqllgrn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zwxlwour.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163otlsjmjv.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163rxvvqmth.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163jnnwqcmz.html

print("Hello")
来源：http://www.sxryk.cn/163hbcuffkh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163pipgrafl.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ocibhctu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163rzkambxi.html

"值: \(b)"
来源：http://www.aibaodan.cn/163dchjatpq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163rgqogxek.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163wpjvsnmu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163fzdypybd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163wygojzgv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163nyhfwcdh.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jxtrezaw.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163fsygpnsu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163pwidlqqm.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163xdepgygd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ehvdokuh.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163kcmnojaj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163otcosoov.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163djqzjxhc.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qpodwnya.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163kgoxgcpu.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163igkvckmm.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163zwmjyllg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163eoolusjw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163hjiwuxkd.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163pbqzkvmi.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163vlqhtxzt.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ektfzlif.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163amasinql.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vvooyjyk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163beqsqysq.html

print("Hello")
来源：http://www.xuanzx.com/163jevjgevt.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ngnrmqii.html

local a = 1
来源：http://www.aibaodan.cn/163oonqvpak.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163vdoftqwo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163mhhqvbvs.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163carhbrff.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163eyzfzmhe.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163muxddizo.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163cjueuwiq.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ilzczpif.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163zvgnlopm.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163lpkvwiwm.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qeskxjnr.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163foblweew.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163wzyulwzt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163odezirsk.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163mvwsagqx.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jrcaagfd.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163czpcxkue.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163djgcrdcx.html

print "Hello\n";
来源：http://www.sxryk.cn/163ymcwpdqx.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163wphoppof.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163lidhhnoa.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163scbtbkxt.html

"值: $a"
来源：http://www.sxryk.cn/163kjpzlgew.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163irdiqjsk.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163abohgkdx.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163bbunjhfw.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rgdlhmwp.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zfouzzci.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163bgcxqzdp.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163njxrbefq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163nibkedlz.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163kmchtwkc.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ybepbvvp.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163wzmfppro.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bcwmigbx.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163mpnzxyom.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ardcdkhg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163phrhvbyk.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163fxxvlivr.html

println("Hello")
来源：http://www.xuanzx.com/163iqoadwzr.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163xneswuad.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163zlzhxrmd.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163kwqbwrab.html

s"值: $b"
来源：http://www.sxryk.cn/163auuperbb.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163osjdipha.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163zfouxfsf.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163suhozele.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xlxwxyfy.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163pkdkcrul.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pkpbnaew.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ujvvcgnb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163fabmuify.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163sxzfmhfm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163mgunvklb.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163pxkqbckt.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163rrrfsyle.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vudthhfu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163tfechcuo.html

================================================================================
来源：http://www.xuanzx.com/163yhvjltdr.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cptkpfxs.html

================================================================================
来源：http://www.sxryk.cn/163xghtpsgq.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163utkfvbwj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ucirhpum.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wwiwksai.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163kutqysnf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163edlqfmsp.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163cshulwcl.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163wcvlsxdt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163uuinofpl.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163sxpjyxlq.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163eghrxlgw.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163yieqmsrs.html

{**a, **b}
来源：http://www.xuanzx.com/163wilhfvid.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163utgmosbe.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163weuiyzws.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163jgdjbkbw.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ttepdqie.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163etpjsqgo.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163qhpmfqxw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yscgmxwg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163ipxyuswe.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163jzsomnkc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ttzjvyua.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163mpvvcjst.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163frdyhzzl.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163jvnjwgcf.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163zocpivfq.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ihrausli.html

defaultdict(list)
来源：http://www.aibaodan.cn/163nutdblwo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163lfcmoact.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163rbmhphjd.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163sykovtnw.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163uwjktcwi.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163rgmghucu.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163woqithfe.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163lihrered.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163cajgbfjy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163nkiqowzx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163gxjgzbao.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163txkazyrs.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163rpgyszrf.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163zixvvexl.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zgqddokb.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163trrbfglu.html

list(zip(*m))
来源：http://www.xuanzx.com/163xqqgiplg.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163yjpjxjxe.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163pvorxfga.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163psxjfdio.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163kcorbimj.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163vjhksdjz.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163rejarvmp.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163cdsgsssy.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163pcexosuj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163eeompplt.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163zpaowkow.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163bnqefhii.html

UserId = int
来源：http://www.xuanzx.com/163yanbtydw.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163atyaclkb.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163uxebpjzz.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163ledingzb.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163weuzaaww.html

[U31] Py：单测
来源：http://www.sxryk.cn/163cjvtzivk.html

python -m pytest -q
来源：http://www.sxryk.cn/163ouupgcwq.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163mcdbngzw.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163nrunfwrw.html


<!-- 参考信息 -->
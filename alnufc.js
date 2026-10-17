外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163fsnzumir.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vcivuboy.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163jeeokxvg.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163haztslwp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hevqskrt.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163filwlqcp.html

fclose(f);
来源：http://www.aibaodan.cn/163qygetmmd.html

[S12] C：写文件
来源：http://www.sxryk.cn/163xnvaqonj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163utoyevce.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163dmowbqhs.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163plssypki.html

[S14] C：枚举
来源：http://www.xuanzx.com/163actmscrg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163onewntqv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tyqqhgez.html

(double) a / b
来源：http://www.sxryk.cn/163luuwwbfl.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163pupuumjf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163qmjqrctz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163psbccmoo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163cvkasjln.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163xzgheoqc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ltprtupw.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163thazczri.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rnkwkhxv.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163trqowqbu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lbbcmqgu.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163axucrlzx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163lytgqxpi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163bmhqlfhh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163qzrjkiot.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ikzjhmxj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163mawgvgxv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wdcdrdxc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vkyvjica.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163faelygeh.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163nvphigiu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163aolqioke.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163rfcajgii.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163eppcbpzh.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163srugonot.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163nvyavban.html

static int counter = 0;
来源：http://www.xuanzx.com/163dztmcznc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163njupwmlc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zaynewyd.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163zsvblcrh.html

#ifndef X_H
来源：http://www.xuanzx.com/163dedpfwkk.html

#define X_H
来源：http://www.aibaodan.cn/163dqpwukem.html

#endif
来源：http://www.aibaodan.cn/163wsdzbfzh.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163jcalbocf.html

#include <iostream>
来源：http://www.aibaodan.cn/163iefslvub.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163opqwtntw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vzsfjjbd.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163rozdlaip.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nearjhcq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ljolxjry.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lryhrjra.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163mdkeduml.html

[S35] C++：map
来源：http://www.sxryk.cn/163xdqtwqpn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bkcgawwn.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163qsitcuwm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163epphyxgn.html

[S37] C++：set
来源：http://www.sxryk.cn/163uiuutcqq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gbiwqgcg.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163yogrinat.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163arscahxa.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rehxpnkb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163xkidfsia.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ccjvdyxd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163vkbkbwmr.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pgiupkrh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163pgcqhqem.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ieoirfdt.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163usujtakf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163tglmuqto.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163llxuingi.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163utjodukr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163dlwching.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ifnyrobz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163xaoatuso.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163fvwruekv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ltodenxd.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163aglinqve.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163vzsecpdq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163yvbfaayq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163snvofgct.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fgabsqxa.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163wyfjnisw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zrbmgjxg.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fkdxayrc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163igfqhhgf.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wnawfigv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163qoloyehy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163skwiwttq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163pbpeypln.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163xrxwmvzu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163hnssargo.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fhnivxna.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163nshqkkaj.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163jvatixuk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163vochyiat.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kmcmlwjs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yuictexw.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163nmuwxemv.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yxbnfeoc.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pzafbshm.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163ckxcczts.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xvhvpooj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ejefpuuy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163yljrfnbc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hlyxhcyl.html

================================================================================
来源：http://www.xuanzx.com/163dauvmrfm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163yvzlzjke.html

================================================================================
来源：http://www.aibaodan.cn/163jhxtokka.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163egjtyvkj.html

println("Hello")
来源：http://www.sxryk.cn/163dafwjcbn.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163lpgxvmzj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163pocfvhwc.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hbyiwoet.html

"值: $b"
来源：http://www.xuanzx.com/163togenxer.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163hcharmyo.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ewfdbupb.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163gpntiotq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163gbtnadia.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163fedkvfqm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vmgulojr.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163amkfwbbc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163kebhhyzi.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163uidjxucy.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163oajdtabd.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163oioocosa.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163yxqhjvhn.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163cducewxx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163qiqyqkqd.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163yinkkstr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kbdipdfv.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163dswetxim.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163rhrizqvt.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163uvkfppqq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163wppylgpr.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qokvqboz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163bjlkntpy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fyzkmykv.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163psqmleqd.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mbskbpuj.html

print("Hello")
来源：http://www.aibaodan.cn/163lzdpapiz.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vhhmfhgx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163guhhxmfw.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163pohwyuje.html

"值: \(b)"
来源：http://www.xuanzx.com/163uhaardms.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163clrqznfo.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163tlwooqmc.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163uczvilqe.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163atfysjjh.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163elpdclsl.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ghexnnij.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163dngsyuir.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163vdngrdwv.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163wfhdjvkn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163aazbtqfp.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163yqpcsaqm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163bovyulig.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163vrqmsnyv.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xzckvtno.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163aibjombf.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163atrpwcnb.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163zklgnajz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163feiuedop.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163qisrwgvw.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ztfoilot.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163objzqkic.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163fbpzgumk.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jfbaofzp.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163wwdhootv.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163gifrbybu.html

print("Hello")
来源：http://www.xuanzx.com/163itdqgtvy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rgaamuvo.html

local a = 1
来源：http://www.xuanzx.com/163eahcvpwu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163zooxivcq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163nwauutgg.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163xtkeetuu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163xcvncfbc.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163dylheadi.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163kkrruwhl.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163oqdfleob.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163alwbbpzq.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163isxokrdv.html

"a" .. "b"
来源：http://www.aibaodan.cn/163emcdssyq.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163jhbqkiwk.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163gkiticni.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ibrkxypp.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163zorllfps.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163dqejkefs.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163okdrurlp.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163gxnylegf.html

print "Hello\n";
来源：http://www.aibaodan.cn/163ouozuvkf.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163dkpxflod.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163kaacfqvm.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163yuilgtuj.html

"值: $a"
来源：http://www.sxryk.cn/163sglogdsi.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163hmgeutey.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163apiuysqv.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ezvjefje.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163gtqqmvrq.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163prgagata.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163uzmplweg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jtyaowwn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163jczbricz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163jjucvvjr.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163uydhkroo.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163oqvbsdup.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nwjfmnaj.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163lcjztdds.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163dghwnqio.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163mnsxscrz.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163nuuadotn.html

println("Hello")
来源：http://www.sxryk.cn/163nzhzzlly.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163tmpfeegl.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163cwohxhly.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163twqvhpid.html

s"值: $b"
来源：http://www.aibaodan.cn/163mbhitjfu.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163uhysjebl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163vbmypcuw.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163uzcehgrr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163cwkmnrxl.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163qcpkfzls.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163njjiysxj.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vxsmlggt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163exuagbud.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163owxafofa.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163gpsfjmqo.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163tidfdugh.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163qelmdzgy.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163mfqbbnye.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ciofhknr.html

================================================================================
来源：http://www.aibaodan.cn/163buqlqclm.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163azfeuplw.html

================================================================================
来源：http://www.sxryk.cn/163acndsvsp.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163pvorufob.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ijgfhisk.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163dwnxqsxo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163fwuujvyi.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163rfgbyrpm.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163aiszoycz.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163gpojxtrj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ezoxifza.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163yqhyhltz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163dtbjadpo.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163lxhndiqp.html

{**a, **b}
来源：http://www.aibaodan.cn/163vzpzijjc.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163bfnfjzdn.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163kjaszufi.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163eqzryoiu.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163fqmfepwt.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ifqokaub.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163rgvycrtp.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163dgvxrbml.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163buytyjll.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163smjgsnpu.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163yjqryleq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163wfwsekbp.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163fflibnti.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163fdomyazo.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163pabidrsp.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163hfpcbdrj.html

defaultdict(list)
来源：http://www.aibaodan.cn/163pcbwobha.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163jqzqwvqb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163xfxmdrfb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163uztqbppa.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163effyhpqt.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163ktczipot.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163klsevxdo.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163wpljzgmu.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zzcdguek.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163lzsfojre.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163eftzidwq.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ucmmktzu.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163flcassru.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hgsgenny.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zknhcqfy.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163piqfbjfg.html

list(zip(*m))
来源：http://www.xuanzx.com/163rrxmwmea.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163osxknlvj.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hjjnqprh.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163bfpqhapd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163dopuhjza.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163dborjypa.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163rljznltm.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163bwyxjobk.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163airypecs.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163dmfupfkk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163haojtidp.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163ocezkhqr.html

UserId = int
来源：http://www.sxryk.cn/163licjljio.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163baxfmlhb.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163dfczimwn.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rtajapij.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163glcutttt.html

[U31] Py：单测
来源：http://www.xuanzx.com/163qejozcme.html

python -m pytest -q
来源：http://www.xuanzx.com/163ztgogbzb.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163bqkifmwo.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163uiqsmqlz.html


<!-- 参考信息 -->
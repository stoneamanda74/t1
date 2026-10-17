外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163sbslabgl.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163kwlujheg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rufsjjst.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163dwcadhrh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163rxxvvngq.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ddkaxxxw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163pmoryjmp.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163tjmfggab.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ejqpuwwo.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163tvjklske.html

fclose(f);
来源：http://www.sxryk.cn/163lzkhgcjx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163esyloato.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163grldxzri.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163rrrwxoky.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163vdocmzjp.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hseradda.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163acihkavo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163laihocze.html

(double) a / b
来源：http://www.sxryk.cn/163csjwmjpp.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kudsxhsx.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fltrvevu.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163qierczfq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ylurebqo.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163mwacrbhs.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163rqaotbtu.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fovysohl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163etxzyxuf.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163iyjvnpvu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cqquwjld.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nhgamefa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163eytoaazl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163yntgtpkl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163dwtoihgg.html

[S23] C：随机数
来源：http://www.sxryk.cn/163knsbtlgc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ytimkmnq.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ksalixxr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163usqaksrl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163piujtstl.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163pfiwigqc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fpqrmczp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163febfkfaf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xsqxypiv.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163uueitena.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163patuxkfs.html

static int counter = 0;
来源：http://www.xuanzx.com/163lwudbqzr.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mdmiddop.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ofsoiunw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163zbdcrwib.html

#ifndef X_H
来源：http://www.sxryk.cn/163dzvifoxp.html

#define X_H
来源：http://www.xuanzx.com/163kohjcfqu.html

#endif
来源：http://www.xuanzx.com/163pmcaafft.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163mtzgzhds.html

#include <iostream>
来源：http://www.xuanzx.com/163qpopkkdi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163kmpmpxph.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163utwzmuej.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163buhgrpvp.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163okhlsupd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vrkgricw.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163lfruwmtw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163gysjnney.html

[S35] C++：map
来源：http://www.xuanzx.com/163zhrtmdtc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yawkhaas.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163hxsuochv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163atcxlpor.html

[S37] C++：set
来源：http://www.xuanzx.com/163kxlxqplu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163nnvlgmya.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ynnndwjy.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163crencrid.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163eboqbpgw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163tgibrchq.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163neeomcdq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163eyoxdkhx.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163yzlibwvk.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fpddxsbd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163jhceoajp.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163kiqzukfz.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163lydrgwzu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ocjqqdrf.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163pgvdupwh.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163qzxrepaf.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163uzqaepjo.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163htfuounr.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163koxbuvnd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163hytbohsf.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ltdstdpl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ezcktnzb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163fccbbfqz.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hqhrbeyi.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ebxzzwou.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163clvbsgby.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ykpxrxlq.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163tfkxwicw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vvpgffuu.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ozslmxjz.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163clnvxotz.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163txujoqju.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163wvdcdyjz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163speneswe.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163fsxrxzax.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163lczfpqqd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ruboxpdm.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rzsysbmx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163gepzpgjl.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nnvgsccc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kodglgxm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163mgblzfzn.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ypwhkhay.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163nweqmjbn.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dgplnnfb.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bdmjtrth.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163jwwzkbij.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163wttphyem.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163vlipashz.html

================================================================================
来源：http://www.sxryk.cn/163tiubvdps.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ggynxhtm.html

================================================================================
来源：http://www.sxryk.cn/163cvadwwgd.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163svldfrkg.html

println("Hello")
来源：http://www.sxryk.cn/163qpznjphx.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163iedixxvu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163yvoqwwpm.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163joauhtme.html

"值: $b"
来源：http://www.xuanzx.com/163bqmseooc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163izzpshuw.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ulblayzn.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jlraonwc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163mmdbxpkd.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163vyfnfevi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163danzvmue.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ldxatehh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163apetvrdh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163iyzduyaj.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163pqcixofh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163zlynemgr.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bogyznkn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163iskkeoey.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163iybqqchj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163dbpnxotl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163eameeadr.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163igurgzdm.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hskueqdc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ydklucyr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163clwnqewx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wuxnjyak.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ansebsei.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kfwxejhd.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163qpgtxxsa.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163nvqywydh.html

print("Hello")
来源：http://www.sxryk.cn/163szhxzqgl.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163gearaasx.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163slnmviti.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163zbmsacrj.html

"值: \(b)"
来源：http://www.xuanzx.com/163oaqhmdfw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163zyqoyrvp.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163zjtbkdzj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163khmvlujp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163mfpvnixr.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163ukmzqyim.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ukmcflal.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163llkcehgn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163uqqbwcvt.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163jobjijgj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wlivgdtw.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163lomrbdtj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163oacvjxvu.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qzmmnsgq.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163nnxlpjyh.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163efbaclff.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qktnhhuv.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163xaicigyg.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163dpboorry.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163gbfbhgor.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163zgyonaxp.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163qbnfpiay.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qdbbjnlq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jaucnpuy.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163pjhuvuxw.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163zyqnltvm.html

print("Hello")
来源：http://www.aibaodan.cn/163nnmochbk.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163rroxwkgk.html

local a = 1
来源：http://www.sxryk.cn/163ddarqxcb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163knbvkkvg.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163wlcbvwdm.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hjfnggst.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163utigfgkk.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163gdwlcqoa.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163dvzxqenx.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163brkbtggv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163xhkdjypr.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163sndgfsmi.html

"a" .. "b"
来源：http://www.sxryk.cn/163ntvmvtwv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163dbcsxcno.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163wwizcchl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163uzigdvxr.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163qpooctko.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kwlmbdku.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163cvkxnvsy.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163mnmgixjg.html

print "Hello\n";
来源：http://www.sxryk.cn/163flfgnxwt.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163jwuziphz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ateqbrmu.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163qfbtoklc.html

"值: $a"
来源：http://www.xuanzx.com/163jcljfjzy.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163qzntmvlq.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163xtzipqzx.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163vaxevjfr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163gejteybn.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163llzrkbug.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163qgutwuyy.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163uptotflo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163wgmzyczx.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163nwexkety.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163lslpawnx.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ynsapkjj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wkrcjvdg.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163gfwybffj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163htbuagpy.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163vnpjkvfx.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ookxxver.html

println("Hello")
来源：http://www.sxryk.cn/163haabdlin.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qjykcfmi.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163izggxojg.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163hyxqiehn.html

s"值: $b"
来源：http://www.aibaodan.cn/163nivqhfkl.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163cxcuhudv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163fdabecgp.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163pwdkqjvn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163oqhbaaye.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163txpgdhfx.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163iqktegpm.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163qmwxycpt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163dromaibm.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163yzcdfhmv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163oiqtylwn.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163nuiumzye.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163pgpzcpfb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163ceismoei.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163bpwqlexg.html

================================================================================
来源：http://www.aibaodan.cn/163kctllmxl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163cihblsbm.html

================================================================================
来源：http://www.xuanzx.com/163wtwkwqwe.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163squvfnyn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iqqxrfuw.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163gmuukfre.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163bvipgiva.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163kskqoras.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163amgljqoh.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163oyquxwbz.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163aovqmkfq.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163slupfihg.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163twsiabvv.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163apaabryo.html

{**a, **b}
来源：http://www.xuanzx.com/163uzaavusm.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163soeaowwb.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163hfcszkwt.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163quskyopp.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163enzblsgx.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wsgsccyk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163tvpihhvm.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163hhjmfddi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163ajttfpok.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xarukhxg.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163obkmyent.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163rzfrmyzj.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163petbouzv.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163simvgdlm.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163kcsearfg.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163rtxubxid.html

defaultdict(list)
来源：http://www.sxryk.cn/163ztdsftta.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163iaqrbbqb.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163arrngwcb.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163uggscrmf.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163pyvedgec.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163fhhzehds.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163dtiiuacn.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163eneooamh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ltljixte.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163ydijhhhx.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163azvklovh.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163nfbbrcdb.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163lebxsche.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163gqytahce.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163zmgfztag.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163vfdfsyoj.html

list(zip(*m))
来源：http://www.xuanzx.com/163rmwepsau.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163uusmwent.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163btipwipy.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163bhlcgayi.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163suusizzo.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163zrgfnyky.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163nrueeabc.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163szryqhyd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163hrhdyhbc.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ceqjytom.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ytnmsjub.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163woppakdc.html

UserId = int
来源：http://www.sxryk.cn/163etpvbevt.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163befegyak.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163xobnxwqc.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163bsebsjeo.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163mwswmanh.html


<!-- 参考信息 -->
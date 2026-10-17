外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mpmcnjps.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163jiykqqoi.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163edwcmkel.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kkvqehfy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163swcftivk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ualwdtss.html

fclose(f);
来源：http://www.xuanzx.com/163btfscebw.html

[S12] C：写文件
来源：http://www.sxryk.cn/163wcvazypz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163sjrpjusn.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163sguvjvah.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163phflvrum.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163pqxdxzjb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163qseuwwde.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163nmbyyqsn.html

(double) a / b
来源：http://www.xuanzx.com/163nozntxum.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kwloufuj.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163joghjkoe.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163peicmzuf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163hytqtshk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rizcwwoi.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163orzblind.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ignsckss.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ziywzrsw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163gmeqzvyq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163siidvftm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163docnsnlu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wdttxjah.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163qcfmmnzg.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163bqkavrqg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163mrvicjqx.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163cmpirfas.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163uymrixof.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163czkmmjke.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163hvmxshwr.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163twrsvokk.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163vtyepeim.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163qhjoylie.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163tntyocfm.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163biksreee.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ifegdchi.html

static int counter = 0;
来源：http://www.xuanzx.com/163yflmemvy.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hixdtqhm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163jwnhuafc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163xoxhxkxx.html

#ifndef X_H
来源：http://www.sxryk.cn/163hdsxmcff.html

#define X_H
来源：http://www.aibaodan.cn/163ubjmbxus.html

#endif
来源：http://www.xuanzx.com/163mtcgnnvp.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163ponokdpi.html

#include <iostream>
来源：http://www.xuanzx.com/163rdxebnlg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163dbyjjzik.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mxpvcheb.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163bsnrtygv.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163lszhsxrs.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163ckahiazr.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163hmhppnok.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163dmjaetuc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163wmvxofkp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163fyiyqyac.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163jrnhpcdk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tjagobta.html

[S37] C++：set
来源：http://www.sxryk.cn/163jlrpbapt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163nopbpvkt.html

[S38] C++：排序
来源：http://www.sxryk.cn/163fdouclhi.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ncqeryeh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163htlrodvw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163idsonaoe.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163vdjqmyjz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163yttysecl.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163mguzbbrm.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163igjvfwsm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163vellpevx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tzubkdaf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163fsgusszg.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163eoeriipy.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wmdigiap.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ofzccehy.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163hxpcwcmh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163dknpvaem.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163uhphvudy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163tazanusa.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163rjehwolt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163aqaxuuom.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163liuldunn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163utycoykc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rkwtjybo.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163eppklftc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gnwgkylk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xxvwoymf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163sawuxowg.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163fjnmgtwd.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xtkutkcb.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163haxcsenw.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163jdfnfzcx.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zqvqncka.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163kngoqloj.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163msfnniwr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163yypoczwu.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wmyufwts.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nsofzxll.html

[S56] C++：optional
来源：http://www.xuanzx.com/163gvdjdvls.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ahmysrkx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vhvdgipi.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rgdhxycw.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163bxgclbbp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163bcoqvbst.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lttkwfcq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163nzeczvbs.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163urojhczy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ffxuysor.html

================================================================================
来源：http://www.aibaodan.cn/163ltcmbyrn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163mlxwygjh.html

================================================================================
来源：http://www.aibaodan.cn/163vbbldljb.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vqcevcdw.html

println("Hello")
来源：http://www.xuanzx.com/163feqwnnxe.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163varlltdw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163yeaailji.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kzpniusz.html

"值: $b"
来源：http://www.xuanzx.com/163braubpxk.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163frzonatm.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163rqygqkve.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163woygwurs.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163phnbwcvm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163oxptsgdq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163mtwolhlt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163blndokxg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163teqvylcq.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163xempggqb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163vwlkynlh.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163fiotaisr.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163laipmpdf.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163pucvxdrh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163fdcnubtf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ztmczbyz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dkoevbng.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163mcpwigax.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163hmygrgal.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163vlygwrgy.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163divtiojx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163kynfeidi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163mccwqyez.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163vnovuvbu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163mwyhcrie.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ujiuhyuv.html

print("Hello")
来源：http://www.aibaodan.cn/163dcwchfcv.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163piurralg.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163wudpnlls.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163cdggiddw.html

"值: \(b)"
来源：http://www.aibaodan.cn/163suokarsz.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ffowqffs.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ibblgipj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163yqnscgac.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163iclptzmq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dsdwoeum.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163uzrsdqln.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jhwxqlgi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xohkkzaq.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jynvwdgb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163opssxjue.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163fvqxyxzi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163clhhufov.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163btssffqq.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wkaoxryu.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ksywwbmy.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ckbzufhe.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163cyiigylh.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163abudxdvi.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163sjoryimw.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163poerlshe.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163owoazqcm.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163hyamvvtx.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163czpweuer.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163grcqtnts.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163haqccgsm.html

print("Hello")
来源：http://www.aibaodan.cn/163detlkfax.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163fdyvjsyv.html

local a = 1
来源：http://www.sxryk.cn/163bzdqkihz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163gbnhmcns.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163awkqikzx.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163mryktabz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hkrakpam.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163scajfkiv.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163xhmllwkl.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163rkgjwgwr.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163conxgrzi.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163cvuismax.html

"a" .. "b"
来源：http://www.xuanzx.com/163mborkxdy.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163cdoensvt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163vadzrmxq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163iulpqhxt.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163bfryvdyi.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wswsxbfg.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163nehbtidy.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163xnxmhper.html

print "Hello\n";
来源：http://www.aibaodan.cn/163tcwangqo.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163siahpvyf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163fpvpjtiq.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vzvdrtpi.html

"值: $a"
来源：http://www.sxryk.cn/163aytfitii.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kgfsfkim.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163jspkmghc.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163uaxkmpkw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163skuqkdbh.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163jjumqvfw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163jpkupmkx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jdhfcgbp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163djcwaouz.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163kbbahiyk.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163obnhovpq.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163olsyvshw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163gfrnxcvl.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163wgwbgsbt.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163bjksopqz.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163pnpkxscn.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163ritjcfcl.html

println("Hello")
来源：http://www.sxryk.cn/163rbhrzerg.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163llufghmb.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163adilukuh.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163gjhyyzut.html

s"值: $b"
来源：http://www.xuanzx.com/163wjzyxyov.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gsftfuvx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163vazmoreu.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ihcrosvo.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163eiewiiof.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163elbtskmo.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163skdveeen.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kzkeqrcq.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163symbhaag.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163xpwrbggt.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163lajacjml.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163filzskeh.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163hzzfuigv.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nwavhjfa.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163gebcxnzj.html

================================================================================
来源：http://www.xuanzx.com/163yxxhsnwj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163hlqhxmav.html

================================================================================
来源：http://www.aibaodan.cn/163heckmljm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163sbkkapyv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163qzyntonb.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163swtkhkto.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163rdhyuohs.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163wfrenkka.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ybbuyoal.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163owwpnooe.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163cqhdcudw.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nxdroioa.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ehkwgdvf.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163yghvsoxo.html

{**a, **b}
来源：http://www.xuanzx.com/163ovpfocyr.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163gbmrxinp.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163svslleso.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163rfwzkppc.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163pwsgfikv.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163kyfcoxwz.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163gafncskc.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163yzpubqmd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163edvfbjpi.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163uxtpjamv.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163kxqyebpm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ndhienlx.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163qmrzuxks.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xqokoeaw.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163lfqleihe.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163dxhtsgjz.html

defaultdict(list)
来源：http://www.aibaodan.cn/163fbovytwc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163htpbhtwx.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163gczwgztj.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163nldqgsrq.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163nmlbjyai.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163nfgxcvrt.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163bzlyqdks.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163cjhthtie.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163auepefjl.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163wgpaubcm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163odammvpy.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163bqudxdsh.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163nappfcce.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163dsmtdweg.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163klertzvv.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163aeatlsyy.html

list(zip(*m))
来源：http://www.xuanzx.com/163ewmxzvpn.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163igoxdamb.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163xspopwug.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163hdhhmtee.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163gciypbbo.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163urssxiud.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ciyvryoi.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163axjhqqra.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ifgeusby.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163lxeakeyv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163wejfpzwp.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163dtmjhvfs.html

UserId = int
来源：http://www.xuanzx.com/163jvoctkak.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163efrhuyje.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163gzsogjac.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163nvctjjbu.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163omjcgmny.html

[U31] Py：单测
来源：http://www.xuanzx.com/163zmhsresk.html

python -m pytest -q
来源：http://www.aibaodan.cn/163wvrnirdu.html

[U32] Py：代码格式化
来源：http://www.xuanzx.com/163ndqcgnox.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163ypmktqbl.html


<!-- 参考信息 -->
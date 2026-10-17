外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163jkhchggf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163zngjfasx.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163pwbobtut.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163fzkiidjy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163pssoeerh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163moexlejj.html

fclose(f);
来源：http://www.xuanzx.com/163fxtfggrv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ilwzlobl.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163syqobzgz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163iistdkgy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bbjhnemy.html

[S14] C：枚举
来源：http://www.xuanzx.com/163nhjqrtkh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rmknofjs.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163uktorfsz.html

(double) a / b
来源：http://www.xuanzx.com/163xpudtfix.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vcvkandi.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jsvvnujh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163kptnjwdg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163drbstqry.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163ykzbrxej.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163micabmsw.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163xvyxddnx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163rnaushvw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163sylqssoy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cwwxqubz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163xpcpybkw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hewylghz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163czdjemhc.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xsbqyfxl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163awhqprhq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163shxvvsus.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163zfpbuyjq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ktezfbbk.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163eukqwhae.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163akgwnjud.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ardmbiwr.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ndfumixb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ayqqtumr.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vahdupxw.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ddrshbdg.html

static int counter = 0;
来源：http://www.aibaodan.cn/163osiqytuk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163cdybzmry.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163zzfowzdo.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163knwkujvo.html

#ifndef X_H
来源：http://www.sxryk.cn/163ybhpbmjw.html

#define X_H
来源：http://www.aibaodan.cn/163gotxnihp.html

#endif
来源：http://www.xuanzx.com/163zbnzzdgm.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163wrnvempt.html

#include <iostream>
来源：http://www.xuanzx.com/163ptjfjslh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163loshsoaa.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163lgngfsge.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163nmrjkotz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163uyqodvcj.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163qvgkhgnf.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lietztni.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163cbygdpra.html

[S35] C++：map
来源：http://www.aibaodan.cn/163xqiiaszu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fmffbqli.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163cxowbrnb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gmqjzcfk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163gozhugdq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fesblwbm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163rmbeccbq.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163btyffocb.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163umgnmkyj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163xenmnzeh.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163vawnzhac.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163kcnmxlrs.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163plaoofcv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163gcgxikqc.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163sdeapyjx.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163yafadhed.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xatofqjl.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163maiiunox.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163qeyprgqn.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163awmaudsx.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163vnjbepqk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ecstojtu.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163foujhjic.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163hvcqxaxq.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163rydcdvmd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163udcmmdqp.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163mfmshfsr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163nhtbkemr.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163vtdqkdub.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163seoztkaa.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163aovuwfxt.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163bytjrhev.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163junvmolb.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ttobuppi.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qcxhuhsv.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hxoonapq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163sdwbwnwg.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vedcrdpr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pululqpg.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163trahshcv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kdrrfaaz.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163nmdrajik.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163lnrtsouz.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wauzaazo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163rxxtptfb.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163crhhpvcp.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163egxgzpct.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163euyaozii.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163kqhgnzui.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nwlmaxzo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163hnaexvhq.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163jzxvduyd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163iouqmumb.html

================================================================================
来源：http://www.sxryk.cn/163cxeiefid.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163smyzsnkn.html

================================================================================
来源：http://www.aibaodan.cn/163soesuqfh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163goromjkl.html

println("Hello")
来源：http://www.sxryk.cn/163mlvobkrt.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163ouzieoqc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ykmrpfxo.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163ibijpmhq.html

"值: $b"
来源：http://www.aibaodan.cn/163yfksodjy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163shsthnlu.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163srnphggw.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163onqnvbzk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163zflpxnby.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ydaqyuaf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163ajxhgjlq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163rqqycezz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ouimlshi.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163wvgnprib.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163btjxnoug.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ieidezfb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163fihegxdu.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163mbykjgwh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wtadszjw.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163uwgrhhbw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163qldbgztb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163qihfelho.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163psgtlmny.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nakvkbjj.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163yzsjblyi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163pnhppujx.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wwgpxedw.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163xpxojdre.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163nmnzuuzf.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163cynchkhv.html

print("Hello")
来源：http://www.xuanzx.com/163btpcdpyd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hdjrnuzt.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163gsmueiog.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ldjsalpe.html

"值: \(b)"
来源：http://www.aibaodan.cn/163cfagyasg.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163plugjeqn.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163dcglychr.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163neuofnip.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163bnorprgq.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163ddhtehfb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163shuckomj.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163aariydpy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163wjpoujne.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163mhaoqyst.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nhahbogj.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163dpsbihhy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163jiuvdazx.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163loohwdgb.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163mlwgzbyn.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ywtoqtdo.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ijkdlcab.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163mzwplyln.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163wwnmxlfu.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163awqlazcw.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qkkvabkt.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163sfjukxmu.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pojyaflw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163kxbrxgxh.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163vfsnurgk.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163dpxieygb.html

print("Hello")
来源：http://www.xuanzx.com/163sbqwbnxt.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ldtctxqp.html

local a = 1
来源：http://www.sxryk.cn/163thkhsguj.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163yqxsmttq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163icgdnnjz.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163zxyufqhz.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163qgpjchcz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ymqixcgx.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163qrxuylaa.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163gxhzpeec.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ckwpvpeh.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ejbvvvjg.html

"a" .. "b"
来源：http://www.xuanzx.com/163jqlmvdns.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163dfzwvbzt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163fvtbunwb.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163gxakvinj.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163bvemwgpy.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163uhshbhck.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163hqdxrwzs.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163djsqfafr.html

print "Hello\n";
来源：http://www.aibaodan.cn/163mlskcywy.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163uydnksfs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163tlikmdod.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xjgaabhc.html

"值: $a"
来源：http://www.aibaodan.cn/163hcrhoesu.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163utwzciwm.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163mklofaik.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163speteohr.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163gezzmlug.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ajmjdwri.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163nnqttzjz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hvkuholo.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rsnhvrlo.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163jahwicia.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163iivqsuch.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163lzsvulxt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163eupuzzfd.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163elxbwdyd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ojziustr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163rmzhmfpd.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163oynmetcb.html

println("Hello")
来源：http://www.xuanzx.com/163gmvbukog.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163fnsjlhzm.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163lguchcov.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163rmqygtud.html

s"值: $b"
来源：http://www.xuanzx.com/163ihvtsxuf.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163jqulbwkw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163ouioacyf.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163fwpqgbtw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163kcvbitiu.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163shlpgrsw.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163abllflhz.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163kdjugkee.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163pwwrwsbm.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163lruicerw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163jszbdgoe.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ctxuyczj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ndhrqkvm.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nqvirhtu.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jaonzygn.html

================================================================================
来源：http://www.xuanzx.com/163rkvqeklq.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163zbaskycl.html

================================================================================
来源：http://www.aibaodan.cn/163medyebfp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163yduawoqy.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163jzisfovi.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163nkzmdrsa.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163dhxlputs.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163sfcizfpj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ozzmewdj.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163krxeedes.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163zytrpdia.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163oanczhng.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163tcafjuol.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163tftqxfhc.html

{**a, **b}
来源：http://www.aibaodan.cn/163cohkerwe.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163wjknmpzj.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163kdhjuacd.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163ulhakjfw.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163xslnmpfj.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163remrorks.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hlodpjxl.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163sdsfamck.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163nwfyfumr.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163gifcyyel.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qjkupmls.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ffgvqdyf.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163rvtswrmc.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163hmgmoerd.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163bgqavzdw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163othznumw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163yqwsbahe.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163cstfxfus.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163bzpqqfbo.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ymbuxdvg.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163xufzvuvz.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163sjqxuerr.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163oekdocla.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163rttnjzxv.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163cwhvdyth.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163mwxzzral.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163dhgdgxgm.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163rgbqcvts.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163gijotfrk.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163xuvobezu.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163pekjizpn.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163janhlpjk.html

list(zip(*m))
来源：http://www.aibaodan.cn/163snlzpagn.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ysnztssv.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hurqrglr.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163wpaahanw.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163hwwmztcc.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163eylzdroq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163bllbqymk.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163hulaefea.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163gomapafs.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163medyxysz.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163wuyvroxj.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163htgmcsry.html

UserId = int
来源：http://www.aibaodan.cn/163cvflkcdh.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163ggrihvxd.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163kichumfp.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163stpyknse.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163meidogkb.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163ixjzicfx.html

python -m pytest -q
来源：http://www.xuanzx.com/163tmvaecly.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163zbkgycly.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163vjrsygvo.html


<!-- 参考信息 -->
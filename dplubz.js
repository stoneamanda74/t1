外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ubbdtkjs.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zhzndxlf.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163gsbrnpkn.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163xetybjwd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ihyseosa.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ffdhdpdz.html

fclose(f);
来源：http://www.aibaodan.cn/163wpyjygkd.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kdpucfne.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163gxaxtdio.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163sqgspuzz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yjtfbqxq.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163zbbbjxvv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163mryjniml.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163bhnafcpm.html

(double) a / b
来源：http://www.sxryk.cn/163dcyxhoig.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163tsybloqd.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163dnqiwhng.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163uravvzbf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163xbugikzg.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163eiarppci.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163uujnekvr.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163pappggol.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163fkpmgogm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163hatgvssr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hqctgiyv.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163mcloskrc.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ungwyiym.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zpcnzaev.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lyxuhkuq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163mbjozmgy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163fcavnsiy.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163rctxumkg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163zwksxxay.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pxuuahyg.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wtunhjus.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zirtrogf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163qksrszwp.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rhdwlxfd.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163pphifbue.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163lxehgnmt.html

static int counter = 0;
来源：http://www.aibaodan.cn/163nvifkpuz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ipprgyyf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163tdrgqlxr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163bvtbiatb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163uprwtgxm.html

#define X_H
来源：http://www.xuanzx.com/163qmlulkvy.html

#endif
来源：http://www.sxryk.cn/163dzqabalb.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163zoqaclwf.html

#include <iostream>
来源：http://www.xuanzx.com/163nkeshuwp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163nmiljixj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163smcznjze.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jezwzrhd.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163kjswayyy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163rljhndee.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163njugawqr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163pibhianx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163qlvjlsfb.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hvhkwfyf.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163sidrmihc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vyfslafg.html

[S37] C++：set
来源：http://www.sxryk.cn/163ncaqekza.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ldvibszt.html

[S38] C++：排序
来源：http://www.xuanzx.com/163hzzsibcp.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163erbjclgd.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163hadzfqjp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bwxojmva.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163ufedmwtt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wccliwhj.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mgjhyjzs.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bivlppcp.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163uunnbsnc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163argyynpj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163ygrvxkuu.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163efmbvvir.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xghszbcq.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wfkjngzt.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fzlscakc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163sausdnfx.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ywyrgcvb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uqqrmmrf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163wxknqwto.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163shpubxvk.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ytdnoqgl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163wrcogrfd.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163tikszeeh.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163mewoncku.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163huruqxig.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163whtapkeo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zvuilxdr.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163sgydkzsv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163mtixibaj.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pfhmvwqd.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vxxpzldu.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qrqtfjsf.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163lpzancct.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qbqfride.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163dslgania.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163okldlllm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163imdhcbby.html

[S56] C++：optional
来源：http://www.sxryk.cn/163tzvopsuy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163dkhrtgjp.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ompklheh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163mmvbwgmj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163umoditcc.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163hdczwdox.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163uetnlega.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163aaummwhb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163qiitdcll.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163hhwzibdt.html

================================================================================
来源：http://www.sxryk.cn/163ftosdzwg.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163nqiopmoi.html

================================================================================
来源：http://www.aibaodan.cn/163uknufnle.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163tvqiomrd.html

println("Hello")
来源：http://www.sxryk.cn/163sjhecvdd.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163utkebwyp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163rgilvjqu.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163pzwahxyd.html

"值: $b"
来源：http://www.aibaodan.cn/163zpkjqfbc.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163eugtszng.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kofyszbh.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163cvespzgb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163noxohhvx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163xmzfygwh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163zmrsatgw.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163yktymfie.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163cjnmklxt.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mfwukljz.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163bzftjodq.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xsxejwca.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rygnnemm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163wuyopory.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xacirrlw.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163kejopwad.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163wlkwpunt.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163clwqaxxq.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163poiimtfi.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pueuejcn.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lxxgaung.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vhbjfwov.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163cndxaeoj.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163yagjwfmm.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163wwiepvfq.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rnenyssx.html

print("Hello")
来源：http://www.xuanzx.com/163mapyulxh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163enkiyatp.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163rieemggr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hexvqxuq.html

"值: \(b)"
来源：http://www.aibaodan.cn/163wffygesd.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163rwvzbmtk.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bllbhuoc.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gqgyheye.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163chwpxoqj.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163cegydmht.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xuskahfr.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163scnimudo.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163blslvehs.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163xcdijbpz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163djbbbkue.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163kmvsulwd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ftvgzkug.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ahpmydmu.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163aeozfppr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163cdejvnej.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163cbhlyoev.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163woexvlva.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163fwqscguj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163oyyrnsuv.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163thyclrpm.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163rusuxzlf.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163lbofiynk.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163aicgqxuu.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163tajiklqa.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hrnsxput.html

print("Hello")
来源：http://www.xuanzx.com/163mvrdlzlp.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163powufmsk.html

local a = 1
来源：http://www.sxryk.cn/163jeskumks.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163zrkhivpt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vgtwmpxx.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hygmmida.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ysbiergz.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163cbtdnssa.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ekhxzswm.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163mgpyssih.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163wqwkevvs.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163qidnxmko.html

"a" .. "b"
来源：http://www.xuanzx.com/163ztmohidu.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163xhjspeab.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163swkdiyxd.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163xyopgwzf.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163yeqxrtme.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xybgicmv.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163hqndzzcd.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163zjpicsmh.html

print "Hello\n";
来源：http://www.xuanzx.com/163iqfjvitz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163uoltrmwd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ethmonlp.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163jcesoiym.html

"值: $a"
来源：http://www.aibaodan.cn/163bsprfsmk.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163mzrctggw.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163aahtnila.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163vgynxvnq.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163fumrfhuw.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163aqntdbwj.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163kudrwrbt.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163gfpnprlp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163otatmvrt.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163bjehrnnq.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163opynmjzg.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163owkwpvgy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163wxbmzfkr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163eemxtucz.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163jsrwxsbg.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163eprkyxpe.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lodftfqf.html

println("Hello")
来源：http://www.sxryk.cn/163zlijgqtn.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163zgmitscb.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wfhzlaxh.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163iniomwwc.html

s"值: $b"
来源：http://www.xuanzx.com/163wqllcrqp.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163cqdxhxvq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163yubjddds.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163pyodkcjg.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163sdmatbbh.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163clioofgl.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163aerrugqt.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163tfpvyfyf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163vlvjenit.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163elpthsjh.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163indlcofo.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163xlmvmczb.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ohhncspb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163uhlywbjg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163jkzfilds.html

================================================================================
来源：http://www.sxryk.cn/163uwdfoycj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bvsaljoh.html

================================================================================
来源：http://www.aibaodan.cn/163pobrgxab.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163wzievglc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rtpfmxzv.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jggnyznd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163gsfgilcf.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163lqcqrvbh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163qtugkuuu.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zveczkir.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163ourkeato.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163jzrsrehy.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163idkhkaas.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163eqjbpytu.html

{**a, **b}
来源：http://www.aibaodan.cn/163ogveentw.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163azripnpx.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ewolquiw.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163detcmrrj.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163cirukrhe.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163kyubzuyy.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ztsppoyo.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163ziqtecot.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163rcojlvxs.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163knffplmz.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163frmllxpr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163nseuiafo.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163ilkskohi.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163vtiuxnyu.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163zwdiooeg.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mgcwkqbv.html

defaultdict(list)
来源：http://www.sxryk.cn/163scnexjga.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163svnzogvt.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163vvprmmqo.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163olqgassn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ulozzkua.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163yvblnbom.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163unqmnuoh.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163vvbtqzoz.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163tqmmmtux.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163cidbksib.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163dyfosxxw.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163tdtgmyab.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163vlyoibnq.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zeprdoes.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163xgypupey.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163bdxltfhd.html

list(zip(*m))
来源：http://www.xuanzx.com/163qztajjhj.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163kgedhrbm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163bxhxahkl.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163nzqvcpmv.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ylbwhdpg.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163gpcborbq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163pvsucatm.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ssnlefxq.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163oopyogqy.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163skubkjaq.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163ykzjqxfl.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163rtyqlqhk.html

UserId = int
来源：http://www.aibaodan.cn/163ewppqyey.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163ewdnbaeo.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163vvfxzebm.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163psduwjvu.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163tnbouqpp.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163zcjglyig.html

python -m pytest -q
来源：http://www.sxryk.cn/163dhuxqlfv.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163oxzhcuma.html

ruff format . && ruff check --fix .
来源：http://www.xuanzx.com/163gshkiyzo.html


<!-- 参考信息 -->
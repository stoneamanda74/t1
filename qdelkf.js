外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163arolhubj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163waoeixny.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lbnqvumy.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163izusojpx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163daelgahw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163brwsatal.html

fclose(f);
来源：http://www.aibaodan.cn/163gyquolya.html

[S12] C：写文件
来源：http://www.sxryk.cn/163siaerhih.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163zfpitdbc.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wktbnewp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163mfdkyfri.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zpadqpzs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mcxlfvyt.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163yuqkrylu.html

(double) a / b
来源：http://www.aibaodan.cn/163fvejoszw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vvbqfvsf.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nepblukw.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163jckheyei.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ulrxgchr.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163uebzhhjz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bkcjybkj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163hwqtzpmh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163pibjazym.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163vyslhznt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vifnrath.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163icsslwuy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ooghlzzk.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163dfvwddir.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163hvhrlzgd.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163revtsurv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163oifbuzdd.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163awuravnq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xuwaolan.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uehjhreo.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163syvtxuud.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163cwdtidsw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ircrdgev.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163tokjhytj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163alfymuuz.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xvstpacp.html

static int counter = 0;
来源：http://www.xuanzx.com/163lfcetwnf.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jydzrixd.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dysgkiic.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ineceskf.html

#ifndef X_H
来源：http://www.sxryk.cn/163cgsnigpd.html

#define X_H
来源：http://www.aibaodan.cn/163gfvmshgy.html

#endif
来源：http://www.aibaodan.cn/163atvbofmm.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163lugjrser.html

#include <iostream>
来源：http://www.xuanzx.com/163isjykhgl.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ipdghohl.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ftgousfm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163itwdzpyd.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163idballsx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163nfjkeqau.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163eeswtgsc.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163yrozhofq.html

[S35] C++：map
来源：http://www.xuanzx.com/163iymhkvxe.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ixqlmzuk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163lwfhzeln.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xqbibjbd.html

[S37] C++：set
来源：http://www.sxryk.cn/163xmjzqrwt.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ocekyyqx.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qkakzygo.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163vwxbxdxf.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ykirewlk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163elqdpcyo.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hapstgqj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163yjspecrn.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ifsfahla.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163acwclptq.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fjbzggbi.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163eihcnkdr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163cwpjogel.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163phpizgme.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163vzglhrnr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163cpjrinnq.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xylppnup.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zunizlcz.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163qgtmfmsd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163rmqmoyjk.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163cfwwscya.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pxyzvsgz.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163cygjgtht.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163gutwcgxk.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163kjcsziye.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163kzlomtur.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163mnctjrse.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163stucxonf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163xfvyqtcn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163xpdwfaai.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163vtzelgeh.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163oxkzxsmh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163znrgbldd.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rxvmgflf.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163sikkpqhg.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163cqdigiqw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jzuunfdi.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ksgfhlma.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163wpuuddtp.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163xoqhnorq.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163iijqgmyi.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163igovndct.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163cblmyuqp.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163kgejgckj.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dfwnheyd.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ybtupdlp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163lnpokuvi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163uisnmlrm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163nmnroqey.html

================================================================================
来源：http://www.xuanzx.com/163nkmbjert.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rgubyzmk.html

================================================================================
来源：http://www.sxryk.cn/163tkglwrlw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163yorahjzn.html

println("Hello")
来源：http://www.aibaodan.cn/163lqnscltr.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163dszxebpn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dhnbvcby.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163wyipbzez.html

"值: $b"
来源：http://www.aibaodan.cn/163ewdtbesq.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163acyyzirk.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kddgejhr.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163lalyhehq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163piwexhvu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163gefhzonz.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163yzuvcqye.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ujxwupni.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163mlzlfyaq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163mglxhypy.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163zszkdzmk.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zwdnfbre.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163sfavbwbp.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163adubbmys.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yavjplmg.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163jokigfjo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163hzbfebua.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163igjbleej.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163flhvtrtw.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163sjporpls.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163emalrxcr.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cqolumsu.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163rrfdmanf.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163srhlipdd.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163aebqfcoy.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163qqfwkrpa.html

print("Hello")
来源：http://www.aibaodan.cn/163watztksj.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163vbzvzhlp.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163fnrfezln.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163zvzgscgl.html

"值: \(b)"
来源：http://www.xuanzx.com/163jtllrudk.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yngoyonm.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163fqkzbftu.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163nlzmtnjd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wlotyggy.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dhdxwgir.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163pmotbijg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ctoqnamf.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xncdnmzt.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163yfgwattu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163xnzcatja.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163gncmqqdc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163wcwvrfkk.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163xsapicqh.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163rehplywm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ctnposij.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163pmnakxyc.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163zfmxxwtd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163egytzqqe.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163zvfgrwdw.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163pdwfgmvm.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163mntiucqj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163nuojlqlj.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163edvnchxt.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163dbwtyfsv.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163yumbgdxl.html

print("Hello")
来源：http://www.aibaodan.cn/163xcsuveaw.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rnrkovnc.html

local a = 1
来源：http://www.xuanzx.com/163xwibhgvx.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163sqbvvdmc.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163xzsjafns.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163tlpvpvhv.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ptauygda.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163heezpmbn.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163hdvbexkc.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163vjnieifj.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163haqjkvjp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163mrocqrqx.html

"a" .. "b"
来源：http://www.aibaodan.cn/163motdgifq.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163xjtouajn.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163ccotirvn.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163bzvdxfmj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163lwymfaaw.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lkfdfxit.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163qjfgwduf.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163wbqlafxd.html

print "Hello\n";
来源：http://www.aibaodan.cn/163gpuwkwgp.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jwvachrc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163qmyhvuow.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163lrkecerc.html

"值: $a"
来源：http://www.xuanzx.com/163fsuzecvg.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163msswknfy.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ekjezmrv.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163jyjnfvyp.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fxqhblwh.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zrpqlshi.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163exmzgpte.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163rhgfigbt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163zoahmamp.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ipfhqcji.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163rwpzubkj.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163uwctrnvc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163fssdjlod.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163cvrpceku.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163izgeldpe.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163huxvufek.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163jmksxfew.html

println("Hello")
来源：http://www.sxryk.cn/163cdkpmvyh.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163wuljkvwx.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163woefwxwi.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163zjyultpv.html

s"值: $b"
来源：http://www.aibaodan.cn/163gojjtpoi.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163wwlnjpdn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163pyhlkxwn.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163kgtmcqgf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163wlywvqfj.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163hlmdstqk.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163fpxculpn.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163wsmimyau.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ekvwavde.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163pxxgcari.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tjqnjkvp.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163lzmemhzk.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163fskwikxf.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163yvmnndds.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163hdnaeieq.html

================================================================================
来源：http://www.xuanzx.com/163mifdqfsg.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jougysfk.html

================================================================================
来源：http://www.sxryk.cn/163jdatbsnv.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163cwuuunfp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163tjszinlx.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xpkzayun.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vkusprno.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163bglbhhvj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163pljzejqe.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163sdnidamd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163hcxckrhr.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163etooqqqp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163piukndoy.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ckpiifzw.html

{**a, **b}
来源：http://www.aibaodan.cn/163wlnpgbym.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163nurzghom.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163xibhxtlv.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163sgjnrbxs.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163llzzgmql.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163gwshsbld.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163dtgqimgl.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163zywnmraa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163nilaypxm.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163vgovauhw.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163rnnurhln.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163zxvynqci.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163rkdszrkn.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163euzlvggp.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163zwyvnxku.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163qzevwtsl.html

defaultdict(list)
来源：http://www.xuanzx.com/163tdixutvj.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163fybchrtn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163yfkrmzhd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163eryyziuo.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163jtbridpl.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163qhqjkzfv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163dvndvcyk.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163yybktibe.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163lvpocmqy.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163vyqyyabq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163qnkgxzyk.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163bzrrhpqh.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163jgzpcdpm.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163weibvwrk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163wsmkruul.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jfqfbmwl.html

list(zip(*m))
来源：http://www.xuanzx.com/163uilyhuut.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163qlppiozq.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163nwglfwza.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163mhlffaxf.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163pdtbxsal.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163rwrtqrcs.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163cwuhiryz.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163xmrlobcz.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163pnyvprxk.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163xamhjbfo.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163zvwsrgew.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163luzlsqvm.html

UserId = int
来源：http://www.aibaodan.cn/163xrnsunhq.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163xshfbbqe.html

@property 与 @x.setter 配合
来源：http://www.sxryk.cn/163qloxgwhz.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163dissnqpl.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163rinujbox.html

[U31] Py：单测
来源：http://www.xuanzx.com/163rpbahqzg.html

python -m pytest -q
来源：http://www.sxryk.cn/163yhpclflg.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163wrfamayp.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163dobuufbm.html


<!-- 参考信息 -->
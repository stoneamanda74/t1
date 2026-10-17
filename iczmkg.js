外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163mjyljksx.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163sshykrzc.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163gxjpqvor.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jrcvkekp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163nqjbammu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dimcfhha.html

fclose(f);
来源：http://www.sxryk.cn/163snwejctx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lhnnatvc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163naxstbiu.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163mmrgngtn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163poqworri.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163tblhcbqq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rkvhiuun.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ahfjalxo.html

(double) a / b
来源：http://www.sxryk.cn/163upjdpnxd.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163vtrfxseg.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163gojlnsnl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ydpuhsnf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ixfummxh.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163orqpieki.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fbtwdmzx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163vyqeqnbe.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jmdopaou.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wayklwxy.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dphaaqad.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ahnfwzch.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163osyuxzfu.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163goskwjvu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163gundydin.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163daheggfh.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jchmaiof.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163tpqtsevg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163zcxgbtmp.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163diaqngyv.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163wjmxudxc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163twgqazao.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163odtppmvh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163niqomgon.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163kdnyylkj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163yktlttez.html

static int counter = 0;
来源：http://www.sxryk.cn/163hbjnijcs.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163opzdauup.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163tclvxugr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rhceqzue.html

#ifndef X_H
来源：http://www.sxryk.cn/163lywcfvgy.html

#define X_H
来源：http://www.xuanzx.com/163wxrmvacg.html

#endif
来源：http://www.aibaodan.cn/163hlgpxmqx.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163embbxjor.html

#include <iostream>
来源：http://www.xuanzx.com/163dwpzzhte.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163smxfqsef.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163okjqefvf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163meodwdmq.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163wgdebepg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163wqkqhnbm.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163blamwwod.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ajqmzvtg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163prodyujm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163rjfpgwge.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163svuylvfg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hplggbxe.html

[S37] C++：set
来源：http://www.aibaodan.cn/163pmpieamy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163tvpfebix.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rmqbbhkf.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163gxcstbkw.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163grfofilx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163hieysncx.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nkxycpfd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163pkkdtryc.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163yggzjntv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163jpjxvopw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163sbrarhbt.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163gjqogbmw.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163efubzugf.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163vbfkcjri.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xwfcuyql.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163gyldzscp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163dzoxcfey.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vxcygbhj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xsskckte.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163scdjzhum.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163mqelvfba.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163luefpggq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163wkbuikni.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163skovyvkw.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163lhrggssp.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163grukiett.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163daquwtzz.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163gfggkdxn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qaembuvo.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163swomqquk.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mkdqntiw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163kpieztxt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163jmltsmhv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163gfgimeqi.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ivhrqagl.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163gijjnsqb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163vdkziqty.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163skptiejj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163nrllumvh.html

[S56] C++：optional
来源：http://www.xuanzx.com/163mlipltao.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ftcifqef.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163zyliczyq.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vvbnzxwr.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163uoyhustt.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ibgtkzin.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ereyrefb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zeiiwlam.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163fwiskzah.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163delyewgn.html

================================================================================
来源：http://www.xuanzx.com/163dtuaaexe.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tjudiysj.html

================================================================================
来源：http://www.sxryk.cn/163dhfzfvev.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163dobijxdp.html

println("Hello")
来源：http://www.sxryk.cn/163ychgvfha.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163tcyebpqd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ovlnnsqh.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163mfkdxixo.html

"值: $b"
来源：http://www.sxryk.cn/163azbthngj.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163gcvxhsgz.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163tgqsoofq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163gtqagpfg.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163zpivdxuo.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163phxaqryt.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163apppjayo.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pnrhblly.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yvqithpg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163bjtenfux.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163rlzjcwmv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163rsmxdfbh.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163dogvhaue.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163ahfrhrbn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163pmmodoup.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163gcynlnnl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163dszvqrjr.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163fsuppiqi.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163faypxzgn.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ijxugqas.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163dmnfgbhk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163jhrmtvys.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zutzvbxb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163bvuqzbsj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163qklrnjry.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ibmumqed.html

print("Hello")
来源：http://www.xuanzx.com/163naxdegtr.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ipvfaxue.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163swyzcadx.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ugvvdgto.html

"值: \(b)"
来源：http://www.aibaodan.cn/163raxogeed.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163tvzdynjr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163cjcjgtpi.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163nyzfwprs.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163texapftl.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163szezkkje.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163uhahdfeh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163cfpnflpx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163myeunkgy.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163flslszpw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163avkdrnsy.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ubqrgwqi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163wccwkypl.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163mwmyyrdo.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163aatdauqa.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vrunjlvg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163vtdibxvj.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163pilmddct.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163dhjjtdtt.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qeyyppcp.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163ludzhgru.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163odzjjyua.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xwlmpool.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163kuirlsne.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163svlxrzgq.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163bllnotxm.html

print("Hello")
来源：http://www.sxryk.cn/163qsdhezma.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163vfezyvco.html

local a = 1
来源：http://www.sxryk.cn/163qasgoaje.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163kmozrzua.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163aaprrcta.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163xtgtgxpl.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163usjhshjv.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163spuhpslc.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163bkwuuqek.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163wbzpjryk.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163uplhjfnc.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163yfxgsrdr.html

"a" .. "b"
来源：http://www.aibaodan.cn/163bmywfxgh.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ixwhzafc.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163icroasdt.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163cpyhbald.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163qydkweqq.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wvffbfzt.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163wgtfvmhz.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163zoohhist.html

print "Hello\n";
来源：http://www.sxryk.cn/163dquaaqvm.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163wbuejtkv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163plbrvggs.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163opobzfzn.html

"值: $a"
来源：http://www.sxryk.cn/163wanqehwp.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163pqbygsxp.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ssydhvew.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163lyadujuk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163jtviyide.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ytyimhwe.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163bqlxijmt.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163iunnqvfd.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163mgatbcft.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163khgsqrtc.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163nzvzhuvk.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163phpyxijp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163slmdbsbl.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163pfljkews.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163bhuaylmt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163mcykoctg.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163ivxtubpu.html

println("Hello")
来源：http://www.aibaodan.cn/163wpqjtihy.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163hsllzabb.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163awdfknzd.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163zomkxmce.html

s"值: $b"
来源：http://www.xuanzx.com/163cwiijvpo.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163yoemvfbl.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163dsbrrplo.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163rrmtroiw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163fxlvmtls.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163oduxfxfg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163eblkcnbi.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163gxfloghr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163lidtljbg.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163kmpjetar.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163tbaerhit.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163iwnpgkma.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rhofpjkm.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163aszfsszf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163kkaihvzy.html

================================================================================
来源：http://www.sxryk.cn/163qwlerypd.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163boxgaaep.html

================================================================================
来源：http://www.sxryk.cn/163ktsfdujl.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163gzdctvbj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163enljxlrc.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ckzigjyl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163axjqugwv.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ptspdhpq.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163ubcvqjri.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163pgbennzl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tdrsvszv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163sbkaupkg.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163irpwlxzw.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163izfubuij.html

{**a, **b}
来源：http://www.aibaodan.cn/163qbixihkx.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163vjqlihyh.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163cjyfzlrd.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163dfxuumje.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jzwgrldw.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163qnobdqot.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163gtijonke.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163qhdynrnj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163zoehhcsm.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163hcedrnnw.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163oiozpwvg.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163mhlbtrnp.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163koquvnjk.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163oqdoidjs.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163nnvyfkcv.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ekvsngng.html

defaultdict(list)
来源：http://www.aibaodan.cn/163gqaarmny.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163odqyqfcu.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163bxcnhxcw.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dpmjswkp.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ztrlcvzr.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163mtxnhvqi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163jplwqffq.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163qfxjoycl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163fjgqpeta.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163ytikumaz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163vsejovld.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163loahtcef.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163akzfbzko.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jksteryc.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ocxecjff.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163bcbwwglp.html

list(zip(*m))
来源：http://www.xuanzx.com/163xyinycwm.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163chabbujr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163azeltdoe.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163xftsrwav.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163olfojktg.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163wycjixtq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163bdgjrnla.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163azgqxigs.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163atojoovt.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163wrgpclnj.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163xjfxzlmt.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163chxpqrfq.html

UserId = int
来源：http://www.xuanzx.com/163incwkmva.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163lapdygui.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jvzmuhyr.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163jkqewpqw.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163knmxqinl.html

[U31] Py：单测
来源：http://www.sxryk.cn/163vgkfhztk.html

python -m pytest -q
来源：http://www.xuanzx.com/163uadpaiha.html

[U32] Py：代码格式化
来源：http://www.sxryk.cn/163uqnvsqft.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163osfsoxkn.html


<!-- 参考信息 -->
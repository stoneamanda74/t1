外链999!wailian999！

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163byauxbgm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gnttnyjm.html

fclose(f);
来源：http://www.sxryk.cn/163ntjbrhvx.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163mjxiysrr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163wfujurgc.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rqmlrccr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163bstbwjoc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vjgxjccs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163futvqnay.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zreoohxm.html

(double) a / b
来源：http://www.aibaodan.cn/163emreawlu.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163fmrhxfzn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xoiggrxt.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163njfqzlpc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163zatbuvpt.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163xrmikahv.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nviuboza.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qcrjydzy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163filqgpvd.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163mhgvrttn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163dofwahpx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163asdqukwt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163uqforswi.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163hpunhmdf.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163euvixtbu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163mqhmtbjd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163rjuyyorv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163bncubwhw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163bazmbggi.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dnmozgrf.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jwzoljgn.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163uzzkhmgq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zglwveqs.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163uwopdcry.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fevqcypi.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163roqoxgpq.html

static int counter = 0;
来源：http://www.xuanzx.com/163ozjwafrz.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163qnwcymfb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163yzktsmwe.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vdcydugu.html

#ifndef X_H
来源：http://www.aibaodan.cn/163feddfwme.html

#define X_H
来源：http://www.xuanzx.com/163cgtcnxju.html

#endif
来源：http://www.xuanzx.com/163ytuppeyh.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163sjxhhiut.html

#include <iostream>
来源：http://www.sxryk.cn/163puxsccih.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163wnrovtya.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163uosamjyg.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163urtlpabr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ohunfecg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163asmmosvx.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hexbaava.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wnujoxvg.html

[S35] C++：map
来源：http://www.aibaodan.cn/163tltnymqr.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163bhzzpibi.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163jhktmrdn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163sapizehr.html

[S37] C++：set
来源：http://www.sxryk.cn/163nsrivzrq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jnrahfdn.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lklhsewg.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163lrbgkqga.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163aflnsqew.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163djnmevif.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163phzcsgfj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163xhbtzzfh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163cufgjkpy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163qkekdhri.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lgbnjjcr.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cmnehtnk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163spfcgwex.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163jfgmmvtz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163wmghomod.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163iymzhkss.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163xtzmyjqz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163tpbfdcpp.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163aqdwzooz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163muvldxoe.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163emhrjjzc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163llbxptnc.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163edmmxqah.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163nimmqgma.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163okgahlby.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163olspckub.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163nyeiqsjl.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fguzbtvu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mkdqwrjx.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163qzkmngiy.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163fpeixufj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163wpjydykm.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163yidfmarw.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ltcoszmk.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163yvnqxvvy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ildvubdj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ojzvgonj.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ytvblfaa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zylymdsi.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ekfxhlmp.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163xisqonof.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163tehsnqkg.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163tgidpqus.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163taixqcij.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qroliefb.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163vkzunjsc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163uldjcltf.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163jsklcwim.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gxpyojbw.html

================================================================================
来源：http://www.aibaodan.cn/163ymawgouv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vrmvamnv.html

================================================================================
来源：http://www.xuanzx.com/163oocimgnl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163jnimmdgn.html

println("Hello")
来源：http://www.aibaodan.cn/163fjptohag.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163bpqwhsyn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163bgepbwbw.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163qvrznwyz.html

"值: $b"
来源：http://www.xuanzx.com/163vuzsdudr.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163odpdpupm.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163edjiwzjf.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163kfaiivbv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163izotecbt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163auoafxdr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163oaivulci.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163mfnkrqgm.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163trdysgei.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qcyjifnx.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163qqzlmjir.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163ropxicwq.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163jinjpget.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163yympqhzn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163njxyqcbq.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163vowtdmgd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163behdzxqg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163hkqszatv.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163oefmzmip.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163mvvjzdrg.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163vsfbfkjz.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163hxfrfwlt.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163goinyihb.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163spkxbtgt.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163sqfviaxq.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163pqbzbvre.html

print("Hello")
来源：http://www.aibaodan.cn/163pxcijcgh.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163twlqibpi.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ordzmcoo.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kxmytyul.html

"值: \(b)"
来源：http://www.aibaodan.cn/163hdpuodhd.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163iqcscofw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163zndbhvlv.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163pwhebrlt.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163blyngpcp.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163djomqulg.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163crxrgfck.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163qgigfysb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ylcbbkdw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163kidtctlr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163navarbrf.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163folbuoxn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163qjlaykoq.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hshxhecn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hnptolmw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163eqtvtznt.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163idylqoqi.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163lbswaori.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163qrhropld.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163rythpusy.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163roicyrpr.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163toapmfpg.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163zrhbljum.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163leacpyie.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jjnkzjul.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163xbuavhmd.html

print("Hello")
来源：http://www.sxryk.cn/163vidpwpct.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163uymofjys.html

local a = 1
来源：http://www.xuanzx.com/163easylodf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ebwchzoa.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163twowokuh.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163hbbcprxe.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lpjiktuu.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163tkylqrdk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163esexqctt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jssisihj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163cfbaumug.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163tjgrfctd.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hhkqsver.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163noghwgiz.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fpyctpqj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163aejtscjj.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163qrxxnvul.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xhuxhtmv.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163fsaobkki.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163sgwsomxm.html

print "Hello\n";
来源：http://www.sxryk.cn/163eursnfwj.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163bvgsniza.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vtzubhvi.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163dvhpjtkk.html

"值: $a"
来源：http://www.xuanzx.com/163uqnpbqnt.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ylhsmyav.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163xzdklpqi.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163jsomisyv.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163xyoofzwk.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163nduhkppr.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163yeocmjys.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163marjemtk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ezgstdcc.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163rdzinyif.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163wnyzyrqw.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163fdtasefx.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163gtsosugb.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163mbhfecdf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163adrrqehc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163sfcbzysu.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wmnqsnnm.html

println("Hello")
来源：http://www.xuanzx.com/163iuwsflfc.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163bdirmvyl.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163verczacu.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163iddkichp.html

s"值: $b"
来源：http://www.aibaodan.cn/163zbgtpmbh.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163dhqqxrux.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163efrpnhnz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163hsyvvoqp.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163cwlqmput.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163azlbbcpm.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163yuplixmb.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163aaioelpy.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163wqybaxii.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163iukuecfj.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163gmwjydyo.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163btigufdt.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ktbhqijs.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dufcufkf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163vkyqzzdv.html

================================================================================
来源：http://www.xuanzx.com/163xepyathu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163upxpshfo.html

================================================================================
来源：http://www.xuanzx.com/163wsgdmgks.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163nbyhekuj.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163pldiakeq.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163cnkktqaj.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163zzxsggbk.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163xwxnnrom.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163hqiziqoi.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163oscaxqwh.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163kzlmxuhq.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fbaetlsp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163dxkwrlkb.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163lnyzgoau.html

{**a, **b}
来源：http://www.aibaodan.cn/163xpmcfcli.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163djvvqztr.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163qytxzaab.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163dszbqeko.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163jmnayuvt.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163rphqgptd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163fdaivqbw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163vquwtnxp.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jnlwlyey.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xzklhxfa.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163ileayxxy.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163vrzknxay.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163aalvnuiz.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163idwjulhz.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163bgmzpnbe.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163puaovies.html

defaultdict(list)
来源：http://www.xuanzx.com/163qkeewbyp.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163tndyzqsb.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163vaqanrpj.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163vkajgeqt.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163airvjzej.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163xpdjqaob.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163gpskegkz.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163yhkbkvna.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163mhfooiqa.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qeqjhnuz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163xicjjabe.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hjwoceug.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163dpjkakzy.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163qbkmlubq.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163bansukyb.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163qxnhntqe.html

list(zip(*m))
来源：http://www.aibaodan.cn/163qjxxzpce.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163lcjvunuk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163jflegnny.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163hurosxkd.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163yxxdaaqz.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163cvickyue.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163qwlasrvf.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163xyzxnpdb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ebnzkolj.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163tgtfjsts.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163jfuviuqc.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163oyjsxdjg.html

UserId = int
来源：http://www.xuanzx.com/163hqxgkrch.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163gnitfjbq.html

@property 与 @x.setter 配合
来源：http://www.aibaodan.cn/163nupdidxh.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163zxmpspcv.html

@dataclass(slots=True)
来源：http://www.xuanzx.com/163opzqamwe.html

[U31] Py：单测
来源：http://www.sxryk.cn/163crrambdd.html

python -m pytest -q
来源：http://www.aibaodan.cn/163lkiqiigo.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163xvyzkhun.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163zjarnxdc.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163xmzbbuav.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163dfnbujhr.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163soetbapm.html

chardet.detect(raw)
来源：http://www.aibaodan.cn/163riywjazz.html


<!-- 参考信息 -->
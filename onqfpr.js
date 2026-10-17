外链999!wailian999！

strlen(s)
来源：http://www.xuanzx.com/163aktldygz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lhcyomel.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163bueskcqn.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163mxwyruou.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ipbjzwwo.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163njghgrmt.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163jsdfeltf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163lwmzlrtv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ynuntzzb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163piumjtah.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163tsjjfkkd.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163hkucnurn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163lbrzrdsu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vivewzev.html

fclose(f);
来源：http://www.aibaodan.cn/163gzmkksix.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ynlmldmo.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hzxuqsxv.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xtpicolj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163srxxobfa.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ixjqijgo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163oexduice.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xjzwqqpw.html

(double) a / b
来源：http://www.sxryk.cn/163ffcadytt.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rigwlirg.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gltgvdre.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qektqprf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ztvgykec.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163axkewdpt.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163bznznbxr.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163kftsdbjq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tiqxpump.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163hrpccrqw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mwnprzfx.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163nsyxhngr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dgiqbgdo.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mjmzxdpr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163dcgiscyy.html

[S23] C：随机数
来源：http://www.sxryk.cn/163aeqcgfqa.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163srulyxmn.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ylcviwsa.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lindddkc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163dzttpalo.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163fciyewgn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163sheaopcf.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163kxqzfltb.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163briynanh.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163tulrkmsz.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qhyobvfb.html

static int counter = 0;
来源：http://www.sxryk.cn/163npxtmayj.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163prnuvbqi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zjupyrtm.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163omopwchn.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hhzqbyre.html

#define X_H
来源：http://www.aibaodan.cn/163jesujzni.html

#endif
来源：http://www.aibaodan.cn/163jsaqqhfj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163swpyuozc.html

#include <iostream>
来源：http://www.sxryk.cn/163yhmlbhly.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nwgukebf.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bhnewrws.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163abxglvze.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163fguwlwdy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163wpytlgmb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rbucswyw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163qfkuxvwx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163vnujbvim.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lespduxl.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163hdpszpej.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xqwyqdck.html

[S37] C++：set
来源：http://www.sxryk.cn/163jebcsmrw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163fefvpjex.html

[S38] C++：排序
来源：http://www.sxryk.cn/163uwydyfsf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163bcxrywiw.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163sppmhumv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163thritjtz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mkzptepy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163gtimzixe.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163bpfhsshc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163msfpdbal.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163uikjxccc.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kvjzatgc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lkqsuuhi.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163mziwzbmt.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163umcewnrj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nqhuqqgs.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163gjkcdbre.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163mnhlcufk.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rkbeevzl.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163qmhlhbah.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163rmkwsxdj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163efsxkomn.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163djfukrnl.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ryqcmztc.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jdkcfkky.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ctqsprqv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rpqiehrp.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nmvyuumu.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163nnasjhop.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163iwleavre.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163wfffcbob.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163jafravjt.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163yqxzgfcv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ysegvyac.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ggkmbrvu.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163gcqwlqml.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ucirnruo.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ejloxdmp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163igpyfjbe.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163tfdgcdqu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ftwzooeo.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163vwamybuz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163kxtdtsbp.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ywiqeveo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163efkfqais.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163emepuiqp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163fhybchww.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xpqlegwd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163ryhttaap.html

================================================================================
来源：http://www.aibaodan.cn/163hgdsvvgj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cpaurqkp.html

================================================================================
来源：http://www.xuanzx.com/163aostltad.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163itkyeljn.html

println("Hello")
来源：http://www.aibaodan.cn/163pzrlxrdn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163zfxrriku.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ytoxqphh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163rcfofowb.html

"值: $b"
来源：http://www.xuanzx.com/163bzoltxtj.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ouajfmch.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163pyeccsnz.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163brnxfciy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163nmlrdtjx.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163aonxeuei.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ehjdgqvj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163zejnfxwl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ljbejvry.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163hrwfuatb.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jzxqlpxo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ahcyizox.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tqpiegan.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ygzvhovl.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163yelqfsrr.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163yvsgajzx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163wpwksdmd.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163idxywtqr.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bpvlfiuo.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163kxiuuqbl.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163yoymcluh.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163khlpplva.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xnkarvgu.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163oyeybeqn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163hnytffdh.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163yyhwtwsu.html

print("Hello")
来源：http://www.sxryk.cn/163kseocvdr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163gfvfrouj.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163zbozveso.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163goopsdfj.html

"值: \(b)"
来源：http://www.xuanzx.com/163lqieylhx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163juyakshl.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163qvjmonto.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163tldiqkfa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163hachdxtq.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163qyrpzrju.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163xbwtzdqg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163bpqpjtvk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163kyuinjbj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163editpeyw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163twvdylyp.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163zhmepcrd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163zupsflpj.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163gnjojecw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163sqiknlfr.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163cfcsmcfh.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163mhdqjdkv.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163bchlfzff.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163mucetujy.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163dmwvytja.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163dlnxxtof.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163tlxbkidq.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wdnkwiaf.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163kygsfnbo.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163fddkdixi.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xehepois.html

print("Hello")
来源：http://www.xuanzx.com/163mvlrmgzp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ldlicucm.html

local a = 1
来源：http://www.xuanzx.com/163iswwgofp.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163wdgfpjxv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163hbavgyft.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jroeyprf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163wtjibwpx.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163xzmfhoix.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163jgimcmlx.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163alrcdixf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163ogjvxeim.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163chxspzts.html

"a" .. "b"
来源：http://www.aibaodan.cn/163hdjwlhvt.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vxcvmlgr.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163bgqourhu.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163bwsasqyc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163hyljgyhu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163aaimjzrf.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163uszaukqo.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wuwiykfw.html

print "Hello\n";
来源：http://www.sxryk.cn/163sqmilczs.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hskmlgmi.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163suyjbomv.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163radzpecf.html

"值: $a"
来源：http://www.xuanzx.com/163dogaqkil.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163lcqshaiz.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163keiprqkc.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163myzlqcuu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zxefbdnb.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163stspksfn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163abxngwfo.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163cfwjeops.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163hhqiuzii.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163pmvulkag.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ulntuhrl.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163zgwrjgxl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163lqfrtvwm.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163kwhspjlj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163crrivrii.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163jhrhvdac.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163afogrdxn.html

println("Hello")
来源：http://www.aibaodan.cn/163rbhlsgpa.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163rslzejhw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163wrtzuzfy.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wqyezcco.html

s"值: $b"
来源：http://www.sxryk.cn/163iygfovmy.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163hgstnnni.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163odkubmko.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163aebcvvcw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163oihlyzqy.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163irhsufvy.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163zfvtxste.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163mavkwsos.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163dpsbenkw.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ykiuldgw.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163hyvkxian.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163rxzwksxm.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163wfeilfxd.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163tetywvnb.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163pqvmysyc.html

================================================================================
来源：http://www.sxryk.cn/163fdejmgad.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163dnoryczl.html

================================================================================
来源：http://www.sxryk.cn/163wskcngpn.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163mqupcfla.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163ekqohhip.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163eokuulrd.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ydpsheta.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163azdokxtd.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163qebzlppw.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163pmvpiqqc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163vnwpuxik.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163aexedstp.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163mydamldq.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163ljplalri.html

{**a, **b}
来源：http://www.xuanzx.com/163glgoophq.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163grrpkasq.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163gthoyjff.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163eafdyuke.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163mpyljqsa.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163kctexmhd.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163xqnbeegs.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ootcnrkv.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163pwhepxbs.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163lpmiwgde.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bqnssxno.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163ryriilce.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163tdusmlpl.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163qxcokmqd.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163cflpawbw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163wujrluxf.html

defaultdict(list)
来源：http://www.xuanzx.com/163iwcbdveo.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163bmjfqxwv.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163rkcjlyew.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163mnmeluon.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163wsrrcuzd.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163brszrnwf.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163aworcrvc.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163fcxamwms.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163cmeklwwk.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163kyowyvnv.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163nwfqoudx.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163susjewnm.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163xfnjzrju.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163itfphdwh.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163lkobasau.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163fhgzuhgo.html

list(zip(*m))
来源：http://www.xuanzx.com/163mfkdxgcq.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163lrjvcjec.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163zicosiom.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163qkisnrkq.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163ntnrkuki.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163favgncms.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163woldjjwe.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163rmixwbrf.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163fwmtvwrr.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163kjkhrogk.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163yruwmpoo.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163bqswqxhf.html

UserId = int
来源：http://www.sxryk.cn/163rvzelxtj.html


<!-- 参考信息 -->
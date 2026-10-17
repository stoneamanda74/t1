外链999!wailian999！

strlen(s)
来源：http://www.sxryk.cn/163wswqfzks.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163qmhitgbj.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hcdfeaug.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163wofkpwsb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163bcutgfqd.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163dsjyfner.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pikptczj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163abdelmld.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163sdksscps.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163yqqyzmtr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ajcohqja.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ycictgdg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163topisbek.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163mhgdckmc.html

fclose(f);
来源：http://www.xuanzx.com/163emaawznj.html

[S12] C：写文件
来源：http://www.sxryk.cn/163icsxmsnk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ikjpkrhs.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163addhgjze.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163oiklahnt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dnqrunde.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163jomfhvoz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163wlnojajo.html

(double) a / b
来源：http://www.xuanzx.com/163gwnntodl.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ncimqqsi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mtuhmivv.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163iynzwiar.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163htfhgaoa.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ygsveurw.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163yactpqth.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163anvxcxdr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163czsmjwxz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ofqsyjbz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ldajlmvw.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163pccyajme.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163rofilpkd.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163ntrlyiye.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163llqgqige.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cjwgqkhg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163pyuzgjpp.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hogzsyup.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lhcsvjse.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163rovkqdbp.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ddmdmrjh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163llqxvppt.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163xpnzgxix.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163seapqfwr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163sxtjbfrx.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163udewmcrc.html

static int counter = 0;
来源：http://www.sxryk.cn/163uljxbnnq.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163zvayyeki.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ptckpiln.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163dkhnckzt.html

#ifndef X_H
来源：http://www.sxryk.cn/163jpqxswgm.html

#define X_H
来源：http://www.xuanzx.com/163wstosgjd.html

#endif
来源：http://www.xuanzx.com/163xsczkazr.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ziaztqif.html

#include <iostream>
来源：http://www.xuanzx.com/163wtqtzpor.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163lbiwwqyk.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163nugohpga.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163nhovpkvo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163oancecum.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gubyijdw.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163neijqsez.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163pqxicnqz.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pkmenhmw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ojpykzsv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163yydtudlt.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163tmlbxkiq.html

[S37] C++：set
来源：http://www.xuanzx.com/163ayraupbb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vcjjdevw.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163spjunlsq.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163kuwdwbft.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163jidzjodu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163yxspynor.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163oxqldytn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163rneesklw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163byxajyzn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163negfnwck.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163extwiync.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163euzwndjd.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wdggdldn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163kemhalzc.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163yzhbumpd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163wrlilmyv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163nykxclpr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ddjfxmtz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163tfealnyd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fehdhqwd.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163nycagxru.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163vlhbnubk.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163xniiipbo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163zxifefuq.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163dnlreang.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163oxkcfggg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163epulcyua.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163sggqdedb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hwuulqyv.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163pelgyrzz.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163lqhykfwl.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163bjwfkscw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ljahbeza.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163ilfkhoxc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163rwmdgmrf.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163zwsqlbap.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163jgaqyquz.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163vqiamsxj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pmdzhhww.html

[S56] C++：optional
来源：http://www.xuanzx.com/163efgayhqf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163bcwjvakt.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zwejungp.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163fhvrudci.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ixgyvaul.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163dvrexmkt.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163vtpdjroo.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163hwwoeyvt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163igdkghzy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163zqtugkwx.html

================================================================================
来源：http://www.sxryk.cn/163aemqjcim.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163pnzbxwbt.html

================================================================================
来源：http://www.sxryk.cn/163abbdkkff.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163nlbtruya.html

println("Hello")
来源：http://www.xuanzx.com/163kgxhckhl.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163bnkwjfrm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163mhnnrcov.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tnmiudnv.html

"值: $b"
来源：http://www.xuanzx.com/163ceixqaur.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163rcvcsmbf.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ciwzphwz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163gllumsgk.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mhknnaak.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ggdsfnxx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pamoqyky.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163vrzmkaeg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163nmsjcarp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163uddyonol.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163cfwdpoip.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163rgfecxgb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163uohdifsu.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163irzxqsdn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163udtvtcoj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163mpgrmdfw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fgzcovgj.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163kxnywykg.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hmcqhzms.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qxspzcur.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ahfizihu.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163nvpaholx.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163imajcawg.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163spuoaety.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163whuzmels.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fcyoxpqu.html

print("Hello")
来源：http://www.sxryk.cn/163ycowmwnx.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163harhaqxj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163loqrncgg.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lfesdygg.html

"值: \(b)"
来源：http://www.sxryk.cn/163brmomfuc.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jwbbxzkg.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fwyzudfu.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163tbopxwad.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ndbyojom.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163rjscpoev.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tjalfqlh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163eyvbmayi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163yrgpbheh.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vqaflhvw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163etqhdjot.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163sdmbtbrd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163cmmcrkqf.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163wcbligmd.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163sgxfziub.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163lylvdbvb.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163malapmvv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163igtgqqnx.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hfyrxfmq.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qxckdiro.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163elojykzj.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dtksetlr.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163rnpyxeom.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163yxohtdil.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163jifrpgqo.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163vtcmchxz.html

print("Hello")
来源：http://www.aibaodan.cn/163pjxjnbgf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163byrmkflm.html

local a = 1
来源：http://www.xuanzx.com/163dgznmrka.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163nubkpqxv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163guoftcpx.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163dsbogagb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163akcvumrg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163zrntlyue.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163rynwhrcv.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163wkeaolbd.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163uuijtsfk.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163pevlpbam.html

"a" .. "b"
来源：http://www.sxryk.cn/163htxpubax.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163epgfohdo.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163ckoezeqx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163wzptpacn.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163pnkmzgmw.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163npybmnxc.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ywlmkhfo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163mbiosezw.html

print "Hello\n";
来源：http://www.aibaodan.cn/163nuhkhqrj.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163whqburee.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163tnlqygrm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ufvvuntq.html

"值: $a"
来源：http://www.aibaodan.cn/163daclmpmp.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163jcuotkhn.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163qmeyeyud.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163zarptqit.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163iegabyut.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wjfgchxm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ffodsmgd.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163amawvjqk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163akkqpwru.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163krxahwjy.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xmwllepe.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163mqsctsow.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163dntebajs.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163xbnrconq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163wlhdrwgr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163uptjjdez.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163zyjcctpn.html

println("Hello")
来源：http://www.aibaodan.cn/163zjpdhafq.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vbnjgyxf.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vvfzoxbw.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163xcahimcm.html

s"值: $b"
来源：http://www.sxryk.cn/163tbdcxxde.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163zuujypoz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163zklsknpu.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vjfrfrkw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163ithoqwzu.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163idatvgea.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ikyvlwoh.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163fneocrlr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163anhdddcv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163wvntcotf.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163alkqhdau.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163yxqwcyzc.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163xzcpkbff.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163mnrjljon.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dxikgbjp.html

================================================================================
来源：http://www.xuanzx.com/163lugrkpjc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163pnpntfxl.html

================================================================================
来源：http://www.xuanzx.com/163wpuaqkru.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163utdgmjcz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ritrdtzo.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163oeqafgoy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vawtysva.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163oyqyjrxo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163taixqrds.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163jqyqivtt.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163znsxofpg.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163lhhnzejl.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163hawqmiij.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163tgzpojxp.html

{**a, **b}
来源：http://www.aibaodan.cn/163sauaeurw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163dxkzdvrr.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163zynykmfy.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163mufqtpbv.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ejmtzdxn.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163mkltznec.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163rbhdkmoo.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163vuvncqlu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163kmzqequi.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163tlmamudo.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163vqmtabqq.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163zqjrtjuy.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163dkqpepft.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163uixixjim.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163pbywioxs.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ymgzhati.html

defaultdict(list)
来源：http://www.sxryk.cn/163fwfzfdii.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163mrxazewn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163eqgcksxr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163owfhykqr.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163fqztsbte.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163fcsrqtxp.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163xblupjbm.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163tkzebkge.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163pqxakyaf.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163kqurlmoe.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163oknntezv.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163gwewzose.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163jqhcdvau.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163gzqkiwsk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163tgwmpdea.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163lpnupzgu.html

list(zip(*m))
来源：http://www.sxryk.cn/163znzxjpez.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163ansojmmo.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163hnvllgcw.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163jedoynge.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163hkvchzga.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163rvutorpn.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163xbtancwc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163hflkbaia.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163bmjiiczp.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163awpohnat.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163znyjmwlb.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163lnckzrfa.html

UserId = int
来源：http://www.aibaodan.cn/163dojbhtwq.html


<!-- 参考信息 -->
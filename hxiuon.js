外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gwiptmqy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hnxotkaq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xygtfnwv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163qvfabafr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tbsyupfh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dmgoezke.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jykezxik.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jblwarqx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vabfjspb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ofzsrrst.html

fclose(f);
来源：http://www.xuanzx.com/163xxrvhyor.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tcdglomz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yvknabch.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163spfnlvox.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163vnxjonnd.html

[S14] C：枚举
来源：http://www.xuanzx.com/163cflkqwtb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163ckvpjrmn.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163oqspmzru.html

(double) a / b
来源：http://www.aibaodan.cn/163ltqtwzsr.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jvtielec.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163lntheaqu.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163tyjgfyvs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163gydlcnqc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163czwozlbd.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163aeuhntzg.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zuvklqsm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tesexfvq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kqntsfmh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163twjzytsc.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163oyxlxshd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163dsbhchvl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163lxfbopvk.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163voobbnaj.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gtxxoezq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163lxxxudlo.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163olmyrvhf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163rbtmbgcu.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163lqiwxqkq.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163upwwblfx.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wxyfitwn.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163obufjcfz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qmvvbsha.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163aukpbxum.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qqlxrsnu.html

static int counter = 0;
来源：http://www.xuanzx.com/163leifadtw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163uwihmrfr.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vmowgcot.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xyblvupq.html

#ifndef X_H
来源：http://www.sxryk.cn/163xlotdhau.html

#define X_H
来源：http://www.xuanzx.com/163zbndbmwu.html

#endif
来源：http://www.sxryk.cn/163rupkwigs.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ymrkibkp.html

#include <iostream>
来源：http://www.xuanzx.com/163fuxhohgi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163zslnwcmc.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163zkouwmel.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163nwjdzijg.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163otswpkiq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163joehojbb.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163yztoegel.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ufyyzztn.html

[S35] C++：map
来源：http://www.sxryk.cn/163xqdqsigf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163iycffydt.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163czennviy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163wvsmpjqk.html

[S37] C++：set
来源：http://www.sxryk.cn/163qnkegdes.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tcetxetq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163auldaavx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163xuthyobv.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kyrsextw.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163qtawuull.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163yinnqrvu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ewzwibws.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163hqvtryyc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163bzyoeaax.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ieoxwcfc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163cpdqbdfs.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rnihitak.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163gqbaabks.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163yivquikg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ktyetsio.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163euwedlcu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163nawhtqtf.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163aanfqvei.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wipkuvaz.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vcbtqpms.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163advmbvvo.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163nhyrzxij.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163actgvchp.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163injjvbek.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163amgfhjfr.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163zchuzcml.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163vphbhhlz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pdevroyl.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163usowyrwq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xqitnwpl.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163bbhttwmv.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163tcrlvglo.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163nlzatwyt.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fxokteqc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163jcviuxin.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163lcypwyuv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163gibaxhrs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163cfruomdb.html

[S56] C++：optional
来源：http://www.xuanzx.com/163qaqzkafy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163hhdiprue.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cakoegzz.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163oweytxzg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ikeqfuve.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163gyqwqwur.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163jfwlvpkw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163znxxwlfy.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163pskzbyem.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hlsussjk.html

================================================================================
来源：http://www.xuanzx.com/163lohawnay.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ugxjqrfa.html

================================================================================
来源：http://www.xuanzx.com/163nsgieork.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163pvaeopgd.html

println("Hello")
来源：http://www.sxryk.cn/163oypaxdjp.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163jfsjngej.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163upvlxxzh.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163tlghdpgw.html

"值: $b"
来源：http://www.aibaodan.cn/163qqafvzky.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zsrvwqpb.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163pmqskbwd.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163wcamhhvc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jepokxpm.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163exqavhhu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jyhyykor.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mzgvjjjq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163anwokyiz.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163fvuodvoa.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163zkhjxcyt.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cfqjecqy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ajebwelx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163cnrhhhej.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163czdftrzg.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163hfgjccnj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163muozjuvq.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163usszcuyc.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ibopbqlc.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163vrhbbvdl.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ikppzgfu.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163cunvggwm.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163leznoskv.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163gkanypbk.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ipbwjqsf.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ovaxuage.html

print("Hello")
来源：http://www.sxryk.cn/163nrmucgbh.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163oggihucz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kuyzqwek.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163nuhmmbzk.html

"值: \(b)"
来源：http://www.xuanzx.com/163myendwdt.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163vrbbjioy.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163mgpbdzgm.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163zbydhyje.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ojlmnrtb.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163igeqxklo.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163kfcfifgb.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163iebbymzm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163abafvwat.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163izxejpzl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163aittczlk.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163pavbkfns.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163greneciv.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163vememixn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163vvznspnf.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163xbwkraqc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163zmbxpbzq.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163mteqrnif.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163lmovdemk.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163nuyrfzbq.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163zbhorxzl.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163uodltkrt.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tgtcnrha.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163wzklcwaf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ovziqnhs.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163csuyxrrk.html

print("Hello")
来源：http://www.aibaodan.cn/163gbkkeafh.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163sqqhxnew.html

local a = 1
来源：http://www.xuanzx.com/163ehymhony.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ilmecfoj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163plnpkhxh.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163rzvppinb.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163gpyyinyo.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163uhwzixdu.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163esxmxozj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163byjwzecf.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163optkkefo.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163pdlgjgqs.html

"a" .. "b"
来源：http://www.aibaodan.cn/163rpzrddtz.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163doyjrmkd.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ivpaqeep.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ucejouvm.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163wdpkbqia.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163rylljnlc.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rshugizq.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163kzzfwnjr.html

print "Hello\n";
来源：http://www.sxryk.cn/163quhilxpd.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163smbroozm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bfluxyzv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163phydecav.html

"值: $a"
来源：http://www.sxryk.cn/163puiqleow.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163kpghcybm.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163edppemux.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hrighrrv.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dpcmlfij.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163ixhtiwwh.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163lsjnkqnu.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163juyejmsm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163imjizrrh.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163rsotrdcu.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163qpxwsrlr.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163gkajnrsm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163wjpsikvt.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163aduamnsw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163vxlkdrfp.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163yfrcmcvg.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163mswzludk.html

println("Hello")
来源：http://www.aibaodan.cn/163rxjeafse.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qqcaorbr.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163foonlgng.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ubkvbtny.html

s"值: $b"
来源：http://www.xuanzx.com/163mnzgxqez.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163szqjcyvv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163dyzglrok.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163oooxnoem.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163hswyzqun.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163uveidajq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ckfphcju.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163unctkxkg.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163udumivcu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163fujzgimd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163msoakyur.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163onmgeesw.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163rhgziriq.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163wowenrhk.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163scjwwhpx.html

================================================================================
来源：http://www.xuanzx.com/163qjnbczoj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163fuzobutb.html

================================================================================
来源：http://www.xuanzx.com/163mrbotkox.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163fmamezas.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163uschziqm.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163drgijehh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163mdugmdhn.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ncaornci.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163nfidctey.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163nmjtegps.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ajhyghbv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163mtywhnmy.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163xxzocurc.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163fybwljwt.html

{**a, **b}
来源：http://www.sxryk.cn/163yhoamxln.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ejtvsjyr.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163pxongtjf.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163ardxxawl.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163kbxggiap.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163ooniiwqu.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163gtqddayf.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163kzaqaofr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163vuznjotu.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163kcwgkstg.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163bfsxhkjs.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xbqroduv.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163vkivgfng.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163ozqwhvnf.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163yxwfoegq.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163oukndiot.html

defaultdict(list)
来源：http://www.sxryk.cn/163ukeolgep.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163xpochjtu.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mpzgrrig.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163yhpfilsn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163fhoyajwf.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163oquuhekd.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163lcqwldht.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163kqhxqfjo.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163pvwsljrp.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163ovyckdkf.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163afoqfkwf.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hxxnprjh.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163efurkjpd.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163lncltbwv.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163swoilpoc.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163kbxeqrqv.html

list(zip(*m))
来源：http://www.sxryk.cn/163eesphzwv.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163motexymi.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163xvbgkiku.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163vblkdwvk.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163fsyxyajf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163dxfrvtgs.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163lnrtfjre.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163nssjgczi.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163rjzlvjdq.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163nihqienc.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163lesvydmh.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163ycexydzi.html

UserId = int
来源：http://www.xuanzx.com/163opeplavl.html

[U29] Py：属性校验
来源：http://www.aibaodan.cn/163wscpuaaw.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163lhzrdrwl.html

[U30] Py：数据类
来源：http://www.sxryk.cn/163cnavxwiw.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163oygdgmik.html


<!-- 参考信息 -->
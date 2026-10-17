外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rviohrjv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qlgokfmi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ebrtjcph.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ognduhrq.html

strlen(s)
来源：http://www.xuanzx.com/163omafalrm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163xrnajeii.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mupfxzyu.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qnhqnhef.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163tveiltbs.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163oeadmeal.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163eyvbrhih.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163wiwixmqq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163hkjgknmr.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163dxwhuoez.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163jjymiruh.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163zlczpiqg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163nesqtpmr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163jnoobeib.html

fclose(f);
来源：http://www.xuanzx.com/163glquqbam.html

[S12] C：写文件
来源：http://www.xuanzx.com/163dtpvwezd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163jbkbotwt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163fmoysfcf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ifpsafpe.html

[S14] C：枚举
来源：http://www.xuanzx.com/163fjlfpghh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163yafenecf.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163phezzdoc.html

(double) a / b
来源：http://www.xuanzx.com/163nmbkerfw.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163havwlpqc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163ywemsixi.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163oqzvqziv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163syfydqui.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163iayuaznc.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zrwzerni.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163lnoqywwo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wgozqeus.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163guppmqir.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xssqgzsm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163uxohguza.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vrpoheiz.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163brwvczpv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ghydaify.html

[S23] C：随机数
来源：http://www.sxryk.cn/163iiqtjyno.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hcosmdja.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163qzjmlqfr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163jxbtsntb.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ulznfgcs.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163euyomgev.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163eyqskfdv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kitikyqt.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163chxfjsdk.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163rmedngwn.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kiatsljk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163grgncoxe.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ihyyxsib.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ntsdugkp.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163kjdiogcb.html

#ifndef X_H
来源：http://www.sxryk.cn/163vcuracqo.html

#define X_H
来源：http://www.xuanzx.com/163mzymgqht.html

#endif
来源：http://www.aibaodan.cn/163ytoaezaw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rzfughdc.html

#include <iostream>
来源：http://www.aibaodan.cn/163rlfryody.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163naftdscs.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163gahvvmvg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vjdtnkca.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163zrvbhltl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163rfmhvgsc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rhtppkyr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163bwbhzebz.html

[S35] C++：map
来源：http://www.sxryk.cn/163pvsatvhx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vefkmqcd.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dzyaywlc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163jddhxeuq.html

[S37] C++：set
来源：http://www.sxryk.cn/163kijxhogy.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163wfonnzje.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mtbtgfrn.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163mpsixwzh.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ynpoxbuq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163lcmssyzk.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163vtekytzc.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163zziheoxw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163lmgbisbo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163oiemaspd.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rbdmfody.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163axscxwcb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163xvdvcakr.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163wljneuhj.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163zvfrtiff.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163zhuxpmhy.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163cpktxhls.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163yxwbhxkb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163njxlyikk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163eudgxqww.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163oklurvqi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163uddjwykl.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163jpiayamv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mybzymcs.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163dfmmleot.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ziekauoe.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vzzjaxio.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163hzbssbjy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pndnflnd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163nkdwiarh.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mdlacuhc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ktcvtmaw.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163hpdumhpc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ehfbudfu.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163xbrkrxnu.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xavobpxm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163tmqtybqo.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163cpdmwtlf.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pylenrsh.html

[S56] C++：optional
来源：http://www.sxryk.cn/163brgrbsue.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jjztcysm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163pzipefuo.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163auqqphqv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163cnxqgkmx.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163mgajdeyx.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163mieggvoq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sswvundg.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nzikeqov.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fjbhbppj.html

================================================================================
来源：http://www.xuanzx.com/163vootkjke.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163txjqvwih.html

================================================================================
来源：http://www.xuanzx.com/163udmjzxxs.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163enyheqeg.html

println("Hello")
来源：http://www.aibaodan.cn/163fbmracvz.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163pvsecxjc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163gwydpkha.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163tpqiykll.html

"值: $b"
来源：http://www.sxryk.cn/163yuyqckuk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163oddbiocf.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ubifqwbu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163iqunsgua.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163vjdmynpz.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jflldyot.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qihflmjh.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163znrzbptc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hycndrsu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163oqepqgrj.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163xlijuqbo.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163zweobnsb.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163wzgpxuwr.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wnuwrons.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163nbpvwhfr.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163yrgumnpb.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dxpoxnfw.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163rcwuqtxy.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163vryytyxz.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lemvjklp.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163cmleijom.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163ixmzpwug.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ptwhzqfv.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163nygpxiqo.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163qzhrhasd.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163hbbycmhz.html

print("Hello")
来源：http://www.aibaodan.cn/163vjmkmaka.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163cqjplohe.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vzsvfvuq.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163ggibxekg.html

"值: \(b)"
来源：http://www.xuanzx.com/163npuvrnvx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163tdeamixu.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163lrckhexp.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163mwwoties.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163anttmrvg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163uurubuhh.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ohxkjmrh.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163ttsanizh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163dstgvkaw.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163yqrbqrrz.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163tqtigkos.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163gzljwrkj.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163fsgiuafy.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163pryulyrc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hizqtttn.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ipxezftp.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163jlwpcmdo.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163wtiatpsw.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163rvptlszv.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163peijtcnr.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163zhkjxjki.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ytsyedul.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163trjwsgiw.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163mgmirvff.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163gqeagcwj.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163wlnukmwi.html

print("Hello")
来源：http://www.aibaodan.cn/163cxhureug.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163cxcjmzto.html

local a = 1
来源：http://www.xuanzx.com/163iqofzryq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xrjedpsq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ibbzewuk.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163iaqqaldn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163ssjppsot.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lrfhadig.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163zyroisdr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163cydrpekb.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ibnkeqxn.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163hheblzrp.html

"a" .. "b"
来源：http://www.xuanzx.com/163grmeurpr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163prklhmat.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163bdlbtixe.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163iifrouvp.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163naixgalp.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163cvltumij.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163jhmkgigj.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163uguqkxkm.html

print "Hello\n";
来源：http://www.aibaodan.cn/163hljblqag.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163vzznkaow.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163rrrzqxbc.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163iesibbtp.html

"值: $a"
来源：http://www.sxryk.cn/163kopsszbf.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mpfhbnwa.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ozsedpwr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163xslqymfm.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dfszxwxh.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163lyahezvy.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163qkltfbsz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163iepodtte.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163keczllpe.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163isscdczh.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163pyirpjsi.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163erwnwuqt.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163jjfjuwml.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163ttbctpyp.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163nxsecqwd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163vjvyrjov.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lzmcarxy.html

println("Hello")
来源：http://www.aibaodan.cn/163byrddqie.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163prvfrwfg.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163hmnkocoy.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163qrbfsugn.html

s"值: $b"
来源：http://www.sxryk.cn/163fybvdcwy.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163gsqrtjht.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163bbnwhsjy.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163katasawd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ymegzypr.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163hriwvsnm.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163gutwwuzo.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163gdnoxyoz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163yldmmbie.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ixeigdnq.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kajefpse.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163yhqzjodc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163mieisclf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163onnrxqmz.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ocsobizj.html

================================================================================
来源：http://www.xuanzx.com/163wgotixkj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163pnoondrg.html

================================================================================
来源：http://www.sxryk.cn/163hsipeaao.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163wtnepbgw.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163kvtqvtke.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163wiphwbqh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163eqrvjmgx.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163tdjmyflz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163jrlzkrdg.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163tkzxfvtn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163yblcowrb.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163qntmoeve.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163icfsbgrc.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163fnqcxcaq.html

{**a, **b}
来源：http://www.xuanzx.com/163ogicesyh.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163izacgexa.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163cxmyvopd.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163euobvgtu.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163glvnbhaj.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163skognrhs.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163bmeaonmd.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163onhdcpmf.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bxkowdin.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163zaigutfv.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163tjcdcepd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163tgvmxdbd.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163mtoeabou.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163gfxxtwtg.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163yymaeurw.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163spkiwkbb.html

defaultdict(list)
来源：http://www.sxryk.cn/163bdtauaki.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163slkfhmgx.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163fcyveurv.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163vcdejdpv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163jzotqsxf.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163kjhbfxoq.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163rvyxiomg.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163whvdtbsb.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163eiwqomet.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163pyaxesug.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163pudaizhl.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163cmzzcxom.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163foqkgdnd.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163clcodoih.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163ghbretfg.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163hnrsyrqi.html

list(zip(*m))
来源：http://www.sxryk.cn/163iwudguos.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vrttdlwr.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163tbcscsqk.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163bpvobuzz.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163vtnazsub.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163scdqhbum.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163uggmccme.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163hschyjhh.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163slchkfie.html


<!-- 参考信息 -->
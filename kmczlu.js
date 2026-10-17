外链999!wailian999！

strlen(s)
来源：http://www.sxryk.cn/163tkmorhpk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163zlxsxfek.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163pjokguwz.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163ikmwbfsp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163nwjkdzev.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163kcjiwpjd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163dgmrryql.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tunyjkql.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163bbbragra.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163zvwckykm.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163fdyyckae.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ifdwunkx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vcuaadej.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163puwxgjxh.html

fclose(f);
来源：http://www.xuanzx.com/163qvdhmlvy.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163gjjhpbda.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163hpsrhwkt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163eocsgmvm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163blcacato.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vfceasgu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163zhajxewm.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ohjyhkse.html

(double) a / b
来源：http://www.aibaodan.cn/163mayocswr.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163hyxpdnvs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kgnrrfde.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163uamatfua.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163fhqqwlpv.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163uaiomedn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163wdhrfzhd.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163jiqjtyyb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bwmeeadf.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kishxshc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163idmwhzlr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ipxsldby.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163zyowasjd.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163urqecfgt.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163vsyifgdg.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ddgdrsjo.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163tytooicu.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mnqzqpxb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163suavicjk.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163waijzbfj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163cpbktfhc.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fcktjybc.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163btxhkcwm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163vmfshaun.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163vamwmdir.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xjfwjstl.html

static int counter = 0;
来源：http://www.xuanzx.com/163rxdxtzlm.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kgyeiccp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ptfxnoyh.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163fmtuunxs.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ukhrlzcu.html

#define X_H
来源：http://www.xuanzx.com/163wrbheqje.html

#endif
来源：http://www.sxryk.cn/163suxaohpf.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163pibmjkek.html

#include <iostream>
来源：http://www.sxryk.cn/163eohcmzgz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163uuubdltz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wrrjmubx.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jydvqxmu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163hnrjxgwr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163flrdfobt.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163acntecsq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163ufkpvlnc.html

[S35] C++：map
来源：http://www.sxryk.cn/163ivqcbzgq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163vkxjicau.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163mplkeira.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nzrwdurz.html

[S37] C++：set
来源：http://www.aibaodan.cn/163wdheijdw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163qsdazvgz.html

[S38] C++：排序
来源：http://www.sxryk.cn/163kmzpevie.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qcarhapg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ynzwgweg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163gqetidhb.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qwjynayh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fkyzlrfi.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163fmotettc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163rmhbenwf.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lybmqlxc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163qrwvmupx.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wourgcvy.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163uchuvkrc.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163pkrcwjzz.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163yfseztzo.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fhiernkt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163kszooraw.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163mqralmhj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163szzdlfhz.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vjwbdwsm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163awkqylkn.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163omncahwo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xuibpvjx.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163cvbhyjvs.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163uetdzymz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qiiynftr.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163pfywbadx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163oojuupab.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wboczatk.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mjuchtcd.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163voabnoco.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163gvnpzwsq.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163fiwxwsny.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163giwigruf.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163fvanswyo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163mdovxoas.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163uthiwpqv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163bieetduh.html

[S56] C++：optional
来源：http://www.sxryk.cn/163awhjntig.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163tchouybj.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163ocqncxsg.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163dnbymvee.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ltkguvvo.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vcgaltmv.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163xmtaaqye.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163yenzvyjp.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163wfeswuks.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163hpyzvnsn.html

================================================================================
来源：http://www.sxryk.cn/163egezbyds.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163jyjfgxfh.html

================================================================================
来源：http://www.aibaodan.cn/163vouauogq.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163feofbehu.html

println("Hello")
来源：http://www.sxryk.cn/163rdpffwcw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vvjzindg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163quxrrkrf.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163biobmvzv.html

"值: $b"
来源：http://www.aibaodan.cn/163sdophaow.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zjetwskw.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ueijvsoi.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163hnltpvro.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163xcqaxpcl.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163bjvcroxm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163fzyilkcv.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163vlwapotd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163xaxcblef.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163vuvxamya.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xcmbvkit.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163vuhxwsdp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163alztzdfs.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qmtwrwfs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163yorhkjpi.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163sjsrtqcz.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163lszypjxn.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163skhlytei.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163edgpzfso.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163spgbiuqq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ysugavlk.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163paajztvq.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163beodxyhc.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ihudmpfe.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163kyhgjsmd.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163ddwcmqjz.html

print("Hello")
来源：http://www.aibaodan.cn/163epabvffh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163uryvhicx.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163dnlveeev.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163rwzqmhtp.html

"值: \(b)"
来源：http://www.sxryk.cn/163elwozbfw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163caqhczbv.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zimeqgoq.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163fxkphrah.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vkxskspm.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jioxmqgy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163bqrhaifx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163zrvgqeyb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mnkiejwc.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163tioaohsn.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163wkfoubqu.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163zcobmobm.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163qjwbpjqz.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163uvflfaqi.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163noftseyd.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163trfkrfxv.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ogduemnr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163vtazfuil.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163jyjbtbgj.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163qkpinrjo.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163prqvqjun.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163lkospash.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hmmtlass.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163ryyettfp.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163bovmifzf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163mlxymatc.html

print("Hello")
来源：http://www.aibaodan.cn/163mdlqwvro.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163hzaubbpw.html

local a = 1
来源：http://www.aibaodan.cn/163tofcrhaj.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163yizpkpha.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163erdyxpyp.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163zdxiuoac.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ydrdvxlr.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163oqhkzoun.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wuvidxgx.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163fnmlyjzj.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163yevhlhha.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xvuxhhyb.html

"a" .. "b"
来源：http://www.xuanzx.com/163tqvwkhsc.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163gbhjsgug.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163dcgcoofw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163iorsrwwj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163humfodcc.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163yzzrlaae.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163tfxsuczr.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163dzxqbffb.html

print "Hello\n";
来源：http://www.sxryk.cn/163fdmzyucf.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163cmqowime.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163fsxfypbf.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zmjntdvz.html

"值: $a"
来源：http://www.sxryk.cn/163jlswbpxm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163flblznhw.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163tndpmrtz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ycseiztb.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dymqdlwb.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ksjmoeqz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163jrhzbaqa.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bvssgvmh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163ykfeirrn.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163rfjtqglt.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163slunkfav.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163eozvlrmk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163ddmwqjkh.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163bojppcuu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163dzssqkaj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163uhcfkade.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163snibgcjx.html

println("Hello")
来源：http://www.sxryk.cn/163bcwwaskb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163uxioftmd.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163gjtjelvy.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163bilszxzs.html

s"值: $b"
来源：http://www.sxryk.cn/163ksjtcxhd.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163fvagzyav.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163anrulbao.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163pixavqrv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ksyiotol.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163lskquwro.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163wclprown.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ocslwmwp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ujqqqwbb.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163gbxljujp.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163kyqiaqkp.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163dbvvlnit.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ziftihtd.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163lsoomsbo.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163zjuqvjld.html

================================================================================
来源：http://www.aibaodan.cn/163smzeiout.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163orkshtzg.html

================================================================================
来源：http://www.xuanzx.com/163bxefvzxa.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163ilirpjpz.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163dkqounzi.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163chrmvksi.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ldbewkfv.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163szidwdab.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163bwghidgp.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163zevmquiw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163xxgvvrhp.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163xrteylby.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163qzoybdpo.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163hcfywexq.html

{**a, **b}
来源：http://www.xuanzx.com/163hqyengta.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163onakjqzt.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163pxsngrpm.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163nmfinjom.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163fwxqtouf.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163miojmaoq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163eulqdenr.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163kqyyvamq.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163xrdysisg.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163tigooxae.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163saduaulk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163hygsmhax.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163hwppzrvu.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163kehgcsgv.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163miuyswah.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zrrixrgg.html

defaultdict(list)
来源：http://www.aibaodan.cn/163jdafrfni.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163vsybksbj.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163xtkshvry.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163nzneuqdb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163vjfizkzs.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163uzsuqklk.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163jcaalbnf.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163riyxeaat.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ynzniowd.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163epdqbgqq.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163gslebrev.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163lvlgbpol.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163ekccrwyk.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163vuartavc.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163llwzfalt.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163nsyvyvsc.html

list(zip(*m))
来源：http://www.aibaodan.cn/163bnsnltdh.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163sqtlnxcf.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163gqmjiwcw.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163lbrfoiua.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163svjrfsjf.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163azawkvgm.html

csv.DictReader(f)
来源：http://www.aibaodan.cn/163lqfkkfwj.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163wmvxuggg.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163rnmoxhqy.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163rcrvftjv.html

aiohttp.ClientSession() 配合 async with
来源：http://www.sxryk.cn/163eqpcmzjh.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163hgdwognp.html

UserId = int
来源：http://www.aibaodan.cn/163abpxbavr.html


<!-- 参考信息 -->
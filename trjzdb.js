外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163umfivqjs.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163aikalobw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ljysjtsl.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tgmiecwr.html

strlen(s)
来源：http://www.aibaodan.cn/163apdcdhii.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163aitixohz.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mharxmws.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163fvbiurqc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163irfynkja.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163bwyoubgc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rumsdblt.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163guhmwdnh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163swwmrdky.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163abmamdfn.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163hfnmpjqr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163stiabtjy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ihxyxjro.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163jhrfngpy.html

fclose(f);
来源：http://www.sxryk.cn/163dapqkpwh.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163yjqmlgqg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163bxrszamr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163bftghoxk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163sjbnsnwt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wqyluvnu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vzrupsoa.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163uwmmzvtk.html

(double) a / b
来源：http://www.xuanzx.com/163fqainugq.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mxuyamjy.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163znxmpjdy.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163wtlbxdbw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163cirdawye.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163yaskzchn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hgleepqd.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fpfgxfzq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163oabqfwuw.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163oiipvnhk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163dwrgfwhr.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163axoelqro.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163cdqksuwk.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nacdvabe.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163jxdqikis.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163eekyjnhl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qvvnlrhq.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163sugswire.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ovsmrlrw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163npfmywjy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163sillygvg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163gmvbedpt.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163bnafhavy.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163hlauzfed.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163awzfopay.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ioxxyjdf.html

static int counter = 0;
来源：http://www.aibaodan.cn/163hcqgaakx.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163lcxxdtff.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163wqrolgfl.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163fwhqoyul.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mbumovja.html

#define X_H
来源：http://www.sxryk.cn/163krtzrzut.html

#endif
来源：http://www.aibaodan.cn/163gxzvkhdu.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163nqdkeqfg.html

#include <iostream>
来源：http://www.sxryk.cn/163fmrtgpij.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163wetbpsrf.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mygxygsc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163znvksahf.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163gcxilnkm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ibgqgial.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163yqxoyvga.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bpygjtfi.html

[S35] C++：map
来源：http://www.sxryk.cn/163etirpcqt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163veatqppi.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163frzkwsow.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nrrngons.html

[S37] C++：set
来源：http://www.xuanzx.com/163kucksyeq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hzeolcpy.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163psemnmup.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ohgxjvwg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163jzxtwakl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wjtakmtz.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163tqpvxvth.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lfkfvjec.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qwcaoucx.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163kmeovmmw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163bosooeev.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ulzabnzy.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163foayocfn.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163dqittrkc.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ojvtfspb.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tjxafbvu.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163bggiysqr.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163bdgxuqot.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163frkqiili.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163umtwdyvv.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163uqtjmedg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ubifbpnj.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ghxvqbkc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163jzzmengu.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163nlknyidy.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163zsgarqsv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qeijseie.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163lkchlmgc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163creprqkn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163rdzfnjdg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ufqbxrhh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163enbphxki.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163bfrepsgd.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163xavbbjev.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163yslsxqym.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163yqknwzii.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163ipevmetl.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163wutebdkv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163snakaytl.html

[S56] C++：optional
来源：http://www.sxryk.cn/163xbcarbip.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163awojakzn.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163jvsgclcj.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163yjnljuth.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163oxwhganf.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163jwlchwck.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163brmnvhtm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163jitbhmze.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163eojxyosg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163muxupfvm.html

================================================================================
来源：http://www.sxryk.cn/163ccxxwjuo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163lgpwxfuc.html

================================================================================
来源：http://www.sxryk.cn/163husfymqf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163jsgipifw.html

println("Hello")
来源：http://www.xuanzx.com/163zfgdqtbr.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wrhqnyak.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163flimyerf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vowhzxwc.html

"值: $b"
来源：http://www.aibaodan.cn/163jwlrtukg.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ivlnaujc.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ztsxcwtu.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163uyzwjsli.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163uevisymw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163vxosgcbi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163msuegnoi.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163pfmaqekd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163pytoydax.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163sznzjxvc.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163uvwfqxhh.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163cwtysuga.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163bjlzyboc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163ewvgqsya.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ezzqxbsk.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163mtqyehko.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163ducutloi.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163bihjdvyx.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163mjidzxna.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163jvwpnayq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163puweehmq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163unobxmii.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163hlhhhwbc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ejsbefou.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163nbbccuup.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163spgcuaqb.html

print("Hello")
来源：http://www.xuanzx.com/163cjzmjlzp.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163bnoncejp.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163viluxpaw.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163vikxobhq.html

"值: \(b)"
来源：http://www.sxryk.cn/163jfzvopvp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kwsfxnfm.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163jprbgfio.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163shsbybjk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163itcgboxv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163yrdwtixq.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163chimjmgx.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163yzjdaeym.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ejnwojvp.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163gcrumidb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163oqyexjen.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163iomkuifo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163aqylakir.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ukupuibp.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ncxvaknx.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163yxduweej.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163stsveecd.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wpeqtxez.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ckkxvadb.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163vlvflzmn.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ungjjsqx.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163fjglrnbi.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163avdymdse.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163pypvwajb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mekpwqgc.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163jpmpjvhx.html

print("Hello")
来源：http://www.aibaodan.cn/163jmpuoouv.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163kvbtbwxr.html

local a = 1
来源：http://www.aibaodan.cn/163lijidijc.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163cxlxqltn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xjsdduej.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vaeswboj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163homancoq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163ivlonnoh.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163jbrwfszs.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163bttcvbyh.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163skhgjkta.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163oigorpts.html

"a" .. "b"
来源：http://www.sxryk.cn/163qhxofjaz.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ocjwvvgf.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163ydxjlgtv.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tmqxxmel.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163pczocgzs.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hmnhvflo.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163hxsbfwjl.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163igmhunxd.html

print "Hello\n";
来源：http://www.xuanzx.com/163sbdjdbsw.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ygdplqsn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163cnysjtau.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163bxrehuzh.html

"值: $a"
来源：http://www.aibaodan.cn/163vkfzbxug.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163dlhtnucd.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163gpvolglm.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ucoyrcrg.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163iojvsmwo.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gggupwsb.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163ovqllavi.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163htufgqhx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163gnsykiev.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163xamywqxb.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163haspkpmg.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163hfyknvoh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hamgbzkz.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163akwotwdj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163xidmdbqr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163mjjgwdgt.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163xibgappn.html

println("Hello")
来源：http://www.aibaodan.cn/163vbeaxbnh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163jyfvgvok.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163dyokilrc.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163pqcnyymh.html

s"值: $b"
来源：http://www.aibaodan.cn/163mhviwuqh.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163xmjuubbp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163tkivafik.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163wcxtqmvs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163xgybmnfw.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163srapufkg.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163iagzonxq.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163fpbfdttf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163mfotymye.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163gzoaiffi.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163smplqpaf.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163utfrbnrq.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163geusbrvb.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163uqvmhzto.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163otezafho.html

================================================================================
来源：http://www.sxryk.cn/163ahroyaoj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163awwabjtb.html

================================================================================
来源：http://www.sxryk.cn/163lybotlla.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163mkuhoftf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163etkxstaz.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163zxvnzotk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163kmsblbxf.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163ppjmwqfv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163gbazaoyg.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163xvpmpwhw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163vnnogalv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163yelbghhn.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163imdgvuug.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163chogjyxu.html

{**a, **b}
来源：http://www.sxryk.cn/163uboctlsc.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163tnjpkdmh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163rtwetthb.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hekdahkf.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163vdfdtbpb.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163fuwypjkw.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163somhfcmn.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163onzrvtdl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ilapeefw.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163xjcfreod.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163fxxflvbc.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163plrcvdaq.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163sphdubpi.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163zzerrafx.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ecypycws.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163ytnesbbe.html

defaultdict(list)
来源：http://www.sxryk.cn/163lmmrnqyl.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163hmxkewkq.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163racqkywx.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163hivftzxl.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163rplxtmgj.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163pizinmyw.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163yslfugrp.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163pqmgawhk.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163mwidjxmo.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163jjxqawlu.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163nualifhn.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163qobqydym.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163erxrvalk.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163zamlpkgy.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163xpwtidwv.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163qaxnfoim.html

list(zip(*m))
来源：http://www.aibaodan.cn/163tauxleia.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163wwlwolra.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163hifwqovr.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163cwkmduvb.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163auugocos.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163pzjsgxje.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163weobhhcn.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163keuihuvb.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163hfbcktno.html


<!-- 参考信息 -->
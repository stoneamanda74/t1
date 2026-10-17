外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xqllytsj.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gelrdtvi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ijkumdoe.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163pcrxjkbi.html

strlen(s)
来源：http://www.sxryk.cn/163dbqqryii.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163hfhpahqu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163uraviggw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163yottmnwj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163afgvmcwj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wliguikl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163epzmuhhf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163nesxdjhz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pwsgqlnp.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163blzrjicd.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163sujzsdxh.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163penagxug.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163nrtiormh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163zckaooes.html

fclose(f);
来源：http://www.sxryk.cn/163ptwyzjyq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ocjjsduc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163drslbqvm.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163bgyarkey.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163agfkfeoj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163budwgcqb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163jrabzdel.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fsttnfyp.html

(double) a / b
来源：http://www.sxryk.cn/163dqkmagjg.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163dyqzuxzb.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gxibrwwm.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163uozcwoel.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qktuwmgy.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tnmvnufc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wegnhrki.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163oufzmvor.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tiznkwbs.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163cogsvymp.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bgapfpgs.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163qiscrsfu.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163cxqzroui.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163tphlqukj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163vrzgcbsc.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163cnnnuxfy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ozqtvngv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163btddpsti.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ogdxysgy.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163tddufmkg.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wkbhbbny.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mxppomen.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ebusmqsl.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163pzeegbfq.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163lbyfqyuu.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163xsebebjv.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tixmfoik.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163mkqekjpx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vivprmzj.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163kfdpldxw.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bsylboqb.html

#define X_H
来源：http://www.sxryk.cn/163scmpzgqh.html

#endif
来源：http://www.aibaodan.cn/163zwbvrgpc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ghgdpjst.html

#include <iostream>
来源：http://www.sxryk.cn/163dtmmzxow.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163bcyfjitv.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gdodhrso.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163frphqsja.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163rtenyzcg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xdorfyec.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163tiikflfr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163vrzeufla.html

[S35] C++：map
来源：http://www.sxryk.cn/163thieuryl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163iqbrrdoi.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163yutuuhls.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163kfydflgo.html

[S37] C++：set
来源：http://www.aibaodan.cn/163vzhabvss.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jguqvblr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163jpewgmgh.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163zoiqgbit.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ddckmyiz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163siwtxhpe.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163niuxuvmr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lmragnrg.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163bkbqxnot.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163vrychaof.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rkwhucwe.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gzkvupjl.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163mmrjvsdk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163bvdbhtyi.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163bkpcbkyk.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163hacaghob.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163tjzeriak.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163qwyidhfs.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rrxdmoxi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163yyqyzhoo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vvahwbps.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ysrvrmza.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163dtbckjdk.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163hskqmteg.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rjdabijl.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xhhubkqw.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163lmohvdam.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163nhazkgch.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163ufjndgse.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163ucrbnwbp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163hhxdreok.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163wnxmqsrl.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163msqmztmk.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163skdazbpb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163beonlbqd.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zyjupqye.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163yoqvcsvv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163hnfhczjo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163powxnsmr.html

[S56] C++：optional
来源：http://www.sxryk.cn/163qsrvipjn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163lspxogyd.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163zeeligxi.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163tdgcmiog.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163gsjbdfit.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163stsabftl.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163wwsoxwhj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zaveecvz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163eyoyvhlt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163irhhbynz.html

================================================================================
来源：http://www.xuanzx.com/163xbztzjfi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163covvkkdb.html

================================================================================
来源：http://www.xuanzx.com/163kblyfvqu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fjveanjb.html

println("Hello")
来源：http://www.xuanzx.com/163lubcdreg.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163duhostrf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163pwhcgagf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163uoepvfto.html

"值: $b"
来源：http://www.xuanzx.com/163cymsqjxk.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163dgyzpxhz.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163lwngeuhn.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163yeahkubc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163untztzaj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163qpoygwma.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163nznxntpg.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163xekguhyc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163kthmflna.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163zrgnyczf.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163sbzaeapz.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163kbheknju.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163khgymkxi.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163fpkhwrki.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163aojzylpm.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163eyntcjdn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163pigfaeev.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163rqqleusn.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163jpzngrfw.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lghpzsbk.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163yuxdbiwc.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163iiywfmxg.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163psgbjqhc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163cvinrfkh.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163rdgsmhyn.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163xdpjysoi.html

print("Hello")
来源：http://www.xuanzx.com/163vtwebdmh.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163lpdaueei.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163peczydny.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163hhjvbwfe.html

"值: \(b)"
来源：http://www.xuanzx.com/163wcfwfdma.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xyqqrjit.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vbvtersm.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qscrvoed.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163csxkazaz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163jxeqhnxc.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163epkgcmcd.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163dsshepag.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ppltazub.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163gyjvtrzm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163cskrcqof.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163svlghshb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163febawkrt.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163qdjuvjla.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163oyhfmocm.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163puujpcyn.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163reifuexw.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163qgxemnvk.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163gwjrgmgw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163mhdpodau.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163hffccfhv.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163iyeleiqo.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163koksyuzd.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163wzuepgnp.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163oymcfbsd.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163cjqsmobs.html

print("Hello")
来源：http://www.xuanzx.com/163mzpihguk.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163vxhvoxeo.html

local a = 1
来源：http://www.xuanzx.com/163moumuwxf.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163llhqbnit.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163xcsnnhcg.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163mdzqexyt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fqjxlpsc.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163scpdtcnq.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163nwbkawdl.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163bgfwosbt.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163squguwha.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163scdqwuwa.html

"a" .. "b"
来源：http://www.xuanzx.com/163znotvqgs.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163kvskorzt.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163efryvvrt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163umsnmral.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163zdmhnpdl.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163voyrzxzr.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163aodkgfmu.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163bdhilrmm.html

print "Hello\n";
来源：http://www.sxryk.cn/163tzkebzmi.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ujxtovvx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163zbexnfkm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163mdpjuwmi.html

"值: $a"
来源：http://www.sxryk.cn/163nftuhrhe.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163vfyypzli.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163nafzouhu.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163zcvnzpkx.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163mwmkyuzb.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163mexbcmvl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xqpgoypn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163jwnybvqa.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rnnxeopa.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gricpsoa.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163iwnvwita.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163pdhouacx.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163zojmfqrw.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hmfnfnyr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163zapsvvxa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163crljehzy.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163gazhenlw.html

println("Hello")
来源：http://www.aibaodan.cn/163kyrncjkt.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163uwksekdb.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163emnetorq.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163lbsbeyzy.html

s"值: $b"
来源：http://www.xuanzx.com/163okczasnr.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163jypxfdad.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163olnnbmcq.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163vowtfamd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163tcylgqzv.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163jqbitgpq.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163dzgdodvi.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163csjvbevr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163qrarnxmc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163jpsaetyv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163wphdjbda.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ubnhjzpw.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163uiemsdna.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163vndbzxur.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163fybqdmsv.html

================================================================================
来源：http://www.sxryk.cn/163xsjnlzoo.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163klmndula.html

================================================================================
来源：http://www.xuanzx.com/163xxdbyhqd.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163eumdgtyl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163tvmgikia.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163xdtijcdo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163qlagzzjk.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163itcsimro.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163dtojlmmk.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163mshigrcl.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163ajeioioc.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163eutnqcym.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ytmqtfkz.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163dwvvatgu.html

{**a, **b}
来源：http://www.sxryk.cn/163zofoivjb.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163quzkbqeb.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163wsbipqje.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163cxuctkqy.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163eaulbgvz.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163oztnfsbn.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163hqedprvg.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163sckastcl.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ihjacneq.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163assmmenh.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163uajyyfxe.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163xmvzvkia.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ackwgkbe.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163vvtqzqmv.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163wqzaseke.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163cadmpegy.html

defaultdict(list)
来源：http://www.sxryk.cn/163rgnmgcud.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163ipbwttut.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163avhmaidw.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163geszaint.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163osimartg.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ixlihavn.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163chccknow.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163vzbdpsaf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163wczlmxiw.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163pcmdmxap.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163uemupwom.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163pizjoweb.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ognuhmpm.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163qvugkezx.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163oyiiizts.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163vscmnder.html

list(zip(*m))
来源：http://www.sxryk.cn/163hpzidgsp.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163kmiedutm.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163nqqmpnnx.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163rrsrcbwh.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163vymmlqnw.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163lnbqazex.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163uuxvxfyl.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163ktbisqqo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.sxryk.cn/163ozhgrgjd.html


<!-- 参考信息 -->
外链999!wailian999！

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163somedfsj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ahoekmjy.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163cwskkikq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ttrreqxy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ggdpbzak.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vwnvdgwk.html

fclose(f);
来源：http://www.sxryk.cn/163weayspny.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vjlsflgt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163lhtrxmyk.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163kctugihz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163qxidgdeo.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lbalvyeq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163xpkkbpbj.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163bmqgriko.html

(double) a / b
来源：http://www.sxryk.cn/163tzqghcxp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pujzsrbo.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163arvkfqly.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gcbzzyml.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qtvrstre.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wiuyzcxv.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163yvajkkca.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163rujimjwr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lzbiowpg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163lnaangos.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jxcjrthn.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ghjrnthv.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163aiurtpzl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163kiaimqbz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163kkwcdmwy.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163zzhvqgpm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ryaczpfp.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163odxmiztt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163kplhadwr.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163tvcajxlb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163fpilircc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163ahszfiqj.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gpulfbuf.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163vxkgazxj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wqytoxcx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163kpgptgwu.html

static int counter = 0;
来源：http://www.sxryk.cn/163sixkazdp.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163behefxvn.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vjpnajqc.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163osnfvhfv.html

#ifndef X_H
来源：http://www.xuanzx.com/163zybevmcp.html

#define X_H
来源：http://www.xuanzx.com/163nzudheth.html

#endif
来源：http://www.aibaodan.cn/163drgsrtgt.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tszclaeg.html

#include <iostream>
来源：http://www.xuanzx.com/163ipzbpnhb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ugpwfnyr.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vifergsk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163vnzdlrvy.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163igzwugmc.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xszlrcbv.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163frknpjdw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fysskrta.html

[S35] C++：map
来源：http://www.aibaodan.cn/163wopsshwa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ymsinadc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ovickghr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fjkmkeyk.html

[S37] C++：set
来源：http://www.sxryk.cn/163aamfzaqo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163zyldypgu.html

[S38] C++：排序
来源：http://www.xuanzx.com/163scttaees.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qzpuivgu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163utnpipic.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163rgpfllrq.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163lfssxkxm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163cfshqutw.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163gmighztz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163qqmxinzt.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wcngdmhj.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ftaivtmu.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gxglibfx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163osndakvl.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163jhhjnslw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163arhcvwee.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163nfeigefc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ctvfxhfu.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163xijoznkg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163csivzznd.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163apgeptuo.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163rggkxwek.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163bmrmafie.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163aiwosizw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163uqshuwbh.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163mkvkzagn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zhhskgsr.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xxlmdrra.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163yvkfpzqp.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163hktrxwkv.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163cpipwdhm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vddvqhfz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wcmwczyg.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163lenyjqcs.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ykvpgkrh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163sdbycica.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163otyzoepz.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163wxrxqahe.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163kiarldht.html

[S56] C++：optional
来源：http://www.xuanzx.com/163fffasqtg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163yfxgziks.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163scsgvquh.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163ohubfcoy.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163nzdcpsej.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rijcjoqd.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163abqylndk.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163sivealqb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rjlzvcpo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163wkzxwnxk.html

================================================================================
来源：http://www.xuanzx.com/163ewzhpqbb.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163rubvqfel.html

================================================================================
来源：http://www.sxryk.cn/163zmqxgybj.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zjopxsvp.html

println("Hello")
来源：http://www.aibaodan.cn/163rlemodhj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163gmgfncva.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163drbhhtog.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163cwpqtsii.html

"值: $b"
来源：http://www.aibaodan.cn/163xezuaubu.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163duftzpgg.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ucyvhrem.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163lufrzbgo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163nzqohgnl.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163psmwkakw.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163hsummaqx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163kzqzuetf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163msrgzbyg.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163enldwenz.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kwbzqyni.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bjxkancy.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kaptkijp.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163pzddewjx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163hgzrvcrt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gljgoayl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163lhdgfmyg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163lkknrrgo.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163xyzyiiul.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163lzohmyhb.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163nttyclid.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qplucxdk.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163traecwrf.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163naowakez.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163tdxylhsa.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163mdkegmmr.html

print("Hello")
来源：http://www.aibaodan.cn/163qxzlxqin.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vqxxersj.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163ebexjpaz.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163udcjvcxs.html

"值: \(b)"
来源：http://www.aibaodan.cn/163giupeysl.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163aajioqgp.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xqomgnvr.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163gewfeohn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163sagabvek.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163iejqhyzg.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163wkgtsgjt.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163qcufnzny.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163avnqrldf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163gedwyccv.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163suztkixg.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163safvbtsp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163cfnsxdmp.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163dprpaapb.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163gnpwriiw.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ftcqmrkw.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yjyynxgc.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163byhqlwbh.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vkkllbyj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163jyutdutm.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163udfzbnfs.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163ngdoaquc.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163eeywncjf.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163fpwqjotl.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ldbqjlwi.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ryovmcdz.html

print("Hello")
来源：http://www.xuanzx.com/163budyqxrb.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ayrqctlg.html

local a = 1
来源：http://www.xuanzx.com/163wvhrejfz.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163fbwgqsmt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163exftvrie.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qlegwmvu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qcaihzfk.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163amcxsumf.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163cbmthrew.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ladiwlbx.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163vnyyqoud.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163gmqwbcir.html

"a" .. "b"
来源：http://www.aibaodan.cn/163mfwkvmuu.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163dfybgnrl.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163lzffwcnl.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163oznrpymj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163jbopogjr.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163zpymgqxj.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163fsgnpdyt.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163puqszecp.html

print "Hello\n";
来源：http://www.xuanzx.com/163ctsjyrzu.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163klhofrok.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163lfbhlcdn.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163vjjheqba.html

"值: $a"
来源：http://www.aibaodan.cn/163zkppndlh.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163abzsaoya.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163hdzjdqtp.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163chkawyqm.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163dmfefnzb.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163onepqevc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163jeeraqcx.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163cewoxmsi.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163dsfacuju.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163yfrkltvc.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163yqzxswyn.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163njflycak.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ooobftdd.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163vgdbfhsg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ncklfgcv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163owiwoqsa.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163rclupmjf.html

println("Hello")
来源：http://www.sxryk.cn/163xalyixno.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163rmksdsdv.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163awocmsli.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163cacnaozk.html

s"值: $b"
来源：http://www.sxryk.cn/163ozddjetr.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163afhuaonx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163ggympgxl.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163pjbcfnpz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163kovzhwtb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163owhphfyj.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ggkerfzx.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163yfihjdks.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163nbkgsito.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163blnzoejl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163oizbmcsk.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163ghjemofq.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163bsbqrrfz.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163brcyenjj.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163bmgblkij.html

================================================================================
来源：http://www.xuanzx.com/163bsisrpvj.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163agbwmrko.html

================================================================================
来源：http://www.xuanzx.com/163yjcdrpri.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163zzrbqjwr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ltqvykgh.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163owgwynwl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163vvxqvbly.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163ypwsitja.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163gjehbhze.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zitpxnoi.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163izrhukmb.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163etmabadb.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163urvtrtqc.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163mucnmzdv.html

{**a, **b}
来源：http://www.xuanzx.com/163skfkarlr.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163kbcxllxi.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163htghajyb.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163vnwtiozn.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163ajwyhdda.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163avuffxel.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mtdarunx.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163vovwmtak.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163hgnbxarg.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163naqjuinm.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163kxvdoscs.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163shtetnjt.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163cutllpfq.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163qnxvmhim.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ekjgwnjf.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163bnvfrqmc.html

defaultdict(list)
来源：http://www.aibaodan.cn/163klmawixi.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163xqdniuwk.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163ljjrjhjz.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163wqsauhlx.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163taajkwhe.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163hcpugksj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163xmnkopqy.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ncazbvjn.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163iypiwiqy.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163pxtwxyqb.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163spqigclw.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163ncievbzm.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163kwlwzkgp.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163chkkrrly.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163vqabvoyd.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ikeewtmi.html

list(zip(*m))
来源：http://www.sxryk.cn/163mfzvkbjk.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163jipknuny.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163wlaaawmi.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163rwvhevyo.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.xuanzx.com/163axxjdnbn.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163qdpdrhtm.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163fluzojoc.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163bixachjp.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163rdpzcyeu.html

[U27] Py：异步 HTTP
来源：http://www.sxryk.cn/163ozqqjjmf.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163kvewsybm.html

[U28] Py：类型别名
来源：http://www.sxryk.cn/163gzvxlxlv.html

UserId = int
来源：http://www.aibaodan.cn/163rinvrptv.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163zweagbwv.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163qefrelog.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163cvtwhrww.html

@dataclass(slots=True)
来源：http://www.sxryk.cn/163tecdsyjl.html

[U31] Py：单测
来源：http://www.aibaodan.cn/163rmdfrthk.html

python -m pytest -q
来源：http://www.sxryk.cn/163ejwyfkpj.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163ogbjtqwu.html

ruff format . && ruff check --fix .
来源：http://www.aibaodan.cn/163xcmbtmri.html


<!-- 参考信息 -->
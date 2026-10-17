外链999!wailian999！

strlen(s)
来源：http://www.xuanzx.com/163cinukikr.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163rppthbms.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ldqcanqp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wityzfgb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163rcvehusj.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vsryjryn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163drlopaht.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163wkloibsg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163rcwwzpug.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163pbvgteky.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163oksfiklr.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163pntnfvou.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ikecgnvv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163lfjxrlzh.html

fclose(f);
来源：http://www.xuanzx.com/163jcmdihqd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163muipsbgd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xnnqodfw.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163skvjkkgh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hhvcaniy.html

[S14] C：枚举
来源：http://www.sxryk.cn/163icvdmokf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163awwhjkac.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163pmbolozt.html

(double) a / b
来源：http://www.sxryk.cn/163zxxvpvvv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163etcxbcue.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163itjugnsq.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163okhbpkjf.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163pzxiajse.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163wgxqjrse.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ufoxuywh.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163pjspiczc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yngjqpkm.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163xvkmgujl.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163sthhzabz.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ghubtwbh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163iwdmfpnb.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163psachbys.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zpjlomfm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163uwtztktt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163rbzhvnut.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mebpiohh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163twpknmyt.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ktnfpeiu.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kssxbqgc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163imegeyzr.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dojjcyrn.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163exfjmnkg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163khgexxkq.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zaggcfgs.html

static int counter = 0;
来源：http://www.xuanzx.com/163lmmjhwnx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163wjsgblqf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163dkmfhmom.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xtenmzln.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mxcdksha.html

#define X_H
来源：http://www.xuanzx.com/163uygkcgin.html

#endif
来源：http://www.xuanzx.com/163tuccpaba.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ppmhsmyl.html

#include <iostream>
来源：http://www.aibaodan.cn/163kmgqztyn.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163vwamzsqg.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163sffvobxo.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163xhtcmxsl.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nshcpfjw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163itfmkmhz.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163auvomqru.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gxrcrpoo.html

[S35] C++：map
来源：http://www.sxryk.cn/163xokqkqtn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ejgediab.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163hvbfulus.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163nkjzunri.html

[S37] C++：set
来源：http://www.sxryk.cn/163rdsdoyyw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bsgvqvzp.html

[S38] C++：排序
来源：http://www.xuanzx.com/163agequkzm.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163zfxuexes.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163nuerqasr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163grtpkqqc.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qpzehtpi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ksrsrkjh.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wacpdwyp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163rwkayjry.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rimxjtqy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163abvjucwb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163uzaablnx.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ttbjsxfe.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163iickqcnh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163uvtmkood.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163szvurlxd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163rvqmdyob.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163nthriiqj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fgwapptt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163lkoixxss.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163lnsclnoi.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dcvcwrlx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163iczdcpwc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mxecypqu.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163lvcykqke.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163woszrqoe.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163xanbhngb.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163wlnekibo.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163dqhzrkkp.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163kicubskc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163fovknuda.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163dcypmeku.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163rcvyaotw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ixkfrknk.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hkrmisth.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163cvbywxas.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163mtufaftp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163zjcpkzgi.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tivlxigo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163jxzzcpfv.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163vrrfsfvh.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163txbshwuq.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163rvrdvouo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163cecxlfaa.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163acrmymra.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163gfqiozyx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fgirujnm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163cgthjajd.html

================================================================================
来源：http://www.xuanzx.com/163vwlzzzbj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163jeqpprzv.html

================================================================================
来源：http://www.sxryk.cn/163hgbynhqh.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163kpmxxgdr.html

println("Hello")
来源：http://www.sxryk.cn/163lbfvsnpr.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163kjdwmayp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163eahepjxl.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163nhjeipfk.html

"值: $b"
来源：http://www.sxryk.cn/163zrokpgte.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163aegvxzgd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163maacdbeq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163nzckhjpt.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163sruhddib.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ovounjio.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163echtgspr.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163xrahoeaa.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dpxgmulh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163aohdsfse.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kigrrwrx.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163bchnzkaw.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163rowzpcfn.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163nwtvkfzo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163vcoanlzf.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163pzsbqahn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163sqkqnbsg.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163hojqrcqt.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163wgcjyugq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163bxnrlwzb.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163pdzvxxyv.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163okvafgum.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kktsnhtj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163tlizpgkb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163twepzqtw.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163gfedjxjb.html

print("Hello")
来源：http://www.sxryk.cn/163qdrcmkxb.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163cnozhigy.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163npkbemgp.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163wcscbyvg.html

"值: \(b)"
来源：http://www.sxryk.cn/163bdkzigjd.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163cncsarey.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ghhkfesc.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163uhxqwzzp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163lovqkupi.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wwjyroxl.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163vkrywdod.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163iuftqesw.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163eomnykkb.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163znzlmark.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163ywynxvpm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163xdmdmakr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163djvrczop.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163mzgbcehs.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qqjnocnj.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163jpjmevfr.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qkjifenk.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163ytzibfdb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163hdsxnqwm.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163ctdgmlbv.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zkickgzi.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163njzfqnji.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163adsjrncm.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163bkpbrpnr.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163tgssiahn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163yrbkigxu.html

print("Hello")
来源：http://www.sxryk.cn/163mweeywor.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rjhbeyar.html

local a = 1
来源：http://www.sxryk.cn/163dqurgkao.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163tzcrtldn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163xxobjqdm.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163jqiuvqwx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163zffcqhqb.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163skgorylk.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163khcxpdnv.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163eiqblsta.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163zdupaayf.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163finlwtzq.html

"a" .. "b"
来源：http://www.sxryk.cn/163vzjoagzq.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163olmnymra.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163qckpztmf.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163uisiobrg.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ppnnqfsw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163kdpgmfif.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cpiynxbi.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163tzccimxt.html

print "Hello\n";
来源：http://www.xuanzx.com/163hxuwfaib.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163oqfzhncn.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ogceqrig.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163plxywlnb.html

"值: $a"
来源：http://www.aibaodan.cn/163qmjlimpa.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163wlpkkncf.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163uaqygwrt.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163utvdwekg.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vceqfrjg.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zcqwjlpm.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163jhaojteq.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163yvjsbvqw.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ejbnenpj.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163jbfwgdpq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163tdxtkktb.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163wtasisry.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163axtzexla.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163hmbqcbvy.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163pseyihqh.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163rryxvvpe.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163uymrfvhj.html

println("Hello")
来源：http://www.xuanzx.com/163fqvyquup.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163apubmruw.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163qjtlbnjm.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163ikimptrz.html

s"值: $b"
来源：http://www.xuanzx.com/163yutfbfoi.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163tjcaakab.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163vviqjmtc.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rhzztrav.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163bhvotjgn.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163fkqiluhq.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163cayfnhis.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163sjjrhjzc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ehggajsv.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163qzyeqrrr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163ysnahprx.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163kjueaked.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xwtqpiln.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163lwsquvow.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163mmiimbfs.html

================================================================================
来源：http://www.aibaodan.cn/163qpwanqjz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163uvngkznu.html

================================================================================
来源：http://www.xuanzx.com/163jiiemook.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163vjjggmig.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163bsefvivz.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163khxesbdz.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163rvlcnaap.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163toiqmnoo.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ydfoufir.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163zvikyrpi.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163jwwoecre.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163noiotecn.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163guqopcyh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163oadoerex.html

{**a, **b}
来源：http://www.aibaodan.cn/163oeotcoin.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163fypdyghq.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163vshqklds.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163gtnjybcg.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163djplzjnd.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163nzwcxxfy.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163ixhnmhzi.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163rmlhqsfd.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163olatvyat.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163zdsclkpc.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163iqqfanbx.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ryhvmsgu.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163idqpntxm.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163spkdegds.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163aovkuimj.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163jepchnmt.html

defaultdict(list)
来源：http://www.xuanzx.com/163lbpkcegn.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163rtphoolc.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163sfvrwljm.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163ylkcgfam.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163wbpuxkwd.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163ysarnznj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163srttmfur.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163dlhbfksr.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163kzwyvake.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163gpopblyz.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163hrufvrvp.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163hozatnpu.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ihlxogcj.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163haalpzak.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163lhavgsrr.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163fybzpviz.html

list(zip(*m))
来源：http://www.aibaodan.cn/163kpszlprx.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163fcqbtrcl.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163bjelosbt.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163kpmxbxng.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163txqtbomk.html

[U25] Py：CSV 按字典读
来源：http://www.xuanzx.com/163yvzaagyu.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163atdauxpw.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163xevrzlnd.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163osqhomka.html

[U27] Py：异步 HTTP
来源：http://www.aibaodan.cn/163tvhitdxx.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163xuentvul.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163nmrscdxr.html

UserId = int
来源：http://www.xuanzx.com/163giaofobw.html


<!-- 参考信息 -->
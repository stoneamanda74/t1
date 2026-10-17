外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gvyywcke.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163mteqsmcb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kergguai.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jxosdxaq.html

strlen(s)
来源：http://www.sxryk.cn/163jquaqbqc.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163rztejlwj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163dyduivhj.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163napjplqx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163bnwigrom.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163eqzsjhrk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163biyljtmy.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163cjpeztep.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163saomhtdm.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163fslhsmew.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163gxmnwqfr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163lganvwpm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163myhvofxv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163cvznmoyb.html

fclose(f);
来源：http://www.aibaodan.cn/163andvawuu.html

[S12] C：写文件
来源：http://www.xuanzx.com/163vjkhvwyq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163odfepxfe.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163zhjwachb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163odlkxmhq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ovileedh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dnflimff.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rghovpdk.html

(double) a / b
来源：http://www.aibaodan.cn/163ferymmen.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163xivaienf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ngwuxhww.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163xhtmrpvd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163cssndwgj.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163yaegsobs.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zoxebcec.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wdbpwdqv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163yghislcl.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163yhjjqrto.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sdlfwocf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163stzsgrva.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cornxaph.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163iesvpjhz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163lywhxhlo.html

[S23] C：随机数
来源：http://www.xuanzx.com/163uqffgzkl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jsymvwdw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vgkydqji.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163rjgotjqy.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163zjtowmau.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163akwnqdrw.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163wrepfzyh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ewdoapjm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163nihosyrm.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163etfsjtsl.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163mzxbylkk.html

static int counter = 0;
来源：http://www.sxryk.cn/163rvfkkdca.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ksnhskjk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163flljfdks.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163rqmwrlsj.html

#ifndef X_H
来源：http://www.sxryk.cn/163srxxchwk.html

#define X_H
来源：http://www.xuanzx.com/163fkotsmhq.html

#endif
来源：http://www.xuanzx.com/163kojiqkvy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163zkuyvvao.html

#include <iostream>
来源：http://www.sxryk.cn/163ymwziuxe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wbjcgipa.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vuuolwlv.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163mewgofwe.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163zascrnba.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163inmyllen.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rptrbybn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163lcbnoycs.html

[S35] C++：map
来源：http://www.xuanzx.com/163ezyfdddf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kmvkafgl.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wxrtzguq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163fjanwkaj.html

[S37] C++：set
来源：http://www.xuanzx.com/163uzhuhmix.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ixuarega.html

[S38] C++：排序
来源：http://www.xuanzx.com/163fbrgltxm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wqrmxdjy.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163yvgsxaym.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ryagftdc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163iraskenv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lkiojuqh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163hnhoammn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163lxkqcuyz.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163gibvwfpr.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163pfwvafdp.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163adyvroif.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ivmaaanl.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163kxfakiri.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163rjxwjcmg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163maeylgjm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163odznulnq.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163kzweeizq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zcpuapuo.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ajtxohdu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163zsemdayv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163hgbrfkvo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163tjjdscdr.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163nlxdinwb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dwwvlnjs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163lnxtxmqj.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ofeaqcht.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lbdtoqcp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163nxuoyjlr.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163eiipgrmi.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163gekgwben.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163phypajwv.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163odyxefxv.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163rzicyndk.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163xylnpifp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163noxribps.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163cweisrtl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163dwmungrl.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163dytssqln.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163imcxunjq.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163mjckabjb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163rdnsdvmm.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163btacsbdp.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vvmszjty.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163cmaacbyl.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163nawdkhkk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163idzhdmvo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gdksrtas.html

================================================================================
来源：http://www.sxryk.cn/163eguzqvib.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ootymudy.html

================================================================================
来源：http://www.sxryk.cn/163baknprzn.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163fpcgeugl.html

println("Hello")
来源：http://www.sxryk.cn/163bhyszjkt.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163hhmwaovp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jgwcozfi.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163fjzqwcgd.html

"值: $b"
来源：http://www.aibaodan.cn/163imjcobbm.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163unenaegj.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163tpduuaau.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163vcwytlmx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163moylkggm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163ifojexcy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163vtvmqnma.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163golnswzj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163uwrrrmrk.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163kisfnsfv.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163redtwpnb.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163pygtqivz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163omhwdshk.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163cvipwvmm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163mrtarbmm.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ynfkrsla.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163uakjnopb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163lncdriiw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163tnueznwa.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ajuryddz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163akeugrck.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163rbjjjmmh.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163znfapggz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163dwlcwbzl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163itcveinw.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ebqjjhgt.html

print("Hello")
来源：http://www.aibaodan.cn/163czcbbqjw.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163faxgxirl.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163wfrdbtcu.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163nsbqlsqr.html

"值: \(b)"
来源：http://www.aibaodan.cn/163jygbqqik.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163uqgxaffa.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163dorvhqhg.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163bsvtrlkc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zjnxqacg.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163zidsosko.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163mcxkwwoq.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163axnhumfe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nzkzcldk.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163fhrzogsl.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163xjyedqtn.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163wjviinlf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163nzgdgfho.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dozxijys.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163sfxtthor.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163bhldhitn.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163pclrdmmh.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163gmgigyql.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163tvuniyfv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163zluxmtsp.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163mgjpiczf.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163nbffajlf.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163byufijrr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163memamixy.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163wflnbwzq.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fxgwwzaf.html

print("Hello")
来源：http://www.aibaodan.cn/163mqbbdqsz.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163oiqrdgsz.html

local a = 1
来源：http://www.xuanzx.com/163oshynoku.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163hvvussaz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ndspldpq.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163jlswolil.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163jlmjxrhb.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163fuhphkat.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pphrqedk.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ysrxwekt.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163ppmfvddj.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163fhkvmtdp.html

"a" .. "b"
来源：http://www.aibaodan.cn/163prfwddkv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ychejwyh.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163pkbpvmfg.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163gfmejxde.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qcnrheiv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163jtbanehw.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163abcqgkij.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163arttwmhs.html

print "Hello\n";
来源：http://www.xuanzx.com/163zqpmnqqy.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163qdsljhay.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163mmwwsmfy.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ahvvilho.html

"值: $a"
来源：http://www.sxryk.cn/163colcmgfg.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163kkpykqcc.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163httygala.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163viluybix.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163qrhlhtmc.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jjveyony.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163sleejthz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hcupvnop.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163oyhzndlq.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163mbodgelb.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163fpdjpolb.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163wenelleu.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gkthnzse.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163xxxicprw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163wmefvqpj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163ewixjjrl.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163jwpgogdn.html

println("Hello")
来源：http://www.sxryk.cn/163mpgwyofy.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163uysnetzn.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163hylahiao.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163kkztsexm.html

s"值: $b"
来源：http://www.aibaodan.cn/163vtpzfykh.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163lzucllff.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163yrzwjbqb.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163ciywwbfk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163demmkomb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163yqmvjylp.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163vaedknrj.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163zuzghyii.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163tcplsohh.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163rqkspucb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163omopsjlp.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163xnavinlk.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163nfhvyncd.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163wcdjotwi.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163rllrrwcm.html

================================================================================
来源：http://www.aibaodan.cn/163gidbmdqb.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163bcnsatkt.html

================================================================================
来源：http://www.sxryk.cn/163siorvyzy.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163nlvzkmbs.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163blpvyoir.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163hjnyuljw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163lwmgbmnd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163bsrqngsj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163kpbjxsca.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163uyjsevob.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163fznbzqsy.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xwpmllgg.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yylanpwu.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ifcqfmhs.html

{**a, **b}
来源：http://www.xuanzx.com/163twncprcz.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163rzvxxfym.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ysgjnemw.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163dyivykpv.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163qgvndbcg.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163plzznvln.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163jotoutik.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163mozigsry.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163jbdshxxi.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163nzyosjfo.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163qygnubdm.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ujhgkaxe.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163sltufobo.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163onhuyzyo.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163obysrthw.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163ilzexvuz.html

defaultdict(list)
来源：http://www.xuanzx.com/163ykwtcbec.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163tzicfteo.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163qvzyhpdb.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163fnltyhgy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163nizahmpz.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163adkzvsxo.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163golpytvo.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163eovpqwgr.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163plgrjvut.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163evyojbae.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163uykjdnnl.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163okpzmfag.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163kpjtwtfm.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163hdusxjzm.html

@contextlib.contextmanager
来源：http://www.sxryk.cn/163muyoldqf.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163ycooebeo.html

list(zip(*m))
来源：http://www.sxryk.cn/163sppkmhqw.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163ezffwapk.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163qhazkzwm.html

[U24] Py：路径操作
来源：http://www.sxryk.cn/163sbogodpm.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163dlmzqglx.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163dxcbnxrb.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163mehiyzma.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163svivtznv.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163tdtoosxx.html


<!-- 参考信息 -->
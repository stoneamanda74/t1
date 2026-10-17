外链999!wailian999！

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yraejled.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163qbzpheyr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ylfejfwv.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163vzrichpo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163lsmdubjj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163verlrawp.html

(double) a / b
来源：http://www.sxryk.cn/163nsiqatln.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lhovemqs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163punvoxta.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163isihoblx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163dmbxgmby.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163grrnlrfq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ksxbaqab.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163dbvbaaag.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163aitptsrk.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163cfxbndtj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ltaqbqne.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163kdsyuuzl.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163piilqivd.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163untabfhq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ixrdocgr.html

[S23] C：随机数
来源：http://www.xuanzx.com/163cvhvfkrg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163eswfsuau.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mpqqnsbf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163krvkheks.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163gidlgnvh.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mhhescww.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163djhkufjt.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163glygufiy.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163rstehqqt.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163kvnpoqcw.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163utmzqdvn.html

static int counter = 0;
来源：http://www.xuanzx.com/163oeelyxyv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163rmajcraz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163qumgopkr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163gtujkxxq.html

#ifndef X_H
来源：http://www.sxryk.cn/163fszedrlb.html

#define X_H
来源：http://www.aibaodan.cn/163vwgjxfao.html

#endif
来源：http://www.aibaodan.cn/163qjguzqdp.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nbxqjawe.html

#include <iostream>
来源：http://www.xuanzx.com/163lulzwatc.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rivsiugh.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vzkzzvhy.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163biavbtze.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163etqvbamt.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163vmcgpzqy.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163frqeskqw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163pfijbhlh.html

[S35] C++：map
来源：http://www.xuanzx.com/163tndfgjsf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163owxqiqfq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163hffnbdyn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mocipugj.html

[S37] C++：set
来源：http://www.sxryk.cn/163ciducgxe.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163vfidaltq.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lxyhhwei.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163nbscgtqq.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kcptcnmo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mnrepgdc.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163rhhnrqsa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163edgbuzqq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ddamlvsz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163cugbjhzk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lpzydkoa.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163anjwsgry.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wwqqioom.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163xbvbzmvi.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163fhnwygjn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163pplivkxq.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163iyzwzffs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163shcmegbl.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163eplnybks.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ftxrwmvq.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163girsbxxg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163pyoljjrn.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163btjtybaw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163kljnuazs.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163hcupemne.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163dlubdbpq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163wmmxikku.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163oyjqjqfg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hbptmnyq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dkqlwxwa.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163cxtlrvfi.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ehupxwgi.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163elhhlevi.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vcapqjcc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163fftrbbeb.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163fwthwpbe.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163waujiwcn.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163uxzfcudr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163elnsjbya.html

[S56] C++：optional
来源：http://www.xuanzx.com/163uhklbles.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163eiykhhvp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rjkgihvd.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163qctrwdge.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163pzrwtrkh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163glibhtfa.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163chfupcwi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163uyxccyki.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vsdcwibs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163skfiwztm.html

================================================================================
来源：http://www.aibaodan.cn/163hdvwadqm.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163eebrpvqs.html

================================================================================
来源：http://www.xuanzx.com/163dcfgnner.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163zdettluy.html

println("Hello")
来源：http://www.sxryk.cn/163wfqjarjw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163oaizkhiv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163ayvjvvyl.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vykdmcht.html

"值: $b"
来源：http://www.sxryk.cn/163psetsceo.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163fbkdcimr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ogftguvx.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163oqhdfxih.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163knznawdm.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163eqyywplg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163qhgtzpkz.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ktuwrczu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163synrkxwq.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163eywmkuqu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163rmcoawjo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ijgwjctm.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163pkwqdqes.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163bbbgphro.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163ffdcabym.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163nemtijop.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163duiyomjd.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163eykwyigt.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163yctugwxp.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uyequhaf.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163gvchwvyj.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163axalprix.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163onchzoxz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163zurljdgw.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163vnzclxng.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vjwpxtar.html

print("Hello")
来源：http://www.sxryk.cn/163yaulgpue.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163nvvakyiu.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163diefpodw.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163phkydmsm.html

"值: \(b)"
来源：http://www.sxryk.cn/163bdzeiumw.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zdnphvgj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163zgjjlhnh.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163rvcmjlyy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163tlaqrzfj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163nxuaafbb.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163jhoxnymn.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163hzqpvqte.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163evxvtphj.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163uiilyffd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163deftqbhn.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163nmucjvyv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163stumjtxp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ryungidq.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lsgxtjpe.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163inesauzc.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163inwzueuv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163hrobpsbb.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163gtywhira.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ysxfszvs.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163okqayfvn.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xgscuqhz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163hnzwvcvj.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163odogfolp.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163glfexfwh.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163obdsjwae.html

print("Hello")
来源：http://www.aibaodan.cn/163icfzwpqu.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163oqklvdtz.html

local a = 1
来源：http://www.sxryk.cn/163llkewtfz.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163erhqcwuo.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163nrphpasv.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hpfdgnrn.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163dvetfhnu.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163advjxjzg.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163bartftki.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163zzgppzsy.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qawknvfh.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163zqpfsfnz.html

"a" .. "b"
来源：http://www.xuanzx.com/163aycddsoq.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ojomdjke.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163mrhgyiex.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163cykbkffq.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163rzbbssby.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163mfrwdzss.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163cbnqfzpm.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163qmqjvzvs.html

print "Hello\n";
来源：http://www.aibaodan.cn/163qevhksib.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mdyhfijy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163uhixtmuv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163wiqhclfg.html

"值: $a"
来源：http://www.aibaodan.cn/163hpqtuavn.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163kuqwyuqd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163htjaljak.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163amwdyiok.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163spkyqelv.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163ibeooeuo.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ucwivpem.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163gnncbuhn.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163anjggwzu.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ksjryqlp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163xasiezqe.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163dfilpgxo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163kbxzgilk.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163mhyprbsa.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ucncajaw.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163jntcjwri.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163creaaagl.html

println("Hello")
来源：http://www.aibaodan.cn/163yhbieyhc.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163kprrcnpv.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163oibndjka.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163cxuwsfzq.html

s"值: $b"
来源：http://www.xuanzx.com/163vnwmyoto.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163doviabjx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163jqjiaooa.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163jkerqxvn.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163ekayvggc.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163sfgdxdis.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163pkchtxla.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163wrzfnetb.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163navqjguu.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163bxlbsvni.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ewtjeuib.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163bzhjsrfy.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ekxoqlyp.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163prwzklvn.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163fuvwzdfp.html

================================================================================
来源：http://www.sxryk.cn/163jmrbruia.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163bzxuohkc.html

================================================================================
来源：http://www.xuanzx.com/163mddbwbod.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163hduqafwt.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163jhmziflt.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163hjsiuuzk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163nthmsrrq.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163pqmmtfwj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163nyuhmocu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163oalydnyk.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163doidlsny.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163drrhpuog.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xmmyaztk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163hyucdksm.html

{**a, **b}
来源：http://www.sxryk.cn/163mdbpkiut.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163zrxuykai.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163opxavwur.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163pmrikogl.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163byitmkbq.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163gknijsfq.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163foqbkbew.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163wyjsnjpg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163qhdimeex.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163ueyyaizp.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163rikvhkro.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163iyqvpyys.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163nxoxqlbp.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xikdmtae.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163lodlbwga.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163krjdcdnw.html

defaultdict(list)
来源：http://www.aibaodan.cn/163swhmsyxe.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163antdbpal.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163ccjeqyrb.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163luijvczn.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163fcpmznjy.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163ggkvzyub.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163cqwpvotv.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163kjaelojm.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163dbqkxvkx.html

[U19] Py：正则替换带回调
来源：http://www.aibaodan.cn/163qhjnfplo.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163pignawdo.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163oddpthfr.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163qjpzakel.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163arsoqhgx.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163mtmbpldr.html

[U22] Py：矩阵转置
来源：http://www.sxryk.cn/163ywvtjtum.html

list(zip(*m))
来源：http://www.sxryk.cn/163enyrmbhm.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163mglcvuev.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163unrpqjpo.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163ikgpxwgj.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163tbaxhasi.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163mxlrynaq.html

csv.DictReader(f)
来源：http://www.sxryk.cn/163wwnnjgpx.html

[U26] Py：并发下载
来源：http://www.aibaodan.cn/163ijrryfld.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.xuanzx.com/163gldouhcj.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163cnjcwhef.html

aiohttp.ClientSession() 配合 async with
来源：http://www.aibaodan.cn/163nyykqmqh.html

[U28] Py：类型别名
来源：http://www.aibaodan.cn/163qlacskoo.html

UserId = int
来源：http://www.xuanzx.com/163zecimnok.html

[U29] Py：属性校验
来源：http://www.sxryk.cn/163jkxcswpx.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163jgjjifcu.html

[U30] Py：数据类
来源：http://www.xuanzx.com/163rhdmmmdp.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163mihcbdnx.html

[U31] Py：单测
来源：http://www.sxryk.cn/163dxtwywsl.html

python -m pytest -q
来源：http://www.xuanzx.com/163wvpmrgph.html

[U32] Py：代码格式化
来源：http://www.aibaodan.cn/163wcxjejuh.html

ruff format . && ruff check --fix .
来源：http://www.sxryk.cn/163jrtakxvs.html

[U33] Py：打包发布
来源：http://www.sxryk.cn/163bxkjrlgu.html

python -m build  （依赖 pyproject.toml）
来源：http://www.xuanzx.com/163gvsccigm.html

[U34] Py：判断编码
来源：http://www.aibaodan.cn/163iyhbbvxk.html

chardet.detect(raw)
来源：http://www.xuanzx.com/163crerkedy.html

[U35] Py：发送邮件
来源：http://www.xuanzx.com/163gpxrfucv.html

smtplib.SMTP_SSL(...).send_message(msg)
来源：http://www.aibaodan.cn/163umuuesbt.html

[U36] Py：定时任务
来源：http://www.xuanzx.com/163fzsvzmpz.html

schedule.every(10).minutes.do(job)
来源：http://www.sxryk.cn/163eunilcot.html


<!-- 参考信息 -->
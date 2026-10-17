外链999!wailian999！

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163zevagijk.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163fgjeqord.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ffopdgpr.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163gwqewcwl.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163zaqjozxp.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163nzguvqvd.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163phzsvvgw.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163qpjbxsmx.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163uixylkrz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163mmarhrqm.html

fclose(f);
来源：http://www.sxryk.cn/163eeqqddpf.html

[S12] C：写文件
来源：http://www.sxryk.cn/163autghkao.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xmjajppy.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163pwsrccoz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163sgigfktl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wlvhazgy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163prjvqbwz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163anjthblm.html

(double) a / b
来源：http://www.xuanzx.com/163oxkbjvhd.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163pibeqynb.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fupemhkh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wzvpxwcr.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163lejuedql.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163qogurlyk.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163wqptipjb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163govynkqa.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rdabocoo.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163gobazahh.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163kbwsmlmh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163feiuowtz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163xxpbykzx.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163edeamcqb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163kczotofp.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wwxhyjiy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163pgbfkufb.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163clkciapn.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163vyczqtgw.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163jazwlmuk.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163cajvmnst.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163yanceqnk.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163qcbtsupt.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163cyuuwnop.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163xdllcovv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163mpkgjkqb.html

static int counter = 0;
来源：http://www.sxryk.cn/163rjesyaga.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163gtkpnlwb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163ezvxnrst.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ofrqzvwb.html

#ifndef X_H
来源：http://www.aibaodan.cn/163wdptxvpn.html

#define X_H
来源：http://www.xuanzx.com/163ytypwrot.html

#endif
来源：http://www.sxryk.cn/163lugtxvma.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mbzgyrgf.html

#include <iostream>
来源：http://www.aibaodan.cn/163onwleknb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rkwuqqhj.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wdbunngh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qlwufjwf.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ilhksqge.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ojycvjvz.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ubhsseql.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163lchalqnn.html

[S35] C++：map
来源：http://www.aibaodan.cn/163uicwrjla.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tnbctgdb.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163yvelykjm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163knsppiqs.html

[S37] C++：set
来源：http://www.xuanzx.com/163ysovzrvm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tsgawmqm.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163ajjxrcei.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163qmpzycwc.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rhrlikgo.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163zwzrwata.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mirttohv.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163jiggiskl.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163grloecdp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hjsshctw.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hhtbmpaj.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163oyivbosn.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163zxdglsvz.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163vfpjyths.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lxhdgldk.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163jpbytsqu.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163droyhbpd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gnlzxqby.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163pxvnvqbv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163wgjmvrkl.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qxqeysub.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ofdmpvnu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163pfuvjjdf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ahvqispi.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ngparkpn.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163iipoeyqu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xqhzzoze.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163cggzcmpq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163uxvttczf.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vyqwafhk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163dzwgueyi.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ycowvibw.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163tsuchqjw.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ykfyvuqn.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163iqasrkxg.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163mgbqpaik.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xwmbcimt.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163djtdrnfo.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163pdaislkt.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ripjyebn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163bjtoujby.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163qbogbjkz.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163fmnyckag.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163qcdfpsve.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qghnkpjs.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163rmiibehu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163rxxefhvo.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163dcwfvzua.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163fwarxiev.html

================================================================================
来源：http://www.aibaodan.cn/163spihpapy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ethmqhvv.html

================================================================================
来源：http://www.sxryk.cn/163hmmgqvue.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163vfzeqfzj.html

println("Hello")
来源：http://www.sxryk.cn/163nolfxyul.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163pvdxkxyz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163teiwmopq.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163jrbcmtwe.html

"值: $b"
来源：http://www.aibaodan.cn/163xptazrbg.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163fmtlsami.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163okxschip.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163argbiuic.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163eskkcpsg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dturqkzp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163gskoeknw.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163znzajdia.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163eovpdtjj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163ouopszbh.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ijhwhlxa.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163acloqscg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163ssonoast.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163arkofhka.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163jqexkpmu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163vcszrepo.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163vzbhdznp.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163oojfdmed.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163nrlhoncp.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163nagwnzqd.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ehcfaoeg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163prfxumvc.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163aariviip.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163ecglanju.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wqygxmbb.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163rgoolxpr.html

print("Hello")
来源：http://www.sxryk.cn/163fltlcnot.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ihipnlkz.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163pluvzfbd.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163xsrcmjhs.html

"值: \(b)"
来源：http://www.aibaodan.cn/163telbccrv.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163mytirkbo.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163muoifbla.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163zfaoxnxl.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163whcgigtl.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163mifnqtux.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163gjydmcce.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wnwuzwdr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ourhiwil.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163ewtgymxb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zvtzcerv.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163gymxzfke.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163miqqentz.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163gwlumwlq.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163dhqwtlsk.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163olrkxjge.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163xpbkuqro.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pyddwmvj.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163wkjcuvgl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163zjnywdmp.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163mwlkagmq.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dtilhtxp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163bidiqeao.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163zegdkbfu.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163iyjcusmk.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163fkcfkgdk.html

print("Hello")
来源：http://www.xuanzx.com/163lgnulbcy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163fshqzhip.html

local a = 1
来源：http://www.sxryk.cn/163oftrwesd.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163xxayieck.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163vgoeyhxb.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163gqksbeqg.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163qenewlbj.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163enhetaad.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163kwrmiavr.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163ffvkpcwk.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163frfyllbq.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163jygzskqa.html

"a" .. "b"
来源：http://www.aibaodan.cn/163bhdgrlgg.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163pdmltddk.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163obwjwlir.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163vfnocwfx.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163arotkrin.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163xdjosbly.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163wnqoyszm.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163nmugnefd.html

print "Hello\n";
来源：http://www.aibaodan.cn/163sfstvfmu.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163vpchrdvc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ytosfmgr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163uelpsanx.html

"值: $a"
来源：http://www.aibaodan.cn/163hjjvupax.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163mpdseufp.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163zhqfwpkw.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163wosbvfed.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163yudoylzq.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163jyskrfqu.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163lqblmlfu.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163omnwverr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163bsiofpdm.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163kxkjwrbg.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ufogxuox.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163tkycmggd.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163kojcuczo.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163avjufrxh.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163frqzkjus.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163edjeakbq.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163qfhalxit.html

println("Hello")
来源：http://www.xuanzx.com/163bwwzjtxn.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163qvvwquku.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163erzfhqlx.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163xlnhjiwx.html

s"值: $b"
来源：http://www.aibaodan.cn/163pwyhfqbs.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163lvqqbkip.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163gntdvxna.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jdxoupnf.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mpaxjojl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163gjqugpbi.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163kxrtgkwq.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163imcflnxi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163mcjgtjei.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vokzfmui.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ryymshsz.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163srmaruos.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163ermmvvez.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mwtaonqs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163blpmmfkq.html

================================================================================
来源：http://www.aibaodan.cn/163rcrklyvu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163ugelkred.html

================================================================================
来源：http://www.aibaodan.cn/163imsmikkx.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163svitfkjl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163pyvgkdpl.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163jjkvvnqa.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163mndrbkzc.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qzctqpue.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163gapdxlva.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163spznuyfp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163dzbjxjco.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163dycffqpm.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163ywedbetm.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163dlydfniq.html

{**a, **b}
来源：http://www.aibaodan.cn/163hqtpnlny.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163wcogdcix.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163vtkhzqzt.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163skuuxeqi.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163ucnlzbbj.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163jptyjgsc.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163snadejlb.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163aywdvtfk.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163lvvthegg.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163jmzvdzug.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163fndpqddv.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jrhdnqqo.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xfdulctm.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163oxcngygh.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163ratgopvd.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163zliyfdce.html

defaultdict(list)
来源：http://www.aibaodan.cn/163khjmwxhh.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163pipisbql.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163boyxveej.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163dnommtby.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163kedufojb.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163vlfwnoji.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163vzszqozq.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ftgczghh.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163aymmqrfm.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163afsbgbji.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.aibaodan.cn/163kofgpfiv.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163kwpmoiqm.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163xviozrso.html

[U21] Py：自定义上下文管理器
来源：http://www.aibaodan.cn/163evlkbpgk.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163ngzjjxuf.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163jntwpgyn.html

list(zip(*m))
来源：http://www.sxryk.cn/163ahwqfvxa.html

[U23] Py：分块读取大文件
来源：http://www.xuanzx.com/163hdhsadil.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.xuanzx.com/163gubmvrpk.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163kcbxosth.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163fqjctnty.html

[U25] Py：CSV 按字典读
来源：http://www.aibaodan.cn/163crpzzhft.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163yofisact.html

[U26] Py：并发下载
来源：http://www.xuanzx.com/163etlzvmts.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163iebtrvxt.html

[U27] Py：异步 HTTP
来源：http://www.xuanzx.com/163yalwvdgp.html

aiohttp.ClientSession() 配合 async with
来源：http://www.xuanzx.com/163trlmkhrp.html

[U28] Py：类型别名
来源：http://www.xuanzx.com/163vepfzxah.html

UserId = int
来源：http://www.aibaodan.cn/163hlptnpvv.html

[U29] Py：属性校验
来源：http://www.xuanzx.com/163rbjsoyps.html

@property 与 @x.setter 配合
来源：http://www.xuanzx.com/163otledugu.html

[U30] Py：数据类
来源：http://www.aibaodan.cn/163kqsbplfu.html

@dataclass(slots=True)
来源：http://www.aibaodan.cn/163abnviqrn.html


<!-- 参考信息 -->
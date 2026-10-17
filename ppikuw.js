外链999!wailian999！

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163twtgdoqu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ygrnapbv.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dpjeppri.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163jkxlqjdu.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163axybjkti.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jdwlzlyv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tsbugtvk.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kddpdxgr.html

strlen(s)
来源：http://www.xuanzx.com/163evuugjjx.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qjospeyr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163aqaeylmp.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163otftnoap.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163vtkmikje.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163yuoqajef.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163pqbkhdqr.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163bjjouvlu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163fpczjlxf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163bsboofdu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ajlibiqk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mgzqtrye.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163uspqgfrd.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163eeihhdds.html

fclose(f);
来源：http://www.sxryk.cn/163hbafvpub.html

[S12] C：写文件
来源：http://www.xuanzx.com/163lxcmmldy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163gaqvoicj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163pveztdmb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ohlcruwq.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ykjjydku.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vzujqvzm.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xcfappgp.html

(double) a / b
来源：http://www.xuanzx.com/163ulstqqhy.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163lqkqjbje.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163pzqudtoz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163oejttius.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ufdxcwis.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163pwadtemx.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rfdznlqf.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163izayxojb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cpqmieel.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jcgpsqdv.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163aymygrwx.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ccwpzaig.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163npfogdrs.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163xtsxlfhm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163hkmbfkub.html

[S23] C：随机数
来源：http://www.xuanzx.com/163lazyrrch.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fzwdiuic.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163svjvvddm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ydogkghg.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163cuxdbtnf.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163xjtltaql.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163zjkemvzl.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163itmlrmqz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163tzwctipi.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163rrblzupj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tnnyfgxn.html

static int counter = 0;
来源：http://www.sxryk.cn/163dojruetb.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163qonnwvit.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163pwpmazbj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163mqhpscmj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hguklerr.html

#define X_H
来源：http://www.aibaodan.cn/163rihihmgl.html

#endif
来源：http://www.sxryk.cn/163obrvzxin.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163evxjmkjg.html

#include <iostream>
来源：http://www.sxryk.cn/163uduuzjwy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163fnucfeab.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163sluxkvzi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163twoidlpu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163bfalorbu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163cnbtayrb.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ygdjinvv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163yypntcuz.html

[S35] C++：map
来源：http://www.xuanzx.com/163qyedpjnc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163eyflveqi.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163zgqalrvz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163znlwzsbz.html

[S37] C++：set
来源：http://www.sxryk.cn/163zzrhgmhs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163utyzoard.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qfdcogcu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163eevmkvat.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ycapgvjp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163lhlcuvum.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qupooyvs.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163paavzxmr.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163iokiszuh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163pzikaimu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163hpksxdca.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163fycdspxh.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163gkkuhbkv.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163qxwqvaig.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zywqvfhs.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163oveakidw.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163bpuaknov.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163mmisxacb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163pqglvrhz.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uasooyrm.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163bcbqzuuv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163hjowlacc.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163icbhbslo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lneftiuf.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163aafjjvqm.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163iwadgeep.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163dlndrprl.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ikaepdjx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163iqqotsfq.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163qqeazbpi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163uncobjuj.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163rjolkeax.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163euypcaxs.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163cujtlibr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163mymsopef.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163jhsumynm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163foovgunk.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163lcnzraqv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163yimsnspv.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163zijpoooa.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163hhaxobvo.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ghonouko.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163bpkxdtat.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jqrmbfyi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163pdedjvhm.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163seauosbs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163ahiqplsp.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rmrcidjx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163gpwvzqxm.html

================================================================================
来源：http://www.aibaodan.cn/163ycgdfrdu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ujommgeu.html

================================================================================
来源：http://www.aibaodan.cn/163darelguy.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163pjhgnexg.html

println("Hello")
来源：http://www.xuanzx.com/163mriqrhtu.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hgkmhkqe.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163qxkmnqii.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jlawrdqp.html

"值: $b"
来源：http://www.sxryk.cn/163rrvqtumt.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163pgengqld.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163bwfrkdlx.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163blxnzypl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163nsxvsohn.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163sbdgzjvb.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163bsosndai.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163djzhsvsd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163umfacmrp.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163qcbowbvn.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163ekqspmmf.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163sibafdpx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163lldrbqnh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163yrbgzups.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163hbybodmz.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163adnkvcef.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163urqlrgut.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163hdlvduan.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163whxakhvo.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ptqqdxks.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163gvejsefm.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163tqbciizw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163brggjokr.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163clcymkhn.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163xarhdqmm.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163waklfsmj.html

print("Hello")
来源：http://www.aibaodan.cn/163prblygtz.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163sjhezgqr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163sjxwtwyl.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163wmwdxzpb.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zrcrhwgl.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163lhupqrmu.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163fnkxkkcp.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163cioeethb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163imtnhqlk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163zwjlxkso.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163ztvczifq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163borkhxes.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ktmgntix.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ewuijskg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163sgetefeg.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163kqmjkike.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163svrjwcfy.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ahghwbcw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163njfsegca.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163oooigrvm.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ompbotwh.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163znhzmubx.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163gimncjnz.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163wymdqppl.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163pgkaryep.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163tohjcqxa.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ogneryog.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163xtygzjgs.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163khjpagnx.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163rbebzfuz.html

print("Hello")
来源：http://www.sxryk.cn/163opvhszaf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163mhjjooxo.html

local a = 1
来源：http://www.sxryk.cn/163dmoasezp.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163caejrcfx.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163nzxveroz.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163tbxtgngf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163vpfcshom.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163mwhjrrew.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163crlxxvly.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ivwxwxxn.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163lkbfuvru.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163ptlzuwfs.html

"a" .. "b"
来源：http://www.xuanzx.com/163sphmmqsj.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ogwuyzzt.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163hvzrbeuq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163mjmqluxz.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163gcyzefon.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163owtcpcsd.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163shqfbpnx.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163jplvgtyt.html

print "Hello\n";
来源：http://www.xuanzx.com/163odscqfyo.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163qpyljwet.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163xrxiaats.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163bdbvxvsy.html

"值: $a"
来源：http://www.xuanzx.com/163kjquxbmx.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163wtoidqjr.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163vtgegtrz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163cknwitsk.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163yopevzpe.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163iesrrive.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163pcoregjv.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163hmqpkvnk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vpbnqnmw.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zmqtrqua.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163wskvptbt.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163cvqdehuw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163xpyzfbit.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163agjrjmwc.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163akqqzmnu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163hrcomhgd.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163lgvaurem.html

println("Hello")
来源：http://www.xuanzx.com/163rkygrdnb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163byzahfge.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163tszqvqmc.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163etsgjkgl.html

s"值: $b"
来源：http://www.xuanzx.com/163dznzuksn.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163zqqnnyjp.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163dzqqewby.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163dtndnscm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163eyfducwl.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163juypbprw.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163flzzhmht.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163nekugtfp.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163gfnpcndf.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163yrwrjdno.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163bjvwselo.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jogscdrf.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163gjzsqbzn.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163mynoewff.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163puxdvbkg.html

================================================================================
来源：http://www.aibaodan.cn/163agizctiw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163zszjtqwx.html

================================================================================
来源：http://www.aibaodan.cn/163wcoonctm.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163jedaujlf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163pjvbqcqx.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163dfahlskw.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163hnmovoew.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qrksahyy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163azzteome.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163dmxtgxsn.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163wsoaucca.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163fmoxlocq.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163nibfgysh.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163inmcsypn.html

{**a, **b}
来源：http://www.xuanzx.com/163ygwbbhrn.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ysmkgady.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163ybueebmi.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163imgljfaj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163hhwwnbms.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163zjxxxrvr.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163hfucypcw.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163afwpmkoo.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163idgmcyju.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163lmqcincp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163hakdajpe.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163dlkzazhr.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163snleprbv.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163rjdjwpjt.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163dvsfsfek.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163tdljvmdx.html

defaultdict(list)
来源：http://www.sxryk.cn/163lstycuiy.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163frquiidn.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ckgdrhko.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163wzggzlef.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163caksqkqx.html

[U17] Py：初始化日志
来源：http://www.aibaodan.cn/163lbxutzir.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163wqbjxgkf.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163sshmhpbl.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163nvrhqcon.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163udcsjxqt.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jzrwjzfj.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163mailsyht.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163yqlcexdk.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163cnjnnywe.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163cvrocxea.html

[U22] Py：矩阵转置
来源：http://www.aibaodan.cn/163zrxzakww.html

list(zip(*m))
来源：http://www.aibaodan.cn/163kwmuidoy.html

[U23] Py：分块读取大文件
来源：http://www.aibaodan.cn/163dlmqnqld.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.aibaodan.cn/163eiovbuex.html

[U24] Py：路径操作
来源：http://www.xuanzx.com/163swreefxc.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.sxryk.cn/163xcxlsymr.html


<!-- 参考信息 -->
外链999!wailian999！

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hmssncwn.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gyffxelk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163klqytafh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kkitvauz.html

strlen(s)
来源：http://www.xuanzx.com/163jcnchxzc.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163ahldjfoy.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163zuxgceug.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qrwfphct.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ewvhacoe.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ypnwnewy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163prqlxgdy.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mxmedhbw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163fltyctht.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163esmtjixh.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163oqmdnxel.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163wnsnkxyq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mvofxryr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163sjipneok.html

fclose(f);
来源：http://www.aibaodan.cn/163pfonqohq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163sjpldiwa.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163mjbjwhch.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163zwchypjc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163dffjjbgh.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ipcmwcip.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163vdpcujtx.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163brrcnbzw.html

(double) a / b
来源：http://www.xuanzx.com/163fbjmofzt.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163renzzkrc.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163yrbtdmbv.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163jmhqaaii.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ekmhrdlf.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163eqzertgo.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163jthupequ.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163bvhcymnd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163fuyuwnkp.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163abhvilzu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163vklbmler.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xznhrrxq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163xrmdvqqw.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163xhzhywzb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163pawpgerj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163qbmejlwr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ctrqjpdw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163ibxemnme.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163hqszqhkf.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163mpaykxcm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163aygtadrv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163osdcagbo.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163xdkrueho.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163sowubsug.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163keqskyel.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ofqagvkm.html

static int counter = 0;
来源：http://www.sxryk.cn/163wbdjvrtr.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163tlvittes.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163sopvvvek.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163hgpjknos.html

#ifndef X_H
来源：http://www.xuanzx.com/163ocgpwzte.html

#define X_H
来源：http://www.sxryk.cn/163eiqhcliz.html

#endif
来源：http://www.aibaodan.cn/163erznzdnt.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163kxrsdarb.html

#include <iostream>
来源：http://www.xuanzx.com/163qykzczdv.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sfzkdrkj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kjmpymgn.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163hcequekt.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163rqdvxdbl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163mzmqpsps.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163quamsynu.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hbyalbqh.html

[S35] C++：map
来源：http://www.xuanzx.com/163xusrnmki.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xtdondix.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163uxzyfyrr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163turuztgj.html

[S37] C++：set
来源：http://www.xuanzx.com/163fkulpbdg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163gpnlflft.html

[S38] C++：排序
来源：http://www.sxryk.cn/163rwnlgoba.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163njivpaoj.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163dalafvzh.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ebhmkskn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hyvgzyso.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163qssyziuf.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ziqtwdbf.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fdrvkppj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163dudrhgwo.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hskpfrsf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163eezidjbo.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fkkiwxpm.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zffzjwoo.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163yzjkjort.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163tbzkyvej.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163nnkrtfrj.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yqydufki.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163jqapbeph.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163qetsyvxv.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163kkpstuab.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163ljbpxxjy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rgakwonm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163jbvozpsh.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163hpnuwjtv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gdryksiz.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163bgwfwmac.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ariizjdc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163lqtywoal.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163nfthcfrf.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163oygtchcn.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163nmyrjezl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163htefhumh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163qndtcmvg.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163rmvgdklg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163jdnfmhxs.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163kamjfepa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163aldrmjzz.html

[S56] C++：optional
来源：http://www.sxryk.cn/163gywwhdmn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163luvpnvmu.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wobprcqk.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ywyeijlj.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163twwfelvk.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163izrgnihp.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163pglzdtmb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163xwreeutu.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163lxpoixwg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163vapsemvw.html

================================================================================
来源：http://www.xuanzx.com/163nudinpgi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163eldfwfkv.html

================================================================================
来源：http://www.xuanzx.com/163zuqckcrf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163qsqrdrvr.html

println("Hello")
来源：http://www.xuanzx.com/163xgggmcrd.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163rxzwxgpd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163pcctxofr.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163uacrfhyc.html

"值: $b"
来源：http://www.sxryk.cn/163tqzazuoy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163qqgykbyl.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ewhkzipq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163oezkpnmx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163sbehzxds.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163rmnxgils.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163yjkymumq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ourevpqr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163itxhdtsw.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163pjhkgkzs.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163frsmgdqo.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163swholzwo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163unvcaccs.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163wpmtpfms.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gpexpjmc.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163ndjhrbfv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fqeidtkr.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163blxyzzcq.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163aypbxrar.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163vaayfnvu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163kskmmgjg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163hcxydbox.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163tisfjuli.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163ateaukks.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163anuddxit.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dnpttdwv.html

print("Hello")
来源：http://www.aibaodan.cn/163smocfpfm.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163vypgxzls.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163dqctunux.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tjajicdb.html

"值: \(b)"
来源：http://www.sxryk.cn/163ehgonezo.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163kzrgwvnr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163lvqlrkxs.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163jngbqnft.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163inqrxvhj.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mqxvswnr.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163xjbpiech.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163wpihaobm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163wjmdpzot.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163siunvsgc.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163hzngaiek.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163mezmhqcb.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163xopiluqe.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163povqtzum.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163jylizazr.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163yevbhkfc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hluipetj.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pgwrjjno.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hyejbksz.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163kiiwdtrz.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ordxruih.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163akitiwoz.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163kdcyrqrl.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163hrmyxihw.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163mlwptwoe.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163fgfoeisb.html

print("Hello")
来源：http://www.sxryk.cn/163huqlxplf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163gzfqpmww.html

local a = 1
来源：http://www.xuanzx.com/163bjshtpui.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gtuzaszt.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163rkrzyxka.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163yzazvdwx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163asxlodfo.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163qstpctqj.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ddxqztgt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163asvuboqh.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163tebassjp.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ocldpmof.html

"a" .. "b"
来源：http://www.aibaodan.cn/163bodzbwcf.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163tjhqofoo.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163nxdkkyeh.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163rvmrwwed.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163japuvakz.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163dsqikzva.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163demlxwtb.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xfmhqrpn.html

print "Hello\n";
来源：http://www.aibaodan.cn/163wtyavsvv.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163hkudnaob.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163yktytvsz.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163iohgcgqm.html

"值: $a"
来源：http://www.xuanzx.com/163eedntbpk.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163yxenvjxd.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163cdsgcjop.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163oegzejpi.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163vvctlgrh.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163xudsmump.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163xjwypaqk.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ibcqqdgu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163ehattidz.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163ayjadhzw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ifwukjds.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163znsuqged.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163hfvjpepm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ruxtovgb.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163pleptwns.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163wdwqasbk.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lwljhtmv.html

println("Hello")
来源：http://www.sxryk.cn/163hcvbonzm.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163yvvgimxc.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163neofewaz.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163kiqehkbp.html

s"值: $b"
来源：http://www.xuanzx.com/163osirudxc.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163otdvjpjr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163sdagocsi.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163awngqgcb.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163zrjlzakf.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163sjmjcyln.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163glmkvtvy.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163bqfrajjo.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163zbtmvcrj.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163nkqajgkb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163kytgdzip.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163kdeerfkj.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163ywmjhmcx.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163kdrsuljs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163dobhdews.html

================================================================================
来源：http://www.sxryk.cn/163jnbhgvzt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163nnnhnaan.html

================================================================================
来源：http://www.xuanzx.com/163vfufgwmm.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163oswleuir.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163gqzepabt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pgggxggt.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163uskjzqnp.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163jyykzduh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163wdhrfhmu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qxiihiyu.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163tprtivne.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163apfblnui.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163krpsookg.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163tqvvxfzo.html

{**a, **b}
来源：http://www.sxryk.cn/163oatnxqtk.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163rxncfebw.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163haxsdlrf.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163qclgqems.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rhzljzvp.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163wsabinhn.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163kzfndlim.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163uevorted.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163nfsomvta.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163lspcsplw.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163owxuvckk.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163bjomgoju.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163zwknwjff.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163frqvkopw.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163zaxiheib.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163wkanfezn.html

defaultdict(list)
来源：http://www.sxryk.cn/163eplzzzld.html

[U15] Py：高精度计时
来源：http://www.sxryk.cn/163kjihhhfy.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163fbaaktgi.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163wzwxqzop.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163ztmduwxl.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163beravnts.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163icozdxkx.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163cwtilubz.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163wduczqsh.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163vfnivrev.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163dgysmzzz.html

[U20] Py：缓存函数结果
来源：http://www.aibaodan.cn/163rrcaxbrm.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163xystzspi.html

[U21] Py：自定义上下文管理器
来源：http://www.xuanzx.com/163jtjoyvvi.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163lyutarxt.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163wrpustdj.html

list(zip(*m))
来源：http://www.xuanzx.com/163zdrkrvej.html

[U23] Py：分块读取大文件
来源：http://www.sxryk.cn/163vonbhbrc.html

for chunk in iter(lambda: f.read(8192), b""):
来源：http://www.sxryk.cn/163wzinoaez.html

[U24] Py：路径操作
来源：http://www.aibaodan.cn/163kqwmxdup.html

Path("a/b.txt").parent.mkdir(parents=True, exist_ok=True)
来源：http://www.aibaodan.cn/163qyheufmv.html

[U25] Py：CSV 按字典读
来源：http://www.sxryk.cn/163qzfqpowk.html

csv.DictReader(f)
来源：http://www.xuanzx.com/163ffspqsny.html

[U26] Py：并发下载
来源：http://www.sxryk.cn/163gtzkprdo.html

ThreadPoolExecutor(max_workers=8).map(fetch, urls)
来源：http://www.aibaodan.cn/163ijsvgmok.html


<!-- 参考信息 -->
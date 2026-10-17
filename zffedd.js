外链999!wailian999！

S. C / C++ 专题
来源：http://www.sxryk.cn/163dmfjygim.html

================================================================================
来源：http://www.aibaodan.cn/163hjsljicm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163jqgvtdqr.html

#include <stdio.h>
来源：http://www.sxryk.cn/163fcknvinu.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163wrqfjizj.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vascjate.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163voilsepa.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163eufhddft.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163evrqqqdk.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163zwfqixsx.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xopsnxox.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163eghbrrwq.html

strlen(s)
来源：http://www.aibaodan.cn/163jqeyhoqa.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163crgqehos.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163lfoykntn.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163clpvczhx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163yrkekvjf.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ddybntcd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wqfzesad.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163eilffdox.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zntozhwb.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fzltgmzz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163fxsjeeti.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163kfqmgdlc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163xvybslui.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163sshfguif.html

fclose(f);
来源：http://www.sxryk.cn/163dsssoxkj.html

[S12] C：写文件
来源：http://www.sxryk.cn/163mklsbcsn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163mgtdftqx.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163yjdruwhi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163hzasgrrx.html

[S14] C：枚举
来源：http://www.xuanzx.com/163zwymgybv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ynsaavcz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163pdrlhqdn.html

(double) a / b
来源：http://www.xuanzx.com/163jqdhtxyy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163kyfrwskn.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kogbeamq.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wmvqjykq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163qvtkepce.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163vasijpug.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163vzgzilms.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163mkytwgyj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bngckars.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fofrmjvq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hgzulxme.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163dhylxmye.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163batoltxh.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163njzzecec.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163wnuveqys.html

[S23] C：随机数
来源：http://www.sxryk.cn/163qtrennjz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ssjtbwvp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ycckuncw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163khptzgkd.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163qlpedsba.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163nbvpqipu.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fxvhutjw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163okntirrk.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163navxhqxt.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163oyxnisxk.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163oslisrfi.html

static int counter = 0;
来源：http://www.sxryk.cn/163tlaoscgs.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163opchhjyb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163zrrksddb.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163wyxqfxmr.html

#ifndef X_H
来源：http://www.xuanzx.com/163yrusicij.html

#define X_H
来源：http://www.aibaodan.cn/163nhzddoef.html

#endif
来源：http://www.sxryk.cn/163klauphyg.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163mpmaavno.html

#include <iostream>
来源：http://www.aibaodan.cn/163hxycsskp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163zsqdskvq.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ashzlhye.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ursddcij.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163xbbeuoge.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vtzogjai.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163wmkwvzhg.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163grpfrzbw.html

[S35] C++：map
来源：http://www.xuanzx.com/163eczqfiap.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rrycdwgt.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ksrmzxjd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rtzfrfwx.html

[S37] C++：set
来源：http://www.xuanzx.com/163lhfhohcu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163qoejcfco.html

[S38] C++：排序
来源：http://www.xuanzx.com/163szbmmzhf.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163jpuzjlgu.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163vxjvtmyk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163edfghmhp.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163uptijink.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pgaaorpi.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pyoazzbl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fhjkkemy.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163slxbwfjm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163gcauyrxx.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bontalyl.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163cjutfyaf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163sndrdvzm.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ffkypwms.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qjgcvmmp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163aohbjisn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163iqaaeemi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163nwbswtwi.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163vefcgsby.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ioehbxmd.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163itxhlwlu.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163qyrftzgp.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fxxndpqk.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163kxisklws.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163utfqlbgj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163genfdblg.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163drrospbd.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qxtojkyd.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163uliezphk.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163eekvipxh.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163hmvtbjmt.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163jgegkwau.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163uuesgzqw.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wgaakpqx.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163wvoamylc.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ldsukrzl.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163qddedgbs.html

[S56] C++：optional
来源：http://www.sxryk.cn/163jteztvoc.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163byqeqsty.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163jlmulebo.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163glkuqsih.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163npdpbdeu.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fckwcxac.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163ednwuvbj.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mbcnwfvm.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163krlmzsce.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163wicrfzbe.html

================================================================================
来源：http://www.aibaodan.cn/163bldeimcv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163wpbyecwv.html

================================================================================
来源：http://www.xuanzx.com/163sumkhyuv.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163vpuxvnte.html

println("Hello")
来源：http://www.aibaodan.cn/163vljnptlq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163xddvahrz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163tulsnvfn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wtszfhlv.html

"值: $b"
来源：http://www.aibaodan.cn/163rmiqukmb.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ahmcqdnv.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163qlvbvpvc.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163czmnrshi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163dfychknv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163usheqwty.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163vjofcrto.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163yekazsea.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163jhgxuzzd.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163ippgzopl.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163qmuwczgz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163fbbrxccs.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163zbhoxtmm.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163whsisyfh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163xraetkfe.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163stckiiaj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cptswfjo.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163zedrjjfm.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163wtvalvat.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zdoiqfpd.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163yjppgxfl.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163rsxkvxni.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163iikfhrjz.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163blsdzwxj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163lncimwqq.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163yksrollp.html

print("Hello")
来源：http://www.sxryk.cn/163jfyatgvt.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163dkzzycmt.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vznnjtui.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163tkmvsuxq.html

"值: \(b)"
来源：http://www.xuanzx.com/163wmsadgif.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163vbcaazmw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163rgfnfkbr.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163yepnlmql.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163zohyidmk.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163kwjwktiz.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163rwbspqth.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bcmzbdaj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163isnbfbsf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163isthyfxd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163bbllwgjd.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163txgmnpxv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163xwxcifeu.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ydinaosd.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163exorlvmb.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163ohbuxeil.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163obcikvyx.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163hdhflqrw.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163nqbanvpj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163lqrcenfu.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ecovzvtl.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163lpapmuiv.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163ttfbphqc.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163pkcsrcfm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163rzjzazne.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163njigvwji.html

print("Hello")
来源：http://www.sxryk.cn/163eldcarlo.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163zgxtxvyt.html

local a = 1
来源：http://www.aibaodan.cn/163tkwddazv.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163epenwpvy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163llrnlyhv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vlnynney.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163lmfcenin.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163iltzywlz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163tofklhke.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gctsuhdv.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163olveeivc.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163rotxfyjk.html

"a" .. "b"
来源：http://www.xuanzx.com/163lyutnwnd.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163mbxmahym.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163zyztjpgm.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163eoffxoqt.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163wbiskeci.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163lizpjdix.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zththysv.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163oylonqey.html

print "Hello\n";
来源：http://www.sxryk.cn/163mqljqlsj.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163qxwauiqz.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ovalbzpz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ijynryxq.html

"值: $a"
来源：http://www.aibaodan.cn/163vdgutcor.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163xitjpgke.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163enmahyau.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163wyhffpue.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163dhlawbnj.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163uvpqorll.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163hoccupxo.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ihdqisef.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163wsweqcox.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163padqncku.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163jqdsvjbc.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163tqjffhzm.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163nedcakut.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163pkupapmd.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163itnvgpca.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163cblzjpfo.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163yrwonceh.html

println("Hello")
来源：http://www.aibaodan.cn/163zsoatxvh.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163vqwreydc.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163hpsfjill.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163wdgktfgz.html

s"值: $b"
来源：http://www.xuanzx.com/163zaojguzn.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163kjpcwjfw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163wqjhatkq.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163fqruaymk.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163sozzlcvz.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163qtmxhwfx.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wkqenrih.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163gkewiobs.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163vossfsmx.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163orxyking.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rhyidput.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163guesngjg.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163snsaxqaj.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163zbhivyai.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163zsezxqmz.html

================================================================================
来源：http://www.aibaodan.cn/163lziwnpmk.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qmvsqokv.html

================================================================================
来源：http://www.sxryk.cn/163vphgozod.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163hxeepzvv.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163rkhxypdd.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163yvoqftyp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163vsxuqdgc.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163hanuonlj.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163holtcpqe.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163xelayqbg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163lpazmywa.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163bskykdfh.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163uswbcfaa.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163kwktqbfu.html

{**a, **b}
来源：http://www.aibaodan.cn/163omnxwwci.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163pevpuuvl.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163bvjtzeuv.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163tfqrwson.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163lklpptjm.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ejqhpsmb.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163nyejkebv.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163prhjohuy.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163mbwwyoyv.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163txhdnxjo.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163vckxarxw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163nmldzcwf.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163mageihgh.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163mshnrofn.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163qisgldxy.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163fzejjrga.html

defaultdict(list)
来源：http://www.xuanzx.com/163qzvlndin.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163tkuvlaou.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163jbyssylm.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163rrzpvqex.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163dcuamyua.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163krjqzybh.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163iplevsrh.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163czxonses.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163xutnjdxi.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163epzzxhor.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jvupohuf.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163ubvviaic.html

@functools.lru_cache(maxsize=None)
来源：http://www.sxryk.cn/163plqewqfp.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163eouzhblb.html

@contextlib.contextmanager
来源：http://www.xuanzx.com/163pgtuwuef.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163sgybqepp.html

list(zip(*m))
来源：http://www.sxryk.cn/163hrcsuhqc.html


<!-- 参考信息 -->
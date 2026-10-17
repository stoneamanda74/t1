外链999!wailian999！

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nmezqmhu.html

================================================================================
来源：http://www.sxryk.cn/163cgirtuzb.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163yvrggzey.html

#include <stdio.h>
来源：http://www.xuanzx.com/163hryabbka.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163eiygtlkh.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163dctwthev.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163scjtxgvq.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163itaegywq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163rmwamute.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163etxfgcjv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wgcsrpzs.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163akmprioi.html

strlen(s)
来源：http://www.xuanzx.com/163nfrfraap.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163tzgdeygm.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163hrbdfvbm.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163yatkqzvn.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ktdfrqvc.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163juchnnjb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zmzjjrgz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163izetrgzy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163zdjezvph.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163azjmitun.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lpqzhklk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163fobwmkhi.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ceflioao.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163ngzfmitu.html

fclose(f);
来源：http://www.aibaodan.cn/163kszdyehx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ufvgkdki.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163merafozi.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163cpyfmrht.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163yxzmkbrx.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ghypykzk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163njmhqoyp.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bpnwlkmc.html

(double) a / b
来源：http://www.xuanzx.com/163hjikphbx.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163uzdokfij.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163tqifqbbt.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163kvbamscm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163zawablqa.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163cxkqlhcx.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163apjqlbuq.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163gdatpjda.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jyimckph.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dhjsxfsq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163niwsrumw.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163omqjnlmd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163fcbjmilw.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mxfltzub.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163hkuxykbj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ewzhslzc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163yczkkkjh.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163zipiiuty.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163sinwvakh.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163omgeypjo.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nwxvsspt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vzjckfls.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163qensfqpi.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163myypjvqx.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163czdyewiu.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163bwlmtrnj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163yxxfpozs.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163tkxefxnt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163afkhcrob.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163opniuebs.html

#ifndef X_H
来源：http://www.xuanzx.com/163tcifeyrw.html

#define X_H
来源：http://www.xuanzx.com/163vnwfphwo.html

#endif
来源：http://www.xuanzx.com/163dwccupmq.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hksqcqqv.html

#include <iostream>
来源：http://www.xuanzx.com/163qmbkaydh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163mfmmprnr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163fwdioirc.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163arjbploc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163tkgvozwp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163iwkvtoet.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ruvbkwui.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163gyunklld.html

[S35] C++：map
来源：http://www.xuanzx.com/163mvyvrwko.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163rcqejvhf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163xyqugbmd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dyiqbacs.html

[S37] C++：set
来源：http://www.xuanzx.com/163exytczsx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163pxwvrdvj.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ebgytmmu.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163pnfrluiz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163hakciqok.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163fpdrjsbv.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163tvkbvqja.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163gnmdlgjd.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163pwcgvpas.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163twzvdasj.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163lpigxsvh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163qantrtap.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wueharap.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163owyzyayq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163vhmmtcqz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163fjrslxlp.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163qwozjnhz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163rapsngno.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163xzgouohj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rykhvnqc.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163mlwdktiu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ijgkgxic.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163dlyhqirx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163jueoqulc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163zgmibahy.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zcmxyvxn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ooqsspay.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163lxkxmbnn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163hgpujnvz.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163nxlzzruo.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163tmirzvye.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lvhfwckh.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163eqkyaiyh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163bjloypky.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pvcmrhdv.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163napjuyme.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163wqjwkbhm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163gzofuzvp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163iubmegty.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163ibullehs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163rvipuwlk.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163unbvitun.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ofskqtdh.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163fuhvrqzg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dsifjqyo.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163meqbgkfm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163lzcbddte.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163buituyod.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163dcvhawxz.html

================================================================================
来源：http://www.sxryk.cn/163kdbedviu.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163pkhvssah.html

================================================================================
来源：http://www.xuanzx.com/163mxtgdzmm.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163aqasilwu.html

println("Hello")
来源：http://www.xuanzx.com/163debvjlim.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163romrfekq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jeplnxws.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163frjpipcq.html

"值: $b"
来源：http://www.aibaodan.cn/163lkqtithy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163upvnzcas.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163zfwhgrqj.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163rdkpxibu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163rbnftboy.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jmwbbewg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163piypgeje.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163oypkifyt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163hiokskif.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ynunlpmh.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163llupozll.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163unbnsvwp.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163rkmikxff.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gwuphtyq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163khqrrsdu.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163vxmmfkxk.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163cfkhjegp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163auopytyy.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ymqwvmps.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163arjrnkwl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xvtxzydj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163dxbylntj.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ubnmltkz.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163fimacvjo.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163aegcfxme.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ewjctvil.html

print("Hello")
来源：http://www.xuanzx.com/163gjclypnl.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163wwwytvzc.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163jpjkrzsn.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163zzhwvhpf.html

"值: \(b)"
来源：http://www.sxryk.cn/163nqgapytl.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163wvifspxv.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163awndllwj.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wtzoyhbz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qowmynaj.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163agxezwed.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163oltsfdlu.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163beurexwe.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jattwneu.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163rracxzrk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gcwfiwty.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163olvvnycl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163yehzgvuu.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nhsrgwsw.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163yjekblyo.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lbntukxx.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163brmzgsod.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163zzhdgpmq.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163pgkivlst.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163dyltnbnp.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163igtvrekr.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163dfbusplc.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163bvovpvcr.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163zyvqzonl.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163blwoirhx.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163hhiogtxt.html

print("Hello")
来源：http://www.aibaodan.cn/163ayeyeykv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163rodllbkb.html

local a = 1
来源：http://www.xuanzx.com/163horwminn.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rypkgjvy.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163nqnrvscr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nfqexbep.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163lhkwzpgr.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163xlsmqacz.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163rqayqovu.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163vyourvkq.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163xsxjfgwu.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163btisguyg.html

"a" .. "b"
来源：http://www.aibaodan.cn/163dkkylzsz.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ujtbtubm.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163jtcrscfg.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163cpptjkmj.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163uooreslt.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163wpfffxbo.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163qoarnfkd.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bbvhpevb.html

print "Hello\n";
来源：http://www.sxryk.cn/163evhudupe.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163cqdxykyo.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163huhianfe.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163wsweuaml.html

"值: $a"
来源：http://www.aibaodan.cn/163urxahjae.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163pohmeqmu.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163cnvjvhzo.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163uigbpztk.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163krawqpke.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163waniifaz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163wdwtsutq.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163mxytlnsv.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163hpinskdh.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ogubcfyi.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163sfmryrzj.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163dbiqufgo.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163qdfthmrr.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163vhtlzqps.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163pqxlrzwc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163kfaxfyzj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163htpaljoj.html

println("Hello")
来源：http://www.xuanzx.com/163ltrcbbqs.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ytozlazr.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163fmkrvzti.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163olgzhipo.html

s"值: $b"
来源：http://www.aibaodan.cn/163evoyqgto.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163mpsnnzfw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163fxejkedx.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163tgnyrmyr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163epdgjmde.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163tmnwhvet.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163inryftdf.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163bvgnkzen.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163craelhim.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mxqadpld.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163iccszxnn.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163hstkqnwx.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163jipurfma.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163sclwqlsv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163cmflktsc.html

================================================================================
来源：http://www.xuanzx.com/163pwwvudtc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163lhucugpn.html

================================================================================
来源：http://www.sxryk.cn/163bmmzsskf.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ydumluqr.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163yekoavuf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163nvbvfdix.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163diwzhauw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163jhilbsvy.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163tyzczhww.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ybkkxmrp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hsijfsvs.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163wdtymhgr.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163dfkkkkoq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163dyoatbdi.html

{**a, **b}
来源：http://www.xuanzx.com/163fmrqszon.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163ogvzxdwl.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163mtjuodom.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163eutagmsq.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163capebrlo.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163kailrxnb.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mmjfiblx.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163sswcgqhc.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163sjnuqgpv.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163zmxhrqpu.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163cfrhxvcw.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ablgajtg.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163avghvmah.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163baejhdea.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163diuoioww.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163mobnpglc.html

defaultdict(list)
来源：http://www.sxryk.cn/163mheeezzb.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163jmimvxdo.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163mznlznlr.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163kzwkhkwy.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163ovinwbyu.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163vvpbvqdi.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163fnngtvvp.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163kgmgibwj.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163zimtuhal.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163usilepcm.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163vpkbbzmq.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163lycntqtj.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163nemwmqee.html

[U21] Py：自定义上下文管理器
来源：http://www.sxryk.cn/163hgfvhuxs.html

@contextlib.contextmanager
来源：http://www.aibaodan.cn/163gmndgzed.html

[U22] Py：矩阵转置
来源：http://www.xuanzx.com/163iyiiogiz.html

list(zip(*m))
来源：http://www.sxryk.cn/163qkhlfqga.html


<!-- 参考信息 -->
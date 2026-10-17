外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163qowznrpj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163fwcxthfz.html

time ./run.sh
来源：http://www.xuanzx.com/163ipcecvuc.html

================================================================================
来源：http://www.sxryk.cn/163jvvsicco.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163pftuchek.html

================================================================================
来源：http://www.sxryk.cn/163hsmmiavd.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163suwqdqch.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ptrigtlf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gwrzpncx.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163rbyzmccc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163yghbascn.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cxqewzed.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bpxfxkyw.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dnnyiwxa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qhognwwj.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kgkjhvkb.html

strlen(s)
来源：http://www.aibaodan.cn/163littthuk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163unmqoygv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163vgzyomnt.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163byzxjciy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qewuwcfi.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163vekpnzsg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163xpamhtny.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163mzmikpax.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163lzrchual.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vndtqckf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163twymacfk.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163klpcovbr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163emdhnruu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qjwjbnai.html

fclose(f);
来源：http://www.xuanzx.com/163ytcxlzby.html

[S12] C：写文件
来源：http://www.sxryk.cn/163kexskzfz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163shxsgsrq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163epevtlgu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163asjymprm.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163tqqxnspy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163svvbsdhm.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kwgxnidf.html

(double) a / b
来源：http://www.aibaodan.cn/163jptesmly.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ojggtuiv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163lccjfzfd.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pqvmxuvk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nwpwqfnp.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163cgqvchuc.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ggvdzwyl.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ragwkivc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163arzqzdbo.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dkhoqfkq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163poambgqk.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163koakptzf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163vanwvixv.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hfdgchee.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163nrrzkvbi.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cxzoajex.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163fwfzjxyc.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ldlikgnt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163esskzfjj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163azufksjy.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163grsgbowb.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163burokxco.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ssdicrcq.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163hblyeozw.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163mrofyijp.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163htsbnhkl.html

static int counter = 0;
来源：http://www.xuanzx.com/163honhlyto.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163omrgqute.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163oepmokxi.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163owaqngse.html

#ifndef X_H
来源：http://www.aibaodan.cn/163hgnwranp.html

#define X_H
来源：http://www.sxryk.cn/163hhfsnygf.html

#endif
来源：http://www.sxryk.cn/163liidluiw.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163daxrexqg.html

#include <iostream>
来源：http://www.sxryk.cn/163llibajey.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163cppqikrw.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163rtoycmix.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163vhnhzxky.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163zljkhntk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163dohvsoup.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163ynbpopzs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163kgtjkmfu.html

[S35] C++：map
来源：http://www.aibaodan.cn/163fyovglld.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163oxvltylk.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163cvdohugf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163vizbxhma.html

[S37] C++：set
来源：http://www.xuanzx.com/163dcdootfv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ommeywra.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163tfsguhpc.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163zxpyfcko.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163nibpliva.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ebqtyxog.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jwtrijvm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163xtydojgc.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ncabikgg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163oqqaogta.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163rsbhqvns.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163igumckke.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163ikuuuwwf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163chygaxvp.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163nwtplxuz.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163atkxigrw.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163cqmmrbal.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gtvcsapv.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163iaoqzbxm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163jgiemxsg.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163vskmtusx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zukbqoeg.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ygsixlfa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wfsoqwvq.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163dykocnax.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ntzbhncu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163vtvndpmk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163urqawiyj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ejwezwny.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163vphlgbcl.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163qviknhik.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163qqhgpkqt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163thhkrzrn.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163gxnpgtuz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ziktykio.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163naousulk.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163mufjhsdv.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163aczknkgc.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163ocspgoiv.html

[S56] C++：optional
来源：http://www.sxryk.cn/163pkcpknpn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ukfprdlq.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gacgekmb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163nxfxzodk.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163pmoqootg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163hwrtjbco.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163zhcxziav.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163bracgzuh.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163dcvhulls.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163vwqrjxkm.html

================================================================================
来源：http://www.aibaodan.cn/163ludvykrd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163kpzulqic.html

================================================================================
来源：http://www.aibaodan.cn/163qvjtdmep.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163roxqtbff.html

println("Hello")
来源：http://www.aibaodan.cn/163oeqigyjw.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ozyydoba.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163ddrdzqfd.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163vbqenwwe.html

"值: $b"
来源：http://www.sxryk.cn/163djpkanpx.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zjmllzke.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163iqytuvwp.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xuhkkjqu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163wzibxdqh.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163rhiwxnbs.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163febddryi.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163duzpbxca.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hngtcebr.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163wilomrbm.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163vslqdxtn.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163oobkrwcq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ppkcphnk.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163omhmguxp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gjspzdty.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163bgvbciix.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163xjipcskm.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163iqqgvqqo.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163sbvzmznq.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163zmtftgye.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163whjdtuiq.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163zvnrmwql.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163rbilxnec.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163eimvmfvd.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163etycedzb.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163seooolgs.html

print("Hello")
来源：http://www.aibaodan.cn/163dpdbjpva.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rnxozeld.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163nvaoveor.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163lobslrpk.html

"值: \(b)"
来源：http://www.xuanzx.com/163pilihqjd.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163clbbsasa.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163plcjbenx.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163bdcqzsie.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163zutzyrlb.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163bcwkeikg.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jjcpmuas.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163wiqvyvpv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163izzdmyky.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163jcsotcjh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163hcvwydzm.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163chojtwdi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163qvkfaczr.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163vklqksjc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163upyjzmle.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163uowsaokj.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163llnlnany.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163lznkmyae.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163dhvagwwc.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163eulwbnil.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163cdtfuyqg.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xnneyybp.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163egncjgnq.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ijjwwzez.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163rkuncytw.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163lvmcahpz.html

print("Hello")
来源：http://www.aibaodan.cn/163fioklqkl.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163efcynsnz.html

local a = 1
来源：http://www.sxryk.cn/163kaeyrhdy.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163zhwapvzb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vqlmhmvl.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163jkofwyxa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163asljrovf.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163yqhnkjyx.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163fkqnzena.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163qffvhghf.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163hqxkdsmr.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xhwdbdxs.html

"a" .. "b"
来源：http://www.sxryk.cn/163aacdszkt.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163oqmbiure.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163gokwxghc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163dnwgptql.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163tnhrvebj.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163hjclnioz.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163fajrxkhg.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163xjlrqpat.html

print "Hello\n";
来源：http://www.xuanzx.com/163thxzomxz.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163msypkbqs.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163sqotlnyp.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163mhqrglfg.html

"值: $a"
来源：http://www.xuanzx.com/163bajvscmm.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163ylehrgat.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163oxfxkloi.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163iyixpqrv.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ubxykepl.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163vdtiwizl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163zusjxsjm.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163uhdmvovl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163xiwqobpy.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163dcbwwvmf.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163iilxkyiy.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163usycbgpk.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163cmqaaemn.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163tbaaittr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163fqgeercl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163utucedqi.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163zipoynrk.html

println("Hello")
来源：http://www.xuanzx.com/163isobatca.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163autlggjo.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163vyaapttk.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163rqvtanwg.html

s"值: $b"
来源：http://www.xuanzx.com/163rndzeotr.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163zxjausrq.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163tmgoifgs.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163ghlexgfm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163blfdhxap.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163cbhyfcza.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163gtonjoaj.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163kcynquvc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163xyxilpzc.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163xaoworby.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163sjjsnxgc.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163hmxcnopb.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163qcytnddt.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163nkwcgzdh.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163kskaysxt.html

================================================================================
来源：http://www.sxryk.cn/163kvrzaoxz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163kkenfrza.html

================================================================================
来源：http://www.sxryk.cn/163zuatznya.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163iqeoifli.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163dfnhpxjb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ubbafleb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163ghvazrsr.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163srrwgrof.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163zryurkwk.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163vfevbqxb.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163klivrkkz.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163zdrdmfkm.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163stuhrtxq.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163gynpgllc.html

{**a, **b}
来源：http://www.aibaodan.cn/163eegihjto.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ahzssset.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163zahmclkc.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163ajxjxjhm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163osboppdu.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163axebpfwa.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163snciwkqk.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zhzfmogs.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163rbksxjcu.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163bkrxcpzi.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163swnbscvl.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163aknkjhng.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163fztbynjg.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163xzaadavj.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163vtvzgrdu.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163opaechzj.html

defaultdict(list)
来源：http://www.sxryk.cn/163uwxdsuxv.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163aanyglnv.html

t = time.perf_counter()
来源：http://www.xuanzx.com/163uncrpior.html

[U16] Py：命令行参数解析
来源：http://www.xuanzx.com/163rzxzmmmk.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163ujdsedbz.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163svqapkax.html

logging.basicConfig(level=logging.INFO)
来源：http://www.sxryk.cn/163cjlhgcop.html

[U18] Py：预编译正则
来源：http://www.aibaodan.cn/163qywtlcpe.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163mctrtxgl.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163floyrgik.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163jqctyfht.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163tzwcogdj.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163ilsrzwlj.html


<!-- 参考信息 -->
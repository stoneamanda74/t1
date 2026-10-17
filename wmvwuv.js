外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163bbkfiqsj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163slhirlul.html

time ./run.sh
来源：http://www.sxryk.cn/163dowkzfzu.html

================================================================================
来源：http://www.xuanzx.com/163mqhoigta.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163dsffakdo.html

================================================================================
来源：http://www.aibaodan.cn/163iarijael.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163pbkemgxg.html

#include <stdio.h>
来源：http://www.xuanzx.com/163evcjzvne.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163xoeambvy.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163tcxbxdhr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163cugfjrbj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163kfqrmmbv.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163mhzgehim.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163gjmbfnuq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163odrpfyan.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gykmkatd.html

strlen(s)
来源：http://www.sxryk.cn/163nkvchmdf.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ssulocdy.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mbzfjbjb.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wnqracvr.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cpbyfypt.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163avfkeaak.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163voxbsskt.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163tysaalgm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163szqprype.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163hvdvbwri.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163momzurzk.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163snqrdfsv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163tmciwkzm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163aqayhecn.html

fclose(f);
来源：http://www.aibaodan.cn/163vsspeuvf.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qgpuousu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vnzhcgfp.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163bzgwrevu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163zcemhnlu.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vreznbre.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163tjvnhmks.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163bhkogzoq.html

(double) a / b
来源：http://www.aibaodan.cn/163rvxsjzdi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bklhbolv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163wzudgons.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163fzdonejv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163xpdwwfos.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163rqkvftgh.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163xcehfnom.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163uchhbxxk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yzvraysz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163uaklcevi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qylldwsr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163akvixyns.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163nizhkrpc.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163orzwbtiu.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zgvcevxs.html

[S23] C：随机数
来源：http://www.xuanzx.com/163tozwfjfu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163estcngof.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163qjkplsga.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uenaxrav.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ycabmdda.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163khubkgtd.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kqkcwsje.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163dswqqhco.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163dbtnfidb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163hsnivpna.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163kgkqwomb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163lbgzodgk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163uylxsqwp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163uqswiihq.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163idtzpbvj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ufokedxd.html

#define X_H
来源：http://www.xuanzx.com/163puvdyojp.html

#endif
来源：http://www.aibaodan.cn/163mwoevtuu.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uxppulog.html

#include <iostream>
来源：http://www.aibaodan.cn/163thaimmtt.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163pctmmrrc.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vyjpochm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163luomwhqc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163kgljwddr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163sgfdldow.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163penwxbut.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163imhethnk.html

[S35] C++：map
来源：http://www.xuanzx.com/163buowtjgg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mkedckiu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163deerkjaj.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wrogvumm.html

[S37] C++：set
来源：http://www.xuanzx.com/163ncjmjfdz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163eyvdemvc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qjoagbri.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163wzkjnwhk.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163wqplbxqt.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zcydthsj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ugirdfyl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ipdfbsby.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163fqrfyecp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rubwrzda.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ywaiztzc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163pafqumev.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163gqktzenv.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163aomqijgv.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163zjlblukx.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163wpgnmtqd.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ciisdjof.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wlcodlqz.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163utgoduuy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163wrkdjwxb.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163iqhrkjrs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wkjutlvj.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163gtjfxqth.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163lcweuzyu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163emgcphqd.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163luyrxmmi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163gpjzpvkm.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163htboxowk.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163yntprcfj.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163kosiimgu.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163xouaocrt.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163gmppnasr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163byjedhiw.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163acvbjkcu.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ubqaokev.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163crgcbvye.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163bjzsjuoe.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163aparnsyx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163jrjgwknj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163dnsypjtb.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163qbtxbkbk.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ccflwemx.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163bioyzrzb.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163nwjdxbpl.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163fososcsa.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163kvtzrgxb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qciixvym.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163mffhizqj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163iegkspdx.html

================================================================================
来源：http://www.xuanzx.com/163vckocfdp.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163cxiirurr.html

================================================================================
来源：http://www.sxryk.cn/163txfqpmoz.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ugvtfwef.html

println("Hello")
来源：http://www.aibaodan.cn/163ljwtlhoe.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163filvepri.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rtidmxta.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163njoojaqd.html

"值: $b"
来源：http://www.xuanzx.com/163tdygqygv.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163zyxfqxaf.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163qksniqua.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163fhqfrkjc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kkfoigpd.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nracmbgl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163cyiclrpy.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163ppzdriqn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kuhgodej.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qxrbceym.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163upwmaimi.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bnproaix.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ejsjuakx.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163aqqmzfhs.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wdtcuyww.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163oiojizap.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163vkxkhczb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163alqatpou.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163apaiuoal.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ihbmemsl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163jqthxjeg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163fpgqbxzj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163qhulmfns.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163rtwekdww.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163lwxnxfqc.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ezdlubmc.html

print("Hello")
来源：http://www.xuanzx.com/163fadymaus.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163xakvutub.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zdrmzgwa.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163gywncgbt.html

"值: \(b)"
来源：http://www.xuanzx.com/163eyyoewvm.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163vtybupbz.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vpggphry.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163lwakkgxb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163cwaglvbj.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nwwmhpip.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163hcyvpxwa.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163bfeyxtkc.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163biacbvqj.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163lugbonkq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gejogtsp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163jmuzvyaa.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163jfbhjktg.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163emqwozzt.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ywocnwsv.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163czcuxhvc.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163yjqusywd.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163hyigezgy.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163hhljvcqn.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163evmnflaa.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163axqvyrea.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163curvtjqj.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163ercaqwto.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163iyjytdbb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163mrtwdmgf.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163limpyfre.html

print("Hello")
来源：http://www.aibaodan.cn/163vbjoixky.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163kmkmrjxm.html

local a = 1
来源：http://www.sxryk.cn/163peagdowu.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163zstazqog.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163sdcxqjug.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163lhcxekqy.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163tvxrrgrp.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vnpvsbge.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163njsuinzg.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163aqpndvhl.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163crwafutf.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163tnkdqliy.html

"a" .. "b"
来源：http://www.xuanzx.com/163cokzsuns.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163tawttkww.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163sugzcrhh.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163ypmshciz.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163szrsnlbv.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163nbbgjdca.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163sowyklfq.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163mjeqgcmu.html

print "Hello\n";
来源：http://www.xuanzx.com/163zowfmevp.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163kscwdelk.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ooghtpuc.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163fjulytgj.html

"值: $a"
来源：http://www.aibaodan.cn/163efslciqv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163utwlxcvi.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163uvnptjds.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ntudfviz.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wvrxifcu.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163kdgyeqzq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163jpwgbyzy.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163qjoerdmq.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163htkilzfj.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163kldjxjuy.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163pdagvujg.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163zbwyqxiw.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163bhzrbzjr.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ejksiahw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163dvwaupnu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163etzvpnac.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163hlkhosix.html

println("Hello")
来源：http://www.xuanzx.com/163fvqabjaz.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163sscdikor.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163syjtcvbx.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163cgwimfnv.html

s"值: $b"
来源：http://www.sxryk.cn/163npwfjiam.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163bxudazcz.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163zasubxxj.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163xdnwrcyr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ldmmrjus.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163nhhwmuex.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163qomxxhhr.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163uiuvvpxa.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163yqihpzef.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163jjgzaian.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163tqhwksdm.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163edoogegj.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163ddqztjyq.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163lchvmbve.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163aahdukga.html

================================================================================
来源：http://www.xuanzx.com/163obgewujl.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163thgiawkk.html

================================================================================
来源：http://www.sxryk.cn/163uhmraefp.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163ciukkeic.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163iomafqyl.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163uxwthpjp.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163iadujvbl.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163qftsmcdk.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163rwosgzso.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163ahgfhltd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163hcavuyxx.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163zhqeyfbr.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163xplnukjp.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163ambyfkxg.html

{**a, **b}
来源：http://www.sxryk.cn/163lqvfgykm.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163ddduhart.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163uzzzrghf.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163apihxppv.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163zpanbcee.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163adpjosqg.html

max(d, key=d.get)
来源：http://www.sxryk.cn/163hddcukki.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163qpaigefa.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163xqxquiqj.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163nndqlsmq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163mtvgcmve.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163sywrltez.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163dcwahzvi.html

[U13] Py：固定长度队列
来源：http://www.xuanzx.com/163xyccfmpw.html

deque(maxlen=10)
来源：http://www.aibaodan.cn/163iaalwdqd.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163nhvuxeib.html

defaultdict(list)
来源：http://www.xuanzx.com/163swjyonxc.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163mmczayey.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163qypazpgd.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163hoxkbveb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163jjvxigah.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163bhvoapae.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163gdqvbioi.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163zaioausg.html

pat = re.compile(r"\d+")
来源：http://www.aibaodan.cn/163ptqzhiky.html

[U19] Py：正则替换带回调
来源：http://www.xuanzx.com/163herpzxri.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.xuanzx.com/163ifqrcrtn.html

[U20] Py：缓存函数结果
来源：http://www.sxryk.cn/163bojmxhvp.html

@functools.lru_cache(maxsize=None)
来源：http://www.xuanzx.com/163ydzuzjdw.html


<!-- 参考信息 -->
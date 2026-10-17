外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vmvajfat.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qnhpkzqw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163juwizhvc.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163kgckmvmy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163wqscawjj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jsrmruxb.html

time ./run.sh
来源：http://www.aibaodan.cn/163bcsucrum.html

================================================================================
来源：http://www.xuanzx.com/163lhrrgrue.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163znuocysr.html

================================================================================
来源：http://www.aibaodan.cn/163nncaqmti.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163trzaeemz.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163wgilwvmn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163grbhrthv.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163chavfgqt.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yokmwwtx.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163kbgmdtsa.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163obmvumst.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163msmbfwaa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vdfyfass.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163deysrydv.html

strlen(s)
来源：http://www.aibaodan.cn/163laqqifkb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163eescjowo.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163scilcfah.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163hhhdvlan.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gmfdbfsq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163bagkomoh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ekyytmui.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kpwxcaia.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pauutlcj.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163omqwddyk.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163leghdfev.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163nxmvvqmm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163bywryuvb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163dzdqrpez.html

fclose(f);
来源：http://www.sxryk.cn/163mujveqlp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yfhjxjtr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ceuhxszx.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163szanynpr.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kpupuhba.html

[S14] C：枚举
来源：http://www.sxryk.cn/163gulxsygs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163paamwlob.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163okbqdhos.html

(double) a / b
来源：http://www.sxryk.cn/163jpzqhqgi.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163mqqneodh.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163sapvkwfx.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163pqmoeimu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163bofiyzva.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163shbbwuxr.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163vembjbbb.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163kdtxmxbd.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qbchmaww.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163cldinjnk.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vbomvrxj.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163aietrcwa.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qyydmcsa.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163aoxfweyl.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uhkavnvp.html

[S23] C：随机数
来源：http://www.sxryk.cn/163gqjusaax.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163wteshhsi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163hzwztort.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163wnmknhip.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163fpugkqmt.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163qkmjpemo.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lfacwius.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163cixtmsdu.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163mjktuubw.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163opkszyca.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tygsfnvu.html

static int counter = 0;
来源：http://www.sxryk.cn/163jqwtnpje.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163gchqphcu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163matvlfab.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163lkpjauuf.html

#ifndef X_H
来源：http://www.sxryk.cn/163nwrfhyra.html

#define X_H
来源：http://www.aibaodan.cn/163ixqqyslc.html

#endif
来源：http://www.aibaodan.cn/163cubohwgj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163qmtkhswj.html

#include <iostream>
来源：http://www.sxryk.cn/163ctzxlppu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xjgrbwpe.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163giqgievp.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163uzzjdcgx.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163pfhfktad.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163wnhxtxrz.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163usspjckj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163bzsllddd.html

[S35] C++：map
来源：http://www.xuanzx.com/163fqmjxzsa.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163pcqwxteq.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163pjvotblf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uvmezwfz.html

[S37] C++：set
来源：http://www.xuanzx.com/163ykyvjekl.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163exmxdwkv.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fibvhjmq.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hjwvlcha.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163efrfmyzf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mybvgfjd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163kmpafadj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163jrhgnwhu.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163knldbetd.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163utuhvlbc.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163uxvdtocz.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163mzjhiaoc.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163eizfrhyw.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ftdtedwf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wekmirrw.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163gkomoxql.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163qvsxqzsh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163hihkxmdf.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163vscdgcst.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rkxuszld.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163dqdrmsuu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ywhlncwf.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wzpttkje.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163ryymsnnp.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163obdylerf.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163nwhpdmqd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163awyocxcq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wnrlojvq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163lcwvhgds.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163pmahmfhm.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163njspohal.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163aanklvzr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kdbryxsk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yafhfzqn.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xyrvmtim.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163qasgxxlj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163tafnafzx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yovoojtt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ekkjoekm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163zhcecnyo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tvxbjonb.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163xmjlxskx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163eczqcjsa.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163rvodmrxe.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lcqrcixd.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163mzdusgys.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163wzgdicrx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fxsppjbr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163avcxsgbh.html

================================================================================
来源：http://www.aibaodan.cn/163kikfksej.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163qkpbjxgm.html

================================================================================
来源：http://www.sxryk.cn/163yoymgnfj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163hkgxcjmf.html

println("Hello")
来源：http://www.aibaodan.cn/163zcfmhfme.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vdxcbrvc.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163pyxbvbbn.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mygidqtm.html

"值: $b"
来源：http://www.xuanzx.com/163yotzbjjh.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163mauygtwp.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163mxrojpxo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163rbfricym.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163hweuepsm.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163grglixah.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163opyzdgpc.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jsristrg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163uurfmpat.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ncmiogqy.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163fnvxnzyi.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163xqhqcjvr.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pkvrumly.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163ebmsnmde.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163xelfvfdm.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163hicooopx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163aixijiem.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163buqzjblf.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163hatthtrs.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ikrlvhlv.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163hrmahywk.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163oacvovhk.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163cnnljsdx.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163yuwqefre.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163cefnufhu.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tgvplhdj.html

print("Hello")
来源：http://www.sxryk.cn/163nijntwnr.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163nyqdyxvj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ejmfwcgf.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163bzgbqcwj.html

"值: \(b)"
来源：http://www.sxryk.cn/163pkbjzspc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163amronfpg.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163aiaivwfa.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qddezqcm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163krssjnfc.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nxakizht.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163cdieyeca.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jszcabwi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163mcdflbvk.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163idzbyklg.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163sdpnqktv.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163nohbscpo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163tlztlepi.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163efsmhybj.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cgujlboy.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163njmpqetp.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163jqkpudnu.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163whvdgphi.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163dzhymngh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163btwomlee.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163ytavqvdx.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163mdjpgnlz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163bqazckfi.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xihknokz.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ubsljghw.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wbsgwgmq.html

print("Hello")
来源：http://www.xuanzx.com/163btvkmvji.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ycwzcdhc.html

local a = 1
来源：http://www.xuanzx.com/163dqoktcds.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163weqoeexa.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163wimhjwdu.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163blderipc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163pmtsexyz.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hpkyluuz.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163mpfitafe.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163pxkyamqg.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163hmlbqdkt.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163koblgoyx.html

"a" .. "b"
来源：http://www.sxryk.cn/163utpnldui.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163klsjxobi.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163wfzzlqvv.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163tzjlgmvz.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163cbqddgki.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163lnjnreeo.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163fwksuapo.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163yasrxpty.html

print "Hello\n";
来源：http://www.xuanzx.com/163ngjqpjdq.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163jsgrewaq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163dnpskdfb.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163loyfhwkv.html

"值: $a"
来源：http://www.sxryk.cn/163bxwdrdiw.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163nzwzblsi.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163enipetwe.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ecooypew.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163zgvedgqd.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163izcggedt.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163fjltttej.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163lcwedbzr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163gvfebaee.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163qdphqesx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163oldlhaxd.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163wtomkyve.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163boxjdiys.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ebtfdido.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163lauylfrc.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163olhdvqfw.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163bdqhzayt.html

println("Hello")
来源：http://www.sxryk.cn/163cqrdjyeg.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163okwifygj.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ixihnxsf.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163gizvgzkx.html

s"值: $b"
来源：http://www.xuanzx.com/163fepbwbyb.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163dukmnhki.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163yvltwygd.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163kuntfgvw.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163epmrmiyj.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163murcrlhn.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163nqkauysn.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163spvgzuki.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163emygqfjq.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163jqtodfrr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163clggezin.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vglasist.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xfypgcsc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163tkifvdku.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163kjivmjvp.html

================================================================================
来源：http://www.xuanzx.com/163lijpglnz.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163aasqwjna.html

================================================================================
来源：http://www.sxryk.cn/163drpygvwh.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163uyhkcxpl.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163iluusmnf.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163jsifflbh.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163htpccttn.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163mldgwhrh.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163zgvxdems.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163lobhjona.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163uxfbpgsu.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163ozafreoq.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163ecijcshb.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163jsbxkiep.html

{**a, **b}
来源：http://www.xuanzx.com/163ziodxgis.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163ifmbhjzs.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163wnyjytti.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163dklqogse.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ngzelhyg.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163yusevwvk.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163mmqbyvir.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163mxmwzbul.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bxmpwfmu.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163wbgkdgkl.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163hbsopbin.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163jzdxmmcc.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163xlqbskza.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ffpfvovf.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163acirnjmk.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163gacbxvor.html

defaultdict(list)
来源：http://www.xuanzx.com/163axyqtnqd.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163xeqzzjny.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163ykeyekbk.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163xgpqfroj.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163tibqeyhl.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163dypmovox.html

logging.basicConfig(level=logging.INFO)
来源：http://www.xuanzx.com/163iobsqewh.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163zicootbi.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163fkenfogj.html


<!-- 参考信息 -->
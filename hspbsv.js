外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ivalozop.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163vqylbdgn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wkdcasln.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163gcbnlhmh.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163thwtxxpg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163nibijjmo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rwnimujx.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163lawfdfbo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163swcybhku.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hfuzimxr.html

time ./run.sh
来源：http://www.aibaodan.cn/163hgjuddrh.html

================================================================================
来源：http://www.aibaodan.cn/163qiulfgdu.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163fkfepacd.html

================================================================================
来源：http://www.xuanzx.com/163cooryrqh.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163zavmcptb.html

#include <stdio.h>
来源：http://www.sxryk.cn/163sfjjivdf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163pnlnbgvf.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163iwezspje.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163cwgbzbvn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163motjvptw.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dgpyzhnd.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163cfnvuhjm.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bmhgykyc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163tkwovucx.html

strlen(s)
来源：http://www.xuanzx.com/163gjrswlwr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163smbhfxdo.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163enuqbeov.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163knzukfnq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163yguyhqht.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163mcghbhmd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163dggnkwus.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163uwzrzisr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ktbpdffd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163onzhzjmq.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ahintyaw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163qcbhkeph.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qjqkzdwg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163dtroceyc.html

fclose(f);
来源：http://www.aibaodan.cn/163zehaaffa.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163yxfgspsf.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163serwwoyl.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vyjuhlof.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163etxsrbpl.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ekzvupdg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163wcbmiazu.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163xuafokrq.html

(double) a / b
来源：http://www.xuanzx.com/163vaqnhjks.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163juqyzxui.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163rhdgdqsg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163zkycirby.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163pocyqbaz.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163caacotfi.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163muzclpxx.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163pvfwcmlk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163femslels.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163krasbflm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ljcjfpai.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163duumcbyx.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163klhomdgv.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163qynaotun.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163znksxkhe.html

[S23] C：随机数
来源：http://www.sxryk.cn/163icemylpn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ffgcddms.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163jlckboqd.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ulndfefv.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163khbsicbp.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163smxqkhlt.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163ulovliuj.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163elglahwn.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xiubsevq.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163nbudolym.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163hactfylh.html

static int counter = 0;
来源：http://www.aibaodan.cn/163dlpuqggw.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ogsmwnhs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163udtkyozi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163achpimqy.html

#ifndef X_H
来源：http://www.sxryk.cn/163vfacdjtp.html

#define X_H
来源：http://www.sxryk.cn/163eiesfija.html

#endif
来源：http://www.aibaodan.cn/163kcuvpveh.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163iabrkyeu.html

#include <iostream>
来源：http://www.sxryk.cn/163pwygefcu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ufumtirg.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163hpwmifkk.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163lavggddy.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qewehhsm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163jbzdblyo.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163mbgjwzkj.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ioaywanv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pbqpywuk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jclnqkcf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163fydsuzri.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163bhrxbvqu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163igwscisc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163odlywvtc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163xdprpzam.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163jojaowuw.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163ikdlhzif.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163wgkwnsfp.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163katyvzst.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163gtjjymzq.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mqgipsud.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163smckuajv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163wjtbvyii.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163zigatdza.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dbxyuxpq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ustbmqsj.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ogjpdkvv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163tzaufmli.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ixllbegp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fjscmqkz.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rnquzkeh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163tcbolabu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ewwkcvzy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163idzeszcu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ihplfpmr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vjlzlzfm.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163axsveycg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163adunkiws.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wbkmcpie.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xnyhwjgo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ropfrmnh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163mpvjzxmo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163mjfmizuz.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ixsquyoq.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163zpsltqri.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163xmgrhwod.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163apqwjpvo.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163xlevfajd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163xzmmqhkw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163uuwwfvir.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163axqqhqao.html

[S56] C++：optional
来源：http://www.sxryk.cn/163hyzjtzwa.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163hqqbckle.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163uqtpepig.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163aofzxqsc.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163uvtzfywo.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163smhiuwhj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163yoowwlrb.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163kexrnkhx.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163uwsfqazk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163bdxogfec.html

================================================================================
来源：http://www.sxryk.cn/163pcwioxmx.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ypdxnvnm.html

================================================================================
来源：http://www.xuanzx.com/163anuwjnar.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163dvbnagfg.html

println("Hello")
来源：http://www.aibaodan.cn/163atqindqc.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163syaakuvz.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163itkvvdun.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163giqqpycu.html

"值: $b"
来源：http://www.xuanzx.com/163gathdpub.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163lldqdmss.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163muxemnqy.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163gkluagoe.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wyagrnvc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lbhflibu.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163nfttyoka.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163pdnepnbf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163hftwfvbb.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163nahezchp.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ambbiinq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163oyvlygja.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163xyzjwamb.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163knvabumo.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163fcqvnotu.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163nfjcidox.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163eudenhoj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163uabusnks.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163arfmgpvg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163sqlxvtaq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163nihqrrvx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163deejrnay.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hhwdlmco.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163duyyigng.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163ilffpbts.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dvowazng.html

print("Hello")
来源：http://www.aibaodan.cn/163ciszztqt.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163wzeazlue.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163epkijffn.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163hdjrapyw.html

"值: \(b)"
来源：http://www.xuanzx.com/163cwjnrkeo.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163dwnqdvis.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ywsglvni.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163gbqgqpiq.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jtxgqcrv.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163unszscdy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163eqyfnevr.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163lkuhkefi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163lbzxmqpb.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163nzrnibdm.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163nagcvbqj.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163mrsuqffi.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163lsubisem.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163roqtvbop.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163aoenzkqe.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163bsvooocp.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163adzocewp.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163nsrnsapb.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qttcdvod.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163cakeasbx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163ebmwhlgp.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163birisybq.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163qoxzcjyo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163jfxhrqua.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163mwojmzza.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163cnzmbaos.html

print("Hello")
来源：http://www.xuanzx.com/163jdovrebb.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163qyfvxfqp.html

local a = 1
来源：http://www.xuanzx.com/163cdlvjkwr.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163kqktehud.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163mufbfaga.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163uiuvsxjj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163vyabmkln.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163iolvyuce.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163inpzapiw.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163jwzdfhkr.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163dgnkmwhu.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163qjerlqjw.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ywdknsro.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163qrcybdcc.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163jtuysnaw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163bhxukhyb.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qjzqwkai.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163tfphtsel.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163zsrcnxxx.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163crnuxyum.html

print "Hello\n";
来源：http://www.xuanzx.com/163famqyrdl.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163vakghsxx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vzmnoame.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163yxpjlevq.html

"值: $a"
来源：http://www.xuanzx.com/163bathqhvy.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mzuodjnk.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163lvyuvyoz.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163vpoldjao.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163mmqbsnqf.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163vnymdbjq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163pamjogpn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163gzfjffll.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163tfgcypim.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163vfrgwatq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163hqkimkea.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163xlmlycdl.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163nrnntjzf.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163rttdyfss.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163yadnbstd.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163roasbyyh.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163mcubijst.html

println("Hello")
来源：http://www.xuanzx.com/163sndzjmzp.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163pwtxhqyw.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163fstuukzc.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163waqanfbw.html

s"值: $b"
来源：http://www.aibaodan.cn/163dssoufmc.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163zxgscsgy.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163gtyknkbr.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163qixtahlm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163knccswwa.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163vkzkucvb.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163tjdiqrid.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163wusgyfcm.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163jugnbhqm.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163brszxpjo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163wztubpxf.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163gkinwbww.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163lcmxjhnj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163rzpjnygt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ltwfbmpg.html

================================================================================
来源：http://www.xuanzx.com/163ljnywjmx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163napjahss.html

================================================================================
来源：http://www.xuanzx.com/163caujtiyt.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163twjodsig.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163kjepjbgb.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163wbfwmauy.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163osmxffop.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163oclfvyzi.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163ktuoczup.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163pmpneflg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163wwoubesk.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163yrbyevcf.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163yvievtwk.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163kyhfuyke.html

{**a, **b}
来源：http://www.xuanzx.com/163ofhasqwj.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163jvplnlle.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163stxkjnet.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163uuzzqkgt.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163usgpxgpb.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163tflhsgio.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163erkeowze.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163zuawnyzi.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163sazrwxkl.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163fpalphzv.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163dywgxzln.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163kclsuevt.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163nrnrztru.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163ukawlksn.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163netfcpsq.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163uwldgjcs.html

defaultdict(list)
来源：http://www.aibaodan.cn/163rbvufnqz.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163zqznlwgg.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163nojabyzu.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163cfwfxsyb.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.sxryk.cn/163pzbdwsuw.html


<!-- 参考信息 -->
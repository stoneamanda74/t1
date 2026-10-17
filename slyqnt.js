外链999!wailian999！

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163jhcedoch.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ecjwqhkw.html

time ./run.sh
来源：http://www.aibaodan.cn/163tmyzhtwr.html

================================================================================
来源：http://www.aibaodan.cn/163mfrdkamv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163kzgnnaox.html

================================================================================
来源：http://www.sxryk.cn/163aygnvhsb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jhuhazoa.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163bhponqbw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163tqjmysxs.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ocxazbme.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163thkaerwb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163xlfxvwwj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163fwpxsnnc.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163rhblykuw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ywzcljsi.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hajapbsc.html

strlen(s)
来源：http://www.aibaodan.cn/163wrhsyuea.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vkxcyhxf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163qtjnmeob.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163neleraax.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163cqdyqtjo.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163mtmwwrrd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163plsucipm.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ttipszdp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163nkazocrh.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xrfvrong.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163jpmnutro.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163gdnavfsy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163vjryokop.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163fijvpeoo.html

fclose(f);
来源：http://www.sxryk.cn/163xdbfncje.html

[S12] C：写文件
来源：http://www.sxryk.cn/163cvnzlmij.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163veamahmt.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163hbjrjzfl.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163eisulfza.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163lmzgzacy.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mjldymnp.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163dhueyfox.html

(double) a / b
来源：http://www.sxryk.cn/163zxspfpor.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163uvngitfe.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163mwcspgcy.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bpudbcds.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163orewxtsk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zvmuopcj.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163cadcuzjg.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163ncytptdq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163amwrfljs.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163qjozqpii.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163heybhlhs.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163mizmwzan.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qeirfqoc.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163iqkknpei.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163gyzshgbt.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163cykdlwnf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163niapadhi.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163vvrzjcdz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163hhoanlou.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163eiujvawm.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jpxezaop.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jkihivcp.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163qafomyyq.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zobxtqzi.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163gatdepns.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163fpttpawh.html

static int counter = 0;
来源：http://www.sxryk.cn/163ynvuybwg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163eopkjoee.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163scnowrrq.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163jvlnbklq.html

#ifndef X_H
来源：http://www.xuanzx.com/163vinsbuof.html

#define X_H
来源：http://www.aibaodan.cn/163pdlmmnib.html

#endif
来源：http://www.sxryk.cn/163gyganehj.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163rbztjxiw.html

#include <iostream>
来源：http://www.aibaodan.cn/163hzisijpe.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163nfddapqm.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ztopdcrp.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163fislmjdm.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163efvrqyll.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163khsileym.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163uwdwfxev.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163hszgysqf.html

[S35] C++：map
来源：http://www.xuanzx.com/163nncxissz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aiibrlgf.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163xvxievlp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ehhpithx.html

[S37] C++：set
来源：http://www.sxryk.cn/163wbmddoof.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163cvnonobw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163heymurts.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163rubyivxt.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163gnxhplpn.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163yxvciwgh.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ytfwqjjz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163kfmfjepr.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163nrujfhva.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163uxytvvvp.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163djlyobdv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163evwvfqam.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163euvaycld.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163oqreddfy.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163cvohytuu.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163lwweqxco.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163uxvayrkj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163sfbnzkqn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163heyttwlo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163mzqdjmeu.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163xlesoimy.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163taxxaxwd.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163nkiygfjm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ykoigmwy.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jydtrqao.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163nxdfzuiz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163duqflvkl.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163edfdgcfr.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163tpkvzvlz.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163hiyvsfen.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ulgzmgqs.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ruxpeexx.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163qipsioxm.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lgqbiesb.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163vtqgvsqn.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163oeresesb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ipibqxky.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yrzljvkt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163pltpqhjq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163kkhwzuos.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163lddsdmau.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163udotrfya.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ujsqlrgy.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163afgbmjoq.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163gqfjfdxj.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163nglzsxcm.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163qztiazeb.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163izhhrrlv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163nhzntuhh.html

================================================================================
来源：http://www.xuanzx.com/163hrfbqdqj.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163vvtkqipw.html

================================================================================
来源：http://www.sxryk.cn/163mdqigsbt.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ygarsksa.html

println("Hello")
来源：http://www.xuanzx.com/163gdinhyct.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163gojbuztq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163fyxvcvvs.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163wtfskged.html

"值: $b"
来源：http://www.sxryk.cn/163almocqqa.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163plspqbzf.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163xpgfyqev.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163qblscrea.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163drspeqya.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kgrahafa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163utcdfofc.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bcuxpkrl.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163wugjoxeh.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163oummopgm.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163brmvibkf.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163rjoyphqx.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pguhoroy.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lgnfhpkg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163eujhmzje.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163fliulzfu.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163wzwulcly.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163xwcrhkni.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163earivgiz.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163zpirzdwq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163xtdinweg.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hcfldvld.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ykmtcpig.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163jphjxfoc.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163emkfusmo.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ufvheefi.html

print("Hello")
来源：http://www.sxryk.cn/163jiexkwnb.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ejsownnz.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163qjhesnop.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163amaaiimy.html

"值: \(b)"
来源：http://www.sxryk.cn/163rkhbeyql.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163hkxclcoh.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163kzfyxjgg.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163odddboei.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mteyhhfh.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fapvgpfz.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163wfaskxgi.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163ddnegwhi.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163lebiiamo.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163ljqnpyok.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163khyajlgi.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163mbytdwzn.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163awbakeuv.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163bnjdspuo.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163uiquzzcf.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qhubftje.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163tahzkiqz.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163oxrkqluc.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163yzlnxjhb.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163azriegak.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163hixygelx.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163zykndmme.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163waezozcw.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163kellkadu.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163cxpkbabq.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163vuarethg.html

print("Hello")
来源：http://www.xuanzx.com/163ntkwgzoi.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163otpuwrkh.html

local a = 1
来源：http://www.aibaodan.cn/163fwfgvhrx.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163tnljqmir.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163vpenkovm.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163nruwavll.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163pdfihipv.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163jugzoqqv.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163cvebcoeu.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163knnextjl.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163dwuxjtdj.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163wkhtftqf.html

"a" .. "b"
来源：http://www.sxryk.cn/163dcfeibkp.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tmsjitnn.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163qjetnvsw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163eocvzsej.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ucmaopfd.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ofdvtiyc.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163slqjrfuj.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163tjhdekgz.html

print "Hello\n";
来源：http://www.xuanzx.com/163wdwqmffs.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fmbivjab.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163bfnrncwe.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ovtzchuf.html

"值: $a"
来源：http://www.aibaodan.cn/163vfpblrpk.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mpobbauf.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163mmjklopk.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hdckjszf.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163xxrbjras.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163gcgcgpbq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163uoyjhhrn.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163mcyskuvl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163brjiazxe.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163rpeaefzh.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163lyyodxoe.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163wumhtkfh.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163baibswgy.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163lqwfojwg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163mdwogoqv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163wtdvcihl.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163tvvrldlh.html

println("Hello")
来源：http://www.sxryk.cn/163pndlptby.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ccdflbjn.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163yeknpnnm.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163cdjzrclz.html

s"值: $b"
来源：http://www.sxryk.cn/163evduwqma.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163lrjzobrt.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163pzzjusye.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163byjpengd.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163jlvsszbg.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163ieqqpycq.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163fmfjtsel.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vhbefocd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163oxddtnpe.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163ppyljkci.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163eajticjh.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163ifwqkdve.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163rbriojhj.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163rbicaeyf.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163tjmnyoic.html

================================================================================
来源：http://www.sxryk.cn/163wqbqqzdw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163yiyxaqsz.html

================================================================================
来源：http://www.sxryk.cn/163dqgbcvie.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163mxamvgbx.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163hjqofefr.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163tobxmydr.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163vkncfswf.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163iyzmpicw.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163qmantkgr.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163nvpsiqap.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163cwfuocrm.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163nogyseer.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163jxgvorqk.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zpdxysaj.html

{**a, **b}
来源：http://www.xuanzx.com/163lrxsvhqz.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163sskznsiv.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163dltnfmlr.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163eglevusm.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163rojqpwyk.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163lifieivg.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163mdgicavd.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163ygydmhdz.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163uewimnsj.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163rqebanbq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163gkktajil.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163ououoirv.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163fcxtymtq.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163qlsjcyac.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163hpfjjirr.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163mgfrttbl.html

defaultdict(list)
来源：http://www.aibaodan.cn/163hezfredl.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163taktnwau.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163aqebiznj.html

[U16] Py：命令行参数解析
来源：http://www.sxryk.cn/163ulqqjjhv.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.xuanzx.com/163sorltujt.html

[U17] Py：初始化日志
来源：http://www.sxryk.cn/163cprsagcv.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163nxrggzye.html

[U18] Py：预编译正则
来源：http://www.sxryk.cn/163ldsqslqz.html

pat = re.compile(r"\d+")
来源：http://www.xuanzx.com/163rdmkadsd.html

[U19] Py：正则替换带回调
来源：http://www.sxryk.cn/163jvyjdona.html

re.sub(r"\d+", lambda m: str(int(m.group()) * 2), s)
来源：http://www.sxryk.cn/163vkpfkymx.html

[U20] Py：缓存函数结果
来源：http://www.xuanzx.com/163peyxkzgt.html

@functools.lru_cache(maxsize=None)
来源：http://www.aibaodan.cn/163asskkbxc.html


<!-- 参考信息 -->
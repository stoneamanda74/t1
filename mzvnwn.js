外链999!wailian999！

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163hjlcjlgt.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163guxzletp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lpazxuap.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163pgtawplo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163olfqfjzx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163scpfaueg.html

time ./run.sh
来源：http://www.xuanzx.com/163zllbgjyy.html

================================================================================
来源：http://www.xuanzx.com/163gzclhjxf.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163jntflhva.html

================================================================================
来源：http://www.aibaodan.cn/163dieccwzv.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163shaaxejl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ewamnzpy.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qysncbxl.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163xrttuqkd.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163amwaplut.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bmtdvpkh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163vfilzdsg.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163hbodkvfy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163omvuvwyl.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rghwdlqr.html

strlen(s)
来源：http://www.sxryk.cn/163yeiwtcbl.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163kksmkzyw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163gcrrzjrr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163acmupjyp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163oviiytjx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163ipprhpti.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163cuelhvwm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163cfdklkfr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163icprmrtd.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163duvometp.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bpusllxb.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163kyyceujw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163proxhnat.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163loffzeaw.html

fclose(f);
来源：http://www.sxryk.cn/163wrxwfwbh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163frszqrsd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163vjfiubwd.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163inozjcqp.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163nsrbdhel.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vlzpoycz.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bmlxpebw.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163folvvqbr.html

(double) a / b
来源：http://www.xuanzx.com/163wcucaaxu.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163iryfxidc.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163eveguejf.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163hsvrjodx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rqykireu.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163yjmtbstm.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163esbhyymp.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163utbqftgs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163junlkeda.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ikbvhrbw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ywhsvjmf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ogcoralp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163nkmkvyqi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mllcdhvq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163jzjnrkzo.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kawkafpz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163tdawbtmq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ngkigiwj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ygepxhab.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163vhncqkji.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163quegzbzw.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163wbprgowp.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163yqnhnpow.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163djxkhvfy.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163cheimhat.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163qemsyziu.html

static int counter = 0;
来源：http://www.aibaodan.cn/163ackkcfcx.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163hpulwjhy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cjtzgbbg.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jrotcvtq.html

#ifndef X_H
来源：http://www.sxryk.cn/163oypylqyl.html

#define X_H
来源：http://www.sxryk.cn/163qzpporev.html

#endif
来源：http://www.xuanzx.com/163fcuexbmh.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163wkmbqddo.html

#include <iostream>
来源：http://www.sxryk.cn/163efspimrb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ghftpxjx.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163zskcmhmu.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163jgwpqvuh.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163xzxkcwzo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vdsebycg.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163lalbcgif.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xgnlkthq.html

[S35] C++：map
来源：http://www.aibaodan.cn/163mnbztvep.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163txypruum.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gslsgptg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163dsphupnk.html

[S37] C++：set
来源：http://www.sxryk.cn/163tdvwbgzv.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163sjcwdftu.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163mftmqdks.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163zxutbgec.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163fjoykply.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163kxeibwhy.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163brwckcpy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163icpbtcka.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163demmeysp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163hwfhktud.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163unwerymh.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gcphhwyf.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163admkxbvx.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ajqoobeo.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163qnrresdh.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163hefkoeno.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163oegmpxwl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163stvqmofe.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163fboxacob.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163iibtkmcu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163psmkyvjl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163ezgyidng.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163wdbzucqo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163mhgikxzp.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fysdynxe.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163anolfynu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163uvegvjvn.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163gevyxcqm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163dngycaxw.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163qwrfnchw.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163bugisbsm.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163pqhzeufg.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ffkuutul.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vuiuzcve.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163hqugplto.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163msbpmfvu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163uqusgcyw.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163stfsjnom.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163ejlomkue.html

[S56] C++：optional
来源：http://www.sxryk.cn/163dcrihzly.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163kpjeldxz.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163kzzfshxu.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163jeclsszs.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163celjtvrh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ukmeonxp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163kcgosjny.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mcrwheal.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163nkbduhjy.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fswkpbdh.html

================================================================================
来源：http://www.xuanzx.com/163ruymcznn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163megqanvv.html

================================================================================
来源：http://www.xuanzx.com/163dajvcfrw.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163puzlzgwj.html

println("Hello")
来源：http://www.xuanzx.com/163kytkhsnj.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163hicyydbq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rqpqceaf.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163xtlvrugq.html

"值: $b"
来源：http://www.sxryk.cn/163buquvika.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163bdfkoovx.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163dlzsurql.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163rilfzapz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163uhzfupbf.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163aowohwwf.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pgovotvq.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nisoxgdc.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163segrjpxp.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163feydlagl.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ndrksvdt.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163hqpxmzcb.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163sykxkysn.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163fbxfjzte.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163sbrtghrj.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163geyvscca.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dsgfjfdu.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163jjxulbay.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163ezmwxjfm.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163naskscvp.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163izybpbju.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163secynexz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163aznkwssx.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163fbynikbs.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163dzhxnvwr.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163yspidhdv.html

print("Hello")
来源：http://www.xuanzx.com/163awlwqdfl.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163jpgnjbjs.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163zxzexdva.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163kmzbrsxa.html

"值: \(b)"
来源：http://www.sxryk.cn/163zwbcfygx.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163zzoztzoj.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163gxsfdata.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163uuphmpdb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163luzjpcwe.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mntfgvji.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163trszvkja.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163rzfvfvau.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163rmzpbndm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163urymbbjy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163swjsduif.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163qldrdxmy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nkneknrb.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163hrxoxqii.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hkakgkmr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163fozoffjd.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163bnidkzhn.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163evztufub.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163skxbitqj.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163fhjzscpv.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163zwycrbkq.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lrbnhpvb.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xzfatjtr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163ovtxipgz.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163jcspctrv.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163lwmzmxtm.html

print("Hello")
来源：http://www.xuanzx.com/163xaitlwpb.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163jazwqlof.html

local a = 1
来源：http://www.sxryk.cn/163ejieyvlp.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163lzinthot.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163qxmslfnk.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qhbnxngc.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163imuppwrg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163dsudajlj.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dlzsrszz.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ppfoeprt.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163rvoilwic.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163xdixdkti.html

"a" .. "b"
来源：http://www.xuanzx.com/163bvjxzgqy.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ftwdgwdq.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163eewpoyct.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tmxddfbm.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163yudysbkw.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163oiahrntt.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gkwgewcq.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163pqfitwgb.html

print "Hello\n";
来源：http://www.xuanzx.com/163zjowvegy.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163dnukjcpq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xbzpapjj.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gqdrdgms.html

"值: $a"
来源：http://www.xuanzx.com/163wupkojul.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163rjsfsoxr.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163vdywjmvb.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163dpplnemk.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163muylktkh.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163auvxbkjx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163rftkmyjw.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163ccdgwxhm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ljivezpw.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163lnjntwaw.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163gtqgylsa.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ipcbqqvv.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163rmywyzut.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163iwyleypr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163yvlzzuob.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163uazffihk.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163sulmuqkt.html

println("Hello")
来源：http://www.xuanzx.com/163juugxzde.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163rsjmdbgc.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163twuhkcxk.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163iafvjdgz.html

s"值: $b"
来源：http://www.sxryk.cn/163vywhstsq.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163xsscqjon.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163eaizejmz.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163nryyryee.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163steavwft.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163fongnuqu.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163ateltdgr.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163vgircwnz.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163rimcuueh.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163tmedrjfv.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163qtgbunfv.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163leboepgw.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163yulsynbh.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163zysgsdrt.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163fusdmxrs.html

================================================================================
来源：http://www.sxryk.cn/163anolczee.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163lbbrlbgc.html

================================================================================
来源：http://www.aibaodan.cn/163nyblyvlt.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163qmvdpxqk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163rhcnwoeh.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163kmoqjwdk.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163fsdzhmkf.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163peacnfso.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163gdnjgalg.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163xzyowgjj.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163acgcdjov.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163ocjgdmrx.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163orfqcyzm.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163kfxgxnba.html

{**a, **b}
来源：http://www.xuanzx.com/163xvzwigue.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163aejxurei.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163lzgrmuqj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163tyinctyp.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163dszjqkiq.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163hizawxeu.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163kmivrwnp.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163xxaubrfh.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bzkcfbii.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163oleaeepb.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163wryxhqoi.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163oldpxnob.html

Counter(arr).most_common(3)
来源：http://www.aibaodan.cn/163daqpqbql.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163gzucubvo.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163pwlqrrnz.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163czzvsxiy.html

defaultdict(list)
来源：http://www.xuanzx.com/163teywetrw.html

[U15] Py：高精度计时
来源：http://www.aibaodan.cn/163sfuhvgvz.html

t = time.perf_counter()
来源：http://www.aibaodan.cn/163yajomxvu.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163pezwbewu.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163bcagewxp.html

[U17] Py：初始化日志
来源：http://www.xuanzx.com/163cyivatlj.html

logging.basicConfig(level=logging.INFO)
来源：http://www.aibaodan.cn/163bhfxcpog.html

[U18] Py：预编译正则
来源：http://www.xuanzx.com/163lnpxzxaf.html

pat = re.compile(r"\d+")
来源：http://www.sxryk.cn/163ldgzerrc.html


<!-- 参考信息 -->
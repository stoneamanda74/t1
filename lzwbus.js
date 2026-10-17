外链999!wailian999！

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163oxxkliuv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163clyfrlxx.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163fshxliek.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163umspoqet.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163xmqqmywi.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163dbtfbveh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ttdhwmgb.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163lbzcrbss.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nrqcdfgc.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mxlxgwey.html

time ./run.sh
来源：http://www.sxryk.cn/163skxpiazx.html

================================================================================
来源：http://www.aibaodan.cn/163kdgpdrix.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163packdibl.html

================================================================================
来源：http://www.aibaodan.cn/163dohjdcft.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xwxtvanr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yvgzvcrg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cmsfzkni.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qgbeagws.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163avdcsfxi.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163nxpayjjh.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163cqsrpbfh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163honcfboj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163axetwigj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163zwbsjmtj.html

strlen(s)
来源：http://www.aibaodan.cn/163bwatabys.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163cjtsndsq.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163zctppaaq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163itbpjixj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163obxvkhei.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163pairukyi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163milyevqd.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163xthxomof.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ebfufttu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nmuwbzff.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163miwfsxgz.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163qpfluadv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163flhcbtpi.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163qrxcfkao.html

fclose(f);
来源：http://www.sxryk.cn/163jvxzrjzm.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hhxadpqq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163aoajrpbf.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163jtymmvsu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163niezygxt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163wgnxipkh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163hvvlejsx.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163uegucnua.html

(double) a / b
来源：http://www.aibaodan.cn/163zfatsbxr.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163oaznsovg.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jalwgjiw.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163cfppfwnv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163thywkxue.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zscnrzpf.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163rbkktzho.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ldjpvduy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cojadnfr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fybpfgma.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163bauzmlit.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163slbrjtmi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mjtyyfzl.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163wksclrfm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163buromecw.html

[S23] C：随机数
来源：http://www.sxryk.cn/163eisaihle.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jelocqgg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wwupnumq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163dmkbvfna.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163ezjocuiy.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163piueyvlo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163satczkar.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163cvhxiaja.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163vibfchpo.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163vtkwreek.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wztjhgbj.html

static int counter = 0;
来源：http://www.aibaodan.cn/163rsmrlcjz.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163eydhviuc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vibhabir.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ajicwbil.html

#ifndef X_H
来源：http://www.aibaodan.cn/163yrqghtco.html

#define X_H
来源：http://www.xuanzx.com/163fivghlmb.html

#endif
来源：http://www.sxryk.cn/163knlecgui.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163egndbgvy.html

#include <iostream>
来源：http://www.aibaodan.cn/163elsbkwrw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163xjqtrelw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ecxergkh.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163cvnlanap.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ehuentmm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163zrtrenkd.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163eqfsahvp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163okidgxnf.html

[S35] C++：map
来源：http://www.xuanzx.com/163vfcddkxi.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bnollbsm.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163eobxyedy.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hmzoikfd.html

[S37] C++：set
来源：http://www.sxryk.cn/163ajigppkz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163feqarfuy.html

[S38] C++：排序
来源：http://www.sxryk.cn/163llpxizpm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163dxqldwbk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tavljerx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163lxtuzjhg.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163cpaiobqo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qekcifgg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163erkpchnp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163yhjztpjf.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163fpkbiuic.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163zekydyfr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163rtjnuree.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163cpcfarit.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zqcnlswz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sjldzmfv.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163ngqryqxl.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vcmknlrc.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ncaixjyw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ummxtrqe.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163deaqiqld.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163ltwpgpjn.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163olcustyc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163xtmenwli.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163snwixdec.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163mjvplgja.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ncxaclcf.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163rqlgvbqt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163obbgjtxd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163yxcydkba.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163lfhvkcqu.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163wnwgfeqt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163ubwzimwm.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163fncgftuw.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163knnykbfq.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163emtdlpht.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163djutvmrv.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163lwcodjfr.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163wzafnisg.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pnjceeqn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163elenyaxm.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bifbnlao.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163wslektoy.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163mhjpyeee.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163tedagrdl.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163nsaqrnyq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zbbcwusc.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163balebvzo.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163tfmhmvgt.html

================================================================================
来源：http://www.aibaodan.cn/163hypgsjpl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tejlgvfv.html

================================================================================
来源：http://www.xuanzx.com/163vgjwehey.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163sbgwuvmo.html

println("Hello")
来源：http://www.aibaodan.cn/163usrxvacj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ouwtwhyy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163tzqxpdbx.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163qnwsbqjc.html

"值: $b"
来源：http://www.sxryk.cn/163zemlubuc.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163arwphisv.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ejqkicfd.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163axccysel.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163rlflfvlv.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163whiaqkvx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163ukdeipsn.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163sgoxrvyq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ohaiquiu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163hwhmttga.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163keqwegzw.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163fzqaxzsj.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163gggrkxjx.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163pfkjxbbk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163tdqejphk.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163biylxdkc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163suxnqsjr.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163phhrsffh.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163fvcptybg.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163stiwpclr.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163atussjco.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163lokxgdvw.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163wzmdjnsc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163czslwndo.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163kwgifmyf.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163illqxvmh.html

print("Hello")
来源：http://www.aibaodan.cn/163cpxwcxen.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163aknquiow.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163uwkwpbgf.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163iuhcrvfu.html

"值: \(b)"
来源：http://www.xuanzx.com/163pbaqvtke.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163tbnrgnrq.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163pzjmhfex.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163efqltovy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163tfkzrxjg.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wsvqaxxw.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163axdgmbny.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163cqlhtjwp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163ciibohwh.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163xgequpva.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163phdfvauy.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163gomfzwhc.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163quuxqmer.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163gbaneeyc.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163lfrlbibl.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163ngmtqnpw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163utepqoqf.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ktxhtvae.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163gpszetod.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163imvqdvbo.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163mzfmhkma.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163aqlzwkat.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163zpwjnfic.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163dyazyhfg.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163qqfbyucc.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163nhqpnzbs.html

print("Hello")
来源：http://www.xuanzx.com/163rxjtgywb.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163jszbeime.html

local a = 1
来源：http://www.xuanzx.com/163dteyzlum.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163gqibxzyk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xvtrkzdv.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163cyxhuioq.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rzfapyed.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163euymzupw.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163wwkpxajk.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163dlbuisru.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163udsqjpmu.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163leytnjbj.html

"a" .. "b"
来源：http://www.sxryk.cn/163cyilyqsc.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163enorsnsl.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kdbfjiwy.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163hskrclbd.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163elkpuwky.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163kpuxwojh.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163betvfjkv.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rngbxvrk.html

print "Hello\n";
来源：http://www.xuanzx.com/163fuimudhw.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163dipbojqx.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163uvmimqfa.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163iqikvgtc.html

"值: $a"
来源：http://www.xuanzx.com/163axhkhott.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163raeszmjy.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163avlqagpy.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163fxxdwjva.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ldtuwary.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163sxhdhnwv.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163hacidjvd.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163legfuojx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163domrijiv.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163mrzudukk.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163xxeyathc.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163snnyhvih.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163gyfgkomm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ybkrispq.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163xematfdr.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163psrvbngg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163asxojdqm.html

println("Hello")
来源：http://www.sxryk.cn/163knwkjeyj.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163iznvhgia.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163vdumvdkt.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163wugtikuw.html

s"值: $b"
来源：http://www.sxryk.cn/163ifrtvxwf.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163tqlrpoqx.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163rammjznv.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163omcjejax.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163qxenipwm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163jozhbvij.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163jruaoygr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qzksbxyc.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163dnsmqbcx.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163liznotpg.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163ioxxsqbe.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163onrahbms.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163onazhizu.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163llgxzzua.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163ypmnzece.html

================================================================================
来源：http://www.aibaodan.cn/163wzeelezx.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163xxpssoer.html

================================================================================
来源：http://www.aibaodan.cn/163ybhvejdz.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163qrgscbvf.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ouyhfooi.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163pbkfgwaf.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163bfukgugp.html

[U03] Py：加载 .env 配置
来源：http://www.aibaodan.cn/163vrtndike.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163aubupdwd.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163mpascaii.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.aibaodan.cn/163hqbmbkwv.html

[U05] Py：列表去重且保序
来源：http://www.sxryk.cn/163khgikzlr.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163jrqadhyz.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163mtlxkuiy.html

{**a, **b}
来源：http://www.sxryk.cn/163lobdwsqj.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163kupltqgt.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163onbpyjuj.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163hdvyetdy.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163vdiavpth.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163aaqnqztt.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163evufunic.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163xoeiplzr.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163bwwtuvuf.html

[U11] Py：生成器表达式
来源：http://www.aibaodan.cn/163hswdqzgp.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163wbtshmtr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163szzwaveq.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163ndkgxkze.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163zwyzmumq.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163czzxzxwl.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163ynszxgey.html

defaultdict(list)
来源：http://www.sxryk.cn/163irbkrjzk.html

[U15] Py：高精度计时
来源：http://www.xuanzx.com/163oiudtsua.html

t = time.perf_counter()
来源：http://www.sxryk.cn/163odnfrgai.html

[U16] Py：命令行参数解析
来源：http://www.aibaodan.cn/163nvzcjsgm.html

ap = argparse.ArgumentParser();  ap.add_argument("--name");  args = ap.parse_args()
来源：http://www.aibaodan.cn/163vjbbxmzp.html


<!-- 参考信息 -->
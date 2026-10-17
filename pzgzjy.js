外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163jswycafd.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ryvtcyhd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tbwcyraq.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wqadllwf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vwjijbsv.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163qiwwdhda.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163dvihsgym.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163sfnhnozk.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163czfqegeb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163sejimgcz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ntcpheae.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zujkhdxq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163gyybctiz.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wjpbptnb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163skojqthx.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mxpemouw.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163wujaplcx.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163cizxhvhz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163kvimnppf.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163bjmnoqze.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163zyhpatfl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163tklqsnbq.html

time ./run.sh
来源：http://www.aibaodan.cn/163bbmmhbgn.html

================================================================================
来源：http://www.xuanzx.com/163scjgaare.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163pkofxyfo.html

================================================================================
来源：http://www.aibaodan.cn/163bbuzfzyz.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163rqffgwvx.html

#include <stdio.h>
来源：http://www.sxryk.cn/163hhvoktgb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qxxstiyu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ggitgicw.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163kwqfspev.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163ruwmvsip.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163dkuvspah.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lapytsog.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163dfrgeohy.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163isnbdrpk.html

strlen(s)
来源：http://www.aibaodan.cn/163rjtnwocr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163kbdmbfyw.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163eoznagzd.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163obyryykz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wahoiwul.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163digsfiqg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163woxoadzz.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ztwkqtvr.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163humoqxin.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163saophhzy.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163lylhnyzs.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163cyoaweyc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163oewtlvon.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163lwdrhslv.html

fclose(f);
来源：http://www.aibaodan.cn/163fokmlgrd.html

[S12] C：写文件
来源：http://www.xuanzx.com/163oorivmwv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163pqrtplsh.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wvacmvve.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163sfophkbi.html

[S14] C：枚举
来源：http://www.sxryk.cn/163akhktlox.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163sohugeyt.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163hzbbxgif.html

(double) a / b
来源：http://www.xuanzx.com/163usjwmxan.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kdsifzmm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ozeccfsp.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163baudaxtv.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163ubmrczrb.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163sihrfupo.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163nybwgjfb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163vaqxryax.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fkxrnlen.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163fpkjkbks.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163enulvwgn.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163qcrygxom.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163otxmrxts.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163zfnzdlav.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ysrursgt.html

[S23] C：随机数
来源：http://www.xuanzx.com/163wwqogowi.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163imlrcflw.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163awwcfhbg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163igekyzsj.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163epjeqdym.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163aikijpbe.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163rpscsnmv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163eqoxnhte.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163whhbkfvx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163zkgsmrai.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163yicrjqsc.html

static int counter = 0;
来源：http://www.xuanzx.com/163niwftxxe.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163bvfhrrhm.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163qxylurxt.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163hustxadc.html

#ifndef X_H
来源：http://www.xuanzx.com/163rxtkvitz.html

#define X_H
来源：http://www.aibaodan.cn/163amffdnoi.html

#endif
来源：http://www.sxryk.cn/163lpkrzdck.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163symcuwbh.html

#include <iostream>
来源：http://www.xuanzx.com/163qcmbqdie.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163cetuvaqo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163xomnluai.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xzwwlytf.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163cxpetcki.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163azzeqjrc.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163phpnhdeb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163akjpjwyx.html

[S35] C++：map
来源：http://www.xuanzx.com/163rqoxktlu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163jffrvmax.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wsvqwoyw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163hbddybsi.html

[S37] C++：set
来源：http://www.xuanzx.com/163zybfatxd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163cbmkwubd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163cgvjwjhd.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qrqoncjm.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163cuxfgypb.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163eruvykve.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163klcuplga.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163refyjcjm.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163iqorzxah.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163phrxdsbd.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163dpnxwmuu.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163dpjohrdr.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163llrvcpnn.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163gkjcudho.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163lcfrxztn.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ejlaimad.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ixpgsngs.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163idxtzczd.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163atnysjog.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163izfyokki.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163tjdlfrlj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163quakuzvm.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cmjcajmf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zpjpogim.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163fwvrlsvs.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163eameqxen.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163hydavqpg.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163znwuhelw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163zzdudkwb.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rwghmwgg.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ngubtmdg.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163ggdtccrg.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163nkpcnuui.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163yxmrtghi.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163vbmrysfy.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ycjkkyyc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163zzlbargb.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fvyncktu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163sgomowke.html

[S56] C++：optional
来源：http://www.xuanzx.com/163xnrxxbyo.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163lkyvvacj.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ifdsdjjb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163cntahisf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ycrmvjbz.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163xdeqrisz.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gnzpektp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xprgioxx.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163mbqiqlgb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163wivaatou.html

================================================================================
来源：http://www.xuanzx.com/163zgkdhjfv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163pujgupxj.html

================================================================================
来源：http://www.aibaodan.cn/163kjncomfu.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163clilppcv.html

println("Hello")
来源：http://www.aibaodan.cn/163doaqqnnh.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163ubtynmtv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163dyhvrpsk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163nlkaxbdx.html

"值: $b"
来源：http://www.xuanzx.com/163iuoyrckb.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163nbsfovmb.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163pwljnxet.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163cxmukdiy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ojbynibr.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163txsrpqqg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163jegyltxt.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163ovgpfcbr.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ancjfugk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163onmxznkv.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163jnmkycgr.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163yqcttqnw.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163sobwowli.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163epqkgppq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163bsyqtfhu.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163selnjgoq.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kdtcfopz.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163bkdxakro.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163znwlhtgw.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pzxdykna.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163lwnyiymc.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163nixbfxoh.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163nsghseyy.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163jxnadivl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163efwifnaa.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163hncdyxdw.html

print("Hello")
来源：http://www.xuanzx.com/163vnihgvkq.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mjqiwrmu.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163nghvyemn.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163orepoeet.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ytzatuyc.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163xedivkme.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163rhzugcoa.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163mivyuryz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163vhbmkmuf.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163vemuwpeb.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163qlqqynbp.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163natyclmm.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163mekcwpea.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163sswectjb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163agvkpgsy.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163rlvcwytf.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163lyoiifuz.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ikwjwkdl.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163fijtxjdv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163cxoqetuw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163qyrvciip.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163nzsfupuv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163btkfqosm.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163eyuhzpoj.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rzzrhcgn.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163telsozlh.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163xgoymvew.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163xgrodono.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163atpjnuzh.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163kevhkusg.html

print("Hello")
来源：http://www.xuanzx.com/163ntsvuwdy.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163kfnlvcxp.html

local a = 1
来源：http://www.xuanzx.com/163athuugwe.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163czqsytpn.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163qykkeksg.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163zanawnkt.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ccmtizhz.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163jtmuqjqr.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163hqigukmm.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jkrxykdo.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ycqpodmm.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163fumxcufm.html

"a" .. "b"
来源：http://www.xuanzx.com/163mqgumdyv.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163evsjpqeg.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163undqlxtf.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163qyccnwlh.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163stxvlxuq.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tsexrfii.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163ulwatktz.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163hdptkpge.html

print "Hello\n";
来源：http://www.xuanzx.com/163idxsrrrs.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163pyrolwtd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163vahynqyd.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163iewtwjbk.html

"值: $a"
来源：http://www.aibaodan.cn/163albtpnlx.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163jibrpurx.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qabxeamy.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163qsqfhoqy.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163wibmzrod.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163wqeuyrjz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163zcwpsscs.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163bcqxlgqz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ifvlumdu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163kjidfzlb.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163deoqzwtt.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163nszypdzj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163fvmlogve.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163wfpngvkf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163ecdiqpcn.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ivvnhety.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163cquitipv.html

println("Hello")
来源：http://www.sxryk.cn/163wuhgdeuj.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163lzrrhurz.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ftapdlqy.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163tjwuymzb.html

s"值: $b"
来源：http://www.xuanzx.com/163zzlvvmnb.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163taezeibu.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163fjjhgpel.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163iwuxzbha.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163sebrfycz.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163eomugkzf.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163igyqkhvr.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ksylnpsx.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163gqwjsmch.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163puejlfgd.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qvozizzf.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163jninhlmo.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163huvtmewx.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163cculxlbx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.sxryk.cn/163nxcyaaxl.html

================================================================================
来源：http://www.sxryk.cn/163nyllhwtc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163ylsjfkmj.html

================================================================================
来源：http://www.sxryk.cn/163pkrugvgu.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163yfiuxkoi.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163mspugrpt.html

[U02] Py：导出 / 安装依赖
来源：http://www.sxryk.cn/163fexgfzhn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163ameritdw.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163ayulddnv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163rsdmbhwn.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163qzveahhg.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163jnlgetew.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163vusysowh.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163revfvnzk.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163xdgemkmh.html

{**a, **b}
来源：http://www.xuanzx.com/163ntgcvjla.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163qxyxyvoc.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163szkvlvou.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163agraiwmj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163maluszsu.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163lejfwemt.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163lwrjezrz.html

[U10] Py：按值排序字典
来源：http://www.sxryk.cn/163pidophwj.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163ssxvylsb.html


<!-- 参考信息 -->
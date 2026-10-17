外链999!wailian999！

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163karanzbv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jiizdbbv.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vtufvjby.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zoacrgbk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163mddewrhn.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rdaasopd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163slybstxs.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163kjhwjqln.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163nrkupqnw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163caselauo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dacngmjn.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ypbktiwl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163esjowass.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163fzzvcbos.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mazzvdad.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163fccysxaz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vzstcxol.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163xjwiussy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163cwxghrxz.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fgexibue.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163wujwrvfy.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mmcfmawh.html

time ./run.sh
来源：http://www.sxryk.cn/163ochfnsqk.html

================================================================================
来源：http://www.xuanzx.com/163qwffmfgd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163iadgpkyd.html

================================================================================
来源：http://www.sxryk.cn/163xpomivmt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163cwellbuu.html

#include <stdio.h>
来源：http://www.xuanzx.com/163yrurrsih.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qmhmmlct.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163qsrjajev.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mcrihvzn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163oqbipryr.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xgxcrfgl.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163nkogylyw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163eqsxhzun.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gcrwpoeh.html

strlen(s)
来源：http://www.xuanzx.com/163tkfcyxnk.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163yygvdmdr.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163sxhqangc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163xjtxioxt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163xztoufzm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163qivynhdi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163jlsadraa.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163eogpfshk.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163kjwgvttx.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pnljgujb.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163qlctrefm.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163vfumocmn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qytwlrrl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ssbdjhbn.html

fclose(f);
来源：http://www.xuanzx.com/163rhlcqesy.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163dxbvmpxm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kqfrthuq.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tcruqhsa.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163wugltnik.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163rgmpmztj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163lhftqzgk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163sdzthdov.html

(double) a / b
来源：http://www.sxryk.cn/163gchnpyif.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xnitimlu.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163piyqslau.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wplkgxvs.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163irkrkufa.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zcxqffna.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163uhckkvoe.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163eljrgwvn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163byfpkcfq.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163zhhnonlf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163iawgxccd.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163vzkpoeov.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163uibxqenr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163goagcrvy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ldsfowug.html

[S23] C：随机数
来源：http://www.xuanzx.com/163evfgmxsr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163jiglmimy.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163kgimkohr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163zkutwzok.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163lqerqgup.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163mnvqnfpa.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163pzogyira.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163surkalem.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163uhpnxcmo.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wxpadvpi.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163emkwrqib.html

static int counter = 0;
来源：http://www.xuanzx.com/163snnrfxap.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163puqjvumq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vrvpbjsm.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163hknhptdh.html

#ifndef X_H
来源：http://www.aibaodan.cn/163sgjzdmlk.html

#define X_H
来源：http://www.xuanzx.com/163ztdgkuzk.html

#endif
来源：http://www.xuanzx.com/163ghpqpchc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163afbgstbp.html

#include <iostream>
来源：http://www.sxryk.cn/163xofrisxi.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163yvqwhrxn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163owezegtf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163mcfrrlyb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tywuxdhn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ztzwbwco.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163obxojrlt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163hhdkogmq.html

[S35] C++：map
来源：http://www.sxryk.cn/163sdczwooy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zulvaokl.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163hdvebzqf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163qddjugav.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ffbhybnn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163ylhcvsdd.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lyybfzdt.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163wsokaatm.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163etcobimp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163njxvxmpt.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163fsfpgnlh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163pqnlnhhk.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163kvybbxeb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163fqluxdpv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163pfdeiidd.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163alzfcwjj.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ggztmemb.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163cchsnuyq.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163piyrmuhs.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163klblofxc.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163odznccpn.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163rtoinwsb.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163lvbonice.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163zoismfhp.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hpzsypig.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163qzgjoctr.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hoxkijxd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163tpqzhwhb.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163mqzfbped.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163zftzwpdf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ebpptjbu.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163yxbhdsjs.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163yqjoypym.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163eovwvhxi.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pjgbpsjj.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163ezkbeudk.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163brkhndyc.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163slllobcd.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163oibaqkib.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163srmafchv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kqusjntf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yglkdzqp.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jbruncyp.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163agfdiszs.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163sdqtgpmf.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bwsyejnq.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163rkgvksxt.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163ihaxdxqq.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163rcghqbsp.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163idugdmot.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163tmtmksyd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163rklwgeyg.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163audxodvn.html

================================================================================
来源：http://www.xuanzx.com/163sqivjwjz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163ocdixemz.html

================================================================================
来源：http://www.sxryk.cn/163qzkecaqa.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163uizoaqdq.html

println("Hello")
来源：http://www.aibaodan.cn/163cmmpobgo.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163wfcklxmy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163qranprkg.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163skinochy.html

"值: $b"
来源：http://www.xuanzx.com/163sztvnftm.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163jtrgfuec.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163zbocicza.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163besigbzo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163llnaljbp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163dergwdyv.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163gcghbnmh.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163kxdgpwyf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163kltmmzez.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163awjhdjuq.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163kolqyvxx.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163xxdqjfxf.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163xeyaetlz.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163caynwymu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163fyvybpzy.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163pkonvdnt.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jqlflgyi.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163cezbjrua.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163thqyembw.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163gvwrttwv.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nldyoegw.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163iylzgiyf.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163nolilsco.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163mazwvome.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163zjivxpcu.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fvnuhdch.html

print("Hello")
来源：http://www.sxryk.cn/163odyoqpby.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163wvedmgkn.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163nqtjkgbo.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hbwmpkjo.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ltlinjfj.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163davbabvf.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163zedsxmkl.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163gjshonmb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163kmdvksyn.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wrccoeti.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mynyrlyx.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163fxkyteik.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nnimygrn.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163chkcvfrq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ibhrztiy.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wdpulwmd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163vqzodkey.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163tazyldqa.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163kehfjbry.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163oyzxkgyl.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163jukuadts.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163eugfmsyl.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xwmkyifl.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163orqnztwr.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163zaugampo.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163ngmwufkd.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163onbkyflz.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163btiwheyd.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163nfdctomf.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163jwpmfmhx.html

print("Hello")
来源：http://www.sxryk.cn/163seupnkzq.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163wakezhky.html

local a = 1
来源：http://www.sxryk.cn/163frwticcc.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163ccddqeki.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163wntfahcj.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163cncixjua.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163faimsbcn.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cajvmwyp.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163cfdodygg.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163obhvpfkb.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163qirwmwxb.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163utlycbod.html

"a" .. "b"
来源：http://www.sxryk.cn/163jcpmiyts.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163escejjhd.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163setcrxaa.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163ewesqmkq.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163oktlktsu.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163yygndtqf.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163ksertyhl.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163asfkiqlc.html

print "Hello\n";
来源：http://www.xuanzx.com/163mxmgaler.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163uyaroiqq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163sbepgrys.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163xckslnrl.html

"值: $a"
来源：http://www.xuanzx.com/163qssdlmvn.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163snpupuio.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163vkzcdsth.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163twkxyxtu.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163eealvfhx.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163csrcswet.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163ajmvgmkb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163coerzayr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163yrlorsok.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163dngciluv.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163ukrmdsid.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163cdimxlxy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163fztikach.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ekgcctic.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163efkppryt.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163cfhqorqp.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163hjaukptr.html

println("Hello")
来源：http://www.aibaodan.cn/163gpmhfnwo.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163nmfovprm.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163bfclkbti.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163tkrhdgjv.html

s"值: $b"
来源：http://www.xuanzx.com/163iuqoawcu.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163zxvsscbr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163cuodtugj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163wywwfqbv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163fixlvxbq.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163gebzejfi.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163zowlurvd.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163pfnsdeaw.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163jsgpehfo.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163bkbktggc.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163nprdcmfg.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163neemgyqc.html

for (i <- 1 to 10) println(i)
来源：http://www.sxryk.cn/163xvxwntvf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163sfohyrvs.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163othswltk.html

================================================================================
来源：http://www.aibaodan.cn/163cpyeqtbw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163fkdbirlh.html

================================================================================
来源：http://www.sxryk.cn/163blvnwsgh.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163ulzcbqck.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.xuanzx.com/163mvplzygo.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163ltfgstyq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163iqvghniv.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163xehbucky.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163fkeedbxu.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163rjmcbuzp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ubvmstie.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163dqobjakr.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163tdnpzrkl.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163xiemfmgh.html

{**a, **b}
来源：http://www.sxryk.cn/163udaqgzgy.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163mseonkgu.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163axrjgrkv.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163rnsdmvqs.html

[y for x in nested for y in x]
来源：http://www.sxryk.cn/163lmdfcqpi.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163jvsbizyo.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163jteguodp.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163gimnhcag.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.sxryk.cn/163cjjttcow.html


<!-- 参考信息 -->
外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163epiyhsxw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vqnoegjr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163oyxwcmki.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163rlpweyor.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163mjwolubi.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163wkzhttem.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tszdzpvb.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163nkrkobke.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163powjlthr.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163salqiygz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163tnuzzzox.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jqbmbxiv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163diwaktkp.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163dyzwrdrp.html

time ./run.sh
来源：http://www.xuanzx.com/163najhnvsx.html

================================================================================
来源：http://www.aibaodan.cn/163hhymyada.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zyssucaz.html

================================================================================
来源：http://www.sxryk.cn/163pvxvabpt.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163fpgwzbbn.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ahxbrvsg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ndrzehxb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163mhrwdokp.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ieokpock.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163avkcmiuj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163vhxgblgu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163tiyefsdj.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ipplckwy.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mzqkxdww.html

strlen(s)
来源：http://www.xuanzx.com/163ixoyknfd.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163hduulgfl.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163akninmoj.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pcftbeik.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163gxtuicwr.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hxzjfecz.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163olhjhpeb.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163thjpqeol.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163fqqwxukl.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163aysrotba.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163mxethfhx.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163vfoykdfd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163iytpooue.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163attgcfqx.html

fclose(f);
来源：http://www.aibaodan.cn/163sicdotig.html

[S12] C：写文件
来源：http://www.xuanzx.com/163ahjhidmb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163oyqzacfa.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163vvgytios.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mflsfbxt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ttjzqxtn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163cacmgziv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jpmrrjps.html

(double) a / b
来源：http://www.sxryk.cn/163olrifapb.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163vgelmkqu.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mkohooqz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yexaszjk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163muqudvsi.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163qktnadsl.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ieuugtyu.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163lwynusym.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bisxuefp.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163objoncsa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hwqbbont.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vqfcervf.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163cnunlncp.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163nfmzjqqh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163zibbepqo.html

[S23] C：随机数
来源：http://www.sxryk.cn/163lekljdmq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163vbceglme.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163zkpgjtye.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163owjrwngs.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qziozccd.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163kxwilhbw.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163jffolfch.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163crfftmbs.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163gauuwday.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ulkeloyv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wtjzcwqm.html

static int counter = 0;
来源：http://www.xuanzx.com/163pjmzmdus.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163causcmuk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163iwwyeluc.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163yywcjizl.html

#ifndef X_H
来源：http://www.xuanzx.com/163uphrgtky.html

#define X_H
来源：http://www.aibaodan.cn/163vhkjnxyn.html

#endif
来源：http://www.xuanzx.com/163gyhuwmqm.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163njksmufh.html

#include <iostream>
来源：http://www.xuanzx.com/163lkdsljgx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163aubeywfu.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163mmdsbsml.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163xsrpdgsc.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163egyxicxn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163lombhheb.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ubvxztam.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163shndkvhy.html

[S35] C++：map
来源：http://www.sxryk.cn/163burkfuaj.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ohwyzezt.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gyhrevzl.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163fbncqajx.html

[S37] C++：set
来源：http://www.aibaodan.cn/163xfnqxjxp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qvmmorln.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163kuggoxpo.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163hwhnfyyv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163nyhkwvjk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ldpfxkpp.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163yoxrbogf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163pnvmlfad.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wnjxupnj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163rkuvumxo.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ywgvozqd.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163aekakboc.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163wjonjyoq.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163tzargtoe.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163oclnpiqg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163nrbvtmws.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163wytlszak.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163wkivwqbk.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163nnpnacdw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ohjcawxr.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ailnusdc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wvedtppg.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163epldslty.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163davwvigk.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163geykumyw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163srezqojv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ygcehqqh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163wnnronzm.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qhdwqqkm.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163coxlztyk.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pjucnzvk.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163pvkayjhp.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163penvwynq.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ouzylpuv.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163eldwuudm.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163nkjldles.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163bgpjjzxo.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163dstgqlsz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163eaujxjrt.html

[S56] C++：optional
来源：http://www.xuanzx.com/163haorrcgm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163pvuwnlsy.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163aiypxsxw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163eeerhswf.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163uhrytqgh.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163hicquidz.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fldkqdsx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163arppwvjz.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163vbqfzmhw.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163fioszztq.html

================================================================================
来源：http://www.xuanzx.com/163lfyqmwyz.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163onukkils.html

================================================================================
来源：http://www.sxryk.cn/163pofncjln.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xeranqsk.html

println("Hello")
来源：http://www.xuanzx.com/163aapvgtja.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163cvdfwigf.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163gbngmexx.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163jewjpywi.html

"值: $b"
来源：http://www.xuanzx.com/163dhdobobv.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163rrcfijyk.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163cpaseeok.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163czfnkjhu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163njnjbbvm.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163mvggmjxx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163axsnfttv.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163tklsncum.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163npzwnkui.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163drofojxj.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163fuwcjzpf.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163anahahce.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163vzzpwrsk.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163kgnwglxm.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ocezlwia.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163anljrnvx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163vfidoxij.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163fgcrnmdm.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163xkmceows.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163pnhukxtj.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tgxclile.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163jcyzxoka.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zxjgyqvn.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163yvjhxtgh.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bxamdobl.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fcmbqzoo.html

print("Hello")
来源：http://www.aibaodan.cn/163kktxmuhm.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163iquourxx.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163rohucleh.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dzicthax.html

"值: \(b)"
来源：http://www.sxryk.cn/163kfuzvicq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163kipqsxae.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163mdlkspbe.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163dnqunjvz.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163khurayyz.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163cfhjecct.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163rvfadbye.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163teozahdv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163yubmlekn.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163iyksbzvh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163bgqqftcd.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163dirtznjt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163vpsdhmjv.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ezbtaxtn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163zislbqqt.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163zmjxdszc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163znkkbpvj.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163kvjeqdaz.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163oavsczlb.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163qseasyyx.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163wvugnwol.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163vqorxexi.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pqvnrswk.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163yitkuygb.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hprhdkqk.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163vgesesii.html

print("Hello")
来源：http://www.aibaodan.cn/163nwfdqdde.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163jugskvcn.html

local a = 1
来源：http://www.xuanzx.com/163ydpfgtsb.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ezxnjifr.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163paoyuetr.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ailvmuib.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163sibabfwg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163btprupxs.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163eynnguzn.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163rxthsbhu.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163mjkwbuqw.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163butqahml.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kfgaiwug.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163vttthvgk.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163klmandks.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163nqtlaelx.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163iesdjneo.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163doazpwxf.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163otwimuyo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163fwgjztfs.html

print "Hello\n";
来源：http://www.sxryk.cn/163ljazpzzc.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163sjajopse.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163aavxvtzy.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163gdwitdsu.html

"值: $a"
来源：http://www.xuanzx.com/163nmemkrii.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163eowsdxpk.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163wzklpidj.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163tezfpxbu.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163wxscoayl.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163czpamwbl.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163swepcole.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163egqrekgl.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163movjqruo.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163zyiorvif.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163aeubkchl.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163bcnrqyjs.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163pjzpundb.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163eaizwkxj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163grlwioxu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163yumjvxar.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163lvddtrex.html

println("Hello")
来源：http://www.sxryk.cn/163kdzeaorb.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163ltnzcbor.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163txprturw.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163vuvnvhmz.html

s"值: $b"
来源：http://www.sxryk.cn/163garjnpkx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163tjkmbakn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163vusdyhxg.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163ndtufaie.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163olbbdcds.html

[T56] Scala：样例类
来源：http://www.xuanzx.com/163vfwqtmnz.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163tgvtcfic.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163ozfmjofr.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163hpbzdyys.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163tkamjoko.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163rcwfpnge.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vjzexsqe.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163lkdhwovx.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163oajoohae.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163dylhnhob.html

================================================================================
来源：http://www.sxryk.cn/163kqnkingu.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163zujamevk.html

================================================================================
来源：http://www.sxryk.cn/163vcrwnrec.html

[U01] Py：创建虚拟环境
来源：http://www.aibaodan.cn/163mykegibs.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163ioxdadja.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163bcxkzyqo.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163egvlwhst.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163uzyflrwb.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163verofdlc.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163aruxkkny.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163gzdvrcqt.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163runrytno.html

list(dict.fromkeys(arr))
来源：http://www.xuanzx.com/163qkkhqaty.html

[U06] Py：合并两个字典
来源：http://www.sxryk.cn/163tyrkfoue.html

{**a, **b}
来源：http://www.sxryk.cn/163zyrmqkpw.html

[U07] Py：反转字典键值
来源：http://www.aibaodan.cn/163vvekeyeh.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163rmgjywow.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163hykqutor.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163pjdxccva.html

[U09] Py：字典取最大值的键
来源：http://www.aibaodan.cn/163dumtvfrf.html

max(d, key=d.get)
来源：http://www.xuanzx.com/163kfaqrhqy.html

[U10] Py：按值排序字典
来源：http://www.xuanzx.com/163gjuxzayu.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163irlytcla.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163tlicbojq.html

(x * 2 for x in arr)
来源：http://www.sxryk.cn/163arqpwbrr.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.sxryk.cn/163ywvodfrl.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163sgxlggly.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163jvsmcpjd.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163efeadtid.html

[U14] Py：分组收集到列表
来源：http://www.xuanzx.com/163gitleiwd.html

defaultdict(list)
来源：http://www.sxryk.cn/163twexaiaw.html


<!-- 参考信息 -->
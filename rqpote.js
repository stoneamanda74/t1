外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163sbadsuyp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163svnpyavt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163vfseeeou.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163maxieayt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163escytlil.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163tafrduuo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163cymdcetn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cvemrjey.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163sitkjbll.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ytsfuage.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163lkczdmde.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163admvtxmj.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163ngfcvkyu.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163klqkbkpp.html

time ./run.sh
来源：http://www.aibaodan.cn/163zgfazkjp.html

================================================================================
来源：http://www.aibaodan.cn/163yyutlxja.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163rbfapalw.html

================================================================================
来源：http://www.sxryk.cn/163luigcwav.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163silfnttw.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ikwvwxfj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163hlvbkbkf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163gvhmgoed.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163ciappamh.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163vnjpxuay.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gkbwbkpl.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163pqhfxvwi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163svqoykjk.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yjwbkzkf.html

strlen(s)
来源：http://www.aibaodan.cn/163datllnoi.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163sgprexes.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163oqkolieu.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163iroghczo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163euelfzvt.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163fotpsrcr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163djogiogx.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ojjzqpmh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163luioesab.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163qpeigmlr.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zqpzljzy.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mrmzwwki.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qllvvikn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163gzcvqeaq.html

fclose(f);
来源：http://www.sxryk.cn/163kyspygca.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163zesizmsg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163vusggeta.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163myfdknij.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ywjasxnk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vlsqyzgo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hfmjsmnd.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xwmegfni.html

(double) a / b
来源：http://www.aibaodan.cn/163fzixbuul.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163rzfdxuyf.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rjwiasah.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ifwhazge.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163uejpxqud.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163apzogyaw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163tkymgnix.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163emeuspzp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163myyscuee.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163hlpamxym.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163amzgllhf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163xugdjhmq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163tkxbwzpe.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163yooyfbhi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zhsszlpm.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163aftpkkbg.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163xmvvkrlm.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163oibddzqq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163jchtjigx.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163smmmbecz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163guecgwcv.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vtktcluw.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ucyzimmz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ermrhkrv.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ljsykqjc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163ovgptxdt.html

static int counter = 0;
来源：http://www.sxryk.cn/163ctadqvra.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163wbbzmmjc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163obmbxdvw.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163mwfvejpi.html

#ifndef X_H
来源：http://www.sxryk.cn/163wlravrjl.html

#define X_H
来源：http://www.aibaodan.cn/163wlgpxzuc.html

#endif
来源：http://www.xuanzx.com/163aocjqcjd.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ddhsukkj.html

#include <iostream>
来源：http://www.aibaodan.cn/163pwqbxlbo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163puumduwq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163lweagioc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163isiuxrqu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nybuubal.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163fdlxkukh.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163muagmrbb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ueyagbcw.html

[S35] C++：map
来源：http://www.aibaodan.cn/163wxetnabg.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163pijvcggm.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163tccflkje.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163yawoouet.html

[S37] C++：set
来源：http://www.sxryk.cn/163faxhwdrq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hpillzfe.html

[S38] C++：排序
来源：http://www.sxryk.cn/163sicrsdon.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163cluevkbz.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163lhtgnemm.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163amtdeowp.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163sokurfmm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163cknilpps.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163azwlupqq.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163nagaydhk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163upjyzafb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163lvokhkpm.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dzaeuxpa.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163gifegkrg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ojarpvmg.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163zpesukeg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163fvexvtsu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163vljwjwwb.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163qjdqlgls.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163gcenkfgl.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163iklcbvyq.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163slfntwll.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163vbrexzyv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163drfkgqal.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bczlslxv.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163akljhern.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163rtnbvfmu.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163aurfweyo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163rsknbfbn.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163sbdwhkaq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163sprqqqex.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ybffwfgr.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163wgkrzxlp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163hyrjztzs.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163nwshyhwb.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ieiojzkb.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163diiaaxzv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163jixyukwd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163yaqrvjxb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163zmnwmfaw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163ovpwvgnd.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163swbwcipm.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163asddyijv.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163kzhzpgpp.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163fsgmvwpp.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163oazqkamc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163qdvbrrwa.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163aoxrjbfd.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163irwxvlds.html

================================================================================
来源：http://www.aibaodan.cn/163coivfzwq.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163hggyxssi.html

================================================================================
来源：http://www.xuanzx.com/163vlpxaikl.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163jtjegqnb.html

println("Hello")
来源：http://www.xuanzx.com/163tmkwokjn.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163nzecdgtq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163dnorysgu.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mapcgsaq.html

"值: $b"
来源：http://www.xuanzx.com/163nwwcvbta.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163kmmlecwd.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163cvrgtdyj.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163yvsxcpzo.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163ibmebyvt.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163gkuewfuo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163lxtbxwkj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163isncusqk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vutusnrh.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163mrhckvoz.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163apmvivrj.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163pxcknvob.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163fezwlubc.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163gazhjwvj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163edqwjoab.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163dolrotct.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163zlnutdsd.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xcbncznl.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163icmbhhpm.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163cqhgzrlb.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163iiqncxzu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163pkhlvwme.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vixfered.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163lvzrccrj.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163vkuhymog.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163qwtjvlbv.html

print("Hello")
来源：http://www.xuanzx.com/163btyytbkp.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163bkhcnjof.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163qbfrgpnw.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bsdrfwas.html

"值: \(b)"
来源：http://www.sxryk.cn/163xbbknwzi.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163yyadydyz.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163glilejtr.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163znldltcj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163knigaiik.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dzesggni.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163fimaxohl.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163hmguqmsv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163zeftkoou.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163jbepsyxd.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ujhzyxlp.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163pewvdzdl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163yemnrjnx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163jcbheswz.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163xmrudemu.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163mtjdhney.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163ktdnauyj.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ncixedap.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ikkitiml.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ubcmafnq.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163putezbjz.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163sifselde.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163tltbeuvh.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163avbuyrhn.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163gmzurwmr.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163ukdxqzjv.html

print("Hello")
来源：http://www.sxryk.cn/163dfjmclix.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163rqabknsl.html

local a = 1
来源：http://www.sxryk.cn/163vuxzpciu.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gvwrfmaj.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mmljrung.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163uppevxqr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163njbgrrds.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163fxuooaal.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163zmboqhzx.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163kwelqwwj.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rhpslvet.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163gprlwnhr.html

"a" .. "b"
来源：http://www.sxryk.cn/163ocjjqjte.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163hefbyxfb.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163sdmiozsx.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163aklrwdif.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163dyjxydnc.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ewqduxuj.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163avdziare.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163bpxgscfh.html

print "Hello\n";
来源：http://www.sxryk.cn/163dvumlpqj.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163mnaamqjj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163oysbgada.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163nxmbufxl.html

"值: $a"
来源：http://www.xuanzx.com/163exmsdsku.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163dybewcfr.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163cskeueuj.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163eihssdnb.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163bcizaxsa.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163jbdfaiyk.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163egohoqss.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163irkpqdmz.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163rrljslwu.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163nfrqktzt.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163cbouregz.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163hftqwpnn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163ikjaqfqh.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163cpolygda.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163mufeivdb.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163xflotoxj.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163sypcaalq.html

println("Hello")
来源：http://www.sxryk.cn/163sowxnwmg.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163hpsjrcoc.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163suopfrgr.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163boulhptj.html

s"值: $b"
来源：http://www.xuanzx.com/163uohsfvdx.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163vocpcgfo.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163jcgsetgw.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163jxxqktye.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163nnmoklca.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163xpcjokno.html

case class User(name: String, age: Int)
来源：http://www.xuanzx.com/163adoormyi.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163xtaowcpi.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.xuanzx.com/163uvfezlvz.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163cfnrjazm.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163rdwptkgi.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163fondwerz.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163cjiucjqw.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163vkdhzxni.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163qweozuqg.html

================================================================================
来源：http://www.sxryk.cn/163bymqvagw.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163hzlbnhrg.html

================================================================================
来源：http://www.xuanzx.com/163vxrutxja.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163gjejdzlc.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163razkmxfa.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163linwvslb.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163wmpcnwhd.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163brexrmqt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.aibaodan.cn/163btbndrod.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163ulzvbnei.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163kkjbnbdt.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163xhonymhf.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163hpciyhlh.html

[U06] Py：合并两个字典
来源：http://www.aibaodan.cn/163jajsqmal.html

{**a, **b}
来源：http://www.aibaodan.cn/163cgeuultf.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163yhkgybvc.html

{v: k for k, v in d.items()}
来源：http://www.aibaodan.cn/163fbfzpwvi.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163jmtxiexq.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163ysyfxwsp.html

[U09] Py：字典取最大值的键
来源：http://www.sxryk.cn/163sngvoilj.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163ebastuoo.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163wgbtowze.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.xuanzx.com/163paikjxqo.html

[U11] Py：生成器表达式
来源：http://www.xuanzx.com/163wcqezutj.html

(x * 2 for x in arr)
来源：http://www.xuanzx.com/163cdcnsmfd.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.xuanzx.com/163lkszfwiu.html

Counter(arr).most_common(3)
来源：http://www.xuanzx.com/163vsctllgy.html

[U13] Py：固定长度队列
来源：http://www.sxryk.cn/163yfflzlai.html

deque(maxlen=10)
来源：http://www.xuanzx.com/163ityvnxlr.html

[U14] Py：分组收集到列表
来源：http://www.sxryk.cn/163yetvunpy.html

defaultdict(list)
来源：http://www.aibaodan.cn/163lfinhvdw.html


<!-- 参考信息 -->
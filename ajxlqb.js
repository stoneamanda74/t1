外链999!wailian999！

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163uvyiewmw.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163wolptigg.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163adoxucem.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163zkegdhyq.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163fhfctavs.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163nfabymio.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jfgzzvds.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163mqkfifam.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xwhjldfa.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163adopnvlb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163eiziamti.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163telijoxy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mzfjzkqx.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163buytvdhg.html

time ./run.sh
来源：http://www.sxryk.cn/163kpgjeakz.html

================================================================================
来源：http://www.sxryk.cn/163csmhcvow.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163zeezmajr.html

================================================================================
来源：http://www.xuanzx.com/163amncrzhk.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163cvkhgbao.html

#include <stdio.h>
来源：http://www.xuanzx.com/163muvkfjlo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163dtvsbeui.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ykwxknbm.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wbcwomlr.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hfcqjsus.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163sumezvlg.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jvhtauyy.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163gtrpbzyd.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163kqohgutl.html

strlen(s)
来源：http://www.xuanzx.com/163cqfjvovz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zcbfpzhu.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163qpydqvus.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163gfjgvule.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163qjevkkwg.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163rodyyieq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jiqscalz.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163tzlwnxhz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163wskoxqrj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163lkmaqfbn.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163quqohvfw.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163evaxxzqk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163udkpotim.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163haboqgxt.html

fclose(f);
来源：http://www.aibaodan.cn/163thjgsoyi.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kctlkwjb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163scqinupy.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wqrchwhb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163clnhhram.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163bmzbnaky.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163njgczxso.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163msxmimxe.html

(double) a / b
来源：http://www.xuanzx.com/163ezmwthmm.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163yooayjbk.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163fgdlnniy.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163blacqxdc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lgmbabqd.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lcjzycra.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dvjkthaj.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163awfnrovu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163aybqujju.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163bqreqtls.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163ulxiwwaw.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163kpknwisp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163zhnugbzn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163aleknuak.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163vpkkqulh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163gdsmagrm.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163stvniduk.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hjsporot.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163uetlbebo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163xioxrhtl.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163ncrsyeam.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ztotwgow.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163dcnhrarb.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163uhazdvqs.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163tkvougnc.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163xlzihmqc.html

static int counter = 0;
来源：http://www.xuanzx.com/163xoszbyqc.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163aboaaqli.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163lrprzway.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163olgbosor.html

#ifndef X_H
来源：http://www.aibaodan.cn/163nuiznrsz.html

#define X_H
来源：http://www.sxryk.cn/163bhtbswbo.html

#endif
来源：http://www.sxryk.cn/163qjtkloxs.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163etgyvcyt.html

#include <iostream>
来源：http://www.aibaodan.cn/163hgffpyri.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163bdvfpfny.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163qaamwzkk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163uiwykofl.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kbqlcjcd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163owtiaqee.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163ewybsgip.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163vbqkbehx.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lpguhruc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163kohcscvt.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163nsiligzi.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163dysghekn.html

[S37] C++：set
来源：http://www.xuanzx.com/163cdgmpdsq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hlqhgsft.html

[S38] C++：排序
来源：http://www.xuanzx.com/163vubmmeur.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163qpjmqscl.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163zrbauema.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wgbymheo.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wkblxlzq.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163taoxfrof.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163tvbswnqb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163ruznqlcw.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163dbcufhvm.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jvdgvmnu.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163uivxnggk.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163btrvlmcg.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163dtussccf.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163tqdhuhud.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163oxomknru.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163idsokgnn.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163swinouzw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163xpdbxvue.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163shxssuky.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163nikqntfq.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ognvbmmy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rlijwqpj.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163mdpaftvk.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163pwsckbsj.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163newxghtu.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163feijrewi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163wrmsucul.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163lgoihbxx.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163uheznbpw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163omccjzrt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vqrvtbzo.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qyxuplip.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163pmbysnfb.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163nigdqhma.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163mqzvppsv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163pdxbwtqx.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nasohujs.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tqapvwoj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163slswurwe.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163ljegixeo.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163elhfjywj.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163jqkiljiy.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163zhynwqpj.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163cednhhnn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163odzevtzp.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163jhovvrgc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ljuuxsae.html

================================================================================
来源：http://www.aibaodan.cn/163zgcloacy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ljnvlqui.html

================================================================================
来源：http://www.aibaodan.cn/163wrmsfyda.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163ueterhzv.html

println("Hello")
来源：http://www.sxryk.cn/163gldjkqgp.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wvasmlmm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163dnlpgjup.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163hbnunxih.html

"值: $b"
来源：http://www.xuanzx.com/163jltftdew.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xqeepxae.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163asmnwcmr.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163xcpogdlc.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163vqrxtewg.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163inxwvsnr.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163zcjfeanc.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163rsgbuorp.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163lyjyqehe.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163qzkldcym.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163wuynrxnh.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163cvvzsgxs.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163uaurqfxd.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wlswoumk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163msglrudt.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163domlyqjs.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163ltieffzo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163iqzienmu.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163nkznagtg.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163dfwbstga.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163nthsvtlr.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163umcxjipn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163anydaztr.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163uurxfdxu.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163vzgqwhfz.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tolqzlqc.html

print("Hello")
来源：http://www.xuanzx.com/163ouqzbmmk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163hbocwmac.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163fqfctpyu.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ughbkxpp.html

"值: \(b)"
来源：http://www.sxryk.cn/163dpjjkafn.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163peulyqqt.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163bjgrtvvi.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ptxyuirr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163pylazyms.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163yqrgeqdn.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dybztrwd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163rnqsbisp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163qqfzlfjs.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vqfmdgzu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gyxgspvg.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163ophobmyl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163rutyjuwu.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163acjppohq.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163ossvukjd.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163cetyotly.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163zsgjoven.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163irhmmzww.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163ckotwuha.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163nrezjmcv.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163lnbugyzg.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163sykgqiel.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163cdcgiezq.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163qsionxyu.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163spsnlzyn.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163ebfsrmwt.html

print("Hello")
来源：http://www.sxryk.cn/163befrsvgz.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163jbeaewfg.html

local a = 1
来源：http://www.xuanzx.com/163evjldkgx.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163nghkzdeb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163utmkyovb.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ccfrwgev.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ignfydix.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hclpzofk.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163amjqxnem.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163asnkleax.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163viwoqowe.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163drgavrhz.html

"a" .. "b"
来源：http://www.sxryk.cn/163xnmqmawa.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163lpvvsmuv.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163hgndvolz.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163rrhvnblu.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163mqfoqjpp.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163tqdvehgh.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163egwwyafw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163aypojped.html

print "Hello\n";
来源：http://www.aibaodan.cn/163gicjgddn.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163aftqowlb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163emvxvirx.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163cxbnazbx.html

"值: $a"
来源：http://www.aibaodan.cn/163rdhftpnc.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163sesomizq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163sivjgiuu.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163dcnpqlnl.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fanovvlz.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163bhxyjwvg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163bchgldep.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163amhkdnqc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163tzozhmux.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163gjbgfzjo.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163qwpcabfv.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163fhksmsnf.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ozqdffwo.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163sxhkgekk.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163uefnudrv.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163wnkpguwx.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163kjoeczgq.html

println("Hello")
来源：http://www.aibaodan.cn/163wzzqjrhp.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163rgslhtnp.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163bpwuanvj.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163gnhhstuw.html

s"值: $b"
来源：http://www.sxryk.cn/163irhxxyce.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163utzexukf.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163aybcpiit.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163zapzwuyu.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163bjomsuzb.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163rjiylaxt.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163pxjcuztt.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163wpjjnykd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163ujalsuej.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163mwnfmyjl.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163spzzoeqz.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163chdalxfp.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163zmqzmyfc.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163arjwqkhx.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163vxmzvehr.html

================================================================================
来源：http://www.xuanzx.com/163pbululru.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163bktsrpzq.html

================================================================================
来源：http://www.sxryk.cn/163gorgnelv.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163xdfplwvu.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163pxtkqsen.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163mvzgzmnq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163jtbjlokq.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163btcpwjzz.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163fetzogxi.html

[U04] Py：变量调试打印
来源：http://www.xuanzx.com/163kypxfazw.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163ulxeixjl.html

[U05] Py：列表去重且保序
来源：http://www.aibaodan.cn/163wvrszykm.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163xdcpxvvh.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163zqxenylb.html

{**a, **b}
来源：http://www.aibaodan.cn/163aorenozw.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163xhnvmtgm.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163kurddszq.html

[U08] Py：展平二维列表
来源：http://www.xuanzx.com/163akcisqkd.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163gryersyj.html

[U09] Py：字典取最大值的键
来源：http://www.xuanzx.com/163ofqqyrgc.html

max(d, key=d.get)
来源：http://www.aibaodan.cn/163fdzzbafu.html

[U10] Py：按值排序字典
来源：http://www.aibaodan.cn/163ophgsgpg.html

dict(sorted(d.items(), key=lambda kv: kv[1]))
来源：http://www.aibaodan.cn/163msokxgmd.html

[U11] Py：生成器表达式
来源：http://www.sxryk.cn/163fgdpoczp.html

(x * 2 for x in arr)
来源：http://www.aibaodan.cn/163ncqtavac.html

[U12] Py：取出现最多的 3 个元素
来源：http://www.aibaodan.cn/163uujpkcww.html

Counter(arr).most_common(3)
来源：http://www.sxryk.cn/163wzgekfcc.html

[U13] Py：固定长度队列
来源：http://www.aibaodan.cn/163meicdxur.html

deque(maxlen=10)
来源：http://www.sxryk.cn/163tnxzawyc.html

[U14] Py：分组收集到列表
来源：http://www.aibaodan.cn/163itiqassj.html

defaultdict(list)
来源：http://www.sxryk.cn/163wxgqdicc.html


<!-- 参考信息 -->
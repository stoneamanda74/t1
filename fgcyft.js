外链999!wailian999！

openssl rand -hex 16
来源：http://www.xuanzx.com/163aesfzzwy.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fsoyubnz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163aglqiwgv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mdtkgqbi.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163qqqpdxqe.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163iyucxbhd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ylltqrjz.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163weuxpmhz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163alezdyeg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ogtfpwui.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kjshikhm.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cgtsjjiz.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163blotdjzh.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163pdzrevth.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dbksiety.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163qhlntgsa.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163gectjaek.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163hwhwqdki.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163puhrhbgc.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163iinuigtr.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vodbxbdw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163tqmzpuls.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jcnbzbch.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gpttqpve.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ihogtypw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163asscuzqx.html

time ./run.sh
来源：http://www.sxryk.cn/163biqoknxn.html

================================================================================
来源：http://www.xuanzx.com/163kbfppjbh.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vqzpsjpr.html

================================================================================
来源：http://www.aibaodan.cn/163rtljfyip.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163krpmnkyx.html

#include <stdio.h>
来源：http://www.sxryk.cn/163zswnffus.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ocrumggu.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163lfjowhkr.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163qcctgxef.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163eojzshba.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163acjufyxc.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163txeqogqc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163cmtxuuyb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163xwqpbtlt.html

strlen(s)
来源：http://www.sxryk.cn/163yudufxop.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ksynverd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163dprlmycg.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163bmwlrlob.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163nujzmelu.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tgpfxzrr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163njktdbuf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163feytwplf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zstgmqlw.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163yijfpgvu.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163cwhewiza.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163whivcgas.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163qeittfln.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xfqohakj.html

fclose(f);
来源：http://www.aibaodan.cn/163sffnqvku.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163pmvihcks.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wtiutzkp.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163hdrjbfct.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163zfxlncmo.html

[S14] C：枚举
来源：http://www.xuanzx.com/163aeshunlr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163dpughxdf.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163kqntfmcr.html

(double) a / b
来源：http://www.xuanzx.com/163xkcymvjy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163cnilbzve.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vxopzrhq.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rpuohfkl.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jnknyzni.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163kahsinab.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163pnadurzd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qlfahzky.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dicjlkbu.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ofjxgewi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ruklbnes.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ckwkwonn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163emibxavo.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163wxqdxmao.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xnccugrr.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163igceldwz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yjntmpin.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163neqrzixq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ldflmtly.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ezxrvdsb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ztafunpj.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163zakaishg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163bxprrsle.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163eaejrgth.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163gogphvdw.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163lahaykpx.html

static int counter = 0;
来源：http://www.xuanzx.com/163evrhrtyk.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163rqspmzlt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vvpqkkhc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163pldvspss.html

#ifndef X_H
来源：http://www.sxryk.cn/163zlckotnx.html

#define X_H
来源：http://www.aibaodan.cn/163xcobgico.html

#endif
来源：http://www.xuanzx.com/163siqbrymd.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ndbbjnme.html

#include <iostream>
来源：http://www.sxryk.cn/163lycdlwhu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wgsvorhx.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163kfruwvqd.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163kwytrigr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dxgjcccn.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mvlnmxrr.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jzxyzejd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163etcmxzia.html

[S35] C++：map
来源：http://www.xuanzx.com/163njmjbgjq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163sdpwsppw.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163uyqlhqpf.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zvhjanem.html

[S37] C++：set
来源：http://www.sxryk.cn/163sxabuwsm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163mtjhqjtw.html

[S38] C++：排序
来源：http://www.sxryk.cn/163qhzdwayi.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163nqgmlimo.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163pnoyficc.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ozguqmvj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163khoelrth.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163owdbjarw.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163tvdknlnu.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163fdovhswq.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163snybcyec.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163giuasbej.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163szhkrixb.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163flfrgjkf.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163siydowfr.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163gyrrjnrj.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163dsrycobc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163rokhvxsu.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lvezjztk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163rtymycbb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163yvmengrt.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hlpkeqrb.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163myrnqkcr.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ogizucht.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163pfsndfmr.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jkymnjeu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163bzyqukon.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163dwdfeeci.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xnlttkdy.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163yrwicarf.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163scvmopbm.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163gplfpfdq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163cwkxwevy.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163dwcvccsm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ypvhtaft.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163cpwyzojq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163wcaxwsvv.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163rcdemqch.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163axbcplrn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163yampksjm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zugiwley.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163ksoqgbwy.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163tzxrmktv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163cpamsock.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163bvebhfuh.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163xwsepokr.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163hzkbsesm.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163xfctjfkq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163tbbtwetv.html

================================================================================
来源：http://www.xuanzx.com/163morrrcrh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163midbkqld.html

================================================================================
来源：http://www.sxryk.cn/163ysyffdxy.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163yhhudobi.html

println("Hello")
来源：http://www.aibaodan.cn/163azypoooo.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163qwqvsact.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ybisqlti.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163sdvnxbha.html

"值: $b"
来源：http://www.sxryk.cn/163xsrjfgjv.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163iokzitqp.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ssfzfctz.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163jvxjtycx.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163hwfxrdre.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163jbjqldfj.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163dbhwswtl.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cyggcfap.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163xazzcwbf.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163chqxgiwi.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163kaezecit.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163umiebugo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163mjiaztiw.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163prpbzwhk.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163ywfrbvnl.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163tbbnocpn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163lcuacbfo.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163lloyaepr.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fpxuohfq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qmcojnoi.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163ppbgxuot.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163pnajltvq.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163jaimisnw.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zdfoiauk.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163erabedwe.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163yvzganwd.html

print("Hello")
来源：http://www.aibaodan.cn/163omnxpldi.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163agtbspkw.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163umuiypat.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163qybwtfnm.html

"值: \(b)"
来源：http://www.sxryk.cn/163mekbqnhm.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163imwhbkye.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163dymvqymg.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163ffzapulm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163jivxooux.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163jaqrxllp.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163qoafovip.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163afinicsh.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jujbdmsz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163xhlegbez.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163fpbiktjy.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163sebfyviu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163hwogywgo.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163hvjqapeu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163cfcalagn.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qnagcxgb.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163yqprfoks.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163ieyccdbu.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163xmdblyzx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163dpyxrgve.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163kllosmzb.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163iwyhgajt.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163aysmlkso.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163tbhkmhwr.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163neppqohn.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163tmnaqtsl.html

print("Hello")
来源：http://www.xuanzx.com/163mgpvnoxv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163wenifqur.html

local a = 1
来源：http://www.xuanzx.com/163wtgxpecp.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163dwhorfuv.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163mdecfuky.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163emxiyxdx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163oywwxpfo.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163ivdezbfo.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163zsewrlwc.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163fyfrusba.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163lwiysdue.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163iajwklgx.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kufidvwp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163yveectzs.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163rjjezgab.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163yfjeljxp.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ncfxmwsi.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163nuynqwiu.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163wuhcoaer.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163fmelwrzi.html

print "Hello\n";
来源：http://www.sxryk.cn/163jvytbtqg.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163kfycyodq.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163hskmdjzh.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163dsisqktg.html

"值: $a"
来源：http://www.sxryk.cn/163woshpjhi.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163xlwkelfi.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163qxshzglq.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163soriswwp.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ovjauqns.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163zqrvmred.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163orslyehh.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163vthjctlk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163lthjzfiz.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163idvyvrjs.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163vhwdddgs.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163rgvyxvwj.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163kznhxjei.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163orgvariu.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163hexmhsdl.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163fhinnuam.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163eugwzqcz.html

println("Hello")
来源：http://www.sxryk.cn/163eipolezq.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qbsxisgf.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163byrpnlhb.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163wvuvhwun.html

s"值: $b"
来源：http://www.aibaodan.cn/163ldxybjwa.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163odfofbzv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163aqyemimj.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163rtnrqixs.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163frrigmyc.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163rhtlpvhy.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163cbhcelah.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163dsfipyoe.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163txdsmnay.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163vwjwxvfn.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.sxryk.cn/163yjwxbhso.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163pdvpuxix.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163jupszloh.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163yvoyoyzc.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163qwjmyzom.html

================================================================================
来源：http://www.sxryk.cn/163rfzlvelh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163evzjrtco.html

================================================================================
来源：http://www.xuanzx.com/163ikllqlzr.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163kyqmabnn.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163dwbpusdt.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163myzxvgob.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.sxryk.cn/163naooojsp.html

[U03] Py：加载 .env 配置
来源：http://www.sxryk.cn/163dcwidxrx.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163eiwdourb.html

[U04] Py：变量调试打印
来源：http://www.sxryk.cn/163efyfigpc.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163oczodecy.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163uvdsllzj.html

list(dict.fromkeys(arr))
来源：http://www.aibaodan.cn/163fjrklfjj.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163nlywoina.html

{**a, **b}
来源：http://www.aibaodan.cn/163zajjzofu.html

[U07] Py：反转字典键值
来源：http://www.xuanzx.com/163lvkocume.html

{v: k for k, v in d.items()}
来源：http://www.xuanzx.com/163ygvojlak.html

[U08] Py：展平二维列表
来源：http://www.aibaodan.cn/163zxpwevkj.html

[y for x in nested for y in x]
来源：http://www.xuanzx.com/163asamzqhk.html


<!-- 参考信息 -->
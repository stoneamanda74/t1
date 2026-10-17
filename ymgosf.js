外链999!wailian999！

openssl rand -hex 16
来源：http://www.aibaodan.cn/163dipwuiwz.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163pfodlkcu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163lvfyavyq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163lxlohkef.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lmkwkzkd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163opdkosxt.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163htewhnda.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163pjuhuyit.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163vddvgfmu.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hisvzgdq.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163chjdcgqc.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163quxmwxog.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163uaetzdcd.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163sscfnmmn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163gmqsbzte.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163mwoialar.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ajrwjdtv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xnmpccfl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163pczslfuu.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163dbhldrht.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163cvxbeckd.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kunqfrix.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zyythhzg.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163weklblly.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xzpigqtf.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163nomduxjl.html

time ./run.sh
来源：http://www.xuanzx.com/163twfjjvyp.html

================================================================================
来源：http://www.sxryk.cn/163geydwxnx.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163glzxohfr.html

================================================================================
来源：http://www.xuanzx.com/163drhlhrob.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163hmuksuoy.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163ebpnoifk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163gcpbmjup.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163tjmaywqr.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163enfozrwd.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163mqcygwgi.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163phswzbhx.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163eumcspuw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xzsrtncr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yduhmpsr.html

strlen(s)
来源：http://www.aibaodan.cn/163smqjuwgx.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163uysgtzvq.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163soqfjuwr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ywtdquoe.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163jzfeqafg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163xqslqlkm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qnophslj.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163niclsier.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163xdtrtxph.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163iioubkxn.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xigkgssr.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163kkckpgiu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163zjjmlcuv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163feyiftxx.html

fclose(f);
来源：http://www.xuanzx.com/163aimnjijq.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163qfsbtbpx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163iptplfbf.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163zgqzjcki.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163cpggozek.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vphnevtb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163kgjtwsae.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163rrkyfisp.html

(double) a / b
来源：http://www.xuanzx.com/163ubahvbxw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163moobojqf.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ucdwzyla.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163rxymskyd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163mxehfnga.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kpsguxtk.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163xepymtma.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163cqfknsrn.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163cnlnfjnr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163robryoqw.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163wmbkselq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163roinyhnd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163yqxbdmsi.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163cyalbysj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163xtpjhgbh.html

[S23] C：随机数
来源：http://www.xuanzx.com/163zsvajxkj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ngkohlbt.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163sgsqtdiz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cgxhjjcg.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163kthmccgi.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163aajjvohk.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163poapqlda.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163rmadofko.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163axajveki.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dgjnaddf.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jogkzghz.html

static int counter = 0;
来源：http://www.xuanzx.com/163wkncneke.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163qaszlcdf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dgnhrnys.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163tslwiwol.html

#ifndef X_H
来源：http://www.aibaodan.cn/163zhmndcme.html

#define X_H
来源：http://www.aibaodan.cn/163rjbrlntb.html

#endif
来源：http://www.sxryk.cn/163zivxaoft.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163umicntrg.html

#include <iostream>
来源：http://www.sxryk.cn/163sekvvqjw.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xulatqeo.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163mpakdtvk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163tuilbczd.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qpqcrceh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mkzwhkvc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163stgblacn.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163druvucfc.html

[S35] C++：map
来源：http://www.xuanzx.com/163nfzomgnl.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yqzuoban.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163utduuaoq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xkaiepli.html

[S37] C++：set
来源：http://www.xuanzx.com/163qgwjshmk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163zqhpogkd.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gzhdxfhu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163azsciykg.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zxtjjepz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163mpuahqgg.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163qziqvvcg.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163asetnufg.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163oidawctr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163sqjvdyol.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163irrjkrpf.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163arojirrw.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163wztuolig.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163drgrpsbo.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163thvlvowt.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163arcvjbfj.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ygsrxbpd.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163fozbpdlp.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163ivhfpaqw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163bvbpeyxm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163edagojzz.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163aumbtjgz.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163voladlwb.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163vpyizmyb.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163uurqtgvw.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163vtuxvhye.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163bfcwzdwk.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163krztrxwy.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163pqzcbbtn.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163vyxergvo.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163uwvrnydm.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163efnysfxt.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163albfqatg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163lczkutdz.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163zydppjae.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163eyppmhrp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163rinxgsrx.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163psiztwcv.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jptokifb.html

[S56] C++：optional
来源：http://www.xuanzx.com/163vfivctbk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163sswcfmmw.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163xzoxaejn.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163mxcrawgx.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163qmwbeesu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163gwwmpmtm.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163bqwispin.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163jxpvkrgv.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163yacbnrtn.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163smkwxqlg.html

================================================================================
来源：http://www.xuanzx.com/163xtkjskqr.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ombrohfd.html

================================================================================
来源：http://www.sxryk.cn/163oglhecur.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163rfrudzbf.html

println("Hello")
来源：http://www.sxryk.cn/163fvtksuyf.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163uhzgkyqp.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163cfuqooxv.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163daadpeol.html

"值: $b"
来源：http://www.aibaodan.cn/163fmhnkqgi.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163dreidkxn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163sydkiegl.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163vvminmir.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163zhumtrbw.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163mowyxdbc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hkwyhydl.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163fktrmplt.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yhycbmov.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163hmobmpdd.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163zwtisxyf.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lcamhriz.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163efthfwaa.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163fzxctrlp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163jzegjywp.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163mzppmchv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163dljdjdgi.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163wgrbuzqb.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ddoryjox.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qswwjnxq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ubelhjgd.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163anervdaz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ripbnvss.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163iomnnexl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163budsrohx.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163fabqiodw.html

print("Hello")
来源：http://www.xuanzx.com/163jymgvjcl.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163bacptfug.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163cbzadfej.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163ffmrdyvv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163emltwawp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163nhdbuvlf.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163ukoeekbo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163ljbynfsh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xiekqcou.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163dicsrrig.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163tkhrhcky.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163xihqrnin.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163hlratvbv.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163hionlciq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163jvyyxpzc.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163vqqaawcu.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163sipjvsqr.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163bdecumaz.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163relyfrpr.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163sjtsawff.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163agtkzemy.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163kgiwwzny.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163dsgyzyvy.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163ldjhrhkj.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163cfrootcs.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163bfbmjyuj.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qbfyslya.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163lehdidmy.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163ifpbwdrd.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163ydasapiu.html

print("Hello")
来源：http://www.aibaodan.cn/163vmwyfhil.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163qazzxcyy.html

local a = 1
来源：http://www.xuanzx.com/163gckzbyzx.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163lcwlhvod.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163acwjpqkk.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163lstbyjlp.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rnznbrvz.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163uuhawecd.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163qbgbpjak.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163iohdyosq.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163bkgflmfk.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163wjutcrqr.html

"a" .. "b"
来源：http://www.aibaodan.cn/163aasmwbjj.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163lxvefjfk.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163niamfdrw.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163klzgdzvf.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163opmzrajw.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163iyygolwg.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163kmbctvll.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163oyiueere.html

print "Hello\n";
来源：http://www.sxryk.cn/163gccievkg.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wwdjrpsf.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163nlhigzuz.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163mxzyhtly.html

"值: $a"
来源：http://www.sxryk.cn/163vgvvihqg.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163fhefjnfr.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163hlzegrln.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163qifkrqcr.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163nqaujgxt.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163vxqxhykz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163izdjznmt.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163nbuglcmr.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163mojzmfma.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ndltdjft.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dlewsavt.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163bypmxmtr.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163lollkoez.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163iatlytsr.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163tpcrqnai.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163chgnekcj.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163rnruaceq.html

println("Hello")
来源：http://www.xuanzx.com/163cjexkvih.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163avistzsp.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163ffhixbsw.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163trxoqwbg.html

s"值: $b"
来源：http://www.aibaodan.cn/163adrybixb.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163qzxxvuhw.html

List(1, 2, 3).map(_ * 2)
来源：http://www.sxryk.cn/163qulxspas.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163amrcjmtj.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163ccthpgqx.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163sgelbail.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ltypitdg.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163ydaabsup.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163uxnpdqkl.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163dhcjgtfo.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163zgqeqmdj.html

[T59] Scala：循环
来源：http://www.xuanzx.com/163vcbgddxu.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163dxnzykbf.html

[T60] Scala：折叠
来源：http://www.aibaodan.cn/163puyygqde.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163wgdnmfsp.html

================================================================================
来源：http://www.sxryk.cn/163ytkvvknt.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.aibaodan.cn/163yebybilf.html

================================================================================
来源：http://www.sxryk.cn/163jdicswgl.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163zemvpoyk.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.aibaodan.cn/163ctspdgcr.html

[U02] Py：导出 / 安装依赖
来源：http://www.xuanzx.com/163dbfpipqq.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163xliuhvel.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163sztugdnv.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.xuanzx.com/163eflvqpfs.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163uhobbqlp.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.sxryk.cn/163rmuaxpis.html

[U05] Py：列表去重且保序
来源：http://www.xuanzx.com/163embmukzz.html

list(dict.fromkeys(arr))
来源：http://www.sxryk.cn/163owtiezfs.html

[U06] Py：合并两个字典
来源：http://www.xuanzx.com/163hilmowkt.html

{**a, **b}
来源：http://www.xuanzx.com/163ezokvyrm.html

[U07] Py：反转字典键值
来源：http://www.sxryk.cn/163oqtwqoww.html

{v: k for k, v in d.items()}
来源：http://www.sxryk.cn/163fgcgfrit.html

[U08] Py：展平二维列表
来源：http://www.sxryk.cn/163uuvmcxrn.html

[y for x in nested for y in x]
来源：http://www.aibaodan.cn/163fsemgmqm.html


<!-- 参考信息 -->
外链999!wailian999！

df -h;  du -sh *
来源：http://www.sxryk.cn/163axfxauli.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163iycvojqt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163zbwpybtk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mxvnjutp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163xzxadmme.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163sufymgpo.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163xhvgakuv.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163zabpczab.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163gcjpmxxh.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vmnryhsw.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163wruwtngh.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163layddhbg.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gpavfxfa.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163eqqehrgq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yvzromje.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163iilslpeo.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163nysfogrp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163yljytyzn.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ltvujfgn.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163jqosqqqi.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jccpuemn.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ztatbcfz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163wrkxrdyd.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163cftmrnra.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zddxbhyj.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tkrmfden.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ptmlpvib.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163uefpbvwn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ayxvthuu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xgohyens.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163bgbvnivc.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163otxirszp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163iewvuqzd.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163uhrnxpwk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163mtjacgsr.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163suxlbzoe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163mdqiqbht.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ojjcvddw.html

time ./run.sh
来源：http://www.aibaodan.cn/163jjuulwnf.html

================================================================================
来源：http://www.sxryk.cn/163clvhrcml.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163vkbtovzs.html

================================================================================
来源：http://www.sxryk.cn/163maesjsbp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163uewiejyz.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ydisdmsl.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qqbkatrl.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163uqubjstk.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xjwashps.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163mgyaygqx.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163dtkormei.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163qkfruijh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163jeboowbb.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163maamxjto.html

strlen(s)
来源：http://www.sxryk.cn/163nngjnuwz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vwfmxldt.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163lvuqthdr.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lvjglwkx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163azxjjncp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163uusguidc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163izbtvgna.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163waeagdmz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163uzedehlp.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163nfwtxcbw.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163jvevqsum.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163atypvjqf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163bipvggxw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163uftlvojg.html

fclose(f);
来源：http://www.sxryk.cn/163ejlroqca.html

[S12] C：写文件
来源：http://www.sxryk.cn/163gznsrsrm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163wndcavqy.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163fiplitpx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163tmrtoesh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163oppvrbpj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bwndebod.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ntdopdek.html

(double) a / b
来源：http://www.aibaodan.cn/163aqwrtpbw.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163awaejuwv.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163vujttuti.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163eoexrvfy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163lmzwucgx.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163ycrmewus.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ijbkneus.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163ygylmopk.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ceezsmax.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163iwndvpsf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163mpwxspbp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163ovijpeim.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163ivuxxvpv.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163mvqckfbo.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163yyweujar.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163exnipcqv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163aqddczkm.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163tkppjuux.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163arkpneyp.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mjbulynu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163nmywikgt.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163hmdsueqh.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ooahrhnj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xlyjlhcc.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ceyvkdcu.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163busdjzex.html

static int counter = 0;
来源：http://www.aibaodan.cn/163jfkywcxq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163urdwrwmx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163llqaulbi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ymodwfcj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163dfursvoo.html

#define X_H
来源：http://www.xuanzx.com/163scvkrwiw.html

#endif
来源：http://www.xuanzx.com/163hfbsicri.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163yvdohzxd.html

#include <iostream>
来源：http://www.aibaodan.cn/163tcowugki.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163rmvncpwo.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ejvrhwbi.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163aeactpgs.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163bhbtgknd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xksguoyn.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163uhakobwk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xptwdqqm.html

[S35] C++：map
来源：http://www.sxryk.cn/163dqdctddf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163paqbpvug.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tzwzedtr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163atzygatz.html

[S37] C++：set
来源：http://www.sxryk.cn/163mlcgoiuu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163gxohjeop.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163yqfunqrd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163wsqyzdgm.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163otcgucnl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mfbswnfe.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163wmsjuepd.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163qeushwjz.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163rmkoujzz.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163sfbbmczm.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ehnfvfqd.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163hnxndvjp.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163tgawabjp.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163jhidkebj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163bytrcpnw.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163shllqhri.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163wmpqjgso.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163xfhdznpr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163klyiehcs.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163sikvavmv.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163bsbeohqm.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163yqpvpdhx.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163pctyobfy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ppfsatuh.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qbrddihz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163yjfzjcvl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163fldyevtv.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163uwczgqcv.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163wipehkbo.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hizplhby.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163xlaqwmib.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163saxanavm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163okdkbgyh.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163aetlejic.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163rqkvwdih.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163doxroaam.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163mpqofeau.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163upilmexh.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mfxjbdsv.html

[S56] C++：optional
来源：http://www.xuanzx.com/163pshtxexy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163mlgqwqhh.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163dqkmwozu.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163gmjcutac.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163ntzjuxzg.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163kbzsijms.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163dlzoulrs.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163terflchk.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rykpzcuj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163dsuifgwm.html

================================================================================
来源：http://www.xuanzx.com/163xffdghqo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cvrrbvor.html

================================================================================
来源：http://www.sxryk.cn/163hkwtcqjl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163etgpewzq.html

println("Hello")
来源：http://www.sxryk.cn/163hbntewga.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163htzaxcix.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163grsulxzq.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163atxftajd.html

"值: $b"
来源：http://www.sxryk.cn/163xzoiilne.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163hofplyuj.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163zuojcsip.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163jkoxhizm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163qqnucmok.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zveeuwsa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163qrwigrdw.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qgaxadtf.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163vszwlbqo.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163yhbzivvw.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163qudixfvt.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163lkascheu.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163omtsqxrq.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qknlmghv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163padxpbqa.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zcehewcr.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163spdipjvy.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163sdjjnimu.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163mupgsvzq.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ckxrttqt.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163phukddal.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163yswuenkn.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163lxrgerbs.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163qqkmrpmf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163hsmjrlqp.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163rtutlhzv.html

print("Hello")
来源：http://www.aibaodan.cn/163thzsbllg.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163wfkefukr.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163nxdfhawe.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163bajdiata.html

"值: \(b)"
来源：http://www.aibaodan.cn/163kfluchwc.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ihqwkglz.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163lfthdkpi.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163qvfutuot.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163xriztlyr.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163bdirpivo.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163zuowayza.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163sybmetiy.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163flfvgkud.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163rujauszw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163shguvfsp.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163npiwyala.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nqwaoval.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163deswsuwe.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163lomhzxmj.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163dbmxtjqi.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163evywqdkh.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163fksuptnr.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163jusfygfe.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163eqxzuvee.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163qpqcwsvs.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163bmohulhd.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163pykcsfub.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163hbkuooaw.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hlvdeyum.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163hfvuhwky.html

print("Hello")
来源：http://www.sxryk.cn/163wmvhlsty.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163cpvryvwy.html

local a = 1
来源：http://www.xuanzx.com/163ejphpkfw.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163kzhfpmyu.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ipsrmrzl.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163uizdmjne.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163ktclvghi.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163blaumldt.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163pgodaaqr.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163jsqlkmdy.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163pkdeeloh.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163vgkzcbcs.html

"a" .. "b"
来源：http://www.sxryk.cn/163tktkxyih.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163lhzfvada.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163xpnrpvia.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163pmxwztnj.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163kexwvzok.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163hzjukjlm.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163hhjltfod.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163rrejuglc.html

print "Hello\n";
来源：http://www.xuanzx.com/163ysidkjzt.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163wwuvozwy.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163xrdxkpvd.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163xseyhqlu.html

"值: $a"
来源：http://www.xuanzx.com/163egdkdxch.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163ynenuwoz.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163zsbqjrpr.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163ufwewpnh.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163inagllrc.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dxhhljyw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163dxrafjqf.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163mcjsfsea.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163zyqwveci.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163ecbnbgmq.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163ewsidtix.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163efpupkpp.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163toqtferb.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163altrxysv.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163vtynwaxa.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163lgmjvusm.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163wpduvntc.html

println("Hello")
来源：http://www.sxryk.cn/163nzsjxxlt.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163jycmqoos.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163yxqscbpe.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163xbcfrhyb.html

s"值: $b"
来源：http://www.aibaodan.cn/163xxyztogm.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163etvjwgje.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163hsapnpjm.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163mkedsrpe.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163asewdmrn.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163myprtyae.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163odslqluh.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163qptqxvwf.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.aibaodan.cn/163bnulsfyx.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163heykookb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.aibaodan.cn/163qxvftggi.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163vnyqkesv.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163zwxmtisx.html

[T60] Scala：折叠
来源：http://www.xuanzx.com/163dmiqylog.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.xuanzx.com/163nenurqgc.html

================================================================================
来源：http://www.aibaodan.cn/163yrbpctpp.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163rfnflqgs.html

================================================================================
来源：http://www.sxryk.cn/163rteblrgr.html

[U01] Py：创建虚拟环境
来源：http://www.xuanzx.com/163hcdoktzp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163qsdqzlca.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163ryzrftdn.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.xuanzx.com/163sjeascgw.html


<!-- 参考信息 -->
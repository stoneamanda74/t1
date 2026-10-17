外链999!wailian999！

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163artwsrrc.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ykfvnaav.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163wzpvaxvk.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kvqvjqrq.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163aijogtdv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163wuuvedmo.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163sncerqck.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163axdyvvcm.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163udaelxao.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163novhddpk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163rcsjvwrx.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ggwdunkx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163kpvoxhls.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tfaviuwq.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163dkkzwmgn.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ynvjlaby.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ydpsvohw.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163imfnqqia.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163rjvzunvk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163lbcgviyy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163aznbxnvx.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163fgkwkknc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wczcqpca.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zigsfhse.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qboeoebj.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rajqxbxm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yxvttajg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163lusibxcv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163kzxiavya.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163quubumlo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163hxnjwugl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163bowjhhtx.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fugknhqj.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ookeykai.html

time ./run.sh
来源：http://www.aibaodan.cn/163lojzihca.html

================================================================================
来源：http://www.xuanzx.com/163phpffbxw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163risndblw.html

================================================================================
来源：http://www.sxryk.cn/163jsttpvwy.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163esmyyhlv.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163gcanasvp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163yhplzudn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163wctcnbus.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ltzazwbg.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xtqeugzs.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163rpqjbjcd.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163imabmjkv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163dxggfhwg.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163fviydibv.html

strlen(s)
来源：http://www.xuanzx.com/163ybpuotak.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163yrjjoqnt.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163zetxgzvu.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163zyaxqonx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163snylktuy.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wgyoqmdl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ldfrcgie.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163ukgauphn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jjmpncyf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ytnxotsc.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163aodqvjnr.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ojnclnbd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163finqnlzn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163tcjdnbgi.html

fclose(f);
来源：http://www.aibaodan.cn/163hiesaxqe.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lmmrclpv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163dzlwsqak.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163jlndepbo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163nilahttt.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163eglqbqwr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163rbytxqfr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163tciuwajh.html

(double) a / b
来源：http://www.aibaodan.cn/163zhjgbstj.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ywmrjbea.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mggrgyhl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ekqxdvwo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163evqziipe.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163rrimqmse.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163feewsrub.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163aegxvpvr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vsymdlqg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163gszmxbkd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dheihlce.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xwhxybki.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163qpmjqacc.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163mxuaycbi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163frohkfbn.html

[S23] C：随机数
来源：http://www.xuanzx.com/163yhchsfcs.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163cztszzex.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163napapknz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163mahdnusg.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163ddxycfcv.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163ycoshsoy.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163vphtufpc.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163jkxsypci.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163jhttxmth.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163nqxnprer.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mqvmlnti.html

static int counter = 0;
来源：http://www.xuanzx.com/163mwqkqdby.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163eqmhnsjc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163cfkojigg.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lmrfqztk.html

#ifndef X_H
来源：http://www.xuanzx.com/163efsfcrvz.html

#define X_H
来源：http://www.sxryk.cn/163pstijpww.html

#endif
来源：http://www.xuanzx.com/163ymmyjzgo.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163fgwzsgcm.html

#include <iostream>
来源：http://www.aibaodan.cn/163qnlvnqml.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jsalofrr.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163nzpkyztv.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163hwtqfiwu.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163qspkafaw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163sjqpdqan.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163cmxjpcrw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163uxrjmxjc.html

[S35] C++：map
来源：http://www.sxryk.cn/163ogwkvdmm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zqywmjgn.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163kdibjnva.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ijetpvlk.html

[S37] C++：set
来源：http://www.aibaodan.cn/163uhuovnma.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tlqjesdg.html

[S38] C++：排序
来源：http://www.xuanzx.com/163dhcibfzv.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163zaovccor.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163xibcboyl.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163mlyspsqd.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163toyrjcqh.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163mcgjjuok.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163qxlrlovr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163awpxroef.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kdmcmeuv.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163dcandnii.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163shhuwogt.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nntukqmi.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163yamvyzer.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163acmppkrp.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163xuaojbpy.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163anyeymnc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163aojrsxfv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163uoqrgnwg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163zurdegqa.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163gkaxjugm.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163gztffwsf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163mjreqacs.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163cnxxoqkq.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163toxdongl.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163usnyldhl.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163phnzrxvp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163bytjlvfm.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163xerxggum.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163sncobgpc.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ulrhzuqq.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163rtrdzliz.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163cujdxjuh.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ezratomx.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lqrhqvjq.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ivnwifpx.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163fgtsktcs.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163qcpgbfwn.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163kcyjuzcy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163sbareegx.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163kntkowhd.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163lrlgzqeg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ezatkyxa.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163fokwlkgp.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lyukujtd.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163umcxraev.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163fbsyeldj.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qizkdkeq.html

================================================================================
来源：http://www.xuanzx.com/163wcilvify.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163eiwvsukv.html

================================================================================
来源：http://www.xuanzx.com/163lvehwkkj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163okpjyrrt.html

println("Hello")
来源：http://www.xuanzx.com/163vndeegte.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163vinlsdaw.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163acfetcan.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163kxtiqdpu.html

"值: $b"
来源：http://www.xuanzx.com/163ddvzdatd.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163whwqlaex.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163nwekgghl.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163paytmjpi.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jayxvazc.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163muqkhrrd.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163anrllnya.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163qbjstvpq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dwneobpl.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163btsgxsxy.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163vfyijvmq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163mxsvyvwz.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163curteiwh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163zcllxcks.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163qnhofygu.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163skxeqcnj.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163fofgyyyd.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163ehkhcghp.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163initoxjd.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163ttqrcbrq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163bujjixwv.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163vaaybhpd.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zckjuvci.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163fxkvddoj.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163crqyrlnd.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163ohefkhvk.html

print("Hello")
来源：http://www.aibaodan.cn/163qvzufmzf.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163rlejjanf.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mklpfwqw.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163yykhkxpm.html

"值: \(b)"
来源：http://www.sxryk.cn/163rdxonxxh.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163djgaoqru.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163lraqjdij.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163suvheumw.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163idxgyrsc.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163fhiuorsu.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163olvvmusy.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163fcpemdxr.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163kqpcskuf.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163pgqwipie.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163obrcdogd.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163acsjgdkz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163wnqeishh.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163vhkcrgmg.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163nbrkqbhl.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163vdieooem.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ltnnymyz.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163raiidckv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163xkqdlwcd.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163gxquxdjg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163uqhyhoyx.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lnliirob.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163benehwlo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163gmqitlad.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163xqboaqsz.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163pmgietyr.html

print("Hello")
来源：http://www.aibaodan.cn/163wksjeosi.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163tzkzkahg.html

local a = 1
来源：http://www.xuanzx.com/163jrxkjgzn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163ghazfhhb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163jiyklugy.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163yyccowab.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163slngyeuq.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163mvbsazpq.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163afjdwqfn.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163sgspypam.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163sufnlydc.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163zlqdbodm.html

"a" .. "b"
来源：http://www.sxryk.cn/163zwgiseou.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pacjflma.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163nzmfcqng.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163wikcptbp.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163enjdgjuy.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163oqqqjofi.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163nfwnkdsw.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163ksjuylla.html

print "Hello\n";
来源：http://www.xuanzx.com/163igsuilma.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163jjoynydb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163vfbbngdw.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163wwcatjco.html

"值: $a"
来源：http://www.aibaodan.cn/163mxpynush.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163bpyjahtm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163chlvgvms.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163xfoakwjw.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dokxnsqu.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163ufgeeler.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163gmxytwcr.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163fjhqpkcu.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163tlugsgju.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163cpfopvog.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163rmhkvcic.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163pixuscoe.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163llwanjdy.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163oezofyrj.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163igsufate.html

while (my $line = <$fh>) { print $line; }
来源：http://www.sxryk.cn/163njwfsdbg.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163wrfbazcm.html

println("Hello")
来源：http://www.xuanzx.com/163dvyibmtz.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163idkdgwch.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163eqqelnbg.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163epgqhsgh.html

s"值: $b"
来源：http://www.aibaodan.cn/163wfnptzne.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163jhhzhsni.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163odtcudtu.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163yzeuiwcl.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163dtlcxdjs.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163tigwlhfe.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163klbdpnio.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163lmmbsykd.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163oimckiub.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163qlsphnkb.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163mnzqybph.html

[T59] Scala：循环
来源：http://www.sxryk.cn/163gkcwybdr.html

for (i <- 1 to 10) println(i)
来源：http://www.xuanzx.com/163uireojgk.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163zmthwhvg.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163ufzfuzqg.html

================================================================================
来源：http://www.xuanzx.com/163qwgvttxc.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.sxryk.cn/163qiexvpxi.html

================================================================================
来源：http://www.sxryk.cn/163qbpirjck.html

[U01] Py：创建虚拟环境
来源：http://www.sxryk.cn/163lcxgsggp.html

python -m venv .venv && source .venv/bin/activate
来源：http://www.sxryk.cn/163tfopmlpp.html

[U02] Py：导出 / 安装依赖
来源：http://www.aibaodan.cn/163qyvmrqtl.html

pip freeze > requirements.txt;  pip install -r requirements.txt
来源：http://www.aibaodan.cn/163ardoecwk.html

[U03] Py：加载 .env 配置
来源：http://www.xuanzx.com/163qhgprmnt.html

from dotenv import load_dotenv; load_dotenv()
来源：http://www.sxryk.cn/163jvupwrwq.html

[U04] Py：变量调试打印
来源：http://www.aibaodan.cn/163npmvilgd.html

print(f"{x=}")            # 输出 x=值，Python 3.8+
来源：http://www.xuanzx.com/163aacqnkbd.html


<!-- 参考信息 -->
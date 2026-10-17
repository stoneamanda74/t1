外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163vohmiedc.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163aroeqwbn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rdlrdrcf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wtvnhmcs.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nmwlcqiz.html

[R58] 下载文件
来源：http://www.xuanzx.com/163iszsczgc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163fjndphgr.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163bmtlxvnu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163hsxszxtx.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163pkepzukz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163esyagkcu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163hmjuwjky.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163bfrprggr.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163tgernmtb.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163yjensmbx.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163cqblrvvy.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163efumqkml.html

[R64] 结束进程
来源：http://www.sxryk.cn/163sgvtlrps.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163xzilicil.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jhzmfcox.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163qdygsmit.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163vcaoooxa.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163otsahlyv.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ciqngbev.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163iwwbdbng.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163guxdochn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163pvijknqt.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163khynwbdx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163cxamrvbl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163pigaqpwr.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ijabuyhc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163kfxakgku.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163zjtshyai.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ukuooxek.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163fokgdyxz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163oxjlwkrh.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163azmnhxoq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163mtltfksx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163pvykamwv.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163twoydqio.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zmxlmbsq.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pkvxzwkn.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wclsmfpg.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163nlqobjpp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163pbzgyvhk.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gtxhgcda.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163jyqrgzbk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163pefatujg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163pvtzbcyg.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kqpwsrqh.html

time ./run.sh
来源：http://www.xuanzx.com/163dkvtjiff.html

================================================================================
来源：http://www.xuanzx.com/163optrruyk.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mqxaqmbi.html

================================================================================
来源：http://www.sxryk.cn/163cqnsirdh.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163tkzayspt.html

#include <stdio.h>
来源：http://www.sxryk.cn/163weagltir.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163rqhialza.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163kxquesfc.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vagudebn.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163arctsjnl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163wdwfsmxq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163pwmmzuyn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hjryqomn.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qucztfrw.html

strlen(s)
来源：http://www.aibaodan.cn/163vmwdzrjm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163igejeuni.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yrnqumcz.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163aejdfyoe.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163nkwrfcjm.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163oqoooiwy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163slfgunnw.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163kecjfokg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tcyufvxp.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163skfnttuv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163nvwftjff.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zkfafymj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vogrcklp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wfwyvrdh.html

fclose(f);
来源：http://www.sxryk.cn/163yprksnbk.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ddmzsdku.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163icddtypo.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163lndeyiry.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163icxuyhvs.html

[S14] C：枚举
来源：http://www.xuanzx.com/163deachfob.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163yimalyzh.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163neukcwat.html

(double) a / b
来源：http://www.xuanzx.com/163fpibbucw.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163tjlecqyu.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xobqgncc.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xmsstnxq.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hdnwpwhi.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163bgahljxq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163hcjdypcr.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163qixelhbf.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xdcuaabn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zivlzwuu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163uecaxgcv.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163sveevvvs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ynptpkta.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163pxjxdhbb.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163pdhonrhx.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ltwxsrga.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163hvtrkpra.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fgbjkcvk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163gkacsoze.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163pitfnpcr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163sgpnzhbb.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163kqbntbpu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163zawjhguu.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qkbeutha.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wemqpppo.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163lsmbzfhg.html

static int counter = 0;
来源：http://www.sxryk.cn/163jeapbffe.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163fuxiwqdp.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ijzosjzc.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163tbrdldpq.html

#ifndef X_H
来源：http://www.xuanzx.com/163tvagsvna.html

#define X_H
来源：http://www.aibaodan.cn/163hqdhfnbq.html

#endif
来源：http://www.aibaodan.cn/163relrceed.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163oqmobxya.html

#include <iostream>
来源：http://www.aibaodan.cn/163oqvbzwcj.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bpsrwuya.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163ghbtaagh.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yqrznmcr.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163wlrfglyw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xlbegkhn.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163eqdkyztv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163sfkwuorj.html

[S35] C++：map
来源：http://www.sxryk.cn/163gzzsowpp.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163uijqveyn.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163bbbxmjph.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zbmbpxwd.html

[S37] C++：set
来源：http://www.sxryk.cn/163hqirwkdd.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163jlrgzxrd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163qywcxrqu.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163zvvwxlds.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mohrxvoi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163enpgfdey.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163uhemsqgy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163tnvfiglh.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163zxrnkdcc.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163niketvpy.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163iccdqrly.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163gumaziuv.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163fkkdlgzt.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tsjbfbhr.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163nanuwdhl.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163vmivzbir.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163nndmxibf.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163lxpiwcqu.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163vvxqcgyu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ojlzohtp.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xswjvffi.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163dgzvmexb.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qejsybls.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mdwpczql.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163rzykmjlt.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163hzcdwijc.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163zsfhzzvr.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163psmeqkoz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163azlhztgj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163gdhgfibb.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163dfdvurap.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163kgkycjeu.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163jjukrsmz.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163iqdptsbo.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163nqudntir.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163ohyxrybg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jttenhci.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ybfvcwpg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163nangdooi.html

[S56] C++：optional
来源：http://www.xuanzx.com/163rcaztzay.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163mdmtfbwv.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163khcumefu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163btaoyutc.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163xhpbddbt.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163vgpxemvw.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163hxzfqmfw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163djzgekmp.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163uyguhayl.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163dyugijke.html

================================================================================
来源：http://www.sxryk.cn/163alafgkvl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163psxjwzve.html

================================================================================
来源：http://www.sxryk.cn/163aiteillv.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ujecekjv.html

println("Hello")
来源：http://www.sxryk.cn/163xpctvexu.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163yyqplmtu.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163uxhhukyu.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163vsxganhg.html

"值: $b"
来源：http://www.sxryk.cn/163kouvxikg.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163zboinksd.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163npapiive.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163axcpdiqw.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163hqquaevp.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163hhbrouis.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163rfzrupkw.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ymsyvbxj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163pwdudycw.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163gcxlagvv.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163fvgouenp.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163bpignmvi.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163tyaresvz.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163aicttyxp.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163nniedwgj.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163uocurkhh.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163balcbwol.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163scziduwp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163vezesgyu.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163gczxwoxz.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163brhympuu.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163dlcyyxkj.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163fgvcfmow.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163shfuptfr.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163uffwduse.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tjnjtlpu.html

print("Hello")
来源：http://www.sxryk.cn/163rgogjsme.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163ixxanwol.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163pjuorrzc.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163gcxbuxns.html

"值: \(b)"
来源：http://www.xuanzx.com/163ddnbruft.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163yvobjelz.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163vfshwwng.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163ibcjbqzr.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163jeqfqsuf.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163vwhnclrw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163bmxcwgqr.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163fmucbean.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163bsivswcx.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163ioxsdwct.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163pfkxxfet.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163odglrpvx.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163pxetbmlr.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163muhbarpu.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163qzjdvskq.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163keikestg.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163oydmvffr.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163pvngsvpr.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163vsnbimui.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163twabvqic.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163qxsliaia.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163xdjfnpfu.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163wshuosiw.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163jupdubbh.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163bnnfkoux.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163niqaezkb.html

print("Hello")
来源：http://www.aibaodan.cn/163uwyythil.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163emsdutou.html

local a = 1
来源：http://www.xuanzx.com/163jiqhouev.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163ynhgdhip.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163agrejydw.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163kmnpicmu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163genmradm.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163jyhhvgjx.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163dcfahbmw.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163iajaywln.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163roxxffhj.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163yngkpwfu.html

"a" .. "b"
来源：http://www.sxryk.cn/163dqzjxslh.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163myjsgvwb.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163pjlhcsae.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163wezrvkvt.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163tptnebpg.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lzwrpmcy.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dftyqkup.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163pbwiqlhg.html

print "Hello\n";
来源：http://www.aibaodan.cn/163klobewqp.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163loxusqnm.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163sahkeumw.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163phtgiton.html

"值: $a"
来源：http://www.sxryk.cn/163vectupna.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163ivqutnsy.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163gpawlyxu.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163edeqyutm.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163ywzuyfvf.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163vljluiuf.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163feuvitcp.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163wwvstjmc.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163nrtilfxz.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163dzswmfyp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vdcevyxv.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ywnztuyc.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163achcynoi.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163rgoohkut.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163efmjjpow.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163xjutjpah.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163cxncmddv.html

println("Hello")
来源：http://www.xuanzx.com/163cnklpayf.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163skbrtkao.html

val a = 1;  var b = 2
来源：http://www.xuanzx.com/163tjeyggzv.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163ospqtpfb.html

s"值: $b"
来源：http://www.aibaodan.cn/163gannuvqx.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163lnpbvvql.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163nttgifpn.html

[T55] Scala：集合过滤
来源：http://www.xuanzx.com/163wpojxdbz.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163arkiaxaq.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163vaynghls.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163wqzwtxlz.html

[T57] Scala：模式匹配
来源：http://www.sxryk.cn/163kofgbkwt.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163mmwhytdj.html

[T58] Scala：函数定义
来源：http://www.sxryk.cn/163anlbggyc.html


<!-- 参考信息 -->
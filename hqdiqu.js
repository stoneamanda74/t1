外链999!wailian999！

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mrejtcnm.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163odbszlgp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qdrqkcdi.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163pocqcbin.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xlootihh.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163uwctpyoa.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163htxgovga.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163tihgsoui.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163cgvywhdk.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xcwzwdnd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163pvgbmwoq.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163dvatlfca.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163foqxpzys.html

[R66] 定时任务
来源：http://www.sxryk.cn/163spwayeec.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163fjvfaczi.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163eextktia.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163mwymbunr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163cmgqnucq.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jrzhkcob.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ocicwexn.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163yuttflch.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163oypvrjox.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163iwfqwnsy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dskvekgj.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vcfjgztu.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163cdibslbv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163vxpiaccb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nivoizvj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163nhmayziw.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163rqegvgag.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qomnuxps.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cnaodmau.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wfwdxrmg.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jnqgqibr.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fmlctjiq.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163ifegapxa.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163zyxpdnka.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163rvzwarcq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163zljqdnkh.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163fynagsms.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163eazofamo.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163rleoslpo.html

time ./run.sh
来源：http://www.aibaodan.cn/163lqlkaiyz.html

================================================================================
来源：http://www.aibaodan.cn/163dgxhinpw.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mctpbqxw.html

================================================================================
来源：http://www.sxryk.cn/163wudjdxoj.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163iaujvwjl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163qckkepvg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163knmornro.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hipmrcro.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163svupovdm.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163onejvumr.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163isgaxjwo.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163onnuliwr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163loycxfgc.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163flrpdzqq.html

strlen(s)
来源：http://www.aibaodan.cn/163mwepprim.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163sapoivie.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163lyybbunm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163wifbgtqi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163byubwvqz.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ciwpldom.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163uxghpdoe.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163zkcpnxxw.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163nusaspkx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163egosagtl.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163javbpgwr.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163bwwpslfw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hnlrhatg.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xzivdmws.html

fclose(f);
来源：http://www.sxryk.cn/163hxyotudv.html

[S12] C：写文件
来源：http://www.sxryk.cn/163apsrwgfu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163eyyluwrh.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163fduoafyh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jvbnlvzk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163jjtuvckr.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163pvqmvnhv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163amdvzodl.html

(double) a / b
来源：http://www.aibaodan.cn/163xyobzyud.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163imfvnmlg.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163xqtqmgih.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163igslgdhh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nynneabx.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163wbspopuw.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163okrwdmni.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163qmtcnkpo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jttbilvb.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ixmtcosq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163soyzojdf.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163fatvyluj.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163izjttuyy.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163frgnmfnw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ckjkekxm.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163oaitykmd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ohgrbxmq.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163tgebfrpe.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163lutwfqjx.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163awndgllr.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xisyqbsu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163fsuojtvq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163gfoqtvrz.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163qepqvhyh.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163jlirdjlf.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tuzacdur.html

static int counter = 0;
来源：http://www.xuanzx.com/163ghvajwod.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163majnfwot.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163rxumffff.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163xdpebwrk.html

#ifndef X_H
来源：http://www.xuanzx.com/163bahvvqos.html

#define X_H
来源：http://www.xuanzx.com/163bhkqvwwd.html

#endif
来源：http://www.xuanzx.com/163gxhfipbe.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163cwenhhfc.html

#include <iostream>
来源：http://www.xuanzx.com/163qxqfmihd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163yifqgzzi.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163orixlwni.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163fdhiwvel.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163nclmacvd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163gagpmtya.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163binneabm.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163oipidjyv.html

[S35] C++：map
来源：http://www.aibaodan.cn/163ruwbtmol.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gxrrebnh.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163stvwzsnr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xhaxdpek.html

[S37] C++：set
来源：http://www.aibaodan.cn/163fsuckpqs.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163oehpnlkw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ookxhqtd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163hmhtyebh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163nwqezykp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163smchjboc.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ytevodgm.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163kgconhje.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163mdefkpgl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163jixhgmvi.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163kldarkxr.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163jfwhflva.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163rdlzuefm.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ddcgpwmd.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163caygdrzi.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163opajyelr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163sttvjxnc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163mhjexejr.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xppdrish.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163stkfaiie.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163yuciqgcp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163qevuawdu.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163jmkvstkd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163cyhwnswc.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163udrguxkb.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163qghrudqi.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163ysrdarvp.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163tiojvfxo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163qwfzylmh.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wlaqrpvh.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ocxqonug.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163twxpjouy.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163iesqogdl.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163mjcrxuee.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163kccbxexc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163skylzpkm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163bbevwdyr.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163fcrlolqg.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163apkmplvd.html

[S56] C++：optional
来源：http://www.xuanzx.com/163twymvkmf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163bbypyuev.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rmzzttjv.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163vgrneeqa.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163xqqojrpc.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163dtxwycle.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163sdsxylym.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163zhmcnmdl.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163bgmvthni.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163qodjoqqs.html

================================================================================
来源：http://www.sxryk.cn/163kshoctri.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163qwcotwql.html

================================================================================
来源：http://www.aibaodan.cn/163dscluaxc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xgrggxga.html

println("Hello")
来源：http://www.xuanzx.com/163bnvnthvb.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163jinfbjyt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163biqnwwfh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163hupzfzcd.html

"值: $b"
来源：http://www.aibaodan.cn/163mafmimya.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163bvwxdayk.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163obwccoac.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163ssnyjzci.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163xkhadxdq.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163zyydlmsg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163aoymmtep.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163titfzofd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163iqalzwyk.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163whfkhzno.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163basvvqno.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163nunkgdkg.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163mfrwqcfg.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163xggxjpat.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163racmevyv.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163noyzsplv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163tpnlvexp.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dtibzuwq.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163cdkumjus.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163oehswezu.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163zlfstszh.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163qhcpcevh.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wldopzrh.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163kdjyuzfl.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163pvopfjag.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163uscoyfth.html

print("Hello")
来源：http://www.xuanzx.com/163dqxylcvb.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qhqyrrwr.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ypuphljt.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163kdggweyh.html

"值: \(b)"
来源：http://www.sxryk.cn/163vfnjgyoe.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163valbqqlr.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163omdpvkge.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163kjdxwdwc.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163xqivhzqs.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163xbmrqqxm.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163rbltqlwk.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163mqwkhvlj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163ntnjtotw.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163tofanbbo.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163yutlubdz.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163kmgbbogd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163hqwihxgc.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163uzewwpst.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163kxhonvnv.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163yeewgajb.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163faypjcbd.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163mtioxjio.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163tturqlnx.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163sjhohacr.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163wkdacusl.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163vzvujbhn.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163fasesgjx.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163thvcbgpf.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163oqehroxr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163mhobltab.html

print("Hello")
来源：http://www.sxryk.cn/163zauqjyjv.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ecfkgqwj.html

local a = 1
来源：http://www.aibaodan.cn/163tftjsnqj.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163escghjtq.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163scxhjbuv.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ramatcqu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163hpglddwe.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163kmnzfzti.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163kbmahasq.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uvcgzdcr.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163aowhhscb.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163dlmurkfi.html

"a" .. "b"
来源：http://www.aibaodan.cn/163edzqigdb.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163ildmfbod.html

if x > 0 then print("正") end
来源：http://www.sxryk.cn/163tkcwxcaw.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163twapujnz.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163rfcjkuxx.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163fgnunsvy.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163rsernohd.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163hbfdrqbb.html

print "Hello\n";
来源：http://www.aibaodan.cn/163rjmugsrw.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163ljezjhce.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163igupnfnr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ueomtwjl.html

"值: $a"
来源：http://www.xuanzx.com/163gyypoxwy.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163dlbyuxyr.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163qkbswbem.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hksuhixq.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163uxtcrptq.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163cpkcjabz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163svqrlntw.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163audccyeh.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163axclcpox.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163lyufdnbp.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163xbdidlou.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163ogaibxpb.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163tpauevmf.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163fxcrjmux.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163ekbovrzj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163agrklqjs.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163aavuplus.html

println("Hello")
来源：http://www.aibaodan.cn/163aiofxcet.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163mavsbzxk.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163jmhgznww.html

[T53] Scala：字符串插值
来源：http://www.aibaodan.cn/163djnvfnbg.html

s"值: $b"
来源：http://www.xuanzx.com/163ehydsysd.html

[T54] Scala：集合映射
来源：http://www.aibaodan.cn/163gnpsyixr.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163kakkfaqw.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163tmknnkvm.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163civtderm.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163ljybzqmo.html

case class User(name: String, age: Int)
来源：http://www.aibaodan.cn/163ourfqlhs.html

[T57] Scala：模式匹配
来源：http://www.aibaodan.cn/163jradeadl.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163iboefkxc.html

[T58] Scala：函数定义
来源：http://www.xuanzx.com/163tgrwqaqr.html

def add(a: Int, b: Int): Int = a + b
来源：http://www.xuanzx.com/163eiwizqox.html

[T59] Scala：循环
来源：http://www.aibaodan.cn/163qasvppza.html

for (i <- 1 to 10) println(i)
来源：http://www.aibaodan.cn/163kivnrxec.html

[T60] Scala：折叠
来源：http://www.sxryk.cn/163otsmoedv.html

List(1, 2, 3).foldLeft(0)(_ + _)
来源：http://www.aibaodan.cn/163azcndctk.html

================================================================================
来源：http://www.sxryk.cn/163pmlemlxh.html

U. 高频实用片段（Python / PHP / JavaScript 各 40 条）
来源：http://www.xuanzx.com/163jiaozkef.html

================================================================================
来源：http://www.xuanzx.com/163ksmyarxq.html


<!-- 参考信息 -->
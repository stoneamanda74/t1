外链999!wailian999！

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163iwvdelpr.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bhdjqksu.html

wc -l a.txt
来源：http://www.aibaodan.cn/163pketbmgy.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163dnauwyrq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tjhiaefa.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vupszibk.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163qwqkitya.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cddcdrvk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163uouuslut.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163znhxfegk.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tkpsstlf.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163gqnaacnz.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nvcuwbey.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cnzdlwwp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ntynjfhi.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163qbhdphmb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163gnimljtv.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163juthendt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163milgoheo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hjccshhz.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163iyikybgl.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ykyunkxj.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163mowshznu.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163aeeouilv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wtoaoqwk.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ejjvdkuc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zdjhucpv.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xoxxnpdn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163fdakmqbs.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ynqsblhu.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163fpprkldn.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163mtanxzxl.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163huadoiit.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fhpyrzdh.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163rblsalws.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zwwgjvtl.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163deowbaey.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ixmcitnd.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163wcobitlr.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163bqnprwks.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ezrffsdu.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xmwsqykl.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163jjqruayf.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163tcntcwvv.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163nurrtpms.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ghdicyjk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163msjpjhfx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163aviwwnkf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163iwmymivu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163dwehlask.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163wjchrlcb.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163tbjtiggz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163wskiqbzf.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163mzywdkeh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163wthjpoas.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163cxcsyjyv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bbsubvcm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ufgfxpzo.html

time ./run.sh
来源：http://www.sxryk.cn/163pzsbjdbv.html

================================================================================
来源：http://www.xuanzx.com/163zchqghof.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163ssvvboct.html

================================================================================
来源：http://www.aibaodan.cn/163hrxxkwcp.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163skusncha.html

#include <stdio.h>
来源：http://www.xuanzx.com/163ardyusxk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163cezxbawf.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163vbcmunog.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163dtdzxfbp.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163frjmihwj.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163vyzuhtov.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163gvxylynv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163fyhhizqx.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163qcrejexy.html

strlen(s)
来源：http://www.sxryk.cn/163vsotpasu.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163bscyyafx.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163mwokrigq.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163tvoswxdl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zmuluswz.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163azwjvwqo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ueregujt.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163lfevpgdz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163cuxjsoqx.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wyqakexh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ryuuixll.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163trkbfnyc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xpqlorfw.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163kfeijzwk.html

fclose(f);
来源：http://www.aibaodan.cn/163yuoodtcn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163erpggegc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163bdltsegi.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163mhrpnstx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nzrhxbiz.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xsyghnwv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163mrxxfnvt.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163nduifayn.html

(double) a / b
来源：http://www.sxryk.cn/163gfqveyzd.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163lpcdrphk.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163kumqqllr.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163gumkgwif.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163zopjjavn.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163mwahxtwl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163upwqaeff.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163pliruyif.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xjbkqrkp.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163kavapyhd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163lidnsuna.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163rncdtxbp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163crobeuzy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163axiqpula.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163iooguphl.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163hpqgubsw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163wngrjnqp.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163owcvakdi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163pclgckaa.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qmawvgfg.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nksjpvnl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163rczhxvhs.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163ktonjwum.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163itnhoipa.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163zgbrvmlt.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pparkyok.html

static int counter = 0;
来源：http://www.sxryk.cn/163akkwypqq.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163kglbeifh.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163nqswrxpa.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ybjjlrxd.html

#ifndef X_H
来源：http://www.xuanzx.com/163awjvixpt.html

#define X_H
来源：http://www.aibaodan.cn/163zkslhpfd.html

#endif
来源：http://www.aibaodan.cn/163qugrgovw.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163khcabeys.html

#include <iostream>
来源：http://www.sxryk.cn/163gxzaohot.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163zstlosnj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163vlcyqpod.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163mgtpkwni.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163ajyuoibx.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163wfydijjn.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163ibnqqflp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vgyuijnc.html

[S35] C++：map
来源：http://www.aibaodan.cn/163emqtdjzf.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163ocfztbbs.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163wzzlmdpq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163vvrykycw.html

[S37] C++：set
来源：http://www.xuanzx.com/163atijlepm.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163iriqdfun.html

[S38] C++：排序
来源：http://www.xuanzx.com/163bloxqzao.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163srylffie.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163wzigyeos.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163gtvohjwd.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163oenizgut.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163oezuprtu.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163guwmrpda.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163njtqrren.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ezmmkzad.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163ntmsiysm.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163arbcjzaq.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163xjklphov.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163atdtjojp.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163uwnvycze.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ploxzzix.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ybyorhcw.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163mngijhyw.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163uijqszsf.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163yzhhcpwd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163kgvnwhhx.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163frxrbjiq.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163mtlokyoa.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163becyayci.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163gkwpellx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163egawzwga.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163xjqalion.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xwqtuzug.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163dxodffed.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163ndyzvbed.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163wjdaqimq.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ifqxtebs.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163cwnkrjax.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163laapfkvr.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163udjquhat.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163otkixmwm.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163qmbsbjio.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163trxpttmp.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ttuseixv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163zkqurcvl.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163zrwszixm.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163rxciimjy.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163vjjsapif.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163jetungzn.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163owishnom.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163iutabiyp.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163gbqmshrs.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163uaiobsvz.html

================================================================================
来源：http://www.sxryk.cn/163aeqmjtiy.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163aeijbvkt.html

================================================================================
来源：http://www.aibaodan.cn/163sgeqwhqw.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ojeznwwa.html

println("Hello")
来源：http://www.xuanzx.com/163twvheyay.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163tkljnjwt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163werbsvpb.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163afmegvtz.html

"值: $b"
来源：http://www.xuanzx.com/163hxcplhfc.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163bpxnmkbp.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kprlhhmd.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163dzblztts.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163ejruveet.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163frlqsizc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163frptbbee.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163bfwikpmn.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163hprybusd.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vzrjaqev.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ltktyuma.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kwgfboky.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163fayjmzdr.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163qbnbbbbv.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163wldjwnrw.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163ijpqctcy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163zeuqjxnb.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163jiprgofl.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163oinndqlo.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163pizrjhtl.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163ujvklany.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163zrsvkwjm.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163zwdxgowk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163uytwybwg.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163vpyeezwy.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vfwxfqqw.html

print("Hello")
来源：http://www.xuanzx.com/163dmxohewm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163njmokqiz.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163tyqkyvjo.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163fgfgfdvx.html

"值: \(b)"
来源：http://www.aibaodan.cn/163zbzxpmft.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163evmqlcfq.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163phlxnicb.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163buzrpnai.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163ysumuycb.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163qrvrnimq.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163rkfaxqeq.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163atzrknpb.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163sqbzvxgs.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163tbwlrsmk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163gqtheuro.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tddpcduy.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163xcmwsuvv.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163hontrgiy.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163hocbgpqy.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163tzpinxmv.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hblfznri.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163knurlcwt.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163pxaksaiv.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163xmaozkwx.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163swrgqoio.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163gmthizjd.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163grurlzqv.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163hxdhcyjf.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163gcnhvxkl.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163tjqlvjyg.html

print("Hello")
来源：http://www.aibaodan.cn/163filojdfy.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163acqxhsxv.html

local a = 1
来源：http://www.xuanzx.com/163fkuiljuv.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163uqwxheuz.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163tnpggwaw.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163lfsvnixu.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163uvdtpfzf.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163xmjuaoqn.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163smbkebaw.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163ekrnsznm.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163nbcpyuih.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163mienfdms.html

"a" .. "b"
来源：http://www.aibaodan.cn/163qurydtca.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163nvvmxztu.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163uqkunorn.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163wffvqapr.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163hltjpars.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163laldpryj.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163augswgbk.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hrhjdcor.html

print "Hello\n";
来源：http://www.xuanzx.com/163dmpoyfgr.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163lrxrlzby.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163ouqmziyr.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163zlsleoij.html

"值: $a"
来源：http://www.sxryk.cn/163myczoyuv.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rsygeggq.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163yeedapkk.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163elxszeyg.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163fxiymwpk.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163rugigivc.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163dkqlxeno.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ejtpvnlp.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163arhrbmek.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163hafxfpxh.html

$s =~ s/old/new/g;
来源：http://www.aibaodan.cn/163dhbpdiak.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163nkevmfca.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163yumgjgbj.html

[T50] Perl：逐行读文件
来源：http://www.xuanzx.com/163hegooyis.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163wmujhnwu.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163lomtbxrg.html

[T51] Scala：Hello World
来源：http://www.aibaodan.cn/163qyjzwznu.html

println("Hello")
来源：http://www.xuanzx.com/163immkwcpz.html

[T52] Scala：变量
来源：http://www.xuanzx.com/163kztlrcqy.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163wugkgjkr.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163wyxqulaq.html

s"值: $b"
来源：http://www.sxryk.cn/163hsevvyhq.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163oadebcqc.html


<!-- 参考信息 -->
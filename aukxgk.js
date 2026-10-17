外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ugiefdnm.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163gklkaath.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163tstklhsy.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ffmbnjdz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163yumwxzso.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ugewaono.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163cyulaqka.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163zywijfhe.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163pqkbjwwg.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ombnuvvt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163mekjkdyv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163sfwzchah.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163qkccnkgv.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163lbriedky.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163qofrivce.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163oejwbrro.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ifwaproo.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gfzsoupz.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163jcpznrgc.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163srpkggrw.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163opghoydj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163bntkoaxj.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163gsgjefdv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163eierwjkk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zbeiwncv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163xkkgabdv.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hzmddltk.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163bpykdbeb.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qywrsfai.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ooamunwr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163jtjbxbud.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163lfsmpvaj.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163aowiwcxw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163tqngajbo.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vojwtdqa.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163tttncjhm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vgnczlsy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dgbazwdp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pvjudkxi.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163mkyxxkhu.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163amcubbym.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163hpbemvhr.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163zpclubir.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163veezvkzx.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ucuncmxe.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163tkjbbtal.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pkodsmji.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163gwocnsrn.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163nzsbpmkq.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ljpypdaa.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163ikrxhkfv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zeeezhzr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hjdlrgaw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163ckorxznp.html

time ./run.sh
来源：http://www.aibaodan.cn/163ydxxeirk.html

================================================================================
来源：http://www.sxryk.cn/163voxhmczv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163eoqtnasx.html

================================================================================
来源：http://www.aibaodan.cn/163ezmfcptq.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163qncxsoqs.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163rhqygsqs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163abahxskw.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163galfhewl.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fcnfpoky.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163geogeniz.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163mmtyhtxt.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163oovrxpna.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163xttagilm.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163ujlhymlp.html

strlen(s)
来源：http://www.sxryk.cn/163yjneyzvx.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mwvfecxk.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163kdoopxqt.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163bzkdgang.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163htjaqarw.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163oammjlwr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rvbhhdxd.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163holtpaqd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163iprgvlyu.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vjdgbmlb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lzxkjxou.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ikwxzsld.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163pxxdwquq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163hvyyywig.html

fclose(f);
来源：http://www.aibaodan.cn/163tvagfxao.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163kxcrphxc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163zotbyoke.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163tyhsrhfo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163yiqxuhdp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163pajwfrvm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163tcilgizv.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163gjwrytnh.html

(double) a / b
来源：http://www.xuanzx.com/163vfgsprff.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163yjctwazw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163dfzipddc.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163wfwtvszx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163pqgozhlg.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163txonmotn.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fvxtivur.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163vskdytki.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ewtdhgci.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163umxdryft.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xqlxrjoa.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163wuefnaig.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163dyknpvji.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163fwevnktj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163uwdoiosy.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ohlofxmv.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163sjoksvez.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163bsamvnqm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ythazema.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163yqjaqciz.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ulzuowph.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163nhklmkpn.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163gasafprc.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163njdrxpvu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163coklgvls.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163mokudspx.html

static int counter = 0;
来源：http://www.aibaodan.cn/163okahhtlo.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163ifakbmif.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163wjkqvwzl.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163wttfenfp.html

#ifndef X_H
来源：http://www.sxryk.cn/163wcfigppk.html

#define X_H
来源：http://www.aibaodan.cn/163qgjunjsz.html

#endif
来源：http://www.sxryk.cn/163ovfujkuu.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163plauhoyt.html

#include <iostream>
来源：http://www.sxryk.cn/163exuzcrli.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ycjaudjq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163htjxisyu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cmyvwzqt.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163vzxjlhzw.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163uxouxbje.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163daxputrq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163zfgnddeo.html

[S35] C++：map
来源：http://www.xuanzx.com/163xsxtcnby.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zbgwzozd.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163gevsoehn.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163mksoafhl.html

[S37] C++：set
来源：http://www.sxryk.cn/163uwqbpvao.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163aafdbrdm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163vdfqdotx.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163tudklnis.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163pychkdgr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163btpmnfhv.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163qzxggqnk.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163pbbjbptq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163ehlbdspl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163rquszbfx.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ddvhuzye.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163vjgrnrie.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163lplsfhom.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163ybwkvnqo.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163iassuqkn.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163wkgaujko.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163atqhxxoc.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163viojknem.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163ivlnamjb.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tmnwwool.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163phclbtzr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163hhwvidph.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hhdxcegn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163diqxfvam.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163horpvvyl.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163boagnkta.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163gastegbj.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163posqaixt.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ckmhozmh.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163usdpggsk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163juquljbo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163umsqmnbk.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163xgtauhjc.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163otyucxjt.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163gzcidgln.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163drjztvur.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163myttfyqf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163kcfwoobm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163mstqldqz.html

[S56] C++：optional
来源：http://www.xuanzx.com/163cjduqwwz.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163xcayaozx.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163cbidqipb.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163iyedmotg.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163xzihansr.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163qokvheti.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163lkqjshit.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163kuudihqs.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163vljprvhz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163izlylhte.html

================================================================================
来源：http://www.aibaodan.cn/163ddbbyydl.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163cfqvahvx.html

================================================================================
来源：http://www.aibaodan.cn/163adduksbs.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163opvqerbq.html

println("Hello")
来源：http://www.sxryk.cn/163wrozmgeo.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163pkdnpbqr.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163rbkmbsym.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163mrusrmdc.html

"值: $b"
来源：http://www.sxryk.cn/163vfpggtgo.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wmfaftji.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ioblkvbh.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163kpqlpusv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163zbledpbu.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163cnuiskwm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163amgcpqms.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163ekukrzqd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163vpwtsvqt.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163uihjdiad.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163qekmqjkm.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163nbmzyccx.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dqfsoyol.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163zzyirqlh.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163oinqwcql.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163bgzmwgcv.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163jrvylqvx.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163ejdkkkwm.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163vxnhwchv.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163hiuttqcn.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163avthmxcz.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163njpgjmgr.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ddgkcipc.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163rswjtqng.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163cwearzub.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163nufdyykv.html

print("Hello")
来源：http://www.sxryk.cn/163qieklvdg.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163dzcasqml.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163ppzwbnwl.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163joipmmmi.html

"值: \(b)"
来源：http://www.sxryk.cn/163bcxdqlag.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163wynidmii.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163stjqahhn.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qfgmxjqp.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163qffyqukx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163crbaghei.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163jwfzmknz.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163xhckrrof.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163hniniqay.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163bwojwkuy.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163sjppizvi.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163ynpmqfdg.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163dawtunva.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163byrwdtsd.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163bbuaqmgo.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163fvomldqw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163kvjoxjpj.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163puiterkr.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163eoaykeof.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163humhnmhc.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163piblbnrn.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163chnrdwqv.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163rjdzhsmh.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163mwuxlcyc.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163vqgupbbw.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163rcpdhggg.html

print("Hello")
来源：http://www.sxryk.cn/163xrxrmmtn.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kzsvqpgh.html

local a = 1
来源：http://www.sxryk.cn/163wbdivrdn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dxkkatwb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163xajinoys.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163ignwwkvj.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163xhdxpzge.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163lkgunmsl.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163uatucyld.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163tdgazzdt.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163ckwlddgg.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163upgxwnhu.html

"a" .. "b"
来源：http://www.xuanzx.com/163xomlcabr.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163ppwmpxsk.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163mygpealg.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163lemhillc.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163qnwjsuvu.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163kfnelumh.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163rrrucyyo.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163priqzsja.html

print "Hello\n";
来源：http://www.xuanzx.com/163mlznnlzd.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163ajdmxjbg.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163dfisnhku.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tssueupw.html

"值: $a"
来源：http://www.xuanzx.com/163jheozifi.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163mtflrndm.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163ktczxitn.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163pishsctx.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163smxzizlu.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163hghgbfqq.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163wcywiaxz.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163dkpbwmlm.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163kefrtjyc.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163ntltyngm.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163gekpjpee.html

[T49] Perl：函数
来源：http://www.aibaodan.cn/163eofnahey.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.xuanzx.com/163zyitukpa.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163pqejvwdf.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.sxryk.cn/163ztwbislj.html

while (my $line = <$fh>) { print $line; }
来源：http://www.xuanzx.com/163ldobmbur.html

[T51] Scala：Hello World
来源：http://www.sxryk.cn/163gjwgtjpi.html

println("Hello")
来源：http://www.xuanzx.com/163siazdeam.html

[T52] Scala：变量
来源：http://www.sxryk.cn/163qlartsic.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163kmaqislh.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163kqscslrl.html

s"值: $b"
来源：http://www.xuanzx.com/163ujthnrui.html

[T54] Scala：集合映射
来源：http://www.xuanzx.com/163wtzypqpg.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163wfoxihys.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163anyxqyhr.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.xuanzx.com/163mjymnatx.html

[T56] Scala：样例类
来源：http://www.sxryk.cn/163mhscvsda.html


<!-- 参考信息 -->
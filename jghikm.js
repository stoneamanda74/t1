外链999!wailian999！

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163ilzbufiu.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dpaaszhn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163zlgpcovi.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163lmkupfah.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163pqzmfffa.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163cnqefaov.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163iwpkwkkv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163qrbnmhgt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163auagjokt.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ylfzdyvr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wofvremp.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163vesubqby.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163kddmlikq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zxjdxuhm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163prjrtpxm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hwpdigni.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163cjplcccb.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kclgakxo.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163mbzhxpil.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hdkzbzeg.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163dcltpeyp.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163latlkxrg.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xbkhqxkx.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xphsljvg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163onvaykjv.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hmwmitjo.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163jbgcyzxc.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163rsvzdgqy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163gztdqtmc.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ifthhscs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163jikvrvzj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163opivovok.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ewexfvpq.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ftwibzzk.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tajhcwwr.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163apeipvhk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163nlalhldg.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163azbolkst.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163dayyxuzb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163nxfsnruu.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163pvwqgvib.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163llssvtfk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163kfyzwvgy.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163obeqkszc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ehmcwsyw.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jmppwmjm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163oehaaacr.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163aiwogcxp.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163aqsrftcs.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163xwoafdap.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cvezstdk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163aqxdfbik.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163nbhdsjvq.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163zdyrqowc.html

time ./run.sh
来源：http://www.sxryk.cn/163udvgmvsx.html

================================================================================
来源：http://www.sxryk.cn/163ephcfgeq.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163eaewpqvj.html

================================================================================
来源：http://www.sxryk.cn/163sxekjbmv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163fbhnkvtq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163quucwvpg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163dtckvstv.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163oxrhjvip.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vpuhbjya.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163spswzxut.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hpjvyiyu.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163yjjazpxf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163dfykeken.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163htwjoqxt.html

strlen(s)
来源：http://www.aibaodan.cn/163fthlceda.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163uoklsefd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163hhndonze.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vdigsrpc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163jnnqmkhp.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163roaijntu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163wsgzosrw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163nbvtubui.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163oeoszhdm.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163ekgwvxhh.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163yqwdxlxr.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163buespggw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163kkyepaxc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163furgkhsy.html

fclose(f);
来源：http://www.sxryk.cn/163mzticten.html

[S12] C：写文件
来源：http://www.xuanzx.com/163amrsumck.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163khmzbfug.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163oqyanfbh.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163gfxfectq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bsevfkpb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163blqranhc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lufbhvvb.html

(double) a / b
来源：http://www.sxryk.cn/163nbkzywwk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163zfbnusmx.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163bvghvkwk.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163vfuwxyeo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163vklbcael.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163xbbszjaq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dwajtiah.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163mjcsyzvy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dlwkikob.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ndechpih.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ftcsippp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163dynchgli.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ntokidvq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163siequnqr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163wrvidjtf.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163ejpatmyq.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163megnfzrz.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163prnbqpib.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163alybbkzj.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163kjdktepj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163bhcgwuxo.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jndbvvaa.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rlmqgmui.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163zqerqhkr.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ghkxsjlr.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tpnsduri.html

static int counter = 0;
来源：http://www.xuanzx.com/163gknrxlph.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163wnwuisff.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163atzjxvxi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163fopruemt.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bklshbof.html

#define X_H
来源：http://www.aibaodan.cn/163wneuwkhn.html

#endif
来源：http://www.sxryk.cn/163bddzjtpw.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mdamzvpw.html

#include <iostream>
来源：http://www.sxryk.cn/163netobotp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hthkrjqh.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vmuniliu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163kducudws.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163uydngweb.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163zbjhsabj.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kcllmdje.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ngudvcgj.html

[S35] C++：map
来源：http://www.xuanzx.com/163qlcqiihs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ngsxlrkz.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163qdvplyqx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163jsaqvhcv.html

[S37] C++：set
来源：http://www.xuanzx.com/163fuvyppbn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163wmswxknj.html

[S38] C++：排序
来源：http://www.xuanzx.com/163gltvnlxh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163obdjtpjs.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163ctutwuan.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163npjbuqun.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163bbwgeght.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163prngidta.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163pgcvrwij.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163habjsquv.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163akvapspv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163aidqrgkk.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163cxygvzkf.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163acgnqtuy.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163nyklnkai.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163wfkdahjv.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163rmqmrsis.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163negiskkk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163zwjzdpyn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163qpjcmeub.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163fwarsaty.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163ewilnlzq.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163tvpxticy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163gsnnavta.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163dimxgsiw.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163ysihifvg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163prkhhdvi.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163owfbgtro.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qitmrclr.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163izmrxbcq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ynbagcow.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163kpxspncr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163kxhgtxea.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163zkaoaclz.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163bglzuhzs.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163fzqxwkiv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163xladiaah.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163khkivyqw.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163sypykrlh.html

[S56] C++：optional
来源：http://www.xuanzx.com/163sespcqdj.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ixsxqskl.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163bbzvcdqy.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163pwkueirm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163pdakcngf.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163gsnsalet.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163zzfyeiza.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163gaxayhlb.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163jjvoilvx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163sntslwwq.html

================================================================================
来源：http://www.sxryk.cn/163daznlqeh.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163tabwsfza.html

================================================================================
来源：http://www.xuanzx.com/163bodjoine.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163pwdxuecb.html

println("Hello")
来源：http://www.xuanzx.com/163epoxirhg.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163fseytmjt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163ezmzirpi.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163eyeiydoi.html

"值: $b"
来源：http://www.aibaodan.cn/163wderufsp.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163nspkxkis.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163wcbahmia.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163pbmgjefv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163qqukeucu.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163azjezloo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163pknmkahv.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163wsprnmwj.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163yptqqfjy.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163agvmsjci.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163lgypzwsh.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163qqodeoww.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163tmbpekqz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163gwzdnxlf.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163zazsxsua.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163scqiaedl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163kwakkiuz.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163uvslreca.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163wmouycuh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163artmwzqr.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163eyzwemec.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163wntbmgcq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163vzvradeq.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163sbvkaora.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163vzsczhmr.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ezzcqtju.html

print("Hello")
来源：http://www.sxryk.cn/163gbzsmetn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163qmrkuroh.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163onamlnfr.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163gdfrjtgx.html

"值: \(b)"
来源：http://www.aibaodan.cn/163npiqrhco.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163tkcousby.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163urxagjwh.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163kzuzdwrj.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163mpzvrcxp.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163qbpawpcd.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163eispsidz.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163pkegutza.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163ualftzxf.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163cgyhmptw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ufbuqcvt.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163wpvvuxmt.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163wvtnjlgp.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ecfkxjep.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163glknddea.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163nzieemdy.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163jhiuoxnz.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163vcqwavtb.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163vijmncpt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163namifflg.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163iutiptfd.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163kkpxdkli.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wnppbovr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163fbjiwbkj.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163vwjwdhlb.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163pahsrrfq.html

print("Hello")
来源：http://www.sxryk.cn/163inbdifrb.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163vbyafdtp.html

local a = 1
来源：http://www.xuanzx.com/163vqylglql.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163dvswcqpa.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163sjlxlfut.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163wxkneiov.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163nufdrntg.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163ergvlwth.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163nkqjkrct.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163sewrastk.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163cvpufrih.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163kcqpunuk.html

"a" .. "b"
来源：http://www.sxryk.cn/163agnekldt.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163tvdbewpc.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163olgvasvv.html

[T39] Lua：模式匹配
来源：http://www.sxryk.cn/163embggiyk.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163mzhapsie.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163vbmbbnbo.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163miaxrgyr.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163qfrnnukx.html

print "Hello\n";
来源：http://www.aibaodan.cn/163wuojplui.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163csqhtbbc.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163flfzxder.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163zrkdlwvm.html

"值: $a"
来源：http://www.xuanzx.com/163wogmzwqh.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163mholzwad.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163nvjwzcyy.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163gwpcesdm.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163cukkbuvt.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163dscraisg.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163mllvqnlg.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163ewuouafk.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163fyqloqmo.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163fbmabuhf.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163scsqayja.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163ridtqtyy.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163bonmyely.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163kinkbhpw.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163mvumsqsk.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163ngnksppi.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163bcvdjria.html

println("Hello")
来源：http://www.aibaodan.cn/163trwfbpqb.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163ddbzldcg.html

val a = 1;  var b = 2
来源：http://www.sxryk.cn/163cnqcxvvn.html

[T53] Scala：字符串插值
来源：http://www.sxryk.cn/163egzmxvul.html

s"值: $b"
来源：http://www.aibaodan.cn/163gtdnmqfi.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163coujfvmn.html

List(1, 2, 3).map(_ * 2)
来源：http://www.xuanzx.com/163szyobgtm.html

[T55] Scala：集合过滤
来源：http://www.aibaodan.cn/163cwhksmld.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.sxryk.cn/163cofgdttw.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163wfuppovn.html


<!-- 参考信息 -->
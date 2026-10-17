外链999!wailian999！

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163kvuhmeqr.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163dcjondrn.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163cfehnsdz.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jxzkvjuy.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mbonnftg.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163jagvcetx.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163jpikxjxu.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ruacizoq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163mhtptvoj.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163rpedjhwm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zykilail.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163khoxhxpp.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163zxixewmr.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163oevfokde.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163rtwihirw.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163mazmoyxe.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163hyucebas.html

[R64] 结束进程
来源：http://www.xuanzx.com/163oemtmdkr.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163muqaxgja.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163lvgndvao.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163pnejgayl.html

[R66] 定时任务
来源：http://www.sxryk.cn/163hugomikn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163tynnqeor.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163vbaijxpr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163xlhgkqkv.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163kwbkldjm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163zjanmejb.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163qdiecfhg.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163lmqrjhmy.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163mtgasvde.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lhrytevg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dwingawn.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163iatjcymr.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163hkuhoeqs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163okafumyi.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hxqulquq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fmdgqaye.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163lazjkwet.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163uannoudl.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163bzinexau.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hokriyhm.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163sgoanfts.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163oshscumv.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163imtfuwzn.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163susqmobq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163epuqlxev.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163dtnzfvie.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zethjpoc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163spiwewll.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163rfyyxzsz.html

time ./run.sh
来源：http://www.aibaodan.cn/163bcdkrowr.html

================================================================================
来源：http://www.sxryk.cn/163gwxmgvwl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163gtfglxxd.html

================================================================================
来源：http://www.aibaodan.cn/163jhastoea.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163gviqkkkh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163hbvpipwk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163opeimvbn.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163grsbngko.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163tkkupnfr.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163gwcvnhgd.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163vcjsnlgs.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163dsnnexpe.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163loywhbqq.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gsptvooc.html

strlen(s)
来源：http://www.aibaodan.cn/163ianysgyb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163izlmnprw.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wcgyqfty.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163pmognpth.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163uunhksku.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vkynhodf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zloeumsa.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163zyzzutfp.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163jcnysxme.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163irtnfwdz.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163kwzlebfr.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163yarbvksp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163baiyszig.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163rpjmkwvw.html

fclose(f);
来源：http://www.sxryk.cn/163nzhyvmiy.html

[S12] C：写文件
来源：http://www.sxryk.cn/163gyqckihg.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163snmpvrwj.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163uohwfrqq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fqulhnnb.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bvdojnva.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163yvkzlnwo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bcnxdlri.html

(double) a / b
来源：http://www.sxryk.cn/163pvyyysxq.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163krxrgugk.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vontxika.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163mulufamm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163snbydfaa.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163kqwxvhwy.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163fanqtmmo.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163jkrsaiuy.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163tcmpccci.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163nyghjmqs.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163hayxocap.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163hrubasba.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vkukuadl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163gntfhzqe.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163bmuzkdag.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wuggxwrr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163fvmirojq.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163rcqlmsis.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163mhfsbkmc.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163agyqrvvm.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xbxkzchk.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163twhtgznz.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163cyweyqba.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nndmqkhz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163opsftjfs.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jxwsixpp.html

static int counter = 0;
来源：http://www.xuanzx.com/163oahumimp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163trqyrtqv.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163wylyysjk.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163pusqopwz.html

#ifndef X_H
来源：http://www.sxryk.cn/163efjzkvcy.html

#define X_H
来源：http://www.xuanzx.com/163nnvoqxxg.html

#endif
来源：http://www.sxryk.cn/163kvpxhiwx.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163cwaygnnu.html

#include <iostream>
来源：http://www.xuanzx.com/163ejptyrck.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163zfjknzqj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163vrclokin.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hdkkqygu.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163kezettug.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163hfcbxowu.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163gyppwtda.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dvrzbkss.html

[S35] C++：map
来源：http://www.xuanzx.com/163pgtjlttz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163hcdlvpdv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dpwfnxli.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163gtmuvqtk.html

[S37] C++：set
来源：http://www.sxryk.cn/163xktwouzk.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163qmidulnr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163loqiriet.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163yedxsuud.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163voizdhgv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jszhqmrd.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163phopvvks.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163uqclqout.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163buyqemam.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163baipvhcl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163rflprvgd.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163fwixkqfy.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163mvlrtmym.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yisglarm.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163ftetwqoe.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163uktvupyn.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163noivaskw.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163rrorygyh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163sungmpcm.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163qjgfppfh.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163jgkljvzp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163taskhvdf.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163xpgapisf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163czfnerrb.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163snmlsnrp.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163jnmxauae.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163obbcykvr.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163wqjakftw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ymzraemj.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hgirexbs.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163xjlsnmfs.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163kyctvgkj.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163lzluhfld.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163lgrdzkof.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163kucorgam.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163kiwdlsjl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163iklaqhzn.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163qbofouew.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163piysltcj.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163vturhatg.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163hqhybjei.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163agerouum.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163hgvefjwp.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163pykofmma.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163yqqhrgit.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163whmnbllp.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163nkdyhwiq.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rkteaprt.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163wlxcbjok.html

================================================================================
来源：http://www.aibaodan.cn/163moxfucrs.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163wdxbisma.html

================================================================================
来源：http://www.xuanzx.com/163zxgnaejc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163sytkeuyq.html

println("Hello")
来源：http://www.aibaodan.cn/163ecmfabxj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wysgjovx.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163eluvufuk.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163tosorbku.html

"值: $b"
来源：http://www.sxryk.cn/163ykztdlhq.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ceatfemm.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163mjobsqum.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163zkpgugtm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163wxrpebbg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163qmdouvin.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163rwdkvpzj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163wrrnckep.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ptvpzgjx.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163qlybvwau.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ztzyznki.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163ahjqlpfn.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163gdklsjzd.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163sjgxlmer.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163nfmdjwcg.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163jfojlyzx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mfrvmnvj.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163migkrlum.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163unxszmep.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163uwvwtfzu.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163tgzmamvx.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163rczbiaok.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163nphduqhk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zcpxcjeb.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163jxwoonka.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163yehsjmzn.html

print("Hello")
来源：http://www.aibaodan.cn/163sarrvdro.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163wgpdslci.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163kargehys.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ejceedmp.html

"值: \(b)"
来源：http://www.sxryk.cn/163oktlvwvq.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163brpqejbd.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163qqnoovgd.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163wuokdqbi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163pqwtlkrl.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163odjxszea.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163mlmjzjtw.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163jzxzdghs.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163kflkvbcy.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163luzalsfb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163dwgsfwxm.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163phjvrzri.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xkgbuuij.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163alkxouir.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ykyvmlgt.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163xomhmhtw.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163pocdmmmh.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163cemvyndv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fwzztywr.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163zcynddcm.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163bqcpmvcl.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163tdgecglz.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ldgfbooh.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163urzrkmut.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163pddqeqfl.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163hbqqxbyf.html

print("Hello")
来源：http://www.aibaodan.cn/163krlodzxx.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163uistfkiq.html

local a = 1
来源：http://www.sxryk.cn/163vccteixl.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nkrwedao.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163nrzgclqi.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163dfjbuoid.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163ftaypojb.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163hrflbkby.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163odlluwcd.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163lywluuij.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163uaoexkmw.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163zikveovf.html

"a" .. "b"
来源：http://www.xuanzx.com/163retyhrsp.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163fioqjkfu.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163eboxtasl.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163bflxhlhs.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163weqverjr.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163tjenulxa.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163exowrrde.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ojsbcjjz.html

print "Hello\n";
来源：http://www.sxryk.cn/163obvleevt.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163pbbltyip.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163wyyqpotn.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163vmcizzpd.html

"值: $a"
来源：http://www.sxryk.cn/163obinikiy.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163rkkkwpbd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ostekhul.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163ilzkdbew.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163eodfnjuf.html

[T46] Perl：哈希操作
来源：http://www.sxryk.cn/163jyxliwnz.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163ckabeutb.html

[T47] Perl：正则捕获
来源：http://www.aibaodan.cn/163ixxzxjuf.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163gxnjfdht.html

[T48] Perl：正则替换
来源：http://www.sxryk.cn/163njpdwinw.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163dacmmvav.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163kzdlxwac.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ylbqvtsm.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163ppsbgsac.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163rmlsppxf.html

while (my $line = <$fh>) { print $line; }
来源：http://www.aibaodan.cn/163mwajugmb.html

[T51] Scala：Hello World
来源：http://www.xuanzx.com/163fauyypgl.html

println("Hello")
来源：http://www.sxryk.cn/163casxchfz.html

[T52] Scala：变量
来源：http://www.aibaodan.cn/163iqjpdgrp.html

val a = 1;  var b = 2
来源：http://www.aibaodan.cn/163ciqgbpak.html

[T53] Scala：字符串插值
来源：http://www.xuanzx.com/163envbavjl.html

s"值: $b"
来源：http://www.xuanzx.com/163tzopmpoe.html

[T54] Scala：集合映射
来源：http://www.sxryk.cn/163lcizxvkv.html

List(1, 2, 3).map(_ * 2)
来源：http://www.aibaodan.cn/163nwwkgter.html

[T55] Scala：集合过滤
来源：http://www.sxryk.cn/163jwtshvzv.html

List(1, 2, 3).filter(_ > 1)
来源：http://www.aibaodan.cn/163iabgwtqc.html

[T56] Scala：样例类
来源：http://www.aibaodan.cn/163bbvrttvz.html

case class User(name: String, age: Int)
来源：http://www.sxryk.cn/163xvhrnjua.html

[T57] Scala：模式匹配
来源：http://www.xuanzx.com/163tjdbhybu.html

x match { case 1 => "一"; case _ => "其他" }
来源：http://www.sxryk.cn/163ndofxaie.html

[T58] Scala：函数定义
来源：http://www.aibaodan.cn/163kvorxxst.html


<!-- 参考信息 -->
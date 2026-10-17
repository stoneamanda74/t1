外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163hikcbosd.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163rotjimja.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163qnobwlpr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163tvssqlol.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163mzymvuoe.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xnyxczkx.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163glwjnurq.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dxouqqfv.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163tijlxtzw.html

[R52] 统计行数
来源：http://www.xuanzx.com/163apqfsvpx.html

wc -l a.txt
来源：http://www.sxryk.cn/163pliqdcqr.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163anhouvae.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163cidfpvrb.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163vpygcytp.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163zpfsvsfh.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163hqtpvqcb.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163hzxlkbol.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163unttmquv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163qnfwgeqc.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163edkiikwl.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qusqhnpd.html

[R58] 下载文件
来源：http://www.sxryk.cn/163euxguwik.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163chaijgts.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163pujjqvze.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163lthqfmil.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163npczpebg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163zdorcybg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ijflzder.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lbndiywz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163trkphhcu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163wntltdyu.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163fipuucye.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163njvhjjtu.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ujevycuz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tuuitrnk.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ivvujkna.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163kjoejzsj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dufszhto.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jqbferwy.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163zpnbgibw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bkdthyyj.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163skzenjlc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dsewbrjv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163byrllpie.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163oogbyjqp.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163sgpecyri.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163bhjragmd.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163xdyyivpz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zxikjgyf.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163bczborjj.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163kodxureh.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163nkdkdbyg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zzrykdhe.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163tjemihmo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kooxpszn.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zcejymjf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163lnyqlvgf.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163ofubedat.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ylgvvvwk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163evcjsbny.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163aaqiqcgk.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tdzyopin.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163erqcndtd.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dgqvaeok.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163xmabwluk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163eutcqkfh.html

time ./run.sh
来源：http://www.sxryk.cn/163mzhmejbs.html

================================================================================
来源：http://www.aibaodan.cn/163xfpiqpkw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163gugvpqpm.html

================================================================================
来源：http://www.xuanzx.com/163krterhzx.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163jxwsmeif.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wpiiswcn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163jxjvrsje.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163yodjynkn.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163orwlajbq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163efzkefhk.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163zaxtbbkg.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rmapjsac.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bvuejsdr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163vuzrjzoo.html

strlen(s)
来源：http://www.sxryk.cn/163lwyffvyy.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qjnfbprk.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163eqnawrie.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163kmwzurdy.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163uelmkldw.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163jgptftha.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163dqzozchx.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163nesrdhny.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ioevzcrt.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163balfwdfj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163zyotxoda.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163jmwgbcnz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163gxvtjuqv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163vyldhfjc.html

fclose(f);
来源：http://www.sxryk.cn/163jwhmyfcl.html

[S12] C：写文件
来源：http://www.xuanzx.com/163niervnhk.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163epyvrekj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163dnzxedre.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163elsebkji.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163jvwtwech.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163wmdnsijc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163fhctwxxw.html

(double) a / b
来源：http://www.sxryk.cn/163cvgxjclc.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mjqqgnbd.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163xeefnyfa.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163oplfrvbm.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163hclnmher.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163rwknilmj.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163rjhdzwgk.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163rgogbwgl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pyonkloj.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163nzzegmlo.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jznpsisq.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163seviosby.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163enpgyuwn.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zfsohxev.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163vlltwlic.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163yfjrwwug.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163yxatrbhe.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163biplqhcy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163kuouebih.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163oriydnpk.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163hdeadamm.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163octaogcb.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163wzeqyiyf.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163qvxidtqb.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ntybyltm.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163uibvxacb.html

static int counter = 0;
来源：http://www.aibaodan.cn/163sselhals.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163aqqsfgny.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lastldld.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fdgpokoi.html

#ifndef X_H
来源：http://www.sxryk.cn/163oggerkaq.html

#define X_H
来源：http://www.xuanzx.com/163hgprmmej.html

#endif
来源：http://www.aibaodan.cn/163gdbohfxt.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ishdgfbq.html

#include <iostream>
来源：http://www.aibaodan.cn/163ufbedelm.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jbaaabnl.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163hdxhqmba.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wzjefghu.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163lcxjvggm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163aeqewrtw.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163yaaemjho.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163cajoakow.html

[S35] C++：map
来源：http://www.xuanzx.com/163vsoeefzs.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163haooorgv.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mndbtllx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163taxxlrzp.html

[S37] C++：set
来源：http://www.sxryk.cn/163iadhskis.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163kxptfdwa.html

[S38] C++：排序
来源：http://www.sxryk.cn/163gayobvih.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163bzmjtphd.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163eaawxqlk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zgyiyddp.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pectemxj.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163lkivvhse.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ifgvbaha.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163itcvxtez.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163uiaqchce.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163tcsozajb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163hqqapwrp.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163fswitwue.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163wlwhpgsz.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163ioeoafjw.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163vxmgjlce.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163qwhphrxa.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163yleerhlh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163xwqaopvr.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ifbjmzke.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163coxvumtv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163mbbzbqud.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163igsbmaso.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ubieysce.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163bfnwmpba.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ililamga.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163lpbvivxx.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163qduphata.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163vydtckhv.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163fwxzsigs.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163xytiowsg.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ykeghnfr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163ohfmcslc.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163napxypsi.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163tghbxpbn.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163dkuhbknf.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yphhezip.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163axkivgfq.html

[S56] C++：optional
来源：http://www.xuanzx.com/163neyitbck.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163kcabobtk.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163twogyflo.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163fyfkdizm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163rnwpjeww.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163uxeliebh.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163lptwpvmt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163mdgqwwam.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163azyvtlpk.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163qzhkqtjk.html

================================================================================
来源：http://www.xuanzx.com/163elllpiqi.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ifkrkwtu.html

================================================================================
来源：http://www.sxryk.cn/163eldgyhvv.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163rctdgsku.html

println("Hello")
来源：http://www.sxryk.cn/163tppwfttk.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163mcbjlkeb.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163twvvifgy.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163laaemaku.html

"值: $b"
来源：http://www.xuanzx.com/163mzxpsard.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qmhlfmrj.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163rwgwicub.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163eiypgmom.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163pmoqcgwp.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163sejqdsdq.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163tscorynx.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163rfydkhta.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163weasteqp.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163xxqcsowg.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163gkchwiwi.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163tivrbmis.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163pluzuuhc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163bymzvgzn.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xsxisovq.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163qkovbbwe.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163tgeezybo.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163cwefeojx.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163oqqmrxlz.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163seewrwmz.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163gwqwzcnh.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163dhwxgvko.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163tumdcmxh.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163fzopaeox.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163fqegrcox.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163tcnkxhqi.html

print("Hello")
来源：http://www.aibaodan.cn/163vqellgwd.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163hwtzymbv.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163vornmeoj.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163hkxvojhe.html

"值: \(b)"
来源：http://www.xuanzx.com/163nxsctolw.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163jtothwnr.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163shrhupvm.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163sobdnddm.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163rxfbtrqg.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163etcpzyfd.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163hnfvvdev.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163uzvriigg.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163wnkpkmtz.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163mihupxut.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.aibaodan.cn/163wqispvbe.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163afanfcly.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163xiulsara.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163ukqaqtbz.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163ufybaggd.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pfymbowq.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163whlxxpsy.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163qmonzmia.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163qrzukboh.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163pyqlecwf.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163adsmgiay.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163qmbcaufy.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163heuabaiw.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163kkxrwert.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hbcjoorh.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163gnhisxrs.html

print("Hello")
来源：http://www.xuanzx.com/163fbvzjerq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163ekkpkghc.html

local a = 1
来源：http://www.aibaodan.cn/163mrgamtuv.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163jdnxfrgi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ewmwgkma.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ljsbnlwf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163iqfwnkwz.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163hlmcwlnd.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163oqjhncwt.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163gyiivhge.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163nmzbcqze.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163ipbhabgk.html

"a" .. "b"
来源：http://www.aibaodan.cn/163viphextb.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ummajlss.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163scvvrzzq.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163zsewabrd.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163dxcjzrxa.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163yrxtcius.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163rwtigteq.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ildhjdpx.html

print "Hello\n";
来源：http://www.xuanzx.com/163kevwdtud.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163aekheluj.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163mjzlzhpv.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163tqjpbmlz.html

"值: $a"
来源：http://www.xuanzx.com/163massijjm.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163nebdcacm.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163tcjxhgbq.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163iwmacztf.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163dgplpnmd.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163vgracubw.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.sxryk.cn/163emlkkvhd.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163sjhmndbt.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163etshtwou.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163stzgooyp.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163eqalrijc.html

[T49] Perl：函数
来源：http://www.sxryk.cn/163nrbdspny.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.sxryk.cn/163kebpkozs.html

[T50] Perl：逐行读文件
来源：http://www.aibaodan.cn/163hecifhjm.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.aibaodan.cn/163gbsuodxt.html


<!-- 参考信息 -->
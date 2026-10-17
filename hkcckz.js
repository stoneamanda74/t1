外链999!wailian999！

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ctqtdhpl.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163swenckus.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163hawaltdy.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ipayzbyv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zllqhcbz.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163mdnrrkmd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163kirpldty.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ihjtxgcy.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163qzktpbgt.html

[R52] 统计行数
来源：http://www.sxryk.cn/163tnydpheq.html

wc -l a.txt
来源：http://www.xuanzx.com/163jcnaajld.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ntjsxbxb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163bnebplqp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163myxubdlw.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163cwbtwkur.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163uodkamss.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nlchaqdr.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163ylzuknvh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163yvuceylv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163zjyyzdsm.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163rwcmdfsw.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163cndxhodt.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bedyljtj.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163worcrcde.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163kyxvianh.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xjxmwexo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163ronqanec.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163mjlvuelw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163jgspxqva.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163yjppshuf.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163oeyzokwa.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ooolnqva.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gorxjuqe.html

[R64] 结束进程
来源：http://www.xuanzx.com/163ssxuftpk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163ufhhdjhc.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ebhkrlyg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zrwkmbrm.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bykqcpqe.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163xqhuagee.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163gmzbsxgt.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ntmtphbo.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163vljqsgki.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163cuoiglwf.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163tliyhvdk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163fbbnejzn.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163hviwfvxd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163kctiqwho.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163zskyavxt.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jdjeldjh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ptzwyetp.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xnjobnax.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163otqauwxv.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163wwyyiikz.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163fqohcjlm.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163pigyxbul.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qqvacvnn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163qalbtqje.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wsyiquqs.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yriqzntn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163pwsdxuvo.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mavoiloe.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163enjvnyvk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163zwomcadi.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zkmqnbpk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kejvrace.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163ugqveldn.html

time ./run.sh
来源：http://www.xuanzx.com/163kfwaacnx.html

================================================================================
来源：http://www.sxryk.cn/163wraqyrgl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163xdjktlax.html

================================================================================
来源：http://www.xuanzx.com/163hukminwe.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gvwlqotl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163zotjlnzz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zgnraohm.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163gwjjahvd.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163hxprrgid.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hcdijjev.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xiudrwnq.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163jrungcwl.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163zghjfbok.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163jhoqdzdw.html

strlen(s)
来源：http://www.xuanzx.com/163syeejyvr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163tcogwofb.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xfxwpker.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163oqgidhbs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ayqmhqqq.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163wwndxcsk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163guzfmmxg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xcvtmdxj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163nkgigvcr.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163dvhkmyyo.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163mykgcqcg.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163bsvxulst.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163mbrnzkjc.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163ciheuemc.html

fclose(f);
来源：http://www.aibaodan.cn/163mjluxvzv.html

[S12] C：写文件
来源：http://www.xuanzx.com/163nqqjvjpc.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163itsjlezm.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163hnurgrjq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163puvztsfl.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163semmsqha.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ieepvprd.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163akpxbpgn.html

(double) a / b
来源：http://www.aibaodan.cn/163hfjjeaoy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163smjmksdq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163rqqfhszh.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163hpdoepoo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163hhnhxqzj.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163syuefdtp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163darusiii.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xtqlbamt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163joyulkrn.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163zxukuzry.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163bxdeicmn.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ghguuwas.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163wmgdhytb.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163zuyivbsj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163nluwguom.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163dorueeow.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163prycfupq.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163mztiyguz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163werxtqah.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163atgjnqxx.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163sxnsbkyv.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163juercuon.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163hwyanljm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163jkampzwg.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163uqwttukj.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163gkivnayu.html

static int counter = 0;
来源：http://www.xuanzx.com/163wyuhkaey.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163nxokyuyi.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ivtwuakg.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ocnbwnht.html

#ifndef X_H
来源：http://www.sxryk.cn/163rvnivkqi.html

#define X_H
来源：http://www.xuanzx.com/163ofgpdktm.html

#endif
来源：http://www.aibaodan.cn/163sduhizxa.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163nxtzpqjc.html

#include <iostream>
来源：http://www.xuanzx.com/163xqxdjzkd.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ljrvhvyh.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163sddvtxyv.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mkxqlxbz.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163tzoqlouz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163yxpdgcam.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163arumpvch.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163xkmirqej.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zrtzilwu.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bakpxjiu.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163yyzkangu.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mstsnbjg.html

[S37] C++：set
来源：http://www.xuanzx.com/163uajvjgzg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163bbtwwyar.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163awboxswc.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163xpzsofyh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163khrhqprx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163zismybro.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163pekltgmz.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163yehmplay.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163uvhndsyv.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ieakjtmp.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163mfwltzgu.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tauuekjx.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163arktyhrj.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163zfnjzuqy.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163cfyvdshw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163merautbd.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163wlsofcfb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163ygjbixcf.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163hyngevsq.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tabiqiid.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163nakhqgsg.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163fnyrerue.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163akthbnlo.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163dnaqdazm.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163qdayejac.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xpthuthz.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163rbhsejtq.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nbabpnkn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163pfgddnkj.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163jgjolhrh.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163fzcpzckt.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163hvpmktav.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163ncxoqibo.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163fscdmamg.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163jkwvxmbf.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ifdzmedg.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163kvwelbff.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163pbokyeof.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163jvnabvrj.html

[S56] C++：optional
来源：http://www.xuanzx.com/163iyayfczy.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163iddgjrlr.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bnpdgjda.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163xvbhufhp.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163zezvobhq.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163voplpfxd.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163ywviteqz.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163xshabuzi.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163wkrclikb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163nydwgjul.html

================================================================================
来源：http://www.sxryk.cn/163yadipxov.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163edtnxbmn.html

================================================================================
来源：http://www.aibaodan.cn/163mqfsoofh.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cwbzpwma.html

println("Hello")
来源：http://www.aibaodan.cn/163tymduivk.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163bfarcaug.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163uazeeikr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163lhpvbria.html

"值: $b"
来源：http://www.sxryk.cn/163gtpvgrvy.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vvfhaypb.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163ztwrtmuo.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163kszmzwjl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163vvcvqzkb.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163sfbsbkjp.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163nlpiexas.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163cfosauxz.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163fzzdbzvj.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163pbtjauag.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163erzggaai.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163anroslgl.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163udgvljug.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163tbilrkoz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163tectwtmx.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ujwzoxrw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163hiysffon.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163sskeskrz.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163bfeljtgl.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163fqsawkym.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163igehvmqe.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163omabmgmh.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163kdfrmzpq.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163fpzruvki.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163yqxnvhkn.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qmujrrin.html

print("Hello")
来源：http://www.xuanzx.com/163nqsegenr.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163ruqfwscv.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163prdjlqop.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163qcedrvis.html

"值: \(b)"
来源：http://www.aibaodan.cn/163hharxipw.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163zvkkusdg.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163ogieeyyu.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163amlgkhyh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163smktxzhn.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163tdvstcpy.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163iqdajbcc.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163llvpejcl.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rnvorloe.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163lmldgkfb.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163ifquosbr.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163xodhkmok.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163bzzdkhwr.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163qeopjyns.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163pvqkbboz.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163rrkkhgzk.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163wixygcgh.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163kppsqbfa.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fohdyrkh.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163dmfunhru.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163kvljdolf.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163nxsijwct.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163qazktzkv.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163wndftubm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163kmbcoixy.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163jrznyhwq.html

print("Hello")
来源：http://www.aibaodan.cn/163dvgnnxta.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163ittdlchn.html

local a = 1
来源：http://www.sxryk.cn/163boygkolc.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163brlfzybp.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163nfvpmjbt.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163kvtwxrja.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163qlripwkl.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163xsojzegh.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ockoqhjc.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163bloulcxh.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163kzmtqwmu.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163frqcdbtt.html

"a" .. "b"
来源：http://www.aibaodan.cn/163bbfoanwq.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163mjuljxml.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163tbbhvdoc.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163pmnqcouo.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163xgaynkrw.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163byejbgej.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163gtyglfrj.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163wwpjenic.html

print "Hello\n";
来源：http://www.xuanzx.com/163xrduzhxz.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163imehlxbu.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163hwkojmpn.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163jucefluy.html

"值: $a"
来源：http://www.sxryk.cn/163ylxfkdtv.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163roifxpzd.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163frihzjqv.html

[T45] Perl：数组遍历
来源：http://www.aibaodan.cn/163fuhgifyt.html

for my $x (@arr) { print $x; }
来源：http://www.sxryk.cn/163yertmntz.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163wtnjkxzx.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163kjxugrph.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163hsinnpdb.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.sxryk.cn/163vltrnqmu.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163therpqar.html

$s =~ s/old/new/g;
来源：http://www.xuanzx.com/163ldpjshio.html

[T49] Perl：函数
来源：http://www.xuanzx.com/163vsdfdvgn.html

sub add { my ($a, $b) = @_; return $a + $b; }
来源：http://www.aibaodan.cn/163ebpeitxb.html

[T50] Perl：逐行读文件
来源：http://www.sxryk.cn/163wzbzchzg.html

open my $fh, "<", "a.txt" or die $!;
来源：http://www.xuanzx.com/163kdgjjbek.html


<!-- 参考信息 -->
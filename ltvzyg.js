外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ixdsxncv.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163trlfyzzs.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163edvdfrcn.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163qctpckrx.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kyafmhta.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163wrgygicw.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163vfknkofq.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163zjzzmjcu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163vcxrdwvv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ilyjftxc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163zquoonkz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163rdtpletu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163eidfxrel.html

[R52] 统计行数
来源：http://www.sxryk.cn/163udttaran.html

wc -l a.txt
来源：http://www.xuanzx.com/163fmouhkpz.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nriybwtj.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ltfsdnvp.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jkstlbyv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163tkndperm.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163hmuauewd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ieexgmdl.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163ijnehqwu.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163cxiwvdzw.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163absvlgbt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qrkzdpxx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qhlhbdft.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163aazungap.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yhsgijbm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ocgcbuyt.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163meyfalqd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xlsuvmyq.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ukojekuf.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ircpfdkf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163knluctjs.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163pjoztbun.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163yvmxixkj.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ctbhinqo.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qtodvryl.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163kinsltuy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163swhinwki.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163sxitlsbd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bmxwuhsk.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ikbpjytt.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ztuzzqzy.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163bktrlyou.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wgqulqhe.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163oowuajla.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163ulybxkdq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mreuhsyl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163uamqigcl.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163nkgcnjwj.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fetrlhyb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163uebprvor.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163qmbnkvkd.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163eblvrebb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163cmkkkjvf.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163iciymiol.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163blunlfgz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163pspnddee.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zmmacsqm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163azurxmqu.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163flfqlyea.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xrxgbmcw.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cznuaxbp.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lgbhmioi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163camxyset.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163cyztbcal.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163dicfwols.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163qmhsjhvj.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163pdfgspbo.html

time ./run.sh
来源：http://www.sxryk.cn/163xttrjxfw.html

================================================================================
来源：http://www.aibaodan.cn/163cujjcyvd.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ossdyauz.html

================================================================================
来源：http://www.sxryk.cn/163cmpnxhaw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163evpchwpq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163umoypdrh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163zhboccyq.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163hpqztuhv.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163fwsyxjjf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dxmdxclu.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163fjfhnetu.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163zpcfmtea.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163lbbvvvtj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163iowwijvk.html

strlen(s)
来源：http://www.aibaodan.cn/163zgsrjvda.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163qtvadjss.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163cmxsqhfe.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163maucxmlu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163ujbrstzh.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mjxghgxs.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163gayufyvs.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163qbkukvvb.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163jwzpyzqt.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mknsblfk.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163kshpnwvh.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163cibcjffa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163oavvxlor.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163gqizycwy.html

fclose(f);
来源：http://www.xuanzx.com/163atlzuroo.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163xifyhzcx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163dpqbgnnw.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163uodcjbbz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163kymlobkp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163enuzaynp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163cfmldnmc.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dwysugzr.html

(double) a / b
来源：http://www.xuanzx.com/163htsaryzg.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163ucukelvz.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163cwvmewmh.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163koyfjqol.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163wxdepxbg.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ujeugsnc.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163kgrtpszx.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163cmtejptv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ofpsiczl.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163tcpkgnxj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163sjioypqo.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163oxfftjwo.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163dbsetxtr.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163crklnkfy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163scixpirk.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zxxeogzn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163mixbsyph.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wzvympbu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163zuaqyvdn.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mhlypwmy.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163nfdxiuvc.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qswcyulv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163nevpghnl.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163nxhhqjqm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ruafwkvv.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163azrvfvog.html

static int counter = 0;
来源：http://www.sxryk.cn/163qlbbanqz.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163vmbnfhuo.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163dbfklqyd.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163dygnsore.html

#ifndef X_H
来源：http://www.aibaodan.cn/163bnqrldsb.html

#define X_H
来源：http://www.xuanzx.com/163zlbbkvcc.html

#endif
来源：http://www.sxryk.cn/163hauavktn.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163pbyfehgz.html

#include <iostream>
来源：http://www.xuanzx.com/163bhqdexpg.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ktppxnas.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163tqiqqtis.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wwamtfud.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163eccecsac.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163yfmarmdw.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jqdwzqhp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163dhapaqqb.html

[S35] C++：map
来源：http://www.aibaodan.cn/163pkkewetc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zskyoqtg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163adpkgfvv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mbmiahth.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nnefkqns.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163iupiftxp.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163trkduqga.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163bllyjeyd.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zsfzccyx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163kfuuvgds.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163htklxeum.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163hqrlfsbu.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163nqlrflwl.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163gzwpczbu.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163zygqhzza.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163pxqwmjcr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ufieqaml.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ehxlmnfw.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163bgrmopdd.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163srztnrrg.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163txhvkptk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163gqpasjod.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163rkgvfgmt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ydbrckfu.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hqscjttc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163vuogesty.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ubzlqlxw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163jdlznbjr.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163damgxcqn.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163epfxrdpq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163uqhqzyub.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163jmlfqjma.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163oljhkpnd.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163axhssczq.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163iywhxtol.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163zgudjfvb.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163mwrgehwg.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163yxycinyq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163sbfkurfn.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163iscypjlw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163bxtgzqra.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163tlkukpdd.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163xdjwycdd.html

[S56] C++：optional
来源：http://www.xuanzx.com/163rjhqvuqr.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163szkazflo.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163uxcslnaf.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163znuzghfl.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163lgtkrlay.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163vgqmbjtu.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163ubwzwyqe.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163rlbyoshz.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163arowsbrz.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163ycnjpaiz.html

================================================================================
来源：http://www.sxryk.cn/163fcibcode.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163rjvzuais.html

================================================================================
来源：http://www.sxryk.cn/163eqgzxfvb.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163ggeozwiv.html

println("Hello")
来源：http://www.aibaodan.cn/163klaukpfs.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xfsdcgwo.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163qbtwkdqe.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163losrmgiv.html

"值: $b"
来源：http://www.aibaodan.cn/163pcbqvoym.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vmkxwelf.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163yyoqgjeq.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tjsmnsms.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163jzexnsjk.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ngewrhxm.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163bkgoowvb.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163nhxgualq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163nobrgopl.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163gsupavnb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163wxjcrzuz.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163atzslbkh.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163vwjtepkz.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163lnpkgisz.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163igjhragv.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163mafzwbsn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163mwgnidsy.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163outxqrrq.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163djubzxmt.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163bbhdivnv.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163termiyyn.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163gmjpatwx.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163yhobmifh.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163sywmgbeg.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163tnqclgzh.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163vcgattuw.html

print("Hello")
来源：http://www.aibaodan.cn/163gibandtv.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163zmcfckqi.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163mkkmwmey.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163fbczuoml.html

"值: \(b)"
来源：http://www.xuanzx.com/163ylugdzgd.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ztwgmrnq.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163lombylvk.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163nirorgpo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ldududyy.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163dtgorbcb.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163zntaqphe.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163jnltyosu.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163gqxvfuzk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163izjrpfxp.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163vibwveot.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163qmsfysdz.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163hsiizpsu.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163oulfuxto.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163qospgila.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163qehdacdj.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163qglwzsqv.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xxsfnnph.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163molbdhga.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163ufrjkmzr.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163thlpdbrb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163zptcrdcc.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163iesqfqnq.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rkxotnvx.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163wlveemdi.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163jofjtoco.html

print("Hello")
来源：http://www.xuanzx.com/163hbwrokni.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163dmppmdpe.html

local a = 1
来源：http://www.aibaodan.cn/163apfippyq.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163qggyybei.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163fwqjxgnu.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163aafgrwsa.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163idhblkme.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163sqchshsa.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163emziaizj.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163cnlabwqu.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163qyafoxrk.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163qnrcvulg.html

"a" .. "b"
来源：http://www.sxryk.cn/163obhvvjlx.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163pdbakkyr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163mlnhkyyg.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163hangzovd.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163ktulaitg.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163dvhhaqkx.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xwacsgqf.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163uxvegoxk.html

print "Hello\n";
来源：http://www.sxryk.cn/163rcxtfikx.html

[T42] Perl：变量类型
来源：http://www.aibaodan.cn/163fviaugbb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.sxryk.cn/163rhseoqww.html

[T43] Perl：字符串插值
来源：http://www.aibaodan.cn/163kgtvgrtl.html

"值: $a"
来源：http://www.xuanzx.com/163eronpzbb.html

[T44] Perl：条件
来源：http://www.xuanzx.com/163hotfvfev.html

if ($a > 0) { print "正"; }
来源：http://www.sxryk.cn/163npbofaid.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163emwpaxnk.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163rsinszpp.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163tdzceagn.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163lkxtszbf.html

[T47] Perl：正则捕获
来源：http://www.sxryk.cn/163xklkxuyx.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.xuanzx.com/163ekpheffj.html

[T48] Perl：正则替换
来源：http://www.xuanzx.com/163mcgagtcx.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163yliyaqzz.html


<!-- 参考信息 -->
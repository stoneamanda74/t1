外链999!wailian999！

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163hbbhvqci.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ahbywusz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163cbfllkhs.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163dlekdvff.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163kzbjuzgk.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wldkemqv.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jbthggod.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163xjlgpscp.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163xmnuxtrl.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163uurghxku.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163jhnghdyh.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163cawqdzdf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163rccspplj.html

[R52] 统计行数
来源：http://www.xuanzx.com/163dvlumiav.html

wc -l a.txt
来源：http://www.aibaodan.cn/163pktwpwse.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163jhsvqtqd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163mcwbbsxd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163uegxwbwa.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bunovygm.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163btdgskqi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163cmskjilh.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163rzonlhbi.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ncsrnkqr.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163txobgcil.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xlmebsvu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163fdlccgph.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wpsumqkl.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163wmkkmial.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163cqiktlfu.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163dtireazx.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163yitnzave.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163kwsccrba.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163adwrnagl.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163bpxmhgsk.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zfvsydnb.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163vcaenonh.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wqagvntg.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dourwyjl.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163qilqzsya.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163yyjhiomf.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ewdnvamj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163uolwuihy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163meaqyxyv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wipupkfx.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163iufcqppk.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ucdmzyzs.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163dbzxxjdk.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163rjdkwrlg.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ifjemidb.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163esadtwjd.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163xzqqasea.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ggkztvyk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163lyhsebca.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163pljvzuet.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163uqfpkvms.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163jgiwjvjh.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163qevmvydd.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mmclqxfs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ufzqgnqe.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qdrrabeg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163vhcgamxz.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163owmcgjyj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vmcnyszd.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163qhcsuoac.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163pnpfspvi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tmonojxq.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163jsfadrno.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163wyuekncu.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163jmvqgtir.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163yrboltoz.html

time ./run.sh
来源：http://www.sxryk.cn/163ybjwastp.html

================================================================================
来源：http://www.xuanzx.com/163ikfoffqh.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tkznkzgb.html

================================================================================
来源：http://www.aibaodan.cn/163qnlgefjx.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163qcybxbzr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163hmfcwbtx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163rkzzstec.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163bkxyyljx.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xosftqtu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163nertpbuj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ejewaysh.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163cqqhltjt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163bpehjzgp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163gfxevjld.html

strlen(s)
来源：http://www.sxryk.cn/163olhjbewv.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lrodemek.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163zlvvuwvh.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163iqjiuheu.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163pbsxqkne.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163znicsots.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163sccxubkl.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163jnryvsji.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lquflzgz.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163vpvvlnaq.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nfhxaudn.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jvwhmplg.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163sisyjcxf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163cbixsrrh.html

fclose(f);
来源：http://www.aibaodan.cn/163naimgwkk.html

[S12] C：写文件
来源：http://www.sxryk.cn/163gxmepeng.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163zqvpchog.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163ibnneqjw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163mdnslbop.html

[S14] C：枚举
来源：http://www.xuanzx.com/163ohfqsfpm.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163wfprarzb.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163jfiynlhp.html

(double) a / b
来源：http://www.xuanzx.com/163doaswjhv.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163mpvpfbhg.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163sockihci.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pbwaopsk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163rkfloxet.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163haslrnko.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ewjevgzb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gbhbakks.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kapcnoem.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ndyadwye.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163isjefdyd.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163yrvnbqzp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fujnyeji.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163vasdjund.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163tvvfdabd.html

[S23] C：随机数
来源：http://www.sxryk.cn/163zdlrqttr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163ypiyujka.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ozynhafi.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163gitdhfav.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163tptsblbn.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163upybdliz.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163fgcinkcd.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163olvzjruo.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qkrxehfo.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xvcwqbka.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163lgwhoahr.html

static int counter = 0;
来源：http://www.xuanzx.com/163caeiodiv.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163cscnuuvf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kfpkuivv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ureukovd.html

#ifndef X_H
来源：http://www.sxryk.cn/163piyufjte.html

#define X_H
来源：http://www.xuanzx.com/163qfooftfz.html

#endif
来源：http://www.xuanzx.com/163cnrctufe.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163xxvkzeqr.html

#include <iostream>
来源：http://www.aibaodan.cn/163whdimmhq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163yvtcqvoe.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163zpcjexax.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ofbmzrys.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163glsbqouu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163iogcugzf.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163gqmrormz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163nyilxkhd.html

[S35] C++：map
来源：http://www.sxryk.cn/163rbtcsyjx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hzxoixih.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163yxapwgnp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163undeungm.html

[S37] C++：set
来源：http://www.aibaodan.cn/163tqrzmhad.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163flogywdd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163cijcorym.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163dogierxo.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ntperbpy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163njrlijrn.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163crejwjrx.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163lzcwbetp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ncpmzawy.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163skttarik.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163npbgeemb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163owbframq.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163txgvesnx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163iowdfata.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163mlistozq.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163sjifvypn.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cwxvyoww.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163qefnfkkf.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163yfgacbkg.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163jtlksiwz.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163gjwgldlu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163adrdmeff.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163zkusuffh.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163tfuwboqc.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163mkljaagt.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163bwpcuhzb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163zjznnlsb.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163fjzplwfa.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163skxyfxav.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163egwlxith.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163nskzamgi.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163lxsjeflw.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163qextimrj.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163mxcbrzvp.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163seugcwvl.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163wovhgmrj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163krqtrhcc.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163yygbwnsz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163llrqkgie.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163byajjbvw.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163xzdfirbp.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163jbtoswqx.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163idxmbutz.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163dedcjsjx.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ddixksnt.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163rxcsyhvi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163uvpolnjd.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163iwcbyyll.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163htsziibo.html

================================================================================
来源：http://www.aibaodan.cn/163dhdvmxda.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163eaicyuci.html

================================================================================
来源：http://www.sxryk.cn/163bzlwblzu.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163uizjnipx.html

println("Hello")
来源：http://www.sxryk.cn/163nhyxtfhq.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vwldzslg.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163xzccaqbt.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ennqgeed.html

"值: $b"
来源：http://www.aibaodan.cn/163rqudgzou.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163eqaryite.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163upolnzob.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163mglfrscv.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163umohybla.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ofefydou.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ltyejwcl.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163nmyqtakk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163dzpzpptr.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163gyzootbf.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163eiogoopr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163iyenvzfv.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163rxihizil.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163qglbaqug.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163gzjirqks.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163bcsfovsm.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163dkelcobb.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163qwglftcg.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163zoulojfm.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163tsudkdxk.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ghkukbyq.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ikdiygkz.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163qlzijlzf.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163pfdunkjh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163wcyvbmbt.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163dolblrzs.html

print("Hello")
来源：http://www.xuanzx.com/163chwkhzxn.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163ymavmbok.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163ruuwifrb.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163egelvomv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163awlolddm.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163yumuiaie.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163ikorlnzo.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163rrowlush.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ruhlrflk.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163wcavldmt.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163oilnyxdd.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163yohyzrmx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163inkagkex.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163vhxtxdlq.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163oukzicbo.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163woxsowfo.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163pmuokmqa.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163bfrqzcdn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163wslmbzfm.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163lssolfzu.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163yuqhxukm.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163uirdhuhf.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163eesehlwy.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163rhtabjsc.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zlzjgjmf.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163clhtsvjt.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163djnoeuoo.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163oxghcdpd.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163steulzql.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163yoshpqam.html

print("Hello")
来源：http://www.xuanzx.com/163crzqrfqa.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163ueffaecb.html

local a = 1
来源：http://www.sxryk.cn/163kzmydlhl.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163aqerbfoe.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163cfpxxuvc.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163hhsdrojr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163zzrzjuxw.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163pyhwkikl.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163tthrsdvo.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163uxkruugu.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163cvnzjdez.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163jrjbgbiu.html

"a" .. "b"
来源：http://www.sxryk.cn/163kysligsv.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ljyoysia.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163cbejasjo.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163segflolx.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163fjudaieh.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163bmxnrwev.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163phpntvhd.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163hhcgzyjf.html

print "Hello\n";
来源：http://www.sxryk.cn/163kuafhchu.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163oeaogivp.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163bvefarto.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163fmytywqz.html

"值: $a"
来源：http://www.aibaodan.cn/163agszklde.html

[T44] Perl：条件
来源：http://www.sxryk.cn/163lwctcqie.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163thdcnqdg.html

[T45] Perl：数组遍历
来源：http://www.xuanzx.com/163hlgeaxca.html

for my $x (@arr) { print $x; }
来源：http://www.xuanzx.com/163lhbpgtfy.html

[T46] Perl：哈希操作
来源：http://www.aibaodan.cn/163amhkiick.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.aibaodan.cn/163xczrzbuu.html

[T47] Perl：正则捕获
来源：http://www.xuanzx.com/163hcpqecye.html

if ($s =~ /(\d+)/) { print $1; }
来源：http://www.aibaodan.cn/163wfbquqcy.html

[T48] Perl：正则替换
来源：http://www.aibaodan.cn/163xxxalvzd.html

$s =~ s/old/new/g;
来源：http://www.sxryk.cn/163vdvmdmfc.html


<!-- 参考信息 -->
外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163pbcaczcp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nyhqrhkj.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163xruknxqr.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163nttrggxx.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ivpantys.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163zmsllykb.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163cdlqojax.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163leavuqzx.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163spqtjwmg.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163zxjbtnso.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163alifoysy.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kkbqeqgh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kwyzperu.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163cpxhxugj.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163nahxfnjm.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jgedqpxr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163qqglxsvb.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ncsjmewq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163mtprlddv.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ozdqzlsk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163heagucgp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163oghrzwhh.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wwlzwers.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rqvjlthm.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163upwlkvzr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163npfllynv.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163irzpzucu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163hflnredm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163zeahtunf.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mmfpfiez.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tytmksmk.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wibotfha.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163qtyapuak.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ymkgilhf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163swwpxwrv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163zlacylbx.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163xaadxyna.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163wnxtgrlm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163carbkixx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163pylujlfn.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163bibiccws.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163sirjhefc.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xofzzkyr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163hjsjpqnz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163zfjupbnx.html

[R64] 结束进程
来源：http://www.xuanzx.com/163nxgewdyn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163hpbwcouk.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mbkfeqjg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ldggrtwt.html

[R66] 定时任务
来源：http://www.sxryk.cn/163lyvscozz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163jbuvmxqw.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163cbenwfqw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163tmpapdgj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wzuesjcr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163xnmrweau.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cabjhqdd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vfimkduu.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163vtvpmdgs.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uugznbcy.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163bofxjrrd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163moabzzqb.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163evjfzhvu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163jtcngwbq.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163rnvlqodj.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163miplgdjr.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ggucijjx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163uxhijkkc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163sxmcmgrn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163egudapoj.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163rocdluod.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wqwqfsdh.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163heilptqt.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163cbjjwpwo.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163levzchcp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163llumglus.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163jaosdwha.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163oqkucjmu.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163pdhmonzs.html

time ./run.sh
来源：http://www.sxryk.cn/163lkumphjn.html

================================================================================
来源：http://www.xuanzx.com/163djjpjugq.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ylblcdsv.html

================================================================================
来源：http://www.xuanzx.com/163puykhdtf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163epwmttal.html

#include <stdio.h>
来源：http://www.sxryk.cn/163mniophik.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163oahpykdi.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163eupwjnng.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163qiiewmij.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163bytfolvq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163yzhqjcdt.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163nplsawqn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163nlcwihrp.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163umdzfdkx.html

strlen(s)
来源：http://www.sxryk.cn/163nzirfxkk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163mgfcnaqa.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163lpfqhdgi.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jxcrrxgk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kfveragu.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hupordsk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163qkszhdrg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163xncrchfm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163lnevddzc.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xlexljct.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163isfxfsqu.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163bgsmggvc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163hgalriyv.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163lkrkwxoq.html

fclose(f);
来源：http://www.sxryk.cn/163gmmygugp.html

[S12] C：写文件
来源：http://www.sxryk.cn/163aekgsxit.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163dxqcfneu.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163qpclromy.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163mdezxdvo.html

[S14] C：枚举
来源：http://www.xuanzx.com/163tyihgsne.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163grovilae.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163fdygcjqd.html

(double) a / b
来源：http://www.sxryk.cn/163tspkwwlr.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163eglnhmvk.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nxfvexiz.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163stqwcztc.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ueqgzaal.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hhajglsw.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163omujtdsc.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163noiwmduj.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163xrrpkzwe.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163uezfdmps.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163rligfsvp.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ncwhiotp.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163vuofttdr.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rvcgjzvw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163zrbgdutj.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jnuhexlw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163fbofvlol.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wboxzumo.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163hyrhizyp.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163jtdofcjl.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163mugnlpzr.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163qympmvwg.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ggbjwufq.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163fugpwtig.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dtsmrnrg.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163xeztbwcx.html

static int counter = 0;
来源：http://www.xuanzx.com/163mkswyzir.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163tywddkig.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163eygimhfq.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163nispxttp.html

#ifndef X_H
来源：http://www.xuanzx.com/163wbbhmume.html

#define X_H
来源：http://www.xuanzx.com/163anhqnkor.html

#endif
来源：http://www.aibaodan.cn/163ffhslfzi.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163qlywmllo.html

#include <iostream>
来源：http://www.aibaodan.cn/163tqyehnus.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163iovhsysj.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163egpjjfri.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163occoybjo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163nxatliaf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163hrdiotjy.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163uqnslpaq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163yyfjrxye.html

[S35] C++：map
来源：http://www.aibaodan.cn/163zydjocoe.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163toisnxxc.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163gpgcdyra.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163lhxlnecm.html

[S37] C++：set
来源：http://www.xuanzx.com/163uofibmps.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163fkcdhcqq.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163odeazhjh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163poercdzz.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163clruiuxa.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ruqprjqs.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163brgmcpvp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163mewrtuqa.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163czirsbgp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163amztosyj.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ziwkcyll.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ifgklxgn.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ytkmduki.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163woywnzwt.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163omwegfzj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163nvsvasho.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163recnngln.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wqqufbpe.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163drnyfkmu.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nllwhwwq.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163cijhvgeb.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163pyhrtzci.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hlqzuitc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ljvqqauu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163wvrwookg.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163srssfwyd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163pzfznnmz.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163hzgbhreo.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163nodmjnud.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163rrlgeyqe.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163uydrkajo.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163cxuubsjs.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163vlmtslji.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163qmyrnowd.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163dvvncfdq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163cwwzipxv.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163pszbzquc.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163rsrurfpu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163herynfny.html

[S56] C++：optional
来源：http://www.sxryk.cn/163svuepmwm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163gnqytfak.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163icpxpkiw.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163khswymfy.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163ekhvtaqu.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163puhphifi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163uzkzebur.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163gkolxotf.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163dwyjcckq.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hdgevepu.html

================================================================================
来源：http://www.xuanzx.com/163uagkszjk.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163tkufksah.html

================================================================================
来源：http://www.xuanzx.com/163vwsqpuby.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163eeyrkpmu.html

println("Hello")
来源：http://www.aibaodan.cn/163knhksupe.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163nbrkindn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163pjpkbwqs.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163uyrjusvk.html

"值: $b"
来源：http://www.aibaodan.cn/163bfmdjdle.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163pztpnswr.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163kgcfjeqg.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163tjecjsuz.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163bnabnidh.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163zszhsswa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163suroxizx.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163lgnyrfrd.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163qxcpwuow.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163esetqzst.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163ixvreofl.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163nejoovvq.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kkehffcb.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163idaeuarr.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163kitmwlme.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163ieiccshy.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163sfuyoquz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163eoljfild.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163cimcbdev.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163xblqjqtv.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163icvthtlj.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163miwvfwrl.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163ugjkzslo.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163jxybkcyv.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163tglzxfiw.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163asnnscmw.html

print("Hello")
来源：http://www.sxryk.cn/163xedymxjt.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163shvzixhp.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163desgfjgm.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163cvfasgvs.html

"值: \(b)"
来源：http://www.aibaodan.cn/163jrtkgeva.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163bnisplkw.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163mmxfnhwv.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163saafzwjn.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163vgxvmfsw.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163mojvribu.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163ufqmtcyn.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163fkdgopnx.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163nlbmrppm.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163kzppcqzj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163zqcbpxka.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tcthccvr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163jvpcuuci.html

[T25] Swift：结构体
来源：http://www.sxryk.cn/163dehpfyat.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163yaxnkcsb.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163hyyunoly.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163qsnuorpr.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163vfjdjzzv.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163iqlrkokt.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163pggandsc.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163acbztmqb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163gpiwmsny.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163syyhqdsb.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163qhntwmvg.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163jfxsweax.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163smrqoqvt.html

print("Hello")
来源：http://www.xuanzx.com/163oksfxrpi.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163qspjiqna.html

local a = 1
来源：http://www.aibaodan.cn/163kcoiccpm.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163unbjxnbm.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163ajtvcpty.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163qhjptiwx.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fxyzywos.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163fhqgeosz.html

local d = { a = 1 };  d.b = 2
来源：http://www.xuanzx.com/163pypbpkgk.html

[T36] Lua：函数
来源：http://www.xuanzx.com/163mekfdeuy.html

function add(a, b) return a + b end
来源：http://www.xuanzx.com/163tsnothbl.html

[T37] Lua：字符串拼接
来源：http://www.sxryk.cn/163nagprehs.html

"a" .. "b"
来源：http://www.sxryk.cn/163quchboyw.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163mdrxnddr.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kmrdsmie.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163lrfmhkon.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163bhpmeooh.html

[T40] Lua：元表
来源：http://www.aibaodan.cn/163bzredmoe.html

setmetatable({}, { __index = base })
来源：http://www.xuanzx.com/163suocsval.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163bkkircpg.html

print "Hello\n";
来源：http://www.aibaodan.cn/163bdlqjmev.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163wpsgkklv.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163zselpaqm.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163ongayvoc.html

"值: $a"
来源：http://www.xuanzx.com/163mwzqdqrg.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163xmlvdxej.html

if ($a > 0) { print "正"; }
来源：http://www.xuanzx.com/163pzssspdu.html


<!-- 参考信息 -->
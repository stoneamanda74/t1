外链999!wailian999！

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pjdirzul.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163hmpiogwx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163yyldkpro.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163gazmmgmw.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ejputyxc.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ezftftyr.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fixhubcy.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163irenlzll.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163lqyuyugn.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qsqgowrc.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163hufpbsye.html

[R45] 批量删除
来源：http://www.xuanzx.com/163ocwqklds.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163fuuzohsj.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163fkcreaeq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163nzbyvohn.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tzqisgcg.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163izbvvras.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163xhrlidrs.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hxhaktxg.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163sbubpxym.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163mnngckpe.html

[R50] awk 求和
来源：http://www.sxryk.cn/163znbulhdc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163idyzsjei.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xxvoklke.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hxjwreop.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163sxekosgo.html

wc -l a.txt
来源：http://www.sxryk.cn/163fzfvgqca.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163znahexzo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163kdrriofe.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163pspvfwxn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163tdoyjewf.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163tfemgvfl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163zhhzzpyi.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163qwspwaky.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rszlvrtg.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163kldxlfhp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ixvqzfrl.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163scaazdtr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163lsmeugfm.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163qtycykvg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163bpygibcy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163mhehzzvp.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163rtuphubw.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163sczzlzir.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163mjgbynnx.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163fpokjsxt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163fmwtzuwd.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163zsqxtlsi.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163cioecubv.html

[R64] 结束进程
来源：http://www.sxryk.cn/163qxkhndnz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ufjxfjhn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jkflzejr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rbkxuxvb.html

[R66] 定时任务
来源：http://www.xuanzx.com/163pzbxspia.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163rknfppyx.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163qapbttzk.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163jodjpelr.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wqgdytxj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vuckmanq.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ktpldqmo.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163kyegrqup.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163oftdzilm.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163uhppovrc.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163kiexaflq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ewcbjdyj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163pbmxtlrg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163alovpetv.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163tzhbqhbb.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163zthcfymy.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163whluslha.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163nfignzdo.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ncabxxpt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163alxptkus.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lcqrlsef.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163yxaiqdoz.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163dwhxfcyy.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163kirvwyjo.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163gbcmcdpl.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163fpzgzbja.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hlpjmvcc.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163jirnkjve.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163sfvxifgb.html

time ./run.sh
来源：http://www.sxryk.cn/163oxupcjea.html

================================================================================
来源：http://www.sxryk.cn/163gjvgsjpw.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nuhyzten.html

================================================================================
来源：http://www.sxryk.cn/163nazyqwly.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163yqcxivfp.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163xzyakthm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163tvlqoccm.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163hqtmoibh.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163mckrqlfo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163knoyartu.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163shkxqrrl.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163ootnewmu.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163sbhrbgoh.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rokuinrq.html

strlen(s)
来源：http://www.aibaodan.cn/163yblcwjnx.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cywfgouj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163noqmochc.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fntlkqjf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163avjrusau.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163wojsdiwh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163hjyiyqxq.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163eawlhjml.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zftfwdpn.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qmxnopra.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163xgixqmot.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163pytixavj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hvvqeoxu.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163kaxexrsk.html

fclose(f);
来源：http://www.aibaodan.cn/163cwdawhbe.html

[S12] C：写文件
来源：http://www.sxryk.cn/163uoqkqcig.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163yorlmzbr.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163hscpigce.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rcuyrjsh.html

[S14] C：枚举
来源：http://www.sxryk.cn/163wbzpaztp.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163quvopkqy.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163pqhiijql.html

(double) a / b
来源：http://www.aibaodan.cn/163bsnxggyv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163icgyayqv.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163yxnndept.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163qzmvbder.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ewjtokkt.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163qpvjsuun.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mpoqcvur.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163kiqcemyg.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vbcgiorr.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163vvonymmz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zxctosoa.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wrupxkjg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163clbouwwu.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163tsudxjok.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163arqsgvnw.html

[S23] C：随机数
来源：http://www.sxryk.cn/163cguchosr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163ewxlzqha.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163kssiyeoq.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163qfeqkzfo.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163einulbpj.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163xynpxaya.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163gdggabbe.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163aatdmqau.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163njdwdizr.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163tnewsbvo.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vfixmaig.html

static int counter = 0;
来源：http://www.xuanzx.com/163dtgoqwuu.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163folqvxov.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ejdqtlmr.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163kfinotsb.html

#ifndef X_H
来源：http://www.xuanzx.com/163ieezpgfv.html

#define X_H
来源：http://www.xuanzx.com/163tsvlmngd.html

#endif
来源：http://www.aibaodan.cn/163fxmdokvl.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tntubhvz.html

#include <iostream>
来源：http://www.sxryk.cn/163anfmjzds.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163jmkmcjxg.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163wgrznngh.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163hluyrspt.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163tgxyjqzh.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163dncrfmfd.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163doojmzxd.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163ofnccdhz.html

[S35] C++：map
来源：http://www.xuanzx.com/163shmkbfjh.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ejjalfne.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163landfrwx.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rltmybdf.html

[S37] C++：set
来源：http://www.xuanzx.com/163swzatvze.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163sjdnboaz.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163suvrtpof.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163gzxbhyct.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163rbqotell.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jhznueli.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163zorkixvp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163belvblsm.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163sdquckbw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163cgogiuuk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163nekoxpnh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163hswlgfyz.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163aljixwde.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163hdtxtabl.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163kdzejtgv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163umvhpuzk.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163tudjylre.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163cbvdfuvu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163oihezfxj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163vjmqtvei.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163olnwvhof.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163uuahhmxe.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fozhhpge.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163kzvlilym.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163jegttfre.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163gvxqsars.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163xbdkzvfk.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163tuhscmez.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163gfxcojfc.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163wtwshxky.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163hdjazkuw.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tzjnfmab.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163uudaaddi.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ekgbifcc.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fzbkuhrh.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163tkcftdog.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163jmjwjqje.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163nnsrkdjm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163cwogiebu.html

[S56] C++：optional
来源：http://www.xuanzx.com/163aefwgcah.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163hthwnzxa.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163bemoohji.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163zwzzhfeg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163sxsrhegh.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163lekcredi.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163vbuzzdci.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163msjdxabl.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163fkeklvnv.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163oqppptpj.html

================================================================================
来源：http://www.xuanzx.com/163mlekbwek.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163ovtbjowd.html

================================================================================
来源：http://www.sxryk.cn/163roqvwuei.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163fofjdfpj.html

println("Hello")
来源：http://www.xuanzx.com/163mtajamul.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163ymyjuprk.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rbjmbghf.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163bbocwcil.html

"值: $b"
来源：http://www.sxryk.cn/163awanwrxf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163ohsrlvoq.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163gbzlohng.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163nfhsaxot.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163jcczlwip.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163nebsdame.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163lvuzgtqo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163mvohjxjh.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163bcbmndzi.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wsoxmigr.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163ubmiotqa.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163kwgbzdsj.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163hbsumcqv.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163varfvqvu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zwddvlta.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163gzyvnqby.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163phslunpm.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dhkxchdx.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163ynwxjooc.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163jtlaypjw.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163sxqknpey.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163ttzfdhnq.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163qgadbzft.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163mcmmjdmf.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163slzmacsd.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163azjugyqf.html

print("Hello")
来源：http://www.aibaodan.cn/163kvtmyexx.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163suybpjff.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163gtxedmdq.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163dgpmfyyl.html

"值: \(b)"
来源：http://www.xuanzx.com/163haivobzq.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163ajryeeif.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163cuyijbux.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163vkcixbne.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163yjaofehi.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kwwpxlmj.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163zwccqbyy.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163huzauucz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163falkgyba.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163nnsbmejw.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163auiwtkgy.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163rqfzwcks.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163ztlxuusc.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163pokwupah.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163drokwucv.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163wxbehnnj.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163ytzganic.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163srbyunwp.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163okumzvvn.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163lfngngup.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163uslctucz.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163yyufrwgv.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163ufbhzucd.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rftuursz.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163jcsyxnkq.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163srwxpuxo.html

print("Hello")
来源：http://www.xuanzx.com/163udwwwhyf.html

[T32] Lua：局部变量
来源：http://www.sxryk.cn/163kqhzaymj.html

local a = 1
来源：http://www.aibaodan.cn/163oguqgiyz.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163tyejatez.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.xuanzx.com/163nmrufbbe.html

[T34] Lua：遍历表
来源：http://www.aibaodan.cn/163ufrorsrf.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163gsfrhrqi.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163silouwqv.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163yignvnug.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163bksgvaex.html

function add(a, b) return a + b end
来源：http://www.sxryk.cn/163omxuzjcv.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163nutivtqd.html

"a" .. "b"
来源：http://www.xuanzx.com/163cmfiiprn.html

[T38] Lua：条件
来源：http://www.xuanzx.com/163cgjjhmec.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163kwqzvwob.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163noaqruhs.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163qdhvlxba.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163ntzenlji.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163dnoipiys.html

[T41] Perl：Hello World
来源：http://www.xuanzx.com/163izjpuyds.html

print "Hello\n";
来源：http://www.xuanzx.com/163iyaabips.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163urpzhsju.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.aibaodan.cn/163onrxnepx.html


<!-- 参考信息 -->
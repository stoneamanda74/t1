外链999!wailian999！

files=$(ls -1)
来源：http://www.aibaodan.cn/163tditgwpb.html

[R38] 管道串联
来源：http://www.sxryk.cn/163kvovsjmu.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163djrlfodb.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163jxneplet.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163prercguw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163eairvrbx.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163mzsvoyqa.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163cyxzgvim.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163nraqewrf.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163iehydsjp.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163tnjrvbpe.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163aggazlxp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163hpnasvem.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163xprptbgd.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fwrltxuh.html

[R45] 批量删除
来源：http://www.xuanzx.com/163uahssfnb.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ccmlpkvf.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163bhsyjwpb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163jkcdbvyx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163sneeofdy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163wnvvnqtu.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163mptunmij.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163sinegcqk.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163ncrwfdgi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163xdnxiuqp.html

[R50] awk 求和
来源：http://www.xuanzx.com/163drxxvmci.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163ovinnfkb.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163rrflnkvh.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163sgjryssx.html

[R52] 统计行数
来源：http://www.sxryk.cn/163njmfdvbh.html

wc -l a.txt
来源：http://www.xuanzx.com/163pbsnnwef.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163voicbkul.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hahqoicw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kvxlqrvz.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rofzwphv.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163yzduspzw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163atmbjyzh.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163zggwtqsm.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163lluhhotn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163vidqancr.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163nxhydfxy.html

[R58] 下载文件
来源：http://www.sxryk.cn/163caycoyfo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163gpgemehp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zezdjaly.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fakqofgc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163irxcmvzf.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jyfyutkj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163satfghma.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163qitodbfe.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163rcvrvqvn.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163roeqklws.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qjperpyk.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ruulapmo.html

[R64] 结束进程
来源：http://www.sxryk.cn/163briddbjm.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163dkhlrxvw.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163yexvkvcg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163pplvqfwa.html

[R66] 定时任务
来源：http://www.sxryk.cn/163yudxkdjm.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163qbffkmxp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163howeatdf.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163tbganata.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163rmwcxwos.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163hqqfijro.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163tjfduecm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163vuwdxkjt.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163grqztjlc.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163wckrjody.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vmqeqczq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163joplwbht.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qdqqbnmk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163qpusognb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163rwsrmqix.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163uqckiaus.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163knwejnwo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163mmcpscsn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163kuvjwcyl.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163aziwalbx.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163xlhrspmg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fltiltko.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163hcvoaoxu.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163fgqiopuc.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163tgmuskjm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163rdylhdaq.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vcomcchs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lqgyiinz.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163awtoamlu.html

time ./run.sh
来源：http://www.aibaodan.cn/163pxffcrgi.html

================================================================================
来源：http://www.xuanzx.com/163ailycubw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163bkrblpge.html

================================================================================
来源：http://www.xuanzx.com/163ywtotwjb.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hkxtuzon.html

#include <stdio.h>
来源：http://www.sxryk.cn/163mztizrya.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163bfjujtuq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163wkpneuqc.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163lmvqiwwg.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hfxfxthi.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163necjgzes.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163veuezqfz.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163eiwtjqid.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163pcdghpbk.html

strlen(s)
来源：http://www.sxryk.cn/163xrtijguj.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163jmbrivvm.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ioypdatb.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vbzkkqrq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163islhguag.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mpokbihr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wohyzhsf.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163lqpimumo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163uwzzevle.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163wwaxjahy.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163gwxnpovu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163tjanoumy.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qjflrcml.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163hrdupdre.html

fclose(f);
来源：http://www.xuanzx.com/163riwtdnha.html

[S12] C：写文件
来源：http://www.xuanzx.com/163jgvuciom.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163cjamioch.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163iiesiutn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tgaaocry.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bycleqeo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163mobqexqx.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ahukwktc.html

(double) a / b
来源：http://www.xuanzx.com/163xpisfrfx.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163bmhuuorx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163hjpcglqg.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xzkpxtkg.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ugtucguv.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163sdtmjfdz.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163iprtkuxe.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163iywxcsph.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163tnpvfqas.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ubxqvonm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gnujzwjq.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163oxtmzxdw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163dxcduuiz.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163doggbhkv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163lmuuexhx.html

[S23] C：随机数
来源：http://www.xuanzx.com/163pycitprw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163zjgsggco.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163fsnnritj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163neqrsxad.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163yhprmdhu.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163oxcdxkvy.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163fdybzrzs.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163jvovlthb.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163xkessblb.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163xzqeyxur.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ckbkobux.html

static int counter = 0;
来源：http://www.xuanzx.com/163sxeghrya.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163facgozao.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163lyqzxkmq.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163azupzlxh.html

#ifndef X_H
来源：http://www.xuanzx.com/163rrhtkxjz.html

#define X_H
来源：http://www.sxryk.cn/163hulgcxvx.html

#endif
来源：http://www.sxryk.cn/163gnccbscx.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163gsuradyn.html

#include <iostream>
来源：http://www.sxryk.cn/163rqwqwspy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163updnmvpu.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163jtoulmvi.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163wkpyxikk.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163fesnxski.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163vzdomzsj.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163vhlygzqq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163wnqyljho.html

[S35] C++：map
来源：http://www.xuanzx.com/163bihvqqft.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163bmioygrc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163ywjyqvbq.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163iuoxukel.html

[S37] C++：set
来源：http://www.sxryk.cn/163cghkgztx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tubghcgs.html

[S38] C++：排序
来源：http://www.sxryk.cn/163swxmplwg.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163ygmdburz.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163eqhuntxp.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163tenqnjky.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ltxxfedt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163owmrjoqc.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xplhdcer.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163pmzjzygm.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163walyuneb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163tqkesyck.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163dfxojfjf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nunycpzg.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hihobcps.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163xssiwzmy.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163pchfwwar.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163jxmjcoum.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163hjzdiaae.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163oywfiiyt.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163gdsyctqn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163wahppgsq.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163cskgqnxa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163xitrspyb.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cwgakaof.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163oreaehsq.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163dcndspen.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163rverfgug.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vfttksgx.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163awngovts.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163pllznyxu.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jiikyluc.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163mdqmrbwp.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163grphmdpx.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xnzwdvlv.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163cuxrkpai.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ursfkwte.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163bnyzbymb.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163zmcnkppb.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163wedubhqm.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163sxmexehp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163qqipqeqy.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163pmpbcpbf.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163nnrwjaaq.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163lrjvcuim.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163yfucwiko.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163bsvroero.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163vfoylsur.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163jhzqneek.html

================================================================================
来源：http://www.sxryk.cn/163aqelgflt.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163dzvdireh.html

================================================================================
来源：http://www.aibaodan.cn/163gtydbwvp.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163bokovwjq.html

println("Hello")
来源：http://www.aibaodan.cn/163aruixwsz.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163rtfriutj.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163vtzieiyo.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163uqwjgloo.html

"值: $b"
来源：http://www.xuanzx.com/163maiendza.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163wsefkgxv.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163rllyehqv.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163eqglnotu.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wckaiyzq.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163jkhrdgpl.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163vshebjaq.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163jxkqleur.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163fgvjpcbg.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163luhknbvd.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163hxmdkhcr.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163uofzdotn.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163gmtvbejh.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163cjykafad.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163yhuueugs.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163zbirhvae.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163gdrawlgm.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163xxnsovwp.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163ncuxopkh.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163ltqmucbh.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163rehpavme.html

[T14] Kotlin：循环
来源：http://www.aibaodan.cn/163hpccbkpn.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163eokeejhi.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163betwtlza.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163efrnfxxo.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163qpehxjoy.html

print("Hello")
来源：http://www.xuanzx.com/163yasmqgwk.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163kpfibtka.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163pfqbplwl.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163hpvxmali.html

"值: \(b)"
来源：http://www.xuanzx.com/163jqqgbhrc.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163birppzsl.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163apqzarru.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163jyhktisf.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163zmvebcnx.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163xnivrlbw.html

for x in a { print(x) }
来源：http://www.xuanzx.com/163kumkitgv.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163toxxikrd.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163uebztayz.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163htmmvpgi.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163ggaezxhb.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163iinzxzgd.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163kncxwrxb.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163ehybwfdi.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163zyeftvvn.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163juotdttm.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163mmephsmt.html

[T27] Swift：错误处理
来源：http://www.sxryk.cn/163xucghtzc.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163fntrnypx.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163fuhjnatw.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163zutdagnp.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163hxjunmin.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163wfrkxkns.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163luzlodqk.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163szcszpms.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163wojczfyb.html

print("Hello")
来源：http://www.sxryk.cn/163ulhnehue.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jtedxdkt.html

local a = 1
来源：http://www.xuanzx.com/163prmmddhs.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163eldmkdob.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163tomuffhr.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163dkeydfao.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163yflnljdg.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163erkpuxgi.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163cpbymxoj.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163cxpdwhxw.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163jqwblgld.html

[T37] Lua：字符串拼接
来源：http://www.aibaodan.cn/163soqdaibz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163ldboxqwy.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163ffkcojlj.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163fovdaomt.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163vdvvxzqe.html

string.find(s, "%d+")
来源：http://www.sxryk.cn/163eyrdnchy.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163lilzqida.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163cyimgykv.html


<!-- 参考信息 -->
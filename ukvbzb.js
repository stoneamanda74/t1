外链999!wailian999！

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163qwrzmgwa.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163jvsqwoxl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163nbotvwdz.html

[R45] 批量删除
来源：http://www.xuanzx.com/163tgrgohiz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163gkydejeb.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163aaeqmwyq.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163lsujfcvs.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163pmgzqzbk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ckxmuiwr.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163ghiyhhtc.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dlcbuxgm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163bssuklru.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163futrkush.html

[R50] awk 求和
来源：http://www.sxryk.cn/163fqghqbwn.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cjmejbje.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163xzrssowl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163hmbsixcg.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163rsgvpogh.html

wc -l a.txt
来源：http://www.sxryk.cn/163uxqrgukc.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163midxkduq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ffrhdhzi.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kbfyhiwf.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163ebkifzvj.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163akpwayen.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163iemmxiyw.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163eidzaaec.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163ljkzvvwc.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163jouwjvyf.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163oklwqkkc.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163jbddslex.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163bmnjhgja.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163urigkshr.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163aawzjzlr.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163agxlughy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163janajdhx.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163wudsmnwg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163xjhgthbm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jxterouz.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163dbmooqwc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163jjndpzrk.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163dduuihzq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vtlewdau.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163zjrteuwp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163xveoupcx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163kbmzbrkn.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163xdnqkczs.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163wwnupxad.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163owcsebvh.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163bosngjui.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163oootsjdd.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163neqrdtjf.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163fhronqpz.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163wixoxfzp.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163gfmsvnue.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163bnrgxjrd.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163urgsgpgu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jkcddnad.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nguicibh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163htlbevvw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163gjnulvei.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163knphrosq.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163qbufpkau.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163drvojpkh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163fbbanepk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163nrcbhdkk.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163cgxexqez.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cxggxjgb.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ijhmcktt.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ctmrelfg.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dfzpcafm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163nfvsdyov.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163narjgvvm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163hobfmgtn.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163qmlucjwd.html

time ./run.sh
来源：http://www.sxryk.cn/163frzpqnow.html

================================================================================
来源：http://www.xuanzx.com/163cskkzmkb.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163drpffjsr.html

================================================================================
来源：http://www.xuanzx.com/163eqdndyck.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163mglfocdq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163reyifxfh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ajqcxmjc.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163vnxdhike.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163nbykevah.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163vayhtbtm.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ynvvblds.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lvldtctg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163afrwagnh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163ruvkymks.html

strlen(s)
来源：http://www.aibaodan.cn/163fkpgpizs.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163dtbvtjhz.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163elfmsssw.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163pyuuqein.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163kybmlosy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xaklqbyl.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rzntdgyz.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163bhzkdcat.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ueswpjbf.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163qmbujcbt.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163itobiaxx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ecfbunrv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163naylxwbn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163jjkpftkm.html

fclose(f);
来源：http://www.sxryk.cn/163gptzexzz.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ctllayea.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163eagvzuvm.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ngnbnqon.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bhkpzoxp.html

[S14] C：枚举
来源：http://www.sxryk.cn/163sbikfipd.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163skekmiwo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163efobpbeo.html

(double) a / b
来源：http://www.sxryk.cn/163kylmxxej.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163mxkxfliv.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zyxayakd.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163dkbkgtba.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163nqveldvj.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163ltjizeys.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163kbxhntsu.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163fzhongwu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gvvxuycc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163zdystsdc.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yasuczhm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163pcjdkcpt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163cefaqhyn.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163chkvuiba.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163gksqyhvm.html

[S23] C：随机数
来源：http://www.sxryk.cn/163grbyyqoy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163iqaixsrf.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163wowxagjz.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163aegojeiy.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mefeczky.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qaxlsjeh.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163elpsiaya.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163gvpmhtvs.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163edfnuzfx.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fuayacop.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163apejbcil.html

static int counter = 0;
来源：http://www.xuanzx.com/163vqxtyjbn.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163ftjhnokb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qkezcnoe.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163cuhtdukh.html

#ifndef X_H
来源：http://www.xuanzx.com/163xgtiqugu.html

#define X_H
来源：http://www.sxryk.cn/163zkgmmrbe.html

#endif
来源：http://www.xuanzx.com/163orkghaev.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163uzdyeszq.html

#include <iostream>
来源：http://www.aibaodan.cn/163ygkpqiiu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163avvgzwlq.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163bhruwlnw.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163ggzdogwr.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163eemnpeyv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163agybiaoz.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163etqbjexw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163dhdbpfaa.html

[S35] C++：map
来源：http://www.sxryk.cn/163yrrmnylx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zcwcstet.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163kczcdrpm.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mndzjwsu.html

[S37] C++：set
来源：http://www.sxryk.cn/163xoraatqc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163tfhtjekz.html

[S38] C++：排序
来源：http://www.xuanzx.com/163cqwrrggh.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ayvsjjrg.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kxizsyyz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ewpdkqln.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163yupzaxci.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163mjkkwahw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163vpvfjmqh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dzrzidhj.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163jyyjnwzy.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163pclzoean.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163hehyugig.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163bntfnlqo.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163xafmodfb.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163izdypujk.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ajvytate.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163oyakbanm.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163xvoksjmo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163xfxcrdwe.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163kpgjlofl.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163zwufstov.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163fgmlzhzd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163qzhizfzx.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163bavprqoz.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163aeefisjo.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163ikqlhard.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163pvulkytn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163qnditvsy.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163ydufkqez.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163rxanerln.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163txmkpqpp.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163wgnungft.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163xjxfmcta.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163fblwpvkb.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163ahgddzbu.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163lszwyqgt.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163itkbmqkt.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ncymtjzk.html

[S56] C++：optional
来源：http://www.sxryk.cn/163hzmupsjk.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163eembwgyr.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163xrcunefl.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163nelxhumz.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163koqsldfl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163tvjxxikf.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163gmmhguhn.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163tvbgmsvy.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163gjzpsmje.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163dqyqwtwh.html

================================================================================
来源：http://www.aibaodan.cn/163gyvcmdyo.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ddlzlhzk.html

================================================================================
来源：http://www.sxryk.cn/163sqghvljf.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163cakftfpk.html

println("Hello")
来源：http://www.xuanzx.com/163mxbunokd.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163wxulaenv.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163koonmeom.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163vbtetupj.html

"值: $b"
来源：http://www.aibaodan.cn/163nrbiyonw.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163ropxmnsk.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163uxawbqrw.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163hoodqulb.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163wohguose.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163ivdteaqh.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163xcjefjmv.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163tyqstvth.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163glcfahmc.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vbswhcax.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163cijmasjn.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163hmegaqhw.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163qyoboaef.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163mdupnczu.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163sfdfugzh.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163cuxqamsi.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163jhoycvjp.html

[T12] Kotlin：解构声明
来源：http://www.aibaodan.cn/163twhmnzqu.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163sgliiwzn.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163esncdhte.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163gydzydjv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163zejrpkvs.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163hnevkxkl.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163lzstvlty.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163xhmpcxme.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163enxduedj.html

print("Hello")
来源：http://www.sxryk.cn/163rukcilfm.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163lelqyafo.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163dynopnva.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163fzewyfmx.html

"值: \(b)"
来源：http://www.xuanzx.com/163anjvsvxy.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163hyylvfyc.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163dfktvvkt.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163qjzkqcsb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163hcfrofor.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163bnfmjcws.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ykzrsdvg.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163uahqwdwp.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163jqjgffzt.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163cjbvuyub.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163rtfcboux.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163hcqhlshq.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163fhznemoq.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163nwnswzxn.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163nrdfhagw.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163laanwurb.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163tdednqlh.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163wodzrbxd.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163ysanjuvw.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163jmaebgds.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163tbtkaatc.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163qfqcmqoj.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163gtdexhol.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163spyqxmpr.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163hshjdnem.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163jkbuwzlx.html

print("Hello")
来源：http://www.aibaodan.cn/163voduisly.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163lxffmtuj.html

local a = 1
来源：http://www.xuanzx.com/163vdbuvowb.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163nmrkozxi.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163ugqrifjo.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ibylftjr.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.sxryk.cn/163akrvrkrj.html

[T35] Lua：字典表
来源：http://www.aibaodan.cn/163vbhfvhip.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163cqtuqpix.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163vvetynov.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163geiephkf.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163obanhqnd.html

"a" .. "b"
来源：http://www.sxryk.cn/163hcnuuzff.html

[T38] Lua：条件
来源：http://www.aibaodan.cn/163kyvtlvde.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163jqohqhrj.html

[T39] Lua：模式匹配
来源：http://www.xuanzx.com/163tnqimmqu.html

string.find(s, "%d+")
来源：http://www.aibaodan.cn/163ybnzfaiy.html

[T40] Lua：元表
来源：http://www.xuanzx.com/163ngzahzsg.html

setmetatable({}, { __index = base })
来源：http://www.sxryk.cn/163xamyuxfa.html

[T41] Perl：Hello World
来源：http://www.sxryk.cn/163ztowmolr.html

print "Hello\n";
来源：http://www.sxryk.cn/163pqadjepg.html

[T42] Perl：变量类型
来源：http://www.sxryk.cn/163hmtftjnd.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163luptulbn.html

[T43] Perl：字符串插值
来源：http://www.xuanzx.com/163ublxdntb.html

"值: $a"
来源：http://www.sxryk.cn/163maajqdxy.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163iikbkhwr.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163jjoiuduh.html

[T45] Perl：数组遍历
来源：http://www.sxryk.cn/163jqicfruv.html

for my $x (@arr) { print $x; }
来源：http://www.aibaodan.cn/163jwlkuzjp.html

[T46] Perl：哈希操作
来源：http://www.xuanzx.com/163oegbhxze.html

$h{b} = 2;  for my $k (keys %h) { print "$k=$h{$k}"; }
来源：http://www.xuanzx.com/163qgobwssl.html


<!-- 参考信息 -->
外链999!wailian999！

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163vmiliijc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163qkkxhgbw.html

wc -l < a.txt
来源：http://www.xuanzx.com/163bvjwxiwg.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163zrhgfjjm.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163isdvbuuq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163sydahiip.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fhuwzwxi.html

[R45] 批量删除
来源：http://www.sxryk.cn/163bfyzqriz.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ukbydjvt.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163xkmthoig.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163uvdyouyr.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163mafoilxh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163cemgthkm.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163fsrmgsap.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163zolqagbc.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163pvcraehm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163naijiubb.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163wjukliuu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163sfwgqanu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163nxhxaywl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163lvnsavew.html

[R52] 统计行数
来源：http://www.xuanzx.com/163jzrdqvsv.html

wc -l a.txt
来源：http://www.xuanzx.com/163fdvposkj.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163euwiwthn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163jfvmkulg.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163rkodmfmm.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bjnymgks.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163zpvbbtnl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163czmpmhbs.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jxosexrh.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163ejaoqkhn.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163oqvxdpug.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163vgeymilc.html

[R58] 下载文件
来源：http://www.sxryk.cn/163xvovchtm.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163woifltmp.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163dqyttevy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163wzmdngna.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163odhofehw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163vmnlkizo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vtruanrf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163oxienszu.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163bdeqimlt.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zrzniiqf.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163lqqvcawf.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163gcbadpnw.html

[R64] 结束进程
来源：http://www.xuanzx.com/163vcubzmza.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163aeofcwli.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163evnugjer.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163giiaudir.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bqxdvfku.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zlqeovpm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163pkhomsij.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gattrfyh.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163biytgpqi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163pvuelvcv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163cglvqoik.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163onpzfqef.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163tunioszk.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163ezweyiqz.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163alvzfuvw.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163rmjysohe.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163omxhshru.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dqqyxtoi.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163gqtonyjf.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163heyavrcj.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ccmlfcza.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163qlznibty.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163dtclivlp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xgmdxecw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163gtuhpfnh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163kglxwrdy.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163haahablp.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163vmogtjrw.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163pifevyfn.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163pfpnejod.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wghhracv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163cojkfevs.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163mhtdpcmt.html

time ./run.sh
来源：http://www.sxryk.cn/163cbxrhcxf.html

================================================================================
来源：http://www.xuanzx.com/163qcoukenr.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163faaldrik.html

================================================================================
来源：http://www.sxryk.cn/163egzkeguu.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163frtewapw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163tosqfrhe.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163prfrcthi.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163fleaxvve.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163daqkkvhz.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163eboizfua.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163hxiqxzid.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rswphxfs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163oencryea.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163upgzpedo.html

strlen(s)
来源：http://www.aibaodan.cn/163wojzzvid.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163pngscgoj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yodbewku.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163ldabqhkc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163qopqeotl.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163xhgvxapg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jnygpsih.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163andbwuzm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163vyoiacet.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163sxwyltit.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163ahsifivc.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163wgkegiyu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163gwafeuua.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163udldpcrg.html

fclose(f);
来源：http://www.xuanzx.com/163mopurqjb.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163jjxjptqr.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163awbhlvgs.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163htksdjce.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hyldczwk.html

[S14] C：枚举
来源：http://www.xuanzx.com/163mvcsgaiq.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163umyzacgn.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163zqoaasxr.html

(double) a / b
来源：http://www.xuanzx.com/163psbhdeiw.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163locsfonq.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163fvxvegkk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163neqwxfij.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163kezrijxd.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163wdbtkcfb.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nnbuaqnj.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163igwmzqor.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163xlsezzss.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ocivpuld.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pwvzjrid.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163lnppgffg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ffkebpjl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163bxgoxzaq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163nnpuqdpi.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163fpkuxgyz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163papgzqkn.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163hcodstxl.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163aziftkhu.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163beodfssp.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163fzugwsbl.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163mugobgqe.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163tsxbbbwv.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163juimikms.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ometzaow.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163brfexxov.html

static int counter = 0;
来源：http://www.xuanzx.com/163ssbommmp.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163panrflhq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163idzshcoj.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163vpbkvvhr.html

#ifndef X_H
来源：http://www.xuanzx.com/163blhmhyrt.html

#define X_H
来源：http://www.sxryk.cn/163aqdrzksy.html

#endif
来源：http://www.sxryk.cn/163uhlbrwma.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163djcrnrpv.html

#include <iostream>
来源：http://www.xuanzx.com/163lqmcgqoo.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vsyuoxcw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163fgkupwhy.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163cqtudybr.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163vlrkwzui.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163booubdmd.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163dzrvflpt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163kenfuewk.html

[S35] C++：map
来源：http://www.sxryk.cn/163brrdbhac.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163mnytcvbx.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163erznqxog.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163eyechnsz.html

[S37] C++：set
来源：http://www.sxryk.cn/163ogspmpyp.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163kfdyrkrw.html

[S38] C++：排序
来源：http://www.xuanzx.com/163ixrhoddo.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163byrjhtjk.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163sgsskeaf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163jgjgkywk.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163yligdnbi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163siszwczu.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163ylkcjgmi.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163ofugphwk.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ejdbtswg.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163fdsmfcgj.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163rxofruxq.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163qkshbfnz.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163svfcmfvp.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163scyswvxh.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163vqydbblh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163cpnlgwfh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163femyprhy.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163eiromchm.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163ximxkkpx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163lodeaxyt.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163fgfhgrli.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163bfmxzzoa.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163arrhwzww.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163sxibvraf.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163spadyftw.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163udupcpms.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163vgeuhznr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hmpvully.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163qxfvcuvr.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163hcefuwdc.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163xuyvqohv.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163jewcprcq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163fmvrdvue.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163yddwnekr.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163iyyoqwho.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163toklvkca.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163efdbtazj.html

[S56] C++：optional
来源：http://www.sxryk.cn/163xdiudbdf.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163qufacdqs.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163gjrguilu.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163wyidfggj.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163rjmywpsz.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163wbtzmvce.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163qffgljsx.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163eujwogub.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163scljusal.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163izethccp.html

================================================================================
来源：http://www.xuanzx.com/163xieyjsli.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163anpwnzwf.html

================================================================================
来源：http://www.sxryk.cn/163idrtxtmq.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163yxigojar.html

println("Hello")
来源：http://www.xuanzx.com/163oqarytog.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163mbfgyhsh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163rnozmuzr.html

[T03] Kotlin：字符串模板
来源：http://www.aibaodan.cn/163ywvwxlar.html

"值: $b"
来源：http://www.xuanzx.com/163hwzpvtjz.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163xhshwugd.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163uylrvsqp.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163mdwzevzj.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163vlquyysg.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163lniyxqgc.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163ansmstgg.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163dxpckgzu.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163ghhudatv.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163kwlvchdx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163cjufnwfv.html

[T09] Kotlin：扩展函数
来源：http://www.xuanzx.com/163gmyigfya.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163yaemjzhv.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163wzlpvcem.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163zvhqkxxc.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163oiwkssbn.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163egrjhnqy.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163iyrcjiyt.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163apywooin.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163zsaxrhik.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xahyovyx.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163nlkxvhjv.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163vqdupabl.html

[T15] Kotlin：接口
来源：http://www.xuanzx.com/163quxobpdx.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163suurzxur.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163uljtxvxr.html

print("Hello")
来源：http://www.sxryk.cn/163osbnutwm.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163irypmvft.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163uoydjhlp.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163xukzgmsw.html

"值: \(b)"
来源：http://www.xuanzx.com/163irduxqsi.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163udrvbasd.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163sxzlwbok.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163hxurqwqa.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.sxryk.cn/163meltwuad.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163kyviqgzf.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163gsobfagh.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163gvlraasj.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163pkapoopq.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163oinkqqvx.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163pwwvrrav.html

[T24] Swift：闭包
来源：http://www.xuanzx.com/163xxhmpbhr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163zlemgdtx.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163llcdqsso.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163rrzcdatf.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163ohvxpvyu.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163mzbjtbqf.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163usobfbrf.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163eznxrvfz.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163wfrmjfoj.html

enum Color { case red, green }
来源：http://www.aibaodan.cn/163vpizlbrt.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163djpzpeog.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163wkvmprde.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163tpxgltql.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163hutgxkes.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163dqvpcpfo.html

print("Hello")
来源：http://www.sxryk.cn/163twxmlrqp.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163hfcwltlx.html

local a = 1
来源：http://www.xuanzx.com/163nakxiwnd.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163xbbgmxkk.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163wyoxhbjv.html

[T34] Lua：遍历表
来源：http://www.xuanzx.com/163olivxiju.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.xuanzx.com/163fsrfwheo.html

[T35] Lua：字典表
来源：http://www.sxryk.cn/163gbgsswpu.html

local d = { a = 1 };  d.b = 2
来源：http://www.sxryk.cn/163ogtntmmh.html

[T36] Lua：函数
来源：http://www.sxryk.cn/163vdwqlzal.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163usemnzlk.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163eclhixbz.html

"a" .. "b"
来源：http://www.aibaodan.cn/163kttmiyyg.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163hvatzxkx.html

if x > 0 then print("正") end
来源：http://www.aibaodan.cn/163thkmqwft.html

[T39] Lua：模式匹配
来源：http://www.aibaodan.cn/163nalthdao.html

string.find(s, "%d+")
来源：http://www.xuanzx.com/163thdwraxq.html

[T40] Lua：元表
来源：http://www.sxryk.cn/163uvwdinlp.html

setmetatable({}, { __index = base })
来源：http://www.aibaodan.cn/163dhkjwxpq.html

[T41] Perl：Hello World
来源：http://www.aibaodan.cn/163wjwlfoex.html

print "Hello\n";
来源：http://www.sxryk.cn/163jvfblpts.html

[T42] Perl：变量类型
来源：http://www.xuanzx.com/163yimjpcsb.html

my $a = 1;  my @arr = (1, 2, 3);  my %h = (a => 1);
来源：http://www.xuanzx.com/163ykoltukp.html

[T43] Perl：字符串插值
来源：http://www.sxryk.cn/163saktlafz.html

"值: $a"
来源：http://www.sxryk.cn/163wpmdbhit.html

[T44] Perl：条件
来源：http://www.aibaodan.cn/163dukirnxc.html

if ($a > 0) { print "正"; }
来源：http://www.aibaodan.cn/163ddzhlsby.html


<!-- 参考信息 -->
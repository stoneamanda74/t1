外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163jgjmrbge.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163yhwcdhff.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163xuhfoxfg.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163dpgktxdr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163mivnencz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163sqcwousn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ufjnddoi.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kkaerqeu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163bucgdvok.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163hwaqudgc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fncjdmio.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163xvteeyfc.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ezrezuds.html

[R38] 管道串联
来源：http://www.xuanzx.com/163zordssle.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xakfmzre.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gkrewgdm.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163omxkgtdn.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163seuxgojw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163csulqsfs.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163hhtyaqbd.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163drheljgl.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163wkyljsug.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163oaiixsof.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163pzxlefsj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ovkahelu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163zmhbbdyq.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163qhcshmsg.html

[R45] 批量删除
来源：http://www.xuanzx.com/163cmjivdzl.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163xerectmw.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ihspqqjm.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163jmihbzhw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dtovtyst.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163rrpxmglw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163lairbcpx.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gwoxoerh.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163rqgerhjg.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ruoakuni.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163yfvgelel.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ojuvrsws.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163pxhvjfip.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163hlgytske.html

[R52] 统计行数
来源：http://www.xuanzx.com/163gircrgpe.html

wc -l a.txt
来源：http://www.sxryk.cn/163ehowfgya.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163gwwzfnij.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163hzfawacb.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163dszwicun.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ykwinqdn.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163dhbbamyj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rhqxnbsz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mhsmnzsu.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qqoziegz.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163pobcrzsh.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163wgeiieqy.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bynsgxpg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163dqnjayps.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163cghhosge.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163gffckfed.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163iwtodwes.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163swecgumj.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lvgfuave.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163kpiouybm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163xdptjmzl.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163hbjbzlpf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163kzfdieqe.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163lfzuutuq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163dejnqdyh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163kjylfqwj.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163jrfsgpit.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163pcmuwupf.html

[R66] 定时任务
来源：http://www.xuanzx.com/163tygubccu.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163reztqngo.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ipvhreuv.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mpryhsez.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163dutheubf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163gcugyfff.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163lxbusgkj.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163qnfpaxcl.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163udspmcza.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163blxodqyq.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163iyovdfjo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163bicsscqg.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163fhutrujh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pmbmstbt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163puenuyad.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hwhigbne.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163madeqxlj.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163wjhojjxj.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163guixojsc.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ohnjpuqd.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163npsylena.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wknjipes.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163usiuuizq.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163lvvvkiwz.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163sajaehwz.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163uddsuvto.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163bucnphdq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163cdeafoqw.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163umnpuvja.html

time ./run.sh
来源：http://www.aibaodan.cn/163ubfkvxjy.html

================================================================================
来源：http://www.aibaodan.cn/163xeccleta.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163nefxavwz.html

================================================================================
来源：http://www.xuanzx.com/163lbmlvuch.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163spblejds.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pjdkcdom.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dkkyocuz.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163qjbbpurv.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163tajvkxyo.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163pbkzbpdf.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163bljqvlql.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163hwdzafoh.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163cqmpomej.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163urqlprux.html

strlen(s)
来源：http://www.xuanzx.com/163jjodwfga.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163yrsickel.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163ttqcxfxp.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163lkpctiqs.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163swahykut.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163obrxftnj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ktzsyylh.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163yknzfgrn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mdqowqqb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163hedvxfdy.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163frnleprb.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163rmzncohw.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jkavmysf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163fwbkmsqc.html

fclose(f);
来源：http://www.sxryk.cn/163ukntxklx.html

[S12] C：写文件
来源：http://www.xuanzx.com/163nsegpdke.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163gavnsnpd.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163wvphcwnw.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163zaakmqqq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163bpmokvpu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163rkxvcetd.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163snrajwth.html

(double) a / b
来源：http://www.xuanzx.com/163nasenhqk.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163olznclyh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163roawecfj.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163rktqxfsk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163oifbwekf.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163lgoihuno.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dirvwucr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163nifablsb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jhhbosxr.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163iatoszmr.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163frvgyrib.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163qxrkcwgy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163lebbjmvt.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163mbjexjas.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163fmuadzzo.html

[S23] C：随机数
来源：http://www.xuanzx.com/163pujnqiom.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163witpvhxa.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163wpabbovs.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bdppokkl.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163rxqdrnmj.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163najfoxfj.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163joifazyq.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163htcgvcrz.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163oeunarjr.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163jobvvqos.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wuwowcva.html

static int counter = 0;
来源：http://www.sxryk.cn/163ekiunlsx.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163rjxzetss.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vqrhrcss.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163xagiguxf.html

#ifndef X_H
来源：http://www.sxryk.cn/163pkillhqh.html

#define X_H
来源：http://www.sxryk.cn/163ltadvndr.html

#endif
来源：http://www.xuanzx.com/163lplxviwo.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hkpxviyj.html

#include <iostream>
来源：http://www.xuanzx.com/163uyjwcwua.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163wtyhykfl.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163dflrwhva.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163pnpsnfae.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163llleozbk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163nihvtybp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163wamqchtk.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163tofosqne.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nkakvgsz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rmidnksy.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163tuillfrh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163poozwfal.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lpfnrxhr.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163hmbniluh.html

[S38] C++：排序
来源：http://www.xuanzx.com/163wccslsga.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163eijhpmxu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163poluoqsf.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163wfwjbail.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163lpnkspum.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ehnfvawd.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163djaaaaqg.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163falpqtrs.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163kqowkzjc.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163wzwvbgma.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163omndvrjj.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163sjemegbb.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fwhlaawh.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163nxjyswcg.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163ixbhitpx.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163flnyjmoc.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163fpkomlox.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163iaptcnaw.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163remqwdae.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bhveskhs.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163diuztfpc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ftwekxdv.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163szvxpcdo.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163oowpifmx.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163oilqynib.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ikutqjvl.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163ugtazmmr.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163caofjbdd.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163csmjhguy.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163evaxrtyo.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163vxhgluvj.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163egazcdgb.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163wageywuc.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zwfregpp.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163uovmzynl.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163adfifxke.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163lqsxaqvm.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163nljpxzlu.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163tizmwdvi.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163rcteqqkc.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163kjxgucvg.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163xrilzotc.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163nejrdwpv.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163oqjlfyzt.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163frnlfcrn.html

[S60] C++：遍历并删除元素
来源：http://www.xuanzx.com/163ekjkraim.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163hadklwtn.html

================================================================================
来源：http://www.sxryk.cn/163abdehjld.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163ibhabxfc.html

================================================================================
来源：http://www.xuanzx.com/163rioymfgl.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163lyijsrpp.html

println("Hello")
来源：http://www.sxryk.cn/163pooxrzpj.html

[T02] Kotlin：变量
来源：http://www.sxryk.cn/163gocsyjjq.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163pcnsrjgk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163jvlzryjn.html

"值: $b"
来源：http://www.sxryk.cn/163znnqbkdn.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163pqexuxus.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163afgaxauo.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163zpwnngoq.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163vyhequvd.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163tyxporxy.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163dpizlzet.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163zptutwte.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163yplsedpa.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163upzziaow.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163qgudtwnz.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163lmmafgdn.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163vovlsjbx.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163bicyeadx.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163omzonilb.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163lgchaoju.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163wdjfzllg.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163dlkwkfsd.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163fcswomaf.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163mdvqylfl.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163prpkrqve.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163kbltywpw.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163wgffgqde.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163jwpnyvqq.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163htheubgp.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163ogjqqauo.html

print("Hello")
来源：http://www.xuanzx.com/163hmgvpoci.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163swaupwlv.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163cjezthdz.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163tnwwgptm.html

"值: \(b)"
来源：http://www.xuanzx.com/163xvaktpdp.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163xkkozwdz.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163tapumqer.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163kfgskevk.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163oviweteo.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163wmuuxwzh.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jrfubkqt.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163gqvilvsn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163frssmrkz.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163gnwolbnk.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163bmhledzt.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163hyrqzcgp.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163qryhqpew.html

[T25] Swift：结构体
来源：http://www.aibaodan.cn/163urnxelgn.html

struct P { var x: Int }
来源：http://www.aibaodan.cn/163glyrscmb.html

[T26] Swift：类与重写
来源：http://www.sxryk.cn/163wooarocc.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163rzxhkauh.html

[T27] Swift：错误处理
来源：http://www.aibaodan.cn/163yghhuwjg.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163spqmrhgc.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163whsppaby.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163pnahaqrl.html

[T29] Swift：guard 提前返回
来源：http://www.sxryk.cn/163myiigqou.html

guard let x = opt else { return }
来源：http://www.sxryk.cn/163lcghkjpr.html

[T30] Swift：协议
来源：http://www.xuanzx.com/163rjjubotg.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163dcilgpjm.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163myhbrdxq.html

print("Hello")
来源：http://www.xuanzx.com/163xnlztukk.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163plofnxlu.html

local a = 1
来源：http://www.xuanzx.com/163xpeiturh.html

[T33] Lua：表（数组）
来源：http://www.xuanzx.com/163rdxfrnny.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163onvigpsg.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163axudscur.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163clluhyaa.html


<!-- 参考信息 -->
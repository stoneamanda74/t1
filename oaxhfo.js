外链999!wailian999！

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163hcfuaocd.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bzkrcqvj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163glniekqz.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163tvfynobe.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163dysurlln.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163tyuuddqs.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163memotxle.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163yrbrczvq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ayxnpiru.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rxhmkclk.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163dmzudcuk.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163shjopxou.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ordmpgww.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163jvpetovh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163tfgazcxc.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163dpvacply.html

files=$(ls -1)
来源：http://www.xuanzx.com/163wwzlpgba.html

[R38] 管道串联
来源：http://www.sxryk.cn/163eyltjqvt.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163uwxfdmrs.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163mrfdqpwi.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163grbpvrua.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163motpaquq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163mdspmpzh.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163glkikmjq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163wlblrvum.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163yqtjkjzu.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ujllyyfp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163ukxobasr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163paebkspe.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163sorehujo.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163aenhijdx.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163syaosqlu.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163hyjzxbng.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ahdimhnv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163ucnarrst.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163xopiardi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163fepulncm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ehipxwkn.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163mruzwbwd.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163jyrpsjrv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163dekopznv.html

[R50] awk 求和
来源：http://www.sxryk.cn/163pvldhdbi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163nqibqplu.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163lhzsdfjo.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163szaekxns.html

[R52] 统计行数
来源：http://www.xuanzx.com/163lphgswcb.html

wc -l a.txt
来源：http://www.aibaodan.cn/163tvznfbvp.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163vxtbfhkt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163hrvpslrj.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163engeloli.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163smdohzue.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163lxgvmlml.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163raiaiijj.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163lmodispk.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jvfurdun.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jmqvxksa.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163zpocmssg.html

[R58] 下载文件
来源：http://www.sxryk.cn/163zyfhbkkk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wjfharqm.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163nvuypcus.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163bsfhevoa.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ijlonysc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163xjgmdvmh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163vtvocwoa.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xuxljyxq.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163dmthmstr.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163wtvqpzzo.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163hzlxgnux.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rqfovwch.html

[R64] 结束进程
来源：http://www.sxryk.cn/163brxelgdi.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163mpoxizrg.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163ksnsejti.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163arizlmgi.html

[R66] 定时任务
来源：http://www.xuanzx.com/163nppufpqm.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163iivpwhwm.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163rngnlvnh.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mhjpmkbq.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163bsirmovg.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ijofufih.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163tfycbnwb.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163chaxzhpc.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163cjzflpge.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163vkpmktvb.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163iteujsxb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ttgqdeux.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163jhgekbgv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163gmzvvxnt.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163zjyhvaln.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163mknhilml.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163qayedwbu.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163zbdbhiew.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163uwgyhkgf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163fgwcjbtv.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gcnzfhsk.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yxpblfum.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163upulsauz.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163jhpamcxq.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163gosobbci.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jknprxpf.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163hnofqqyd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163rrxoextm.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163kdfunwrs.html

time ./run.sh
来源：http://www.xuanzx.com/163lifrttjs.html

================================================================================
来源：http://www.aibaodan.cn/163jendpgje.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ddtdvfdt.html

================================================================================
来源：http://www.sxryk.cn/163nixuqrec.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dzvmplwv.html

#include <stdio.h>
来源：http://www.sxryk.cn/163dquzpqxc.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163qsyhzbjy.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hfqspwlw.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163zgnbkevw.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qtcpjvaq.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ykkngywa.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vutfexod.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163kvivexyh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163joaegulu.html

strlen(s)
来源：http://www.sxryk.cn/163qdhvctzk.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163oipicuns.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yozsecbm.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163imgusewc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163srxmrscq.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163yrhfabco.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163kdodhmjt.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163llkwwnso.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zdkfouyf.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nhflunpp.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163nojzojwe.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163eiwejmme.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163zhtckwfp.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163iwdtflbv.html

fclose(f);
来源：http://www.aibaodan.cn/163wtuxyyab.html

[S12] C：写文件
来源：http://www.xuanzx.com/163xslohfnn.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163gcwzqolx.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gczeufee.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163lbjnlhxc.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163eajmhtop.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163naaiiuwh.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163kznxtqit.html

(double) a / b
来源：http://www.xuanzx.com/163aksuqsnh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163zlnalhgx.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163thulelfh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163qqocukyt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163qzgvuwws.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163iwpsuehw.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163gbmjldxc.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163pnjhnkeh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163esldgbtk.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163obudcicb.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fnmjutwh.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163odpinnmi.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163kjhdcgub.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163cxbzqipi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163ymfxxxlf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163nqwstssb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163zyopyibx.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163lorbbpol.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ryklhkaj.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163kqloegsz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163efguokli.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163shqalzjo.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163rtryxiax.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163qgqgjtuz.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163deymgwzk.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ugpzeyvs.html

static int counter = 0;
来源：http://www.xuanzx.com/163ooxhjytp.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163wczjrsuy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163nqbzhryc.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163cgwudxrs.html

#ifndef X_H
来源：http://www.sxryk.cn/163wmpsmsyh.html

#define X_H
来源：http://www.xuanzx.com/163kftdnxqh.html

#endif
来源：http://www.xuanzx.com/163yliyphjx.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163psusiuat.html

#include <iostream>
来源：http://www.sxryk.cn/163nhmytyfq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163lbhyxene.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163jvqjyabe.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163onbmkwle.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ytnxlthd.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163lheuwtpp.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163mkiwpext.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xbpokncc.html

[S35] C++：map
来源：http://www.sxryk.cn/163bxozbywx.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163egyaanna.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163udrfilre.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163xndjzxyq.html

[S37] C++：set
来源：http://www.aibaodan.cn/163jdbxsmaa.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163gqelsjhd.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163wukllird.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163swmaqetd.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vdrqpmmi.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163qwyhpdtr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163pbhnsmop.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163okcebwvp.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tiqmjikr.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163afnoqdlh.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163hnduuvnz.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ppaotpdx.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163kayvhzph.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163rjnbfemi.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163qhowsrtr.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163pgmnwsbo.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163nxlovehk.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163gkzczydk.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163yamqczbk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ojvbtnib.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163vpxxupqw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163bocwtyqt.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163skjucsjs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163zbipsmol.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163jyevjiwr.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163pvsaclpn.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163qjuoapcx.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163zjwzzqab.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163uihuehpp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163yvpvnlsg.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163zyslzkpt.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163vvfopfrk.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163jlpvoehu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163pbsriiky.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163yxlyctwl.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163pwdnskte.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ilvqcgho.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163ycfhoqjj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ytbqrbpd.html

[S56] C++：optional
来源：http://www.xuanzx.com/163asocglen.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163uzmiioay.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163kwuapbdx.html

constexpr int N = 10;
来源：http://www.aibaodan.cn/163lnttkkjm.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163tkfxxfqi.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163msyxwoib.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163nbxjiaeq.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163huqoubfl.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xwbxkqxe.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163dcfakvan.html

================================================================================
来源：http://www.sxryk.cn/163ydolgoyw.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163rgbzholf.html

================================================================================
来源：http://www.aibaodan.cn/163pqsdgfad.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163hlqqjife.html

println("Hello")
来源：http://www.xuanzx.com/163frutkpxv.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163uwwtcmfy.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163wdhpjgpa.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163slpphdxh.html

"值: $b"
来源：http://www.sxryk.cn/163zbddtyyy.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163tfoukraf.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163husmrcet.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163wzzaeuon.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163exdptfrt.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163ddbykzki.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.xuanzx.com/163keusjjkk.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163bhpyrphw.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nahjwcdu.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163vnvczyeb.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163xkawybxc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163owgimlhg.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163zczdqgfc.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vgoehokq.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163jteldlwa.html

[T11] Kotlin：协程
来源：http://www.aibaodan.cn/163bjszmqyw.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163edknlybp.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163bhywglkg.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163oqudswae.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163ulpcbmeq.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163gqxiddwv.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163lahjjldh.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163xipzpxxk.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163cpxjibgh.html

interface Shape { fun area(): Double }
来源：http://www.aibaodan.cn/163aeccvcht.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163smmfyehm.html

print("Hello")
来源：http://www.xuanzx.com/163swtsgerr.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163vflpeqiu.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163kuvpixpe.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163vrmseexg.html

"值: \(b)"
来源：http://www.sxryk.cn/163otwwxupp.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163ehjcqzxo.html

if let n = opt { print(n) }
来源：http://www.aibaodan.cn/163sghbllrg.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163srhdcljd.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163grmxbatv.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163nbvzufgv.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163mnsjghsz.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163scllczqz.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163xvfyfidk.html

[T23] Swift：函数
来源：http://www.aibaodan.cn/163girkeeuj.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163kbnqpqvk.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163ybazwmap.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.sxryk.cn/163nchnbbst.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163gbdivvjm.html

struct P { var x: Int }
来源：http://www.xuanzx.com/163nbrgvclg.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163pqyohors.html

class A: Base { override func f() {} }
来源：http://www.aibaodan.cn/163hocmcgww.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163spzeopmq.html

do { try f() } catch { print(error) }
来源：http://www.sxryk.cn/163alrtbsuo.html

[T28] Swift：枚举
来源：http://www.xuanzx.com/163zwgkbqsb.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163eqmcesbb.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163lvxdodsw.html

guard let x = opt else { return }
来源：http://www.xuanzx.com/163hjobrtut.html

[T30] Swift：协议
来源：http://www.sxryk.cn/163toyocqqz.html

protocol Shape { func area() -> Double }
来源：http://www.sxryk.cn/163cgvshqvl.html

[T31] Lua：Hello World
来源：http://www.sxryk.cn/163xucyiipj.html

print("Hello")
来源：http://www.xuanzx.com/163qkezeidq.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163jsqkrvim.html

local a = 1
来源：http://www.aibaodan.cn/163axlyrngp.html


<!-- 参考信息 -->
外链999!wailian999！

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jbpiuxoe.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163sjcjirqm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163apgnvrrg.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163xksmcplq.html

files=$(ls -1)
来源：http://www.sxryk.cn/163dbxbdkiy.html

[R38] 管道串联
来源：http://www.xuanzx.com/163byiugnfe.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163axhbcpzq.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zhxvhlyy.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163aiybabwy.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fqoyllia.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ojvxibex.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163ulgowpji.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163tsvzyuih.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163vasswede.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ojlkwyzf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163bzkbcduu.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163duoiexdp.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ejqnuzwh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163kovkglms.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fyluokas.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qtrypffn.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qxejxpos.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163wfbkaglk.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163egrbushy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163dnmtszmx.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163xkbnnlbz.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163lahiarqv.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163weaixufi.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ctorlalr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163ywrvrxhz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fhuwpjog.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fyfhxcap.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wlxbsxnh.html

[R52] 统计行数
来源：http://www.xuanzx.com/163imelvnki.html

wc -l a.txt
来源：http://www.xuanzx.com/163quutlofk.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163lvkrlhqz.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163yqaxvvpq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163wntwqvui.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163oldabsjf.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163roznrpkj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163hqkdpakd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163bcuwuhyz.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163irewfmxl.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ecksbcpm.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163vmhktpbu.html

[R58] 下载文件
来源：http://www.xuanzx.com/163zuvlwytg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163aecxymih.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163stuuhuka.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163ebmaixei.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163tnzpxewi.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dqmmrnxu.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163jyysjfzo.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163zwuhlisb.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jnzgdkge.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163cddzrdmj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163lihycwwi.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163nalxthtq.html

[R64] 结束进程
来源：http://www.sxryk.cn/163uzkngotl.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163zfiqaqep.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163zmpwqrnz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xksxazch.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163pbcqlcrr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qleryhmt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163vujcnnmk.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163sdvzxbps.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163lwwijash.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163gtazftge.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ixtlnglw.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163tuoxsncc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rxwiomxs.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vugspofs.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163ghhyahjo.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163aorascjh.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163uqzhktmk.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163helacksz.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163kbjsaqtn.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163hhodldqr.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163nzmtxjlk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163sqrkllrq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163rkftysty.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163jwlttuph.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163xbouhuvb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163fzksbpql.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163cymfefyh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163tpqyxbxi.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163djowcbud.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163anmuopwx.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163smpszmvs.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mqcydtat.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nhzczuyu.html

time ./run.sh
来源：http://www.xuanzx.com/163dronihxt.html

================================================================================
来源：http://www.xuanzx.com/163iaixlphk.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vgkzsflj.html

================================================================================
来源：http://www.xuanzx.com/163zmollleo.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ntexhnel.html

#include <stdio.h>
来源：http://www.xuanzx.com/163vihuectr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163pmqglmxk.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163hsgmkjvw.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jrautvio.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163hciycabo.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163msgykzpf.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xphkgeom.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163npqojmvw.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163kowwaxnt.html

strlen(s)
来源：http://www.aibaodan.cn/163qzzxqcak.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ciuiehjd.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163hfydbkjm.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163etltfmjg.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163kslqzrgk.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163lggrdkzm.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163rxexwdqv.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163tgyyluft.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163wvbkfhsk.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ubafxmts.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ftetxcgp.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ouqmzxle.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163jhnvramq.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163belfbuoc.html

fclose(f);
来源：http://www.xuanzx.com/163opjqshfu.html

[S12] C：写文件
来源：http://www.sxryk.cn/163rireqntq.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kxggkpnr.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kjohmbgm.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rpzmmtbr.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qsaopsjj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ajesrjul.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xfycaeog.html

(double) a / b
来源：http://www.aibaodan.cn/163lhmpodjh.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163zdgwddom.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163kjfdzbub.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163xoebicjk.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163fqnuaeyu.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163cgujpotr.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163hulmjoau.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163lrsvkbrc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cxpwbcki.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ebraodss.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163whzaoggz.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163lalvkdin.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163voekldgt.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163dfaeeroq.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mosapkkb.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163cpbnoqhu.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163lzbpurwv.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163oorqiphr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163ogdhcyfa.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163uvquqmqg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ofeoleva.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163murtrhhk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ddmdkpkm.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163gorlewjn.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163qruuuwyc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163rjwlubsq.html

static int counter = 0;
来源：http://www.aibaodan.cn/163fctladbw.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163vnelnlpz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zpstzagh.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163sfvnzytr.html

#ifndef X_H
来源：http://www.sxryk.cn/163qhprigjk.html

#define X_H
来源：http://www.aibaodan.cn/163gmyqyjbi.html

#endif
来源：http://www.xuanzx.com/163zxrzbjfk.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163mgelwwmp.html

#include <iostream>
来源：http://www.xuanzx.com/163glrcwnhu.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163vsuybtfn.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163ibczaniu.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163izcqknpo.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163bdfpjjtq.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163aegyqhgg.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163mgiytbby.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163fcwnoqsh.html

[S35] C++：map
来源：http://www.aibaodan.cn/163nakbtian.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163idmamyho.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163eqswyeap.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xsdvpunj.html

[S37] C++：set
来源：http://www.sxryk.cn/163ccoyxsrj.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163kknujodr.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163yobgqvfq.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163sixroznl.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163qvoqwvux.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163xdxtgbwg.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163mvayzgxt.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163rgomcbiw.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163qmtbirxa.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163npkapdtg.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163ssdysaef.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163nohyyghf.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163mrbaieai.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163taemsmog.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163ixeolzbj.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163kjvihlzf.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163ftaiizfb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ncldpylu.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163pdzmijpk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163tqgygjaq.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163xohjpglj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163fpazzqff.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163otmmaqwx.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163osbgwygg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kpfblfhz.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xrwhdqeg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163wntsoykh.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163hirbtkhd.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163soqcmluj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163hlrbnshw.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163epdsejlr.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jbpjzfbk.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163evzirhca.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163maxdxvtw.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163xxzutidi.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163oflzzdke.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163ycnlfdse.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163bqocsvaa.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163tcqyvfsa.html

[S56] C++：optional
来源：http://www.sxryk.cn/163oocprjgt.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163dcyqurme.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163wetotqhw.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163ftlqpvqs.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163jxixqypd.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163kkkwzcye.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163oepnttgc.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163bynmgnky.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163otbyxlmx.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163fkxocxet.html

================================================================================
来源：http://www.xuanzx.com/163zbctuzkd.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163efuzhptf.html

================================================================================
来源：http://www.sxryk.cn/163fboxluyj.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163xrhcqzro.html

println("Hello")
来源：http://www.sxryk.cn/163okfqoppi.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163otnudgsd.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lefsonxa.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163nmtwahvy.html

"值: $b"
来源：http://www.xuanzx.com/163ntrqtbos.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163gssasxqy.html

val n: String? = null;  n?.length
来源：http://www.xuanzx.com/163vsnkhaxi.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163uxaxozjm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163yqjtktgj.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163nfhwhwwg.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163xkltzjox.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163byxkwxrg.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163rqxjkgee.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163wesjzija.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163uusvsnhx.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163hejttffv.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163kgsxwtjt.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163afalwfxb.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163fyuevybu.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163rztxqpji.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163tmnkptbb.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163fnnhhdjp.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163dgxtfjtj.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163qaeqjmgc.html

val m = mapOf("a" to 1)
来源：http://www.aibaodan.cn/163ithwcsfx.html

[T14] Kotlin：循环
来源：http://www.xuanzx.com/163dranhlfi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163fzaxkxmg.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163dczxufdb.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163jhditdph.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163lfcvrwhd.html

print("Hello")
来源：http://www.xuanzx.com/163dlhucvvy.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163mwbzzcta.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163xcpnrsca.html

[T18] Swift：字符串插值
来源：http://www.sxryk.cn/163zloesprg.html

"值: \(b)"
来源：http://www.xuanzx.com/163nvqildgh.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163lzixieqo.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163vjvhktrp.html

[T20] Swift：数组操作
来源：http://www.aibaodan.cn/163nluysgri.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163wiaoambs.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163bfhlcznk.html

for x in a { print(x) }
来源：http://www.sxryk.cn/163psdawtjg.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163iyirluqa.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163rxgesfjg.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163lrsukfwu.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163poacpntz.html

[T24] Swift：闭包
来源：http://www.sxryk.cn/163dnikavhv.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.aibaodan.cn/163nqllsxes.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163vpnbfqlm.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163ikzbvanx.html

[T26] Swift：类与重写
来源：http://www.xuanzx.com/163eqswfyrw.html

class A: Base { override func f() {} }
来源：http://www.sxryk.cn/163cauerwpn.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163qproxeqc.html

do { try f() } catch { print(error) }
来源：http://www.aibaodan.cn/163egvlxdjq.html

[T28] Swift：枚举
来源：http://www.sxryk.cn/163bxvxyeop.html

enum Color { case red, green }
来源：http://www.sxryk.cn/163rxvarior.html

[T29] Swift：guard 提前返回
来源：http://www.aibaodan.cn/163cxdhurgy.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163rmksjkpr.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163cqwlylwj.html

protocol Shape { func area() -> Double }
来源：http://www.xuanzx.com/163yezytcat.html

[T31] Lua：Hello World
来源：http://www.xuanzx.com/163htziydfp.html

print("Hello")
来源：http://www.sxryk.cn/163swjucgpm.html

[T32] Lua：局部变量
来源：http://www.aibaodan.cn/163noqfsyfy.html

local a = 1
来源：http://www.sxryk.cn/163myqwjdet.html

[T33] Lua：表（数组）
来源：http://www.sxryk.cn/163wespidoe.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.aibaodan.cn/163zhnrpsaf.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163ypqrmvqd.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163rcuetane.html

[T35] Lua：字典表
来源：http://www.xuanzx.com/163cvjypqbc.html

local d = { a = 1 };  d.b = 2
来源：http://www.aibaodan.cn/163vhooianl.html

[T36] Lua：函数
来源：http://www.aibaodan.cn/163mkbyqxna.html

function add(a, b) return a + b end
来源：http://www.aibaodan.cn/163rikdquzf.html

[T37] Lua：字符串拼接
来源：http://www.xuanzx.com/163vpnsdcit.html

"a" .. "b"
来源：http://www.xuanzx.com/163bezryevs.html

[T38] Lua：条件
来源：http://www.sxryk.cn/163wvgnxawa.html

if x > 0 then print("正") end
来源：http://www.xuanzx.com/163zkwdyrip.html


<!-- 参考信息 -->
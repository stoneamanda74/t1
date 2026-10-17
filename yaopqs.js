外链999!wailian999！

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mhgcjnwd.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163afpfygna.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163fyzhmvms.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163dyunkkzp.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163wujcdfaz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163frrquthf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ztxhncxm.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163mbjusywj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163lgaiuvzy.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163pdusouga.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163iiipuesy.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163sflcwafp.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163qunzfgpv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zymzghzx.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163mkgobwuj.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gpljhzkb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163lgssfysa.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163btuunlch.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ykyrlduo.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163wsmaldvv.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163zugajnwh.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vfxripkj.html

wc -l < a.txt
来源：http://www.sxryk.cn/163zxsiucph.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163yvkojscm.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163zscyddmb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163yzcbifxb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ftivxrdz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163gudtitdi.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163stnmvesw.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163ojkfijyw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163anwriehm.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163ceudimko.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ipetuyrh.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163liraxwxm.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rrwdclqg.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163tuqnchly.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163qxjyfwai.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lyiikgma.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gcehhbak.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163guzjbcbz.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163kaecsrib.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163dslwuosv.html

wc -l a.txt
来源：http://www.xuanzx.com/163cfjtwnlo.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163luekyuji.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pdkrmqzh.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tanbktir.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hnpzratz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ganwkukq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163hpfmbmtv.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jrohegau.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163tzdxxxoj.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163wfrnlyer.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163oicmtwmo.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163lwidklug.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hutvfykw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163catmmpxp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ofddtcmb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163xmztzfat.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ffhudhuv.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163kriccenr.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163dlarzlfe.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dgsyxfsq.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163qpzdrszl.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163lzfkajgu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163fokvupci.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xmxvkgzw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163pmgljszs.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bfzqihft.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163oxyonecl.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163dfgyqhhp.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163mrrqzjws.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lpctyava.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qoxxzplg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163mfvcuwpo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163qicjwrai.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zycyoalm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ykjctfso.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163cuhhybki.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163smwiyghx.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163tmoqxyhr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163lywotlxe.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163dmhhleej.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163dcogwpvk.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163gnnfuzcg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163usutslmf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163kxgnnedx.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163yjjoiwkq.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qtvawryk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163afpizkgc.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163owaabavh.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ltxxgadj.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163zddyatba.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vbpgwtdu.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163gyhbmqdg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163mbiilyrk.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163lilgyenq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163ujlydwar.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163rpxzklty.html

time ./run.sh
来源：http://www.aibaodan.cn/163gsodjaat.html

================================================================================
来源：http://www.sxryk.cn/163tcobytqp.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163rcxusmsf.html

================================================================================
来源：http://www.xuanzx.com/163vycvjaam.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163djrgkrlh.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163wslxhpwj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ggbjaucp.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163jrpicrqu.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163wolrcnqu.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163ijtleufy.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163suqupmbl.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163belowcer.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163ihgbrxrr.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lkwhusay.html

strlen(s)
来源：http://www.xuanzx.com/163ljiayqcb.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163fzgrkzoj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163wwmcbbva.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163uksvlraf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163fgolnmdc.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163xwgipksw.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163qiihgivh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163gjugalzd.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163xlyjievh.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163xudjcrlo.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163cyrcfjpu.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163cdblzqsr.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163xmtsvrbs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163nzpdojln.html

fclose(f);
来源：http://www.xuanzx.com/163smspogvl.html

[S12] C：写文件
来源：http://www.sxryk.cn/163ylsoyeah.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ubwtfjfq.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163rlchuigx.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163qbgrwzqy.html

[S14] C：枚举
来源：http://www.xuanzx.com/163eyrsepdv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163xnjrmmwv.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lxppcixa.html

(double) a / b
来源：http://www.aibaodan.cn/163kqgknirh.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dkkpqqsy.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163pkkxnkdy.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163yiqceciu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163pnvblxwr.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163dsideooh.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163bhxpkwbu.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zqnbwayh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163twdnrmoq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163ukepbsfa.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kxquejph.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163diemnhru.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qtdaddrp.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rigfixsy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wwpktsyl.html

[S23] C：随机数
来源：http://www.sxryk.cn/163tsmqywej.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163hofiespx.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163apdhtygx.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163oukoarqa.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163uiurednf.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163sioxtnuc.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163sibrpxyj.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163maqrrbtz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163zvppbwte.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163llpgnqtq.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163rgxddgex.html

static int counter = 0;
来源：http://www.sxryk.cn/163ixfwxauw.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163jkzjdvan.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163fwkfuref.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163jsyigtcj.html

#ifndef X_H
来源：http://www.aibaodan.cn/163mhjrdvtx.html

#define X_H
来源：http://www.aibaodan.cn/163losfpnhf.html

#endif
来源：http://www.xuanzx.com/163vgyiqsqp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163belxglyj.html

#include <iostream>
来源：http://www.aibaodan.cn/163cdsyrvao.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163xsbvwrsu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pboaxkox.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163xppbqdgb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163vjqskiog.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163ybacwxhb.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163pydptipz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163honcipum.html

[S35] C++：map
来源：http://www.sxryk.cn/163xcxdavaw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163mtnwliyy.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xzhnwkjk.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163wumolyzq.html

[S37] C++：set
来源：http://www.sxryk.cn/163pshvdahw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163ixaymkvm.html

[S38] C++：排序
来源：http://www.sxryk.cn/163lyylsmfd.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163fevrpiqd.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163xuoytmvv.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163ipbmwstp.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163hcayhbkn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163bciimvir.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163numvzaml.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163dyyfbrtw.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163udtiqqcx.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163edtgiulq.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163tdruabqb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163cjonrohu.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163omeizsns.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ghtoyroy.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163weaejpjv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wdbysdln.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rwfouhrd.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163fmrgwslg.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ltjescvd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163juclfgoo.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163zfjjqfnn.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163dviueqfv.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163fzcxrffc.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ublhamip.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163npjttkew.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163eygrtfzc.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163pgyrdnnr.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163psskbzsk.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163pxnnjzoj.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163sfnuhhqe.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163rldhnhfk.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wapafqdm.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163dbozixer.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163zcgjbfpw.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163rmtyebbv.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163uaalgtny.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163mvgrzhvf.html

[S56] C++：optional
来源：http://www.sxryk.cn/163rzbxdpnn.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.aibaodan.cn/163yuigsaxd.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163wpndolqu.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163aiczlkpf.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163rygjqosa.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ltmusapb.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163fawuryxi.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163mrmapqng.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163vkrhnwrh.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163octxxxgm.html

================================================================================
来源：http://www.sxryk.cn/163cfnwufzv.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163gzgnwxzf.html

================================================================================
来源：http://www.xuanzx.com/163hypffcud.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163rocmjkwa.html

println("Hello")
来源：http://www.xuanzx.com/163dgtvrrbw.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163vomkasnn.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163pxpcpcwk.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163eklqsjnv.html

"值: $b"
来源：http://www.xuanzx.com/163pxolyysb.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163vzmitjfn.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163mudjlwqp.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163umhyhjit.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.sxryk.cn/163wtvfrgwj.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163lypqeewi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163epyhaepo.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163entasder.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163nsusgihs.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163kgibzxgs.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163edlijoid.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163uoczvool.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163dfyiuwus.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dvgghfoy.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.aibaodan.cn/163uadlmvdf.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163sitfjkgd.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163iyxmgxfv.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163wvxsgncw.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163pdnctlcy.html

[T13] Kotlin：只读 Map
来源：http://www.sxryk.cn/163lukvkspq.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163xthtwcwi.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163wxfkihep.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163vqkhihng.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163tzfmsene.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163sapmuslk.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163webxojgv.html

print("Hello")
来源：http://www.xuanzx.com/163hjhnekgo.html

[T17] Swift：变量与常量
来源：http://www.xuanzx.com/163obpqjodi.html

var a = 1;  let b = 2
来源：http://www.aibaodan.cn/163xqlwkhih.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163kjchkrjx.html

"值: \(b)"
来源：http://www.xuanzx.com/163maqkecrz.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163ghlufqjy.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xrgawelo.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163qrmzsflo.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163ejzcnkyn.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163iguyschr.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163ecswufqm.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163demfqigk.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163uyldrnox.html

[T23] Swift：函数
来源：http://www.xuanzx.com/163yeqwsudh.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.xuanzx.com/163fkncbkfu.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163tonnxzgl.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163aspwyozm.html

[T25] Swift：结构体
来源：http://www.xuanzx.com/163cxdtmolh.html

struct P { var x: Int }
来源：http://www.sxryk.cn/163celvojvw.html

[T26] Swift：类与重写
来源：http://www.aibaodan.cn/163tnldrntf.html

class A: Base { override func f() {} }
来源：http://www.xuanzx.com/163anrvjxsu.html

[T27] Swift：错误处理
来源：http://www.xuanzx.com/163tncavuqp.html

do { try f() } catch { print(error) }
来源：http://www.xuanzx.com/163scmloqby.html

[T28] Swift：枚举
来源：http://www.aibaodan.cn/163avyjpchr.html

enum Color { case red, green }
来源：http://www.xuanzx.com/163vabduofo.html

[T29] Swift：guard 提前返回
来源：http://www.xuanzx.com/163rkpodzlx.html

guard let x = opt else { return }
来源：http://www.aibaodan.cn/163tdwyjsxb.html

[T30] Swift：协议
来源：http://www.aibaodan.cn/163fvviyqxm.html

protocol Shape { func area() -> Double }
来源：http://www.aibaodan.cn/163hicxdfsr.html

[T31] Lua：Hello World
来源：http://www.aibaodan.cn/163fuauhaul.html

print("Hello")
来源：http://www.aibaodan.cn/163mbxczklj.html

[T32] Lua：局部变量
来源：http://www.xuanzx.com/163vvvaifjb.html

local a = 1
来源：http://www.aibaodan.cn/163avlfqpwn.html

[T33] Lua：表（数组）
来源：http://www.aibaodan.cn/163gxdmfzdb.html

local t = {1, 2, 3};  t[4] = 4
来源：http://www.sxryk.cn/163pdjqqdgc.html

[T34] Lua：遍历表
来源：http://www.sxryk.cn/163vejioexw.html

for i, v in ipairs(t) do print(i, v) end
来源：http://www.aibaodan.cn/163fachnyka.html


<!-- 参考信息 -->
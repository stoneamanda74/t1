外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rzdyksxu.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163jgofhmfm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163qbadvqkd.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163xsojyeit.html

echo "${#s}"
来源：http://www.sxryk.cn/163ggxpuezy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vhzpnbob.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163vnwadlwx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163mnooboqk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ytxciybu.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163lzxlmhef.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ambfakue.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163pnerdkpt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jamqdeal.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ysrndfrd.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163dlnfavqo.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bwporhus.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163knfekiir.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163lzstdoja.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163gqktgknu.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163akwmmdzr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gcpegfxv.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163lyzxijbq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163mprtqstj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163ycaqmdos.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163oslkdkri.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163osocfpch.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tvjcwbta.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163tgjbghkt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ojrumhyk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wrkyowvg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qucrsibo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163qoswqheq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163mdguotua.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ifmbatck.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163snhitzvx.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163itzbzjou.html

files=$(ls -1)
来源：http://www.sxryk.cn/163zqolfwaw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163mosneqaq.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ranooscb.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jdepwrvl.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163kmyialnv.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lyguxtqf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163tgltfxto.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163tsbxvrhh.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163wuzklhan.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163xgqcucfy.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ykdmteio.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ocbkidbz.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hnvegsqb.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qosrnchg.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163qqwfopqm.html

[R45] 批量删除
来源：http://www.sxryk.cn/163bqnouwlc.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163klaoptod.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163tdmobxat.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163hiwobgig.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163bgngxivk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163jcrmtojj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163kkfipilv.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163wfqltamd.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163llkbcict.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163yzegsafc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163yxglijpc.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ufwpoujy.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163dmlmdcau.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163efjtglfg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163btdbkrdv.html

wc -l a.txt
来源：http://www.sxryk.cn/163trkekrxp.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163agzfcnkq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163doaslojd.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tczvbbtj.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163fbavgjsy.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163uymzmibr.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163tlhovpko.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163mnzrzfuq.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163lbgolwtv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163mtpyelzc.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xracoejr.html

[R58] 下载文件
来源：http://www.xuanzx.com/163dylciuft.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mdccvgxv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163opfswfgj.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163teooxtcl.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163vlrqxrgu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163eoprfmeo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163udkimhdi.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163dkzzzekf.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163tdyzibpw.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163ktxshryi.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163trxxilbv.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rsrwpaka.html

[R64] 结束进程
来源：http://www.sxryk.cn/163tlnlfbdp.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163bcnpfiln.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163twwbbcmk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163cygcqtil.html

[R66] 定时任务
来源：http://www.sxryk.cn/163wqrhoinl.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163kxbbwrhq.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163aghcazaw.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163mazjkuog.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163pangjwzn.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tktomfeg.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163oqgexcrn.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lfkwuulc.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bdcayzps.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163lmsotjnl.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163wyjjuopl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163xnxaocoo.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163hwmdekyr.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163yzpusnky.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163xxnskjnc.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163avvtvcgg.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163eqiskavn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163iocyoqaf.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163qtosrwpg.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163guexcokc.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163cutjrvti.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mlvtopik.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163iogfoyoa.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163zjtlmwzl.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163mcbpwlli.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163nruxkgsi.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163hazrzted.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163uisfonnw.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163thabvkrs.html

time ./run.sh
来源：http://www.aibaodan.cn/163tdltipej.html

================================================================================
来源：http://www.aibaodan.cn/163nfsyfxlb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ddqwpzkx.html

================================================================================
来源：http://www.xuanzx.com/163uqtvmdfo.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163saxpntwq.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163dwuwatwo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dzegzbib.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163brolyooi.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163wfbmzxcf.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163hvwzfsyb.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xbzwafts.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163usklzwnq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163aiawcnuq.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163afclmnqn.html

strlen(s)
来源：http://www.sxryk.cn/163gdaztqjx.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163oahojofy.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ewcioupl.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163vaslosqx.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163pqlteklm.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163iklheopu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163wajlxugo.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163lrqsoigx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163cpunjquj.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163mmrbwjfu.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163bramfwpn.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163yhnzzbpa.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ybioknjh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163tspshgii.html

fclose(f);
来源：http://www.sxryk.cn/163hfxaeliq.html

[S12] C：写文件
来源：http://www.sxryk.cn/163jxtzwezm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163xsgozoqs.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163wnfbdjkq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163aekxlfex.html

[S14] C：枚举
来源：http://www.xuanzx.com/163brlbxbor.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163gwwmmwsk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163cnarxmto.html

(double) a / b
来源：http://www.xuanzx.com/163imecwoov.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163gflmtrre.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163myafpjfx.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163mjyhiazj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ixegqjkc.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163sdchyqzx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163omxncaxv.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163avgmjshz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qfqgcngc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163vxzridir.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163vuqelvax.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163dhkxismr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163srzgvzjb.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163ekrqvows.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mnadksfi.html

[S23] C：随机数
来源：http://www.sxryk.cn/163bmcmnrvr.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163bzqktgzi.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xcangxxg.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ifzhzfbk.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163zyjomrwz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163fewgwyoj.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zjswfahq.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163xzpyahqg.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163mvpomnck.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163ictdserx.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163zjombrol.html

static int counter = 0;
来源：http://www.xuanzx.com/163jtavaozc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163sbpqmbdx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163vqleugdi.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fmythbbk.html

#ifndef X_H
来源：http://www.sxryk.cn/163fmllrtbu.html

#define X_H
来源：http://www.aibaodan.cn/163mzonwcrg.html

#endif
来源：http://www.aibaodan.cn/163jexlpcma.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ibtfexvl.html

#include <iostream>
来源：http://www.sxryk.cn/163jhetampp.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163bbtcsgiw.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163miflejit.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163avgghxjj.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163sqqtpzgu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163lakksvew.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163hllivzfp.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163prxpqaio.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rkbytbsz.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163yiptupah.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163fkodegyr.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ldlbukkv.html

[S37] C++：set
来源：http://www.aibaodan.cn/163lyxlsark.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163yezvaqyo.html

[S38] C++：排序
来源：http://www.xuanzx.com/163tvenwbvd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163tktrjdgb.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163vthjqrwy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ctyvfhvp.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163trnbywwb.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163kaatfkkg.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163tqbozple.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163estjvonm.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163gugfoofq.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ichdmzjb.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bmjblhmv.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163uxockehj.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163yjtacrif.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163qbuqzdve.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163gvwwmjag.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163uxxibffd.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163omubqyai.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163olbqhjvs.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163hnziaqcd.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163sveeyyui.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163rzhcwtfa.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ltdovdyw.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163kvcwgsro.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163srougezs.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163shbjslci.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163upadblbn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163pecptyvp.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163ochvycwl.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163ktehkllc.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163erhcdkao.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163dresuzzr.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163wkjfinkv.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mlxxlyzf.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163brctnvxm.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ojirihse.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163yntddmed.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163krbnrutg.html

[S56] C++：optional
来源：http://www.sxryk.cn/163ermuutbv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163gcrlhqne.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163iwzfvtib.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163rtqnllth.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163pyeppmrl.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163ztzmfrru.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163nkoihmmu.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163jxvymxjt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163nhgulupm.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163pehvsydf.html

================================================================================
来源：http://www.aibaodan.cn/163czfjoury.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163slxephuz.html

================================================================================
来源：http://www.sxryk.cn/163ywhomotc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163buhdzsfd.html

println("Hello")
来源：http://www.aibaodan.cn/163ekvbeszu.html

[T02] Kotlin：变量
来源：http://www.xuanzx.com/163xaimughh.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163dhwreqyh.html

[T03] Kotlin：字符串模板
来源：http://www.sxryk.cn/163amutetns.html

"值: $b"
来源：http://www.sxryk.cn/163twjdjwbu.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163vzxihofe.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163osjgtebq.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163urdlbjqf.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163kmqiousw.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163kpzouivo.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163eltzozer.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163lfdfqiwo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163gyxynoaw.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163uqcoixjx.html

data class User(val name: String, val age: Int)
来源：http://www.sxryk.cn/163tuzylico.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163upppbjjx.html

fun String.exclaim() = this + "!"
来源：http://www.sxryk.cn/163ypnrldlv.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163dtxqtvif.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163xsbdcfjk.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163atbhorki.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.aibaodan.cn/163djhftsrr.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163wqisesdd.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163cmkaarna.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163oeaebncu.html

val m = mapOf("a" to 1)
来源：http://www.xuanzx.com/163dbctvhpt.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163qbbbephb.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163hgotaejz.html

[T15] Kotlin：接口
来源：http://www.aibaodan.cn/163ksohpumu.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163wjoxgnge.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163blwhvwej.html

print("Hello")
来源：http://www.aibaodan.cn/163kkhchemx.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163sauigcgi.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163atyonfyn.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163pzrclves.html

"值: \(b)"
来源：http://www.xuanzx.com/163snsbwjtp.html

[T19] Swift：可选绑定
来源：http://www.xuanzx.com/163jtcgnviu.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163qqxizsae.html

[T20] Swift：数组操作
来源：http://www.sxryk.cn/163jqdnaoyi.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163ywysnvoe.html

[T21] Swift：遍历
来源：http://www.aibaodan.cn/163adrrysrx.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163dfbfhozq.html

[T22] Swift：字典
来源：http://www.sxryk.cn/163sfqdjzvn.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.xuanzx.com/163zyjlfpnn.html


<!-- 参考信息 -->
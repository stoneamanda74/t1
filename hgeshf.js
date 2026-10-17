外链999!wailian999！

echo "${#s}"
来源：http://www.xuanzx.com/163uuyvqubp.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mobfrwgb.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163mbghfasw.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163azjehiir.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163estxegor.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163chcecugc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163nouqgzbw.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163xknxajcy.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163iwlgpzfc.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163qeekumya.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163liozfxou.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kysscqdu.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163lrgfbgxn.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163zdsryldt.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163xlqpggbq.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163etvifscw.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163wzdjmtyy.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ttsubtmz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163oanhjkay.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163cscanhij.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163yzowuhlq.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163prqoinbd.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163ktcsxabn.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163evnewokb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qolmoztj.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zneapwjp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ruqiesto.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163euqxeftw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163idxohfyg.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163volaxupf.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fyrinxze.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tteetctl.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163viyycbrg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163eyqnhnnf.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163wbpxphmo.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163objzcgnw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163xaknoyrh.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163cwficdzx.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ngjcmtte.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163tigzfrzo.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ccgiyltn.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163cmnvkcyg.html

wc -l < a.txt
来源：http://www.xuanzx.com/163gylgacyy.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vlemommj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163mzaiquwy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qjubqjem.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ybbmdmwy.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163pjdkqqbv.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163mwkttzji.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qvguvoht.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163fyudmojx.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gsasejgs.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163aoalbcla.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xeyocxpx.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163kieoyjwr.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163ufxeounr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163zktwsbpd.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163xkgbirpu.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163nrnsuweh.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163vntjpfoc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ykwbpipt.html

[R52] 统计行数
来源：http://www.sxryk.cn/163jrlolwyc.html

wc -l a.txt
来源：http://www.xuanzx.com/163wlcvxriu.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163opthjskx.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163bbvlchog.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163cnbvzjnk.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163kuaxtdwg.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163laghmnro.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163cmgxcvzv.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ylfmvyhg.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163oekwzphs.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163gbcouriu.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163knqmtgjy.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bonvcybo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163hwqcpatd.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163dduiybvu.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163jctzyguk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163huuvomlh.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163gldirqeo.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ewdfbppb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ybraopay.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163oqfbvrlt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163semawtjh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mpixrsnc.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163oblsprye.html

[R64] 结束进程
来源：http://www.sxryk.cn/163snwwmbav.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vrkgnczc.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163uvouubra.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163pogulaie.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163nrnzewxc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163jkrvwnmg.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163urvywkdq.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163voqqyxks.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163ldptmhmo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163udfmhabp.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163rjetsafr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163euepqlcs.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163oznbcewy.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163tgsflqrl.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163zrbidbgl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163veuqahmr.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163itlrovdu.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163wmnmbrir.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163iqlepiab.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163eqazeykk.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ldqqqqxq.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163eqamhamu.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ldajztqv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qdfukaos.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163aiokhpti.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163cgteqqzi.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ptrqoyzb.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ktryhzjv.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163vbxobpsf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ovdyhhfk.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ovnkbvgl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mriktsmp.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163khhyhjfw.html

time ./run.sh
来源：http://www.aibaodan.cn/163cysacrrf.html

================================================================================
来源：http://www.sxryk.cn/163ovnqwmhp.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163voccmuee.html

================================================================================
来源：http://www.aibaodan.cn/163ulxdfkxu.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163hwbuevjy.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163mscdwqwz.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163kujnbdkm.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163qlcioixg.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163fgxxlfct.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163zepdlafs.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163uhguzcrb.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163qrquwgst.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163tblssvru.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rqopvsrx.html

strlen(s)
来源：http://www.xuanzx.com/163rchkovaa.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163gazpwxmw.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163ubsksjgm.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163vyrrgszk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163sfvcytjr.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ewodesos.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gbghzynv.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ygagahpj.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163jwgboivq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zpigzqyw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163etyikfst.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163rcegerps.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vxgewvyy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163xaajfobx.html

fclose(f);
来源：http://www.aibaodan.cn/163xsnivptr.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163dduutijz.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163fwduvdeo.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gesmqfnb.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163hksjdmyq.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dbmijteh.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163odupwtfz.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163dfjiazkt.html

(double) a / b
来源：http://www.aibaodan.cn/163oazcfaxd.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jcfnyuir.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163ntbyqvhh.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163ibpxwyyd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163tvmmmmba.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163eulhraxu.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163nbvshclp.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163riqvowmq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163bawppasw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163pchdflmd.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163mvydtrcp.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163exnnmafz.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163flwswmqv.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163fxmmfvxy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xueejizu.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lmearbol.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163xefabbmj.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163uukzubtf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cmxfyoid.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163crsnalwv.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163clccwjyp.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163jhivplxm.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163gbaorbru.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163xptzkxxx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163wkmupspm.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163wdnxyllk.html

static int counter = 0;
来源：http://www.xuanzx.com/163sxlhnzbi.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kklgrcrq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163skhhsxfa.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163gwkfrnjp.html

#ifndef X_H
来源：http://www.xuanzx.com/163wbyginlv.html

#define X_H
来源：http://www.aibaodan.cn/163ntlxvsos.html

#endif
来源：http://www.aibaodan.cn/163pzdtbecu.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163hruwsznw.html

#include <iostream>
来源：http://www.sxryk.cn/163uoaikfch.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163lnjzckrs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163yeqjoiol.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163ehydisbm.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163pgoiskuy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163brslshcc.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163hemcymel.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fmqhelmy.html

[S35] C++：map
来源：http://www.aibaodan.cn/163jihrcutt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163llfudwun.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163mkjpdugg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163cnqviumi.html

[S37] C++：set
来源：http://www.sxryk.cn/163uumoausq.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163scaueszn.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rgadrpos.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163xfqziyhh.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163sfozdbwu.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163brwjgsxq.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163jerhwxkw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163nqdaditb.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163kcddtimh.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163dlbbvotd.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163wunthobt.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163iukrljde.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163ctlhkyzf.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vektlpra.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163zpsevtfi.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163rftojdeg.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163vlcwaujm.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163eqfvezgr.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163vdvtlygh.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163aulmdlxi.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163etxaiycs.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zinteolk.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163rqtshmyc.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163wuezdgzt.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ktaoyedc.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163pdzneeus.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163tlknanuf.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163nctwndzi.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163ygjuvogg.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163cwfefbth.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163suedqtoe.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163jbegybhr.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163zpxasunr.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ymuupsiy.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163htjiudsb.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163bpucvhsl.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163ousvrhmb.html

[S55] C++：结构化绑定
来源：http://www.sxryk.cn/163xxaqmkov.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163amdebohf.html

[S56] C++：optional
来源：http://www.xuanzx.com/163hyxkxpad.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163rjsljqfa.html

[S57] C++：编译期常量
来源：http://www.aibaodan.cn/163gheqxsit.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163sbqflonv.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163cdjmfrmb.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163vcdppewk.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163lqqingnh.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.xuanzx.com/163ajgziini.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163jtdxubtb.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163sbhayrwb.html

================================================================================
来源：http://www.xuanzx.com/163lsvyfned.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.aibaodan.cn/163zwwsxpfj.html

================================================================================
来源：http://www.aibaodan.cn/163ijabqbga.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163wxnnhnrj.html

println("Hello")
来源：http://www.aibaodan.cn/163vibuxwyx.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163lkzwghtm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163kdizativ.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163dhryqtpc.html

"值: $b"
来源：http://www.sxryk.cn/163huazykzf.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163zbpjgbpa.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ipplfgpu.html

[T05] Kotlin：when 表达式
来源：http://www.sxryk.cn/163ctruldhm.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163mfffkxuv.html

[T06] Kotlin：集合映射
来源：http://www.xuanzx.com/163mobsksox.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163iqebmatz.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163uivtcewk.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.sxryk.cn/163btzughpa.html

[T08] Kotlin：数据类
来源：http://www.aibaodan.cn/163nyxwkgvq.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163cqcilgvs.html

[T09] Kotlin：扩展函数
来源：http://www.sxryk.cn/163cozbvaol.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163jcbssmhm.html

[T10] Kotlin：默认参数
来源：http://www.sxryk.cn/163nyjbiydc.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.sxryk.cn/163rckhymup.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163zeupbxsl.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.sxryk.cn/163gadayquz.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163obudeygl.html

val (a, b) = Pair(1, 2)
来源：http://www.aibaodan.cn/163gtcjirjx.html

[T13] Kotlin：只读 Map
来源：http://www.aibaodan.cn/163oixuplrq.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163rggshyhg.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163gnmhvmoz.html

for (i in 1..10) println(i)
来源：http://www.aibaodan.cn/163xdhuugnd.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163yffoobvk.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163yrxqjguy.html

[T16] Swift：Hello World
来源：http://www.sxryk.cn/163bqxgxwxu.html

print("Hello")
来源：http://www.aibaodan.cn/163ktbrypdc.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163gawbifgb.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163lalsqbmw.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163infxcfdn.html

"值: \(b)"
来源：http://www.sxryk.cn/163lvnwcxvh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163svrvymcf.html

if let n = opt { print(n) }
来源：http://www.sxryk.cn/163pkmrlyhj.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163gmfbycrh.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163lgwyjdjs.html

[T21] Swift：遍历
来源：http://www.sxryk.cn/163hipguumw.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163jghbylof.html

[T22] Swift：字典
来源：http://www.aibaodan.cn/163iolyvkep.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.aibaodan.cn/163cgcqqlnp.html

[T23] Swift：函数
来源：http://www.sxryk.cn/163qvrjortr.html

func add(_ a: Int, _ b: Int) -> Int { a + b }
来源：http://www.sxryk.cn/163nxivpvxs.html

[T24] Swift：闭包
来源：http://www.aibaodan.cn/163iuuhtihr.html

let f = { (x: Int) -> Int in x * 2 }
来源：http://www.xuanzx.com/163kohrlull.html


<!-- 参考信息 -->
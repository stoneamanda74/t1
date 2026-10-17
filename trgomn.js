外链999!wailian999！

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163laxsreex.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jelcwcnv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163nqzwdedl.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163sinmjdks.html

echo "${#s}"
来源：http://www.sxryk.cn/163ncuykvib.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zzzhgfgi.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163haoyxawk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163autwinlf.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163xscobsfo.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163apftbfwt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163vbqxzqdd.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163iekxhqzc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163kchieboo.html

[R26] 命令替换
来源：http://www.sxryk.cn/163btxijvsq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163bktwxdrq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163bevpjjmn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163fyrdglcm.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163pjmehgyr.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163lhdhmltv.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wgyhmuvq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163xmvirxau.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wfgtevlm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163btvpprho.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163utbdifpk.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ietrzyot.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lydrbfwn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tphnpkqj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163wlayitko.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ojfxdhlv.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163bhlbzgfm.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163kgumkwdl.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163scuuzevl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163rpnwmtue.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ytyorkwu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163biszosmw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mogbgjmw.html

files=$(ls -1)
来源：http://www.sxryk.cn/163yedokvyz.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163ivhnrofu.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163cezdsido.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163fpioacmi.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163gdmucqwr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163egwxyoor.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163toyxoioe.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163oxczyocx.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163nlieedtz.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163nualumbk.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jeztqxrq.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163gnlrvink.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163omwfntcv.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ligkrhyb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ucdfftfl.html

[R45] 批量删除
来源：http://www.xuanzx.com/163irezfwsm.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163pxmvqffm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163nwakfdfi.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163chccjypj.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163klezcqbz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163mputqbmw.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163arytogji.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163sefsfcfz.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163duwltpkr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163zfcdogtm.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uwduafan.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mmkssoba.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vzofrnvn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163pgnicijs.html

[R52] 统计行数
来源：http://www.sxryk.cn/163yypxclae.html

wc -l a.txt
来源：http://www.sxryk.cn/163wstnqyjw.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kokouvmn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163fsdxffxk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163dqjfnxed.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163urrnsblc.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163zuljhwjq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bjgsmufl.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163otjqzkax.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163grlvwgso.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163gocqnitw.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xmwzeoxd.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163uprqailh.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163oiosfwhi.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163qbzsryju.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163gomlvjui.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163rblcskuc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163fnnrtfgm.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163nzmewsmc.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163ysexhbed.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163juzrbuzq.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ucxkmcpd.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163tovuamzd.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163fphkmimj.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163kmwhaiaq.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163fazdshpx.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163evshuzkx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nwvbxoyd.html

[R66] 定时任务
来源：http://www.xuanzx.com/163izrzwszu.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163squsqnaj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jfunyfri.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qxczyblv.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163xyslldvr.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163llntqmey.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163sgvaeqot.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xospxhrg.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163fqgbqpfw.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163yoroqnif.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163fgekaxpq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163fyzxbhbx.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163cabfowzn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163iapdraie.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163llmrcdgy.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163cxegrgen.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163zngjqwzd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hnbiithu.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163fmxrrlye.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163xnjvdzdu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163jptrjpvb.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163mtehpgfk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163utsreipk.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163yvhorvgm.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163svktkuyh.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163izihemnt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163huejpfdd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163lbtdvlli.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163qsanbokk.html

time ./run.sh
来源：http://www.aibaodan.cn/163izzskmuh.html

================================================================================
来源：http://www.sxryk.cn/163efuvrxre.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163rvvocfdu.html

================================================================================
来源：http://www.aibaodan.cn/163khkgckzr.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163twnyvftc.html

#include <stdio.h>
来源：http://www.sxryk.cn/163njvgesrs.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dlgzgtfr.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ckihjayd.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ikawokgy.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163npgrrete.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163kafixhxz.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163eeuonexg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163rlatqgao.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163rtqnvvzt.html

strlen(s)
来源：http://www.xuanzx.com/163uzoasykj.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163akzptrsf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163tjrxvwnr.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163xnszcbwl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163qtjcbgrd.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tffvoyck.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163drbynibc.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163etodbkaz.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163qhfpvshx.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163flmvcyui.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163noqqwryg.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163blyemgjd.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163fedsztpf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163sdbswkbx.html

fclose(f);
来源：http://www.aibaodan.cn/163qnnonqsq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hzeppqtm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163dnoawpfw.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163jpdrbwde.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163olkohbwj.html

[S14] C：枚举
来源：http://www.xuanzx.com/163dlnnasxg.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163lxyahbip.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jqcuumze.html

(double) a / b
来源：http://www.aibaodan.cn/163wzprwivz.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163llpjomsr.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mfeibllf.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pjnowmsb.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mncpxcde.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163gstyeeqe.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163rsojyofj.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163nhsstjce.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163vkbstlts.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163sznjktoi.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qdgkviou.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163pipmqyln.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163qafqxymb.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163tztfbblm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163afhrgeas.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163kwexpupf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163oowwdhyr.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163feytgiiy.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ckhyqiuz.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163fexkvvxw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163brwleccz.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163vgwcrntv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163mznvczdn.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163koilnpcw.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163tiaoamnq.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163pfextinq.html

static int counter = 0;
来源：http://www.xuanzx.com/163wofrbvjh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163sxtakbrs.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163aunmlfab.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ijlqdmkh.html

#ifndef X_H
来源：http://www.sxryk.cn/163rstxbzxj.html

#define X_H
来源：http://www.aibaodan.cn/163gpnnqjyr.html

#endif
来源：http://www.aibaodan.cn/163smqflbqr.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163dmpdzlez.html

#include <iostream>
来源：http://www.xuanzx.com/163gmgaalfh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163rqpvwcgs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163wxmqxloz.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163oaggtapw.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ifiitpey.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163xvmnnndq.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163krxjchsz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163zyisekpf.html

[S35] C++：map
来源：http://www.sxryk.cn/163dvtcntnt.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163gjelpwlk.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163czleoacw.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163rdyksxyp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163fiqiegvg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163xpqipcnl.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163jvgkqlmj.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ggasjljz.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163xuubpjgx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163yqnauxii.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163upypscwi.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163fgglsgmq.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163omlmjwyn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163xfzxltkw.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163fjqsqfab.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163aivsqdah.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163bovyhswl.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163ziswwklp.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163xgwxegam.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163tfesirlu.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163drkxykvg.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163tfcvauzh.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163uekxnklt.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163nmdkjpsm.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163fcwfoosu.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163duxyfzmm.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ydeliquf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163krdodvvf.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163qleynfvm.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163fzwxwjof.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163izqkekgi.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163ngfwsiqw.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.xuanzx.com/163rnajuucc.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163swchjiea.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163rnduncyn.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163jdzjoxkx.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163sqciffol.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163svsxzsry.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163ogmhgtbd.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163qtdoqopj.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163lnnlvfya.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163odytykyz.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163gqpecjee.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163srsaghsv.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163saogoxog.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163skndnnxn.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163ecxktbov.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163mudqeykx.html

namespace ns { int f() { return 1; } }
来源：http://www.sxryk.cn/163ybgcovko.html

[S59] C++：静态断言
来源：http://www.aibaodan.cn/163udpcinnw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163txqnfcsm.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163hhzxoagc.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.sxryk.cn/163voqresqx.html

================================================================================
来源：http://www.xuanzx.com/163ewigpcta.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.sxryk.cn/163wvwuyagk.html

================================================================================
来源：http://www.sxryk.cn/163myjqtqys.html

[T01] Kotlin：Hello World
来源：http://www.aibaodan.cn/163liewdonz.html

println("Hello")
来源：http://www.sxryk.cn/163vqvukgdj.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163mvvfsmct.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.xuanzx.com/163lzrbqyoz.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163izhgjptj.html

"值: $b"
来源：http://www.sxryk.cn/163whgrcexq.html

[T04] Kotlin：空安全
来源：http://www.xuanzx.com/163srxbrfpi.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163ctfkyzug.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163yumzshgl.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163fhfqvytj.html

[T06] Kotlin：集合映射
来源：http://www.sxryk.cn/163exjmybqi.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163hhbaqxyj.html

[T07] Kotlin：集合过滤
来源：http://www.sxryk.cn/163akjlxobo.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163ctkmhref.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163ibllizen.html

data class User(val name: String, val age: Int)
来源：http://www.aibaodan.cn/163etueeoiq.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163djefbhys.html

fun String.exclaim() = this + "!"
来源：http://www.aibaodan.cn/163lmhvuilr.html

[T10] Kotlin：默认参数
来源：http://www.aibaodan.cn/163vfprokwg.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163gviymphv.html

[T11] Kotlin：协程
来源：http://www.sxryk.cn/163byrqwlmx.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163olalfdbc.html

[T12] Kotlin：解构声明
来源：http://www.xuanzx.com/163ednitnux.html

val (a, b) = Pair(1, 2)
来源：http://www.xuanzx.com/163hupqxsdy.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163lmnbrbod.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163njzbfpei.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163iktlyapi.html

for (i in 1..10) println(i)
来源：http://www.sxryk.cn/163ptjikhvc.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163zevubfpt.html

interface Shape { fun area(): Double }
来源：http://www.sxryk.cn/163bfvjgupe.html

[T16] Swift：Hello World
来源：http://www.xuanzx.com/163rwamgsjr.html

print("Hello")
来源：http://www.xuanzx.com/163mzuljzdj.html

[T17] Swift：变量与常量
来源：http://www.sxryk.cn/163gpvyzfzj.html

var a = 1;  let b = 2
来源：http://www.sxryk.cn/163bjtycykj.html

[T18] Swift：字符串插值
来源：http://www.xuanzx.com/163rcnanjed.html

"值: \(b)"
来源：http://www.xuanzx.com/163jfhqzjtr.html

[T19] Swift：可选绑定
来源：http://www.aibaodan.cn/163serudino.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163fnojzelb.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163faqnsdcb.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.xuanzx.com/163grhzbzel.html

[T21] Swift：遍历
来源：http://www.xuanzx.com/163igahnaga.html

for x in a { print(x) }
来源：http://www.aibaodan.cn/163tdqxjisf.html

[T22] Swift：字典
来源：http://www.xuanzx.com/163okxpblsv.html

var d = ["a": 1];  d["b"] = 2
来源：http://www.sxryk.cn/163vtmzpfdj.html


<!-- 参考信息 -->
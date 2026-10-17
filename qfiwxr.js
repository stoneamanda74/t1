外链999!wailian999！

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163xcqhxphb.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163mexlzhnb.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163prdojunw.html

[R19] 数组长度
来源：http://www.sxryk.cn/163twynpune.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163xlbpzebf.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163cweksker.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163dhmqwvuu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163htgspwjo.html

echo "${#s}"
来源：http://www.sxryk.cn/163rojjjdgf.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163adcjcxsh.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163wwmakquc.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bjzrcjvh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163aevggjew.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163piboqhan.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163vuxvucbx.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163xkhntjqr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163xciolhll.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ganrjybi.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163zgdfcaok.html

[R27] 算术展开
来源：http://www.sxryk.cn/163tthhypew.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163kozazslt.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163repkmbot.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bntakobf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163bfmhiknq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163sryxomje.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163zpxrvxzt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163weonnnsn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163adxqnask.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ppiwkaik.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163suthdxuo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163osrdphdm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163urcdiddl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163kuxuyafu.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ahohkdgc.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vjlfdirq.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ozrqbtvh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163numtneuo.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163fglvnxuu.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163dndylbvq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163vpmioory.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ltlnpjym.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wppnbrne.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163ydmozqtx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163nllsqori.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163nwovlfvo.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163hrmtnhzg.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163jqngkmsh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163zgyjwkpz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ewdryswb.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163aeeycyfq.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ywurnogx.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163uwlueuqp.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163skyfujky.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163rwtpkifc.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qmgtggxn.html

[R45] 批量删除
来源：http://www.sxryk.cn/163krjgegim.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163mpmsfuoh.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vwdxykbh.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163hfuzmyfs.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rsarrkgn.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163npmeasak.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163wfiimzcg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163swhcxelv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ahzuyrty.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bwabwsfr.html

[R50] awk 求和
来源：http://www.sxryk.cn/163hqvezqok.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163lenmoqpz.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163etixnucl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zinuwopl.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ucgfzjgc.html

wc -l a.txt
来源：http://www.sxryk.cn/163idwipbol.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pboukkfo.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163stsikrdq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163mzjhjzpv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ofgfgtez.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163gljmsymd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163fryfolkb.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rpzrpnwq.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163gzwvcxxh.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xmgoymnf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163egyhpcoe.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jcihxoqr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163rivezduv.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163adndxamy.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163cyazsnme.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163etqsvgwg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163eaophrke.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163rptygeas.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vvxjqwae.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163mwxrrtbn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zsnwhwll.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163aygnuquu.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163ttpwnvbp.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163virecwbr.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163lzzvkvdh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163rpcqadqk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163btmjnncu.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163exmmsjte.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yedtvzfa.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ndhvuyum.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163jdegwnlv.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163yngaitag.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163yhxnfmtw.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163eohtkwom.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163nnawnzyi.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163eruxutbt.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163gdepjmkl.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163aunsnkys.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163xwxznrid.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163svixkbuc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163qehsngaz.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163dgelhmeo.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163zppicjxf.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163pyoqebjf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163bqirhstq.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163owtdbvoj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163nsmtvvmq.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163fzktjaep.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163veaahpzo.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163bquxzvtd.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ajvkndcp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163vdqhxbjd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163vkgpvamp.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zhqbnnzk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163zyyovppx.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163klumzrkq.html

time ./run.sh
来源：http://www.aibaodan.cn/163babfufoy.html

================================================================================
来源：http://www.xuanzx.com/163kztpcpno.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163ctydexaa.html

================================================================================
来源：http://www.sxryk.cn/163yqrudknv.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gwxfgnux.html

#include <stdio.h>
来源：http://www.xuanzx.com/163acpslsnf.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163dtxppcsg.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163rxwqpywe.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vqikyhbb.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163glqucuui.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xkdgagrw.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163msbrsugs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163slroffoq.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163actcskuh.html

strlen(s)
来源：http://www.xuanzx.com/163itividfj.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nflmteon.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kuppqeta.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163rciphlyc.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163yueuugrz.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163jewthqii.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ozgjocbc.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163tdxzlzxi.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163xgwhgbop.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163yebynsfr.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hresbdpt.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163pjvbmwor.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163oogondbf.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163yrdevezi.html

fclose(f);
来源：http://www.aibaodan.cn/163lmwqblzo.html

[S12] C：写文件
来源：http://www.xuanzx.com/163mvsvjfqx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163ewujqydv.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163dkosoaoq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163bzypthwu.html

[S14] C：枚举
来源：http://www.xuanzx.com/163biycxwpu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163kdfdolhe.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163ttfwkvkg.html

(double) a / b
来源：http://www.xuanzx.com/163wkvcbfef.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dslafplm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vdgdpwvm.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163qpxnkjsj.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163gralilxk.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163haimwwsu.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163zsvilrdt.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163beihjoxs.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ysdipuml.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163ccttzino.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163dwczmauy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ktqgjfwd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163rsxhpbxs.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ekzxjwnp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163stkidlxq.html

[S23] C：随机数
来源：http://www.sxryk.cn/163jytqzdkb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163dqhrdmae.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163bmokiznr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fmsqeqik.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163mpnrdwea.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163enjvoeih.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163nxeldbti.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wytgsubm.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ciaqilis.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fdnthree.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cuwczckf.html

static int counter = 0;
来源：http://www.xuanzx.com/163qqcrefbd.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163kqzypiig.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zcpkojsz.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fhhxlpcr.html

#ifndef X_H
来源：http://www.xuanzx.com/163wqeovcmy.html

#define X_H
来源：http://www.sxryk.cn/163meqskceb.html

#endif
来源：http://www.xuanzx.com/163afnzhwxn.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163ddehkvkw.html

#include <iostream>
来源：http://www.aibaodan.cn/163qyzctono.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163mtdhqdcr.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163efcorktp.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163jcazqjeb.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163tcqvfzkg.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163zwxejqwb.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163tfivaify.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163vsjckmik.html

[S35] C++：map
来源：http://www.xuanzx.com/163vmjliqio.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163zipfgfvg.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163dxloccki.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zyxpxddv.html

[S37] C++：set
来源：http://www.aibaodan.cn/163uibbjtzu.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163czvncozo.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163bbhnrhnk.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163sxltzbyq.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zsfcvnvg.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163ojtckxcd.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163zomwzhul.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163shmsahae.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163mhpoiwji.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.aibaodan.cn/163bpfkpjih.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163ocilcoyc.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163apsxcwif.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163zljaxnpm.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163cfzjmgrb.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163sjtzacqv.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163spvkuckw.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163hacqgnal.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163gmhtzyup.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163budpfopj.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163oymwtfxi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163jedzfzvc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163vcssxqqh.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163okgwgevj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163rjgkukok.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163klqhkoek.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163mgiudmtu.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163wcpevylb.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163ozsgtmkz.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163bksnckly.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163omrporwn.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163oijxtpah.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163nimyebkz.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163aykdyagu.html

[S53] C++：移动语义
来源：http://www.sxryk.cn/163ekwsjwpr.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163qerqerql.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hbdutvmo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.aibaodan.cn/163cjsimcls.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163ewjsisrk.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163bbpxyfrx.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163unlyfcut.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163gosxoflp.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163lgxybwec.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163nnxbxull.html

[S58] C++：命名空间
来源：http://www.aibaodan.cn/163hrdonzec.html

namespace ns { int f() { return 1; } }
来源：http://www.xuanzx.com/163nizlwzvh.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163gqxeliye.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.aibaodan.cn/163bfyxkfnd.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163rzmhmqcr.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.aibaodan.cn/163qslzrrha.html

================================================================================
来源：http://www.sxryk.cn/163zzqsjdve.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163orshtcjk.html

================================================================================
来源：http://www.aibaodan.cn/163iyrvvqfc.html

[T01] Kotlin：Hello World
来源：http://www.xuanzx.com/163zsjbckol.html

println("Hello")
来源：http://www.sxryk.cn/163uyagtxff.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163hrhhtibt.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.aibaodan.cn/163bwdoobdv.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163perjabyu.html

"值: $b"
来源：http://www.xuanzx.com/163bhmdfsgu.html

[T04] Kotlin：空安全
来源：http://www.sxryk.cn/163qgeniuhs.html

val n: String? = null;  n?.length
来源：http://www.aibaodan.cn/163ouqtizgy.html

[T05] Kotlin：when 表达式
来源：http://www.aibaodan.cn/163xrqytcwy.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.xuanzx.com/163lzzyzomp.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163krftkfwa.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.sxryk.cn/163fuovbgdk.html

[T07] Kotlin：集合过滤
来源：http://www.aibaodan.cn/163bxorzuhs.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.xuanzx.com/163llhodeyt.html

[T08] Kotlin：数据类
来源：http://www.xuanzx.com/163utfznqgu.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163xltdhdbc.html

[T09] Kotlin：扩展函数
来源：http://www.aibaodan.cn/163krzvnymo.html

fun String.exclaim() = this + "!"
来源：http://www.xuanzx.com/163dulvjseo.html

[T10] Kotlin：默认参数
来源：http://www.xuanzx.com/163eahubtmj.html

fun greet(name: String = "World") = "Hi $name"
来源：http://www.xuanzx.com/163cxjqmdso.html

[T11] Kotlin：协程
来源：http://www.xuanzx.com/163iyamrmwc.html

GlobalScope.launch { delay(1000); println("done") }
来源：http://www.xuanzx.com/163kpdusseh.html

[T12] Kotlin：解构声明
来源：http://www.sxryk.cn/163yafnngpp.html

val (a, b) = Pair(1, 2)
来源：http://www.sxryk.cn/163exdhspte.html

[T13] Kotlin：只读 Map
来源：http://www.xuanzx.com/163aajvohip.html

val m = mapOf("a" to 1)
来源：http://www.sxryk.cn/163uucjvxki.html

[T14] Kotlin：循环
来源：http://www.sxryk.cn/163xvajixpp.html

for (i in 1..10) println(i)
来源：http://www.xuanzx.com/163ppeadxpj.html

[T15] Kotlin：接口
来源：http://www.sxryk.cn/163gnwufjbi.html

interface Shape { fun area(): Double }
来源：http://www.xuanzx.com/163ylnfhiwi.html

[T16] Swift：Hello World
来源：http://www.aibaodan.cn/163isjtpcis.html

print("Hello")
来源：http://www.xuanzx.com/163yspbwexp.html

[T17] Swift：变量与常量
来源：http://www.aibaodan.cn/163safooygm.html

var a = 1;  let b = 2
来源：http://www.xuanzx.com/163uiohvgff.html

[T18] Swift：字符串插值
来源：http://www.aibaodan.cn/163ejnmnnbv.html

"值: \(b)"
来源：http://www.aibaodan.cn/163ggrjlfjh.html

[T19] Swift：可选绑定
来源：http://www.sxryk.cn/163epmweaji.html

if let n = opt { print(n) }
来源：http://www.xuanzx.com/163xykrbyje.html

[T20] Swift：数组操作
来源：http://www.xuanzx.com/163snhatzwy.html

var a = [1, 2, 3];  a.append(4)
来源：http://www.aibaodan.cn/163lsvvqtsu.html


<!-- 参考信息 -->
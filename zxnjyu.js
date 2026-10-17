外链999!wailian999！

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mkboepoj.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163kuqpsdqa.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kqyknzhm.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163lnmdqpaw.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qdzihdfi.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ypwovrrx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163rlkxufti.html

[R11] case 多分支
来源：http://www.sxryk.cn/163tfxrilvj.html

case "$1" in
来源：http://www.sxryk.cn/163xhlfgyzw.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163hmfdosbi.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163tlcdqwcv.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163yswvfzjf.html

esac
来源：http://www.aibaodan.cn/163xusbjsuw.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163uxernerd.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163swodkwla.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163yqmmwsol.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gpjwsdkx.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ubhchtpp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ndeppywp.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ieeendci.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163oufjwkta.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163ousgntdt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163gjtljoyg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ejdjjqkj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ccfekkwz.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163siqshmet.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163kezhkrye.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ywarzfxn.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163psqjtbhz.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163arykormu.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163agvqalgq.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tsujumze.html

echo "${#s}"
来源：http://www.aibaodan.cn/163iwuyjxcf.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ovbkhgtg.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163eugpvdpy.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163cnqsoouu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163orxyeezf.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zvusptxg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qwjxpegd.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ipxgwevt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163rvsertke.html

[R26] 命令替换
来源：http://www.xuanzx.com/163qumynrnf.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163dsdtcoqb.html

[R27] 算术展开
来源：http://www.xuanzx.com/163fwzutjba.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163oalhaezh.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163lnbkqwfm.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163fuvsuove.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xjmqvwvu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163naiouzch.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163cpofiywy.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163wxakmdzj.html

[R31] 局部变量
来源：http://www.sxryk.cn/163fqvamvpm.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163hxaonars.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163mjndanqx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163guzcmfda.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ihdxwbsq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163dmvregjc.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163xrujjtvh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ekwhgxfq.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163oebpazlq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163zxoemtwa.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163ehcutjip.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jorlkrss.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ykhqelho.html

files=$(ls -1)
来源：http://www.sxryk.cn/163kpmtmtir.html

[R38] 管道串联
来源：http://www.xuanzx.com/163heehmimo.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163fzmzgwyx.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163tkeerppc.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163yhulqobi.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163uvjwpnsn.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163rvwagcpc.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163lansqdqc.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163zvsdbmzl.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163imtvzkwt.html

wc -l < a.txt
来源：http://www.sxryk.cn/163xcujheig.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163zvfpcpof.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163kxnjobzg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163qmylumkg.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163fghdrvbz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xvjfvvjp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163vdnhjqlk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163sntxjfcv.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163aeuangyf.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163lviofqhm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163bwgmoizv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163esxuknem.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ltpqiizf.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163mxhwlucz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ppantfyr.html

[R50] awk 求和
来源：http://www.xuanzx.com/163tpqvmmzs.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163lyxpwzvm.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163elrlfern.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163fhddyuij.html

[R52] 统计行数
来源：http://www.xuanzx.com/163rmatmrnu.html

wc -l a.txt
来源：http://www.sxryk.cn/163elodftll.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163yvubsurn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ousysgon.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163reotelwx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163eivavqul.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163sjybqjno.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163danicimq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163bnetbuwf.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vlfkgews.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ihlkgptr.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qpwimpji.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163haeyzxni.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ynkxzkjv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163uiplzqft.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163muxykefl.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163qgltoutc.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163hasncgvf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163cmekqffd.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ygfiknga.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163yiikafqu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163polvyyzs.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163iftpvaza.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163qjzcgvbt.html

[R64] 结束进程
来源：http://www.sxryk.cn/163kiauaida.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163amgbgdde.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163swilyxrx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nctxbfoc.html

[R66] 定时任务
来源：http://www.xuanzx.com/163alslccxq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163wcyqdkrd.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lyhfikvv.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163bfpwkbcb.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163wedlfjnf.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163htgdcffc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ztydgbqt.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163itlnficf.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163nozmvrlu.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163agkuphst.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163uzciebsh.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163eejtacrm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163shfsntdz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dfsmpzeg.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163dkeqeqxz.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163eatwwskb.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163zejbrkwd.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163didvlccc.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163kjsdjtbw.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163wwyylqaw.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163hgeisqvc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163otyxajgo.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163pmovkqov.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xeltccqc.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163ofmwbddy.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rbmpktxt.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163yepcboyd.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163lyotnwhp.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163vnpgghgb.html

time ./run.sh
来源：http://www.aibaodan.cn/163wqqggvzr.html

================================================================================
来源：http://www.aibaodan.cn/163zigsljah.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163indyvlhl.html

================================================================================
来源：http://www.aibaodan.cn/163wbmcghot.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163tigiexvh.html

#include <stdio.h>
来源：http://www.xuanzx.com/163daonyiui.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ijlxlspa.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163urpmspzw.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163aeeiokqg.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163japruwsp.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163zzveqiuv.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163xznxdbjk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ewklskiz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163rpzjkrrj.html

strlen(s)
来源：http://www.sxryk.cn/163azoohqig.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163jgeaxkpf.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163equijpki.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163yykgdazz.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163zqjchqac.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163hkavfklq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163jnwqmkxm.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163agbhovbq.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163vvevlqes.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163jurvtomh.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163crxaknqz.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163wrllfyqu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163dauslrnz.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163wsxsflbd.html

fclose(f);
来源：http://www.aibaodan.cn/163zcecytgi.html

[S12] C：写文件
来源：http://www.sxryk.cn/163latenxzd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163sqpsiejn.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wetcqxns.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163rnnhvkes.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ywdqlpny.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163ttgoecvu.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163iqepcrbu.html

(double) a / b
来源：http://www.aibaodan.cn/163slvivetn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163wtzebitb.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163wtgidytq.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ayygzpzu.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ijpchdlz.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163rzrgpkku.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163wdlbcdmd.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163iizpuzfx.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163tzohfwnq.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163roqgvfrg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163gkcootdz.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163eqekumbt.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163fspcroha.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ovsmwtuv.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163qnmzvpjm.html

[S23] C：随机数
来源：http://www.xuanzx.com/163ohekzmwn.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163kwftvzww.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163gguxsfdv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163gpwzacsr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163xgtjoyvg.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163pjbjglbr.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163lrfqtmhr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ouiymthp.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mjapovwd.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163clstaetm.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zwcumdkp.html

static int counter = 0;
来源：http://www.sxryk.cn/163dyxdarpc.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163rsujkvul.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163monwwsyf.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163ftrtdhxh.html

#ifndef X_H
来源：http://www.aibaodan.cn/163irwuhfia.html

#define X_H
来源：http://www.xuanzx.com/163ytsktvck.html

#endif
来源：http://www.sxryk.cn/163sdxkrxny.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163ysrayceb.html

#include <iostream>
来源：http://www.xuanzx.com/163xqhrffuh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163sqbgsico.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163agsuapfi.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163eoqofbhe.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163pttngxwv.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163trdausdt.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163feqvqykt.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163mmerwfkn.html

[S35] C++：map
来源：http://www.aibaodan.cn/163dmontsvc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ltzjiftg.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163lzwxwezh.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163injxtpxh.html

[S37] C++：set
来源：http://www.sxryk.cn/163wcvqkfhx.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163lwsatoaa.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163btqurwze.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qifhebru.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163wfhrkmrr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163cqdvghhf.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163yjnfpbvy.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163ygbidwxt.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163xkebmwzb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163nmipzibo.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163jzbpnhkh.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wttyfpco.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163camwxrtv.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163byceluib.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163nhsbshfi.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163hyarrxks.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163yrzrlhxt.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163inimilzi.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163krawuxsn.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163zbbwjzkh.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163wjbfsydw.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dcxahord.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163cuavcgzw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163plobcdbo.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163fxvaaxrd.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163tazgekop.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163jjnziist.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163evfanycn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163jodfdtsc.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163eusufslc.html

static_cast<double>(a) / b
来源：http://www.aibaodan.cn/163kzusevmk.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163tqtwcprk.html

int size() const noexcept { return n_; }
来源：http://www.xuanzx.com/163xqoeureu.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163kgumlfns.html

std::vector<int> w = std::move(v);
来源：http://www.sxryk.cn/163ommijgnz.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163hncquflc.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.xuanzx.com/163sgibstmg.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163whjigejj.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163ljbfirsi.html

[S56] C++：optional
来源：http://www.sxryk.cn/163zzijdzsd.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.xuanzx.com/163vhaqwoby.html

[S57] C++：编译期常量
来源：http://www.sxryk.cn/163lerahxxn.html

constexpr int N = 10;
来源：http://www.xuanzx.com/163snxjpgwq.html

[S58] C++：命名空间
来源：http://www.xuanzx.com/163acejbdtj.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163nohljkey.html

[S59] C++：静态断言
来源：http://www.sxryk.cn/163twryflcw.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163ncfgdnnt.html

[S60] C++：遍历并删除元素
来源：http://www.sxryk.cn/163xebhhvax.html

v.erase(std::remove_if(v.begin(), v.end(), [](int x) { return x < 0; }), v.end());
来源：http://www.xuanzx.com/163hglctmlu.html

================================================================================
来源：http://www.xuanzx.com/163xbftelkn.html

T. 其他语言补充（Kotlin / Swift / Lua / Perl / Scala）
来源：http://www.xuanzx.com/163yikortwp.html

================================================================================
来源：http://www.xuanzx.com/163tuoanmvi.html

[T01] Kotlin：Hello World
来源：http://www.sxryk.cn/163cckljsia.html

println("Hello")
来源：http://www.aibaodan.cn/163ynozmoet.html

[T02] Kotlin：变量
来源：http://www.aibaodan.cn/163uctxuwwm.html

val a = 1;  var b = 2        // val 只读，var 可变
来源：http://www.sxryk.cn/163jassdpic.html

[T03] Kotlin：字符串模板
来源：http://www.xuanzx.com/163riyxlhia.html

"值: $b"
来源：http://www.aibaodan.cn/163olxsvhez.html

[T04] Kotlin：空安全
来源：http://www.aibaodan.cn/163xgsikpox.html

val n: String? = null;  n?.length
来源：http://www.sxryk.cn/163iuegpzld.html

[T05] Kotlin：when 表达式
来源：http://www.xuanzx.com/163yttivezn.html

val s = when (x) { 1 -> "一" else -> "其他" }   // 多分支时每个分支单独一行
来源：http://www.aibaodan.cn/163znqptuhh.html

[T06] Kotlin：集合映射
来源：http://www.aibaodan.cn/163dzzojplx.html

listOf(1, 2, 3).map { it * 2 }
来源：http://www.aibaodan.cn/163gccnsubh.html

[T07] Kotlin：集合过滤
来源：http://www.xuanzx.com/163imudazaq.html

listOf(1, 2, 3).filter { it > 1 }
来源：http://www.aibaodan.cn/163ckkjatrm.html

[T08] Kotlin：数据类
来源：http://www.sxryk.cn/163khsmnncx.html

data class User(val name: String, val age: Int)
来源：http://www.xuanzx.com/163aoxxmtup.html


<!-- 参考信息 -->
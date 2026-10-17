外链999!wailian999！

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163yawmiivs.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163cfmqvvzi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163vtsbwzzx.html

================================================================================
来源：http://www.sxryk.cn/163iukmzncs.html

R. Bash 专题
来源：http://www.aibaodan.cn/163rychjlxc.html

================================================================================
来源：http://www.sxryk.cn/163vnrjlzfa.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163mfsbyxuw.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163hbqrmauc.html

set -euo pipefail
来源：http://www.xuanzx.com/163idkeeumy.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163wyxvxypr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163uqgajyne.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qzvjhniy.html

readonly PI=3.14
来源：http://www.sxryk.cn/163wbsftbas.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163scqgtxiw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163eqgneeoi.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nxxzcsbj.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163tclfurvz.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163mebtcyre.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163mzjyycto.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ejafdiyz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zdbgobcb.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163dihtyxiw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163tzhwzuip.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163uprnzjqv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163eqnddjam.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163totuqrnf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163gioeawkt.html

[R11] case 多分支
来源：http://www.xuanzx.com/163hfonuwqp.html

case "$1" in
来源：http://www.sxryk.cn/163trdukjta.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163upphyays.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163jonvniab.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163icrsjouu.html

esac
来源：http://www.sxryk.cn/163cxdkggvg.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163nzerzvpd.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163umskxqzy.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ccgrbntr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163gngrrutu.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163nqpjflmw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163pwaigmio.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163touorwve.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163yhniiyqa.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kagcgquq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163axihhhov.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163opnvmdxg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xuxipsbo.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163nbcuaknk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163voafoxhr.html

[R19] 数组长度
来源：http://www.sxryk.cn/163uewsordk.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163zbywqvgm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tgdhujqw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163kispxwex.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jmxamxov.html

echo "${#s}"
来源：http://www.sxryk.cn/163hwwodrjw.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xpojrpdi.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163jmvbjbgk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163hnjwndfd.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ruxbbqzu.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163aeluvzut.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xuuanrxt.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163cyadqnix.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163knbrbrjk.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163pylxkhiu.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163cfvoyzxs.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163jwjqklym.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163thjkwavw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163eljieesp.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163imgpwzjr.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163hstuyfrh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163sqzyrkbq.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jqeurezh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163gscqmhrh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163sinnxxmf.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163osbfaazj.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163bqmeyfhh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163gnsgbtuj.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163viepcerh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163pcczebgx.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rfzdvduh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ustdnuvo.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163dxppwlnl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163quyrgqqp.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jsxyhwbk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ouvnhflt.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nzqeavpy.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ecaxynnv.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wqfvknza.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163gmgglvdy.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163ecpoezqx.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163afvkdear.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163npmcmijb.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163vkgisqnk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lqvxuduk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163xubihhap.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vzceudlx.html

wc -l < a.txt
来源：http://www.sxryk.cn/163fdrqrdfz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163pegfwhpm.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163yqhrubdg.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163cswpzxxt.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163adgkbezg.html

[R45] 批量删除
来源：http://www.sxryk.cn/163lgomtjhm.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163rpbxybni.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163oarzwouk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163tcfqgywa.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163hcgaryqy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163ozaxcuur.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163kvojukhj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163hqkhoqgv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163xtlmoypz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dlbdpzjn.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vdnfqboa.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cpqttomh.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163jhxkogpk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163mxqrxist.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ycjlgzih.html

wc -l a.txt
来源：http://www.xuanzx.com/163uslqitrb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163xanpgfcf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163higoocqs.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jpeamfje.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163kuuzjsif.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163kvuyuiqk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ewknhxve.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163bdjdhuox.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163jyiahrzb.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163swvpwlrj.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163stwzxpui.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qlraycfr.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163yrxpgxnq.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163rztdhihg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163lsggdemb.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163loaaytxo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163hklonire.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163hxdtcwlq.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vxbkqonz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kbhatbid.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163snjeroml.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163yjwlmykp.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163udhhvuom.html

[R64] 结束进程
来源：http://www.xuanzx.com/163sbaqbicd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163xreqopbp.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163rrrlvgnx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163utdtjwms.html

[R66] 定时任务
来源：http://www.xuanzx.com/163dplbamoe.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163zclclfmu.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163ltzuaqdo.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163grgobfao.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163udbgjiue.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vowwjege.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163iqejoszm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163ylkwwtib.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163nzjhrvmh.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163cvqosxgn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163gnfqyvhr.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163ggcdgleo.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163xsymkjsn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163afpkqhcs.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163slrghzxm.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163hhtcmnmg.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163zuczeouv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163aqxrcxhj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ndsqecxp.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163wlzsmktu.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163lxwgjoxz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163opvimpwo.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163yicrobso.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163vjzlzdjz.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dhtfuzcv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163yjquprsf.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163gptpwejl.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163qawymqmz.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163oblssaue.html

time ./run.sh
来源：http://www.aibaodan.cn/163cyqodfcz.html

================================================================================
来源：http://www.sxryk.cn/163nlwsxgdg.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163umaciqlf.html

================================================================================
来源：http://www.sxryk.cn/163rxkphgrc.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163dxrrlraw.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tpxeefau.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163xezkqfrs.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163unsrdazq.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163vdsmqmzi.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163kjsaqdib.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163yefnivdq.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163tniarvdv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163fkxyvwji.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163lwkbytqp.html

strlen(s)
来源：http://www.sxryk.cn/163zeplwnbp.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ehjgqplb.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163kqcmwhwt.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163qjtnmklt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163adbajbtp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163fomejvjy.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ugcbklvc.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163oujvxado.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ixhiigwu.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163bmfgcpei.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163onuwxpzq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163etwfrvpp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163vfazvlca.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163pmihndle.html

fclose(f);
来源：http://www.xuanzx.com/163rvkqhgmm.html

[S12] C：写文件
来源：http://www.sxryk.cn/163kalisobt.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163uotirhya.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163jgsvgqou.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163tvkmacde.html

[S14] C：枚举
来源：http://www.sxryk.cn/163rsmrmiec.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163rtszgobz.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163gxvjyipa.html

(double) a / b
来源：http://www.sxryk.cn/163zwplxppr.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163lktqpmjm.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163avccpgug.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163cavgdolo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163flivswci.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163xehiouha.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163mwvyybbi.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163tqmrhwgm.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163ndfdqvxg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163domipykf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163nryjwrth.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163beuimdva.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163gwbktjxw.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163hebemouy.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163mmjmkvxy.html

[S23] C：随机数
来源：http://www.xuanzx.com/163jqjplfwy.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163cppauram.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163kgmfafvu.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163cesowdwp.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163nauhjalx.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163vulbcxbq.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163omljwcgn.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163utpewvoj.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163kaikookm.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163owsxlksy.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qmrazfyu.html

static int counter = 0;
来源：http://www.aibaodan.cn/163pjmjxewe.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163izabutmb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163qdzsqmtt.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lrxajcsk.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ueynowbi.html

#define X_H
来源：http://www.xuanzx.com/163hwmfmroo.html

#endif
来源：http://www.aibaodan.cn/163uyonfwio.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163qmvckddu.html

#include <iostream>
来源：http://www.sxryk.cn/163ypwejpya.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163hmckmzqd.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mxadhafy.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163gvfljkdv.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163rotfepch.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163podxqbdq.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163eexmljrl.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163opyrakpi.html

[S35] C++：map
来源：http://www.xuanzx.com/163pnrfrzow.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163crqhxbfx.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163rudycxow.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163ogjkdszq.html

[S37] C++：set
来源：http://www.sxryk.cn/163ivquebfa.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163lpqldtpc.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163spstglkd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163bppfdwzx.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163zfmiuvbx.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163uslkpgis.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qayrztmw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163zltfctqr.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163kxyatorb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163maisqgmv.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163iauikbrz.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163ertmczum.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163toemzoaz.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163lvgzbhhm.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163wirrleyi.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163rnspgtqc.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163pvagiqgp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163oqfegncd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163twrcvdlo.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163rxyajkdi.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163dakdknub.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163razdbrnr.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163xxafvrcs.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163uphurkmq.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163gkuidohf.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163wtkprpeb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163fzvfgeag.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163kwjekpql.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163zmfqslnm.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163chxywwwq.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163jdeoaugq.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163ebpzxstn.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163hnehlyop.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163fsicwraz.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163bnkktdvj.html

[S54] C++：异常处理
来源：http://www.sxryk.cn/163scudvbgd.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163kilpzrda.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163npgffjin.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.aibaodan.cn/163icuquetd.html

[S56] C++：optional
来源：http://www.xuanzx.com/163tnnlzmee.html

std::optional<int> o = 5;  if (o) { int v = *o; }
来源：http://www.sxryk.cn/163ppfwfucr.html

[S57] C++：编译期常量
来源：http://www.xuanzx.com/163zmirwdyw.html

constexpr int N = 10;
来源：http://www.sxryk.cn/163xzwnaokc.html

[S58] C++：命名空间
来源：http://www.sxryk.cn/163uewdpsfm.html

namespace ns { int f() { return 1; } }
来源：http://www.aibaodan.cn/163giopqnvk.html

[S59] C++：静态断言
来源：http://www.xuanzx.com/163pdytflot.html

static_assert(sizeof(int) == 4, "int 必须 4 字节");
来源：http://www.sxryk.cn/163qgkgjwge.html

[S60] C++：遍历并删除元素
来源：http://www.aibaodan.cn/163skohesif.html


<!-- 参考信息 -->
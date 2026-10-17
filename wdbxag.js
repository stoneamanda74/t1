外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163qhxdnjme.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163kklppbww.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163nmuqizgo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163dllcapjo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163upxozoal.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163jtwwhfsx.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163tvcwklfa.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163batgteha.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163bzxkylyo.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163eslkfqeo.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ciskywey.html

================================================================================
来源：http://www.xuanzx.com/163jtugjxvy.html

R. Bash 专题
来源：http://www.xuanzx.com/163eorcdgxm.html

================================================================================
来源：http://www.aibaodan.cn/163ovlbewpo.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163cnvfbbqw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163cmfrwkfy.html

set -euo pipefail
来源：http://www.xuanzx.com/163qqtfauri.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163utnqjcbd.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163fbmuusdx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163ymziddmo.html

readonly PI=3.14
来源：http://www.sxryk.cn/163boyuyfzk.html

[R04] 位置参数
来源：http://www.xuanzx.com/163pnfmaesd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163bjutmfsl.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163dffmsfjy.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163elivqlze.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ywbhdtkd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163cyromrcc.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ztpsxvfj.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163fmgnterp.html

[R08] 数值比较
来源：http://www.sxryk.cn/163zrzkldhr.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ezwbdsoo.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163egrblqkq.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163bunwrmyj.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163qgsscdqp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163cmrplowr.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163rbkoojkx.html

case "$1" in
来源：http://www.sxryk.cn/163nwckhmuu.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ollgvflj.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163xqgpbdym.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ygylgzit.html

esac
来源：http://www.sxryk.cn/163kkuoyssc.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dyvdvdlt.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163oleieifu.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163sbubrohi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163iarcpcuy.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163oltgyfgh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ripeeriv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163sdusulmy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163bublzgig.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163tnwdjmhq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qirmqxkk.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163snaqmsdt.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163byuoskez.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163mswmjcyz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163fphuorvn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163clnoxtid.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vnpwnnnr.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163zhpleddo.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163smyeyqeb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163revienqj.html

echo "${#s}"
来源：http://www.sxryk.cn/163cfpetpwo.html

[R22] 截取子串
来源：http://www.xuanzx.com/163rvaihtaf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163dpnwbopa.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163fijtizaa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163fsejaicv.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163yrsqmjit.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163jpnqiisl.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vswgrjtc.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ofpylcmg.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163kpttriuh.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163qbiorjoq.html

[R27] 算术展开
来源：http://www.xuanzx.com/163jbhlyqeo.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ngnkauol.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163pnkpcyyv.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163uahbgyuh.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xdffkwql.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163txtidrvb.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163wzqwokap.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163curkfopn.html

[R31] 局部变量
来源：http://www.xuanzx.com/163csmuvadn.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ikukieqm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163tnwbuawg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tujlcveq.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163vhzufdub.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163thesmfgd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163lydearil.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163dmydyrel.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163iafdqecc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163wsmzxntz.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gqhvegqn.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163keabifio.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163tgegxant.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wotfosxr.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ztraadmt.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163hncoklsd.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ndnrliwu.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163hkozoauy.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vulcvltb.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163inzeptpb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163theojgdy.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163dbsmtvhs.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163skpfykng.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163ahsjkotu.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163cdxseqwb.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163jmwanfzf.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163buohchcn.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ebaihofj.html

[R45] 批量删除
来源：http://www.sxryk.cn/163tgaqagtp.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163qryxnczw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163arxxksak.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163lfzfkvdl.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163pcntoarq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jrjejctu.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163zbjeuxdw.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163zqqryxif.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163cxercyel.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ynhlwudw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163kwttahct.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163hmujbtoi.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163cwrvksnc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163akkexoux.html

[R52] 统计行数
来源：http://www.xuanzx.com/163wpjbxdwa.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ubcdwfnr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163rrpckgjc.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163tkxwoifj.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163zkztlvae.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rlqbffia.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163erxjyrtn.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kfgbmiqz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163sjihbybc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163cfioxvwy.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163cuefxaim.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163seivvkav.html

[R58] 下载文件
来源：http://www.sxryk.cn/163rzhpsynp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163pypnijbf.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163hjauefaw.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fzsqfilu.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163lwwhkzgw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163qukstjmf.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163lwqnknsp.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163clxaqebt.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zubmwulg.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163xiekdytx.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ftrwkwdu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163riigbjgc.html

[R64] 结束进程
来源：http://www.sxryk.cn/163xldbmxvu.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163pjqyjeck.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163mrwcspiv.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163zogddtbj.html

[R66] 定时任务
来源：http://www.sxryk.cn/163gaosmcip.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163cdxnxamv.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163wkvurqbr.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163kvgdcpvm.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163cyzhtuth.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163bqwyzryn.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zwncnnmx.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163avfwgeqh.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163gsfpcqkp.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163evfqfkxn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163lojdxmvc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163hovpqzaj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163exrohnsa.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163ykiwrlmx.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yspwolsy.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163bodeddvz.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163kowxghyn.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163rjuzmbcp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ztdbeiex.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163lsjcziqc.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163xwixujgu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qqzfieag.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163tvmbzamq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163njfekrdf.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dhtjyxnp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163dydcdree.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163kvttsheg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163rforrjnk.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163fwmqsckh.html

time ./run.sh
来源：http://www.aibaodan.cn/163culzrhof.html

================================================================================
来源：http://www.xuanzx.com/163gvfbljgu.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163gtzexsfm.html

================================================================================
来源：http://www.xuanzx.com/163dvljlzmt.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ibxuivgm.html

#include <stdio.h>
来源：http://www.sxryk.cn/163ztxswpwv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163imcxpuha.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163kxygrwkx.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163wyidudmq.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163enmozyuz.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163iwyrpzfv.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163aycenqyk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163ptvwrigz.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163yaolsvwn.html

strlen(s)
来源：http://www.aibaodan.cn/163uabcnyiy.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163yrodufyd.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163suywwarf.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163ncshjeox.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163cmpwrxcm.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163keskokoq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163ecbajaqe.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dxpkmdly.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163mvwjfwfl.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ahqrrmbw.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ymkrnuje.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ynuypzwj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163bpummsin.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163qdwexbcq.html

fclose(f);
来源：http://www.xuanzx.com/163vtzefpdg.html

[S12] C：写文件
来源：http://www.xuanzx.com/163qarlesha.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ztibuocn.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163gdzlsdeq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163rzjgtdcw.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ubptcqmj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163flgoaeqx.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163bcnywrrg.html

(double) a / b
来源：http://www.aibaodan.cn/163ewjmrwsy.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163ytbljvza.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163zhnpfjtl.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163rgcglhft.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163rieedlub.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163uizczivd.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163losjowmu.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163djxngrbo.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pelaymmg.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163pkvsqbzu.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cbcrgneg.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163bhkjdvop.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163sxnuieud.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163dfitchzj.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163viaatrmv.html

[S23] C：随机数
来源：http://www.sxryk.cn/163kqwrrjek.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163foxcppet.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xyotmmwj.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163axtxcpeg.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163xdoitoad.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163uajjzbpn.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163yqixitrj.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163kzacjmar.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163sfizuxjj.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163dmtjotnu.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163jnlzshao.html

static int counter = 0;
来源：http://www.aibaodan.cn/163qrzzktxh.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163jgqgsrgy.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163kezpjokg.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163kpqfrbqo.html

#ifndef X_H
来源：http://www.aibaodan.cn/163epvqymmi.html

#define X_H
来源：http://www.xuanzx.com/163igmjpcis.html

#endif
来源：http://www.xuanzx.com/163lckfvpck.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163sdmslazz.html

#include <iostream>
来源：http://www.sxryk.cn/163sfelypag.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163rysqzcyy.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163gvcwwuaq.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163qtjduruu.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163hxkmwmtm.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163iqpnyecl.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jxayfymv.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163temashgp.html

[S35] C++：map
来源：http://www.sxryk.cn/163fiypyybk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163konsxikg.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163abziiama.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163sfpesrap.html

[S37] C++：set
来源：http://www.aibaodan.cn/163nmjesrwb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163frrtoifc.html

[S38] C++：排序
来源：http://www.sxryk.cn/163jnbtmcnm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163cniecezr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163tsbccjur.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163sijqnmku.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163chdpzbjr.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163pfxrqpsb.html

[S41] C++：类与构造函数
来源：http://www.xuanzx.com/163ydxackaw.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mtkwqpas.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163nbdbjian.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163wndeexry.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163aahhnlri.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163yruomghy.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163elwdngku.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163gltlzvhq.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qvmyvgrv.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163vbrscbnw.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163lvtldrus.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163almmpjge.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163mvkptqqp.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163gkibcuwo.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163uyjtjlsm.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163vkkfqmun.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163kgpmlmuz.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163vuyntujb.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163efmytbsv.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163svghsuxj.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163xdvbbybo.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163zikkjbpi.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163rlvssrna.html

[S52] C++：const 与 noexcept
来源：http://www.sxryk.cn/163pmaktimu.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163awpxblyy.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163vpkykniq.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163lltfcxsq.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163lspsbwgo.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163aykdrftu.html

[S55] C++：结构化绑定
来源：http://www.aibaodan.cn/163yboikfsm.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.xuanzx.com/163dlszpyuo.html

[S56] C++：optional
来源：http://www.xuanzx.com/163darmvrbw.html


<!-- 参考信息 -->
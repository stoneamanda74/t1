外链999!wailian999！

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ncpzghjp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163akymkrga.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163nnyhacla.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163jhombcto.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163vigqdrjs.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wkhzzppt.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ubusrqmr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163cabdawyt.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fgxruvts.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163kuebeaya.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163qetuhacv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163uekaaeax.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163guxetmdi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163lvgftrfc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zoqwvgsc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163arqilxsz.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fdphxxom.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163nuzqlpgj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163tglaxnxa.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163kfbixrzs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163giziqdln.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163kwpapost.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tunqxgij.html

================================================================================
来源：http://www.xuanzx.com/163fsbaqvwg.html

R. Bash 专题
来源：http://www.xuanzx.com/163ogwzdtvw.html

================================================================================
来源：http://www.aibaodan.cn/163pmdxwzdq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163xpmgfekj.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163cwdppgeq.html

set -euo pipefail
来源：http://www.sxryk.cn/163qdtuhphu.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163psmkbnaz.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ldssljxo.html

[R03] 只读变量
来源：http://www.xuanzx.com/163srttbeop.html

readonly PI=3.14
来源：http://www.sxryk.cn/163dkhpyjke.html

[R04] 位置参数
来源：http://www.sxryk.cn/163oggmwsor.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jjtnclag.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ofhiytfb.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163navluxlm.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163ljcbgnmb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163jezoplzv.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ofzjfsyd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163azwzslts.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163sapserqe.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163bmzvlxmf.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163bcnphsbm.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163sswkhzgr.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163ozibthbr.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163whweoruu.html

[R11] case 多分支
来源：http://www.xuanzx.com/163fwrgvvfp.html

case "$1" in
来源：http://www.aibaodan.cn/163yilpdamk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163jmljjvqn.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163wojpvhqp.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163tkchfgkc.html

esac
来源：http://www.xuanzx.com/163wpprqpch.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163xsymmgni.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163chgvaaom.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ktibjhau.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163giykaptd.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163kcvuvciq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ocugskco.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163fihdflaq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163kdvrqgls.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163icinzufo.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163soqewomb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ywkfhvly.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163jtfketqb.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163gkqbibzq.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163uefnexrn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163usewgwqj.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163fagsosfs.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163mdthptwn.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163hszgcgwu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163khsqotpk.html

echo "${#s}"
来源：http://www.xuanzx.com/163iclavvjl.html

[R22] 截取子串
来源：http://www.xuanzx.com/163otgquspr.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kejmgtxp.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163atkjidgg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rdveqgah.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163uxxiwuhl.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163vomxfcdf.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vhjqlllu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163mpeudrue.html

[R26] 命令替换
来源：http://www.sxryk.cn/163yxqbjmfh.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163eailbtey.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163bvixujsq.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163gkhdviji.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163gaojfibu.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163jhmjampn.html

[R29] 定义函数
来源：http://www.sxryk.cn/163daldlndj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163fhjtwkgf.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163edjtsbwb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163pzfadyup.html

[R31] 局部变量
来源：http://www.xuanzx.com/163zernvqlt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ntsvfsuy.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163yzlwbrqt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163vlmbwqkt.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ehsdrcbn.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163qpcrmnbw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163zamsivid.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163aiulcxkt.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163slpxxwqt.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163pftrwbuk.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163bxrduels.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163meanbrkd.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163dswoyxmg.html

files=$(ls -1)
来源：http://www.xuanzx.com/163qiwrmrfs.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163vttbzgfh.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163xnfmufnc.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163lswwpglk.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ywdykkwx.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xuhyyolf.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163uwgqrvpb.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163goqmjofl.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163byygalzw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163ojiqlqjt.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ddwrztxz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oothomme.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163jfxturvm.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163lqxhzleg.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163yybleodr.html

[R45] 批量删除
来源：http://www.sxryk.cn/163urgvbcyn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163fwyvgkmk.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163delrcukk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ynvnnwex.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163mfkregto.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163vjevqetv.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163wjisjlam.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163gtfsccwc.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163qxvlzuwx.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vpyfppzk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163rmxtnfhf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163hszjcvye.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163falnjjkd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163npwmerzg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163vcxazyxu.html

wc -l a.txt
来源：http://www.aibaodan.cn/163prrnqlrt.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fqrszpvv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163zjwbjfxa.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163kexxvvwg.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163ofsjjkpr.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ebsyhntv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163mqknozgf.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163exxhjfew.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163aqzzttbv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163qznuedqp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163jmvnlvvl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163tazhxadc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kaitzyzw.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163lfmhcuox.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ulxjeoxt.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163hkeaxbxo.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163sjaeybhj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163uyjjopgw.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163vvneubbf.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163vvdunmmh.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163mszmbgrc.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kvbgnrtr.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163sdipzhpb.html

[R64] 结束进程
来源：http://www.xuanzx.com/163kfkhsnds.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tnrhzfaa.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163xfnzzavb.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163rsipjxkg.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hiokexth.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ryujzbjv.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163vrwdzwmr.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163figfqasz.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ignjvrwz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163oyqtcxci.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163dwtkwmeq.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ixdfqqmf.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163soqmarvd.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163kqntzobi.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ppkgkbks.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163jhgzeqer.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163yjnulfoe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163kduisaii.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163wrtkwlpt.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163lsytkhob.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163yrnipjsv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163nmmgdccp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163lwrwpiuh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163tqapjgei.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ofcwqbod.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163owihkbeb.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163tghguxwl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kffymqvw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163jibwxdys.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163aukdjbbf.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163icojrfin.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163fpezjzei.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163flgxgmdk.html

time ./run.sh
来源：http://www.aibaodan.cn/163uysojyee.html

================================================================================
来源：http://www.aibaodan.cn/163pvvwmstg.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163eopfobwc.html

================================================================================
来源：http://www.sxryk.cn/163rjwyolkg.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163uszemris.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163rxrdgrhk.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163gjtwebjw.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163pnqttkly.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163elvdckoa.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163qtrlnmpl.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hnefkzpl.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163vfazijwa.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nnjzwujh.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163lltjeqgc.html

strlen(s)
来源：http://www.sxryk.cn/163jxthasdu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163gvpmssxs.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gkfhbltr.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163lvypwnlb.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163xzaohksv.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163ksgmifoj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163zxivuots.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163walebouc.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163hzchxbtg.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163pqjxgfkv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163kibtlife.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163gbmahcxc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163alocdjnh.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163krfepwln.html

fclose(f);
来源：http://www.aibaodan.cn/163qmbcnewn.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163hoeraneu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163yyszobdz.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163vdlyrdqz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ctssnndv.html

[S14] C：枚举
来源：http://www.xuanzx.com/163mzodlpvi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163rvzujriz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163eqmhuzji.html

(double) a / b
来源：http://www.aibaodan.cn/163litcleuo.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163mbaibvix.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163azbxigvp.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163bbpfhtlw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163lsdxyeag.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163evuqreqp.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163kxyzocsg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163kekmvcgp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163qlfllnda.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163sjerkhaj.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xdsibmmv.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163owwzfwrg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163fwtviidy.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163uuwgacwn.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163glbhoccm.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163lwgwlnrf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163pgdgnqlr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163ojqxmnic.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163qxjtgkry.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163lwfrdqgw.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163hqiskiub.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163doovszkh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163wmmesond.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163azksxebk.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163dkpqoriy.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tqzftifv.html

static int counter = 0;
来源：http://www.xuanzx.com/163wfgfhqrf.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163zngnuynu.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163caiobwcw.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ypzwzpwh.html

#ifndef X_H
来源：http://www.sxryk.cn/163pgplompl.html

#define X_H
来源：http://www.sxryk.cn/163xawsflcq.html

#endif
来源：http://www.aibaodan.cn/163ddvrhasp.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163iiluwhqn.html

#include <iostream>
来源：http://www.sxryk.cn/163zcadspsb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163hzfkojwu.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163razwnpdc.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163mwhfreke.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163vqdfjwsr.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163irbobtsj.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163jkmuslet.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163umegwwbu.html

[S35] C++：map
来源：http://www.xuanzx.com/163gphojafq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163qbppiead.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163rrsrkvpv.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163hghoxfyl.html

[S37] C++：set
来源：http://www.sxryk.cn/163hlkoscqa.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163hezlampa.html

[S38] C++：排序
来源：http://www.xuanzx.com/163eacsiljo.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163ujwwukyo.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163hukjhaos.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163xwrfceur.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ozrncvfl.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163wyphwiuq.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163dctucfmo.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163tttddrva.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163nxubyzyj.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163pnmyiavd.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163aimaokkk.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163hqfkfhae.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163onxmepmj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ccexfeep.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163qblxwgsb.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163srpxmxou.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163wtvxafus.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163qzaxebnu.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ctjupthx.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163xzvmrkph.html

[S48] C++：逐行读文件
来源：http://www.xuanzx.com/163zpdchihv.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163yqbiuwsb.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163edotakge.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163imdqnfyd.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163ozqsmswr.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163aiiabque.html


<!-- 参考信息 -->
外链999!wailian999！

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163oyzxmtpt.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163uhwhjbkb.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163vuizhvcp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163flpgkrjw.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zwkewfnl.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zqtvscbg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163gwwlxjdq.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163suaxmohl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163hfvfzmuh.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163msnksafn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163ltfojnss.html

================================================================================
来源：http://www.aibaodan.cn/163ihhzloih.html

R. Bash 专题
来源：http://www.xuanzx.com/163uetofaqx.html

================================================================================
来源：http://www.xuanzx.com/163ubdjkime.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163wehebejr.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163qqjgihuj.html

set -euo pipefail
来源：http://www.aibaodan.cn/163juedwmoq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ddmnjqrx.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163rmgzmwdz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163bllkkstt.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163cijwdyqd.html

[R04] 位置参数
来源：http://www.sxryk.cn/163dwqjvqty.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163zrwuyuzq.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163onychaaw.html

name="${1:-default}"
来源：http://www.sxryk.cn/163mlxvigpw.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163meagpxom.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163frvanezz.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163urxepmvm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163ohekmqmt.html

[R08] 数值比较
来源：http://www.xuanzx.com/163acqcezxx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163gnwcdjev.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163obnqzsxv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163eefjlhsw.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163narspacl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163kjvrrtxq.html

[R11] case 多分支
来源：http://www.sxryk.cn/163dglqujvq.html

case "$1" in
来源：http://www.sxryk.cn/163njkqvorn.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163kystmuii.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zabuhuyc.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ipgdrosg.html

esac
来源：http://www.aibaodan.cn/163nlxekqmf.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163eoeudkvo.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163plwvehzt.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163uqrctrrw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163wwwtdtqi.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163owfuwmqp.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gsnhjjei.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163iodndlxh.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163tqvkmyqx.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163awpjweka.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163znvumklr.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ouavfjpx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wctpyxft.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ldsbhnqg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163yxcewdlo.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ptfzjtty.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163ptaqjpkb.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ufxoqrcm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163sxnvarjt.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163iqhdoxkk.html

echo "${#s}"
来源：http://www.sxryk.cn/163dzeysozi.html

[R22] 截取子串
来源：http://www.sxryk.cn/163rybunqor.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163rqghymyf.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jbwmenek.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163kxtyycdq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163zcxrbuzu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163awjfkyfq.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mkseastt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mzobtxva.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ujporaqe.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163szcomcfc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163rlrdgirn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163anpnaqeq.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163hjdoknox.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163lpmtnyxi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vgzyhoqg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ojakqwxw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xsqkeuwb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xyqzcyuo.html

[R31] 局部变量
来源：http://www.sxryk.cn/163svoxjibg.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163aqcdnxfk.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vgtiupvt.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163njvslzfr.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163tlrzbrim.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163qseeojee.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163ucxfmhdd.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163vlipieqw.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163tclxvgnk.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163fzbjaquj.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vcqxiriy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163wcmyqjrz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163blafpsgb.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163scmltgqp.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163lrbteeom.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zjtbzeza.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163oittygzm.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163njswfhqo.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163nhlvscpq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163lexpqmjq.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163qlpzfbrr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mycxuddt.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xsgftttj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ifwolydk.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cxchzkas.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163jdwcdfbs.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163mfhncmwl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163efgvwckl.html

[R45] 批量删除
来源：http://www.xuanzx.com/163eezfehxa.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163egikogdj.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163gyqbvwfj.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163maswnsel.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163ifkgbpdw.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163routgtbq.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163pkllmzlu.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163xqilddjk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163nzqbqszf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163iwzzuvyf.html

[R50] awk 求和
来源：http://www.xuanzx.com/163nhtzdpie.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163auomzfcd.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ovdfmqsq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163lqrycpbj.html

[R52] 统计行数
来源：http://www.xuanzx.com/163mlbgjtjz.html

wc -l a.txt
来源：http://www.xuanzx.com/163rhaxrgny.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163mzwfecus.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163nrsdvbhk.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163qifggagx.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163zwbejxez.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163qdaukqyq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163reejincf.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163snkvaesv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pkfukaee.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163rxxgyquc.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hjcufvqq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163sbvbedqp.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163eolecvau.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163idyeuznp.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fjenpwkf.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163sckbqils.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mrzyebvh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hkfdkkhw.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163chknigwn.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163ctnnnjyv.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163dzkkyble.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163cijsfvus.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163altffaer.html

[R64] 结束进程
来源：http://www.xuanzx.com/163wawgwqak.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163fahkezpy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163orzwctah.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cxiaoclc.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zjvvotcd.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163tlfeklwe.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163akxhveao.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163lfypjiug.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163tvalhkdu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163odeoomrd.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163cusxooxa.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163usybrgzt.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163uweyhntp.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163gawynvlx.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163dfwquciv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163ficxfgbd.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163uhyehtae.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163dthjexzl.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xcxcnoxg.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163llwqsbzp.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163usgyicuo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163lbbyjrzu.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163xtjvromk.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163pvpnzqsi.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163zhbasmce.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163nfbgvopn.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163qnhsaeck.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163aawuyees.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163dhyiczft.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163tkbzyjdj.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163kaztliyr.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hfoikmva.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163axxengku.html

time ./run.sh
来源：http://www.xuanzx.com/163qamtgwsj.html

================================================================================
来源：http://www.xuanzx.com/163pwdbpjsg.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163xlibojni.html

================================================================================
来源：http://www.sxryk.cn/163oeebniqv.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163yubzhply.html

#include <stdio.h>
来源：http://www.xuanzx.com/163lyzqhidg.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163hlbndpuu.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ourixhob.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vdwsjdse.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163txxcqfdr.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163phpoubze.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163hcrdkxyc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163sgrqisjt.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163lvfgeity.html

strlen(s)
来源：http://www.aibaodan.cn/163pevqkpwz.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163rskgzsqi.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163yzmogrdg.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163yneeyxqw.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163sckdjtoy.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vytmmrbf.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163nexiqyqw.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163ffbwblgh.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163rxenpwwq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163zirldedv.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163exqskatq.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163ftgivbei.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163shjubhrn.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163entshtpc.html

fclose(f);
来源：http://www.xuanzx.com/163josguuiq.html

[S12] C：写文件
来源：http://www.xuanzx.com/163rbcbdqkd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163odcynomj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163xapciero.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163oserfvzp.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ajmgsutj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163ewxbcddg.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163oxgslkab.html

(double) a / b
来源：http://www.xuanzx.com/163ptzddlhk.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163agiclcxh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163gwyaouej.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163sqniucin.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163agfqhxsv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163wtaldiic.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ttvirlal.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163oulmcahc.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163fgusixah.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163neuzlhqt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163kbfncsvj.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163qjhbhugd.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ouuhctwc.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nstorref.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163zhmloviw.html

[S23] C：随机数
来源：http://www.xuanzx.com/163bkmrtgqc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163oaxpchza.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163cpowlrwt.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163krbefizo.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163shikydim.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jwhwbtrs.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163domvmaet.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163adukeyfl.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163zpnwasiq.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163arnptfdi.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163qozrdjgx.html

static int counter = 0;
来源：http://www.xuanzx.com/163cdnuaplt.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163xnoglmoc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vspksnio.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163nitupbbg.html

#ifndef X_H
来源：http://www.xuanzx.com/163dxeelkjx.html

#define X_H
来源：http://www.xuanzx.com/163qnfvmjhj.html

#endif
来源：http://www.xuanzx.com/163svfvdjjz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163tatwlpht.html

#include <iostream>
来源：http://www.xuanzx.com/163pdwprpdr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ckejgvea.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163svsaxvcg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163leerxwbe.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dsoelzqu.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163xjzzkufr.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163xrjkdzas.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163uxgnemla.html

[S35] C++：map
来源：http://www.aibaodan.cn/163eysntopo.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163ikpltfrf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163twcynbmo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163edgrqsjh.html

[S37] C++：set
来源：http://www.xuanzx.com/163thfecoou.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163vyuxwnul.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163hyedhzqo.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163gvzizstu.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163wuudpkpz.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163cxoefkkr.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163jwkovdtp.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163wbltpnei.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163tdewvwer.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163mviskzyd.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163lzgigmuf.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163kczgotup.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163hritpkcx.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163pehltzmk.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163pxqswdaj.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163cxeudyye.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163fxszkcuz.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163lnsefavo.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163jlzvzaex.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.sxryk.cn/163hgwbgaeb.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163sjaowtkn.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163gdyfyrnn.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163qxkokwmf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163oqnnxeuu.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163cuzsaamo.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163uimoofyg.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163gbeferjd.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163bcdplogp.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163mvyxdopi.html

[S51] C++：显式类型转换
来源：http://www.sxryk.cn/163wvxqtero.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163byrtukxe.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163diacraig.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163unbkwvqe.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163uwuollqm.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163fzbjquvz.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163hmjawtid.html

try { throw std::runtime_error("x"); } catch (const std::exception &e) { }
来源：http://www.sxryk.cn/163qwemcurw.html

[S55] C++：结构化绑定
来源：http://www.xuanzx.com/163zzvgbhqu.html

auto [a, b] = std::make_pair(1, 2);
来源：http://www.sxryk.cn/163hmzqzvdx.html

[S56] C++：optional
来源：http://www.aibaodan.cn/163izfcxxvb.html


<!-- 参考信息 -->
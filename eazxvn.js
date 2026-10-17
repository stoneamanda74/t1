外链999!wailian999！

[Q76] 按天统计
来源：http://www.xuanzx.com/163memeyiqh.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163xcsppheq.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163tjrnsuwa.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163krupzhtr.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163hiwmitfe.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163lygeunrm.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163lqofxcou.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163uimyqdva.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163shejtqld.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ikosgyae.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ysbnqgqf.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163esgvwflp.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163pyjjmkcz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163ncyttgsu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163mifcllny.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163isyjvnin.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xknvcejp.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lcenqgid.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163fcwegyle.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163ueexmtxk.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163hfgdwjcd.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163uynkkomz.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163etwsiaxx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163rcqzitnr.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ctbuvsqk.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163icvtzvrk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163luclqsmg.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163lvwumnao.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163knadatop.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163euhpdsyu.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163eycebtwn.html

================================================================================
来源：http://www.sxryk.cn/163dphuxkba.html

R. Bash 专题
来源：http://www.aibaodan.cn/163aebtidhr.html

================================================================================
来源：http://www.sxryk.cn/163khjsdexy.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ulbkdbkj.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163vtfeccin.html

set -euo pipefail
来源：http://www.sxryk.cn/163yhgzropo.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163swpchtka.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163zgpygjkc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163hdmnucfl.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163twgbbrqb.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163lsheikbc.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163dbymdxqp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163mehyvlfu.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ghfgfczv.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163fhjnnbbb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163buzkqydp.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xigornmo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nwdolxgw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163qjwbbuwl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163vopfjwcf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163obqypjrb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163avkdrena.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ahiezgee.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163juhonnzs.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zzhjcove.html

case "$1" in
来源：http://www.sxryk.cn/163bzgvruoo.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163haynurah.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163gjipneic.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163jkotqrnm.html

esac
来源：http://www.sxryk.cn/163ogiiknmj.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163vtelkfxw.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163tsjsdrzs.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163wxqbbyck.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163nvwaqsgq.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163kafdoygk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163dmcwoyvm.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163uicmncnq.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163bwtvwghu.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pemtbyjp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163ikbzrpnb.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163spcutcey.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ycanezfc.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qhjslcjx.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mcxrlajy.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163scjztcxt.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ncsxpfml.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163buormglk.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nsmudiyy.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163vqzyvjwz.html

echo "${#s}"
来源：http://www.sxryk.cn/163kelicdxc.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163crlrnpxn.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163rteorkpg.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163xnrorldr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163cuixiyun.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163agkvftpf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163csppejxn.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vziaccmq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163fvdybwpu.html

[R26] 命令替换
来源：http://www.sxryk.cn/163xrarjouf.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163qgyrguqs.html

[R27] 算术展开
来源：http://www.xuanzx.com/163iuwvgevf.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tosdkclc.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163upytsfqw.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163joaljoru.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163fyydjvfg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ofosirtk.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163huddmprt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163leziwpvv.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163eolxulgk.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163kaauqsuk.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163lahwfsku.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lunffavh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163vvyplofu.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ithitmqp.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163kbowgynt.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163pejrlfii.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ezfigobc.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163bgcbjtiw.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163yrrchphc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163zlxzsaxs.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ovocmzrt.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163mrffylyq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163wlyroguu.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163zhyugsvs.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163iignxdla.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163pcslcsrc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163fqzxgeol.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xirnhzmn.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163mbeixwhn.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163ddioblaj.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163yrfiqxag.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jxsiqgnh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163vefdjbpb.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163guxwqrhn.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163vahhaywv.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163odzuarco.html

[R45] 批量删除
来源：http://www.xuanzx.com/163gqhglnce.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163zcgodzyi.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163slrzyvdb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163ftpahwkh.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163gkkokcgc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163klxucyxz.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163oeermnys.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hxsisljs.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163skreuiic.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163rnyrsfiv.html

[R50] awk 求和
来源：http://www.xuanzx.com/163fatjqhvi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163eqownqel.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163mfdoshur.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163wjfswafp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ecvvfsek.html

wc -l a.txt
来源：http://www.sxryk.cn/163gihairvq.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163bezeldho.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xuaaodvp.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163qnmreyyl.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163kidamioa.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xerixeok.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ouxtkuyh.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163lhaycjvr.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163eyiyrnpv.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163jvfrjjeu.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163xnqzwyol.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163izeiaqcw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163msqssixb.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163imihwtgo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163aeobkxbi.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163pjppgyrm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163znskmlxh.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163rcoevgok.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163ftatzjfz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163qzlesfhx.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tosfqqqm.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ylglrfxj.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mgmzwnjt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ynaidqtk.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163tinjqyjv.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163jiscbjal.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163tduwmlkw.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163vohfcygz.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rjerstkq.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163gqfroewn.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163ugqytasx.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163qpdubjph.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163fodwnvan.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mdwhmvzm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163iganlpae.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163fcpwqjbu.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163lwxiuhym.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rpwbovuf.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163bsuvosur.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163ltqjbdkx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163ymrcxzbh.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163wxuwpkeg.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163alyhwlqz.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163rusktjel.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163fjsslctt.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163sbiyvdyd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163xyxcmebo.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163fzdeuepm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163nxntumas.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163jbdrvaak.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kaxwffwa.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kdjoytbd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163xwhnnxer.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dbcimzmg.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163ozekhlaa.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163kojtmsze.html

time ./run.sh
来源：http://www.aibaodan.cn/163cdjcbqhu.html

================================================================================
来源：http://www.aibaodan.cn/163dgbwxnqn.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163uubynrmz.html

================================================================================
来源：http://www.sxryk.cn/163yoclpozl.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163jrlholpl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163urpuiroo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163cvdqulfa.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163ibffevji.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163mmrouzdk.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163fzgivakk.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163xeqdnxtw.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163lxnhzeiw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163xqlsihzd.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163mnadjpvl.html

strlen(s)
来源：http://www.sxryk.cn/163uvephvne.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mhjaffpw.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tcqcubbp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163wpjuqoba.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163scowmxgj.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163hnmoegwu.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163tzljhaby.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163guytspah.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163eqldcmgu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163kjqkdbew.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163egxjxllz.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dfzywgsc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163efaifpog.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bsupxmpi.html

fclose(f);
来源：http://www.xuanzx.com/163jraekpwf.html

[S12] C：写文件
来源：http://www.sxryk.cn/163mqsqenbi.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163xnyswdvt.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163gpqultkz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163yntuymzt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163grybpvqf.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xtvgfvxd.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163ufkhrndr.html

(double) a / b
来源：http://www.aibaodan.cn/163snsybbzl.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163bvopqhjt.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163nbmqjtwo.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163pnzgrhek.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163btlawoxf.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163luktruwi.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163aaqeslqu.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163csjmrgaz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163kpeqrfsw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163jxzjvufn.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163jzljbbdr.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163ocnrlscs.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163emzwcokv.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163kteknqgm.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163mkzgpisk.html

[S23] C：随机数
来源：http://www.xuanzx.com/163vcuimurd.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163algxhvlq.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163gqaioidb.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163ylihvbqd.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163mxtcqfdz.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163avktmhvk.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163pfofqkco.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163yfjsgtvw.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163mqxmpemu.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163eviajnyc.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163cbgnnjao.html

static int counter = 0;
来源：http://www.sxryk.cn/163mxdfjdjo.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163etutxiwf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163fcdhoqij.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163lmvkfhvg.html

#ifndef X_H
来源：http://www.sxryk.cn/163gvuyfmml.html

#define X_H
来源：http://www.xuanzx.com/163bajawuhf.html

#endif
来源：http://www.xuanzx.com/163kutylffa.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163hxeubejs.html

#include <iostream>
来源：http://www.xuanzx.com/163xneggzei.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163facbqcmi.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163uahyztqm.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163yhsvfbsy.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163bmgvhoeo.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163bbvzotpa.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163udkppdfr.html

for (auto &x : v) { std::cout << x; }
来源：http://www.xuanzx.com/163fzqcnbjl.html

[S35] C++：map
来源：http://www.sxryk.cn/163qxyaezxv.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163xpevolaf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163bnggpfnc.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163cpyopbma.html

[S37] C++：set
来源：http://www.xuanzx.com/163cznzydld.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wqqqoswb.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ktqzvure.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163pbkyzzvy.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163sttghkqq.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163yqjfiykt.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163jnieyupn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ooxrengj.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163zzpohgce.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163mujxtsul.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wwfbvahg.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163tccymzfr.html

[S43] C++：智能指针
来源：http://www.sxryk.cn/163hzikvfme.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163ttsswrln.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163roflgiay.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163ubqizaxp.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163jblqzrsj.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163xiqjbvas.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163jxgtymmf.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163etfovamo.html


<!-- 参考信息 -->
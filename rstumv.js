外链999!wailian999！

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163wobawjdm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hccnuruc.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163nxqqkhdk.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163dknylyzl.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ninrcbpz.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163cawnvkiv.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163dejzdgoi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lfmncdot.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163ljahtyfe.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163gwfnmdpf.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163yqesxqwo.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163vjnbkemo.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163evcaixje.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163rlavgeum.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163zoisccrs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163amvigyye.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jliyimpx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163defdzcni.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163eouuboss.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163sieduliq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kexxobbm.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163hnbsfdaj.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mloqocho.html

================================================================================
来源：http://www.xuanzx.com/163mjmuadyc.html

R. Bash 专题
来源：http://www.sxryk.cn/163nvhesrll.html

================================================================================
来源：http://www.sxryk.cn/163mbdhiown.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163lpjdegna.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163pycrnezx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zypsgcwb.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jrljrbeg.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163rkrxxvod.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ettpmqki.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zxjsxnqs.html

[R04] 位置参数
来源：http://www.xuanzx.com/163gicjpgiy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163wzvmcmcp.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163puditqkr.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163shfjkqkt.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163pbopmsgt.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ylcptwco.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163pdcnjxnd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163lcqueuqc.html

[R08] 数值比较
来源：http://www.sxryk.cn/163tdjpzflt.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163nsepzpxa.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nlhcmsvx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163wtbipmcw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tdvlswvp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163dijcbxev.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tjpixmxw.html

case "$1" in
来源：http://www.sxryk.cn/163bayjvwfe.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163gouvvmqn.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163suaapykg.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163iqqxbafr.html

esac
来源：http://www.sxryk.cn/163bsvjtvfv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163kswsyjoc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163adjeldpt.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163kedkqije.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163wwegahoa.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163scwqctfz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gwsqaiud.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163icgepprr.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jfviyzdr.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163srhtpneb.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163xcqvkscl.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vmpnqebe.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uqnbwrbc.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163euqyrenc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163iwzroykn.html

[R19] 数组长度
来源：http://www.xuanzx.com/163oquolavz.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163ojicdpta.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163wplyuhbh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163jzkgakod.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163wutslxrv.html

echo "${#s}"
来源：http://www.aibaodan.cn/163icfvgbob.html

[R22] 截取子串
来源：http://www.xuanzx.com/163ttaouhta.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163kfkrvwxj.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163kroxxuib.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163fxkfkhjo.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163icihzbyt.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163ebmiubha.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zpvfxueu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163bzermody.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jqewomns.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163fxlnkfmr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163quzbvoaf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ucwuiyvy.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163icjyzsui.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163ujorpwzc.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163saqnyyeq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163qfkgmgtn.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rdwwpbsk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163vsrllxdt.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bcmkptpb.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163yawjekvl.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163krlaabfk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163etkwatku.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163yaedgaxx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163tbruvyad.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163nlhdwnku.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163jelnmfrk.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ixfbrqkl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163lmxyfsne.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163dloilhjq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163jezfviwe.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163chjitlok.html

files=$(ls -1)
来源：http://www.xuanzx.com/163telihphg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163vhnfyxnt.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163tnyegunq.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163rwblyybb.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pyxjkhwr.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163ssdbdlyp.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163uvpfeppx.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163aznkedrp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163rnybjsph.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163dlxwtvxg.html

wc -l < a.txt
来源：http://www.xuanzx.com/163iuoqhgeh.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ubjzxalo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163kozlpqtv.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163qklkinpb.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163khaupizd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163zzjlktyy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163ciyspigz.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163nejffbfr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163bkzndumw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163lfpicrhr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163fuaivqka.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163guwqmnju.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hlvlhmar.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163wowpwvgh.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163eglbgexa.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163vibenuuq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163keqpzjvx.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163lqcxruji.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163vvytjuzk.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qghwbakz.html

wc -l a.txt
来源：http://www.sxryk.cn/163wpicosau.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163gnrckkjq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163amnywsfl.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163irxqkjyt.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163htdkoebv.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163wqwogqwj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163oulgrzxn.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163gnvfjzeh.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163nfmjxjem.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163whuhzfmr.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163iyxscvzn.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163dvsnkidn.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wqszjite.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fzgkpsvd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163ihdyazfz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ytkzwqfn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163axlnxdmi.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xzfxlxmf.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163alnnhkao.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163gcrjzyzp.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163wkzypqfh.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nkilxote.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163sqeozwuv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163bbirfiqh.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bbhypkvz.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163tyaakino.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163qrtbbjbl.html

[R66] 定时任务
来源：http://www.xuanzx.com/163iiagpfmb.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163twfodqwe.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163rhkxqzrs.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163joibkbuw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163ecncddck.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163pcbnclot.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zyozagmf.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163liytuxap.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ehofkekm.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jkfwkjwy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rfxxbnle.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163eqtztcrc.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163ualngeyv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163lwhygcku.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163jvrfypon.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163habqwfer.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dqftscup.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163okhfxbzo.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163whzqsxrd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163dnwpmrbv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163oogilwue.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ygoarrmi.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163lpudzeyx.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163llgpkxrp.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163enstfuzo.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163edwecmre.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163mgvagrfo.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163xdpwljlq.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vrdufohg.html

time ./run.sh
来源：http://www.aibaodan.cn/163ifyntlex.html

================================================================================
来源：http://www.sxryk.cn/163uxwmdwnd.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163fnhmkave.html

================================================================================
来源：http://www.xuanzx.com/163xkzhsvbb.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ayxsvucm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163kxrlysed.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163iqaajjxw.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163prjtfguw.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163xzyxlljf.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163bmfocemy.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163zrgsmmjg.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163bwbwlokk.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163dowzbivd.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163yewkrfmm.html

strlen(s)
来源：http://www.sxryk.cn/163qeglmewb.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163psbmssfs.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xxhspjbw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163qpqmrcev.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163nsnjqnab.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163lrbqywgg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163toixbmpm.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mnweekio.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163zdrpmkzu.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163amndpvze.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163rvrkyrbx.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163vvwdltgn.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163hcsjovwr.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vynrqbxr.html

fclose(f);
来源：http://www.aibaodan.cn/163dflroeel.html

[S12] C：写文件
来源：http://www.xuanzx.com/163bhnuhark.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163krzhukpa.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163nsazgdwk.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163moepqqne.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ehfluuex.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163vyfnymuz.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163xxvkodqx.html

(double) a / b
来源：http://www.xuanzx.com/163ehihfcta.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163dccxmfyq.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163vhyfbfmu.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163rjqenswh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163esbdbpcb.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163mcyrsgsx.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fpfqzdhs.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163zisxstuq.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ucyehsds.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163iqpiffaq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163pxujresf.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163fznijqtg.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163qekxbbmi.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163oepbpsad.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163wdtjscqw.html

[S23] C：随机数
来源：http://www.sxryk.cn/163dapeahfw.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163vliluafg.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163xyjamdmm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163xfzellhr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163soperxtb.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163qatdiwkp.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163sbuiboeu.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ndwmjjwx.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163jfikjtrc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163eeonpgcn.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163nicmnlqx.html

static int counter = 0;
来源：http://www.sxryk.cn/163zonhqrqk.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163nbymziyz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163khricnjg.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163ywsentyn.html

#ifndef X_H
来源：http://www.aibaodan.cn/163voolupwr.html

#define X_H
来源：http://www.xuanzx.com/163jccgagsu.html

#endif
来源：http://www.xuanzx.com/163vsyrykkl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163nbtwafag.html

#include <iostream>
来源：http://www.aibaodan.cn/163xkjphqzq.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qfyrprpw.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163takwulsk.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163bexyvtdz.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163alhcksdz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163rtzkexvp.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163fldorauw.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163opwdmcei.html

[S35] C++：map
来源：http://www.aibaodan.cn/163rkucxmiy.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163kmkbywqj.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163offfdbxz.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163elphcxsd.html

[S37] C++：set
来源：http://www.aibaodan.cn/163oetsvcck.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163rpkuvgyz.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163fgrwjmft.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163ozzrolkv.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163mlukrpmk.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163jsbbvoir.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163oikvsbuu.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163odttuqgs.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163fgkhcsaj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163foyhipps.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163cfgpzqfv.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163cyncytqd.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163jkydzhnw.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163nptcdaom.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163fevermne.html

void inc(int &x) { ++x; }
来源：http://www.sxryk.cn/163mpboolhe.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163rucwoqsu.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163ufbuxlrj.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163onvfhtwe.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163vcrewmpk.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ogntqgtr.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163dmlaygtx.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163ouzoqkrj.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163kceburmh.html

while (std::getline(in, line)) { }
来源：http://www.xuanzx.com/163ptdtiyvg.html

[S49] C++：写文件
来源：http://www.sxryk.cn/163immokreh.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.sxryk.cn/163pufsczoa.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163ejamyhek.html


<!-- 参考信息 -->
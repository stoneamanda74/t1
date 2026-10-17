外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163gqjvzhyd.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163iepimgrg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163nzzzclou.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163jtogywoi.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163wazrocgv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163sbjwdedw.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163kvafcjku.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163ixqvexrs.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163hllnxcth.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163lfwidqaw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163peflcvko.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163azqjvzld.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163lbwytjuq.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163kydaamil.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163hsfwjfia.html

================================================================================
来源：http://www.aibaodan.cn/163muyulrjv.html

R. Bash 专题
来源：http://www.sxryk.cn/163hyyoanqa.html

================================================================================
来源：http://www.sxryk.cn/163sawrvtqi.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163cxqutlck.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gtamxbzw.html

set -euo pipefail
来源：http://www.sxryk.cn/163vhbscnba.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163keqkphgc.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163qllnttmg.html

[R03] 只读变量
来源：http://www.xuanzx.com/163phehvxzr.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163nguttkwe.html

[R04] 位置参数
来源：http://www.xuanzx.com/163ujqwbayw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rhaseada.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163aoywuvww.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163zkzwzfsp.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163idgedwdu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dmsadeop.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163rzjqmssb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163tjrrayzl.html

[R08] 数值比较
来源：http://www.xuanzx.com/163brzycgva.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163gwpykgte.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163ooykygxp.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vetuchsy.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163acswdzmp.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163uoxbaolt.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163cywvivys.html

case "$1" in
来源：http://www.aibaodan.cn/163tatdpbyn.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163fonfhtwz.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163zugygbhk.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163jeohkdzx.html

esac
来源：http://www.sxryk.cn/163mfeyqvdb.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163csxsjisr.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163tagnygcd.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nvpxjufs.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163tvkswxwf.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163akgfehba.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qoostuax.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163sqdrisar.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163qxttmqdd.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163qpdwutbr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ycizjznb.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163obbulosg.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163izvpmkox.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ntsrkrjh.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163xiswrkry.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ddsfrnzl.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163qgpigogh.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163wdetafri.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163wczrjojp.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163tyiopymu.html

echo "${#s}"
来源：http://www.xuanzx.com/163zlouzbpa.html

[R22] 截取子串
来源：http://www.sxryk.cn/163vwulucwi.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163cfycleft.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163naqdoqcz.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163hogtysnz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163avfwtjcu.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163cxrjayuu.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163dzbtwhqj.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163dmxdnfbz.html

[R26] 命令替换
来源：http://www.sxryk.cn/163iprjpxtq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163cjbwyiff.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lhtgxvei.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163evxljudh.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163hoskimsx.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163wupugwfa.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kkgbgvqb.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yyfhfaac.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163srwgvqtq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163npjnydbj.html

[R31] 局部变量
来源：http://www.xuanzx.com/163alihguoe.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163stgjajeh.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163cksmazlu.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163uxggvcnh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163wiymfzzk.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163sixaztfr.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qixwfmej.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163aubgpcdr.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163idnujseu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163padlzxrz.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163afrjolmc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163qjrhncnb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tigvdyod.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163affklglt.html

[R38] 管道串联
来源：http://www.sxryk.cn/163hevzobfz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163ybbfetaw.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163kqqekcdf.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nbzwcrre.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wciufmaa.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qfbzfcrm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163fchmudxv.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163yxtitgxt.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163cervkguf.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163iugbcssr.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163gqkkxrwu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163tonuyxec.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163vbhpwcui.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163udyjqjzi.html

[R45] 批量删除
来源：http://www.xuanzx.com/163rrenuluh.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163plnkmhee.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163izkacemo.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163wqzrbbbb.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tzowmogm.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163neuqzajg.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163rdvmkqqh.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163ohfayfmq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163cizoweky.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163gxsazpzu.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163bdazlgzk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163tbdihtcd.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163qucxfyty.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163zzqbnthv.html

[R52] 统计行数
来源：http://www.sxryk.cn/163rnoevxiz.html

wc -l a.txt
来源：http://www.xuanzx.com/163nyzocgxs.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163katxmqxi.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163wbttcqnd.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163cynxzmnl.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163trojybii.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163acowudqc.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163pquxkzad.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163rxpboogj.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163jlxddxrc.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163mewmchag.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163qdkwixkt.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163pzzbepag.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mhptmsid.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ncawxkkq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163deaqtjun.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163zlirgowz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163dzblgdbo.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163hyygcbjr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163exjplgij.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163osshqzzr.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tkjdghlf.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ctyrjayg.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wvzoulip.html

[R64] 结束进程
来源：http://www.sxryk.cn/163scsvlgky.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jeqbcjam.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163mdnipxar.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163dnfdyomq.html

[R66] 定时任务
来源：http://www.xuanzx.com/163imnurheg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163atpddiue.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163tiqomcxq.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163gwsqgmuj.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163qtllobhl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163cgutcpln.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163oterdini.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163dqajdpug.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163wthfnokx.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163kkkjotox.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hrvvnxon.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163vfzrtnyj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163lxvxxqaw.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163pmbozygi.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163nsvszsum.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163blszrpjl.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163buibqzjv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163dsvxvyzh.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163xrggrlfe.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163qocogjyz.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163bpdzxhmg.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163ggexrvhd.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163myijysmz.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163wqvlqmor.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ubjaixqe.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163sfazhuoh.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zeckaggp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163scxeriev.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163jdnlrlnc.html

time ./run.sh
来源：http://www.sxryk.cn/163yaylloyc.html

================================================================================
来源：http://www.aibaodan.cn/163covfxadj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163eohwhcde.html

================================================================================
来源：http://www.sxryk.cn/163ughfvbau.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163zjhcsxbq.html

#include <stdio.h>
来源：http://www.sxryk.cn/163zwqlowit.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qasppquh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163sezyctfk.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163afhlkbuw.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ggutnymv.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163fwrztmgl.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163xppjbjqr.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nhlbasze.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163kvvdnwjc.html

strlen(s)
来源：http://www.xuanzx.com/163dkarsono.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163nvntbaoj.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163rkkmrmpo.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163yotcpugk.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163yphnrssd.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163prjxbmdc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163rytuotsp.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163rjdnvgad.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163yssuwnqg.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163uidaeamf.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163oqenodbs.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163zqnznany.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163ftbryiho.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ymeutplr.html

fclose(f);
来源：http://www.xuanzx.com/163ydrnosat.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163iigjxqxp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.sxryk.cn/163jjzledcf.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163hapkqewu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163ielmqsmj.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163nylryihb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163giwugcsk.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bxmcogjg.html

(double) a / b
来源：http://www.aibaodan.cn/163tuylnybn.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163mflzafae.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163hfivipha.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163izayvesh.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163tivzbxje.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163bmimeseq.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ffxeirsb.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163gtjmyrzt.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163jrypomag.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163fmdxrrnm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ncbvdzwl.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163cibuthfn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163svkdohvu.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163ugzdhapr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163repupcha.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163mdicsclc.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163jmahhlsa.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163xvpvmgrk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163mzqilxos.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163mppfnqba.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163phvewopg.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163caxccgpy.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ggbrwskx.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163ldmygbdg.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ugryyhur.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163wpjxyksd.html

static int counter = 0;
来源：http://www.sxryk.cn/163dqofmmur.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163xtbimvnt.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163scwazzmu.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163fqjdfuaq.html

#ifndef X_H
来源：http://www.aibaodan.cn/163dlajnmpj.html

#define X_H
来源：http://www.sxryk.cn/163oxwhmiji.html

#endif
来源：http://www.xuanzx.com/163znoovrgy.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163bdubaala.html

#include <iostream>
来源：http://www.xuanzx.com/163sndwwrrz.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ojtstzay.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163tivjxpcm.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163lwjewwuu.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163qprhbdlp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163bykqtcxr.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163znkhenzz.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163cwycbsvx.html

[S35] C++：map
来源：http://www.xuanzx.com/163sclzpjfq.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163diiuuumh.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163odhiwkzp.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163nwqzsbem.html

[S37] C++：set
来源：http://www.sxryk.cn/163jncvtdjz.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163xrgkikox.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163dfdqhlnd.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163mbktiped.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163mfehvkwy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163duujamgy.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163ujdwoedf.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ytmdcpet.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163wivcurzj.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163puvdccui.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163bdtuzpgb.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163mmwyeokl.html

[S43] C++：智能指针
来源：http://www.aibaodan.cn/163buqnkyzh.html

auto p = std::make_unique<int>(5);
来源：http://www.xuanzx.com/163klszngcs.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163fedfgfdj.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163vwydtmib.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163kosfmqoh.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163bbjufjlh.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163rshtltua.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163ehpdjnkq.html

[S47] C++：结构化绑定遍历
来源：http://www.sxryk.cn/163ddkpihll.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.aibaodan.cn/163igjlijkv.html

[S48] C++：逐行读文件
来源：http://www.aibaodan.cn/163oxyshtcy.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ypdctvvh.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163ykgxwopq.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163ppxwyaza.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163icmpwvgx.html

[S50] C++：格式化数字
来源：http://www.aibaodan.cn/163mqvfluum.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163gdkmlgbm.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163qdjeeogm.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163wvvywpub.html

[S52] C++：const 与 noexcept
来源：http://www.xuanzx.com/163tpwqownm.html

int size() const noexcept { return n_; }
来源：http://www.sxryk.cn/163iweiqfzh.html

[S53] C++：移动语义
来源：http://www.xuanzx.com/163hxdloldt.html

std::vector<int> w = std::move(v);
来源：http://www.aibaodan.cn/163lmarlhpc.html

[S54] C++：异常处理
来源：http://www.aibaodan.cn/163dlsbueei.html


<!-- 参考信息 -->
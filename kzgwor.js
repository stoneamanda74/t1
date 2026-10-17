外链999!wailian999！

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163mqmywhyf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jrajaork.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ofnxwbrb.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163vllfmwyn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163kyczrcnv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163hciahfdq.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163hpfcbuts.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163mkhhnsjj.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ffcefmbv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163rylanbwm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163xdzcpzbt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163liajrgnm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163jdnottic.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ikybykvd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nzfjflpz.html

================================================================================
来源：http://www.sxryk.cn/163xftybqnn.html

R. Bash 专题
来源：http://www.sxryk.cn/163jknvldce.html

================================================================================
来源：http://www.sxryk.cn/163hbvtrqpi.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163lkukqwdr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163wdoxurbh.html

set -euo pipefail
来源：http://www.xuanzx.com/163pzcvomjm.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163appwwrhu.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163vmxorcev.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ykdriich.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bnkpcwah.html

[R04] 位置参数
来源：http://www.sxryk.cn/163enfgpuhg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163kgzupeus.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163eysefgdl.html

name="${1:-default}"
来源：http://www.xuanzx.com/163esobysdx.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163prjcynvh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163qzcfsnro.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163okmcajgb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163alkypeik.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fsebfdof.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163tdvnubtj.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163rmyerlnf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163hanryitz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163zagofiwn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163wrrqlzxn.html

[R11] case 多分支
来源：http://www.xuanzx.com/163pozheqwv.html

case "$1" in
来源：http://www.aibaodan.cn/163dzgvztil.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163daittvsn.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163dikpkhdb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163rwaqpebs.html

esac
来源：http://www.sxryk.cn/163kuqrjnim.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163djyqmhfa.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ynbuzfck.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163lmjyunfw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163gknldtoc.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163vjnfnxlh.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163hrwmuspt.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lohecnds.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163stipzceh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163oycqnmbn.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hfabdtxx.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163llfvcumd.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163zfocdtjm.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xztadrys.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163eeytipjo.html

[R19] 数组长度
来源：http://www.xuanzx.com/163calzhjdx.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163bxzwgegz.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163gfnfdbow.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163uexctswb.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163hzpxcmzz.html

echo "${#s}"
来源：http://www.xuanzx.com/163dbuteiwx.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wpueigst.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163oochsnxl.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163iwoscmfa.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ujiqusrh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163ptwtdnhg.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163evgdcjmr.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163vmkhxxzo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163qnturufm.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jyninzqu.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163qqugvrej.html

[R27] 算术展开
来源：http://www.xuanzx.com/163mnjaotws.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163rjblvtbb.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163iabvtcxb.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163qcevykzd.html

[R29] 定义函数
来源：http://www.xuanzx.com/163cksxvckr.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163yztjjulr.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163taoqqcbc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163mxjdwfbf.html

[R31] 局部变量
来源：http://www.xuanzx.com/163jzyisatt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163mgqakkik.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163nevteppb.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lsywmtbe.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163hhpofpec.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xrwfnnex.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163butyohfh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wmyjyyxs.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163ladftoco.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bgdvhucw.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kccspdik.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163fmgqcqsn.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ubrfroxt.html

files=$(ls -1)
来源：http://www.xuanzx.com/163fylretbk.html

[R38] 管道串联
来源：http://www.xuanzx.com/163fjxjsdut.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163nswquxzq.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163zrawzjss.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163esiukvly.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163gugjbzgj.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163btwjexbp.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163yyslzoms.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fedygjrm.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163uetujndp.html

wc -l < a.txt
来源：http://www.sxryk.cn/163zkfxbkjp.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163tniywkuy.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163pmlaajsl.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163chjvrvgv.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163mkvabfhc.html

[R45] 批量删除
来源：http://www.xuanzx.com/163hpojaxaj.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qhwdxnub.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kigmegkc.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163zpuvomij.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163biitadmy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163afxzmuzi.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163peufxwnb.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bfkliyvu.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163yvwcajsm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163twnenjnt.html

[R50] awk 求和
来源：http://www.sxryk.cn/163rpiiwbvj.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163hysonply.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bgbqmygn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163byjvrxht.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163elifrzrc.html

wc -l a.txt
来源：http://www.xuanzx.com/163hxtnhvwn.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163whpbtwjg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lhuvvras.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163lqqmokpn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163yvkalsvq.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163qulmohif.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163gcksjoxz.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163wfsjmxbo.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163rnaoxwup.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163bkqvctaf.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163xaqephqn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163akooofzi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163kvxkzftz.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163xqaactas.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163iqqlqfrs.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163nrbaagrw.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163bgjeywym.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163sxuspjix.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163aiemhuka.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163kgwrusee.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163qsaltnks.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ltvkohxz.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163wrwmhnhc.html

[R64] 结束进程
来源：http://www.sxryk.cn/163wwmiljhd.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163dxnywuur.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163cjlvibkz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163svxeqwzu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163waoifats.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163oufqjwzw.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163fzolaqmz.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bvkcwztj.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fmjkacmy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163jzhqrshc.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163koqinotk.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163orepscxm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163xosmxzou.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163tfrismvr.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ssbysauc.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163sgrygmxi.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163msxidvam.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bhtimgqo.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163ussrpmvt.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163lpfnkdyf.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163qulqxucw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163kraeuhdc.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163qtaicpdn.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163yfundwhb.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163wiesncez.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163wyplflcf.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163rcxczoaq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163xulcgygj.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163bgdjqsds.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163wsatitpd.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163grdbvixi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163dsnsumhb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163rushobxn.html

time ./run.sh
来源：http://www.xuanzx.com/163pirpxosc.html

================================================================================
来源：http://www.sxryk.cn/163edhnhcko.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163eezrllgl.html

================================================================================
来源：http://www.sxryk.cn/163rrlkdvfn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xxsfyypm.html

#include <stdio.h>
来源：http://www.xuanzx.com/163diuyxfqn.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163fjovwmtq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163otoqjgup.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163yteyogng.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163hckuptfn.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163xlclsjqd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163jjnwwpcb.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163qqiplgto.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163sagcinlo.html

strlen(s)
来源：http://www.sxryk.cn/163ykxifqjz.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163mcorlfuy.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163pyzakvov.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163lfmprrwp.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163acrdjjhg.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163batwyyoi.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163ldvcwscp.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163pytwkzjf.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ifsqsmsj.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163llgcvyrp.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vfjzhfnl.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163ljpojxoz.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163rbfwffip.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163vlpyttbb.html

fclose(f);
来源：http://www.xuanzx.com/163cmnsgedj.html

[S12] C：写文件
来源：http://www.sxryk.cn/163hgwbswkd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163bykibbdi.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163mwjofrmv.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163heyfblqm.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163pixnwcnv.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163oflsdzzo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163arxbyyxv.html

(double) a / b
来源：http://www.sxryk.cn/163xfkmharv.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163jrvuyujj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163skwqdbjw.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163aumgzxpw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163qraknswn.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163wbfqxpof.html

int main(int argc, char **argv)
来源：http://www.xuanzx.com/163ebpgqmpt.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163fnbftcos.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163zvgedpxf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163fdcgprpg.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gdhvmnjk.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163iuoocrtw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163bywtdizl.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163zeamuzph.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163egrepsmj.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163cxxkaxik.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163cupmpzrz.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163tiumptiw.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163nyqtslgi.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ayyunsep.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ohrtukev.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163wypdxbqv.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ziccbjoi.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163ekmgpoih.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163douzgnya.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163owiqwblc.html

static int counter = 0;
来源：http://www.aibaodan.cn/163tztredxe.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163twnysjvj.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163nkhizdtv.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163cipjyfav.html

#ifndef X_H
来源：http://www.xuanzx.com/163xalwpfie.html

#define X_H
来源：http://www.aibaodan.cn/163wlaiujln.html

#endif
来源：http://www.sxryk.cn/163ljjutpoj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163wilydpad.html

#include <iostream>
来源：http://www.sxryk.cn/163jjktwsig.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163qmoxtcig.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163ekfelxiv.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163yjnpekki.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163cxhixilp.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.sxryk.cn/163ljcclyrc.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163qtxflbun.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163pdlhlbff.html

[S35] C++：map
来源：http://www.xuanzx.com/163wtdqdszw.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163tgtmecqx.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xfgjgrvb.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163edcgkstv.html

[S37] C++：set
来源：http://www.xuanzx.com/163whwhmzoo.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163wjgwoyif.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ejyvvkqa.html

std::sort(v.begin(), v.end());
来源：http://www.xuanzx.com/163igcimbqr.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163bcahkprj.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.aibaodan.cn/163aqsyhara.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163nqgsvfoa.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163nynmbmzb.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163oweavhsa.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163crvpeqpl.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163wzioyzsb.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163jwlbtbhj.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163sdqeshzy.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163adlvhned.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163hgodipgv.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163mmlfpzoi.html

[S45] C++：lambda
来源：http://www.aibaodan.cn/163homwwqcp.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.aibaodan.cn/163ybmtlaqo.html

[S46] C++：函数模板
来源：http://www.xuanzx.com/163quzpdfsv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.xuanzx.com/163ttinsjyw.html

[S47] C++：结构化绑定遍历
来源：http://www.xuanzx.com/163bsniavud.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163zhhqhqhf.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163ftrgykxw.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.aibaodan.cn/163ccvshfoc.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163xfoevrad.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xeoexqsk.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163hezzhnhb.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163cwpbxkfq.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.aibaodan.cn/163mzkezldz.html

[S51] C++：显式类型转换
来源：http://www.aibaodan.cn/163hdgqzdhq.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163mflehvec.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163flabruuj.html

int size() const noexcept { return n_; }
来源：http://www.aibaodan.cn/163ommvxmqd.html

[S53] C++：移动语义
来源：http://www.aibaodan.cn/163vtdlrvja.html

std::vector<int> w = std::move(v);
来源：http://www.xuanzx.com/163mbxcqpoi.html

[S54] C++：异常处理
来源：http://www.xuanzx.com/163mjammvlg.html


<!-- 参考信息 -->
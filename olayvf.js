外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163fajscdtb.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163pxdtwsmz.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163yjsxvsqr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163uloirvgg.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163lgsoclew.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163erqcyfht.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163dhwhmveq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163dxrsotdw.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163akvupvgu.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163nuvhqnpu.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163xybakedk.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163zfephhrp.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163rnnnncxu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163pexzmnea.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ejquwhay.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163cfxjgpwa.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163vsiyfspe.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lpgzghba.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163ubjsiqgf.html

================================================================================
来源：http://www.sxryk.cn/163ppzbscon.html

R. Bash 专题
来源：http://www.aibaodan.cn/163jmbhkvim.html

================================================================================
来源：http://www.aibaodan.cn/163duxqetft.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163zdzglzqk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163urbwpkpl.html

set -euo pipefail
来源：http://www.aibaodan.cn/163lpchqcxp.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163hohxupma.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163fdogfacx.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mjxwrfin.html

readonly PI=3.14
来源：http://www.sxryk.cn/163mneyctgl.html

[R04] 位置参数
来源：http://www.xuanzx.com/163awusxnmq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jppntcpc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163mmutmdrz.html

name="${1:-default}"
来源：http://www.sxryk.cn/163wouyzyvg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163spgaoqwl.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163tyikspxa.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163xuvfkafn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163vfcusczj.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163fkkzrade.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163hvsgofdh.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163rwlbyclu.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hfhanvnd.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163uawpxeaf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163cnlsfkjg.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163tausqhzx.html

case "$1" in
来源：http://www.sxryk.cn/163wysextuc.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163xxwjmdrs.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163epbvsugl.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xtxcdsst.html

esac
来源：http://www.sxryk.cn/163cmegvaaq.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163dcsrerfl.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163aqxcvsnn.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163lsxqidus.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163zzeutwva.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163muygrojv.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163pojyikcc.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163kowgjxyz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163oxbfbhsv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163nffcekon.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163xowmiwtx.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163ydsuahrx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163vmjznqgl.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163hempobxg.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163urokbcrv.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qkkjlkox.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163glpgurmq.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163sxhzyekq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163erkhgtor.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163iovbpkdd.html

echo "${#s}"
来源：http://www.aibaodan.cn/163goqgtgga.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ihijskun.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163igcethop.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163izmauosk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163obmdimqi.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163jidomgtf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163nheogikz.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163haazlbqz.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163kyfnewed.html

[R26] 命令替换
来源：http://www.xuanzx.com/163ntgswucz.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163fuedddgq.html

[R27] 算术展开
来源：http://www.sxryk.cn/163yqpksoyf.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163rnyagmad.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163hgkxvmte.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163cmlgkrnk.html

[R29] 定义函数
来源：http://www.xuanzx.com/163sgmoogrp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163xpxexqkw.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163xsixnjun.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163qgvllibn.html

[R31] 局部变量
来源：http://www.sxryk.cn/163zcagrzkq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163fmzmgbse.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163gitdvfif.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163plyxinwh.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ktthflef.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163bjvqcwrd.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163zeltqgkp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163zymeszls.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163rknldxow.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163biymqcdp.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163fkfqsqjk.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163lxjwfpdl.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163qfypdcka.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163fryfsgam.html

[R38] 管道串联
来源：http://www.xuanzx.com/163iwzzkunw.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dvukkdal.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163prgjviyh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163cnnfnroj.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163juozeigz.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163qwubjeuu.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163znsyvuow.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163ohnvomyv.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163ttzfuggi.html

wc -l < a.txt
来源：http://www.sxryk.cn/163idvxnerw.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163twqbdnjy.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163mdhvrgbu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163sanhxvfl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fkjmbcdw.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xiesqxxl.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163epukyrds.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163tofsantu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ztnbsdvg.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163imfdyxfy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163ryylbhec.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163ulmgerie.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163fxtjvcax.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163arugiyyk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163zfcggksq.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163syxrwlta.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fpavysyj.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163dsralwsa.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163aqkssvrm.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jiadysua.html

wc -l a.txt
来源：http://www.sxryk.cn/163jitskpbr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163znfrhnwn.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ztjewdne.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163gnupxcbw.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163myyoqnlz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ykqkozjk.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163flfhprlp.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163oknbqqse.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163imthxxoo.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163liaaivnf.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vvqillic.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163fbvpafrb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163ysyajxxf.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163nnojstap.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163jfdgkblx.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163cixgmasr.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163xnuoukmi.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163gvxegncr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163mzqfubib.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163gxdfwatn.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163frvnfuoj.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163vsrzxktj.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qluvgjkf.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163ebjdeefb.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163dsiwpoxs.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163tsnvajoo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163ctumdjsx.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163aghtmnre.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163ugaswqnr.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163uegmsfaa.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gkqwiicf.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163brunnksz.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163viylogux.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163anjbwhar.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163htuigfws.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163lmgffqij.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rdqlirup.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163rqsmhshk.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163laicjesx.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163rdxbeala.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163cfvvsfhb.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163xeawvzxe.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163eynbbnbi.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163msutohwc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ctmfqpwe.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163srnpmpyh.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163flivrwmk.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163mpjlqhms.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vigqthle.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163oxzioefz.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ymhjvozu.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163qldkxlaf.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163zowgaibn.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163ijhgsbur.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vdiqjgvl.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163nwbkvhch.html

time ./run.sh
来源：http://www.xuanzx.com/163tgpyudxo.html

================================================================================
来源：http://www.aibaodan.cn/163kmteempv.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163uovsyuxo.html

================================================================================
来源：http://www.xuanzx.com/163ozvwlobp.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163gqbszcfe.html

#include <stdio.h>
来源：http://www.sxryk.cn/163pnrayylj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163phixpjzu.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163aunvhbsb.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163lgfjmlwh.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163lgvwzzih.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163ipporfpd.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163nbbhctxf.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163jrefvihu.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163hmjxcnqy.html

strlen(s)
来源：http://www.xuanzx.com/163zocawnuw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163cwkiuhew.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163gkiwwowi.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163cckmfxin.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163pawvfvoh.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163obewqylq.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163deqwvugf.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163aujygyee.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163hulggbvh.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163nboxcuxz.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163umpsxuae.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163wclrkuad.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163qwwkglik.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xtpaltof.html

fclose(f);
来源：http://www.aibaodan.cn/163dxchrbcr.html

[S12] C：写文件
来源：http://www.xuanzx.com/163knuhncwv.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163rvxfrewp.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163vgmexxhj.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163tbvcjyig.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rmphstbl.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163hfmrckzo.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163xovqwqlp.html

(double) a / b
来源：http://www.sxryk.cn/163ecgraghc.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163doegzalw.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163glrulfas.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163odfoygzn.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163heodnggc.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163awukoukg.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163dthsadzg.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163wjrkyizh.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163cqomrtva.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163ypejkizm.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163omuhiqqk.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163pqyutlzy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163mimybwln.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163wedymzuw.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163gqdjhlev.html

[S23] C：随机数
来源：http://www.sxryk.cn/163thrfelgj.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163rccjsone.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163uvnhnnst.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163bgvipmnl.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163esvgqywb.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163ygkohovg.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163talspcxg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163gzkzfxqz.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kyaduyzc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163lzfxxtbo.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163qsmmliwk.html

static int counter = 0;
来源：http://www.aibaodan.cn/163cwtsmvjf.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163pdfwvivb.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163lcpyaqvm.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163uuocwrfc.html

#ifndef X_H
来源：http://www.sxryk.cn/163infcxbze.html

#define X_H
来源：http://www.xuanzx.com/163qacbzlgd.html

#endif
来源：http://www.sxryk.cn/163nbgshcvz.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163jhbynwbj.html

#include <iostream>
来源：http://www.aibaodan.cn/163gnjdidzh.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163jfjdmvmg.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163vhwxassg.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163dsqfaiff.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163kgesoyez.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163mzaoudwa.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kywdugwq.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163qjxsedfg.html

[S35] C++：map
来源：http://www.sxryk.cn/163vgeccsyk.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163okrfsfsf.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163ddsaqspd.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163xhhatlyp.html

[S37] C++：set
来源：http://www.sxryk.cn/163yhpspyhn.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163krroocsb.html

[S38] C++：排序
来源：http://www.xuanzx.com/163rsfrwhnv.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163aemmgyfu.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163kuodfqzy.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163apkvsaek.html

[S40] C++：查找元素
来源：http://www.sxryk.cn/163umhezlzo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163txuywwyr.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163idmqngyb.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163lwkqlodq.html

[S42] C++：继承与虚函数
来源：http://www.aibaodan.cn/163ehsynkmz.html

class B : public Base { public: void f() override {} };
来源：http://www.aibaodan.cn/163ossstijm.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163efqazomy.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163vmupqdqh.html

[S44] C++：引用传参
来源：http://www.sxryk.cn/163dxhdwcqw.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163ycogxuod.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163jmxxzaui.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163wnygnmlo.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163cxqgojhv.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163uuiiuywo.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163ncadzpzj.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163epdjwnkc.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163hprdiwcp.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163ilukyyuy.html

while (std::getline(in, line)) { }
来源：http://www.sxryk.cn/163rxethxyy.html

[S49] C++：写文件
来源：http://www.aibaodan.cn/163nddcdhba.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.aibaodan.cn/163lzgcebfi.html

[S50] C++：格式化数字
来源：http://www.xuanzx.com/163oirenxzf.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163wqiqaipj.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163cijvdwnk.html

static_cast<double>(a) / b
来源：http://www.xuanzx.com/163ipfummbd.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163cfuwmaon.html


<!-- 参考信息 -->
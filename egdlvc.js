外链999!wailian999！

[Q78] 当前时间
来源：http://www.sxryk.cn/163ythdugja.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163jyivximp.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dgaiiaij.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163zxufsnmu.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163swpzoebb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163amptkxyt.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163mrknorrq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163oijreheo.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163oxkdtjab.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pafcturu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163urypcxch.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163wrumourp.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163jrjcrhcy.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163yrwxflkg.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163duvrvmxf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163vqflatot.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163wlxixoqs.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163icypufwg.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163fiuysaof.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jtwvkjih.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163qybtucwv.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163smjaekwk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163zkonnicu.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163wxejijdo.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163bpdcyjik.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163rsvgcdvs.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163qhefmsiq.html

================================================================================
来源：http://www.sxryk.cn/163vrrnmaps.html

R. Bash 专题
来源：http://www.xuanzx.com/163nnszgoua.html

================================================================================
来源：http://www.xuanzx.com/163yexwxewd.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163lzijszih.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163cfeldlxx.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zetkdtoi.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163xamrhcud.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163yxqaetcs.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ypekctlw.html

readonly PI=3.14
来源：http://www.xuanzx.com/163ahydquko.html

[R04] 位置参数
来源：http://www.sxryk.cn/163sxlpcztw.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163sibrgeny.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ucviltxs.html

name="${1:-default}"
来源：http://www.xuanzx.com/163adtsoqre.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163nptwyzih.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163urtubepm.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163auueuglq.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163zsimdxfi.html

[R08] 数值比较
来源：http://www.xuanzx.com/163eagnfqim.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163lydymklx.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163oecyyjis.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163tfwhmwbg.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163emgxfnsw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163xtwpdowa.html

[R11] case 多分支
来源：http://www.sxryk.cn/163vcjzmciy.html

case "$1" in
来源：http://www.sxryk.cn/163lyhsnkwm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163nklntazb.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lzontkxx.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zaugbfbe.html

esac
来源：http://www.aibaodan.cn/163nvdxlufx.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163upjohobj.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163uuxkqiwq.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163kblnlvci.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163xjzdbczp.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ctlhrocf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163wgnkbqxf.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163bshaafhd.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163vofqyfwy.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163pyezewwk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163lvfwersj.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163efysnhcb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163tslxgjib.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163jmmscstr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163qluiklsg.html

[R19] 数组长度
来源：http://www.xuanzx.com/163kbicaukd.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163rvuxjvge.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163hbjbdczp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163gbpdovjh.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163awantfib.html

echo "${#s}"
来源：http://www.aibaodan.cn/163iolntgat.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163exfkjgxm.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jgucyord.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163tuvnqaop.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rmkunags.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163nmlgfmrq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163wicekcqc.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163wryljrgo.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ctaqamfp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163siksdpqg.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163fxjtizrs.html

[R27] 算术展开
来源：http://www.sxryk.cn/163hexqlqne.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xmiwvxsy.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qqsajltd.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163tafdfuri.html

[R29] 定义函数
来源：http://www.xuanzx.com/163pshpuvgd.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ngfqcazf.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163pswmdlpm.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163xbivyiuz.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163yaygbmmy.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163fjjkvvqm.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163txxlevnz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163bjzbfxow.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163flkalpgl.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163squzocbj.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bsgoekhf.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163fbtvwdhp.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163sumlrhfh.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163llotzyva.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ulemzaxy.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163iptoulho.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163honptxft.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vxosvmnw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163ppuuenup.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vjvwcpno.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163zvtniuvh.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163rwveavsv.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163kaqecvkm.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163hnmvtmog.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nbvgmpkz.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jkrqivjr.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163johpugaz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163yjmarnym.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163gmshsxvs.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163oqgotmrq.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163fcxfnqbj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163xiesrcks.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fldxpana.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163qrxidjnp.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163lgrhyetu.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163tfgmobpr.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tffhdezy.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163pabkqfar.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163otnohezf.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163zzvsuswy.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163aodvsgmb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163dkkapdrw.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163squamgll.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163fxufmybt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163szqeviwm.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163rwvslfwg.html

[R52] 统计行数
来源：http://www.xuanzx.com/163optopjpo.html

wc -l a.txt
来源：http://www.sxryk.cn/163gshtutcr.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163mgavnnsb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163puijsfro.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163pivtjcpv.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gazxajfw.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163lyjjdwkd.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163ucvuhhhk.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163cbuefcgz.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163alcisgfl.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163smuyniij.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vyxvmxxl.html

[R58] 下载文件
来源：http://www.xuanzx.com/163sgakjniq.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163dciktpga.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163uwnmisgv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163fnikqeka.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163bbaamwfm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163belmortd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163wpphbknf.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163qxrosrve.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163ydfntmie.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163asydzpnk.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163sgnltmtu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qwsbghwq.html

[R64] 结束进程
来源：http://www.xuanzx.com/163rkykxrpz.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163pyuvptba.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163awoteiyr.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163xxncxrzn.html

[R66] 定时任务
来源：http://www.sxryk.cn/163ovfsqoea.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lypfpswv.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163oqbodbqb.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rvzfyciq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163xgibnugk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ikrvwzcn.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163zcopbjzf.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163syqkzvyd.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163jywinkly.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163cvtlrcmg.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163vnlspwiu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163asdyvtri.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163nahpzwgt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163klytxnko.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163mcphrxdl.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163zhokpebu.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163yvryzwbv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163wgdecgba.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163mfxhwszj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163cpeajttk.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163orglemek.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pgixtqgs.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163acdmihmg.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163kttwtels.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163azthfprd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163kbomuoxt.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163iipqnrkz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163kovmbiel.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163gcbzzlte.html

time ./run.sh
来源：http://www.xuanzx.com/163vybeinus.html

================================================================================
来源：http://www.sxryk.cn/163bhdyxmta.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163udtfxipi.html

================================================================================
来源：http://www.aibaodan.cn/163sxlqotfj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ykyupfan.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163bqmryoqx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163aakupkkj.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163xnwinbdw.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163gzqgccuf.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163tmrfreyj.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163ryzmqaqi.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163zscqvite.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163wmogqnql.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163uintsjlp.html

strlen(s)
来源：http://www.aibaodan.cn/163yxlnofrr.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163nspkcble.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163vozyotlh.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163gykfgjby.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163znhfeugq.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163gwwdkcgo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163yfqydmrg.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163djraqmqn.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ytoaqhtp.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163xboedcfz.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hwxzvzpu.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163dibonwmm.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163jhneqbmy.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163xlaiciex.html

fclose(f);
来源：http://www.xuanzx.com/163skmrwwqn.html

[S12] C：写文件
来源：http://www.xuanzx.com/163hrubcosy.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163zqynuzpu.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163xudnsmoz.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ilgkevcj.html

[S14] C：枚举
来源：http://www.sxryk.cn/163ijjgmkaa.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163tklxrhxx.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163mzixjyga.html

(double) a / b
来源：http://www.aibaodan.cn/163peusiwjn.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163cyteijsi.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163hnjlojxe.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163fmmqvkkw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163ttzailvh.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163sfojorfb.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zivhqktp.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xlzalzcz.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163yugeyqxc.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163zirxzzta.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163wmjnnkif.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163vnhtkzrm.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163bojqoans.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163kdqaafes.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163sfxnifjp.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163xbdwcnud.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163yaqxyosg.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163udotddmr.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fwfbyquc.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163runnwklp.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163izeuwgeu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163ijwvovzk.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163chkfparj.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163kfvbpnck.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163horbmezv.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163izuyxdaj.html

static int counter = 0;
来源：http://www.xuanzx.com/163kjrvxdjg.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163afvpoutf.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163zhhoiezf.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163nknphsod.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xtyfyoch.html

#define X_H
来源：http://www.xuanzx.com/163uyrbmifh.html

#endif
来源：http://www.sxryk.cn/163kcluyqys.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163aqiddkof.html

#include <iostream>
来源：http://www.sxryk.cn/163pnefybfy.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163ewyhvbxb.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163glkfscnz.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163eeatgmef.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163ujcpboqf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163izxsnsog.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163jlaeytvf.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163oqagafhc.html

[S35] C++：map
来源：http://www.sxryk.cn/163ythrztms.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163clcvuzya.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163utematlo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zcqwyfcp.html

[S37] C++：set
来源：http://www.aibaodan.cn/163noaohnpw.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163nspqxmmh.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163abjyumiw.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163mtbgshru.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163ezgxtfej.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bubxifpj.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163qyrbyqzo.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.sxryk.cn/163nuwhndlr.html

[S41] C++：类与构造函数
来源：http://www.sxryk.cn/163dctsvpqp.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.xuanzx.com/163lzsyojko.html

[S42] C++：继承与虚函数
来源：http://www.sxryk.cn/163vgwrvkoc.html

class B : public Base { public: void f() override {} };
来源：http://www.xuanzx.com/163wyowucff.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163acimmrzu.html

auto p = std::make_unique<int>(5);
来源：http://www.sxryk.cn/163epnqkmtf.html

[S44] C++：引用传参
来源：http://www.xuanzx.com/163dnouedot.html

void inc(int &x) { ++x; }
来源：http://www.xuanzx.com/163sojwbcsh.html

[S45] C++：lambda
来源：http://www.xuanzx.com/163cxqlknot.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.xuanzx.com/163zdaaplzd.html

[S46] C++：函数模板
来源：http://www.aibaodan.cn/163gfrfhghi.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163csdjjuxi.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163skuoxjuc.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.xuanzx.com/163nmmynuln.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163begjzugd.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.xuanzx.com/163bqaynlps.html


<!-- 参考信息 -->
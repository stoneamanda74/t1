外链999!wailian999！

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163infnocdf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wfzyuamo.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163tdrvdlkm.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163anzkvuqa.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163lfbgxzcz.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163hbuwwtqo.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gxgklksf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163gemjnifi.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163kizwvdua.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163uwwuygmh.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163okavpodz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163umxqpmle.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ykjmwlcq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163ztxyccby.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163vimvsuyu.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163mvohrzje.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163eaqdnszz.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ikqttzyw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163cdcdxavb.html

================================================================================
来源：http://www.xuanzx.com/163jadsdoru.html

R. Bash 专题
来源：http://www.aibaodan.cn/163tobsajwk.html

================================================================================
来源：http://www.aibaodan.cn/163jqtfcacp.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163grjndjch.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163ynbbjqxq.html

set -euo pipefail
来源：http://www.xuanzx.com/163ssbawekk.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163mslrqjhg.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ulpaznhe.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163ommhseuw.html

readonly PI=3.14
来源：http://www.sxryk.cn/163wgmeikee.html

[R04] 位置参数
来源：http://www.sxryk.cn/163qcmlklji.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163ksjxqhez.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163tqxmstoh.html

name="${1:-default}"
来源：http://www.xuanzx.com/163deuleomd.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163zmitfgfk.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163xohfhdyr.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163fxngckcx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163awamkkmp.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163hodzqvue.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163xrteukhz.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163dsfwjrif.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163mtbzjecp.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163yewsgmyw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163gchbeyrd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163uybvhdxh.html

case "$1" in
来源：http://www.sxryk.cn/163hipiidhk.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163lipodmqw.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163radiwsuv.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163sjkodczm.html

esac
来源：http://www.xuanzx.com/163lqarotxh.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163cjdmotha.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163dylwwrri.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163aouxwvci.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163mawxrbgz.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fzrwssla.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163gvbfiwno.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163yxhmbpqs.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163npbouczv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163soryizsr.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163ehmmdtgi.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163bdkecjyn.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163huhuxtbd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163rjpnphdr.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163wulfqijh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163bebsdmsl.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163efppdkii.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lgprqnts.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ffexkztu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163eunvebnx.html

echo "${#s}"
来源：http://www.sxryk.cn/163egmlobqa.html

[R22] 截取子串
来源：http://www.xuanzx.com/163wxycrfec.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ajwmjbqt.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163bexyjzkr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163nrmdwnpv.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163abvasgty.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163yqcowqhy.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163jspsoawg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163acdmpmct.html

[R26] 命令替换
来源：http://www.sxryk.cn/163fgbfxwug.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163sgokvlwn.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163uipfvmwk.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163lgfnytpb.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mubqsolr.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ynppplll.html

[R29] 定义函数
来源：http://www.sxryk.cn/163vxprfbli.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163npoyjujo.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xvlakflp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163yaermsku.html

[R31] 局部变量
来源：http://www.sxryk.cn/163nmczjazj.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163zkejtloy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ebqhvfwn.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163phfarevz.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163gufktcbo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163gklbkhgw.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163pgbtidcq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163yzstcicc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163fzedeztr.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163eyyurqws.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163rrczsdjl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163nieaizbi.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163dqemajex.html

files=$(ls -1)
来源：http://www.sxryk.cn/163qnpqzxsg.html

[R38] 管道串联
来源：http://www.xuanzx.com/163iauxjmso.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163zbsyawso.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163gveinzav.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163ryzpgjqp.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163cdiczcsn.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ooeotzws.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163flbjkyrk.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163btepuokk.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wiapagpj.html

wc -l < a.txt
来源：http://www.xuanzx.com/163urigpvkh.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163wwuklegz.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xsizhtfu.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163nhckhlij.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163vzeuiqii.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ptodammz.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163fkjzanwm.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ywibsins.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163rsnxwgov.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163gbcjzzvh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163uxmisivj.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163kknceovy.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163agqjrhmo.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163pcqupbfu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163kmmtmwkl.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163zmoqhjar.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163mqikthsn.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163etygmiaa.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163utbhqxev.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163jgaolufa.html

wc -l a.txt
来源：http://www.sxryk.cn/163tcjxwaqm.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163aevzlcux.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163xwougwbx.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vysculoo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163vyuaaepq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163cxjjtsqj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163yajucimv.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163nfxvamir.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163dehukezr.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hjqkzogt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163klamoeaz.html

[R58] 下载文件
来源：http://www.sxryk.cn/163qchorstg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163sadljknl.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ewfqoelk.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ytdxiwvq.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163hursseng.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163szkpzstj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163xvezgact.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163rwkynhsf.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163fugaitkt.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163nhatkjxe.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163aqlxqcsn.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163mrapmmvw.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163wrogwigw.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163njctctup.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kqxalfgc.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163jxwkjpee.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163xbihwnwg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163buqljiow.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163qlikmrks.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163kyrherbt.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163sppzfbpv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163brbdzmkh.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163worsfcfy.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xrsaxfaf.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163bwixzafs.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163yhyxizqr.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163utigvkvl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163wyuplyer.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163repwbsds.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163przemrrn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163ouwxihbx.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163guvvclyc.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mfzidron.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163brqugjmr.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tztmzefy.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163wglblkyy.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163kkzugmxd.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pnvepbkb.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163kmxvcoqw.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163ifacfxsx.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kevfcnpt.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163awrsywai.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163pixtqtnq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163plztxbnd.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163erzqciut.html

time ./run.sh
来源：http://www.aibaodan.cn/163pxadofgb.html

================================================================================
来源：http://www.xuanzx.com/163opuosznt.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163nmoawvjo.html

================================================================================
来源：http://www.sxryk.cn/163wrupucmc.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163wsnkdbzi.html

#include <stdio.h>
来源：http://www.xuanzx.com/163uyptjxqr.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ighqwfwr.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163jtqymroq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163yxcaknic.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163cmtkhfxt.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gbqqldvn.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163yoqvwavt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163rgqaycfp.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163tcaoefui.html

strlen(s)
来源：http://www.sxryk.cn/163fhuuxyet.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163lvecwbla.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163kbazkjbc.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163qijihpww.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163muatgfde.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163cfdvpzhd.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163zfxrzljs.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163qhkpkixg.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163bdrveslc.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163vtanmxff.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163stehuqsm.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163mnkfbpak.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163esiwqbvm.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163zmjpfgyg.html

fclose(f);
来源：http://www.aibaodan.cn/163kzpzpxqo.html

[S12] C：写文件
来源：http://www.xuanzx.com/163dgovqemb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163flzjgsfi.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163blfyikhi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163toalldrt.html

[S14] C：枚举
来源：http://www.xuanzx.com/163vuujlvak.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163aflpsixe.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163jowycxhu.html

(double) a / b
来源：http://www.aibaodan.cn/163vnywwmer.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163druzpily.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163jczrriul.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163thipmmug.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163vamjywxg.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163noayvtaq.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163gzxyszye.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163cypddsdu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163xeawbzfz.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163wlgxwpht.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163syvuwirg.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163iyfducuy.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163xdmzzbow.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163fdoqchyr.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163agaafmfk.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163mksuxssl.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163ocjesjhm.html

[S24] C：获取本地时间
来源：http://www.sxryk.cn/163kypzgojf.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163gnckwomr.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163uobykhgp.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163kkuryxbg.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163xwtujdcr.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163rnfzavdg.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163fszkdgfx.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163minheoam.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163zvyuogpc.html

static int counter = 0;
来源：http://www.xuanzx.com/163piyfsahn.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163dkcarehk.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163elvasakx.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163lchxmfbr.html

#ifndef X_H
来源：http://www.xuanzx.com/163kepreayn.html

#define X_H
来源：http://www.sxryk.cn/163rqlzoesr.html

#endif
来源：http://www.aibaodan.cn/163kpwjmkqc.html

[S31] C++：Hello World
来源：http://www.xuanzx.com/163hjmgxrjj.html

#include <iostream>
来源：http://www.sxryk.cn/163dltvxzsx.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163ymrerjqm.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163pemsvmep.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163idtdujgs.html

[S33] C++：vector 增删
来源：http://www.aibaodan.cn/163umjsloqz.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163xkrrcnkd.html

[S34] C++：遍历 vector
来源：http://www.aibaodan.cn/163rogqburx.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163fggwosrx.html

[S35] C++：map
来源：http://www.xuanzx.com/163aocytwrc.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163iyaqlozk.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163pwhfplkg.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163riwwdara.html

[S37] C++：set
来源：http://www.xuanzx.com/163hscekumb.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.xuanzx.com/163nojejsqy.html

[S38] C++：排序
来源：http://www.sxryk.cn/163ixwfbcjk.html

std::sort(v.begin(), v.end());
来源：http://www.aibaodan.cn/163mwyhcitg.html

[S39] C++：自定义比较器排序
来源：http://www.aibaodan.cn/163nkkfbzts.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.sxryk.cn/163bntimvme.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163ujwjwqaw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.aibaodan.cn/163ytrgkkuz.html

[S41] C++：类与构造函数
来源：http://www.aibaodan.cn/163lqulsrwn.html

class A { public: A(int v) : x_(v) {} int get() const { return x_; } private: int x_; };
来源：http://www.sxryk.cn/163duytakcj.html

[S42] C++：继承与虚函数
来源：http://www.xuanzx.com/163lvpdwial.html

class B : public Base { public: void f() override {} };
来源：http://www.sxryk.cn/163oqftcliz.html

[S43] C++：智能指针
来源：http://www.xuanzx.com/163lykmvwtb.html

auto p = std::make_unique<int>(5);
来源：http://www.aibaodan.cn/163tfstbojn.html

[S44] C++：引用传参
来源：http://www.aibaodan.cn/163xxiuwdou.html

void inc(int &x) { ++x; }
来源：http://www.aibaodan.cn/163glyllagr.html

[S45] C++：lambda
来源：http://www.sxryk.cn/163xaxaekki.html

auto add = [](int a, int b) { return a + b; };
来源：http://www.sxryk.cn/163fpnflkst.html

[S46] C++：函数模板
来源：http://www.sxryk.cn/163scbunifk.html

template <typename T> T maxv(T a, T b) { return a > b ? a : b; }
来源：http://www.aibaodan.cn/163fgbxayax.html

[S47] C++：结构化绑定遍历
来源：http://www.aibaodan.cn/163bdsjuuqe.html

for (const auto &[k, v] : m) { std::cout << k << v; }
来源：http://www.sxryk.cn/163urvhcnog.html

[S48] C++：逐行读文件
来源：http://www.sxryk.cn/163aojtyjyf.html

std::ifstream in("a.txt");  std::string line;
来源：http://www.sxryk.cn/163gdkmjxzg.html

while (std::getline(in, line)) { }
来源：http://www.aibaodan.cn/163uayercef.html

[S49] C++：写文件
来源：http://www.xuanzx.com/163xorirtgv.html

std::ofstream out("a.txt");  out << "hi\n";
来源：http://www.xuanzx.com/163awmtkcsa.html

[S50] C++：格式化数字
来源：http://www.sxryk.cn/163iadgkjtn.html

std::ostringstream os;  os << std::fixed << std::setprecision(2) << 3.14159;
来源：http://www.sxryk.cn/163xoswcdse.html

[S51] C++：显式类型转换
来源：http://www.xuanzx.com/163lcrauzgp.html

static_cast<double>(a) / b
来源：http://www.sxryk.cn/163splhjvfh.html

[S52] C++：const 与 noexcept
来源：http://www.aibaodan.cn/163nvyegrvb.html


<!-- 参考信息 -->
外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163pnbltczg.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163wppdcunb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163zmnnuwjv.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163rsnlfzhl.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163mmaajtby.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163cdcgctvm.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ecisjrna.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163wymnlcos.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163fimgavxa.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163evggmxxi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163mklqjnon.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163hvqhrnhn.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163glboheea.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163kmfidbiu.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163yqsuhouc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163aljlyxud.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163yrytzitl.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163eupguysa.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ktmhqygf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163hkbbiemu.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tamcewpq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163dobsoqij.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hamcvktj.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163trvmlxco.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163nvxwnhie.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wjyrkivf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163neabgmaa.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163wpztbouf.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163neyjrgtm.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163qrbayrry.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163vjhqevdr.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163lhqbebof.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163adzmvoan.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163gkjukaju.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163znawsjeo.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163kvlwvmrb.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163osjtcqls.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ebvvnjbh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163asmykkjk.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163tavxtdcs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163extuvwfc.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163knwidaju.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163fxxgjbbq.html

================================================================================
来源：http://www.aibaodan.cn/163ssvyovsh.html

R. Bash 专题
来源：http://www.sxryk.cn/163quifsrdy.html

================================================================================
来源：http://www.aibaodan.cn/163hjtmswxa.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163sokqwwkv.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ihwykqxr.html

set -euo pipefail
来源：http://www.xuanzx.com/163jcncvwkk.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163srpgrxcg.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163jnvhbymc.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163zbtsyluh.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bllrkadk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ivuztflo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163kgpoatvb.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163npfdunox.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xxtfrxuc.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163dbjmlyjz.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kqczrtld.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163wazhcsau.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163uyyxbezi.html

[R08] 数值比较
来源：http://www.sxryk.cn/163aomvagye.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163krginrya.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163kvpdlksh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163hoooxaog.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163oxbqevii.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163euwlqksl.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bzxvproy.html

case "$1" in
来源：http://www.sxryk.cn/163xboxzgkd.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ysakqoqx.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163qbnmswba.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ehwqiqjr.html

esac
来源：http://www.sxryk.cn/163gsfzffjs.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163hdcursgp.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163yepylhuk.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163fkielwyw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163wxnzsyff.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163wdhskcfr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163dqbvzobm.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163gdupyppk.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163jtymvnuh.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163egcovivp.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163htdpbhah.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163vdysjwfy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163msegyldo.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163vnhujift.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xzeqsywt.html

[R19] 数组长度
来源：http://www.xuanzx.com/163zuvnjmkm.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163belxzzxp.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163jwzmsxwe.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163cbijkdvf.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163awbbzsgi.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fyomtepa.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ajjstfrf.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kwaolxlk.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wflnntqi.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163zdpbpjsf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163xtfgaqzz.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163iwqiqfkx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163cfwcfogh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163xvkluzld.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jwocmmou.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163lpjkyhyv.html

[R27] 算术展开
来源：http://www.sxryk.cn/163kgrkqnfg.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163mbxohuaa.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ulswvhmd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163ncgyxuob.html

[R29] 定义函数
来源：http://www.sxryk.cn/163trzlmrha.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163widkwxex.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163yukhgtrz.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163tpwbvsji.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bwjejipc.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jydbmkhu.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163nnvdarit.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163iflbhwce.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163pfwlnnvh.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163tnyvtbnf.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163atimytyh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qtzstcaz.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163lijztsnw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163yohdqaai.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kkojvxbc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163abncqvms.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163gmonhlpg.html

files=$(ls -1)
来源：http://www.sxryk.cn/163wtxjcoex.html

[R38] 管道串联
来源：http://www.sxryk.cn/163vewwivka.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163woybxeaa.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163jkmulcqg.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163jzstmdpl.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jlohyxze.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ztkgjxke.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163dbxitdrf.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163iasiolgc.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163omhzgjsz.html

wc -l < a.txt
来源：http://www.sxryk.cn/163fsgthkaj.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163lslgrikj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163dahckbsz.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ewicbyek.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163rlchaekm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kqxroxsa.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163rjpxnyop.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ewumnnzd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163xcacgwlt.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kotatuux.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163shidysbf.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163ihigakjs.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163nnxkwxbm.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zmaipgnb.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ncmlwner.html

[R50] awk 求和
来源：http://www.sxryk.cn/163yxuggjyy.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163nvhnzlwh.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163pycyqpac.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bmthyjvq.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163pbgszrpy.html

wc -l a.txt
来源：http://www.xuanzx.com/163cwdcmbnp.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ugdbheax.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ctynvpva.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163memievwm.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wnviuvlw.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ovoxpqni.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163bsaavsvo.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163iysawsul.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163scdrhyrl.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163xgsttbwt.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163msjfgrri.html

[R58] 下载文件
来源：http://www.xuanzx.com/163qesezxmj.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163czsttzla.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163ycipjxod.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163xphvnmdw.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163zsfdtmid.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ejqngzpu.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163odhrllwr.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163aqavcquu.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163iyhceawi.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tsdkfkqt.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163uqmciaur.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wlfnxbef.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163qqfemwni.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163glkgwfmh.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163gkzaggyk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163msgsnlgw.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163vlkiuyaa.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ylttxgkv.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ksfkvsho.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163ichvditk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jqevffpi.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163vodtsnap.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163nzibspqw.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163pgowecsi.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163ihmdlqyo.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163mhfhbhcw.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163bwhxffwd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163oezxlzhg.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163ipkrucgh.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163eflgscxc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163plapnksz.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163abwefeng.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163omocbyqt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163qpfasntf.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163padwuiul.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163ibxdmmsn.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163emmmvbbm.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163hqsmljzl.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163bkkyvijv.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163mxbvbysj.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163seahwdjc.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163gxkpqxhe.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163lfmprees.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163wfmwezam.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163veqfohfu.html

time ./run.sh
来源：http://www.aibaodan.cn/163pdpqohhs.html

================================================================================
来源：http://www.xuanzx.com/163fckpitlo.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hissjxbm.html

================================================================================
来源：http://www.aibaodan.cn/163bbyrzujt.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xbkagapl.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163lodqechw.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163jliqofzp.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cwessiuw.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163fybmmvai.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163qmublllt.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163myhvotft.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163rykcdymq.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163hgwoofuj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163mzjovwdb.html

strlen(s)
来源：http://www.aibaodan.cn/163nqdpbacu.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163tsywgtkf.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ryvombne.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163dhopzryl.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163njpoxibw.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163pmqzbqyr.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163isifkehh.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163wokoebwo.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lwlcshjo.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163nhpkgxib.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163isqztjwj.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163ahpjoxwc.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163wkswcouk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163pakmljqi.html

fclose(f);
来源：http://www.sxryk.cn/163kbstjpko.html

[S12] C：写文件
来源：http://www.sxryk.cn/163yjzygtsx.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163mifclbwc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163rzuxmqdu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ldswtzpm.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163xbtwnoiw.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163yzxghuhk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163lkdieyev.html

(double) a / b
来源：http://www.aibaodan.cn/163dchpanvm.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163ceongkvc.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163trqhbxiy.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163xtpgwcjp.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163mbfrcuxh.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163zbbzgyoi.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163fbdcqaiy.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163xqgbepsw.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163annwxige.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163rgfhrcol.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163oqbqircm.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163vfsoserk.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.sxryk.cn/163mqfyefyc.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163nhqtpulz.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163corfjcwf.html

[S23] C：随机数
来源：http://www.sxryk.cn/163vhximjmf.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163advygybo.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lkgyfwlp.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163mqaltbdm.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163nmccfffy.html

memcpy(dst, src, n);
来源：http://www.sxryk.cn/163wvlrviaf.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163orvxgarh.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ssrgaavb.html

[S27] C：定义常量
来源：http://www.aibaodan.cn/163suctrerc.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163sapihklm.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163ifbhsjgh.html

static int counter = 0;
来源：http://www.aibaodan.cn/163hupsuref.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163wygmmruc.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163efrgppsv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163ysgcwytb.html

#ifndef X_H
来源：http://www.xuanzx.com/163fppnsshu.html

#define X_H
来源：http://www.aibaodan.cn/163omzbugyx.html

#endif
来源：http://www.aibaodan.cn/163djivfadb.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163srehulfw.html

#include <iostream>
来源：http://www.sxryk.cn/163zkywztcb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.xuanzx.com/163ijbyqmtj.html

[S32] C++：字符串
来源：http://www.xuanzx.com/163mefhwctf.html

std::string s = "hi";  s += "!";
来源：http://www.sxryk.cn/163crsnemgs.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163jtwwloqy.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163blwyeopi.html

[S34] C++：遍历 vector
来源：http://www.sxryk.cn/163rqoxxqxb.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163xgxibefm.html

[S35] C++：map
来源：http://www.aibaodan.cn/163lozitcba.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163oitllxsc.html

[S36] C++：unordered_map
来源：http://www.xuanzx.com/163tefckuqa.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163bljxhsuc.html

[S37] C++：set
来源：http://www.sxryk.cn/163fzlsdoms.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.sxryk.cn/163jxshbxba.html

[S38] C++：排序
来源：http://www.sxryk.cn/163aohytklm.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163vzjpysui.html

[S39] C++：自定义比较器排序
来源：http://www.sxryk.cn/163zlrgkgmr.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163vjatvvoi.html

[S40] C++：查找元素
来源：http://www.aibaodan.cn/163xjfudnbw.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163hkckjqjl.html


<!-- 参考信息 -->
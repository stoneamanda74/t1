外链999!wailian999！

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zivoaeup.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163euuscbvn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163hrglngtl.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lcyrmzby.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163zclzvmfj.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163jgwlvtcg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163dkcxxfnb.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163vixzmthj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wkxumsum.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kredvyhi.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163cloovpua.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163tnpwaheh.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163jpwvhhat.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163quscaero.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163foqpjvnz.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163thpxjeoc.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qsbteyhc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163onejgdst.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163fxyvvxlw.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163nkdotfis.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163dxseihie.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163srizuvkh.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163wkxfubea.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163wfinmirz.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163bueijqmf.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163jounqrbk.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bafldnbi.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163lvrdchnm.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163mfgjaoum.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163vwwhyroy.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163gtoypppq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163bogivclh.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163agdjjmti.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163jsvrixub.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163xkkhovap.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163uesdzpos.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163wonucqia.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163xpebkmec.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163kwrjmbxt.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163kpvclhbd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163wafxhjby.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163aznuyjva.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163xexgfwbj.html

================================================================================
来源：http://www.aibaodan.cn/163rgtnulzu.html

R. Bash 专题
来源：http://www.sxryk.cn/163qairaykk.html

================================================================================
来源：http://www.xuanzx.com/163zvaujiaf.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163iuyjowst.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163lcygiryh.html

set -euo pipefail
来源：http://www.xuanzx.com/163kakfjsgt.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163horhgjbb.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163unyfxpjo.html

[R03] 只读变量
来源：http://www.sxryk.cn/163llsplxye.html

readonly PI=3.14
来源：http://www.xuanzx.com/163zbtvkmar.html

[R04] 位置参数
来源：http://www.xuanzx.com/163imlhjvej.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163shfzvbxx.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163waxexdmq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163zakagttd.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163udvnomme.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163njiiszco.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163cbhpxhyk.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163pfewlknd.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163zbvjgnng.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163ftksclpw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163puqigunb.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163qcadcxes.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163whqnssqb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163nxocirqs.html

[R11] case 多分支
来源：http://www.xuanzx.com/163yinzceqg.html

case "$1" in
来源：http://www.sxryk.cn/163mebkodky.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163dytdhhjy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163ytovifdo.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163rqiwwjgx.html

esac
来源：http://www.sxryk.cn/163ulylirsd.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xjqehkaa.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vmutijcr.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163iqzcllhm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163auqszjmc.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163ohjeptad.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163swodawyc.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ozicdeat.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163dyykhrxq.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163uambgpzv.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163hqgijvby.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163nlmfndfl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163yvgdkawc.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163olcsxlhz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163fjsabtiw.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163qaxlsbmk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kwmtshey.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163fazhnhcm.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163wzrxnixt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ljocoqbv.html

echo "${#s}"
来源：http://www.sxryk.cn/163qlbnnxqe.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163ipkfmlvg.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163wuankiah.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163czcdcleu.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163rhfjsfte.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163wirzkzjr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ioythgrb.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163ncribnxr.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163hydyotiu.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bsihkyhc.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163vgftcekx.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hegnumtc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163wyfpogtv.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163afybhlve.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163klkkcvmc.html

[R29] 定义函数
来源：http://www.sxryk.cn/163hombopwv.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163kcwjdzuh.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163bfeuzxxh.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163sylavpkt.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ynrfkvum.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ukrjofsp.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163wayyccya.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163jcyyscpl.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163kxufvlhs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163wxbijlxp.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163nxlumaeh.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wcsstyti.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163azoxfdqb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163itvzoumk.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163jlvvgtqc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163fadempit.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163htoyvucn.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163qzmkwufq.html

[R38] 管道串联
来源：http://www.xuanzx.com/163aonqzpjb.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xeaonafe.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163mvpeuprn.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163jbmhirhg.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163scdlmdzw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163yujsjgpu.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163samcizsg.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163kyfvqwkp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mcrnhnyc.html

wc -l < a.txt
来源：http://www.xuanzx.com/163wiglbdrm.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ivabqbwd.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163xcoyxiyo.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163kljaostg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qcjdaqcy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163fcwnpzdi.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163jxcljyqr.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163tclunjgb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163jltdpzyi.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163tmprsdzr.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163poxrytwg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163xgoyjczv.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163nhyuoyro.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163yxeshyxd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ebvfzbif.html

[R50] awk 求和
来源：http://www.xuanzx.com/163dhygmhnd.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163bmqkvkob.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hbtiryus.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163wtojyatk.html

[R52] 统计行数
来源：http://www.sxryk.cn/163zbqqcsgf.html

wc -l a.txt
来源：http://www.sxryk.cn/163ppbpicho.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163kwaacjjg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163tejmqzfw.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163jbqsnmna.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163tifsvohb.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vxklxvyv.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163nkadyoyq.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163guqvwnhu.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163yihvenip.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163ajuadvah.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163voeepywv.html

[R58] 下载文件
来源：http://www.sxryk.cn/163mtsjiyuk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mibddrjf.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163fjcvomtd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163gqsqiqvv.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163atysmlwm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163qdtlspym.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vxdzptgv.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163wodohobf.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163kvkjqunl.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vvonambj.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xwkqsjkf.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163ufxdqsvc.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163bhmivjgn.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bvovqgyl.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ljpmxnxe.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wuxulyxp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163dibxfiex.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163niddjwdo.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163pmxxlzun.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163etmiucst.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163zvljzyme.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163uoihyxui.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ytdcshcd.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dxyitpcw.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163jdodjcom.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163fuefupsg.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163rzhsupdu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163zetpjftk.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163akbgdhtc.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163wzdkcagi.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163eabxutep.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ybjtruui.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163hyqbxouy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163fdsfevtm.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163lnwimkyv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163ldpirlpu.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163kcvhgyra.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vwxxalnb.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jydhestc.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163xsvqtqjq.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163bzlugmgm.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163drosksqq.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163oyeanbwe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163eaixtudb.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163craejxlz.html

time ./run.sh
来源：http://www.aibaodan.cn/163gbtpcwzc.html

================================================================================
来源：http://www.sxryk.cn/163wqojfheo.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163zimdryoq.html

================================================================================
来源：http://www.xuanzx.com/163znfcroys.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163ezptnvkb.html

#include <stdio.h>
来源：http://www.xuanzx.com/163gafswrpb.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163iskcvysp.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163danzwwiq.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ikiwtviy.html

[S03] C：读入整数
来源：http://www.aibaodan.cn/163thwvslld.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163hgpsgztp.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163yjsslekc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163tiktgoud.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163mjdadzgb.html

strlen(s)
来源：http://www.xuanzx.com/163fvkkuldr.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163fkmhefpm.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ctlljqgw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163denlidag.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xgjndprx.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163uqhnuyzn.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163ljuvvozw.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163ngqvzfiy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163pgseykny.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163diyyxnvi.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163qwolucyo.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163oykdffaj.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163bminiyga.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163ngptpurh.html

fclose(f);
来源：http://www.sxryk.cn/163cvgmuiee.html

[S12] C：写文件
来源：http://www.sxryk.cn/163fmftwntu.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163jrxwspdw.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ydzlcxhq.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163jcnwsjih.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qwkilwzj.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xbgyrqvg.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163gxgbrkbj.html

(double) a / b
来源：http://www.aibaodan.cn/163wnpnnowp.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hwmrrnzx.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163ocjjikgn.html

[S17] C：安全拼接字符串
来源：http://www.aibaodan.cn/163ahdwfihy.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163dbadhhno.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163hoabmxom.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163ssclmpmc.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163lqrgvkcu.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163ezydezvx.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163owfjfsrf.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iyfagkds.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163jcqxabfq.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163ctsydvzg.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163gendjpeh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ruudvbys.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163rhwiglws.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163xpcslakw.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163zagvthdk.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.xuanzx.com/163fxyprwcc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163qqjbxfyu.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163rqltfblr.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163trxbfewg.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163ofrqhrbs.html

[S27] C：定义常量
来源：http://www.sxryk.cn/163pmgulwqh.html

const double PI = 3.14159;
来源：http://www.sxryk.cn/163ktcwjydw.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163jzfxfubk.html

static int counter = 0;
来源：http://www.xuanzx.com/163mazuadho.html

[S29] C：变参函数
来源：http://www.xuanzx.com/163sahmbluz.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163ztioccgr.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163rczrlbox.html

#ifndef X_H
来源：http://www.aibaodan.cn/163ykhcforr.html

#define X_H
来源：http://www.xuanzx.com/163vzvkhdxq.html

#endif
来源：http://www.xuanzx.com/163ichzifaj.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163tuxlvswj.html

#include <iostream>
来源：http://www.xuanzx.com/163igvyakkb.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163igdxmdzp.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163umafzitt.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163aomdlaiv.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163ttikhflf.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163gdxouhvk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163yeichmxs.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163uqbrdvne.html

[S35] C++：map
来源：http://www.xuanzx.com/163cdgtoawm.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163lwcnmyox.html

[S36] C++：unordered_map
来源：http://www.sxryk.cn/163wlqfxvzs.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.xuanzx.com/163zqruqcwy.html

[S37] C++：set
来源：http://www.xuanzx.com/163lhbipajc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163mjkcjaqj.html

[S38] C++：排序
来源：http://www.xuanzx.com/163jftrbgex.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163zrcecrok.html

[S39] C++：自定义比较器排序
来源：http://www.xuanzx.com/163kkvddsan.html

std::sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
来源：http://www.xuanzx.com/163ufqzmtag.html

[S40] C++：查找元素
来源：http://www.xuanzx.com/163qdyehxbn.html

auto it = std::find(v.begin(), v.end(), 3);
来源：http://www.xuanzx.com/163iaapyhlm.html


<!-- 参考信息 -->
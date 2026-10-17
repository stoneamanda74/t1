外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ppgyffsy.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163cbohswng.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163zuwjwvhy.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163pvufradn.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163baylvfot.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ekwmrgsr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163ydtyspie.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163nouixqkm.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163wvroprmg.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ulcktpcw.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zqwfxhes.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163jkbhjbkw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163ouckboeg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ipapkzbx.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163cyrljfac.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163cbynbhfv.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163rvhpejku.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163fhzjxgns.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jskaqkas.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163yxmwfwdp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163arzjplle.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163swhdnxjl.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163ngxglova.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163qasuihfp.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163rzedljlg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163xscntftz.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163yfdfewsr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163xtjesysf.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163xpevbxxl.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163yutqxqka.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163xhaidtvq.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163iludyois.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163aepuvrjf.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163utrkhbmz.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163hmdpfkva.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163spmcrncb.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163ovwtiukn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163dpvomplx.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163gmnrlbpl.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163jmtvqmwc.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cwaloqst.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163ewtubuve.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ixoonegt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163blkbkkas.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163zjonhnkx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163jefdxdys.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163igbxswmy.html

================================================================================
来源：http://www.xuanzx.com/163ddepbgnu.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ixemgize.html

================================================================================
来源：http://www.xuanzx.com/163cpgtzjtg.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163nmtziotw.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163lbtsrazg.html

set -euo pipefail
来源：http://www.aibaodan.cn/163hkmwykud.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163iyypjkbq.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ezkzmnba.html

[R03] 只读变量
来源：http://www.xuanzx.com/163qjcgkkpe.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ewnibuhe.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hdckbnuq.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163zekbjwwl.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163qbvifvjg.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ctydiney.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163lzxvsafs.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163yvifdnzj.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kzkkmcwf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163qerjhnsm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163hynmypdj.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163kxilyngv.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163wgywvehz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163kiqninsv.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163xrwiyuaa.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163iitljrby.html

[R11] case 多分支
来源：http://www.xuanzx.com/163dmfzczjl.html

case "$1" in
来源：http://www.sxryk.cn/163gvtjoxkf.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163rhdukdkx.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ogjswqud.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163vzregfbd.html

esac
来源：http://www.sxryk.cn/163htytoxnh.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163voilsica.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163fdibdxyp.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163oefwxkxv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163gsfqtlef.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163pxwpndrq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ymbhtxbb.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163mgkaaydz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163olamnrsh.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163hzpujbny.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163sjacjsrg.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163xjwyxrme.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163hoeiziku.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163qqehvplw.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163qyezhdid.html

[R19] 数组长度
来源：http://www.xuanzx.com/163trwcrwkt.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163pwbzuhpx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163mmbtdkfi.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163nazaadlw.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163zbcadcgm.html

echo "${#s}"
来源：http://www.xuanzx.com/163lyvmsljy.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ydirahiz.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163rfvjrxdf.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vtikjsgh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163lypevbor.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163lojegftr.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163wnjqqeuf.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163fjcfelsi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gehpudok.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163muvhjpfj.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163giirbfag.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163cpphvoig.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163pvnbaojo.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163keexuadg.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163zgerzckz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163ipqgquoh.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163mlcldnoj.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163abgvjepg.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163kbgzecnh.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163egcxvglx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ltsfayfv.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163dwxmxrmg.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qymbmsxp.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ksbzbvjf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163iejcvymh.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bmezquty.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163byrpgfof.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gefsbxmy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163izihevur.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163gyzguggi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163xrtmpdxi.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163wtaaakib.html

files=$(ls -1)
来源：http://www.sxryk.cn/163tjkjerdz.html

[R38] 管道串联
来源：http://www.sxryk.cn/163aaujhqft.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163kqezrmbk.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163fvrzlaho.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163ryetmsht.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163osvmrkqv.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163silmuabk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163ivnpzhxk.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163chnkemjs.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mrarhnrb.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163fsttzbtz.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163dalbjyru.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pygqlipi.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163dszhcrrz.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163sdzzrwsw.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bjjzonop.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163imkjwopf.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163jdvurcby.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vcbtunwa.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163jvncnsuq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163juhkrjld.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163pylnjquk.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ryljadkr.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163nppplgxk.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ajjzlyio.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163jbphtzmz.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163rcibibso.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163mxofypsn.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jkamfylj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163vqrqwmmn.html

wc -l a.txt
来源：http://www.xuanzx.com/163pbvawsuc.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kxkcumcw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163ogsmgfqo.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163trgrcdjo.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163dxnycbrs.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jaiwgqup.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163diwnuujd.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163kygtzcsg.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163anyamzny.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163gdfpwicb.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ucedxlue.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163plbzkaee.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ixbrossy.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163tejotqnq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163jzzswrre.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163gmaisrdm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163elgbigzi.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163nvuzzjgi.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163oetzmthr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163cbijafsx.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163bpkwirwk.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163oojabene.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163tcjrirvo.html

[R64] 结束进程
来源：http://www.sxryk.cn/163besydxcc.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ujaqkgsl.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163dymlywqp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163xddnwotg.html

[R66] 定时任务
来源：http://www.sxryk.cn/163tqihnmfw.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163lyxcmgaw.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163bifrzzmn.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163lcsfssiv.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163irsaevca.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163uyuoexrv.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163bnwskdfp.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163dlgbdron.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163hqayrarh.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ismedcpe.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163dlnmvurd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zxtufhka.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163kmvvavbt.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163ifbjgjsn.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163rsqepthj.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jvuqklmc.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163knbgcjjp.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163humoxtgn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163caqyajxv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163aetyijpv.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163otnijqed.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163mdzsmivn.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163hkrakbob.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163knstvyht.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163dwtmlxiv.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163rngtmgxb.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163mtrxjcto.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163vobnqbrw.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163hxziqttg.html

time ./run.sh
来源：http://www.aibaodan.cn/163ssctwhcn.html

================================================================================
来源：http://www.sxryk.cn/163tspyhtmr.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163jsnvgcfe.html

================================================================================
来源：http://www.xuanzx.com/163fydezszc.html

[S01] C：Hello World
来源：http://www.sxryk.cn/163wbkmrigw.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163fltpqoio.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163ecolsbvo.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163gdsyzzjr.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163ldabjpfb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163aedrijzc.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163txlemlan.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163zvqdjvjt.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163btpwzhsh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163abbppsio.html

strlen(s)
来源：http://www.aibaodan.cn/163tgbimulw.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163evmenajv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163jcczpzfo.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163udyixtzf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163wseukphd.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163gmelbgmg.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163pagjfssl.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163voxkvrpm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163bjqaohvq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163ftgpenpi.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163qljmoido.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163huijclzv.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163ttnokcui.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163itquxeft.html

fclose(f);
来源：http://www.sxryk.cn/163xxrxavoj.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163ouvrmwvw.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163eobinwuu.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163eqvewsnu.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163vnumtdzz.html

[S14] C：枚举
来源：http://www.sxryk.cn/163lnazuujo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163azaznnnk.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163cxatxvjv.html

(double) a / b
来源：http://www.aibaodan.cn/163respvisb.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163cklchdhz.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163dpzmtqva.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163upgszeyx.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163hypnvgkw.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163yquragbh.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163oibhlotj.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163zugboplp.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163gqsuntud.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163dybygmzt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163hmbmvybc.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163ogswjcro.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163hvancfag.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163rofxiloe.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163rqibkonc.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163wqezoprb.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163qhdfvknr.html

[S24] C：获取本地时间
来源：http://www.xuanzx.com/163lxqjigad.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163unjdwtsi.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163swcznsro.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163snmeavgo.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163fkajmpnq.html

memset(a, 0, sizeof a);
来源：http://www.sxryk.cn/163yykezlpe.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163prvaeboj.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163rxeyzuea.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163ntqoqxdh.html

static int counter = 0;
来源：http://www.sxryk.cn/163zlzlcdkq.html

[S29] C：变参函数
来源：http://www.aibaodan.cn/163bmdsepxq.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163vbxwqymi.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163nyehrgmk.html

#ifndef X_H
来源：http://www.sxryk.cn/163tadfmlgn.html

#define X_H
来源：http://www.xuanzx.com/163cbkbimel.html

#endif
来源：http://www.xuanzx.com/163fqwahnfl.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163pnjbsrdh.html

#include <iostream>
来源：http://www.sxryk.cn/163emdxfprf.html

int main() { std::cout << "Hello\n"; }
来源：http://www.sxryk.cn/163xogyhbvs.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163hmevihea.html

std::string s = "hi";  s += "!";
来源：http://www.aibaodan.cn/163qnyeglje.html

[S33] C++：vector 增删
来源：http://www.xuanzx.com/163dbbcmzrl.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.aibaodan.cn/163jdvopzyy.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163kolpilks.html

for (auto &x : v) { std::cout << x; }
来源：http://www.aibaodan.cn/163wwxevpsd.html

[S35] C++：map
来源：http://www.aibaodan.cn/163vrcrqrba.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163wprfobuh.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163rbmafweo.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163zsmyvztu.html

[S37] C++：set
来源：http://www.aibaodan.cn/163ibeekdsc.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163zgcyqwir.html

[S38] C++：排序
来源：http://www.aibaodan.cn/163blqixwsn.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163qppavlcd.html


<!-- 参考信息 -->
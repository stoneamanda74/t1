外链999!wailian999！

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163seynhwoi.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163jdhgqshj.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163lvisddtd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163kixfhnjk.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163xbtmclzl.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163ceitxnnu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163vxcnfrlo.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163pptmwdjm.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163cprwghcw.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163nkbtkbvo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163nrdcxlzc.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163ulnqrycu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163vilncndv.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163dwfjzxcl.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163fqouahsb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163kzqrcjft.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163orxiqztz.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163akejmgep.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163hszhkfuw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163dfplgmby.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163fbprunml.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163jphdacqn.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163zcaijifr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163fnpfjzbc.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163yytgiary.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163bbfhmcwf.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163adplpqms.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163gwzwzoeu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163mpgvcdui.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163tudwpgvb.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163xhvrsnbo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163swdwgjyq.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163sppeaumt.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163psqdvyeb.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163vaxizzet.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163gbmoakbr.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163mkecewjc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163xmmvjuxa.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163hzhmvxns.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163sowfrelo.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163ysnxozjr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163bliollac.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163sppizszm.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163opydizmz.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163unmgwtrr.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163lckfpprq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163grksqkcu.html

================================================================================
来源：http://www.sxryk.cn/163vosqyquh.html

R. Bash 专题
来源：http://www.xuanzx.com/163ucjiqdob.html

================================================================================
来源：http://www.xuanzx.com/163ecdoydfq.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163kaybgblm.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163nhgugrru.html

set -euo pipefail
来源：http://www.aibaodan.cn/163inzuvpec.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163cwwgodfa.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ednfcqxl.html

[R03] 只读变量
来源：http://www.sxryk.cn/163asvpubfg.html

readonly PI=3.14
来源：http://www.sxryk.cn/163sgyedvpd.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163zenpgqnp.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vdcikcae.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163sixhfdpi.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163sxlajcns.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163faqmgher.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ulbvzvuo.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163gcfwrlox.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163ntczsiub.html

[R08] 数值比较
来源：http://www.sxryk.cn/163lykhdoio.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163xrgilrtc.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163awouhclf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163spmbyxtz.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163spqgkckf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163nrhjftsm.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163hitborcp.html

case "$1" in
来源：http://www.sxryk.cn/163intiixzu.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163kwfnxpnj.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163urysxgen.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163pjolyhye.html

esac
来源：http://www.aibaodan.cn/163qlbzxkoq.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163pmkfaysb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163aaxlfgqd.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163gsywdlej.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163beldfyzj.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163yykcfomk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163rblcadmq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163mjxlzncy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ewmgnjnp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163mpgjmyaq.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hfqxncim.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163pwvloxrh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163igqjjkbx.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cgpcmfhk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163kyxyouwq.html

[R19] 数组长度
来源：http://www.sxryk.cn/163zampfkvy.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zxiqbnza.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163tacreive.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163macgewtu.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ihnolqtz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163cixhhbds.html

[R22] 截取子串
来源：http://www.sxryk.cn/163fnseltvx.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163jydvfqne.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163mlhidhla.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pselgbtk.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ojamooww.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163hlhihtjs.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163amvbapli.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163fqjruymv.html

[R26] 命令替换
来源：http://www.xuanzx.com/163oigjuucl.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163nuyaehsi.html

[R27] 算术展开
来源：http://www.xuanzx.com/163aghewgjq.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ulsfdqln.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163qpkojqcu.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163ibwwcgis.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ixxxodwi.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163faaaucfe.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163iyjbfbdo.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jyguxdsn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163oyjwleqe.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163tvzsbhpe.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rnryuovi.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ukfyosod.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163alynedov.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163ajscuabt.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163isnzjirq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163zgfgtvvf.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163reqzxpcy.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163totjpenj.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vmcpiunj.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163rxdratkz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163gruucijv.html

files=$(ls -1)
来源：http://www.xuanzx.com/163nsklmzrv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163jqidlzsi.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163slmbsbxh.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163akdctjbe.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163dkcqxuoq.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163snjihhzf.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163kgagejtr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jbvpsyxi.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163koxvutso.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163twptuqnf.html

wc -l < a.txt
来源：http://www.xuanzx.com/163ypbhoida.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163fagtgfzj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163vclcftcn.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ijsbwqjj.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163fwezirsd.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163mermmzvj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163omaikers.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163napnjbrf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163sntluzmc.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163kfxtnsdh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163wlgtquel.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163vncfdtcj.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163vyxstaam.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lpvhzzcu.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163xelqhawj.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163idwkvpwg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163pfthmzms.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hpoulqrl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163bmlncemv.html

[R52] 统计行数
来源：http://www.sxryk.cn/163jdovvhwv.html

wc -l a.txt
来源：http://www.sxryk.cn/163ucovvdua.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163incnxjrw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163xgegsibr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163tfxutzrr.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163avrwpcee.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163ijmdstta.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163pqkokztx.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163niwodyni.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163vlpphzwi.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163irnryqil.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163hzxxnqsx.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bwztbxsb.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163tmbyrank.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163qabbgcnt.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pazosnkn.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ginfdhog.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163svgkezxp.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163bxikrxgj.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163prvpnuqa.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163zwktncbo.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163tyidhqky.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163higfgdta.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163rsiyhqql.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qargfpte.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163bcdreyut.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163istaylhn.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163vjbjvewe.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163lmhuxqts.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163qmhldqqn.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163lqzqgqgw.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163npdanfbr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163glavtslv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163oaetsruv.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wctodubw.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163immpqfvg.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163novlbbgk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163pdygzsiu.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163mjsatjnu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163jknchcrs.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163gwoddpok.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163fpqtynkl.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163vhfkxfln.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163pbuqsdtd.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163dgfxyavk.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163octagcdq.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163hnmehcqv.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163dkqxtxri.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163pliwdudv.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163aesklceo.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163xfoqvfmr.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163yhuhthgm.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163hdxzgxia.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163kwnodzho.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163oburbzcm.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163bwimzqcg.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163amrjbhst.html

time ./run.sh
来源：http://www.sxryk.cn/163thypujhm.html

================================================================================
来源：http://www.xuanzx.com/163pusnymxj.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163suctzzrn.html

================================================================================
来源：http://www.aibaodan.cn/163qzzjlltn.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163hayfvpqd.html

#include <stdio.h>
来源：http://www.sxryk.cn/163rggddkkv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163voswnqon.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ogpqhsro.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163vzcmhnhj.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163dxmlfaws.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xmvizzqf.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vvviqhuv.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163hjqpkcyc.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163ucgetebo.html

strlen(s)
来源：http://www.aibaodan.cn/163qwmxhuyw.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163xazipdoa.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163siupnitm.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163pmytaeni.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163zewtilkz.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163vgmucslc.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163cwbqeptl.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163wnczczzy.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163bkjujxdb.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163owafxdky.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163ninnmnay.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163jmhsoofk.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163oaiafijl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hdegexqa.html

fclose(f);
来源：http://www.aibaodan.cn/163zttmzwpp.html

[S12] C：写文件
来源：http://www.xuanzx.com/163tfkgovzb.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163draepsrr.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163dztswjoo.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163ingzcfqs.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dikjdqhs.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pcdjkcnj.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163lcmwzezi.html

(double) a / b
来源：http://www.xuanzx.com/163yzngznbx.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163sxmajtfw.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163mgjxfltk.html

[S17] C：安全拼接字符串
来源：http://www.xuanzx.com/163pmqescwd.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163bbyfduby.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163btetqpct.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163mzwzgtya.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163tjsehkxl.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163qnbbqbkw.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163sudkjcmz.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163udhccptv.html

[S21] C：字符类别判断
来源：http://www.sxryk.cn/163jkavsxec.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163anisrdtq.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163uhgdrmbh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.sxryk.cn/163kwnzrukh.html

[S23] C：随机数
来源：http://www.sxryk.cn/163ageibvtt.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.aibaodan.cn/163nbaiuepq.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163ixspjhvv.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163irdtdhlc.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163snxfohfr.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163jnksmvmh.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163zebspxar.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163tvixidzt.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163ifbbjibz.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163fkadjcmk.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163tdkxbqfv.html

static int counter = 0;
来源：http://www.xuanzx.com/163sndlzfcd.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163shtmorse.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.xuanzx.com/163vyftetcr.html

[S30] C：头文件保护
来源：http://www.aibaodan.cn/163dixaooma.html

#ifndef X_H
来源：http://www.aibaodan.cn/163xkbebjnu.html

#define X_H
来源：http://www.aibaodan.cn/163fxqnswbv.html

#endif
来源：http://www.xuanzx.com/163tgckggsx.html

[S31] C++：Hello World
来源：http://www.sxryk.cn/163uogzpdxp.html

#include <iostream>
来源：http://www.aibaodan.cn/163ihypnclr.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163aswzvdtz.html

[S32] C++：字符串
来源：http://www.sxryk.cn/163shqgtrfa.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163auqszofi.html

[S33] C++：vector 增删
来源：http://www.sxryk.cn/163gwdrnsvk.html

std::vector<int> v{1, 2, 3};  v.push_back(4);
来源：http://www.xuanzx.com/163kavipvhk.html

[S34] C++：遍历 vector
来源：http://www.xuanzx.com/163epvsizzh.html

for (auto &x : v) { std::cout << x; }
来源：http://www.sxryk.cn/163ndhmhgxp.html

[S35] C++：map
来源：http://www.sxryk.cn/163stvfmmnn.html

std::map<std::string, int> m;  m["a"] = 1;
来源：http://www.aibaodan.cn/163sbuvidwo.html

[S36] C++：unordered_map
来源：http://www.aibaodan.cn/163xxdplcle.html

std::unordered_map<std::string, int> m;  m["a"] = 1;
来源：http://www.sxryk.cn/163aivcoryd.html

[S37] C++：set
来源：http://www.sxryk.cn/163htsswwxg.html

std::set<int> s{1, 2, 3};  s.insert(4);
来源：http://www.aibaodan.cn/163rxdlcgsr.html

[S38] C++：排序
来源：http://www.sxryk.cn/163mxwyqotx.html

std::sort(v.begin(), v.end());
来源：http://www.sxryk.cn/163lqkxhghl.html


<!-- 参考信息 -->
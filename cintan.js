外链999!wailian999！

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163fxaxfltc.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163zywgefhd.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163ozykdubz.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163flnsbzfm.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163jgruluyq.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lfrjrvlu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163gkdspagi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163dffrstvu.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163vcfmkikr.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163cngjxunh.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163qwnepace.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163duuwfpnf.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mkvzixvt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163dfburcad.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163wmkpjsle.html

COMMIT;
来源：http://www.sxryk.cn/163gqojxita.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163coahvvhj.html

ROLLBACK;
来源：http://www.aibaodan.cn/163tcksjego.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163eeozdito.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163lstembts.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163tpzxepkv.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163lwlvjqao.html

[Q68] 保存点
来源：http://www.sxryk.cn/163vkibldxo.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163xltqdmvb.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163rwbpcwed.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163aiwlnwtl.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163hcombnuj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hstuspru.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163yehvhdpt.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163bslxkytg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163zunnlpqv.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163chsmwepu.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163zyhhlmjy.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163fnbvcyif.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163dqjmkwig.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163hauqqkod.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163femcngyu.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163yujsalrp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163syinjbhl.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163krjjwnzi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mviajjkc.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163yznunizz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163fuegvcuu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163ixeodvcu.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163zxxebhix.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163wimvbxnm.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163oflwwaef.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163qchayqxx.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163pwwbheae.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163qqrsddus.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163adpvhxlw.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163sppafukg.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ifqtlfzc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163jwhhypry.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ovvfrlvf.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163udochqkf.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xytrrcfv.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163mtettcdi.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163guecgfun.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163jqvyxiha.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163tvmgtipe.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fkvbkqjz.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163qkrakopp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ssdhnoln.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163ghabbbfn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163mqmehqib.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163dsyfhesb.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163peidpjnq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163socctfzm.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tszrdamq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163nkthhwgi.html

================================================================================
来源：http://www.xuanzx.com/163tjhksxkf.html

R. Bash 专题
来源：http://www.xuanzx.com/163mxtxfbtt.html

================================================================================
来源：http://www.aibaodan.cn/163ddlmlrsq.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163lbujqpdh.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163mapyfagp.html

set -euo pipefail
来源：http://www.aibaodan.cn/163zcsnfoxf.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163sejgzmkw.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163kdlkiwuh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163hpijeiyu.html

readonly PI=3.14
来源：http://www.sxryk.cn/163jicdgtis.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163bqujrrwj.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163szrilmgo.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163flshpdyf.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163rrssptxx.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163gkgaupix.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163nliitpdh.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163jkxaedzc.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163badtcuvj.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163broqgsqu.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163mltnebij.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163nyadxoau.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163rvfqgscu.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163xhjcwrir.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163txkvaicx.html

[R11] case 多分支
来源：http://www.sxryk.cn/163nlufkcrd.html

case "$1" in
来源：http://www.xuanzx.com/163vqwfspgq.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ebydsyot.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163jhiyfqmo.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163hsizvapn.html

esac
来源：http://www.sxryk.cn/163amoyrwuz.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ntbhtjny.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163omhljhrt.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163occifngw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163ddccpkes.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163otkvxmld.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163jcyrdeli.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163elncsfvp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ilwiabai.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163gayqwvsc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163qqfwzqcn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163jiybxhqj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ebwcparp.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163psazoqap.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163ptoeqsla.html

[R19] 数组长度
来源：http://www.sxryk.cn/163ewtranvc.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163rppnsbck.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163alluaral.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163yiktrumt.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163jtpqonwf.html

echo "${#s}"
来源：http://www.xuanzx.com/163rbtijwwi.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zbbmfdmu.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163gbcpnzrq.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163malqshzk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163jsqtyxnw.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163vpqrmbai.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163ipqlihle.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163pvcjsala.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jltysfwg.html

[R26] 命令替换
来源：http://www.sxryk.cn/163rcwoitwb.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163fzdrjzli.html

[R27] 算术展开
来源：http://www.sxryk.cn/163qtuburpp.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163cbfqwihg.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163qfyfxqns.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163eqweilga.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jlyfcubu.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163gbilreyu.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163squkkqzq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163oijjgjtd.html

[R31] 局部变量
来源：http://www.xuanzx.com/163adllorkt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163clpfdqrs.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163crrhdeyq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jcfuxnti.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163vfoiwluj.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163gcwqjtea.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fmltbzpp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163hvdgoqyx.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163lckysztb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163embyieta.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163xdoitikl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163xbtassyb.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163xnvsecom.html

files=$(ls -1)
来源：http://www.sxryk.cn/163rplgxyuk.html

[R38] 管道串联
来源：http://www.xuanzx.com/163qnikdvtv.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pyaqyspw.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163slezzudj.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163xzictfkz.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163mfmjjtyf.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163kqtrxvto.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163hocovcza.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163evdcyjdc.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163xmqolnhz.html

wc -l < a.txt
来源：http://www.xuanzx.com/163slnsqnst.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163solhronf.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xazbrpcp.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163prkdjhja.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163xoviktuz.html

[R45] 批量删除
来源：http://www.sxryk.cn/163ihnrglhu.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163xxubzkje.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163kiwjxyiw.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163vuntsncm.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163yifdrizo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jhkkcbwu.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163rneyfjyo.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163emktunmm.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163daelqxtc.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163mzhqdgzl.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163aabwfoja.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163hyczaawk.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163nprhofle.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163errwjfsc.html

[R52] 统计行数
来源：http://www.sxryk.cn/163firaoeor.html

wc -l a.txt
来源：http://www.sxryk.cn/163aqzemlmn.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163wxqvrsfv.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163fnbkaehg.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ibwmrsjl.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163fgogiwmy.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jvxsbaqm.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bdgfkzle.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163cvdvuhcv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163fkyifdwe.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163khdqfxto.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163tlbkvdpb.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163tuluedsk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163bnxnxhdj.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163jzthwsoz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163kpmjnthz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163barreyoa.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163daeruhof.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163dheqipsd.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163uzonypgd.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163lmgdazdc.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163aiiqfhby.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ygzbvvkn.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163lhffzwhu.html

[R64] 结束进程
来源：http://www.sxryk.cn/163opjmizgb.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163jmkupuey.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163aedhbqok.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163hmnpmlvv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163hvryrtvo.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163wlzblvvj.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jhmqiotd.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163enxfseaw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163hziilbht.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163asqdmoyv.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163pwheczbd.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163rraznzeo.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163tkmdwjzn.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163zonpaexf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hrwmyivm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163bofdbovd.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bxvoskov.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163lhtcqtck.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163sadzgedo.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163zeocgjxg.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163ofjvvris.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bisbgooj.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163axewagzf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zzkkxojl.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163gqtnkikc.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mskgflek.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jfpvlzjl.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163mkeihvhy.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163wxpfrvif.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163vbngvowu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163pisgqzgv.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sprpwuko.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163bhfokqmz.html

time ./run.sh
来源：http://www.aibaodan.cn/163ificnacz.html

================================================================================
来源：http://www.sxryk.cn/163srbmbotw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163tyyornsn.html

================================================================================
来源：http://www.sxryk.cn/163lnqryqro.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163dimtphup.html

#include <stdio.h>
来源：http://www.sxryk.cn/163lktduzxh.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163upfoljao.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163odnfhwze.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163dhrlocxa.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163ibheckxr.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163xwekkrxq.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163dnimlkgw.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163vbzcisxz.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163eghhimhr.html

strlen(s)
来源：http://www.aibaodan.cn/163hdxmtzjm.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163aengbgjn.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163wzsbzzje.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163aokxpqkt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163wmmyjtxn.html

[S08] C：动态内存分配与释放
来源：http://www.sxryk.cn/163dsrfkeer.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163wrkcgnkc.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163zftjobue.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163ucsajncn.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163kffjczxr.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163lpexgnmw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mqvucsgq.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163pdgvubdb.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163dndrhyha.html

fclose(f);
来源：http://www.sxryk.cn/163nbeetfqs.html

[S12] C：写文件
来源：http://www.sxryk.cn/163tyqmveyj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163pcuiokor.html

[S13] C：宏定义
来源：http://www.aibaodan.cn/163esqadwje.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163ddmbvycy.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dcngcqfk.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163pkomttsr.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163tjopzzzt.html

(double) a / b
来源：http://www.aibaodan.cn/163qlbbvlfi.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163klbmjdml.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163qnipepjz.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163rglwrqoo.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163ailzsdhv.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163tcbrnmyn.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163ociovqpm.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163dofzbodr.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163uwpxrmza.html

[S20] C：二分查找
来源：http://www.sxryk.cn/163omyerers.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163lrfwzdig.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163jxcnixyw.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.xuanzx.com/163jalqzkaa.html

[S22] C：字符串转数字
来源：http://www.aibaodan.cn/163albifzbh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ylinowjy.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163waofuira.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.xuanzx.com/163obrhxjvv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163glqggeos.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163ebubvyxe.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163ucyzdwql.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163eiwovotf.html

[S26] C：内存清零
来源：http://www.aibaodan.cn/163aeuvlbli.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163ohbepcnh.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163wsiurdlo.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163slhydzzs.html

[S28] C：静态变量
来源：http://www.aibaodan.cn/163vvtldoqi.html


<!-- 参考信息 -->
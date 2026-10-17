外链999!wailian999！

[Q33] 多列分组
来源：http://www.sxryk.cn/163lncjppsc.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163vmdbrzij.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163tyuywsfi.html

SELECT * FROM (
来源：http://www.xuanzx.com/163yvcnsdau.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163abyucvzv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163vxesbyex.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ocunwgib.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163etrwfptl.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163mhjcdmxf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163tbuehlnz.html

[Q37] 右连接
来源：http://www.xuanzx.com/163wfcgnsgl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163awrglygf.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163kbcxrsag.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163aukqtosc.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163bdjcuqoa.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163zrixkclu.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163jxgcbplu.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ilzjupvc.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163ahtwoqxj.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163szdebaup.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163jwshpczs.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mzdbkbcs.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163jodctyeo.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ayeeaxql.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163qqorirso.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163ttcljepu.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163mktxezuy.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163dutjmafu.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163crcppsex.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163afjxtpaa.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ukomtuvf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163rmrfgepd.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163rnaoiryt.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ubmhpequ.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163ojtzjvfr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163bvltmvgg.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163zsqvdwme.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163sqfhouyf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163txhkiyul.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163wmfraypt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163cjlxhckg.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163jzfizdxw.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163mhymroip.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163sppapbxp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163uwmygple.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163cfiaztas.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163pswaqeeo.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vvasfetn.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163kkdatwjy.html

[Q54] 清空表
来源：http://www.xuanzx.com/163msnhkfyy.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163xqarqjgo.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163tgpmswou.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163tholzfdj.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163iywshvvm.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kzszsvly.html

[Q57] 行号
来源：http://www.xuanzx.com/163wqtpvfwq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163oanyrxtw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163ulcqgolz.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163bzomksko.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163jtcaxpdw.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163uqmyultb.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163cebmevpp.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163rybnjolv.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163hdvbflzv.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ufotwuyc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163dsscexhg.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163djpegwzi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163dqiqeedb.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163tenqtwmj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163vshzadyq.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163ovghxssu.html

COMMIT;
来源：http://www.xuanzx.com/163sheupotd.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163leldivjl.html

ROLLBACK;
来源：http://www.aibaodan.cn/163nphytgcw.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163chldgrsr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163pjcyfzqa.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163vepxlguh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163fnwegdwg.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mvlgbdau.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163xkusanxw.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163rzhyhicz.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163cswgkwka.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163tmqhkwee.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163ccisvuzh.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163mcrvxgio.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cxqayukx.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163fbjwgemy.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163iflxquib.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163dafbhjnc.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xgcihwis.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163jyvnngbs.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qtpsenvv.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163uyukqatb.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163iltvimbh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163idbrtslu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163brppphlc.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163pztqurhx.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163fzdwhcrc.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163vktjdkej.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163lfasycrm.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ejdfbjsu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163cadjhfyx.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163smhbesmh.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163futbjqwk.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163hykldrwe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163xwrksxpz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163xrdziyet.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hxyqnyrb.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163usirlfte.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163zcajujxc.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163minonofw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163tmtxfdzj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163dctcrzst.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163tociqnqn.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163weczvcgz.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163exrvdopm.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163qdqgpxoh.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163yjuvakpm.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163yboipsxm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xhfvptxn.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163aucnyrls.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163iwetnddt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163gnfrbupw.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163qvpexmhg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163kwakmonf.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163omlriskp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163mzcpdeop.html

================================================================================
来源：http://www.sxryk.cn/163onfmtmxa.html

R. Bash 专题
来源：http://www.xuanzx.com/163jqoisxkl.html

================================================================================
来源：http://www.sxryk.cn/163mgkrlcuw.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163erbdbxkt.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163nqvjstou.html

set -euo pipefail
来源：http://www.xuanzx.com/163dhnyzwgc.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163ewddrqev.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163qvzbgioj.html

[R03] 只读变量
来源：http://www.sxryk.cn/163baplxpiy.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163bfcmzmqn.html

[R04] 位置参数
来源：http://www.sxryk.cn/163sfgfetzh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163cnmtfzth.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163agmbqugm.html

name="${1:-default}"
来源：http://www.xuanzx.com/163ivdyjyid.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163isksllfj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163rhrluvem.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163kpvibxbn.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163bzxaibsn.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163otnvzvet.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ljvxewus.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163whwqjaef.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jlhmsqid.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163tbseococ.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163boptfxic.html

[R11] case 多分支
来源：http://www.xuanzx.com/163zzccqcle.html

case "$1" in
来源：http://www.aibaodan.cn/163lgmjfxdv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163pkjdullk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163imdfnagk.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163wycrarht.html

esac
来源：http://www.xuanzx.com/163wszgiscm.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163pxphqgzu.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163gzrwlsuk.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163dbatjryw.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163aockalrx.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163zwwwdqno.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163hguygijo.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163sfywyvfn.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163ojykgjln.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163gbsopphg.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163fdsqwldf.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163avcrbcci.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163fcjykzmm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163imvdtvso.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163mcmhmxcl.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163teivicun.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163abdjwlfc.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163otwtvcst.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163aurijdmj.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163iefrhlcm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163cqfqjmft.html

[R22] 截取子串
来源：http://www.sxryk.cn/163uwrmnqmj.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163pckevswe.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163kmdbctau.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163bpojzauf.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163zfahuyzj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163msleofjf.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163hkeyotvg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163icgdxdwh.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163kihzzxpk.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163wbjntypr.html

[R27] 算术展开
来源：http://www.sxryk.cn/163bfogbhdm.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163xeurqvgk.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163xxxpdyij.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bdljxhxz.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163jkhtjmny.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163rkytexye.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163gzejbqsc.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163wquynocm.html

[R31] 局部变量
来源：http://www.xuanzx.com/163qtdyuvvp.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163rqimqang.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163rxveshrc.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163atcdkwnp.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163tkrxhhdr.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163ilxxbhkk.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163zcmuopiv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bnxogucu.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163dalrjzud.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163uozlutjd.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163lwsefjeb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wbpdmfrn.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163clnocheb.html

files=$(ls -1)
来源：http://www.sxryk.cn/163uylzdkfu.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ajxjigwq.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163tiocxfub.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163kozaotra.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pxtrlraw.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163xsyuwwec.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163zpkumdhh.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163naypqcqb.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163wagvhfes.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hdufkqyr.html

wc -l < a.txt
来源：http://www.sxryk.cn/163qkpfedab.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lwhwsmsv.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fobjjohy.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163yfeuynob.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163cnxeslaf.html

[R45] 批量删除
来源：http://www.xuanzx.com/163gtkwozmk.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zijzjmol.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163wfgumnvf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163febtoybl.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163dxlbzwfo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163xutrgkgz.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163jmelbklz.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163huwbhcfx.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163xuyygwvm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163qhqmbjqc.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uzhrxjuh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163wjokfhgu.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163xypctecq.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163rspkjvgw.html

[R52] 统计行数
来源：http://www.xuanzx.com/163oryrahgy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ujuxbhlu.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163fbaeicbb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163srltmrkr.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163enxerogn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163pbzrztxs.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163fssjtkop.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163yrwmzhdk.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163hhahckfo.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163kqxijazk.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163pyhekxfa.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163pupuvyzn.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lktjwwhk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163rmwzmlnp.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163aeaybiid.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163aylhhhbk.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163etalqaxs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163blppddey.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163algunzjs.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163avlwzojz.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163igyowuxm.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163exxbieqa.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163qnkiblun.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163mcfkgmpj.html

[R64] 结束进程
来源：http://www.sxryk.cn/163cgivrggb.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163nwayjotr.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163kkfbufnz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163bblytatj.html

[R66] 定时任务
来源：http://www.xuanzx.com/163frsxagxn.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163urcdzbai.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163czrmyjpd.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163ffjjcakl.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163snlvrrwy.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163tkodsmqa.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163ibwzzsxx.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163iulcntab.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163lroorysy.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163jowsmowp.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hlevxauu.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163zvglftsy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163hvfrewcs.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bewzybsm.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163ormidklo.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163yqtfsgvb.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163mcjegvrt.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163unmolaro.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163nqnfwcen.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163yvpnxonw.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163yoweuyea.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dwqnwulv.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163uborzktg.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163ywdtbdcr.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163ypgmwcjk.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163wmfibvhd.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163zjkdtrpe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163rqczllso.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163pbikdexw.html

time ./run.sh
来源：http://www.aibaodan.cn/163otsyjpxy.html

================================================================================
来源：http://www.xuanzx.com/163zjoktftl.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163yhatjpfq.html

================================================================================
来源：http://www.sxryk.cn/163mzfrrzro.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163zwxanffa.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163leoawxvt.html


<!-- 参考信息 -->
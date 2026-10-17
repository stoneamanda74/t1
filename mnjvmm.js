外链999!wailian999！

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163ljhzohiq.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163yjoqeujl.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163vailakry.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ojhhmlus.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ridqtzkk.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163shtkhmmf.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163uclhnent.html

SELECT * FROM (
来源：http://www.sxryk.cn/163eepkfpov.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163crirlhnu.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163alisnhwb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163npxknpvt.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cvmzctqa.html

[Q36] 左连接
来源：http://www.sxryk.cn/163ullgrcpf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163rlkccvru.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wutdnlru.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163noggwchs.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163rhvfaslh.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163lsnndbdl.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163wvlqfimq.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163hnasbhkp.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163rdakchzn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163zvlyrhdn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163ammiaabk.html

[Q41] 多表连接
来源：http://www.xuanzx.com/163zymvriup.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163iogyukvc.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163mmcqzxgj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163hnbzheyb.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163ogamolnc.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163fqbfqyrq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163zxjiainc.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163xigufdof.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163raelqson.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163ruojfjdt.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163czsjhtsw.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163rinvoofv.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hjawvcyc.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163vxjkitsg.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163oseexoyb.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163uzdchyrn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ivhxgioa.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163vjputsxc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163yqfaxcli.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163ecbsxmvj.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163jjrehhid.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163nknxsbak.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163rololrxe.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163npmyucde.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163drullirm.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163qekkenku.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163bsjheppl.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163oxzejlig.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163hsxyidja.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163nodezzke.html

[Q54] 清空表
来源：http://www.sxryk.cn/163poantmkq.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163iopjfciw.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163hrrswbzo.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163juvrjqjp.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163aolpbzxc.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163vthpbhpj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mqnqridj.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163jupxtlsq.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163cqehhrjx.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163nspupksc.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163iuzozsgx.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163yogttzrc.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163yunnflcv.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163prumoedo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163sebxjmsr.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163gyqcyqma.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163hmpmcomx.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163tzutehxc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xlyrdjhd.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163hhrgxrze.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163uqviyzsv.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163svgrwvqi.html

COMMIT;
来源：http://www.sxryk.cn/163flzytjzr.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163rizuwiym.html

ROLLBACK;
来源：http://www.sxryk.cn/163ykpflcpq.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163ryceelkw.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163awhvapab.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163nnccgvgf.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163yiwjmgom.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ynyserux.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qowijeph.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163diuntycg.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163blbgecgq.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163ziwnbotj.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163zgsxumqt.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163mngozouq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xaqbuxwt.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163vuaofvuf.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ajkighez.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163bmbqcrkv.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163vuwewjdg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163etmxuuau.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163acaujzjd.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wqtfqppo.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163yoiwuvhd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163susotpjp.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163oqjtbaog.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163zdhlmlti.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163prxgbwpa.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mtnqsdza.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163wauweyzl.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163qntqndrs.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163wbohtmrr.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kxqhmdmr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163fcophqss.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163yggkkxzb.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163gwbuuwop.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163rvwanyfp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163ykfeqqnf.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163wnejsjjc.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163zymddrxr.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163ecoqdeou.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163dczwikxe.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163fxlmyqaf.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163vroxpccp.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163ngjhfkno.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xhqkmcat.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163ojfsmjfi.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163sjoepddo.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163ckritlvr.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163eofszvnj.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163lttjvuio.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163fxqhndqu.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163iojrqalg.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163frdxtqxm.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163lckcflvh.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163swiylvjx.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163axwogqoo.html

================================================================================
来源：http://www.sxryk.cn/163fdmodmbh.html

R. Bash 专题
来源：http://www.aibaodan.cn/163ftjlmfdo.html

================================================================================
来源：http://www.sxryk.cn/163rxjhheoc.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163oiazenjw.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163kflsrbzm.html

set -euo pipefail
来源：http://www.sxryk.cn/163jhguwmap.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163dldvyily.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163yiainarh.html

[R03] 只读变量
来源：http://www.sxryk.cn/163htyvdqgj.html

readonly PI=3.14
来源：http://www.xuanzx.com/163qdvuazcs.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kbohgwpi.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163jtfdydlc.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163kkegkbkk.html

name="${1:-default}"
来源：http://www.xuanzx.com/163upgjxerf.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163frqxyutr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ogtmxarf.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163xzaoeteb.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163sniwnnez.html

[R08] 数值比较
来源：http://www.xuanzx.com/163wnzwixti.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163drwcklty.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163cxowczia.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dtfxplns.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ewaggutw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163nchfhdal.html

[R11] case 多分支
来源：http://www.sxryk.cn/163deauusii.html

case "$1" in
来源：http://www.xuanzx.com/163ffvuzrlv.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163sevkgqby.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163gjqgjhlt.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163jasbyprw.html

esac
来源：http://www.aibaodan.cn/163wsncvesi.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163mboteurw.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163skzsggup.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163nnlawdoh.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163vgflvxsu.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163eogidctc.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163ipmwloja.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163ostsjgug.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163degolerc.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163wkqtfrxa.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163fjybfmsv.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163txzxqtkv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163jugqxtzl.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cxrznols.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163fwjmpabq.html

[R19] 数组长度
来源：http://www.sxryk.cn/163mtutglhz.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qhkfaxdp.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163btlwclvw.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163appdyznd.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ukfbdvix.html

echo "${#s}"
来源：http://www.aibaodan.cn/163jwlufwzq.html

[R22] 截取子串
来源：http://www.xuanzx.com/163vjhywths.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163ufmpauif.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163rvixluqh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163gecpkuow.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163pifixjca.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163zccpgmxs.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163biitworw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163srjkmuoo.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jamhlyhx.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163rzxcehvv.html

[R27] 算术展开
来源：http://www.xuanzx.com/163kmkvxijb.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163xmapftag.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cfmlmmvc.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163gnnmnbsb.html

[R29] 定义函数
来源：http://www.sxryk.cn/163pcekrfvf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163lvflbcrw.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wpmuntkk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163vtixaezl.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163oislyjmx.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163ifjzipku.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163mologrgp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163srvuwvfx.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163bgcncesm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163nzrloift.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163fgitkvmv.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163pvpyhmky.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163bvotnybl.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ebswaley.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163atfuxykq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163vkzbnerk.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163mlyozakf.html

files=$(ls -1)
来源：http://www.sxryk.cn/163jbnxiceg.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163zcyhhmfy.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163aqpvwzfc.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163outbmbrw.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163otitxqcp.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163wolqymuv.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163nzqainac.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163pkyxikgy.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163jqpketvd.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163dcrlvfek.html

wc -l < a.txt
来源：http://www.xuanzx.com/163rucjnlpi.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163uydtyopa.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163ljwksttr.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163agwqmaig.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uvstznuu.html

[R45] 批量删除
来源：http://www.xuanzx.com/163loswrdbr.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163fhdsnejn.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163qjaapqxk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163wqkupfyh.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163suvaxldo.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163hqlfcquk.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163uyvzagxh.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163bblewgng.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163tkslnalq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163pttcxgwc.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163ebbekizh.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163sntmxwqt.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163ozkxizel.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ibfqecof.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163weotxctf.html

wc -l a.txt
来源：http://www.xuanzx.com/163steesvjt.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163cneofwgf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163trmfvkfv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163yqxwsisn.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163bjaudjrz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163skgtmdih.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163jmpckfdo.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163qzrhpkye.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163pmmnmtvx.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163lgawedht.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mhdlbqtx.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163mmbuewlz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163wypscuay.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163dmvylbnm.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163gnyufmep.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163bmhccwec.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163pedckdrc.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163wvvhxpsf.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163uzpewhfu.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163pzklwgql.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163nwiqzloz.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163kuwrfzxf.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163onvbvvyk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163rmdfjdpa.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163vagocojh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163qdufhllt.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163nhodicbp.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163omvvmsxj.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163vampliwh.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163krpadoft.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zzjrytfb.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163dhydqjsu.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163yrjqtevu.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163rzzvxlgm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zteqjzmv.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163xisqyuva.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163sfegrbuu.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163mzbrmeye.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163nutojfwj.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163wniypiur.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163uiwzicmf.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163beqtfzsq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163oguehkqy.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163pqggztoc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163bkwmszal.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163ishpwejf.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163lpkcdjwy.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163yfeqdngl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163tkmblxam.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163dbphlvgn.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163vhbqlibo.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163opmrvcfw.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163ftqdctxj.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163vthiwrge.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163mghjavml.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163tdxkaixg.html

time ./run.sh
来源：http://www.xuanzx.com/163gbvpksmf.html

================================================================================
来源：http://www.aibaodan.cn/163ttdojpjl.html


<!-- 参考信息 -->
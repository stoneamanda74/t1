外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163vvylejgs.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163sitkvpds.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163qaaazxno.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163lhtrihgq.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163dyvcjrxl.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163nmsmkakn.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163uskvvucm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163cuufpwrw.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163uhqwjgjx.html

[Q22] 排序
来源：http://www.aibaodan.cn/163hqztotjr.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.aibaodan.cn/163mnurgbpx.html

[Q23] 分页
来源：http://www.aibaodan.cn/163vxcaljfk.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163fpfnabhu.html

[Q24] 去重
来源：http://www.xuanzx.com/163urjsaqer.html

SELECT DISTINCT city FROM users;
来源：http://www.sxryk.cn/163brgfibzt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163kkiaharn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163qtehvcjg.html

[Q26] 计数
来源：http://www.sxryk.cn/163hwxdhboi.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163laqbfxoy.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163bksdlwfx.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163kydmvqla.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163ollyiywv.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163vtzrhufe.html

[Q29] 最大最小值
来源：http://www.sxryk.cn/163qkobqhoy.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163olaueqit.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163xzwpnvbn.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163zvxyjgvc.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163ruitohko.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163gtgrkwxf.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163nqvlzrye.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ylhrfkqc.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163ddoxtdfh.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163jsvbvfgx.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tpihmevu.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163zfkhqtzj.html

SELECT * FROM (
来源：http://www.xuanzx.com/163bfymssnx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163limmztvv.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163jkmrvnms.html

[Q35] 内连接
来源：http://www.xuanzx.com/163ugowscsb.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163zmaimomz.html

[Q36] 左连接
来源：http://www.xuanzx.com/163mciwcncr.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163cbbgdiaj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163zftmkxlk.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163woyfvyif.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163lsfwzbpt.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163prbljyjz.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163wcuuwufi.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163hdwdsjia.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163iueoyhxs.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163scfqkbcg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163qfayggea.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kisjztin.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163aodoozrd.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163wsevmffp.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163lfuejtfj.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163kxcprlgl.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163lbpctfal.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163vcwxzqvz.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163itdxuagl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163wmmxlell.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163njytzcpv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163hhhvhmws.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ajtkpbbl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163csxwatkr.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163unpzqgds.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163jdamaxng.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163nueuqrco.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163ugcdayzy.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163ahkybuhc.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jstrndph.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163joqgcevs.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163qknkerza.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zmteqase.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163fokkxyof.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163dfldpbdz.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163ypsilwsj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163fnghtvyh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163tawgvxsy.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163iwtlzrpu.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163bcnowmln.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163wrbbocsc.html

[Q54] 清空表
来源：http://www.sxryk.cn/163roupllij.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163ylpcglmk.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163omrhlvpv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163zemzlgqt.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163bcvncnce.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163wlabfsdf.html

[Q57] 行号
来源：http://www.xuanzx.com/163jempacib.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163bwrwyaag.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163rqjfulew.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163roptjfzk.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163vqtxtoti.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163uhiunlaa.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163kzilzvpz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163yqejuead.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163vdcotpzz.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163mhbidlfu.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163rlcbjdtd.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163rjyhcrxt.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163wudtqwux.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163mxupxtsh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163lttegprd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163jafrpbht.html

COMMIT;
来源：http://www.xuanzx.com/163goqsjheh.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163dneznrab.html

ROLLBACK;
来源：http://www.xuanzx.com/163tpwksert.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163xgattdrs.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163qdmekltw.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163naadvsdi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163marncpdx.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163tjigmzbh.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163ryofqjml.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163dxytqvsq.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163hkhqjzjf.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163gfnrkpvl.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163etxltwxj.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163yzlebbji.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163imdepdxf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zeqpoosr.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hebrfcnz.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163baiohoca.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163uzwxcdzp.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163djslvpsk.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163zwylwluz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163jszwsugv.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163kcbtxsxn.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163utepjpzh.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163fzzzjjon.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163csvnxhfk.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163olnkzdbi.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ihamreip.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163qyifgtno.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163udiiqqvq.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ehxshgwh.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163vpztmwqz.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163jnydnbyk.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163vqavjmok.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163voyfnqvo.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163sdfpvgso.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ujgzhdku.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163pxchfeae.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163loicngdt.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lacrfqub.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163nnzmiqir.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163ulryejvi.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163ksctmyzr.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163tcemgzct.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163qyvzrvor.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163eoaiocdn.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163yngdsrlu.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163isnvgrgj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163ywisdqhx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zbaffwng.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163polhafjg.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163evvrvvtg.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163hqrcdqdd.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163qqgvlwri.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163huywcqiq.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163vbwbuvzu.html

================================================================================
来源：http://www.aibaodan.cn/163vmxcudnv.html

R. Bash 专题
来源：http://www.aibaodan.cn/163fnejhgrl.html

================================================================================
来源：http://www.aibaodan.cn/163sdfwwajx.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163aqtikjil.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163fwdkgfgp.html

set -euo pipefail
来源：http://www.xuanzx.com/163xymwqtil.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163skwmzecg.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163gcnwmofp.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163kzlqksys.html

readonly PI=3.14
来源：http://www.sxryk.cn/163arcgkiiy.html

[R04] 位置参数
来源：http://www.xuanzx.com/163fhlrolmk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163dywixkee.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163yvgngzyo.html

name="${1:-default}"
来源：http://www.xuanzx.com/163qsvfahjz.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163lpmyafon.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163vjocobll.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163fyndpfdz.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163qyhaezki.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zpgactzm.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163ohanvrrv.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163xdsxsqzf.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163rsaofjwa.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163ltjckcmf.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ncvufnmm.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163jttqbsyx.html

case "$1" in
来源：http://www.sxryk.cn/163fkqwoaph.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163snvuaksg.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163zplvghrf.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163leuoadeg.html

esac
来源：http://www.aibaodan.cn/163cawupony.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ldytjcbp.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ueitswgt.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163lduisfdr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163mzbxdika.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163roltsbwf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163mcgwikmq.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163dhwwiobm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163jjhepbqj.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zfkuxjev.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163gppfralz.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163kxyzyqsh.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163priwwtwr.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163znsvzfyl.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ojgjtuvr.html

[R19] 数组长度
来源：http://www.sxryk.cn/163jdwiouxx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163ztpiqdok.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163yjohswrb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163xyvxipkr.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163nxupfloo.html

echo "${#s}"
来源：http://www.xuanzx.com/163jzfwirok.html

[R22] 截取子串
来源：http://www.sxryk.cn/163ksjpvbfb.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163shnfqtxx.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163opuwrezn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163fgkmrvxn.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163wekdphhj.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ziarstig.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jpqslvbi.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163qungsfbr.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ncikkgju.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163nlwwiuwo.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hbqkwbqc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ozoslwbx.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163uusecsda.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163qrrrwxkn.html

[R29] 定义函数
来源：http://www.sxryk.cn/163dhghutaf.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163otdctfyu.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163fzzikjoa.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163pbcqjekj.html

[R31] 局部变量
来源：http://www.sxryk.cn/163jscaejfy.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163wukkqgwy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163mpffsilw.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163xgzjtktk.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163gzbgyzxo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163cyxmhwwz.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163dokklbbb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163hncdrqap.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163pepvfinb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163yscihgwv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ypsofgpi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jwdpbfxn.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163nflluwjx.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163enchzxza.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163nearnfob.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163oqpxqjwf.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163hcrfzspk.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nadlkqdm.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163hfebuppu.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163ccrsedpk.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163lfcxlbrr.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163bxhtzbug.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163wnvzygol.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zkkqnwtc.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163hditoxub.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163sydoskkd.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163vwhdcmme.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163zreedqyx.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zluxblju.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jfewfcoh.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163mfeergdk.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163dlikroap.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163xvosusjk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lacaulln.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vqteahit.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rmfeosjk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163apxccsli.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ivfgarzg.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163emawhqid.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163vrnrdoji.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163aiaevohu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163hagysdjy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163oqtyggge.html

wc -l a.txt
来源：http://www.aibaodan.cn/163bqorhadb.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163qtsixaui.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lojojwzm.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ygzmodyn.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163prdfwxtm.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163jwyzxidw.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163fvrggrai.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163ylmhatwt.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163avzvyuqt.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163cmfowbfd.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163yijoggbl.html

[R58] 下载文件
来源：http://www.sxryk.cn/163bqfszvxd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163rndfrhkk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163urqqfnbd.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163sxzkpbcu.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163szmrfrei.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163shrpojkj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163qfbjlvlr.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163qehstrca.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163eiysfmlu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163xuwmjlmb.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163demqtxtr.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163fsoskwde.html

[R64] 结束进程
来源：http://www.sxryk.cn/163xjbdezhb.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163ceozkruc.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163gemljtrz.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163cbcvyken.html

[R66] 定时任务
来源：http://www.sxryk.cn/163osztgfki.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163zoeubttt.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163jnpqacxv.html


<!-- 参考信息 -->
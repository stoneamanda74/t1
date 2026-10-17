外链999!wailian999！

INSERT INTO users (name) VALUES ('C');
来源：http://www.aibaodan.cn/163cvhclouh.html

SELECT LAST_INSERT_ID();          -- PostgreSQL: INSERT ... RETURNING id
来源：http://www.xuanzx.com/163yqtalgeb.html

[Q13] 忽略重复插入
来源：http://www.xuanzx.com/163mbaqakxp.html

INSERT IGNORE INTO users (email) VALUES ('a@a.com');
来源：http://www.xuanzx.com/163oxrhgkzw.html

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163qxytrcbc.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163cydkgynl.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.sxryk.cn/163dkyowdqm.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163dcvmvcnu.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163dmzvujcl.html

[Q16] 查询指定列
来源：http://www.sxryk.cn/163srqikmgp.html

SELECT id, name FROM users;
来源：http://www.aibaodan.cn/163wtrktceg.html

[Q17] 条件查询
来源：http://www.sxryk.cn/163duijjpsn.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.aibaodan.cn/163djozcvyl.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163gdeyrcqe.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163hdohzsga.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163avxdphdb.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.sxryk.cn/163wgfrkjuc.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163hkziwlre.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163eoxmrmnm.html

[Q21] 空值判断
来源：http://www.aibaodan.cn/163sfhdlimv.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163gjjntsxk.html

[Q22] 排序
来源：http://www.aibaodan.cn/163degcvnuc.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163qkwvweza.html

[Q23] 分页
来源：http://www.sxryk.cn/163xeeljggc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163jktoeeaq.html

[Q24] 去重
来源：http://www.aibaodan.cn/163tkgrpamk.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163zntqbeuy.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163lkshjjff.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163rdovkvkt.html

[Q26] 计数
来源：http://www.xuanzx.com/163lwmbcowg.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163mfgzcvwd.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163ybiblpur.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163qhartgsq.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163zwvtvybr.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163pfetmjin.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163nbshezep.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163eiyaidfk.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163tjkqpvzw.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163axksimpb.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jvfzyghi.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163ppfugoig.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163guxbtxsq.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uclyggws.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163cjmdkvrz.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163zkbimlsl.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163uemebvkw.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163cbmhplyl.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163wiocoyis.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163ervtjsmm.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163mdyqwnuh.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kslywaow.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163kukpdpbo.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163lkujhfip.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163ljkpeoiu.html

[Q37] 右连接
来源：http://www.xuanzx.com/163ymjdkxcm.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163bdusmgzc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163igxtvyda.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163awoadptr.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163nntbcmlt.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163sudhrxnw.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163cmxjkvxl.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163cesybkhn.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163nopvdtwh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163nzvquzap.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163epdrqxlh.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163lkaqnlpz.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163qbvhoztq.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163oscjplkv.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163smusucbx.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163ppdkmjlj.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163tethbtom.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163nlvqdaxy.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163ftqtskru.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163gywpfupd.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163zbmctxto.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163diqxhfux.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163pyjpronk.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163hlcunmqm.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163olyvhtdw.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.sxryk.cn/163chnwnrkw.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163gfgdqgjg.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163xuzmaaxe.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163jxelaezu.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163xewklwmh.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163qtuhqpay.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163ooxmcsjv.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163ceqduqvf.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163yrfamnkp.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163xwirzzvg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163fooabkhf.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163czbaweku.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163flnyzwsv.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163pprrhakm.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163hsobqnsh.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163roppjolm.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163rdrwjcoc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163ufhqwafv.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163mwvvhyow.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163gwludcko.html

[Q57] 行号
来源：http://www.aibaodan.cn/163gzadisom.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163pdfmzcqw.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163jafpmvtn.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163zozqyhfn.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163ywvduaov.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163msbhjyui.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163xvtkabki.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ddzbgxjk.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163mulncvsj.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163kgnetsgv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163kdfadixy.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163yzjbxtac.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163qiiybafj.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ukxhltsx.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163nwfdgmuc.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163vwrmotqr.html

COMMIT;
来源：http://www.xuanzx.com/163awzzuwfa.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163jeoczyie.html

ROLLBACK;
来源：http://www.xuanzx.com/163vcbtwsom.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163gnxapyzr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163sfhmpghd.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ugokndzc.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163dlqjqywm.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163uobmbqyu.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163ceafhlgx.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163gukucycj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163opuiojjb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163lizocegj.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163yrnmdvpx.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163agehbjwy.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rglrucua.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163wvkseqqn.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163jqpecmog.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vfcpyuiv.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163efsgfqhc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163ukhsfzkb.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163iiohwhrh.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163cldavleu.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163mshghwju.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163voekmkkk.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163dfuqjazd.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163xqfrarew.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163putclfau.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163mxtwofbc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163jswdpxnd.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163dsdxtpsm.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163gwybnlqb.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hgndwidt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163oioiaxzc.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163okvjjich.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163nomgstrk.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163iymzevzp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163hydyhzqz.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163kohjhxla.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163pqcarsma.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163iptekedg.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163yoxlooxh.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163cycfjwno.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163mfbccdda.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163bermfcsq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163zfgqiipu.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163mjksugdb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hylxlefb.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163kxdwfpjz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163kgodvgcz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163gvbhdcir.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163dxfqvfit.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ouugvnio.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163qtgiwswp.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163rmdbleui.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163xdtgxdau.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163qwpwtpfo.html

================================================================================
来源：http://www.aibaodan.cn/163zjlozeao.html

R. Bash 专题
来源：http://www.sxryk.cn/163mhcymldv.html

================================================================================
来源：http://www.sxryk.cn/163ikwlowhs.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163nokxltmr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163tilfaogq.html

set -euo pipefail
来源：http://www.xuanzx.com/163lbcyizxu.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163xkdbtktd.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pexfjhsd.html

[R03] 只读变量
来源：http://www.sxryk.cn/163bewbiydm.html

readonly PI=3.14
来源：http://www.xuanzx.com/163pmzdefrj.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jdoucbms.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rdfksgkz.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163daalmoev.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163sdejtxtn.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163xvensoxa.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ucichwvl.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163zwcfjmim.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163vuxrumdx.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163moqhbxnw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163lgfjrngh.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vqewjjzv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163vyfoecvx.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163jdjnoygb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163fewevcxa.html

[R11] case 多分支
来源：http://www.xuanzx.com/163xhacuaoi.html

case "$1" in
来源：http://www.aibaodan.cn/163nlnyaazb.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163kyyatlma.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163rmesanru.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163cynlpxpx.html

esac
来源：http://www.sxryk.cn/163ogscwiwb.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163odzmrmwk.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163gsbdglrx.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wsabvvyf.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163klccvfby.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163umfaiopq.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163arhjwnrv.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163ygatswpl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163wrnkyhbb.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163iroirwcf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163miorbiid.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163onoiacpv.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xrpqthwj.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163ifoznwda.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163rusyhmnf.html

[R19] 数组长度
来源：http://www.xuanzx.com/163dsbkjpud.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zysaivzl.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163lecadrsv.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163dfesexbk.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163ygaekzxm.html

echo "${#s}"
来源：http://www.xuanzx.com/163oxildldp.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163mphckddh.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163atphwdqx.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163eyfggkao.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ssogfnos.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163hjnplkob.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163jrfrfuod.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163qrlonmfv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163shjpudjf.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ecjfnqec.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163deynhdcr.html

[R27] 算术展开
来源：http://www.xuanzx.com/163klnfoica.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163uyjbrccl.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163ktrwxgir.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163mnljioci.html

[R29] 定义函数
来源：http://www.xuanzx.com/163uostjutt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163oebnzono.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bjsanukt.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163lesgmcie.html

[R31] 局部变量
来源：http://www.xuanzx.com/163hdtxysun.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xedqxive.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163vrescrpo.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163kqzbfrkh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163svkptmgs.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163vgjhwgum.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163dpfjrkdg.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163rmrjpkan.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163kgfgwihz.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163rotrzulj.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163nyfbdmig.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jeqocgso.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163bgsgibiu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163wxptmtxb.html

[R38] 管道串联
来源：http://www.xuanzx.com/163oxrtucia.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163rcvplkqf.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ulilhvhg.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163vpnwqobk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163udadevgp.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163vtkygnmm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163bazmsuct.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163yruwisrv.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163uvdegcln.html

wc -l < a.txt
来源：http://www.sxryk.cn/163cimvzrzv.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163elvoyttb.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163hyyxnjif.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163cqvoylzt.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163uflrmptu.html

[R45] 批量删除
来源：http://www.xuanzx.com/163nrxilfem.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163zonuqcal.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163aublrljx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163nqrxavrb.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163reqpholz.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163qnxcqsga.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163fkhgzugu.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wrgaazoj.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163iemztzxw.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163ntgbfqca.html

[R50] awk 求和
来源：http://www.sxryk.cn/163egpbyows.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163zavdbuhw.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163wtmtwair.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wfqusxgx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163wgjunjew.html

wc -l a.txt
来源：http://www.sxryk.cn/163vhlkpsco.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ptzpklyw.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163ohvzxtds.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163blkkgmmp.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163tnwtdxao.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ufcpjqbu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vgbigbyz.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163urmzuwdo.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163otrjvgif.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163rjbohykj.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163cmpkmivi.html

[R58] 下载文件
来源：http://www.sxryk.cn/163pghgjgdf.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163errclzst.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163tfgxjhdl.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wipizalx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163acqfjzkm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163zxisuwhx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163srtsovsw.html


<!-- 参考信息 -->
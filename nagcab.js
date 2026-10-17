外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.sxryk.cn/163pnvbkneu.html

[Q18] 模糊匹配
来源：http://www.sxryk.cn/163bhmmnpnh.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.aibaodan.cn/163myarscyf.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163rhjuqfal.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163quwkyrdk.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163xhsprzou.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.sxryk.cn/163nvmuuehv.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163peycpkum.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.sxryk.cn/163hmjrgphz.html

[Q22] 排序
来源：http://www.sxryk.cn/163ejtpkmhj.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163homfyooe.html

[Q23] 分页
来源：http://www.xuanzx.com/163ozhmpwbc.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163cmzflitf.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ogodfxgt.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163rywtsrdg.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163gxtyuoif.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163pbuebtbg.html

[Q26] 计数
来源：http://www.xuanzx.com/163vphdlhfb.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163oegkeduf.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163wmefqqko.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163zolesvpa.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163cteoewgc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163rnoistmh.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163jrfbkpug.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163uafwcdvq.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163zneaemzm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ixywfyje.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163phfixmln.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163iwdptaof.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163lxvmddpy.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163tjdjpwha.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163rrnfbhsv.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163tbdruiwh.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163tgxezlsm.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163aglwabvf.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163wreaxweb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163wuewpnxa.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163jtoverqg.html

[Q35] 内连接
来源：http://www.xuanzx.com/163onvagbfn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163vyghmnnu.html

[Q36] 左连接
来源：http://www.sxryk.cn/163fgfubqyd.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163ctecarza.html

[Q37] 右连接
来源：http://www.xuanzx.com/163nlhhylvl.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163fdsgwfpo.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163ytlyilsq.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163elmufagy.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163qvvqxsmo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163azozvuso.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163zdjfdbgg.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163avfqijmb.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163eynhigfh.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163ewwfsvny.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163bvptkhfv.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163lieqdyxe.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163ffxalrbr.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163zyykrrgr.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163oydvgedt.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163gpeihskk.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163pgexfjey.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163tkoguklv.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163flntemrn.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163urvxmoiu.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163ijxsalqz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163pfacsckn.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163mmjrileu.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163ivnspwxw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163ohybuouk.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163tttzjkfa.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163mnnuombv.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163fxuazkqa.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163kvpuywhr.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163exduhvpe.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163nnxpdjky.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163brhcmijb.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163byvklzhn.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163zdgvpepj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163mblimsxh.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163yaaxapqx.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163gytydvuk.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163ykoensar.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163nwsdtkkf.html

[Q54] 清空表
来源：http://www.sxryk.cn/163methiqyd.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qkazwhrb.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163yvftcayp.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163mqzudyzb.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ndysntwo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163aniidifs.html

[Q57] 行号
来源：http://www.xuanzx.com/163jasqbsqa.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163qsahfmbh.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163qukzjkoj.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163nnktuxyr.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163elkdcvln.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163wasulzyn.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163osmpqodz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163kcjsfubi.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163sqwvnzzf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163bkywovoc.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jwwqsmhx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ncngcuvi.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163gdkqklxq.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163fbmunzvm.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163uiugjtpz.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163zqbknbnd.html

COMMIT;
来源：http://www.sxryk.cn/163boxaswbr.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163yryoimpk.html

ROLLBACK;
来源：http://www.sxryk.cn/163vaavvasy.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163jeexxrkc.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163ycebkbhc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fqeplnoq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ndquksrb.html

[Q68] 保存点
来源：http://www.sxryk.cn/163kspsccmi.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lihhsipm.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163kgxigiou.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mirotphd.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163qufkvjkd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163eycqeqac.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ooczpqrn.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163xzpbnejg.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163scprrfaf.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163tzfirxmy.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163mmsjpdtb.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163dqhrsfhr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vjbmlbzs.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163nthxyeee.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163suvckkgl.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163olwtzogc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163fibpdujd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163mrgkswxp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163fymuqooi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163zdoecckg.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163tkqwsvip.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163atcfgswd.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163ijddlgxh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163yokstqua.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163gnpxcdse.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163zkoszsin.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163cfwonlcv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163qfcmdimz.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163mvviplck.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vknvslrf.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163sokjgsng.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163wozlrnbe.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163algqwbto.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163iqmiyskl.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163qtcvwaaz.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163pwwmbfhu.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163ikknnmly.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163kpqdsyif.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163lmqkixmo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163hgewmsjl.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163tidnodvg.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163slerbham.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163fjgohvwi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163wzyrobxl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163wrvqppsn.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ymxgazos.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163kaayeott.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163ixamnbzp.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tkjjpfms.html

================================================================================
来源：http://www.aibaodan.cn/163uoxbarqg.html

R. Bash 专题
来源：http://www.sxryk.cn/163lzdldsug.html

================================================================================
来源：http://www.xuanzx.com/163rkgdiksj.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163thgcxoos.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163pflyxolg.html

set -euo pipefail
来源：http://www.aibaodan.cn/163wxnpzedo.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163dbahwjes.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163ayzvajlv.html

[R03] 只读变量
来源：http://www.xuanzx.com/163mzhehkgk.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bfwibezl.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163brxxpext.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163yxthvuhv.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163dzmnawrd.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ujuotrbn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163ryqqzyty.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163pmhrazlu.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163snfdjieu.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163wrblxnno.html

[R08] 数值比较
来源：http://www.xuanzx.com/163cqmydrxy.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163blpzpfmp.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163pvlkwcnc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163yitgxuxj.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163nlkxyyhn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163edidcwnk.html

[R11] case 多分支
来源：http://www.sxryk.cn/163lfufbilj.html

case "$1" in
来源：http://www.sxryk.cn/163eqefhjtk.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mqexltke.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163poygxfpu.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163exjlevvi.html

esac
来源：http://www.xuanzx.com/163vigtaswg.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163aqyeamnw.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163zdgdkrsd.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163ifhhfhov.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163bkrqggjw.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163daupbqqj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163vtziqehv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163smpchnza.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163tgdpupkm.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163stmzosxh.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163unkvqdxc.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163gjxvevbi.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163wtushfnm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163oxcbuynt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163uvrdqfze.html

[R19] 数组长度
来源：http://www.xuanzx.com/163aywzxuag.html

echo "${#arr[@]}"
来源：http://www.sxryk.cn/163nhtimhat.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163awqupenc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163suuqdmni.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tpfabgry.html

echo "${#s}"
来源：http://www.xuanzx.com/163qbkgyzhv.html

[R22] 截取子串
来源：http://www.sxryk.cn/163blbbltuv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163fcjiztke.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163vratgccp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163essnamzr.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163qsfjygwc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163kzvnskpy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163rrlalkpw.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163owbetule.html

[R26] 命令替换
来源：http://www.sxryk.cn/163pbpnuhvg.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163izdmatfc.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163igdcjhzz.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163dnqaxanp.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cbzpyexr.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163kunsuorw.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fqgeqjlp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163dvnbcgii.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163hkqjodfw.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163jqsbfnzg.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163pdpehxhp.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163pzstdddg.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163coujeqho.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163eaxpthpr.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163cxzuhehf.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163xxedklgg.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163qwkykjzs.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163lbtwavoa.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ennypgpf.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163rkrzevqi.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mjeqpyka.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163kynuxdvl.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163rqbkppdh.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163dhwbfmon.html

[R38] 管道串联
来源：http://www.xuanzx.com/163bgysfxyt.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pkrqwkzm.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163bcvxsqyh.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163eiwrjgzt.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163wbbkkkqa.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163hcsovmpv.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163xkdpzzei.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163elmizlgb.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163agkhkusl.html

wc -l < a.txt
来源：http://www.xuanzx.com/163qipskhrf.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163uvwhfuyz.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163pvupplfx.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163hedlgoby.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163jvkfknlg.html

[R45] 批量删除
来源：http://www.sxryk.cn/163psxpznlj.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163yukabxzy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163upnedpqg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163cbedwssv.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163rjbiqajh.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163ndnzsyjj.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163hbctjtld.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xaihiuvg.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163awruynkr.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163axceycke.html

[R50] awk 求和
来源：http://www.xuanzx.com/163gbkpasgl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163kexdvvzg.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wxdbucac.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163gtjtusyr.html

[R52] 统计行数
来源：http://www.xuanzx.com/163wcqqopbh.html

wc -l a.txt
来源：http://www.xuanzx.com/163kyoltjnp.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163nhemwoou.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163wesfximi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163jzsiwhzv.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163hqjictar.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163xtrrvngz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163wpxprxes.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163xclxbmrv.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zgwuqmhx.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nzbutsqp.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163mqiuzveq.html

[R58] 下载文件
来源：http://www.sxryk.cn/163wixlefon.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wxhtwkku.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163xwqlizhg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163zstnpdjx.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163dyhszyyl.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163ggmxsdah.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163gwdrepmt.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vdftqarn.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163jhvoszrm.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163xwajfxkc.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163qanbgnsy.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wwtqqqmp.html

[R64] 结束进程
来源：http://www.xuanzx.com/163yohvbuvb.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163mwmknnqh.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163kfapviqp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bkweqjyi.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zynnnwkt.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163hsvorpch.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163wcjcidzl.html


<!-- 参考信息 -->
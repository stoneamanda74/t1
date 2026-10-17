外链999!wailian999！

[Q14] 存在则更新（upsert）
来源：http://www.aibaodan.cn/163uqzqwdmx.html

INSERT INTO users (email, name) VALUES ('a@a.com', 'A')
来源：http://www.sxryk.cn/163gupalxua.html

ON DUPLICATE KEY UPDATE name = VALUES(name);
来源：http://www.xuanzx.com/163pputkyoh.html

[Q15] 查询全部
来源：http://www.xuanzx.com/163pfpiqvfq.html

SELECT * FROM users;
来源：http://www.xuanzx.com/163vnakntzr.html

[Q16] 查询指定列
来源：http://www.xuanzx.com/163jstkokbp.html

SELECT id, name FROM users;
来源：http://www.sxryk.cn/163ijhzinkt.html

[Q17] 条件查询
来源：http://www.xuanzx.com/163hecoxbjv.html

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163zdsjnpsd.html

[Q18] 模糊匹配
来源：http://www.xuanzx.com/163vtewmcqx.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.xuanzx.com/163daxwzgzi.html

[Q19] 范围查询
来源：http://www.aibaodan.cn/163rjteonbt.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.xuanzx.com/163ykzxpyus.html

[Q20] IN 列表
来源：http://www.aibaodan.cn/163mnyanozk.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.aibaodan.cn/163sqlnarhb.html

[Q21] 空值判断
来源：http://www.xuanzx.com/163fnotamsx.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163hzqqrrpm.html

[Q22] 排序
来源：http://www.aibaodan.cn/163nzoekszu.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.xuanzx.com/163nxfuoars.html

[Q23] 分页
来源：http://www.aibaodan.cn/163oavbdgni.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163tkxmycgq.html

[Q24] 去重
来源：http://www.xuanzx.com/163jkeajfxi.html

SELECT DISTINCT city FROM users;
来源：http://www.aibaodan.cn/163xvunhryy.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163hypofkif.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163zwciqbrb.html

[Q26] 计数
来源：http://www.xuanzx.com/163prtkruob.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163edplslpv.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163fijpevyf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163njjalrne.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163uzwosbjb.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163yjqedpcf.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163rgzrbhkv.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163atllxoeq.html

[Q30] 分组统计
来源：http://www.xuanzx.com/163imvimxan.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163zgayhxis.html

[Q31] 分组后过滤
来源：http://www.aibaodan.cn/163jucazyqz.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163tidqonjk.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163sslccqlp.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163xaxgavnm.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.sxryk.cn/163gkmibpkn.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163emcvyrnt.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163fodbncgl.html

[Q34] 每组取第一条
来源：http://www.aibaodan.cn/163oykknjan.html

SELECT * FROM (
来源：http://www.xuanzx.com/163wftkgbkv.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163tntaamlu.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163pzaejthe.html

[Q35] 内连接
来源：http://www.xuanzx.com/163kjrqsntc.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163xwblyqku.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163iltbqkaf.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163vyjubfat.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163uqgvlwhd.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163eersmaek.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163znwabenx.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163riwysiuj.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163yfibfxle.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163qqercfrx.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163mwroenfn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163psmjzjph.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163zwwdttqb.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163mgqqjapg.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163rlajcruy.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163drrtqeje.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163nulfkgyi.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163vgpditap.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163zefgzydp.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163cuzuawod.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163shmajjhm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163rdlpivgt.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163xqdgxoai.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163wpakwies.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163uikresmt.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163eswiryhx.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163lvwctsgp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163hurufrsw.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163qriukotn.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163kejransn.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163svonihdh.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163vikrsahx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ixwbkbpi.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163hkqjgfqq.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zrczixrx.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163enwqwozp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163qigaqfwu.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163zogeyxrj.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163qvfcljhj.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163eaprtccq.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163dyzkmime.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163psibvkwr.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163elzrnqyz.html

[Q54] 清空表
来源：http://www.xuanzx.com/163fuhmhlmi.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163lubjcfcd.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163bhuadjkv.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163hvvvlgdd.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163uvsnhbpo.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163bitrdjse.html

[Q57] 行号
来源：http://www.sxryk.cn/163vtfkscmi.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ecpltfcm.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163xkirprvt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163aqiqvinn.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163wsnuyoey.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163iiljtvef.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163tochrgkl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163jrybbjzd.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163cejvlcyf.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zxszudim.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163biytgqvx.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163kccqutbo.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ylwwrajr.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163bbfxjsis.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163saiqssbd.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163hgyvvmlh.html

COMMIT;
来源：http://www.sxryk.cn/163kobsmgey.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163owyukhlb.html

ROLLBACK;
来源：http://www.sxryk.cn/163dzdhjwlw.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163gwzrwymf.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163gljwwsaq.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163cseqznka.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163qgprjjey.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163mioqnssx.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xrvpnlgj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163jfyjjkhu.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163lpspvkmc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163qlcshquq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163eebnygua.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163lqibpytf.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163tuarybpc.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163ypmakbkv.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163smfjtimj.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163ztwzjsak.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tmqriwyv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163ewzjpbxy.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163filnzsok.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163xdejoqhr.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163jhchkyoc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163umxvwjrv.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163mtwrzrgp.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163lufwibhr.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163sqjqupfk.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163pyehcrxq.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163xnloecrf.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163glwvwlzh.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163fyazbide.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163sbqpcias.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163byiznvln.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163esvpsagq.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163msacldrm.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163whfdacnx.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163cpgvnodn.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bxnshihu.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163orerltas.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163huexsjlr.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163copjnmou.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163bbiaedfh.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163aymshypq.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163ymakkszh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163yhjdzjdm.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163wcocflho.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163vusupkqv.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163stjtycgm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163jvolkbdn.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163zijkvwwx.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163bvgiiqqi.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163cxglznib.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163ovlbgsrl.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163lkpxxxly.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163rbycsmht.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163lggolisw.html

================================================================================
来源：http://www.sxryk.cn/163ehuhwkqv.html

R. Bash 专题
来源：http://www.xuanzx.com/163finudbis.html

================================================================================
来源：http://www.xuanzx.com/163asumyegh.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163fhtpbtys.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gafodbtc.html

set -euo pipefail
来源：http://www.xuanzx.com/163buiszitu.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bodkvwvt.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163wmkhetza.html

[R03] 只读变量
来源：http://www.sxryk.cn/163ocapbgfp.html

readonly PI=3.14
来源：http://www.sxryk.cn/163ghvcervz.html

[R04] 位置参数
来源：http://www.xuanzx.com/163fupylezh.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163cznzaiog.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163viqhaytc.html

name="${1:-default}"
来源：http://www.sxryk.cn/163majvseje.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163ipjfidnh.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163nbyjbpuw.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163mslwtkbg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163syfaojme.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163cjsentkx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163powtvmhs.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163cvnhslxh.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qihoyzjp.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163obmhgcce.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163uymkpjxy.html

[R11] case 多分支
来源：http://www.xuanzx.com/163muvblqfb.html

case "$1" in
来源：http://www.aibaodan.cn/163ciljmpdz.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163ayyundur.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163bkffjviw.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163awuvslbh.html

esac
来源：http://www.xuanzx.com/163yxtnbuge.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163bisehddc.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163uyxdokij.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163wnmyuees.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163pomdothf.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163fbwtjcow.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163rwyhdbgl.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ncvdutzg.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163hqyvmlku.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163jpuajfwf.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163hhuvodmt.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163mzfrtjat.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163ptevfxeo.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163pkfbsvhy.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163ysoaotpf.html

[R19] 数组长度
来源：http://www.sxryk.cn/163lllzejed.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163zjhelasi.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rzyljcru.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ifzlwwro.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dkuevazn.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fvxghuzd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163hvlopvuq.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163dpvlltxx.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ywyadjug.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163gnyflxtc.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163kfejskhk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163eoxolfdo.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163peaooqek.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163nxuztzkk.html

[R26] 命令替换
来源：http://www.xuanzx.com/163bufgpkjo.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163dqkthvux.html

[R27] 算术展开
来源：http://www.xuanzx.com/163eyzwgglp.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163memamsrw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163kiiqfwmv.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163tlbmbort.html

[R29] 定义函数
来源：http://www.xuanzx.com/163bcdvgeeq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jmhghozk.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163bqaoitak.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hnadnzsh.html

[R31] 局部变量
来源：http://www.xuanzx.com/163vlncxqmf.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163iratydxn.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163alsjyuiy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163lzppufnx.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163byzedvoy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163chokmsjl.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163kadakssl.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163iodbcwpz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163tiwhxvwb.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163sucdhhrd.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163fxamkzjb.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163cfhopdfx.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163zelxgbse.html

files=$(ls -1)
来源：http://www.xuanzx.com/163mqvbgdcq.html

[R38] 管道串联
来源：http://www.sxryk.cn/163jsfzruko.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163tfkvyslr.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163geaddhsq.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163ovsxuhyl.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wpficcyy.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163uextgtdo.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163vspxkymu.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163waufryln.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mfyqaryn.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163egjdimza.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163ncdsbwbi.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163ydyhmggi.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163dunahgjh.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163ymnkkjsv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163bdjfeksm.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163cwegjmrf.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163aducbrew.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163efyevtby.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163txfuxxhi.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163bxktnwzv.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163enxozwqo.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163ybyknyeh.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163jzuuurny.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163waayxcva.html

[R50] awk 求和
来源：http://www.sxryk.cn/163uixakdmp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163cpatyloz.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163mmzppxhr.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163fnxagutx.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bzyxzaxu.html

wc -l a.txt
来源：http://www.sxryk.cn/163arrlkmju.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163sljxfesy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163arwjptsu.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163azdpkldn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163nnzoourh.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163ggmogrhq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163havrvxol.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163usuznsbg.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163zxvqtzzl.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163cqymtyga.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163nofrceor.html

[R58] 下载文件
来源：http://www.xuanzx.com/163cnmqebda.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163kifgcvlq.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163jonvhyhb.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163vwllzxha.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163eenpkaki.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163nnirzqrg.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163yinvnyhz.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163ookbxamb.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163lcfpjqct.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163duvuetbo.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163jrycqwpk.html


<!-- 参考信息 -->
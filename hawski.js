外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.aibaodan.cn/163zgjxnupc.html

[Q22] 排序
来源：http://www.xuanzx.com/163nkqnstqb.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163sywwanhs.html

[Q23] 分页
来源：http://www.aibaodan.cn/163svynzrmi.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.xuanzx.com/163iglpkrqa.html

[Q24] 去重
来源：http://www.aibaodan.cn/163cqibwnbh.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163sksvkkxb.html

[Q25] 只取前 N 条
来源：http://www.aibaodan.cn/163tnxmyudl.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.sxryk.cn/163fqvmvpbv.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ukducdks.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163hbhlavba.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163aniswhag.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163cwomkywh.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163yhnhaoxw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163txgrfvyy.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tkdzvczc.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163kwrkogef.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163vaoqxbuv.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163qykfpjgh.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163pqihexia.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163nozthbev.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hyjwnecg.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163nlmdsodv.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163leyecvkb.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163xqmqiews.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163onhmaair.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163valqhddf.html

SELECT * FROM (
来源：http://www.sxryk.cn/163nmbjdfrb.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163phsbmfam.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163gzizhcad.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163rtterjco.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163qzazgcem.html

[Q36] 左连接
来源：http://www.sxryk.cn/163cnucciai.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163hfjbzmsu.html

[Q37] 右连接
来源：http://www.xuanzx.com/163qqjkusym.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163kzarkemi.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.aibaodan.cn/163kulidfzu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163xolmnxpu.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163ejkndxgf.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163mgjjymer.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.xuanzx.com/163vwaagdkz.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163sektrcxv.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163fnmwxsmz.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163fkewlfpw.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163piqjchhm.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ladkhbrl.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163tsggqspv.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163aaturnjp.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fqqjehyw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163gjpfmpqr.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163rzryoiys.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163lxnhesch.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163wvvlavhb.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163bglodxvm.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163oeyowvgj.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163pkvapgph.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163pjimrgpq.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163crbfvyjs.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163fwmimmpv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163nxqbyfmk.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163tjkfkete.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163piyzkqdx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163niyjtzce.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163dvoirfau.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163nixwidcp.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163kgfafyzc.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ghftcjhz.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163dyxhxeke.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163shxvkeaz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163ryktldrw.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163afsbauaf.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vmdhflxq.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163txqsivqa.html

[Q54] 清空表
来源：http://www.sxryk.cn/163izpklopd.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163ultpyrrv.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163oxlvvafn.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163vhklznil.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163arcbckxr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163imqiwlmj.html

[Q57] 行号
来源：http://www.aibaodan.cn/163qmopnuwp.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163frxhcsbt.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163vkezpwyt.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163xxwucvyd.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163yieenqkd.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163zmljpbgw.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163jddpghwu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163vjhzzmwz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163xuhtxvph.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163azrqanoj.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163sjdmmfnq.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163ullrxioz.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163qxcxwfjj.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163oizzheis.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ybhnadyl.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163baqosaay.html

COMMIT;
来源：http://www.aibaodan.cn/163yiyhnsja.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163ehtjcwnv.html

ROLLBACK;
来源：http://www.sxryk.cn/163lsvtwtdu.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163dagkfcle.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163jhndpvlc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163lqezbipq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163pufmpiev.html

[Q68] 保存点
来源：http://www.xuanzx.com/163beiyufev.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163yickrviv.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163tvrhdmvh.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163rcpxrryx.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163erphylzw.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ehwnpwjq.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163zdcqqxck.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163hozwjkmu.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163pkzujmsu.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163rvvqrnwj.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163ygkyoeik.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163eftfgqnv.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163hkrhsinw.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dfqwpwjj.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163quhjemyg.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163dqedwhej.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163czbjmtob.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163wkvmkuhm.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163dorhmjue.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163oiminzuy.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ljvagwtx.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163ruxpgdla.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163xjzzexlu.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163mqzvcdxu.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163wdnertst.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163saasyecw.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163faoefivh.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163tozzgvzr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163obyszcqr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163ydpddglw.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163gfyasgzq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163urtwkimz.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163sbejqnuz.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163wpymncmf.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163msjkumwt.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163aygetgcr.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163zierqxtl.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163clikskcc.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163izqguvth.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163jmctxegm.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163jrjjvucx.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163tsxeladw.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163ewyehvjc.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163bvgprffk.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163napjcktz.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163hfacytae.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163uclqbbsl.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163fxsnxkob.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163ilniydnj.html

================================================================================
来源：http://www.aibaodan.cn/163hnhybisr.html

R. Bash 专题
来源：http://www.sxryk.cn/163ohrugtuj.html

================================================================================
来源：http://www.sxryk.cn/163qzcssoyr.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163gvdydyfp.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163inntaszp.html

set -euo pipefail
来源：http://www.xuanzx.com/163afywiodc.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163fukjszvo.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ddhuwugk.html

[R03] 只读变量
来源：http://www.xuanzx.com/163tydihtgj.html

readonly PI=3.14
来源：http://www.xuanzx.com/163dnnpgogc.html

[R04] 位置参数
来源：http://www.sxryk.cn/163astqbven.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163uemuyrue.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163gybnmbwc.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163xdfdilok.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163wiahzeiw.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163tgfdukjv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163qahhajgl.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163drzrixbu.html

[R08] 数值比较
来源：http://www.sxryk.cn/163szpzebso.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163kecexnrm.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163aqyozlzc.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163dojxertx.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163czbgwzgn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163dxrddlos.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163eyvxximn.html

case "$1" in
来源：http://www.xuanzx.com/163gldxkihr.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163hrmgwqcs.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163rlqsrrvb.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163xedsbuyx.html

esac
来源：http://www.aibaodan.cn/163pdksbynt.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163jefbjdbl.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163uaqegiqr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163jeakjrhc.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163xtbqrtyg.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163nsoaqwbj.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ujnqojtk.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163bxnbplch.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163zejbgdit.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163wcoymdqm.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163selulbom.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163wqspjhcc.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163auflyjbn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163suvtdyru.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163obtxgele.html

[R19] 数组长度
来源：http://www.xuanzx.com/163ppajzbii.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163popffdwa.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163eaasalkq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163zfiquecp.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163ghqayysg.html

echo "${#s}"
来源：http://www.xuanzx.com/163rmjwpxfh.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163hdhgthjs.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163ybbihubz.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163vyxqosae.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ddnnvybw.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163joyswtpn.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163adeciaif.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ofyscewu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163lprgicyp.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163vpewtfge.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163pkhtyzsx.html

[R27] 算术展开
来源：http://www.sxryk.cn/163lhkgmxmo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163delzisxk.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163ynvjykzv.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163cpspwfyx.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kyqfhiyn.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163ztjvtozf.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163jvaterms.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ecykqxwb.html

[R31] 局部变量
来源：http://www.xuanzx.com/163kjkhmraj.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163fvrbyfqy.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163mxndpbin.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163tazslhox.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163wsmezvot.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163vcmpkszs.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163oiphcyss.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rrnpjqdb.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163jepidhyi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163nrcdjojv.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163vlziqcfi.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163edykadgl.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163aelyepll.html

files=$(ls -1)
来源：http://www.sxryk.cn/163ykiaseyl.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163mipnwdss.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163kwnxzbam.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163szztrjod.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163fgdldmyo.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163fgzqffsc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rsxwxfif.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163aytpfvbr.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163mrakwerm.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163zzifrplv.html

wc -l < a.txt
来源：http://www.sxryk.cn/163dczzrfop.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163synzwzse.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163blpaphyf.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163hagmursl.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163ebslixcl.html

[R45] 批量删除
来源：http://www.sxryk.cn/163sjsxkpzg.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163shzgojfw.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163rhzfpgai.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163addxjyqb.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163okslabtd.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163gkgtpilg.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163dornocqj.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163dnhzestz.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163frvdmfak.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163bktyfazm.html

[R50] awk 求和
来源：http://www.xuanzx.com/163snfmppco.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163mwxiytgr.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163yyvaxzdt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163vieqfvuy.html

[R52] 统计行数
来源：http://www.sxryk.cn/163iobdacsv.html

wc -l a.txt
来源：http://www.aibaodan.cn/163fmstebty.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163rlhytpzl.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163xtylcpqf.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163prcuvfxt.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163sqvljtjo.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ekuorbeq.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163selkdjyz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163endgyqqm.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163crwcnfdq.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163xunvhrme.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163sioucyuy.html

[R58] 下载文件
来源：http://www.xuanzx.com/163weelpumk.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163gajycrml.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163rblwmjou.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163vucestje.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163izuclndu.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163gvakeojw.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163zwsanuqe.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163xqjfurar.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163nmyqwhbo.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163ezjklloz.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163npdeijvu.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163xbusilah.html

[R64] 结束进程
来源：http://www.xuanzx.com/163xiktihtm.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163sbmbtcuf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163gpxmwort.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163zsrfefil.html

[R66] 定时任务
来源：http://www.sxryk.cn/163wdgyfjxp.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163yeuqumyi.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ptmqszkp.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163qpomxbuf.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163rntaieqo.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163xsnftnod.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163snjhlzfr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163gsyxjtan.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163ksgfrbha.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163vstdztbz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163fuheibul.html


<!-- 参考信息 -->
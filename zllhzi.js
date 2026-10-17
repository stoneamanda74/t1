外链999!wailian999！

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163giitcqje.html

[Q22] 排序
来源：http://www.sxryk.cn/163zxiolfao.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163bnkdlqfd.html

[Q23] 分页
来源：http://www.xuanzx.com/163pdwdrqot.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.sxryk.cn/163xgcsfxvs.html

[Q24] 去重
来源：http://www.aibaodan.cn/163ckpnazon.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163yztjlidt.html

[Q25] 只取前 N 条
来源：http://www.xuanzx.com/163ugtcizgs.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163jjjlbxgl.html

[Q26] 计数
来源：http://www.aibaodan.cn/163ubkfogyo.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163fntynrlg.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163vqpkqlox.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.sxryk.cn/163pdsnlovn.html

[Q28] 求和与平均
来源：http://www.xuanzx.com/163tphmozpw.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163phdjrjvy.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163tnakssfh.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.xuanzx.com/163mantryot.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163itdwgldm.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163uhytnjmz.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163txzdkjqu.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.sxryk.cn/163camxwbuj.html

[Q32] 分组拼接字符串
来源：http://www.xuanzx.com/163kwkxfkja.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.xuanzx.com/163hkhuimvh.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163redrqgrc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163ijkukgbw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163qvvnjant.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163jnlqnont.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163axeokylw.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163xbfyssvv.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163bikbeuyu.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163egksbfcz.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163icqetyvq.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163oiwenspc.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163mydgvyor.html

[Q37] 右连接
来源：http://www.sxryk.cn/163kfqngvgf.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163bqijvvzw.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163adnbmhzu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163sgdkqwzf.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163tjprdwyo.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163wnkpwopt.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163orugyojn.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163bpcxpeva.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163pfizwvir.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163wpwmclby.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163lvekymsw.html

JOIN users u ON u.id = o.user_id
来源：http://www.aibaodan.cn/163kcitvnas.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163dtpowehr.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163abexkduv.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163xwtmxyrb.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163wdkhcizx.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163hxqyvqfl.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gqcranfn.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163phdenukw.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ibzlbzya.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163sbiroshl.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163eqcaawdg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163pzcrflkd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ednajldl.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163gmbnpayh.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163cinbqrjt.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163hjtemdln.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163ysnjwuxf.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163pougxivk.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163enpiyngt.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163jfpbzgkg.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163pnstzjxg.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ebzvxver.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jqwqphne.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163egdqvjgs.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163dusgimat.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163kibfnazq.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163wioztqrj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163zejhtwrw.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163jggzcvum.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163yeskeift.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163eldqnzud.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163jqpetlsg.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163owbcanhy.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163mjnnveuf.html

[Q57] 行号
来源：http://www.xuanzx.com/163lttqkmfe.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163excepapy.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163mtqpkeyr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163grfuusyk.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163bporonza.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163tjpbsnah.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163uokbajsu.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ipvhgwkq.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163xnjxdhwp.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163jxwemjqx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163cumpwjlm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wwaarlup.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tpwfilrd.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163oqvdujlb.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163kwdnvcrm.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163xpvnrvle.html

COMMIT;
来源：http://www.aibaodan.cn/163kcgfqhvm.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163bolhnknk.html

ROLLBACK;
来源：http://www.sxryk.cn/163lcnxnakh.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163beqmnuwh.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163mgrqcugc.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163omzdzfnk.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163owmxjzkr.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ymcqkfxh.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163melselle.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163ffaputxn.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163kvphefky.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163eblanzpd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163bbnnqkrw.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163nggujmby.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163wnkejyvr.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163pgimxjrc.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163hazgddzb.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163vuluhkxd.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163uflvwbpr.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163rbwyjxpb.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163fokhfjbx.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163yyeikhwk.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163zwkbnfqk.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163tgrijrjb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163zlobjovn.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163wcnjfuxe.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163gcxarfvd.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163lccpjvzw.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nuemmrqp.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163lifmfgjy.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163szyzvzqv.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163dgmdodwc.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163vxfknbtn.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163oracgwmm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163btnptuus.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163zxzkwrfz.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163vacriwjf.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163urrpnoav.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163zcubprio.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163bkxeigvv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163tpfhzukr.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163pjutioyy.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163clglmriw.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163jdpkrmgi.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163iazhpyze.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163uvfqawph.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163wlsqeeqk.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163yyazrqig.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qwaenrkn.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163kpejuiql.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163tsrbsdna.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163ywftiowj.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lcghjxti.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163mmipizhn.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ekqincfd.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163pnzttdlv.html

================================================================================
来源：http://www.sxryk.cn/163rdmnftlp.html

R. Bash 专题
来源：http://www.sxryk.cn/163krmzyjjz.html

================================================================================
来源：http://www.sxryk.cn/163yfituwok.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163lggctyyk.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163zyyvuxie.html

set -euo pipefail
来源：http://www.sxryk.cn/163lpkqhxpg.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jpakdvwk.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ugnaogen.html

[R03] 只读变量
来源：http://www.sxryk.cn/163llsmgyzl.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zopzosmd.html

[R04] 位置参数
来源：http://www.xuanzx.com/163jkfkjnzg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163xiedfhcu.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163dskgfbur.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163dzydkugi.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tbrrdqcr.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163wgyndvli.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163dmegflav.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163kosdcaoc.html

[R08] 数值比较
来源：http://www.xuanzx.com/163vgtrneul.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163zmqyidtw.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163lwflflrz.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163jgfheqnl.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163anuncqzw.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163pqczywoj.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gqxyrwjj.html

case "$1" in
来源：http://www.aibaodan.cn/163geyxqvbp.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163heaygmgk.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163qdvsfvvc.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163idhsvhls.html

esac
来源：http://www.sxryk.cn/163qsgdmcwk.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163rvcughof.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163ynkwella.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163cwhgebzr.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163radtliqz.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163pnnvmbic.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163qixfpwaa.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163yhpsusga.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qlgacpup.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163fdujytts.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163mtidogdq.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163muotlirf.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163micsfrjn.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163fsgnnjtt.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163mblhcmow.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163nzuvlaje.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kgesjrdg.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163vsfengcg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163xjmoqshx.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163ndmnnkjd.html

echo "${#s}"
来源：http://www.xuanzx.com/163pqjwtlws.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163daytttmd.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163xhzwmwzo.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163fsdlnand.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163saoffgth.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163fguygamv.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163sckokxrr.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163pztjhkiq.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163ezpoiioe.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163hkfbcapp.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163kkdrjnfs.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163zsdpxzog.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163rqjqgprv.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163jirzqngt.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163wvxelybx.html

[R29] 定义函数
来源：http://www.sxryk.cn/163bejtausj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163rvzpaooc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ztfwjjra.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163ulmigzyr.html

[R31] 局部变量
来源：http://www.xuanzx.com/163iwnyphxi.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163tgwjevca.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163bpzlpnaq.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163nuwodwht.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163mpjfszlz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163yujrjump.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163bqayvjhe.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vehudvty.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163upykyucm.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163nmxpcuim.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hblcyflm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163mwdnnwvo.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163brsgscgh.html

files=$(ls -1)
来源：http://www.xuanzx.com/163xeyyojir.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xwvtxcph.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ciyjassn.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163sargxtqd.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rgwmuzsc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163aaqursfl.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163hczhbbqu.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163gesekgai.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163phuhjwgu.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163btjqetvo.html

wc -l < a.txt
来源：http://www.xuanzx.com/163pswcfver.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163krziyido.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163eugzkoxu.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163gxjnptij.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163qdmleavm.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163deobzoeq.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163jtseodvo.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zchzthlb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rbnbqldw.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163mvzjnhli.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163nqahokzr.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163tukqduit.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163jfoslyvr.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163iadbtmut.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163awghndjx.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lnouobje.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163krryltma.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163vqaielbf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163burwwgwf.html

[R52] 统计行数
来源：http://www.xuanzx.com/163fmdhzcxd.html

wc -l a.txt
来源：http://www.xuanzx.com/163jghqttxo.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ycsoguoe.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163meapklrm.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163kjoixfqn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163ifliqxai.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163ztbwpeor.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163rzkytnrq.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163qclnvpzi.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163qhekdrqq.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163wwmnmxvf.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163drvxyoxm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163ukueyvth.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163txzhgino.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zazuqxgg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163oahveqqk.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163arbpopti.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163ihrlizpx.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163dyoehzhl.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163lblipulk.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163atrkykyt.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163jximtbcw.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163efqvmstc.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163dacbwmpt.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163sibeyvpj.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163jcgaqgtn.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163bekaogua.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163reogbbko.html

[R66] 定时任务
来源：http://www.sxryk.cn/163htcublmq.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163oofofjvy.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163wytxtvym.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163sxfjiunm.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ipcrukas.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163klcxmuan.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163miitmilt.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163ohpxrrcf.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163xmcdwvkb.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163yaucqlfa.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163llejbfmp.html


<!-- 参考信息 -->
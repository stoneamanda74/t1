外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163nbhsgpzk.html

[Q26] 计数
来源：http://www.xuanzx.com/163oycpvgvr.html

SELECT COUNT(*) FROM users;
来源：http://www.aibaodan.cn/163jkvtuzjo.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163kfcbqoyc.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163inirwhuo.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163smqvzwxj.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.xuanzx.com/163pymykwpw.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163qynkqwfk.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163abwhcejc.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163antnytkb.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jcmmihuk.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163bjkgynxs.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163qxamwugn.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163rdcphnus.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163xmsucrwp.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163drpytbpw.html

[Q33] 多列分组
来源：http://www.aibaodan.cn/163azqqqcht.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163djmejfnn.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163lgeqtqbh.html

SELECT * FROM (
来源：http://www.sxryk.cn/163bhmbqltq.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.sxryk.cn/163frfgbhws.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163qjqgkuai.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163kgiekfxp.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163lokwcees.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ralplluu.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163wigzkbvk.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163wcwcrhgg.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163gpmsrmie.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163lzzoilrj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163mrolkuxj.html

[Q39] 自连接（查上下级）
来源：http://www.aibaodan.cn/163gpdtfldz.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.sxryk.cn/163nyjcaysq.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163wqtorqzt.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163eyfpqisf.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163mtcohzem.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163lidszhoo.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163imzbgsxo.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163ugaeffqj.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163ezhxmmpz.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163spxakmrf.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163tfmbpsid.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163jbeoyvmr.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163gsxmcvmz.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163rgghqzne.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163bxbvlwrg.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163mnkphary.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163yyrjcicy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163ipircusw.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163hbdxqfhn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163reysdxyg.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163kxduhhsg.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163llykwzes.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163mdgyiufp.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163tdyyolph.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163cvnllaea.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163uwewbgck.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bjojmztu.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163obkikgqq.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ywkjiuze.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163vaechdbw.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163hmahtgbv.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163gugpzgkt.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163zztwxkbc.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163anususyg.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163eoupwhbs.html

[Q54] 清空表
来源：http://www.xuanzx.com/163xceafeda.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163fcgzpuxd.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163snyyptjx.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163kxsnocih.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163hyrvqixe.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163fzjwkacr.html

[Q57] 行号
来源：http://www.sxryk.cn/163akooroql.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163pknlqmdi.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163uumhopqe.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163zmhefutr.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163bimvzkvj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bogmulfj.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163uriepash.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163dhvpynvt.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163mubdznyq.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163bcgoynhw.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163uooryzup.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163evuvlfeu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163cknaqhqh.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163ihxdclah.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ricgvjly.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163aaiqmasv.html

COMMIT;
来源：http://www.aibaodan.cn/163awzpvcdu.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163njjnpbdu.html

ROLLBACK;
来源：http://www.xuanzx.com/163qgdpqneq.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163imzuxlrt.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163xbazrocn.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163djbmgnxi.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163nwhcrnoi.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ihmjrtac.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163xufiwthr.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163oqudryaq.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ijcrjngw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163mwepcuek.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jhlzvdbw.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163bezwierw.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163vfkoknls.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163dwsmdgxo.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163lmaqfdir.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163afdnzjcb.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jpzwnctn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163fnebceki.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163mfqwtnxw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163xnxhdpgl.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163hvhtpsdc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163zcangxrb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163myoqyvto.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ivcjneac.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163bgkscusz.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163ccucxlqu.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zjnrzngq.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163eeuyeeld.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.sxryk.cn/163ktpqfkoz.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163zjxgrolj.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163dpgcgdkq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163kptoodmp.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163ijswlufb.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163wswmficy.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163bogwwiyo.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163olzzeqsx.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163vxijmrqk.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ryxsbwwc.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bzfkribd.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163xqzsraas.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163lqkixewm.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163uoeuychu.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163xubxtegn.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163udugnwmx.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163ksjlxqje.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163ewoiiypa.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xhbhjvbz.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163auvtkefo.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qxywsjvw.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163aucgmjev.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163lxlxbptb.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163iflcxtcq.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163wyuuaqyn.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163tnbtvrpg.html

================================================================================
来源：http://www.aibaodan.cn/163ivccnuhp.html

R. Bash 专题
来源：http://www.sxryk.cn/163mrszapmb.html

================================================================================
来源：http://www.aibaodan.cn/163xsznomsp.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163qguqegnv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163jhjaxmgh.html

set -euo pipefail
来源：http://www.aibaodan.cn/163mfoonypx.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163vfsxrabt.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163afdiocbr.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xwxlkycv.html

readonly PI=3.14
来源：http://www.xuanzx.com/163xyvhttif.html

[R04] 位置参数
来源：http://www.sxryk.cn/163jstitjlk.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163rkjnwpkl.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163etqgegcs.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wismkakn.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163xyksjdxa.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ovheukod.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163quhvvvwx.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163lqsjzkvf.html

[R08] 数值比较
来源：http://www.xuanzx.com/163zlmiposp.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163ambpcuvi.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163wnmvcuiy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163dctbkgvv.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163fifpyjpj.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163gszvavmc.html

[R11] case 多分支
来源：http://www.xuanzx.com/163gqcxuhnh.html

case "$1" in
来源：http://www.sxryk.cn/163ezzojepv.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163rjjuzhrw.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163rwvtthyb.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163ahmkmzff.html

esac
来源：http://www.sxryk.cn/163xmgrrbev.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163kbmaghjb.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163munmtmdl.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163ptdrergi.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ahlsxicb.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163ouhqjydk.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163rpgzcllb.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163kesrgpiz.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163hhhpcjyv.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163umsduplk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163jueznjus.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163pachyleb.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163feqpkcvy.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163bmvejfux.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163ybrazdfc.html

[R19] 数组长度
来源：http://www.sxryk.cn/163apopbofk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163eeyzqwrf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163azuhhfyh.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163vmyguacu.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163zvxlhmki.html

echo "${#s}"
来源：http://www.aibaodan.cn/163kyzmgwum.html

[R22] 截取子串
来源：http://www.xuanzx.com/163sqwjnkmy.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163zmzltjiz.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163lkshfmxs.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ifmfdmsz.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163ntjtadkp.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163myopsrng.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163visbsnjl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163xsmqwfgl.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163weusuhic.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163jjuqlefm.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163eqjlsfzo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ikgtjvjx.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163vshursjd.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163qnvvftfg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163rmnyarlq.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zwmecrfw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163movyzeci.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163vouvrwvj.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163erkiixyq.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163ilnlqjbd.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ltoziiqv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163ntjozltb.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163lrheeuri.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163lqratsll.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163gwkbrlnw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163elbfjhut.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163fuagbzdu.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163jxxmawfc.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tmxsvgbc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163uaorngbx.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163elnngnqj.html

files=$(ls -1)
来源：http://www.sxryk.cn/163syotgkim.html

[R38] 管道串联
来源：http://www.xuanzx.com/163ssqrxxyz.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163pmygnqsp.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163susauubi.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163nlfetpqc.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163rbgxdfqs.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163grdpkpfy.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163pibjnmme.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163luowwpsj.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163jidolptb.html

wc -l < a.txt
来源：http://www.xuanzx.com/163gwjvkqli.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163jhrjgyyk.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163sfegoxpr.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163ywujhvjw.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163lhdpjzxz.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163kdhsffji.html

find . -name "*.tmp" -delete
来源：http://www.xuanzx.com/163iyadtjwr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163yhzybzan.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163mjolheyo.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163misrjwcl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163aglqvdxf.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163muootwmt.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163hresvkmc.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163qbtcpmpm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163ybbvzxuq.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163nmlepgtb.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xhyvqgof.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wvwskkaf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163mutxitmf.html

[R52] 统计行数
来源：http://www.sxryk.cn/163cljmmgnq.html

wc -l a.txt
来源：http://www.xuanzx.com/163roqgdkjj.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163dkcoltaq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163oimzephk.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163ugjvwfnm.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163kbrytdmk.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163qzkuoaac.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ohukkscp.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163yrulsbcf.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163gqtnsvmm.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163osmwrpun.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163ebmtuwsa.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163xcjdxxik.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163vvaehhuh.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163fqahwuwg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163sfypslpu.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163puyhjcxg.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163jephgcvi.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163vhnaihwk.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163afgzncpm.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163jrlryrqe.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163meihjcou.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163nnmgbzqt.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wjglphdu.html

[R64] 结束进程
来源：http://www.sxryk.cn/163fwlhobvf.html

kill -9 $(pgrep -f app.py)
来源：http://www.sxryk.cn/163tcgswwvj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163psccnswx.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163sjcrsqpr.html

[R66] 定时任务
来源：http://www.sxryk.cn/163dnmgamzc.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163mphthdfp.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163ggzyxzxj.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163gdbbgbvk.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163tdeaqrsa.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163blglpmgp.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163hfadtlcx.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163sfrvsehn.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163atntlbfe.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163oyruyloy.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163ftkryhdm.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163zviqzuzu.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163vqxjbfgx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163euogyacc.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163uanvwehj.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163olrapnhi.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163zxxkwqrz.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163sxfukhbz.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163afgpbhej.html


<!-- 参考信息 -->
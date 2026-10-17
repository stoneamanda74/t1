外链999!wailian999！

SELECT * FROM users WHERE age > 18 AND status = 1;
来源：http://www.xuanzx.com/163cclpagta.html

[Q18] 模糊匹配
来源：http://www.aibaodan.cn/163tahehpuk.html

SELECT * FROM users WHERE name LIKE '张%';
来源：http://www.sxryk.cn/163gdfwfgdp.html

[Q19] 范围查询
来源：http://www.sxryk.cn/163manzisqc.html

SELECT * FROM users WHERE age BETWEEN 18 AND 30;
来源：http://www.aibaodan.cn/163ciewrdal.html

[Q20] IN 列表
来源：http://www.xuanzx.com/163cubdlhuo.html

SELECT * FROM users WHERE id IN (1, 2, 3);
来源：http://www.xuanzx.com/163tqvfrcat.html

[Q21] 空值判断
来源：http://www.sxryk.cn/163wenzwnrd.html

SELECT * FROM users WHERE email IS NULL;
来源：http://www.xuanzx.com/163sdjjglmv.html

[Q22] 排序
来源：http://www.aibaodan.cn/163bcyiywjh.html

SELECT * FROM users ORDER BY age DESC, id ASC;
来源：http://www.sxryk.cn/163imfuuova.html

[Q23] 分页
来源：http://www.sxryk.cn/163boedsfdo.html

SELECT * FROM users ORDER BY id LIMIT 20 OFFSET 40;
来源：http://www.aibaodan.cn/163akjnwgwa.html

[Q24] 去重
来源：http://www.xuanzx.com/163ejtnuffo.html

SELECT DISTINCT city FROM users;
来源：http://www.xuanzx.com/163kmwokqpv.html

[Q25] 只取前 N 条
来源：http://www.sxryk.cn/163xzyqrwgn.html

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.aibaodan.cn/163hkvhakzs.html

[Q26] 计数
来源：http://www.aibaodan.cn/163mnjkuvfi.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163grmlyhkp.html

[Q27] 条件计数
来源：http://www.aibaodan.cn/163jnxwawim.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.aibaodan.cn/163flqlvlwp.html

[Q28] 求和与平均
来源：http://www.aibaodan.cn/163yaselojs.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.sxryk.cn/163extevgvu.html

[Q29] 最大最小值
来源：http://www.xuanzx.com/163tmvnuqms.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.aibaodan.cn/163ysytglfi.html

[Q30] 分组统计
来源：http://www.sxryk.cn/163pnssrclc.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.sxryk.cn/163hfzfgacu.html

[Q31] 分组后过滤
来源：http://www.sxryk.cn/163cdhgecsd.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.xuanzx.com/163alznneqv.html

[Q32] 分组拼接字符串
来源：http://www.sxryk.cn/163qcbfgsik.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163mximbirn.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.xuanzx.com/163qtbfbucc.html

[Q33] 多列分组
来源：http://www.xuanzx.com/163frynwwiw.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.xuanzx.com/163bherwghu.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163lekqfvhr.html

SELECT * FROM (
来源：http://www.xuanzx.com/163fhkibeoy.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163njqycynl.html

) t WHERE rn = 1;
来源：http://www.sxryk.cn/163pjdijqvb.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163nludidas.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163pnpaaoeg.html

[Q36] 左连接
来源：http://www.sxryk.cn/163lwwancut.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163zsrvkdgu.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163zpwcfdsc.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.sxryk.cn/163sufxqdkc.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163funavhyu.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.sxryk.cn/163qmxgqqwb.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163kcsazvzm.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163oelaftbd.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163aatbfaop.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163feizkeya.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.xuanzx.com/163yulnxwdo.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163gbdlqsyj.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163jysolium.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163oikoceto.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163tqololkh.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163ppfqyeoe.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163fefakred.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163nxeliudk.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163ogqvbsjs.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163gwfqijxr.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163vwbkggfr.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163unwcmunt.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163yaneovmy.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163bgcslyhk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163wiqcpzya.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163nsfdlgbc.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163abfqpoxv.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163zehobfuq.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163geqmulxq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.xuanzx.com/163exjsnwdp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163xxpvftox.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163rjtaqouf.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163hlaotrmd.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163ymspfgdz.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.xuanzx.com/163iwabtkmh.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163uacopdlz.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163cfukeasq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163pcuhiqwm.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163hidscmbn.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163jhdggwtz.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163xzssvwjv.html

[Q54] 清空表
来源：http://www.xuanzx.com/163gggpmbtk.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163zuvsayqn.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163pgiumklj.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163wdzcqpsw.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163fwulfyhe.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163beoyweyc.html

[Q57] 行号
来源：http://www.aibaodan.cn/163laicqcok.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163hazriwad.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163apmumadg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163esxwyzpy.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163yfjwrpqf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163zzghbfnb.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163lbdrjppw.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163hfgyituj.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163htfzzkfu.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163krleystl.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163dyyjmafs.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163vulqdcyj.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lextswdw.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163suugtimh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163emmyncwj.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163arewxnmc.html

COMMIT;
来源：http://www.sxryk.cn/163ogxxcmxb.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163gpnrvcgl.html

ROLLBACK;
来源：http://www.xuanzx.com/163dtnabovo.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163urujhpqp.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163khvzjzmf.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163eiyxylxx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163zfmyufup.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163fxtsztfi.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163rjgkpreo.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163amzkpkah.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163icjstcyo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163flgyvwzq.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163smxibgvg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163ehiwdoff.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rpqssham.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163niuxsqvf.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163xqbyrtje.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163zovptupf.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163ovcozvve.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163bsyzbgsi.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163bmuwvxia.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163vuwcngxa.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163usprtxiw.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163veemjicm.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163zkmazufb.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163afxeyuhn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163lcbeslrd.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163aheorjem.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163xyztkayh.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163spwnsqop.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ndgporrr.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163scghwweq.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163leoauoqp.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163fkwtcfar.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163iyajvbtr.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163hnivvitb.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163evzdbxob.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163xmxgwzjq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163rsbhdjsu.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163qqospvjd.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163qevwreil.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163vnvwbleq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163pbjznbmd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163dgmbtbvx.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163burlbnvl.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163ilatkvsm.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163cecbitak.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163nepmdzhs.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163gogtjoky.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163dippdnrz.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163bcwwmrpa.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163zavmuwvw.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163nxrhdptw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163pfgcwbvn.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163meievpgr.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163bzcqakif.html

================================================================================
来源：http://www.sxryk.cn/163jhrmfazt.html

R. Bash 专题
来源：http://www.aibaodan.cn/163syjdmayd.html

================================================================================
来源：http://www.aibaodan.cn/163oofumqim.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163zhkepdci.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163kjnzcqsm.html

set -euo pipefail
来源：http://www.sxryk.cn/163igmhumwx.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163iqtanojb.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163ezdubphk.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163puzqpkae.html

readonly PI=3.14
来源：http://www.sxryk.cn/163oxkjkrxj.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ywrcyvbt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163tgppxbev.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163poyoxzaw.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ucndtvcn.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163hffpcdrm.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163zsilzhld.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163lgjimfpo.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163pnurefzm.html

[R08] 数值比较
来源：http://www.xuanzx.com/163yughytny.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163vptkqqjv.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hjeyplcy.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qqjtifyg.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163woggehwn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163twhbfqau.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163crzpulnx.html

case "$1" in
来源：http://www.xuanzx.com/163zumqvskb.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163eobsoixl.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163ukcytxda.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163dtkqswjb.html

esac
来源：http://www.xuanzx.com/163nrzjjaiv.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163qgcakjto.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163xljkwyjk.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163bonucpad.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163rdogjesy.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163qpmrfzqb.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163pyotwrfp.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163pzijizul.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163htlspxbi.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163chwyofdc.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163mdywrflf.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163qlkxtzts.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163xgppinsq.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163cfgrjjye.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163cmanjbzx.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163wekgqwkx.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163caxoxqui.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163huxixatz.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163krtwbcnc.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163dmurexya.html

echo "${#s}"
来源：http://www.sxryk.cn/163bymcleze.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xbpxxwxk.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163kzqhxoiy.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163kajhmasm.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163ovlixzyh.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163xlnaapkf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163lnrbkckz.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jdxozyzx.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vjisijyb.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lrsuuuho.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163ketqllkk.html

[R27] 算术展开
来源：http://www.sxryk.cn/163giluwwky.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163circvbwy.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163aqcuusam.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163wzprquaj.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163fmgijnvj.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163zdpsroxw.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163tubexpsx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163oodozslt.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163wbigudpy.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163jwkvemtf.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163hteqowpk.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163lsrxywss.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163ieysqglx.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163rffihqje.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163fcuvdplp.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163rtxxwrtp.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163wdbpxpdi.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163kkepqgni.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163eoczuhfx.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163qihbfylu.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163fcfjqupq.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163cjunlkvq.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163gayqlatj.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163dhzapjip.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163ntwhwjxz.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163hqcnukfc.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163lfjelkem.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163xcuemsji.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163uwmxxqzp.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163fdfxxvcr.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163yihpzevg.html

wc -l < a.txt
来源：http://www.sxryk.cn/163jbiscodz.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bttglmai.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163ztimgqec.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ypzuukeh.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163vqnytkvo.html

[R45] 批量删除
来源：http://www.sxryk.cn/163xgsvlwzy.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163aveeiojm.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163lzzcwgdb.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163oczlwxev.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163xowflgxe.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163imtqhhma.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163wvirndhz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163hgkckbul.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163vjayxmff.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163dmqfswde.html

[R50] awk 求和
来源：http://www.xuanzx.com/163vwupnyqr.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163yhupmnio.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163bcaruaxk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163xpxdidnp.html

[R52] 统计行数
来源：http://www.sxryk.cn/163sxsjtoaz.html

wc -l a.txt
来源：http://www.aibaodan.cn/163gqlayrka.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163kqiuhejb.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163djmcfcwq.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163fglamups.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163cjhwfcnu.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163bqwspeno.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163vpyzwqti.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163etwzjaie.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163tdujtzon.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163agnoleyd.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163zlikqgrj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163jaxqwvwd.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163mgksutfi.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163zkciyldg.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163hiotsnph.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163ivqoesqm.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163lowpdefa.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mgrykcir.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163jjevzmxc.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163beoidrxw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163vpntinjg.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163yjiaphtd.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163pxyyqwal.html

[R64] 结束进程
来源：http://www.sxryk.cn/163ifhhsfyx.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vdrtnedn.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163vsmpbwtk.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163njqqamyr.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163bsenuqmg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163nehtyhys.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163sewkvnsu.html


<!-- 参考信息 -->
外链999!wailian999！

SELECT * FROM users LIMIT 10;      -- SQL Server: SELECT TOP 10 *
来源：http://www.xuanzx.com/163yrnckvfg.html

[Q26] 计数
来源：http://www.aibaodan.cn/163fcwazyyz.html

SELECT COUNT(*) FROM users;
来源：http://www.xuanzx.com/163qootyksm.html

[Q27] 条件计数
来源：http://www.sxryk.cn/163fmnfrosf.html

SELECT COUNT(CASE WHEN age > 18 THEN 1 END) AS adults FROM users;
来源：http://www.xuanzx.com/163xdafqojf.html

[Q28] 求和与平均
来源：http://www.sxryk.cn/163oftxvtwc.html

SELECT SUM(amount), AVG(amount) FROM orders;
来源：http://www.aibaodan.cn/163tvsdvdtx.html

[Q29] 最大最小值
来源：http://www.aibaodan.cn/163pksewvie.html

SELECT MAX(age), MIN(age) FROM users;
来源：http://www.sxryk.cn/163urdixxiy.html

[Q30] 分组统计
来源：http://www.aibaodan.cn/163giyqtskg.html

SELECT city, COUNT(*) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163dzyorfab.html

[Q31] 分组后过滤
来源：http://www.xuanzx.com/163ohuymukp.html

SELECT city, COUNT(*) AS c FROM users GROUP BY city HAVING c > 10;
来源：http://www.aibaodan.cn/163xvyumexo.html

[Q32] 分组拼接字符串
来源：http://www.aibaodan.cn/163hnaoucql.html

SELECT city, GROUP_CONCAT(name) FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ouxqhxlr.html

-- PostgreSQL: STRING_AGG(name, ',')
来源：http://www.aibaodan.cn/163jnhmggcd.html

[Q33] 多列分组
来源：http://www.sxryk.cn/163eacvffkz.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.aibaodan.cn/163jyaxmenh.html

[Q34] 每组取第一条
来源：http://www.sxryk.cn/163rnbddold.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163mvkwkwlx.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.xuanzx.com/163voyndrct.html

) t WHERE rn = 1;
来源：http://www.xuanzx.com/163axinywfn.html

[Q35] 内连接
来源：http://www.aibaodan.cn/163ehvspppn.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163sfidlfmg.html

[Q36] 左连接
来源：http://www.xuanzx.com/163ficqbfpo.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.sxryk.cn/163veltlvqg.html

[Q37] 右连接
来源：http://www.aibaodan.cn/163hqnjyiks.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.aibaodan.cn/163uhynpppy.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163rqcwwhsy.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.aibaodan.cn/163plkrpoyo.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163xfzzlilp.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.aibaodan.cn/163iflmdfiy.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163efpdwonk.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.xuanzx.com/163kguqsemg.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163xgbkvzrl.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163wdoiqloi.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163iayduowf.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163usfowapf.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163brdoetda.html

[Q42] 连接条件附加过滤
来源：http://www.sxryk.cn/163mxtlnugf.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163qbqjbetw.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163jukastdn.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163qnewuceo.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163czrxsejb.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163odohiiqc.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163ktjytqed.html

[Q45] EXISTS 判断存在
来源：http://www.aibaodan.cn/163stjxvjot.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163demgrdih.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163lxqsxymb.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163gksvhwcp.html

[Q47] 与平均值比较
来源：http://www.sxryk.cn/163mgrsdlic.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163ryxnyspb.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163wngjliln.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163qmwrzuyx.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163stschazs.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ksttodua.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163ielpliyl.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163igtsdhbp.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163rscdyovj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163whsjbilk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163bgjwfvhm.html

[Q52] 删除指定行
来源：http://www.aibaodan.cn/163zeqcdsin.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163jnubthut.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163vytawaop.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163bcrntnig.html

[Q54] 清空表
来源：http://www.xuanzx.com/163omwtqeht.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163stabkqbg.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163yeoyklrb.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163wlmforeq.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163pwlhvomk.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163zjnskagd.html

[Q57] 行号
来源：http://www.aibaodan.cn/163fwwdorzc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163dtlsmafh.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qripouhh.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163imiybprr.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163vqqfeqyn.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163aducpxzl.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163ryvlwlub.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163rufhrfpm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163xwfrsqmg.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163tcfiyktt.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163jbvzpwrs.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163tmzhlkay.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163tiuiyjcn.html

[Q63] 开启事务
来源：http://www.aibaodan.cn/163kgdkgrsu.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163jcunacpl.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163cekpaeja.html

COMMIT;
来源：http://www.xuanzx.com/163pyruwbsw.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163wzpiqvoa.html

ROLLBACK;
来源：http://www.aibaodan.cn/163vofvxwvb.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163dqfemzvb.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163hekzezyh.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163fvlmojjp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163qyqttlnh.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163uoqvoxex.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163gdrffrfb.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163bdicaehj.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163ktyvsskz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163hozpipex.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163rrbzeqwu.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163zjwdnebl.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163puumyzcn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163yswkuerk.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163xorcnaje.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163nkcclbgj.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163dgisjqbn.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163hrynkgrh.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163sfimfwgf.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163wtmlhnly.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163yzkokdxc.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163prlgfhsu.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163kkgjkkdk.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163ldnnnjae.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163ouoojzfp.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163pizyoubj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163zyncytwj.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163ejdejwtc.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163dcgoztmr.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163albyenjt.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mtrsbdaq.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163odbtwizi.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163mqvevvqa.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163dempezoc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163dplbxink.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163thvwytev.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163uesigqsf.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163vvubkguk.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163bjnqcxtm.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163kwjufhlb.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163lhgdfrty.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163lnwmtiuv.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163frkalgdy.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163gvempxjw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163zcaurudg.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qflijmyc.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163medcjuxm.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163zfymtlut.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163ehokbqgz.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163vrmpslnc.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163behvrlfg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163cvaivfej.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163yisipysi.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163wmzewthd.html

================================================================================
来源：http://www.sxryk.cn/163hucsbwga.html

R. Bash 专题
来源：http://www.sxryk.cn/163gbugvgox.html

================================================================================
来源：http://www.xuanzx.com/163gebvqkvm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163jxesazef.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163gymwgcfm.html

set -euo pipefail
来源：http://www.aibaodan.cn/163waomqpcm.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163arxxuqyi.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163hsdqbssp.html

[R03] 只读变量
来源：http://www.xuanzx.com/163xswpxeaq.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163qcvsnehk.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hprnlnqo.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163gsooaufc.html

[R05] 参数默认值
来源：http://www.xuanzx.com/163iqvrhceo.html

name="${1:-default}"
来源：http://www.sxryk.cn/163ozjxsmny.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163jozffaqd.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fokkywfk.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163yeiphdjg.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163fotzoqys.html

[R08] 数值比较
来源：http://www.xuanzx.com/163osvydeyx.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jpjnxccf.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163wxswidjg.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hzvznviw.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163pxrlavgs.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ktrqidga.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163ojjynyfq.html

case "$1" in
来源：http://www.sxryk.cn/163pmekqogu.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163keqcsghn.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163fzsaavev.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163evufhqih.html

esac
来源：http://www.aibaodan.cn/163srsggjpf.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163dnabwrse.html

for f in *.txt; do echo "$f"; done
来源：http://www.sxryk.cn/163dvmhyacz.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jsmwaxto.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163amtxcsxt.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163rdjzcfbe.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163tkdqjgje.html

[R15] while 逐行读文件
来源：http://www.aibaodan.cn/163aagmtmxm.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163zswgndbs.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163iksjexue.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163onavywvn.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163ipccaywz.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163nfbhumjy.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163rgrrfocz.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163jnoemsai.html

[R19] 数组长度
来源：http://www.sxryk.cn/163txkbuter.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163dganauvh.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163ynmvrmin.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163eziunlek.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163tjedomui.html

echo "${#s}"
来源：http://www.sxryk.cn/163qxbltlzy.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163zibyjpuq.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dbtofjwp.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163tfendwgp.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163kbnrsvyx.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163wyvkbiss.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163krkdhnps.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163axtfzdds.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163fdhwsymf.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163rsoemjwp.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163idnqrmfj.html

[R27] 算术展开
来源：http://www.sxryk.cn/163afvawlve.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ggofnbdu.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163vdfioxeq.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163frzifvxf.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163toobqfns.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163kymmiodi.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163xqitpwja.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163dglqjxqx.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163xcvrbtpb.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163kkoajudx.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163jkifztko.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163qdbdpkwm.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163uycjlzmb.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163jmvhafeo.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163asugszgb.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163qucikoba.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163hgngqicj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163bdlizshf.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163pemlivmz.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.aibaodan.cn/163cvlktztm.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163goxsjecs.html

files=$(ls -1)
来源：http://www.xuanzx.com/163flybtmvd.html

[R38] 管道串联
来源：http://www.sxryk.cn/163xqoqtlqd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ldauzour.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163gtjjaeew.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163xqaiafry.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163htkpgbgk.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163qrnhtdgd.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tlavwpxx.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163eqneducm.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163rrwtbnng.html

wc -l < a.txt
来源：http://www.xuanzx.com/163pzqliilb.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lgsrksqu.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163hotohtrr.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163kcyrhkpk.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163fwjmmooj.html

[R45] 批量删除
来源：http://www.xuanzx.com/163lmpaujwg.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163dicofrmn.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163lsmuxmat.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163tzbarzaz.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163eqqqmqve.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163bskaqscr.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163qiwjcgvd.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163gjflrxsg.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163vbxdbhhm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163uugntzng.html

[R50] awk 求和
来源：http://www.xuanzx.com/163kbowavbq.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163nywddrgm.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163tmfqwbxf.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163tdnnfkvb.html

[R52] 统计行数
来源：http://www.xuanzx.com/163hgcuqvqj.html

wc -l a.txt
来源：http://www.sxryk.cn/163mttlvpes.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163cahzhelq.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163slrroday.html

[R54] 比较两个文件
来源：http://www.xuanzx.com/163onccfaje.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163bxphpxar.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163lupjilng.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163btoeeyve.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163peexjunf.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vqtfhkfv.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163nqmekfch.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163iozkpged.html

[R58] 下载文件
来源：http://www.sxryk.cn/163nyjnvbpg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163wvcspgev.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163uymsuxhz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.aibaodan.cn/163pvxygueq.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163vukukaah.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163shdohegj.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ivdcyyep.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163fammchfh.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ikxpmgyu.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163eobvwkcx.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163mlejifwe.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163opjqealv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163xhetrtlc.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163uwwycvwy.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163vlnewbdg.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163lbnoliil.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ldhuejzh.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163cfuptghj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163navkoivb.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163jrkyhsjs.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163xxdxfvst.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163nytixzma.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163mqgcbewr.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hqrmoilv.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163krahjbjg.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163fapsyvat.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163sghdlcnv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163szmusjep.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163mzuxnlvg.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163pguymeuw.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163qunlxvcg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163jwwskogl.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163nugpibsc.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163ogfmvgmn.html

[R75] 导出环境变量
来源：http://www.aibaodan.cn/163tmvxzhxv.html


<!-- 参考信息 -->
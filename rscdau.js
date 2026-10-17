外链999!wailian999！

[Q33] 多列分组
来源：http://www.sxryk.cn/163hkpprbmf.html

SELECT city, gender, COUNT(*) FROM users GROUP BY city, gender;
来源：http://www.sxryk.cn/163cnuhinxx.html

[Q34] 每组取第一条
来源：http://www.xuanzx.com/163gqxyokfb.html

SELECT * FROM (
来源：http://www.aibaodan.cn/163uqiaduim.html

SELECT *, ROW_NUMBER() OVER (PARTITION BY city ORDER BY age DESC) AS rn FROM users
来源：http://www.aibaodan.cn/163clfkyfei.html

) t WHERE rn = 1;
来源：http://www.aibaodan.cn/163plzdjink.html

[Q35] 内连接
来源：http://www.xuanzx.com/163finggjca.html

SELECT u.name, o.amount FROM users u JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163vgyhiofe.html

[Q36] 左连接
来源：http://www.aibaodan.cn/163ndyndswi.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.aibaodan.cn/163tslobspe.html

[Q37] 右连接
来源：http://www.sxryk.cn/163vvavuluw.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163dfdrggst.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.xuanzx.com/163fefhuwak.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163dnkvukbe.html

[Q39] 自连接（查上下级）
来源：http://www.xuanzx.com/163qvjrcnxd.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163gxuxrswb.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163ccinpnah.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163ddhympsj.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.sxryk.cn/163jspimllh.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163fheejwwt.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163afqklpcq.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163mtxqtbpw.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163sqojbfgu.html

[Q42] 连接条件附加过滤
来源：http://www.xuanzx.com/163bzzsuqfw.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163vquspfuy.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163uojmzchb.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163kupiradn.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163jidcdjdm.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163irqxrbgz.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163nbmtcmda.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163huwjugzz.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ioljfbdv.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163gtygsgwd.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163dnlydted.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163pekwljea.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163acsbfdnd.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163dbvjktuk.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163oachvwou.html

SELECT * FROM t WHERE c > 5;
来源：http://www.sxryk.cn/163zivsfpjq.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163gkeeebbj.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163wrltadtf.html

[Q50] 批量更新
来源：http://www.sxryk.cn/163kmwvtjdd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ooksltef.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163tftgicaf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163zvxqofeq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163vjbaqgjd.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163nhnvonfw.html

[Q53] 按条件删除
来源：http://www.sxryk.cn/163lwrvnoet.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163vjzrjugi.html

[Q54] 清空表
来源：http://www.sxryk.cn/163dmcmtitr.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163fnuhlgxf.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163bvpidgav.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163frknscko.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163jlsafjcr.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fyoarqjn.html

[Q57] 行号
来源：http://www.aibaodan.cn/163glcomljk.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163ozvcvtbc.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163oxxhyvgm.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163fhlorcur.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163pcdwjodz.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163fkvgwupw.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163ygnbjjwl.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163tovucedm.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163wmmnllnl.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163syicxcco.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163lkuealwb.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163pariqntr.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163lnhitmlg.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163ehcdalsy.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163orngbweq.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163tkwcnjfg.html

COMMIT;
来源：http://www.aibaodan.cn/163fniqjpga.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163mzaxydeo.html

ROLLBACK;
来源：http://www.xuanzx.com/163voldiuga.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163nelqxjum.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163ulzgmxvs.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163eriesvld.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163yuovkock.html

[Q68] 保存点
来源：http://www.xuanzx.com/163ybkfnntc.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163niarofoj.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163azieycqf.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163rweugzvz.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163rzdgcmay.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163hljdpgic.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163dhcswuko.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163eosflddm.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163misitacx.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163bdawouyl.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163incjvvsr.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163jfnywwxo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zfabziau.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163cuesdmdz.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163efkrzffu.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163pcxsshzm.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163uadlvipj.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163vbtelbhd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163sgojgxbe.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.sxryk.cn/163jofvrqfo.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nwnqtefc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.sxryk.cn/163ysmgtoxj.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163usoxmtnj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163bphrzgbh.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163hwktbigx.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163mebzccav.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163tjqwphcm.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163zxjrecme.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163btsixskr.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163wmpssmlt.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qggojoog.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163enlpahks.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163vanbewij.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163owcdfcxg.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163wuipgbff.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163pmnpalet.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163fbzobhfw.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163wqgawcww.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163kupmspdo.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163hnivsajw.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163almaihac.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163xzsilflx.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kynvzkvq.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163qrqmvhzr.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163hxagdjrb.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163flxruysi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163vnelgvdu.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163wgdmxnhb.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163zeptorik.html

================================================================================
来源：http://www.sxryk.cn/163biusxybn.html

R. Bash 专题
来源：http://www.xuanzx.com/163gmdlgfxx.html

================================================================================
来源：http://www.aibaodan.cn/163hozrebfk.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163ramxycae.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163dogahvdp.html

set -euo pipefail
来源：http://www.sxryk.cn/163rcgtwkym.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wzctjjmw.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163mjzzqhhc.html

[R03] 只读变量
来源：http://www.xuanzx.com/163djupqaef.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163zyfxeytk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163tmhyiktn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163mmeaweyj.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163bvxbnnhe.html

name="${1:-default}"
来源：http://www.sxryk.cn/163snqqgxaf.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163jkwftmuu.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163fkqxiefx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163ykicwjhm.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163impvsewt.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163ukczihei.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163dqhgxikt.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163pvgkwkar.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163ejtvpkdi.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zfetwxnl.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163paxvmvdf.html

[R11] case 多分支
来源：http://www.sxryk.cn/163uhgqiaqi.html

case "$1" in
来源：http://www.xuanzx.com/163qnenenrc.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163buoksvgt.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163yxsfmayr.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163zvzvuhkw.html

esac
来源：http://www.aibaodan.cn/163ydfdqtjx.html

[R12] for 遍历文件
来源：http://www.sxryk.cn/163arffgpvo.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163deuvycyg.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163pxlxwsqm.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163qjahcofp.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gsrgguux.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163thmetboo.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163jorbnxyy.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163lctbueoc.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163lccfenhy.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163qphcoeux.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163gqiymqjy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163yyfqpmfk.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163zinayfui.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163momxsomj.html

[R19] 数组长度
来源：http://www.xuanzx.com/163lkmrwqqo.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163kppiggxe.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bpdqhtqb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163ehwtqqzm.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163riqktzad.html

echo "${#s}"
来源：http://www.xuanzx.com/163kczvhsbz.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163stddgnzu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163whkrwkun.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163jywjbraj.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163pfbrfetx.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163mubrzskd.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163wcrxremy.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163lvevnqsl.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163jmygwfho.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rookatfr.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163qptwktcy.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163hwzhqpbo.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163ewnuuhzp.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163jyxfscci.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163fvazmatm.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163reprvvfa.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163vfbzphlo.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163nbhsmaoq.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163btczohnx.html

[R31] 局部变量
来源：http://www.sxryk.cn/163frpqmhjc.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ltgcidgy.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163qtffoccz.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163mjitkubd.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163uatphyqt.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ifksocxb.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163wdwamvuj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163svrffpbs.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163gbsowkqj.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163cqanfrus.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163hwqfgnaq.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163jlsqvgnl.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163ooilgqks.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163zbqrjkuv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163wjyivkul.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163vurvkhip.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163qnflmlfp.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zzkoynrf.html

[R40] 追加写日志
来源：http://www.sxryk.cn/163vnnweylp.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163podyxhoi.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163kqfgztpq.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163semwawer.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163neunvgym.html

wc -l < a.txt
来源：http://www.sxryk.cn/163gzsvmqeh.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163kxilqdza.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163qlrnjkde.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163ckyyxozj.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163okhbiska.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163uxoghhin.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163thtgatvo.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163yifdtzte.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163ukqusheg.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163rkhxsflj.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163sgrlfehf.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vwmqqeil.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163xkhuyxaf.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163wbpptuwm.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163ddldoxgq.html

[R50] awk 求和
来源：http://www.xuanzx.com/163lqfhzpbf.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163gdznavde.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163wstgvthb.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163kaibbuff.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163czquifnj.html

wc -l a.txt
来源：http://www.sxryk.cn/163egnnfdqv.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163ntomauck.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163topawhmf.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163hnskkezt.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163wrxjjbxu.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163vptlwxeu.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163scgasuck.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163rxloltys.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163vlegqwdz.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163hvyueort.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163zfgbchsr.html

[R58] 下载文件
来源：http://www.sxryk.cn/163cnxvcvuc.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163nyvnflkq.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163kapuknwh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ekakkiou.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163nkmmqsaq.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dffyupho.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163uacffpcy.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163sxtawmlm.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163zddbmcvu.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163xzdhphub.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163xkueznrl.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163yxceunrx.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163szgzjfus.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163jmtoepze.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163lksvxhse.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163kczdnnyq.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163kvrujzcy.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163ajegpbia.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163mwellkoj.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163zjbyelhn.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163arelscct.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163yiogqeow.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163keeykndc.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163ummbnnrm.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163zbxdaxbc.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163qtusobuz.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163mgdnvlsb.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163neddlosm.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163kegmwtum.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163phdcxaum.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163sbsudsvq.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163ezzfvlha.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163bumhcbls.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163hhtnyqvu.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163vjqmklzm.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163qojoaoud.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163ogxmfdwt.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163mcuzshbo.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163enwuojqg.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163hexhxgwf.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163opmxwvwp.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163bjpoenjn.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163dysifyjy.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gabygvjm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163zxhwjbws.html

time ./run.sh
来源：http://www.xuanzx.com/163fbzxuqmt.html

================================================================================
来源：http://www.sxryk.cn/163sxsjnfba.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163idnzrliv.html

================================================================================
来源：http://www.xuanzx.com/163uuccuszf.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163wibizdfi.html

#include <stdio.h>
来源：http://www.xuanzx.com/163hzqtbdry.html


<!-- 参考信息 -->
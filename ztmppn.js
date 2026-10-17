外链999!wailian999！

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.aibaodan.cn/163zxmyjwqt.html

JOIN users u ON u.id = o.user_id
来源：http://www.xuanzx.com/163uxxeflep.html

JOIN products p ON p.id = o.product_id;
来源：http://www.xuanzx.com/163vypybruk.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163svphyqvp.html

SELECT u.name, o.amount FROM users u
来源：http://www.sxryk.cn/163trthbrvl.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.xuanzx.com/163xhddhxxu.html

[Q43] 标量子查询
来源：http://www.xuanzx.com/163bbcueefm.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.sxryk.cn/163uuxuwcau.html

[Q44] IN 子查询
来源：http://www.sxryk.cn/163crowpaiq.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.aibaodan.cn/163cqfqxlgm.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163ctqrjpan.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163tiirytvm.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163ptqauqaa.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163djnceqka.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163sxjwelnr.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163kkzyiryx.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163mxdjyfld.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163bwiekqvk.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163oxykzuub.html

[Q49] 更新单行
来源：http://www.aibaodan.cn/163ktjngese.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163zoaqmbrq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163wyhrpjup.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163xvyownqz.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163khegreei.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163qkkntzaq.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163omlasuvv.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163ffrqrtiu.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163rmpyhwhk.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163atkutfwx.html

[Q54] 清空表
来源：http://www.xuanzx.com/163wfoycsvt.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163bcakyhnk.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163wakngofg.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163sfaowfor.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163lxdjbcpf.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163fnbdggnz.html

[Q57] 行号
来源：http://www.xuanzx.com/163pegfgask.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163cpqmyhvg.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163pxssapmp.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163satmnbow.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163lrrzizsh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163towptvvj.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163neayennt.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163xqcolhea.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163cqkptkfo.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163zuwbzhfx.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163uhtivzgk.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163bqwdlbii.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163rngmzrdh.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163uuvjqvui.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163bgihplxk.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163rtugbuic.html

COMMIT;
来源：http://www.xuanzx.com/163mlllzpov.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163urecekep.html

ROLLBACK;
来源：http://www.sxryk.cn/163oxtfnqea.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163zjqsqcmr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163dkvaqrya.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163zdcbtymx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163posinalp.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163gtgcbkak.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163hqcaylwk.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163xnywtaqa.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163makrqowk.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163nfznpqav.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163awiypbvq.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163qngbelqr.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163elbyhbib.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163vklottji.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163uxhkpbzj.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163gbeevnjd.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163yqtwngoo.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163owrqgzqi.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qtcucqbm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163nnfgfmcp.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163kokssgpp.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163xlqvxzrd.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163vnkunkyl.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163ilemthlf.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163bfuyiala.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163yboojezl.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163lykxygnk.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163lxtjouku.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163kmosiwlb.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ylikctnf.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163iwpjzlhx.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ktlpvluv.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163qrrcylrj.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163fmffujkc.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163nkolxzci.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163yncsjwlq.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163xhczrcno.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163lvyljzhj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163rouongmj.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163zinpfqnt.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163ywwjhnhd.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163vlpzjsje.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163wusduchr.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163nqmgufxp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163jnvxxxox.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163pftksctv.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163qcczobbh.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163bubrswrf.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.aibaodan.cn/163issbqxne.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.sxryk.cn/163rbxdxrvx.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163mhuopkaq.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163agzqbaxv.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163nraeqvsc.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163dfksusxr.html

================================================================================
来源：http://www.sxryk.cn/163tyfaegte.html

R. Bash 专题
来源：http://www.sxryk.cn/163epwqzijw.html

================================================================================
来源：http://www.sxryk.cn/163jaarhchb.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163trpnebrs.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bhcmcpit.html

set -euo pipefail
来源：http://www.xuanzx.com/163nbyjoxza.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163rhtzzpyo.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163vmaduzbe.html

[R03] 只读变量
来源：http://www.xuanzx.com/163suuxhpws.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163hfhsbugk.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163gcrvvxom.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163tkuxbknc.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163vmoprjyb.html

name="${1:-default}"
来源：http://www.xuanzx.com/163euxdfbis.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163pvqezylg.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163kyfdfrih.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163aflyctbp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163xmgcjclu.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163gfxaypzb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163vofssmoc.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163uwirldvx.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163gkmcomvw.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163kndnztwx.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163ezttihst.html

[R11] case 多分支
来源：http://www.xuanzx.com/163bteuauoa.html

case "$1" in
来源：http://www.aibaodan.cn/163uswnvenv.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163veqlkhpy.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nkvhvtrs.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163dbxhfpgu.html

esac
来源：http://www.sxryk.cn/163wsrtgkym.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ygxdkmrc.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163mslhfwio.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163rqybxika.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163nxnuctek.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163dbwqmhxa.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163bwyhgcfg.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163fslqcdtc.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163ooilkqna.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163rjssrfiu.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163zidwjhsa.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163xwtzoesy.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163jdhczdtn.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163tzsthxqs.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163gommmzsw.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163jbyssgso.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163icyiniij.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163btucpfjc.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163psklsjuv.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163hjkpyhoz.html

echo "${#s}"
来源：http://www.aibaodan.cn/163pcgcsbyl.html

[R22] 截取子串
来源：http://www.xuanzx.com/163nkusavum.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163ncjpxvug.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163yaykrluq.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163pbctcfvc.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163huafbupk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163cnjhbjbu.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163jkenvddv.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163virukyrp.html

[R26] 命令替换
来源：http://www.xuanzx.com/163rlpneuuj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163hbprnsgk.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163gjovtmwy.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163tcfjqyip.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mgtjmego.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163oqbeihem.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wmbxdvpp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163cviygpfw.html

[R30] 函数返回状态码
来源：http://www.aibaodan.cn/163nukeyxig.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163emnhzlfn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163iqfmuuei.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163xgqbtclx.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ezovhkxm.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163jfxpdhhr.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163pygardto.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163skcpvhrz.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163dnvosmdq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163vakuvwkn.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163ngilbtjq.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163opvymkhj.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163vnkzuzoh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163beckwdhi.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163uzsoyfut.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163ejzkfqvy.html

[R38] 管道串联
来源：http://www.sxryk.cn/163wbgdlotm.html

cat a.txt | grep -i error | wc -l
来源：http://www.xuanzx.com/163lxmytmdh.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163wfjmptkz.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163eawcfzwg.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163ejfupfhq.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163ebhltkqr.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163aconsggt.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163xhecgtpn.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163xlfrxchm.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163zwcngjpx.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163kvcxtjrj.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163goqovozb.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163oisczlkw.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163arinbiwr.html

[R45] 批量删除
来源：http://www.xuanzx.com/163pyvhmbzu.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163mfdouvaa.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163kuiojitz.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163dhwujzst.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163fyonjatc.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163qsszsuzl.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163sgbkdomj.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163ircuvmek.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163qswoslff.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hhddnofo.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163hjwvuthg.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163wtcbltbi.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163lmpeiitk.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163wehmklpn.html

[R52] 统计行数
来源：http://www.xuanzx.com/163ehvrofsy.html

wc -l a.txt
来源：http://www.aibaodan.cn/163ggtibrsh.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163atsovkmf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163oyrazwws.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hvsnlslx.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163lqipbvrq.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163miuvkpvg.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163riemvsen.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163uiugubsn.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ngxwjsoe.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163aympmvmb.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163szkrqhwj.html

[R58] 下载文件
来源：http://www.xuanzx.com/163ymfvazhw.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163ubvhwjdc.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163otvahexh.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163fcndhazp.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163bjqvqojv.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163kbaxephr.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163cspwgtnj.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163uizrgjhr.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163uykimozt.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hmbuhwwu.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163sqfuqukz.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163udbrgnrs.html

[R64] 结束进程
来源：http://www.xuanzx.com/163exdalbbo.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163wxpoauoh.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163oyppfcku.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163wtxgwzjh.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163tjgcuqqx.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163dpchdsio.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163cgdcgwpi.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163khuvcpsr.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163agqmofyj.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163mfyfgxxe.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163ceedvfpk.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163snptmgqz.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163coregllz.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163nlubuixu.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163kopjuzea.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163tkcgnxiy.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163yevhgfwn.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163lmvtdryz.html

[R73] 分割大日志
来源：http://www.xuanzx.com/163hkgsoxne.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163tihjdovn.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163zylwpsib.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163artiasqt.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163ljixrhgj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163vklomrra.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163kmkichvz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163rydhugcd.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163kehkqdgh.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163diaxexxl.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163qubxiein.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163xuulkkqy.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163ycyowgox.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163dqlabisi.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163yrmajdcn.html

time ./run.sh
来源：http://www.aibaodan.cn/163kyctmyji.html

================================================================================
来源：http://www.xuanzx.com/163aaxrbvry.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163ixwwjrhe.html

================================================================================
来源：http://www.sxryk.cn/163sourhpgi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163nanfrznt.html

#include <stdio.h>
来源：http://www.aibaodan.cn/163yjsrmncv.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163ydazzaxx.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163cgkpcebb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163olexvuws.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163caeqskac.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163yfytlbtu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lxjcjytg.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163asbzpvke.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163eipixcok.html

strlen(s)
来源：http://www.sxryk.cn/163deonixnr.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163qhzkzxzz.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163xhczibfp.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163azgrlkaf.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163xcnutkjp.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163wwbjpaar.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.xuanzx.com/163qdfsqdlg.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163idzrbqhv.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163dqxvvyjm.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163wkrdcaxl.html

int *p = &a;  *p = 5;
来源：http://www.sxryk.cn/163hameylyk.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163evwofrcl.html


<!-- 参考信息 -->
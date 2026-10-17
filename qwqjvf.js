外链999!wailian999！

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.sxryk.cn/163ktptlaru.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.aibaodan.cn/163osploudy.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163qhssepsh.html

[Q41] 多表连接
来源：http://www.aibaodan.cn/163rgepycje.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.sxryk.cn/163hkbdzkry.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163xdbmdwkv.html

JOIN products p ON p.id = o.product_id;
来源：http://www.sxryk.cn/163qvrzxylj.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163xikhmxhs.html

SELECT u.name, o.amount FROM users u
来源：http://www.aibaodan.cn/163hbxzlqgn.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.aibaodan.cn/163xmydhbzr.html

[Q43] 标量子查询
来源：http://www.aibaodan.cn/163bxnksntg.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.aibaodan.cn/163sjeuxuvg.html

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163qjvokidk.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163veybuzos.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163cocmgvsf.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163cuqkmrge.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.sxryk.cn/163tmfgqkdi.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163ttqvzuuh.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163rmsmitnj.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163xxqdgijl.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163wrtiqapf.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163mxthwsma.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163ybhghatf.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163rsuwopku.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163jhiyvntq.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163eqmqpejt.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163ndxbxiyx.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163gyeyfdch.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163fzbpbfcw.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163wqqcwcgg.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163sffkyxlk.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163onfyyhzp.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163sggojzym.html

[Q54] 清空表
来源：http://www.xuanzx.com/163mwtvthro.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163qzenwxrq.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163dbosjplc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163acgpkfdp.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163zrwblhll.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kyhingoh.html

[Q57] 行号
来源：http://www.aibaodan.cn/163gbwgvmij.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163xpizqthh.html

[Q58] 累计求和
来源：http://www.xuanzx.com/163qscjcyeg.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163blxoyeuy.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163cnstcmrh.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ttrvotty.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163mqnpqaes.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163zooafarz.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163zffqftsa.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163jtqkrhhv.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ynekhrsm.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163jltfwspc.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163obdtlzco.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163nhvipyus.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163iclumpmz.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163yuucnrcu.html

COMMIT;
来源：http://www.sxryk.cn/163rkaegcjp.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hanewlcx.html

ROLLBACK;
来源：http://www.aibaodan.cn/163farezjwc.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163phxqqmbr.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163baprbyot.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163ejovscaj.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163itfekfbp.html

[Q68] 保存点
来源：http://www.sxryk.cn/163bdmoaagx.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163rgwozgqo.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163ydidwjaq.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163oiksusyb.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163xtrgxvxk.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163sdmqgpos.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tujfsjut.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rbfvbeyw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rndkwaxh.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163faoenyld.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163olhiaxim.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163zbbwpfnb.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163coasgudv.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163dkecunnb.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163zxqupszf.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163ayjbpnsu.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163puomfwya.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163zwdykeee.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163hxguqsqg.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jizoubtd.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163jybafqmj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163dwllyyan.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163rxnevsdd.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163ziarkken.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163kmqawdpi.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163qmtfciqa.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163ppvaiwsx.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163mhvgyonq.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163lvwlrgiu.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163gzwxsbbc.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163mxdfxlaw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163baklbmoz.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163ldsiwjfj.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163brrsbade.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163jxceogqq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163jvarccnu.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163rfozcksj.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163njwkdifv.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163cvwpvfbc.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163soliralk.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163myrmozbm.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163nszvyxoz.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163oyswoxhp.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163oxoqrpuo.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163moorqbpx.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163evqghfup.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.aibaodan.cn/163cpuoytud.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163otdnliye.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163reglacjp.html

================================================================================
来源：http://www.xuanzx.com/163cyacidzg.html

R. Bash 专题
来源：http://www.xuanzx.com/163aiunvire.html

================================================================================
来源：http://www.aibaodan.cn/163tkzvsqhz.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163kzdmwufl.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163xorrkqms.html

set -euo pipefail
来源：http://www.aibaodan.cn/163nohoasvq.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163bsgdvyuu.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163pymifgmi.html

[R03] 只读变量
来源：http://www.sxryk.cn/163dnlveilk.html

readonly PI=3.14
来源：http://www.sxryk.cn/163tsdjlzbz.html

[R04] 位置参数
来源：http://www.xuanzx.com/163eanptvgt.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163jnrwftxt.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163bbjbaocr.html

name="${1:-default}"
来源：http://www.sxryk.cn/163txjleepb.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163tepyumfy.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163ncttzdxe.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163sfzfqesf.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163glxdqjrw.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163xbetkkeb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163mlkcjfbk.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163vptbchdo.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163szfywgge.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163raguviuk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163rffimcld.html

[R11] case 多分支
来源：http://www.sxryk.cn/163wqbjfrdt.html

case "$1" in
来源：http://www.sxryk.cn/163mljstumx.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163tpqkshin.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163vhoivzjj.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163tofcvwxn.html

esac
来源：http://www.aibaodan.cn/163lmkutzox.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163xjdaahmo.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163mxqyqkra.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163epkpdevz.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jzwcscwe.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cxrijmuz.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163gzepjhbk.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163rshkgfqi.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163vjuasdds.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163eatvtuem.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163uhvabdhp.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163wdvjradr.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163dirkhypr.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163wwfingbc.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163xbwlvgnk.html

[R19] 数组长度
来源：http://www.aibaodan.cn/163eztxalha.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163qobfkace.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163ltbdgqrq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163kdgydhmm.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163lxtkqupf.html

echo "${#s}"
来源：http://www.xuanzx.com/163apxsrrip.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163wcjimceu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163iqjhxjkk.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163kqupghuw.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163rusymnlq.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163berzmrpf.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163xkmdqiby.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163zwjiqitu.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163pptahhlk.html

[R26] 命令替换
来源：http://www.sxryk.cn/163uwvghxoj.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pyespogu.html

[R27] 算术展开
来源：http://www.xuanzx.com/163wxelhncn.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163ueyuugko.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163mwcyudiv.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163frobuqcz.html

[R29] 定义函数
来源：http://www.sxryk.cn/163fxszmjqp.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163avkkawct.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163bkqtpzpk.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163iuehlecu.html

[R31] 局部变量
来源：http://www.sxryk.cn/163wefsuwop.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163nxqmattp.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163qvnhegpy.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163amjmnyjg.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163zaxpqngm.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163ppmkvdcx.html

[R34] 退出时清理
来源：http://www.aibaodan.cn/163gbqqybdw.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163uuhpsalh.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163meuzijhw.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163ztqxhfmy.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163mdnbxiou.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163knfnllfd.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163tvxyoldz.html

files=$(ls -1)
来源：http://www.sxryk.cn/163snzsyytp.html

[R38] 管道串联
来源：http://www.sxryk.cn/163caplhwaa.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163gatgenup.html

[R39] 重定向标准输出与错误
来源：http://www.sxryk.cn/163tvvedyob.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163svyzdztr.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163awybcwlc.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163nrablpxf.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163xvdndiwd.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163kbrcerkf.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ymumayob.html

wc -l < a.txt
来源：http://www.sxryk.cn/163cyfrddmf.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163cmqlnnym.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163bsrkiktq.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163zbxblblp.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163rcekfelm.html

[R45] 批量删除
来源：http://www.xuanzx.com/163iblxlhyh.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163jnwfekyy.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163vvolxohd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163dpflqcyv.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163svlqsptq.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163alqhylob.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163tdytevzd.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163rcbbsehz.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163foixikvv.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163velgjyii.html

[R50] awk 求和
来源：http://www.xuanzx.com/163prfbhjlv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163ltkokmmc.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163hbteucef.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163eqcrdhih.html

[R52] 统计行数
来源：http://www.sxryk.cn/163byamwnog.html

wc -l a.txt
来源：http://www.aibaodan.cn/163setbqsyg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163pssjuuev.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163pcoupngn.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163juoebxgn.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163wzuxaixq.html

[R55] 压缩与解压
来源：http://www.xuanzx.com/163nvgxdzgi.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163kkkbscpl.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163xxyxkzqu.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163jwowlxqb.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163laywmgkk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vkppctdm.html

[R58] 下载文件
来源：http://www.sxryk.cn/163khjmomvg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163qurvyyni.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163zeinvgtz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163adkirzlc.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163ahndeyan.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163mhpwyitd.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163gzakyiqw.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163xondpoap.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dnodwbsj.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163hxvomnxz.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163ebyvyucd.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163oruiepmv.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163yyzjrovi.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163wjikiycj.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163hlxznzfd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163csqqzcyv.html

[R66] 定时任务
来源：http://www.xuanzx.com/163vxopeeul.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163tuvkknmb.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163canrkhsy.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163bevtgyqr.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163zjeesbiv.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ybejsjvy.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163xyormavy.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163hnmtmtal.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163rvcyrvpf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163xafwvivh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163eeufhdto.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ndygbkgs.html

[R72] 等待端口就绪
来源：http://www.xuanzx.com/163pwyksgfe.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163izpbkxfb.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163gvieunro.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163ykgzkwcp.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163achbzuhs.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163afqppajq.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163cheezaqr.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163nmfkfnkk.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pwlcfpyo.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163twtrudeu.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163ckijayqm.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163olmoaokn.html

[R78] 交互式菜单
来源：http://www.sxryk.cn/163xhngshih.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163lerffxoe.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163zjsytsdh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163cjsnyyll.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163vbyimpis.html

time ./run.sh
来源：http://www.aibaodan.cn/163hvuddcui.html

================================================================================
来源：http://www.aibaodan.cn/163ukzpgtrb.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163kxewlguy.html

================================================================================
来源：http://www.sxryk.cn/163ywzicvlj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ugudqwpy.html

#include <stdio.h>
来源：http://www.xuanzx.com/163zsxrtklq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163glimtqhn.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163myfwbign.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163mshvwsxb.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163dwwolsqb.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163beltfqng.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163qxygrikd.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163bxiynjvh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163srexfmim.html

strlen(s)
来源：http://www.xuanzx.com/163frexxfll.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163zjlnzzxh.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mvroxzhb.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163hkgkztjm.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163irqazrhk.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163mmywnwwv.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163gwowgeen.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163eiqjgoim.html


<!-- 参考信息 -->
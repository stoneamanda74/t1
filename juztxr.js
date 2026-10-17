外链999!wailian999！

[Q36] 左连接
来源：http://www.aibaodan.cn/163msiqrhmq.html

SELECT u.name, o.amount FROM users u LEFT JOIN orders o ON o.user_id = u.id;
来源：http://www.xuanzx.com/163owagzibj.html

[Q37] 右连接
来源：http://www.sxryk.cn/163yfmjgvce.html

SELECT * FROM orders o RIGHT JOIN users u ON u.id = o.user_id;
来源：http://www.xuanzx.com/163wgcjsipl.html

[Q38] 全外连接（PostgreSQL）
来源：http://www.sxryk.cn/163avkhsmwj.html

SELECT * FROM a FULL OUTER JOIN b ON a.id = b.a_id;
来源：http://www.xuanzx.com/163jtvhhxso.html

[Q39] 自连接（查上下级）
来源：http://www.sxryk.cn/163sbmgakym.html

SELECT e.name, m.name AS manager FROM employees e
来源：http://www.xuanzx.com/163pgumpxne.html

LEFT JOIN employees m ON e.manager_id = m.id;
来源：http://www.aibaodan.cn/163oqyltocr.html

[Q40] 交叉连接（笛卡尔积）
来源：http://www.sxryk.cn/163xjqjkwoh.html

SELECT * FROM colors CROSS JOIN sizes;
来源：http://www.aibaodan.cn/163gertobsq.html

[Q41] 多表连接
来源：http://www.sxryk.cn/163kbjhttyy.html

SELECT o.id, u.name, p.title FROM orders o
来源：http://www.xuanzx.com/163vhihualg.html

JOIN users u ON u.id = o.user_id
来源：http://www.sxryk.cn/163jkmsxzfo.html

JOIN products p ON p.id = o.product_id;
来源：http://www.aibaodan.cn/163cqvapznt.html

[Q42] 连接条件附加过滤
来源：http://www.aibaodan.cn/163aojpysod.html

SELECT u.name, o.amount FROM users u
来源：http://www.xuanzx.com/163iyxgunjq.html

JOIN orders o ON o.user_id = u.id AND o.amount > 100;
来源：http://www.sxryk.cn/163hftuxlkv.html

[Q43] 标量子查询
来源：http://www.sxryk.cn/163khhsjepa.html

SELECT name, (SELECT COUNT(*) FROM orders o WHERE o.user_id = u.id) AS cnt FROM users u;
来源：http://www.xuanzx.com/163goisaadz.html

[Q44] IN 子查询
来源：http://www.xuanzx.com/163qawxmpgo.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163bctdzsgh.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163bnaxdyob.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163kscnornq.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163naehsfbx.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nabxkooc.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163keljggad.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163mmxvjbui.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163juaxqjvq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163zpgrjcrn.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163nessjnik.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163jyrhbskg.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163bexxoymc.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163aiktoohn.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163kdyefkyt.html

[Q51] 用子查询更新
来源：http://www.aibaodan.cn/163ieshfvxi.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163kalafibg.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163pnzfidoj.html

DELETE FROM users WHERE id = 10;
来源：http://www.xuanzx.com/163aktcalqz.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163akworxsj.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163tblkdaom.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163upgcmhlm.html

TRUNCATE TABLE logs;
来源：http://www.sxryk.cn/163jhnpibwj.html

[Q55] 排名（并列占位）
来源：http://www.xuanzx.com/163myrkrqgl.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163vuwgoorl.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163dgpcbihu.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qinhujdv.html

[Q57] 行号
来源：http://www.aibaodan.cn/163mhmaegpq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163rlaxtycq.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163smyuwjnr.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163llyixmaz.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163vatpmtkf.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163hxiykdze.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163lazuoeup.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163qydouhwl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163lmyucwla.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ghxlglvh.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163rbpjviek.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163soxgdxwh.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163nyhqskkp.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163kcywtrtd.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163vvweiihn.html

[Q64] 提交事务
来源：http://www.sxryk.cn/163jttawewm.html

COMMIT;
来源：http://www.xuanzx.com/163jvdrpjtj.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wosatrxq.html

ROLLBACK;
来源：http://www.xuanzx.com/163mteurtjk.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163jokaornj.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163knwpwsao.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163dbqmbnae.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163wvcslpvw.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163xfxvhojo.html

SAVEPOINT sp1;
来源：http://www.sxryk.cn/163nkkrkexb.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163ffnmcplg.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163ayskqign.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163wkimyiex.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163yoasytns.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163fyqyrwlz.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mubrvbdv.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163pllcduyp.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163zsaczktg.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163qwlswfua.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163tejcawxt.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163vjjrbtoz.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163fjfcmkjs.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163fkwvpoaz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163bjiqnvlh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.xuanzx.com/163oqzxaezt.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163mealeldv.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163bhltmhfn.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163welyflbk.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163gcnxjqtj.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163pgycawiy.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163wogwipym.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163xodqirxp.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163rnpgbrmr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163fngxelrm.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163hcgmmqco.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163kogdrnim.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163tdgrawtq.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163motfdiii.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163qzzeajpy.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163sdfvivqp.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163ehrrhbzh.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163qmhovotd.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163owrnfjui.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hguzbzqa.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163sxsjkisg.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163efbctblm.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163tfbdusbl.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163tfattjfw.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163qsrrpmvj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163qomwuagn.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163vnmjbsyn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163uspixfvh.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163gpybbdmh.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163dxzuapgs.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163pzjfzowy.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163zlzqylog.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163xhlftavo.html

================================================================================
来源：http://www.xuanzx.com/163vxbwgsgx.html

R. Bash 专题
来源：http://www.aibaodan.cn/163aazinyjc.html

================================================================================
来源：http://www.aibaodan.cn/163jzipxdqm.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163ckcwtsfv.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163hiklkphz.html

set -euo pipefail
来源：http://www.xuanzx.com/163imdjuhpt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163fvfllvyk.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163zsxyyiqj.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jzewgurq.html

readonly PI=3.14
来源：http://www.sxryk.cn/163atusejxs.html

[R04] 位置参数
来源：http://www.xuanzx.com/163kddmslko.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163kjmidkpa.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163vvhtkgzl.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163kiffinjo.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163neuxvebj.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163ltsrrdxv.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163zuhtgvjv.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.sxryk.cn/163sqxahrnr.html

[R08] 数值比较
来源：http://www.sxryk.cn/163ngztsder.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163pukeeyeq.html

[R09] 字符串比较
来源：http://www.aibaodan.cn/163zhsugyqv.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163qaneodxt.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163issrusnn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163qbljmxaz.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ivyghfww.html

case "$1" in
来源：http://www.sxryk.cn/163wtvslssl.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163fiiukcun.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163oejmanqn.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163mdvmctww.html

esac
来源：http://www.sxryk.cn/163tuikphom.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163tiwewnoa.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163anjnuxkc.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163pdydwiee.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163wppwvarj.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163omsesdmt.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163txbuhawn.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163qixpakek.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163sdxwxqau.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163oekmznku.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163jyxuagmd.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163fwtupzgu.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163uoivlmvs.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163ujkexxgn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163cziwolfx.html

[R19] 数组长度
来源：http://www.xuanzx.com/163wbrwbxia.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vlfkmebw.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163rlwznkhd.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163pzukzqdb.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163kjultyvu.html

echo "${#s}"
来源：http://www.sxryk.cn/163kituicyn.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163gtstowkv.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163cbbgltwt.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163apqzfhpx.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163ccylqfwu.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163glvwygrc.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ezdxohko.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163bbcggrui.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163gkvefhjp.html

[R26] 命令替换
来源：http://www.sxryk.cn/163gzrkfvsa.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163rhmwkziw.html

[R27] 算术展开
来源：http://www.sxryk.cn/163mmmleamt.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163pnubpufk.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163ohyxpadn.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163sshxsneb.html

[R29] 定义函数
来源：http://www.xuanzx.com/163asxawzuz.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163hcvjxzsn.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163ihcuekyp.html

f() { return 0; }; f || echo "失败了"
来源：http://www.sxryk.cn/163vzlelmgw.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bydljzig.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163gzjiqlgd.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163ygvqvzgr.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163rzrkivnh.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163dirfsnzd.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163oqiuqiai.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163mpzzejpo.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163vjqxbfam.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163erjfojka.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163febhqdns.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163irpvtavc.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163kuiwbjjz.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163mebpvxqu.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163kzwzwnok.html

[R38] 管道串联
来源：http://www.sxryk.cn/163nhieymgd.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ovobhhmd.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163hfrgotej.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163pxqqnorw.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vetbcbio.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163dnisbjjm.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163tmppgrfp.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163rpnisedq.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163knemvhpz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163lwpakews.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163lgcmmjvl.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163rhvdiyjb.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163foqjcvpi.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163mkajsswy.html

[R45] 批量删除
来源：http://www.sxryk.cn/163nvvactak.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163hlizkjde.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163ijknwfgf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163axckezwf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163ztoiosax.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163smoernfz.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163dzoqjqjf.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163cuzgfeuq.html

[R49] awk 带条件
来源：http://www.xuanzx.com/163amylzbth.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163amrvlwzt.html

[R50] awk 求和
来源：http://www.sxryk.cn/163zzsucwwl.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163xkxdygkq.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ybpnsupl.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.aibaodan.cn/163oedukobn.html

[R52] 统计行数
来源：http://www.sxryk.cn/163bpfuxnex.html

wc -l a.txt
来源：http://www.aibaodan.cn/163gkqxptcr.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163orcnvnls.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163rcohazsq.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163hiqxkayt.html

diff a.txt b.txt
来源：http://www.xuanzx.com/163rsfvsknz.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163kcwgvgjz.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163dxokfjyg.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163hxsthdtd.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163hrbohunf.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163uvhzslop.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163qmspyyfn.html

[R58] 下载文件
来源：http://www.sxryk.cn/163efxifzir.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163mosyrpqx.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163fjaojbgq.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163euwohezd.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163fswhvnop.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163zjzwwqpe.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163cprtrqgb.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163nrwnadlk.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163inqqzxyy.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163jefqlqkn.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163qotadorh.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163wvvsghrk.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163aykfjbzq.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163janexwgq.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163dzexxvgu.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163ojfcrjkd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163zkavwwbd.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yirusaxs.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163iotifvfs.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163hubgwjqw.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163jqevyxlm.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163nleflnti.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163xfdxehts.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163xhptnxql.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163pedtctfm.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163qxvllmkb.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163aqrfvdjq.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163ijmesgmm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163eymjxrje.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163nauzmyzx.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163hddeczhg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163fzjriols.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163kebhsugo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163zinrqcly.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163zhjmpxev.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163onngmmow.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163ltegcbuj.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.sxryk.cn/163ffegwlwo.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163jzmexjia.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163enipwvfd.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163kgoaaorj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163xqcmqbzi.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163wlvapruk.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163yrlliwgn.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163zesexqoc.html

time ./run.sh
来源：http://www.sxryk.cn/163jkulluvs.html

================================================================================
来源：http://www.xuanzx.com/163dfqqpewa.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163hyeqsqmr.html

================================================================================
来源：http://www.sxryk.cn/163dflateuf.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163itncosxb.html

#include <stdio.h>
来源：http://www.xuanzx.com/163tokdvnlm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163qocfompe.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163nbejwguq.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163pihyolzu.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163fgibjkve.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163gkapohbp.html

[S04] C：字符串复制
来源：http://www.aibaodan.cn/163cnmepgup.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163ofiovwis.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163pzervlih.html


<!-- 参考信息 -->
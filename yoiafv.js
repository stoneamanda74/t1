外链999!wailian999！

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163vwyphxgv.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.sxryk.cn/163dntgdzgb.html

[Q45] EXISTS 判断存在
来源：http://www.sxryk.cn/163kjtyoltn.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.sxryk.cn/163cxbaqrpg.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163dkvxtykp.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163lsvmcawp.html

[Q47] 与平均值比较
来源：http://www.xuanzx.com/163umvgfxax.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163mmdvmdkj.html

[Q48] CTE 公用表表达式
来源：http://www.xuanzx.com/163wenbcqic.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163hgnxidvr.html

SELECT * FROM t WHERE c > 5;
来源：http://www.aibaodan.cn/163ssxahnak.html

[Q49] 更新单行
来源：http://www.sxryk.cn/163iwindroy.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163tzfsbxey.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163yeymzjue.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163telemjxm.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163jubeyemk.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163xaocvcug.html

[Q52] 删除指定行
来源：http://www.xuanzx.com/163mgilverg.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163omxnpjqa.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163tvpflpcu.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163fnzbjhfn.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163woarpgsl.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163bsajfzcg.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163coirvexy.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163rsuooxqk.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163ugihmkyg.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163kxwnasyp.html

[Q57] 行号
来源：http://www.sxryk.cn/163uzurwjrq.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163otbnqlhn.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163gharmitv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163hnffsplp.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163klyohhfj.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.aibaodan.cn/163eitkczuq.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163bjhgndht.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163pzsfafgo.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.aibaodan.cn/163rczetcpx.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163mindpioy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163udmmlfrr.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163thjcgibw.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.xuanzx.com/163ulvmqwpe.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163ybwrjhdh.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ugbsumvc.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163istwtyqh.html

COMMIT;
来源：http://www.aibaodan.cn/163hbdlepnp.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163pooodxvr.html

ROLLBACK;
来源：http://www.xuanzx.com/163qpjbjxyy.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163fqkutnev.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163oyjvscro.html

[Q67] 设置隔离级别
来源：http://www.xuanzx.com/163hftseyzh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163tqqceaxf.html

[Q68] 保存点
来源：http://www.sxryk.cn/163itkvwbxf.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163qbzaezwi.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jwrxrihu.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163qcdsoptu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.sxryk.cn/163exjjjnir.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163jzcjoupy.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163sfarzznw.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163lwwrqzlf.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163zfwixqxt.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163teiupyxs.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163ikwerpdt.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163pyhljvlg.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163puapolih.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163vndlosei.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.xuanzx.com/163hnnojzeb.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163asiwxsnv.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163rjxczdvw.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163wrwmoyqd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163rzhguzxy.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163fnlglgny.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163qckkfbty.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163mahssemi.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163vnyvwzhw.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163tgvaptmp.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163svwizzjk.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163ypewoqct.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163svzsclri.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163havvzdrz.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163ggokjgwo.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163wzgiqsyv.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163tanbaxkp.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163iyscajjs.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163iugynebo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163modffzww.html

[Q84] 去除首尾空格
来源：http://www.sxryk.cn/163psttyyfe.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163dzdmbwrk.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163hmlhfeul.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163uzgvqrxc.html

[Q86] 读取 JSON 字段
来源：http://www.sxryk.cn/163uymyqcqp.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163ypydneke.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163onbfgcvb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nqocttta.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163uuatpabe.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163dtgymojj.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163cpjtvwzp.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163wlabyfel.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fcvddtyf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163tjxwodix.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163hxyeqfun.html

================================================================================
来源：http://www.xuanzx.com/163yjwarzgc.html

R. Bash 专题
来源：http://www.xuanzx.com/163jwmvvhba.html

================================================================================
来源：http://www.sxryk.cn/163porkvkub.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163yvnnewna.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163qbnocbco.html

set -euo pipefail
来源：http://www.sxryk.cn/163nuuwwjqa.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163jnzavdzb.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163osrbdfqz.html

[R03] 只读变量
来源：http://www.aibaodan.cn/163nxjwzcdz.html

readonly PI=3.14
来源：http://www.xuanzx.com/163lqcmlvzd.html

[R04] 位置参数
来源：http://www.sxryk.cn/163aarnumpd.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163repucmox.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163nkvhgocf.html

name="${1:-default}"
来源：http://www.sxryk.cn/163tagnnpxu.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163rzthjnay.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163cydqkies.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163nznvzaah.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163mmwqmmbc.html

[R08] 数值比较
来源：http://www.sxryk.cn/163uirmojqb.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163lfoxpyzq.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163bgtztmar.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163diqfoajx.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163tyhvhesb.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163ypxkhlrd.html

[R11] case 多分支
来源：http://www.xuanzx.com/163rumbtgig.html

case "$1" in
来源：http://www.aibaodan.cn/163xnydmorc.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163kgaxloqm.html

stop)  echo "停止" ;;
来源：http://www.sxryk.cn/163sugpijgj.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163nanjajzn.html

esac
来源：http://www.aibaodan.cn/163mkaopihn.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163nghqgkgj.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163swutbjfj.html

[R13] for 计数循环
来源：http://www.xuanzx.com/163hrossiiv.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163vuwwgbcs.html

[R14] C 风格 for
来源：http://www.aibaodan.cn/163gmayalkd.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163vwzzpfhu.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163lrutspyw.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163ltbqzqkp.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163oozvojzj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163zmzzmbby.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163ewuhauyx.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163otbssxkh.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163typhfksn.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163hyqlrkxi.html

[R19] 数组长度
来源：http://www.xuanzx.com/163uwmbcapr.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163zkuaklek.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163drorvcap.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163igyhhjck.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163fcwflucd.html

echo "${#s}"
来源：http://www.xuanzx.com/163svavwcbe.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wwjscffu.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163vhccqjop.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ubdcobcl.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163ygnslxoj.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163nnormzqk.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qqskvxob.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163ejgutrkh.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163vhywzdhy.html

[R26] 命令替换
来源：http://www.sxryk.cn/163ezfwtslv.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163mvwctdcu.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163aygeenij.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163zcqcecdw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163cjccyypn.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163zwadnpdw.html

[R29] 定义函数
来源：http://www.xuanzx.com/163zhatuwbo.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163biwpnwkn.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163rqvdbdvx.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163heptphno.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rhnyskdm.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163mknvjvgo.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163bfwulwuv.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163xlbokdwj.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ouwjltpv.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163qqigwzpu.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163ndiqoamj.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163xsrbdiho.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163ponxlctp.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163cktnesdo.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163kbpympth.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163zkjkvsiz.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163cxsrnhnx.html

files=$(ls -1)
来源：http://www.xuanzx.com/163ofoensoz.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163bdrfnxyc.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163xsvpngqd.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163rrahsjzn.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163wfijuayy.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163dlwbjrjk.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163ajgmymcb.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jcdzuyah.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163mdpuwblp.html

[R42] 输入重定向
来源：http://www.sxryk.cn/163mgrxzqgz.html

wc -l < a.txt
来源：http://www.aibaodan.cn/163uawaikkp.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163oxxlxnad.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163nzqalbtf.html

[R44] 按修改时间查找
来源：http://www.sxryk.cn/163sfmzulsg.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163poodxctn.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163wmgolhyu.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163nasgghky.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163uayfgnvt.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163uumhieqf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163tsjkaoni.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163lgkthxka.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163iumfrbkq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163dtnfsjge.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163hcumzbjz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163vfdabeow.html

[R50] awk 求和
来源：http://www.xuanzx.com/163wxunjnwi.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163cmvxjguq.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163prkquhqt.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163gkopseuq.html

[R52] 统计行数
来源：http://www.sxryk.cn/163ooiiveti.html

wc -l a.txt
来源：http://www.aibaodan.cn/163dcndhonb.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163ulpcmrnt.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163qntdwwyi.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163vmzbzubo.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163wcylctbi.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163hdkcsupj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163wumbmoov.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163zjkxlhkb.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163ztmffrdd.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163npcpapzk.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163vaznvwzm.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163kchdhfax.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163vytpqfug.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163ihitmsyz.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163szbledxz.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163xzzpgnfy.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163kxrvhnrh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163lwltcdxg.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163vbvrjbwy.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163mngjdzpl.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163wvamammr.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gxvxlkte.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163qcyeehqf.html

[R64] 结束进程
来源：http://www.sxryk.cn/163hdbvcwdf.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ozanlqjo.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163zmlvcksd.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.aibaodan.cn/163rqhuastb.html

[R66] 定时任务
来源：http://www.sxryk.cn/163wlfhujyi.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163rdcqtnnt.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163uyhuwbhe.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163enfbvadd.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163xmincipw.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163blydbrbo.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163qwvfngxa.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163mzwttqco.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163azktxdid.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163rgvvxcme.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163ousbiqxv.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163gfeetrbj.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163qgcxmqds.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163yloulgra.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163bhyrfxoq.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163fvbefwny.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163vatzpivv.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163rdpvkdjy.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163cddcnotu.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163hltnylsr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163alycbwxy.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163gkldotjk.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163wtjoudco.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163umhyqtzg.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mhdevxqg.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163ubnzxlwl.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163qrhjfjjq.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.xuanzx.com/163bwibchqy.html

[R80] 查看脚本执行耗时
来源：http://www.sxryk.cn/163gyrtpulo.html

time ./run.sh
来源：http://www.aibaodan.cn/163ibtxivrs.html

================================================================================
来源：http://www.aibaodan.cn/163yjwsbwge.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163iewlffdq.html

================================================================================
来源：http://www.aibaodan.cn/163qlfzudjm.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163otfskarb.html

#include <stdio.h>
来源：http://www.sxryk.cn/163xrjcochx.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163jdjbmjat.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ytqimlxj.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163splhctwl.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163wryogekh.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163ynerzhnu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163devuyood.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163xtjqqucz.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163hrkdqfgq.html

strlen(s)
来源：http://www.xuanzx.com/163xcxzdcij.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163eqsdcqvu.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163ptciluja.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163fxjeevvq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163vwzpgrbf.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163zzykrbmo.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163geqoxand.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163dkwzditu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.sxryk.cn/163lgcztzpe.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163nstxghsi.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vqmvnsiy.html

[S11] C：逐行读文件
来源：http://www.xuanzx.com/163qdydfznu.html

FILE *f = fopen("a.txt", "r");
来源：http://www.xuanzx.com/163zncztvxk.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163bvnreped.html

fclose(f);
来源：http://www.aibaodan.cn/163uaebalky.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163mvpbresm.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tutmsyzg.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163wllidnpi.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163kuuwoiia.html

[S14] C：枚举
来源：http://www.xuanzx.com/163qgebvroe.html


<!-- 参考信息 -->
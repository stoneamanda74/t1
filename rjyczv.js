外链999!wailian999！

[Q44] IN 子查询
来源：http://www.aibaodan.cn/163kquxbvue.html

SELECT * FROM users WHERE id IN (SELECT user_id FROM orders);
来源：http://www.xuanzx.com/163cmsbyvpg.html

[Q45] EXISTS 判断存在
来源：http://www.xuanzx.com/163crpxbcdu.html

SELECT * FROM users u WHERE EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.aibaodan.cn/163qhpghejk.html

[Q46] NOT EXISTS 判断不存在
来源：http://www.aibaodan.cn/163jjctecsn.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163nxrkycdr.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163kcazftje.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.aibaodan.cn/163biqjgqli.html

[Q48] CTE 公用表表达式
来源：http://www.sxryk.cn/163dvgccebq.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.sxryk.cn/163jjwofexp.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163agdqykcn.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163hrajftqx.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.sxryk.cn/163cxrsgfaq.html

[Q50] 批量更新
来源：http://www.aibaodan.cn/163peuyhaep.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163ndzaitnf.html

[Q51] 用子查询更新
来源：http://www.sxryk.cn/163fdxasatf.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.sxryk.cn/163ishhbprx.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163hhwfllad.html

DELETE FROM users WHERE id = 10;
来源：http://www.sxryk.cn/163cujzuuqh.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163kzplwrvl.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.sxryk.cn/163qcfakmvk.html

[Q54] 清空表
来源：http://www.sxryk.cn/163eyznyoeh.html

TRUNCATE TABLE logs;
来源：http://www.xuanzx.com/163bansizsz.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163wadqmeee.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.aibaodan.cn/163igsgotpl.html

[Q56] 密集排名（并列不占位）
来源：http://www.aibaodan.cn/163voatzhhp.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.xuanzx.com/163xohezjhu.html

[Q57] 行号
来源：http://www.aibaodan.cn/163pfekswkc.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163vmwikwur.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163yfjinaoc.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.sxryk.cn/163qbxunmjc.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163sigvglly.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163wewzykqh.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163tetfuedz.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163srxlfeuh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.xuanzx.com/163qrwnvlwb.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163zjknnwdy.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163wqclpgez.html

[Q62] 分组占比
来源：http://www.xuanzx.com/163jtlxqhxv.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163hedmyzle.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163yqaqzucj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.sxryk.cn/163cwnuikld.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163zvmgvmfa.html

COMMIT;
来源：http://www.sxryk.cn/163gcknupeu.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163hkuzbdue.html

ROLLBACK;
来源：http://www.aibaodan.cn/163bniejrjb.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163uluzknup.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163aebsoiad.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163zlzkyzol.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.aibaodan.cn/163mdqymqgp.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163muvkpewr.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163lqzvzjgj.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163wzxtbpdl.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mtkyfweu.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163swjubngz.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163ajoihygi.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163tylnwmmq.html

[Q71] 查看建表语句
来源：http://www.sxryk.cn/163klfbnqdd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163fxsbyngz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163dektylkq.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163klflhgor.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163xfwrdbsd.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163jcnffslc.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163eebygitm.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163wlxyqenz.html

[Q75] 日期格式化
来源：http://www.xuanzx.com/163pvykyper.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163rixrmwwg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163bsepdebq.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163eiqwvvls.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163nhplmciu.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nuestowc.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163gwjjioje.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163mliykbqt.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163qlomrtkd.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163hlopavwr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163czowxkgn.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163eumqzhqw.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163jclfchif.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163oqystbip.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163pzlmtxfk.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ijrsywme.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163lpoyxvky.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163iyelamdv.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163jtdyyhjj.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163qmoggijo.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163iimocplg.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163lqlqrpnh.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163ulvwpzxt.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163uqcngtxb.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163aqvscekv.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163mytgvoyj.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163nqxymkeg.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163dveznjoa.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163vvnfeqyv.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163ipiemwta.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163kmktvfdr.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163fbmyekjf.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163guwzmeql.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163dimfobpt.html

================================================================================
来源：http://www.sxryk.cn/163pdvgodns.html

R. Bash 专题
来源：http://www.xuanzx.com/163tjgdamhs.html

================================================================================
来源：http://www.xuanzx.com/163lsatrvim.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163epgpiizr.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163ejaentpd.html

set -euo pipefail
来源：http://www.aibaodan.cn/163deseyzms.html

[R02] 变量赋值与使用
来源：http://www.aibaodan.cn/163rtdoqigx.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163lljbzzsx.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wmpxfzsk.html

readonly PI=3.14
来源：http://www.xuanzx.com/163bgflshxi.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ekbqacvx.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163fpggokrn.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163xqopjusq.html

name="${1:-default}"
来源：http://www.xuanzx.com/163mgowtvhi.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163nzkanygc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.aibaodan.cn/163ekhbwmtw.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163ybidrvzh.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163aiinygao.html

[R08] 数值比较
来源：http://www.aibaodan.cn/163damptpzk.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.xuanzx.com/163jsokmjqb.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163tjbocahs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163hrwrigbp.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163zpmljggk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163wpfdexsn.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163lqsenisj.html

case "$1" in
来源：http://www.xuanzx.com/163bdbqnfqw.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163vgbxwpjs.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163nnoaiwhz.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163luvahpkc.html

esac
来源：http://www.sxryk.cn/163xkstpssb.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163ztazhcsm.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163vvozpqxr.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163gxeqfxxl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163ojhuixmv.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163otkpludm.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163tueupxkv.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163ihbbampp.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163cfflhcgq.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163zaogvutt.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163apcoabcg.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163sparvthl.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163pxnplnqd.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163idgqyayj.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163erfuqouw.html

[R19] 数组长度
来源：http://www.xuanzx.com/163artbiazk.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163dxblakjf.html

[R20] 关联数组（字典）
来源：http://www.xuanzx.com/163nvmdlaal.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163ghkftwul.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163teskngav.html

echo "${#s}"
来源：http://www.aibaodan.cn/163gmmgjsrz.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xgwitzlf.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163keyriuow.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163ppvafokk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.aibaodan.cn/163qyfddoxd.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163yapdepcq.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163kasrbqwy.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163mhwuqnem.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163esixrnco.html

[R26] 命令替换
来源：http://www.xuanzx.com/163lntfgham.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163pfszmcmx.html

[R27] 算术展开
来源：http://www.xuanzx.com/163xkjhnwaq.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163agqxwynn.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163gbpnwixd.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163vjxsgcpi.html

[R29] 定义函数
来源：http://www.sxryk.cn/163ozbttxip.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163vxcfsjmc.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163mggznyre.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163pqlmjucq.html

[R31] 局部变量
来源：http://www.xuanzx.com/163bdkazaay.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163mglmefcv.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163irqjpvwh.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163abjwrzmf.html

[R33] 捕获错误并提示行号
来源：http://www.aibaodan.cn/163vpeojiph.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163qchptwej.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163rbycljya.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zaqiayxl.html

[R35] 后台执行并等待
来源：http://www.aibaodan.cn/163neomcbqs.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163ipjssdpf.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163ihrajmcm.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163cioxixtz.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163kzkaxejx.html

files=$(ls -1)
来源：http://www.sxryk.cn/163gfepmoic.html

[R38] 管道串联
来源：http://www.xuanzx.com/163jzvrrlyk.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163foslwhxs.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163naxudmre.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163jgfijobb.html

[R40] 追加写日志
来源：http://www.xuanzx.com/163wmbwsztm.html

echo "log" >> out.log
来源：http://www.xuanzx.com/163gqtytxql.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163nkzpdami.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163zvoipboy.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163uezfkokz.html

wc -l < a.txt
来源：http://www.sxryk.cn/163qnttfnyk.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163fbfdzgpc.html

find . -name "*.log" -type f
来源：http://www.sxryk.cn/163iovojcsy.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163jdhngqsy.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163pbpwsepv.html

[R45] 批量删除
来源：http://www.aibaodan.cn/163ckavwmlh.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163fvcmmlwm.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163sdujlnxr.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163xhpalldm.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163oxtmknxl.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163lasgvggm.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163zvasjpyg.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163wslfixyi.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163wnsbhrdf.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163sxyfggae.html

[R50] awk 求和
来源：http://www.sxryk.cn/163fsgtbxcw.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163qlmwemmm.html

[R51] 排序去重取前几
来源：http://www.aibaodan.cn/163fsvumign.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ptgovlpf.html

[R52] 统计行数
来源：http://www.xuanzx.com/163lqqfefej.html

wc -l a.txt
来源：http://www.aibaodan.cn/163wldbkdzp.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163acwudbty.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163uxsodobt.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ahxunacu.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163rfokyrky.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163tmbytgdp.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163iguqwjnz.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163kxoihios.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163uysokxoi.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163rxkutnbt.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163dywdxkgf.html

[R58] 下载文件
来源：http://www.xuanzx.com/163bsiysmup.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163cdkhlqrk.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163gndxgwjf.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163gaorlymy.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163mzohdvvz.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163dqpkwnqd.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163ysysqmik.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163jkpbhogm.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163ydeljwzo.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163cuvvxevu.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163ulbtbyac.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163fessvwet.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163pkqcudkz.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163tugvoibf.html

[R65] 查看端口占用
来源：http://www.aibaodan.cn/163ehjplgnp.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163pjxfoxnv.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163ozutclmr.html

crontab -e;  crontab -l
来源：http://www.aibaodan.cn/163bbmcdoii.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163xbwphymm.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163pxifkwtq.html

[R68] 计算文件校验值
来源：http://www.sxryk.cn/163ywltdgjc.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163ilkkoslj.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163cldfjqrs.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163oxrzaier.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163eyuxcaax.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163drgkdyfu.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163uiosczrl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.xuanzx.com/163tbqlhmlw.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163vxmqvrzx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163bqgcogcn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163zqqqlcfu.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163sqccaxze.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163yevpujik.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163xtcsjqzo.html

[R75] 导出环境变量
来源：http://www.xuanzx.com/163rlibzejj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163xlvzryow.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163rjswtagf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ksjnfbwk.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163bqorkabq.html

read -rp "请输入: " ans
来源：http://www.aibaodan.cn/163iinthgvp.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163treioozj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163befbgjlu.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163qanaygqe.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163blsmwcre.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163btlocole.html

time ./run.sh
来源：http://www.xuanzx.com/163btsbouiy.html

================================================================================
来源：http://www.xuanzx.com/163lypzdjaw.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163pwmbiwxy.html

================================================================================
来源：http://www.xuanzx.com/163folhwuyi.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163vepxpfti.html

#include <stdio.h>
来源：http://www.sxryk.cn/163wifejsjp.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163enztjwgc.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163ytsjobmf.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163mbuivvyn.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163xplmxbae.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163dhvgkvvo.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163nwiziezc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163fdzenmpz.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163theirvig.html

strlen(s)
来源：http://www.aibaodan.cn/163utqzqqec.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163vehcywdv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163bfigdtce.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163spetkqjq.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163hofcllom.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163vnfkzlxh.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163dymjkonq.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163vcdqlfwu.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163tkuupdvz.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163fwxhpums.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163hjzfkwco.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163jnblnqny.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163liebohft.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163bavojgpz.html

fclose(f);
来源：http://www.sxryk.cn/163dwfuklci.html

[S12] C：写文件
来源：http://www.sxryk.cn/163vdaqkzpj.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tvlkrrlj.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163uokjhkzc.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163exixjqxb.html

[S14] C：枚举
来源：http://www.xuanzx.com/163xzbjmuhg.html


<!-- 参考信息 -->
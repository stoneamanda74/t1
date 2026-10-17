外链999!wailian999！

[Q46] NOT EXISTS 判断不存在
来源：http://www.xuanzx.com/163wtqvhiqz.html

SELECT * FROM users u WHERE NOT EXISTS (SELECT 1 FROM orders o WHERE o.user_id = u.id);
来源：http://www.xuanzx.com/163fnqaxadm.html

[Q47] 与平均值比较
来源：http://www.aibaodan.cn/163fhqltdrp.html

SELECT * FROM users WHERE age > (SELECT AVG(age) FROM users);
来源：http://www.xuanzx.com/163jbejugif.html

[Q48] CTE 公用表表达式
来源：http://www.aibaodan.cn/163mmhwiqeb.html

WITH t AS (SELECT city, COUNT(*) AS c FROM users GROUP BY city)
来源：http://www.aibaodan.cn/163hgllcueq.html

SELECT * FROM t WHERE c > 5;
来源：http://www.xuanzx.com/163tbqtttdo.html

[Q49] 更新单行
来源：http://www.xuanzx.com/163ndwnrhof.html

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.aibaodan.cn/163ajxyferk.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163qppcycds.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.aibaodan.cn/163fqtiiwjn.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163lqlubsmt.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.aibaodan.cn/163wzrazyiz.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163cnyfpecu.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163bbarxeyy.html

[Q53] 按条件删除
来源：http://www.xuanzx.com/163dmqitlru.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.xuanzx.com/163jlzfxlji.html

[Q54] 清空表
来源：http://www.sxryk.cn/163bepwdbnx.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163wklpkaxq.html

[Q55] 排名（并列占位）
来源：http://www.aibaodan.cn/163uoqhjcnc.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163atbhtmfn.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163ofcqqiua.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163owkkvqzk.html

[Q57] 行号
来源：http://www.sxryk.cn/163nnnlmlrv.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.sxryk.cn/163jnambszy.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163ccumpxrb.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163qxgboqjs.html

[Q59] 分组内累计
来源：http://www.aibaodan.cn/163pfrgecth.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163ofjrumkw.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163dgpasnhk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.xuanzx.com/163xbrrlgos.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163nltfxkud.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163nziwyorf.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.sxryk.cn/163ecbnmasj.html

[Q62] 分组占比
来源：http://www.aibaodan.cn/163maixaoeu.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jsolojdy.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163whviutnt.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163dvukdkhf.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163hgrwhuik.html

COMMIT;
来源：http://www.aibaodan.cn/163npszduny.html

[Q65] 回滚事务
来源：http://www.aibaodan.cn/163ivbgmkoj.html

ROLLBACK;
来源：http://www.sxryk.cn/163lqsddhsx.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163dpjabfqa.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163lzgkzbwp.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163ppmdlsiq.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163rxarfxrt.html

[Q68] 保存点
来源：http://www.xuanzx.com/163wmgzqykv.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163tdcrmxqe.html

ROLLBACK TO sp1;
来源：http://www.sxryk.cn/163kmgczyqf.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163yumddsne.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163uaajdknd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163xfdkrlmg.html

ANALYZE TABLE users;
来源：http://www.sxryk.cn/163mmmxglhn.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163ppnrgfhw.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163onxzfczy.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163iczakrfj.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163doftzhuo.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163zglpoxke.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163iaresfya.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163sszexvmu.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163xyqqytdl.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163rplnumtt.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163hceepyxb.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163ytlhvnsi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163nupwkhbi.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163siqejmbn.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163umkyzlgm.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163qjtkfluz.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163sizcomit.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163nrqvixqw.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ptkwqvnv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163mqivxesy.html

[Q80] 字符串截取
来源：http://www.sxryk.cn/163ihnxxtry.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163nnlplfix.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163gssxivlp.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163qtlkbhgt.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163ipgkwyqe.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163wafjfhik.html

[Q83] 大小写转换
来源：http://www.sxryk.cn/163vjtbvnmw.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.xuanzx.com/163zlgfaluv.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163xjwymxbq.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163iqixrsje.html

[Q85] 数值取整
来源：http://www.sxryk.cn/163uoysxybp.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163gqfenerz.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163pxybrejy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.xuanzx.com/163uyeemscf.html

[Q87] JSON 字段做条件
来源：http://www.aibaodan.cn/163pedsazni.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163umujcats.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163xkowbobr.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163zrzmxkgq.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163tqjdojhv.html

[Q89] 判断表是否存在
来源：http://www.aibaodan.cn/163oyirfxxi.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163votqeptg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163sdjwfsid.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163gheqqthc.html

================================================================================
来源：http://www.sxryk.cn/163jdmrbosd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163wgqrgyoj.html

================================================================================
来源：http://www.aibaodan.cn/163khorwltl.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163fyibfmgt.html

#!/usr/bin/env bash
来源：http://www.sxryk.cn/163wscfowtd.html

set -euo pipefail
来源：http://www.sxryk.cn/163tdkbjnwr.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163sefaikrx.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163bxxzrjvn.html

[R03] 只读变量
来源：http://www.sxryk.cn/163wideeyni.html

readonly PI=3.14
来源：http://www.sxryk.cn/163repnbmgw.html

[R04] 位置参数
来源：http://www.xuanzx.com/163hmwhbtzv.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163sveznyfn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163snpgvrfp.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163jtzftxzf.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163vkatchbe.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163dlqubtrv.html

[R07] if 判断文件
来源：http://www.aibaodan.cn/163awphqdwi.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.aibaodan.cn/163hcsjscli.html

[R08] 数值比较
来源：http://www.xuanzx.com/163gyqatzun.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163dzjdlumb.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163hdlvazap.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163favqsjmk.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163bzvxgebv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.aibaodan.cn/163veffdinu.html

[R11] case 多分支
来源：http://www.sxryk.cn/163ymbwwtqu.html

case "$1" in
来源：http://www.sxryk.cn/163ajygaway.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163ansuzyll.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163hzqrmbhp.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163uwjfmsgu.html

esac
来源：http://www.sxryk.cn/163zwubbhnj.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163zdxtldae.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163hfxptbgo.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163zsyrcjjj.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163cfwwcdrq.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163tuxkedbr.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.xuanzx.com/163guowmyfa.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163acqqrunl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163qavxezwo.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163kydniffz.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163okwfclce.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163wedpaion.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.xuanzx.com/163lkjjcrtt.html

[R18] 遍历数组
来源：http://www.xuanzx.com/163zxveroqk.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163twlrwoef.html

[R19] 数组长度
来源：http://www.xuanzx.com/163pqhtstso.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163itpqdcfm.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163duwfmuvg.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163nwlcjlrs.html

[R21] 字符串长度
来源：http://www.xuanzx.com/163qjbpttue.html

echo "${#s}"
来源：http://www.aibaodan.cn/163uehfaeuj.html

[R22] 截取子串
来源：http://www.xuanzx.com/163xrrxuxaj.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163dopdpyte.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163wjjaidhn.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163agomseqy.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163dzburpod.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163kolzjixx.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163drpjlpde.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163suwrvurt.html

[R26] 命令替换
来源：http://www.xuanzx.com/163blvqskqq.html

now=$(date +%F); echo "$now"
来源：http://www.sxryk.cn/163mrffqqay.html

[R27] 算术展开
来源：http://www.xuanzx.com/163wyyzwpum.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163qlfgdwjw.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163wvajncqu.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163kivynwni.html

[R29] 定义函数
来源：http://www.sxryk.cn/163jnreoqzg.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163ejtxffyy.html

[R30] 函数返回状态码
来源：http://www.xuanzx.com/163cloxmodj.html

f() { return 0; }; f || echo "失败了"
来源：http://www.aibaodan.cn/163bxlqiqcp.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ebalxumw.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163luefwtty.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163bhpyazbx.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163pugtuvkc.html

[R33] 捕获错误并提示行号
来源：http://www.xuanzx.com/163ekvjprfo.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163swvddvjv.html

[R34] 退出时清理
来源：http://www.xuanzx.com/163bqniioyu.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163bdcxtjmu.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163gbfxohha.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163akogaije.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163ufttrkug.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163ozjzqsfl.html

[R37] 把输出赋给变量
来源：http://www.xuanzx.com/163bmepvcsk.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163hobtcsdv.html

[R38] 管道串联
来源：http://www.sxryk.cn/163rwnfawiz.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163pgxingjs.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163ncmixyaw.html

cmd > out.log 2>&1
来源：http://www.xuanzx.com/163pdhrhpic.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163jqocnhqw.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163rayqtcni.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163jnqbvobz.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ipiwnpml.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ghggllsr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163fhovnpcv.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vtongmkt.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163wvoxznuz.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163komlwicy.html

find . -mtime -7 -type f
来源：http://www.aibaodan.cn/163hesccvoh.html

[R45] 批量删除
来源：http://www.sxryk.cn/163tuqrbsqc.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163qvtfkxnd.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163wekadpft.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163rxlmzdpp.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163qbnrdcun.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163uwaqmfxp.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163kkdtlsqz.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163sqtaamtv.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ziofvmdz.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163irigzstt.html

[R50] awk 求和
来源：http://www.xuanzx.com/163jqwtpege.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163zvgeesmx.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163ffmrdtoe.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163ibybwkzy.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163qmyyukkr.html

wc -l a.txt
来源：http://www.sxryk.cn/163fodyzupx.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163yjtcmxjy.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163rfnnmzsg.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163ssucvsrk.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163hqbatzgj.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163fbotuwln.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163hcxtfpva.html

[R56] 远程拷贝
来源：http://www.aibaodan.cn/163cxhesojj.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163vzxwxwlo.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163upzgulft.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163hkmxumvy.html

[R58] 下载文件
来源：http://www.xuanzx.com/163kjhilboi.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163pjddtrac.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163yswmggjv.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163eecvjerc.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163rdwoiavs.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163mbcvtalh.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163mpowubea.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163aqczsmbg.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163arxxqhnw.html

du -ah . | sort -rh | head -10
来源：http://www.sxryk.cn/163zxthoaaa.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163yqypibej.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163seuparlh.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163kkdlghjn.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163vhacdujd.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163lyzizwzw.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163mcdgkehu.html

[R66] 定时任务
来源：http://www.xuanzx.com/163wucbfdtg.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163flgvwvnc.html

[R67] 生成随机十六进制串
来源：http://www.xuanzx.com/163fjbpfemf.html

openssl rand -hex 16
来源：http://www.xuanzx.com/163etiysves.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163edlgryol.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.aibaodan.cn/163vkxybgij.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163wnmaqkmm.html

head -c 16 /dev/urandom | base64
来源：http://www.sxryk.cn/163zsnjuofl.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163luipeebk.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163hnjmliaf.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163omytquxg.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163lzfhfwey.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163blwejqrv.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163zyhgnubn.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163usssggwm.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163ltbbyyde.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163ckbzzwfw.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163ozfhghao.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163romxvpvt.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163umhumcmr.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163pkhlklbf.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ekxqrdql.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163prbyykyc.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163nimdhfmc.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mljqzicb.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163yxlpmmvy.html

[R79] 解析命令行选项
来源：http://www.xuanzx.com/163rwdmnkgh.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163sietvwml.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163ogobdnls.html

time ./run.sh
来源：http://www.xuanzx.com/163nvfqgoei.html

================================================================================
来源：http://www.aibaodan.cn/163kvdhfdfi.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163vsevcvhl.html

================================================================================
来源：http://www.xuanzx.com/163meprlwjd.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ddjzpddr.html

#include <stdio.h>
来源：http://www.xuanzx.com/163etdznaaj.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.sxryk.cn/163fkwxwpio.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163gsgnjmlb.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163jrlmzdwv.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163cnpednzv.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163gkfkypwm.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163jbvradqn.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163nfgjfknh.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163yezrnwzy.html

strlen(s)
来源：http://www.sxryk.cn/163eauprwcq.html

[S06] C：字符串比较
来源：http://www.xuanzx.com/163ilrxerwa.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163tsisjiux.html

[S07] C：数组遍历求和
来源：http://www.sxryk.cn/163jlmxflkj.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.sxryk.cn/163dnpmgzbk.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163sbubenlx.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163txonsett.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163jdxoshki.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163ljrewagb.html

[S10] C：指针与解引用
来源：http://www.sxryk.cn/163djktdrzb.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163ywwwzdcw.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163atwzzsip.html

FILE *f = fopen("a.txt", "r");
来源：http://www.aibaodan.cn/163qimltbhs.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.xuanzx.com/163jxersamw.html

fclose(f);
来源：http://www.xuanzx.com/163roybuqsh.html

[S12] C：写文件
来源：http://www.sxryk.cn/163gayoeffp.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tkypuctt.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163fqrmrdyn.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163jrbcsjwh.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163dqlpgbpb.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163xjtlpase.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163sknigxtj.html

(double) a / b
来源：http://www.aibaodan.cn/163okzrycun.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163xyxnnopa.html


<!-- 参考信息 -->
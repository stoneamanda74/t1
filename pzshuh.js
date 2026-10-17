外链999!wailian999！

UPDATE users SET status = 1 WHERE id = 10;
来源：http://www.xuanzx.com/163qycusxuc.html

[Q50] 批量更新
来源：http://www.xuanzx.com/163jywcxxzd.html

UPDATE users SET status = 2 WHERE created_at < '2024-01-01';
来源：http://www.sxryk.cn/163sasxxqgj.html

[Q51] 用子查询更新
来源：http://www.xuanzx.com/163ecldexbd.html

UPDATE users SET age = (SELECT MAX(age) FROM users) WHERE id = 1;
来源：http://www.xuanzx.com/163xdjexegd.html

[Q52] 删除指定行
来源：http://www.sxryk.cn/163wrnkmrvr.html

DELETE FROM users WHERE id = 10;
来源：http://www.aibaodan.cn/163turmvkjd.html

[Q53] 按条件删除
来源：http://www.aibaodan.cn/163coocquii.html

DELETE FROM orders WHERE created_at < '2020-01-01';
来源：http://www.aibaodan.cn/163qfgooesz.html

[Q54] 清空表
来源：http://www.aibaodan.cn/163wwwgnalo.html

TRUNCATE TABLE logs;
来源：http://www.aibaodan.cn/163ugxlkjzi.html

[Q55] 排名（并列占位）
来源：http://www.sxryk.cn/163crrggrea.html

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.xuanzx.com/163ealyhome.html

[Q56] 密集排名（并列不占位）
来源：http://www.sxryk.cn/163taqhulmt.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.aibaodan.cn/163wgstklch.html

[Q57] 行号
来源：http://www.sxryk.cn/163twxjqnbr.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.aibaodan.cn/163oruldqbe.html

[Q58] 累计求和
来源：http://www.sxryk.cn/163mmdmeyca.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.aibaodan.cn/163edkpodkl.html

[Q59] 分组内累计
来源：http://www.xuanzx.com/163efckhbad.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163lzxasxvh.html

[Q60] 取上一行 / 下一行
来源：http://www.aibaodan.cn/163klehzvrr.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163zkvbindl.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163ohiiuzim.html

[Q61] 移动平均
来源：http://www.sxryk.cn/163ibufzntm.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163fscitmuo.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163gjykymol.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163ardbowez.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163mowvoppl.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163sgkopqxk.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163nqpufsxd.html

COMMIT;
来源：http://www.sxryk.cn/163wmspbydc.html

[Q65] 回滚事务
来源：http://www.sxryk.cn/163ijmwqlnn.html

ROLLBACK;
来源：http://www.sxryk.cn/163riklebyf.html

[Q66] 行锁查询
来源：http://www.sxryk.cn/163radbxmap.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163rhztelwh.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163iyovhclp.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163ojxezanw.html

[Q68] 保存点
来源：http://www.aibaodan.cn/163rhnaspvg.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163himdfxqg.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163kpqidkxo.html

[Q69] 查看执行计划
来源：http://www.aibaodan.cn/163mbyouvfo.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163ykptcwwd.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163wvdmcpgk.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163ouqqujxp.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163xtayjrtj.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163zxtjtjfq.html

[Q72] 查看索引
来源：http://www.aibaodan.cn/163ybqlmmzy.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163jwywqoaw.html

[Q73] 查看表状态
来源：http://www.sxryk.cn/163upatiubf.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.xuanzx.com/163rfkqizuj.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163ytzkyxaw.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163idmpbays.html

[Q75] 日期格式化
来源：http://www.sxryk.cn/163gxecfqbh.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163ycgwakty.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163jilfzswi.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163fdgyjzdt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163khacuhkl.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163uyvxtfqp.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163gakydate.html

[Q78] 当前时间
来源：http://www.aibaodan.cn/163npillvov.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.aibaodan.cn/163oceyktuu.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163lhjevlmr.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.xuanzx.com/163kmpzjnuk.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163ibbljmtg.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163oivbdsmx.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163mdgfbggh.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163zzxczqgu.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163aakdejnh.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163jrzheprf.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163pyvcoqok.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163bidhktun.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163dthcxxvt.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163hmopetpc.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163uepgpnvk.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163iygaetgs.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163nvkpqkcw.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163lidtuwjc.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163goaxppqb.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163vtlvouzr.html

[Q88] 行转列（条件聚合）
来源：http://www.aibaodan.cn/163omdaardd.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163dposvnsl.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163fejpblom.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163iwtrnoab.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.xuanzx.com/163mixtbjra.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163njvdrqgf.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163jfdpxuhs.html

================================================================================
来源：http://www.aibaodan.cn/163hbnqqchd.html

R. Bash 专题
来源：http://www.aibaodan.cn/163cpqqknfy.html

================================================================================
来源：http://www.sxryk.cn/163ehicgjhw.html

[R01] shebang 与严格模式
来源：http://www.sxryk.cn/163ncwjtudk.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163cyepbhvy.html

set -euo pipefail
来源：http://www.aibaodan.cn/163xtkjpryq.html

[R02] 变量赋值与使用
来源：http://www.xuanzx.com/163wgigbkmr.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163hbmtshxm.html

[R03] 只读变量
来源：http://www.sxryk.cn/163enydmdvo.html

readonly PI=3.14
来源：http://www.xuanzx.com/163rkrkiewa.html

[R04] 位置参数
来源：http://www.xuanzx.com/163srrvsvwn.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.xuanzx.com/163xaiaqosi.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163yzpsusqh.html

name="${1:-default}"
来源：http://www.sxryk.cn/163xujpvvqh.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163nefxlcmc.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163yzmeeaav.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163qrvaejxw.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163tiwwbowu.html

[R08] 数值比较
来源：http://www.xuanzx.com/163rxlevdwi.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163wxplqdch.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163tgawiktk.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.aibaodan.cn/163yrwcajek.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ktxxriwk.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163zkdonwmt.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163fcbgpdfe.html

case "$1" in
来源：http://www.sxryk.cn/163qjnpqtnn.html

start) echo "启动" ;;
来源：http://www.aibaodan.cn/163uvgajzfu.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163lcvnfbcu.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163dgkyyyhx.html

esac
来源：http://www.xuanzx.com/163ugmpkynv.html

[R12] for 遍历文件
来源：http://www.xuanzx.com/163eywnkghs.html

for f in *.txt; do echo "$f"; done
来源：http://www.aibaodan.cn/163cdhiaukv.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163llwakrtn.html

for i in {1..10}; do echo "$i"; done
来源：http://www.sxryk.cn/163vgmsmomz.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163cvtxicig.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.sxryk.cn/163ojrmrodz.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163eoyegncv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163idcosxfq.html

[R16] until 等待条件
来源：http://www.aibaodan.cn/163tynfucrk.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.sxryk.cn/163vvhfsgia.html

[R17] 数组定义与取值
来源：http://www.sxryk.cn/163npuchrlp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163iuthmexe.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163xuaqkwtd.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163zmnkunir.html

[R19] 数组长度
来源：http://www.xuanzx.com/163keiivxso.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163vpywsryk.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163tkoqjyyp.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163xodrgyhw.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163uuwxwuzc.html

echo "${#s}"
来源：http://www.sxryk.cn/163hbcpikxg.html

[R22] 截取子串
来源：http://www.sxryk.cn/163mdrwzpqa.html

echo "${s:0:5}"
来源：http://www.aibaodan.cn/163vggbfsdt.html

[R23] 字符串替换
来源：http://www.xuanzx.com/163ezbmjbeh.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163rxfpkkqo.html

[R24] 大小写转换
来源：http://www.aibaodan.cn/163hotlgwok.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.xuanzx.com/163ckmljkma.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163wwipnlkt.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.aibaodan.cn/163mfsijifx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163zlalosqa.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163sdbztfga.html

[R27] 算术展开
来源：http://www.sxryk.cn/163rggzjfmc.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163ylhjdmwd.html

[R28] 浮点运算
来源：http://www.xuanzx.com/163mbwoeedk.html

echo "scale=2; 10/3" | bc
来源：http://www.aibaodan.cn/163bgbbpuay.html

[R29] 定义函数
来源：http://www.sxryk.cn/163wrwtwaco.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.xuanzx.com/163ccurpcfo.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163wrmaynel.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163gzpvontn.html

[R31] 局部变量
来源：http://www.aibaodan.cn/163bumiosag.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163odyrlxnt.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ktaoruij.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163sifywrwx.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ejefwrvq.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163xhnrppuk.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163qurxwrvn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163ueskibqc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163gdbwuzxg.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.aibaodan.cn/163cgtpqaie.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163kaaguqrs.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163wybhhznw.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163foikoujm.html

files=$(ls -1)
来源：http://www.xuanzx.com/163baslwsdz.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163igaegivj.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163fmffrvvd.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163enwipync.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163miwgskth.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163fpxwwuoq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163yaybzdnj.html

[R41] 丢弃输出
来源：http://www.sxryk.cn/163iwldwhsc.html

cmd >/dev/null 2>&1
来源：http://www.aibaodan.cn/163maiufehw.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163tyolodga.html

wc -l < a.txt
来源：http://www.xuanzx.com/163xhtftned.html

[R43] 按名字查找文件
来源：http://www.sxryk.cn/163trddbfvo.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163eawfrjde.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163srobpklk.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163vkrwtigp.html

[R45] 批量删除
来源：http://www.xuanzx.com/163hxhvwlhs.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163qsemfytu.html

[R46] 递归替换文件内容
来源：http://www.sxryk.cn/163faafwysx.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.xuanzx.com/163vuzwoegs.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163gryawpex.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163jdsaeqrl.html

[R48] awk 取指定列
来源：http://www.sxryk.cn/163tmuabwtq.html

awk '{print $1, $3}' a.txt
来源：http://www.xuanzx.com/163uqdivfif.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163zitdifmo.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163watninlc.html

[R50] awk 求和
来源：http://www.xuanzx.com/163utcblmwp.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163stlwhxok.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163yvxfvonu.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163lgkkjzov.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163bkoynnug.html

wc -l a.txt
来源：http://www.xuanzx.com/163rarqlbqe.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163mvpucqwf.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163hpvcjzgd.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163wmbhholb.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163deumrjnb.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163wjiwxosl.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163bkavddao.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163yghgklnq.html

scp file user@host:/path/
来源：http://www.sxryk.cn/163uxtirkrh.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163udelmkqi.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163jwnatvrq.html

[R58] 下载文件
来源：http://www.aibaodan.cn/163qmskwfyz.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163wiobbrca.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163axloyoge.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163zblfnzfv.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163zmakekyn.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163dvzlxpzj.html

[R61] 磁盘占用
来源：http://www.xuanzx.com/163tmzeqxbx.html

df -h;  du -sh *
来源：http://www.sxryk.cn/163hbqbgqth.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163bcklohqk.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163vztxkfpr.html

[R63] 内存与进程
来源：http://www.sxryk.cn/163felfnsgj.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163kwqmmkjr.html

[R64] 结束进程
来源：http://www.xuanzx.com/163fcgmnoeh.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163adhjswgz.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163ssypmios.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163cudssynk.html

[R66] 定时任务
来源：http://www.xuanzx.com/163ceexnvqp.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163nutcrpgu.html

[R67] 生成随机十六进制串
来源：http://www.sxryk.cn/163jnuwqawr.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163rwdgcjiw.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163saqmltkk.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163lecyqozf.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163zijafsjd.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163sddogmwv.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163rthejiqf.html

date +%s;  date -d @1700000000
来源：http://www.aibaodan.cn/163tmwvorhn.html

[R71] 日期格式化
来源：http://www.sxryk.cn/163edpxqycl.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163mlyhpknq.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163vjijtnjm.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163xvkbellg.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163pzjsmvgx.html

split -l 1000 big.log part_
来源：http://www.aibaodan.cn/163gyltwxoq.html

[R74] 批量重命名
来源：http://www.xuanzx.com/163dqpdyfdo.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.sxryk.cn/163dyuaaxaj.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163snuamdpj.html

export PATH="$HOME/bin:$PATH"
来源：http://www.sxryk.cn/163rnydsber.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163aocmxqdu.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163zcvkzcpy.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163qanctbnz.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163ejwixxkl.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163kwuyfzpd.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.xuanzx.com/163pnrhbwyd.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163ujwagdzi.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163hszccluk.html

[R80] 查看脚本执行耗时
来源：http://www.xuanzx.com/163oitilqup.html

time ./run.sh
来源：http://www.xuanzx.com/163iuifjcst.html

================================================================================
来源：http://www.sxryk.cn/163rbeeskft.html

S. C / C++ 专题
来源：http://www.sxryk.cn/163hokuyuop.html

================================================================================
来源：http://www.xuanzx.com/163ujamnbvw.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163ckjwqxbf.html

#include <stdio.h>
来源：http://www.xuanzx.com/163bitknflm.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ioznqvxb.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ksvsjhbp.html

int a = 10; printf("%d\n", a);
来源：http://www.aibaodan.cn/163pkujpjle.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163shrvocwm.html

int x; scanf("%d", &x);
来源：http://www.xuanzx.com/163awjzdvcy.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163vchknafc.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163hkriszta.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163qsunugqu.html

strlen(s)
来源：http://www.sxryk.cn/163rytfrutn.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163rfyramjl.html

strcmp(a, b) == 0
来源：http://www.aibaodan.cn/163euvbbqti.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163pkwjgboo.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.xuanzx.com/163xxywvdyf.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163mkvygcvk.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163bpagoabp.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163grhytkcm.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163heizarvb.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163fyykszur.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163vyuexijf.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163uzvutujf.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163movquhkx.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163hbntwnio.html

fclose(f);
来源：http://www.sxryk.cn/163zkrdkcoo.html

[S12] C：写文件
来源：http://www.sxryk.cn/163equphzbd.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163kmlinqoe.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163kjfvikpf.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163nxyjrsqj.html

[S14] C：枚举
来源：http://www.sxryk.cn/163vwbvdlyn.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163cpwltcww.html

[S15] C：类型转换
来源：http://www.aibaodan.cn/163fklptcdx.html

(double) a / b
来源：http://www.xuanzx.com/163wbjcunae.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163xwgjbnhs.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163xyhmuytx.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163vlyeueju.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163hqydipiu.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163zuavozdl.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163zoogocth.html

[S19] C：快速排序
来源：http://www.xuanzx.com/163xkqiotrb.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163jkocaxad.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163eaqrmtvi.html


<!-- 参考信息 -->
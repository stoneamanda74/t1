外链999!wailian999！

SELECT name, RANK() OVER (ORDER BY score DESC) AS rk FROM scores;
来源：http://www.sxryk.cn/163dcgzjnda.html

[Q56] 密集排名（并列不占位）
来源：http://www.xuanzx.com/163lbqgsygl.html

SELECT name, DENSE_RANK() OVER (ORDER BY score DESC) FROM scores;
来源：http://www.sxryk.cn/163qtskxkvr.html

[Q57] 行号
来源：http://www.sxryk.cn/163dfdayzlx.html

SELECT ROW_NUMBER() OVER (ORDER BY id) AS seq FROM users;
来源：http://www.xuanzx.com/163ihysregd.html

[Q58] 累计求和
来源：http://www.aibaodan.cn/163cgfyizpv.html

SELECT id, amount, SUM(amount) OVER (ORDER BY id) AS running FROM orders;
来源：http://www.xuanzx.com/163qaswraum.html

[Q59] 分组内累计
来源：http://www.sxryk.cn/163aruaokab.html

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.xuanzx.com/163bciwtnos.html

[Q60] 取上一行 / 下一行
来源：http://www.xuanzx.com/163esdixrmi.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.sxryk.cn/163ngoxgvat.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163fqimujgp.html

[Q61] 移动平均
来源：http://www.aibaodan.cn/163vznnoagd.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.xuanzx.com/163eeooabbh.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163xcuovson.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.aibaodan.cn/163ptkzwler.html

[Q63] 开启事务
来源：http://www.xuanzx.com/163jcmiwlaz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163ufclwaru.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163prujuqdo.html

COMMIT;
来源：http://www.sxryk.cn/163ydfzbxbn.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163cthqtcat.html

ROLLBACK;
来源：http://www.sxryk.cn/163piuwdbvu.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163rockrndm.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.sxryk.cn/163xnyattlc.html

[Q67] 设置隔离级别
来源：http://www.aibaodan.cn/163hkmopxlz.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163ikfsuwqp.html

[Q68] 保存点
来源：http://www.sxryk.cn/163nispaozi.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163cxgjkmwe.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163lmbiqaga.html

[Q69] 查看执行计划
来源：http://www.xuanzx.com/163kdettidw.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.xuanzx.com/163blcchvgh.html

[Q70] 更新统计信息
来源：http://www.sxryk.cn/163dgmpekme.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163brzvwucq.html

[Q71] 查看建表语句
来源：http://www.xuanzx.com/163rekccgfd.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.sxryk.cn/163kdudjxcw.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163wuwjdxuc.html

SHOW INDEX FROM users;
来源：http://www.xuanzx.com/163mnuoaufc.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163qcrhtgzc.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163zqxgaijv.html

[Q74] 强制使用索引
来源：http://www.sxryk.cn/163edsfglli.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.sxryk.cn/163bnbwpkpw.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163lquuifyd.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163baxccoeg.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.xuanzx.com/163xytnmcsw.html

[Q76] 按天统计
来源：http://www.aibaodan.cn/163mqtmhbxm.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.aibaodan.cn/163neposyjo.html

[Q77] 时间加减
来源：http://www.xuanzx.com/163alhwaakt.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.xuanzx.com/163dzpvtccc.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163wodefqxj.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163sgiqsyto.html

[Q79] 字符串拼接
来源：http://www.aibaodan.cn/163ugbufuzm.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.aibaodan.cn/163nbwwnrip.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163waxfhpfe.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.aibaodan.cn/163ecocjfjq.html

[Q81] 字符串替换
来源：http://www.aibaodan.cn/163tfjlqzil.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.sxryk.cn/163rhejzzof.html

[Q82] 字符长度与字节长度
来源：http://www.xuanzx.com/163bamwzbgw.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.xuanzx.com/163onibkaen.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163vvmwqllo.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163ftxqkibb.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163lsqqnrfg.html

SELECT TRIM(name) FROM users;
来源：http://www.xuanzx.com/163xmoqvvju.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163zfekedda.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.aibaodan.cn/163mshlbvmc.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163upkfjswv.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163ybimxyvk.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163qoebjfoz.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.xuanzx.com/163znsgvhyy.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163kjyqtcmi.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163jwixgocm.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.aibaodan.cn/163ccqwdimt.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163ojtszwqw.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163nbslktyx.html

[Q90] 生成序号列
来源：http://www.xuanzx.com/163ghanslct.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.xuanzx.com/163chvzaqqz.html

================================================================================
来源：http://www.sxryk.cn/163crbncznl.html

R. Bash 专题
来源：http://www.xuanzx.com/163edkixcxj.html

================================================================================
来源：http://www.xuanzx.com/163baskphck.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163hnxtvyne.html

#!/usr/bin/env bash
来源：http://www.xuanzx.com/163rpjxhvet.html

set -euo pipefail
来源：http://www.aibaodan.cn/163bwghnnjt.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163fvhxtwkm.html

name="Tom"; echo "$name"
来源：http://www.aibaodan.cn/163dderhjwv.html

[R03] 只读变量
来源：http://www.sxryk.cn/163jickakqn.html

readonly PI=3.14
来源：http://www.xuanzx.com/163gpapvhoq.html

[R04] 位置参数
来源：http://www.aibaodan.cn/163ctyulnbg.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163jijmfayq.html

[R05] 参数默认值
来源：http://www.aibaodan.cn/163ycbdmjao.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163uczbdzut.html

[R06] 判断命令是否存在
来源：http://www.sxryk.cn/163qvirssor.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163zffvnwme.html

[R07] if 判断文件
来源：http://www.sxryk.cn/163yurjcwzp.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163jhvwpbuh.html

[R08] 数值比较
来源：http://www.xuanzx.com/163bgulqlxl.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163vfrdwdlw.html

[R09] 字符串比较
来源：http://www.sxryk.cn/163xrwxkgya.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163wyxluvbn.html

[R10] 正则匹配
来源：http://www.aibaodan.cn/163usxuomrn.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163dgpmksxf.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163yflrppwd.html

case "$1" in
来源：http://www.sxryk.cn/163xrpxefua.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163mknaqigb.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163hmguqsie.html

*)     echo "未知命令" ;;
来源：http://www.xuanzx.com/163bfjapwws.html

esac
来源：http://www.xuanzx.com/163fbsbtiqt.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163ghgnebwc.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163btwlcqbf.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163vlrkixmx.html

for i in {1..10}; do echo "$i"; done
来源：http://www.xuanzx.com/163jgtfwgsj.html

[R14] C 风格 for
来源：http://www.sxryk.cn/163xqpqvskw.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163qvxskuiu.html

[R15] while 逐行读文件
来源：http://www.sxryk.cn/163nxsvcouu.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.sxryk.cn/163evobckjf.html

[R16] until 等待条件
来源：http://www.xuanzx.com/163hxwzvklj.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163csuqscvb.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163jtddrpyj.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163clojunbp.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163qvarfsep.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.aibaodan.cn/163rafeherq.html

[R19] 数组长度
来源：http://www.sxryk.cn/163uknbriob.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163yzguzmpx.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163zjnrfaaf.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.xuanzx.com/163swsezixz.html

[R21] 字符串长度
来源：http://www.sxryk.cn/163dbkzihmk.html

echo "${#s}"
来源：http://www.aibaodan.cn/163djuomxsd.html

[R22] 截取子串
来源：http://www.sxryk.cn/163wgyeohul.html

echo "${s:0:5}"
来源：http://www.xuanzx.com/163lawaxcnd.html

[R23] 字符串替换
来源：http://www.aibaodan.cn/163yyszvanr.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163yyuzkytu.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163kjwgxixm.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163pkxxpmsv.html

[R25] 去后缀 / 去前缀
来源：http://www.aibaodan.cn/163bbmxxxqg.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163wufebsdr.html

[R26] 命令替换
来源：http://www.xuanzx.com/163xbupehyk.html

now=$(date +%F); echo "$now"
来源：http://www.aibaodan.cn/163tdoofqer.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163unbnerni.html

echo $((1 + 2 * 3))
来源：http://www.xuanzx.com/163jpsclehn.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163yacxyrdj.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wpugztcl.html

[R29] 定义函数
来源：http://www.xuanzx.com/163kdtaxeex.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.sxryk.cn/163dzytvjul.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163bvelddzf.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163iljzbrwk.html

[R31] 局部变量
来源：http://www.sxryk.cn/163rwbjhnpz.html

f() { local x=1; echo "$x"; }
来源：http://www.sxryk.cn/163ouqjjdii.html

[R32] 参数个数校验
来源：http://www.sxryk.cn/163horgqrwp.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.aibaodan.cn/163visxrxcn.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163nlvejdus.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.xuanzx.com/163cinnargf.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163wumedjap.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163wgitzzgc.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163qycbfxce.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163qclpjeaa.html

[R36] 并发执行多个任务
来源：http://www.xuanzx.com/163tqtpllpe.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163jotynowq.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163evwzourj.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163rkrhliuv.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163dwabytwq.html

cat a.txt | grep -i error | wc -l
来源：http://www.sxryk.cn/163dtwfkalq.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163zfgkjewf.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163zvlqnxzx.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163vxjhacyh.html

echo "log" >> out.log
来源：http://www.sxryk.cn/163zxuekvob.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163chwylvkt.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ztjecbzf.html

[R42] 输入重定向
来源：http://www.aibaodan.cn/163hcvzybzr.html

wc -l < a.txt
来源：http://www.xuanzx.com/163tqigbcho.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163vcrzpvdr.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fxcytdnt.html

[R44] 按修改时间查找
来源：http://www.aibaodan.cn/163exwwftrp.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163cuzmnxfe.html

[R45] 批量删除
来源：http://www.xuanzx.com/163zkjnvfmn.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163bfdnlqam.html

[R46] 递归替换文件内容
来源：http://www.aibaodan.cn/163nvmuicqd.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163njojmnmf.html

[R47] sed 单行替换
来源：http://www.xuanzx.com/163yqgqrnsb.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.aibaodan.cn/163kwhcbqwt.html

[R48] awk 取指定列
来源：http://www.xuanzx.com/163gbfjfbow.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163qiliyqvh.html

[R49] awk 带条件
来源：http://www.aibaodan.cn/163etfkzgcq.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.sxryk.cn/163hooalfto.html

[R50] awk 求和
来源：http://www.aibaodan.cn/163edbglxtv.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.aibaodan.cn/163qtcvmrrs.html

[R51] 排序去重取前几
来源：http://www.xuanzx.com/163intvytdc.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.xuanzx.com/163nsriytgt.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163gxtqjsid.html

wc -l a.txt
来源：http://www.xuanzx.com/163qaexcnhg.html

[R53] 查看文件头与实时尾
来源：http://www.sxryk.cn/163crqkdrfd.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.xuanzx.com/163mdtcuktm.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163rzameuih.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163syhdybyb.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163kpdorezj.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.sxryk.cn/163ybofffha.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163jmnvgbad.html

scp file user@host:/path/
来源：http://www.xuanzx.com/163tbpzejrr.html

[R57] 远程执行命令
来源：http://www.sxryk.cn/163kfkwrwvu.html

ssh user@host 'uptime'
来源：http://www.xuanzx.com/163gvzddzsc.html

[R58] 下载文件
来源：http://www.xuanzx.com/163prwajdzo.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.aibaodan.cn/163vdfappxe.html

[R59] 发 POST JSON
来源：http://www.aibaodan.cn/163yupxvqek.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163ennawysy.html

[R60] 只看 HTTP 状态码
来源：http://www.aibaodan.cn/163dnwnsnzd.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.aibaodan.cn/163tizcizzo.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163eoebkgjv.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163nvqyuamj.html

[R62] 找最占空间的文件
来源：http://www.xuanzx.com/163dihpinbs.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163hxkyyhec.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163ubckcqsz.html

free -h;  ps aux | grep nginx
来源：http://www.sxryk.cn/163tkumnokj.html

[R64] 结束进程
来源：http://www.xuanzx.com/163jqzkltmw.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163ohclwtjk.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163phcpfyte.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163puygjpjd.html

[R66] 定时任务
来源：http://www.aibaodan.cn/163tvhcmjdf.html

crontab -e;  crontab -l
来源：http://www.xuanzx.com/163yukaguha.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ktpjknfk.html

openssl rand -hex 16
来源：http://www.sxryk.cn/163qhoivebu.html

[R68] 计算文件校验值
来源：http://www.xuanzx.com/163epfxtgga.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163goixtnwt.html

[R69] 生成随机密码
来源：http://www.sxryk.cn/163elagrnxs.html

head -c 16 /dev/urandom | base64
来源：http://www.aibaodan.cn/163yhdanzos.html

[R70] 时间戳与互转
来源：http://www.aibaodan.cn/163kmyqhftf.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163plfulzbb.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163hkkmljql.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163knwetpjb.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163stqcaxiz.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.aibaodan.cn/163wfgqtwld.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163bmggrjze.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163eyssdjjo.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163svgmjhaf.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163ojdqimsp.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163ijdmhcpo.html

export PATH="$HOME/bin:$PATH"
来源：http://www.xuanzx.com/163mdmmnryu.html

[R76] 使用临时文件
来源：http://www.aibaodan.cn/163jaxejfpl.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163esxeewwp.html

[R77] 读取用户输入
来源：http://www.xuanzx.com/163olqvcgih.html

read -rp "请输入: " ans
来源：http://www.sxryk.cn/163wgpfuxlw.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163mlktaquj.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163txtphjcr.html

[R79] 解析命令行选项
来源：http://www.sxryk.cn/163rnhrfvmp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.aibaodan.cn/163vvpopkhz.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xoxiyzwl.html

time ./run.sh
来源：http://www.sxryk.cn/163zurtyhdx.html

================================================================================
来源：http://www.aibaodan.cn/163dwjuygnn.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163mmsuwpzv.html

================================================================================
来源：http://www.sxryk.cn/163yulvdpvj.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163xucqjobx.html

#include <stdio.h>
来源：http://www.xuanzx.com/163pemhdmle.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163otnanjdq.html

[S02] C：变量与格式化输出
来源：http://www.sxryk.cn/163cdkktdhe.html

int a = 10; printf("%d\n", a);
来源：http://www.sxryk.cn/163bnreaahy.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163aonotwnd.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163wgerdqhu.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163dbslmmdi.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.xuanzx.com/163mldtjche.html

[S05] C：字符串长度
来源：http://www.aibaodan.cn/163bbzsovns.html

strlen(s)
来源：http://www.xuanzx.com/163ynznrsqf.html

[S06] C：字符串比较
来源：http://www.sxryk.cn/163etamyyvr.html

strcmp(a, b) == 0
来源：http://www.sxryk.cn/163bentdyfw.html

[S07] C：数组遍历求和
来源：http://www.xuanzx.com/163uzetqqmt.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163szupnare.html

[S08] C：动态内存分配与释放
来源：http://www.aibaodan.cn/163ipuvnjec.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163lrurzqot.html

[S09] C：结构体定义与初始化
来源：http://www.sxryk.cn/163mdddufel.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163tvjpugby.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163gdbarcaj.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163xqbldhef.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163pelfqrzp.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163wjiiuqod.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163qxzjyrpm.html

fclose(f);
来源：http://www.xuanzx.com/163anvfyyin.html

[S12] C：写文件
来源：http://www.xuanzx.com/163wqrvwnya.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.aibaodan.cn/163ayxpgbif.html

[S13] C：宏定义
来源：http://www.xuanzx.com/163ibditbii.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.aibaodan.cn/163pfqliajk.html

[S14] C：枚举
来源：http://www.aibaodan.cn/163ttjrbqvo.html

enum Color { RED, GREEN, BLUE };
来源：http://www.sxryk.cn/163lreqqykq.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163uhrupouu.html

(double) a / b
来源：http://www.sxryk.cn/163lndgrcur.html

[S16] C：位操作置位
来源：http://www.aibaodan.cn/163kougbbyh.html

x |= (1 << 3);
来源：http://www.aibaodan.cn/163spflsrnr.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163jfuymouw.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.sxryk.cn/163jwmwjkea.html

[S18] C：命令行参数
来源：http://www.sxryk.cn/163zqnumjgv.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163oagpqdti.html

[S19] C：快速排序
来源：http://www.aibaodan.cn/163irgvvzct.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163lupqgdpe.html

[S20] C：二分查找
来源：http://www.aibaodan.cn/163jefvtjeq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163qhkcgdjk.html

[S21] C：字符类别判断
来源：http://www.aibaodan.cn/163wromxwbh.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163jielvaur.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163isbdxdgh.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163ztfphalq.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163qccoqqno.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163zhdeiqon.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163vddjovnm.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.aibaodan.cn/163htuyoztt.html

[S25] C：内存拷贝
来源：http://www.sxryk.cn/163pngahgld.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163wfcgzzfk.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163dksxtdkh.html


<!-- 参考信息 -->
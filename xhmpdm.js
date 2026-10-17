外链999!wailian999！

SELECT city, id, SUM(amount) OVER (PARTITION BY city ORDER BY id) FROM orders;
来源：http://www.sxryk.cn/163vvnhogkx.html

[Q60] 取上一行 / 下一行
来源：http://www.sxryk.cn/163trwdaykk.html

SELECT id, LAG(amount) OVER (ORDER BY id) AS prev,
来源：http://www.aibaodan.cn/163sipmksqh.html

LEAD(amount) OVER (ORDER BY id) AS next FROM orders;
来源：http://www.sxryk.cn/163piapzwik.html

[Q61] 移动平均
来源：http://www.xuanzx.com/163ctockzdg.html

SELECT id, AVG(amount) OVER (ORDER BY id ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) FROM orders;
来源：http://www.aibaodan.cn/163iyuulajv.html

[Q62] 分组占比
来源：http://www.sxryk.cn/163wkkkurke.html

SELECT city, COUNT(*) * 100.0 / SUM(COUNT(*)) OVER () AS pct FROM users GROUP BY city;
来源：http://www.sxryk.cn/163jgbevbwu.html

[Q63] 开启事务
来源：http://www.sxryk.cn/163qzrssbwj.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.aibaodan.cn/163hqtsrkki.html

[Q64] 提交事务
来源：http://www.xuanzx.com/163lnhnearg.html

COMMIT;
来源：http://www.aibaodan.cn/163juvuwqeu.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163wmgcoaqm.html

ROLLBACK;
来源：http://www.xuanzx.com/163rxwkfsqg.html

[Q66] 行锁查询
来源：http://www.aibaodan.cn/163rrcfxcdd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.xuanzx.com/163htqjckiz.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163mmbkedvh.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.sxryk.cn/163arrcjdge.html

[Q68] 保存点
来源：http://www.sxryk.cn/163laxkakkw.html

SAVEPOINT sp1;
来源：http://www.xuanzx.com/163fedjcqwu.html

ROLLBACK TO sp1;
来源：http://www.xuanzx.com/163bfaqjmwo.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163vsydfkkc.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163bgzdfdrh.html

[Q70] 更新统计信息
来源：http://www.xuanzx.com/163avpitfmp.html

ANALYZE TABLE users;
来源：http://www.xuanzx.com/163hxlwjutj.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163cokqkwbn.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.aibaodan.cn/163nhqznljh.html

[Q72] 查看索引
来源：http://www.sxryk.cn/163shizvlpg.html

SHOW INDEX FROM users;
来源：http://www.aibaodan.cn/163qnltvzal.html

[Q73] 查看表状态
来源：http://www.xuanzx.com/163xnktjnru.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.aibaodan.cn/163wrcjbxdb.html

[Q74] 强制使用索引
来源：http://www.aibaodan.cn/163qncwcmrk.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163peprijhn.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163aavzebtr.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.aibaodan.cn/163keulziaz.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.sxryk.cn/163hdhvqyew.html

[Q76] 按天统计
来源：http://www.sxryk.cn/163aqsuqadt.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163hwycjwoc.html

[Q77] 时间加减
来源：http://www.sxryk.cn/163ulgibvan.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163nbnsulxz.html

[Q78] 当前时间
来源：http://www.sxryk.cn/163bysoqild.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163sxjucgyo.html

[Q79] 字符串拼接
来源：http://www.sxryk.cn/163wcddzsdb.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163fdobofcj.html

[Q80] 字符串截取
来源：http://www.aibaodan.cn/163bzdbudgd.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.sxryk.cn/163gatpsagp.html

[Q81] 字符串替换
来源：http://www.xuanzx.com/163dlaozbgm.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.aibaodan.cn/163zfxswuyi.html

[Q82] 字符长度与字节长度
来源：http://www.aibaodan.cn/163knkzenco.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.aibaodan.cn/163moweswrg.html

[Q83] 大小写转换
来源：http://www.xuanzx.com/163liauhjbu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.aibaodan.cn/163hdqcggtu.html

[Q84] 去除首尾空格
来源：http://www.xuanzx.com/163shoztqhh.html

SELECT TRIM(name) FROM users;
来源：http://www.aibaodan.cn/163gqfxfgag.html

[Q85] 数值取整
来源：http://www.xuanzx.com/163upqhmntq.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.sxryk.cn/163hgzjakoj.html

[Q86] 读取 JSON 字段
来源：http://www.xuanzx.com/163dlisqmgy.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.aibaodan.cn/163fataqlhd.html

[Q87] JSON 字段做条件
来源：http://www.xuanzx.com/163yaqjwtkn.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.aibaodan.cn/163jovepqqf.html

[Q88] 行转列（条件聚合）
来源：http://www.sxryk.cn/163jopvrcvu.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.xuanzx.com/163hbncubzb.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163doigearv.html

[Q89] 判断表是否存在
来源：http://www.sxryk.cn/163vcbvpxct.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163jwpltpjn.html

[Q90] 生成序号列
来源：http://www.sxryk.cn/163xjopfkhw.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.aibaodan.cn/163tbbvtffq.html

================================================================================
来源：http://www.xuanzx.com/163rdhriaeh.html

R. Bash 专题
来源：http://www.sxryk.cn/163lzjpzaiw.html

================================================================================
来源：http://www.sxryk.cn/163npsjtgug.html

[R01] shebang 与严格模式
来源：http://www.aibaodan.cn/163bppogvtm.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163bzzyyigm.html

set -euo pipefail
来源：http://www.xuanzx.com/163axuoffvy.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163ponbnrui.html

name="Tom"; echo "$name"
来源：http://www.xuanzx.com/163dnsopjnb.html

[R03] 只读变量
来源：http://www.xuanzx.com/163khuhxugg.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163ztsbrlnv.html

[R04] 位置参数
来源：http://www.sxryk.cn/163zhpsgjmy.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.sxryk.cn/163fwcvclnn.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163munmanti.html

name="${1:-default}"
来源：http://www.xuanzx.com/163pcamdchg.html

[R06] 判断命令是否存在
来源：http://www.xuanzx.com/163zqfwvyqb.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.xuanzx.com/163xvjenfjx.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163dgrwhrri.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163nfvjyrko.html

[R08] 数值比较
来源：http://www.xuanzx.com/163piaswxpw.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.aibaodan.cn/163jaqgunad.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163tjfblucs.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.sxryk.cn/163vvffaseg.html

[R10] 正则匹配
来源：http://www.xuanzx.com/163ncvlwutq.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.sxryk.cn/163zpddmdwb.html

[R11] case 多分支
来源：http://www.sxryk.cn/163gmawqkff.html

case "$1" in
来源：http://www.aibaodan.cn/163aijuvivm.html

start) echo "启动" ;;
来源：http://www.sxryk.cn/163sqihiwps.html

stop)  echo "停止" ;;
来源：http://www.aibaodan.cn/163okcpyrib.html

*)     echo "未知命令" ;;
来源：http://www.sxryk.cn/163nxbnzujz.html

esac
来源：http://www.aibaodan.cn/163vagsshqs.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163epxpyjuj.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163sxljgmtp.html

[R13] for 计数循环
来源：http://www.sxryk.cn/163jftxznyl.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163lmmwypna.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163qftctosg.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163smnayoaj.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163bshrduvl.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.xuanzx.com/163yoextrsj.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163dfdabfvi.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.xuanzx.com/163crtnaddt.html

[R17] 数组定义与取值
来源：http://www.xuanzx.com/163vlqtdida.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.aibaodan.cn/163rpydqrpm.html

[R18] 遍历数组
来源：http://www.sxryk.cn/163jxzovfou.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.xuanzx.com/163tvageewy.html

[R19] 数组长度
来源：http://www.sxryk.cn/163oykawtnm.html

echo "${#arr[@]}"
来源：http://www.xuanzx.com/163gnjvsbzv.html

[R20] 关联数组（字典）
来源：http://www.sxryk.cn/163bxgdlgdb.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.sxryk.cn/163uinhdceu.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163twtjtkup.html

echo "${#s}"
来源：http://www.xuanzx.com/163bkanqixb.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163spiacccl.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163gennufmf.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163vpphqamg.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.sxryk.cn/163pspnrgpk.html

[R24] 大小写转换
来源：http://www.xuanzx.com/163moebyuwe.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.sxryk.cn/163nuhurhxe.html

[R25] 去后缀 / 去前缀
来源：http://www.xuanzx.com/163kgjhfako.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.xuanzx.com/163cgjnrolx.html

[R26] 命令替换
来源：http://www.sxryk.cn/163sqjwgssq.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163kaebxvbb.html

[R27] 算术展开
来源：http://www.aibaodan.cn/163gwsesrzn.html

echo $((1 + 2 * 3))
来源：http://www.aibaodan.cn/163aefnygwj.html

[R28] 浮点运算
来源：http://www.aibaodan.cn/163azumxhak.html

echo "scale=2; 10/3" | bc
来源：http://www.sxryk.cn/163rozocrjm.html

[R29] 定义函数
来源：http://www.sxryk.cn/163rovxmlan.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163jshniqkm.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163adsaluyb.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163cjnlolci.html

[R31] 局部变量
来源：http://www.xuanzx.com/163thgdxylt.html

f() { local x=1; echo "$x"; }
来源：http://www.aibaodan.cn/163wdbfolqa.html

[R32] 参数个数校验
来源：http://www.aibaodan.cn/163ewxzokdl.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.xuanzx.com/163zjvlfida.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163ardjralz.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.aibaodan.cn/163uksrksjq.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163msanzrqn.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dbpmrhfp.html

[R35] 后台执行并等待
来源：http://www.sxryk.cn/163jwmsaclx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.xuanzx.com/163fcjvwmtl.html

[R36] 并发执行多个任务
来源：http://www.aibaodan.cn/163nowckazl.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.sxryk.cn/163pltocrbu.html

[R37] 把输出赋给变量
来源：http://www.aibaodan.cn/163ejxffozm.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163vtxgwsqw.html

[R38] 管道串联
来源：http://www.sxryk.cn/163bedmnpsn.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163ylevqsaj.html

[R39] 重定向标准输出与错误
来源：http://www.xuanzx.com/163svphwste.html

cmd > out.log 2>&1
来源：http://www.sxryk.cn/163rghhimaq.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163xeqdruzq.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163dkgvrcwl.html

[R41] 丢弃输出
来源：http://www.xuanzx.com/163rixbhnke.html

cmd >/dev/null 2>&1
来源：http://www.xuanzx.com/163ltwranyu.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163vghzqlau.html

wc -l < a.txt
来源：http://www.xuanzx.com/163jtxxdhbu.html

[R43] 按名字查找文件
来源：http://www.aibaodan.cn/163bnzcxmuk.html

find . -name "*.log" -type f
来源：http://www.aibaodan.cn/163fivxrnem.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163erzyoihk.html

find . -mtime -7 -type f
来源：http://www.xuanzx.com/163vrcufmhd.html

[R45] 批量删除
来源：http://www.sxryk.cn/163aaavbhim.html

find . -name "*.tmp" -delete
来源：http://www.sxryk.cn/163ddohvqhr.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zwylotuf.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.aibaodan.cn/163vswoyewx.html

[R47] sed 单行替换
来源：http://www.aibaodan.cn/163wnuojtwk.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.sxryk.cn/163gyhzeibf.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163olrpbeiq.html

awk '{print $1, $3}' a.txt
来源：http://www.aibaodan.cn/163bydaylpk.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163ykgvfnij.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.aibaodan.cn/163cfqqpqjm.html

[R50] awk 求和
来源：http://www.xuanzx.com/163imdjxlml.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.xuanzx.com/163wrqfnqeg.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163iccwmftx.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163jxrhiupc.html

[R52] 统计行数
来源：http://www.xuanzx.com/163mcpabzsl.html

wc -l a.txt
来源：http://www.xuanzx.com/163lnsfxhzq.html

[R53] 查看文件头与实时尾
来源：http://www.xuanzx.com/163ggipjdzs.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.sxryk.cn/163lzzdwlyh.html

[R54] 比较两个文件
来源：http://www.sxryk.cn/163bujlxuny.html

diff a.txt b.txt
来源：http://www.sxryk.cn/163gizcclxa.html

[R55] 压缩与解压
来源：http://www.sxryk.cn/163aiayerot.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.xuanzx.com/163deqnrlac.html

[R56] 远程拷贝
来源：http://www.xuanzx.com/163tvhifsjc.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163sviimvaj.html

[R57] 远程执行命令
来源：http://www.xuanzx.com/163sorxdlrq.html

ssh user@host 'uptime'
来源：http://www.aibaodan.cn/163uwngtkal.html

[R58] 下载文件
来源：http://www.sxryk.cn/163ekqwlwzs.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.xuanzx.com/163umpqnwql.html

[R59] 发 POST JSON
来源：http://www.sxryk.cn/163mlpnszit.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.xuanzx.com/163wncwzxfc.html

[R60] 只看 HTTP 状态码
来源：http://www.sxryk.cn/163rwabphtt.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.xuanzx.com/163nthdmeyp.html

[R61] 磁盘占用
来源：http://www.sxryk.cn/163entoolal.html

df -h;  du -sh *
来源：http://www.aibaodan.cn/163igtynyom.html

[R62] 找最占空间的文件
来源：http://www.aibaodan.cn/163rqaonvdu.html

du -ah . | sort -rh | head -10
来源：http://www.xuanzx.com/163zdyiwskb.html

[R63] 内存与进程
来源：http://www.aibaodan.cn/163gxubgzol.html

free -h;  ps aux | grep nginx
来源：http://www.aibaodan.cn/163zzvoucqj.html

[R64] 结束进程
来源：http://www.aibaodan.cn/163opiiqwrd.html

kill -9 $(pgrep -f app.py)
来源：http://www.aibaodan.cn/163fsrxukfq.html

[R65] 查看端口占用
来源：http://www.xuanzx.com/163suellqwo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.xuanzx.com/163nxbjergw.html

[R66] 定时任务
来源：http://www.xuanzx.com/163jbemiwzi.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163idmexucj.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163ymjmdeuq.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163twvfgbfn.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163osdjajjl.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.xuanzx.com/163ekswyvhs.html

[R69] 生成随机密码
来源：http://www.aibaodan.cn/163yecgpjgc.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163lgqxmpbt.html

[R70] 时间戳与互转
来源：http://www.xuanzx.com/163ckijhoum.html

date +%s;  date -d @1700000000
来源：http://www.sxryk.cn/163ewwtlpxh.html

[R71] 日期格式化
来源：http://www.xuanzx.com/163qxnvuyuz.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.aibaodan.cn/163pauobxhm.html

[R72] 等待端口就绪
来源：http://www.aibaodan.cn/163bssazxsx.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.sxryk.cn/163jsvgpmwx.html

[R73] 分割大日志
来源：http://www.sxryk.cn/163nlfzbmgg.html

split -l 1000 big.log part_
来源：http://www.sxryk.cn/163dewaempn.html

[R74] 批量重命名
来源：http://www.aibaodan.cn/163ysfavxmy.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.xuanzx.com/163qrvgbsqx.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163tnihtlvd.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163zjxdfunv.html

[R76] 使用临时文件
来源：http://www.xuanzx.com/163mpoucuos.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163lyhhestm.html

[R77] 读取用户输入
来源：http://www.aibaodan.cn/163maegrblm.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163kvdztiln.html

[R78] 交互式菜单
来源：http://www.aibaodan.cn/163iwuhjdyr.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.sxryk.cn/163slfnoxhv.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163llemblcz.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163gudxzgpj.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163mpbqlcge.html

time ./run.sh
来源：http://www.xuanzx.com/163mepmxwjt.html

================================================================================
来源：http://www.xuanzx.com/163wazxvsws.html

S. C / C++ 专题
来源：http://www.aibaodan.cn/163tdolotuw.html

================================================================================
来源：http://www.sxryk.cn/163ghkhyeli.html

[S01] C：Hello World
来源：http://www.aibaodan.cn/163ndclbeoe.html

#include <stdio.h>
来源：http://www.sxryk.cn/163jqvcihdq.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.xuanzx.com/163nqdiprjh.html

[S02] C：变量与格式化输出
来源：http://www.aibaodan.cn/163ixupfbts.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163hxbensss.html

[S03] C：读入整数
来源：http://www.xuanzx.com/163vznhovhv.html

int x; scanf("%d", &x);
来源：http://www.sxryk.cn/163yxllnyfw.html

[S04] C：字符串复制
来源：http://www.xuanzx.com/163lsvhescs.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.sxryk.cn/163cscwimjb.html

[S05] C：字符串长度
来源：http://www.sxryk.cn/163khjyiayk.html

strlen(s)
来源：http://www.xuanzx.com/163xzucmceo.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163rqxethdj.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163mtfmyjwv.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163rhsttwou.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163hycnqjsx.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163uhghgarb.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.aibaodan.cn/163lvppidbx.html

[S09] C：结构体定义与初始化
来源：http://www.aibaodan.cn/163cbabsevx.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.aibaodan.cn/163ztbffweq.html

[S10] C：指针与解引用
来源：http://www.aibaodan.cn/163xztykbqv.html

int *p = &a;  *p = 5;
来源：http://www.aibaodan.cn/163wuaduear.html

[S11] C：逐行读文件
来源：http://www.aibaodan.cn/163mekdmpie.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163rpgpcvrl.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.aibaodan.cn/163okkuwrtu.html

fclose(f);
来源：http://www.xuanzx.com/163tdfevfpf.html

[S12] C：写文件
来源：http://www.aibaodan.cn/163lpwvxzha.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163foxbglgi.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163tvvrycaa.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.sxryk.cn/163fbdltjqw.html

[S14] C：枚举
来源：http://www.xuanzx.com/163hmbenivu.html

enum Color { RED, GREEN, BLUE };
来源：http://www.xuanzx.com/163bonmvncr.html

[S15] C：类型转换
来源：http://www.sxryk.cn/163bwdmudhr.html

(double) a / b
来源：http://www.sxryk.cn/163bsacrbnq.html

[S16] C：位操作置位
来源：http://www.xuanzx.com/163hdnofcno.html

x |= (1 << 3);
来源：http://www.xuanzx.com/163srkzsdfu.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163cjurbyqt.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.aibaodan.cn/163psbiysks.html

[S18] C：命令行参数
来源：http://www.aibaodan.cn/163uovkhmax.html

int main(int argc, char **argv)
来源：http://www.aibaodan.cn/163rxywpjqr.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163aktjwfrv.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163sdndvzyf.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163epvizhyt.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.aibaodan.cn/163iuzdescy.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163isnygoyr.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163ufskkcrj.html

[S22] C：字符串转数字
来源：http://www.xuanzx.com/163rklrwpxp.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.xuanzx.com/163xcsmcbiu.html

[S23] C：随机数
来源：http://www.sxryk.cn/163rfmgxvpp.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163velkrfiw.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163xtrmekyc.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163vtdykask.html

[S25] C：内存拷贝
来源：http://www.xuanzx.com/163vmzkinfa.html

memcpy(dst, src, n);
来源：http://www.xuanzx.com/163bztzrdgu.html

[S26] C：内存清零
来源：http://www.xuanzx.com/163gozrdqka.html

memset(a, 0, sizeof a);
来源：http://www.aibaodan.cn/163zralmuco.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163dvqkojlm.html

const double PI = 3.14159;
来源：http://www.xuanzx.com/163eorcpefx.html

[S28] C：静态变量
来源：http://www.xuanzx.com/163tsvkchds.html

static int counter = 0;
来源：http://www.xuanzx.com/163dtjtbaye.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163ymlmylap.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.aibaodan.cn/163ynfnunpv.html

[S30] C：头文件保护
来源：http://www.sxryk.cn/163xazvxxfx.html


<!-- 参考信息 -->
外链999!wailian999！

[Q63] 开启事务
来源：http://www.xuanzx.com/163rcjfnqtz.html

START TRANSACTION;                -- 或 BEGIN
来源：http://www.xuanzx.com/163sfopmycy.html

[Q64] 提交事务
来源：http://www.aibaodan.cn/163lcrhjrsd.html

COMMIT;
来源：http://www.aibaodan.cn/163lvjhgvos.html

[Q65] 回滚事务
来源：http://www.xuanzx.com/163krstfpst.html

ROLLBACK;
来源：http://www.xuanzx.com/163eczbflhb.html

[Q66] 行锁查询
来源：http://www.xuanzx.com/163oziqkzzd.html

SELECT * FROM users WHERE id = 1 FOR UPDATE;
来源：http://www.aibaodan.cn/163pcqmkqhf.html

[Q67] 设置隔离级别
来源：http://www.sxryk.cn/163hcjwjxnx.html

SET TRANSACTION ISOLATION LEVEL READ COMMITTED;
来源：http://www.xuanzx.com/163immbdimn.html

[Q68] 保存点
来源：http://www.sxryk.cn/163cshfmgiq.html

SAVEPOINT sp1;
来源：http://www.aibaodan.cn/163jexalbir.html

ROLLBACK TO sp1;
来源：http://www.aibaodan.cn/163jctjhyul.html

[Q69] 查看执行计划
来源：http://www.sxryk.cn/163yecdknpt.html

EXPLAIN SELECT * FROM users WHERE email = 'a@a.com';
来源：http://www.aibaodan.cn/163vmteywap.html

[Q70] 更新统计信息
来源：http://www.aibaodan.cn/163kmeenyrb.html

ANALYZE TABLE users;
来源：http://www.aibaodan.cn/163bnwkvezq.html

[Q71] 查看建表语句
来源：http://www.aibaodan.cn/163mnpgjkjb.html

SHOW CREATE TABLE users;          -- PostgreSQL: \d users
来源：http://www.xuanzx.com/163rzvkjzaz.html

[Q72] 查看索引
来源：http://www.xuanzx.com/163nmjdpdhm.html

SHOW INDEX FROM users;
来源：http://www.sxryk.cn/163udnghywg.html

[Q73] 查看表状态
来源：http://www.aibaodan.cn/163czfivyed.html

SHOW TABLE STATUS LIKE 'users';
来源：http://www.sxryk.cn/163ofiavihl.html

[Q74] 强制使用索引
来源：http://www.xuanzx.com/163zginazrt.html

SELECT * FROM users FORCE INDEX (idx_users_email) WHERE email = 'x';
来源：http://www.aibaodan.cn/163pzmavmrk.html

[Q75] 日期格式化
来源：http://www.aibaodan.cn/163gxpmrqqj.html

SELECT DATE_FORMAT(created_at, '%Y-%m') FROM orders;
来源：http://www.sxryk.cn/163chbnlzco.html

-- PostgreSQL: to_char(created_at, 'YYYY-MM')
来源：http://www.aibaodan.cn/163mpuifngd.html

[Q76] 按天统计
来源：http://www.xuanzx.com/163fjvmplng.html

SELECT DATE(created_at) AS d, COUNT(*) FROM orders GROUP BY d;
来源：http://www.xuanzx.com/163jikxpycn.html

[Q77] 时间加减
来源：http://www.aibaodan.cn/163nyhgjpfs.html

SELECT DATE_ADD(NOW(), INTERVAL 7 DAY);   -- PostgreSQL: now() + interval '7 day'
来源：http://www.aibaodan.cn/163fnszacwi.html

[Q78] 当前时间
来源：http://www.xuanzx.com/163oklmorch.html

SELECT NOW(), CURDATE(), UNIX_TIMESTAMP();
来源：http://www.xuanzx.com/163mclazfal.html

[Q79] 字符串拼接
来源：http://www.xuanzx.com/163qkxobpmv.html

SELECT CONCAT(first_name, ' ', last_name) FROM users;   -- PostgreSQL: ||
来源：http://www.sxryk.cn/163uswhsouw.html

[Q80] 字符串截取
来源：http://www.xuanzx.com/163mdimbdfk.html

SELECT SUBSTRING(name, 1, 3) FROM users;
来源：http://www.xuanzx.com/163hfyqgatn.html

[Q81] 字符串替换
来源：http://www.sxryk.cn/163xcvcfops.html

SELECT REPLACE(name, 'a', 'b') FROM users;
来源：http://www.xuanzx.com/163gdkqofdp.html

[Q82] 字符长度与字节长度
来源：http://www.sxryk.cn/163arhfcxgk.html

SELECT CHAR_LENGTH(name), LENGTH(name) FROM users;
来源：http://www.sxryk.cn/163hubqlise.html

[Q83] 大小写转换
来源：http://www.aibaodan.cn/163yqpsxqdu.html

SELECT UPPER(name), LOWER(name) FROM users;
来源：http://www.sxryk.cn/163kgvvyjds.html

[Q84] 去除首尾空格
来源：http://www.aibaodan.cn/163tlnosxjq.html

SELECT TRIM(name) FROM users;
来源：http://www.sxryk.cn/163uxymbazu.html

[Q85] 数值取整
来源：http://www.aibaodan.cn/163sqevlahf.html

SELECT ROUND(3.567, 2), CEIL(3.1), FLOOR(3.9);
来源：http://www.xuanzx.com/163xqmkuxoe.html

[Q86] 读取 JSON 字段
来源：http://www.aibaodan.cn/163avpanivg.html

SELECT data->>'$.name' FROM t;    -- PostgreSQL: data->>'name'
来源：http://www.sxryk.cn/163loqswsoh.html

[Q87] JSON 字段做条件
来源：http://www.sxryk.cn/163ipxnosvp.html

SELECT * FROM t WHERE JSON_EXTRACT(data, '$.age') > 18;
来源：http://www.sxryk.cn/163xvmboizm.html

[Q88] 行转列（条件聚合）
来源：http://www.xuanzx.com/163cjguhdbn.html

SELECT SUM(CASE WHEN status = 1 THEN 1 ELSE 0 END) AS s1,
来源：http://www.sxryk.cn/163rgmwwpxt.html

SUM(CASE WHEN status = 2 THEN 1 ELSE 0 END) AS s2 FROM users;
来源：http://www.xuanzx.com/163jnwntvyv.html

[Q89] 判断表是否存在
来源：http://www.xuanzx.com/163naytnsdg.html

SELECT COUNT(*) FROM information_schema.tables WHERE table_name = 'users';
来源：http://www.sxryk.cn/163mikhdlvg.html

[Q90] 生成序号列
来源：http://www.aibaodan.cn/163rfqduqzh.html

SELECT @i := @i + 1 AS seq, name FROM users, (SELECT @i := 0) x;
来源：http://www.sxryk.cn/163rfhelqrp.html

================================================================================
来源：http://www.sxryk.cn/163hqumsnmm.html

R. Bash 专题
来源：http://www.sxryk.cn/163ggakggdi.html

================================================================================
来源：http://www.xuanzx.com/163ntczanbv.html

[R01] shebang 与严格模式
来源：http://www.xuanzx.com/163djotdosc.html

#!/usr/bin/env bash
来源：http://www.aibaodan.cn/163dwnlcgnp.html

set -euo pipefail
来源：http://www.sxryk.cn/163sbxjheua.html

[R02] 变量赋值与使用
来源：http://www.sxryk.cn/163nucwzrez.html

name="Tom"; echo "$name"
来源：http://www.sxryk.cn/163wikctesw.html

[R03] 只读变量
来源：http://www.xuanzx.com/163amwztrkh.html

readonly PI=3.14
来源：http://www.aibaodan.cn/163neyevgmg.html

[R04] 位置参数
来源：http://www.sxryk.cn/163ztcvdvcl.html

echo "$0 $1 $2 | 全部: $@ | 个数: $#"
来源：http://www.aibaodan.cn/163vzmnmqvu.html

[R05] 参数默认值
来源：http://www.sxryk.cn/163iujpvtsg.html

name="${1:-default}"
来源：http://www.aibaodan.cn/163wnultwfp.html

[R06] 判断命令是否存在
来源：http://www.aibaodan.cn/163vfbdyulq.html

command -v git >/dev/null || { echo "缺少 git"; exit 1; }
来源：http://www.sxryk.cn/163dmsqzotg.html

[R07] if 判断文件
来源：http://www.xuanzx.com/163cbrdlzzd.html

if [[ -f "$f" ]]; then echo "是文件"; fi
来源：http://www.xuanzx.com/163zvnpusjv.html

[R08] 数值比较
来源：http://www.sxryk.cn/163wkvjjaam.html

if (( a > b )); then echo "a 更大"; fi
来源：http://www.sxryk.cn/163xldnbxpn.html

[R09] 字符串比较
来源：http://www.xuanzx.com/163npzmzjek.html

if [[ "$a" == "$b" ]]; then echo "相等"; fi
来源：http://www.xuanzx.com/163cbsegoyq.html

[R10] 正则匹配
来源：http://www.sxryk.cn/163yturaxxv.html

if [[ "$s" =~ ^[0-9]+$ ]]; then echo "纯数字"; fi
来源：http://www.xuanzx.com/163dndvdfdx.html

[R11] case 多分支
来源：http://www.aibaodan.cn/163rnysptio.html

case "$1" in
来源：http://www.xuanzx.com/163nuctbzoc.html

start) echo "启动" ;;
来源：http://www.xuanzx.com/163btqvjvwo.html

stop)  echo "停止" ;;
来源：http://www.xuanzx.com/163mhzxewpc.html

*)     echo "未知命令" ;;
来源：http://www.aibaodan.cn/163giwrbevi.html

esac
来源：http://www.xuanzx.com/163otwvxkyl.html

[R12] for 遍历文件
来源：http://www.aibaodan.cn/163fiovlhhv.html

for f in *.txt; do echo "$f"; done
来源：http://www.xuanzx.com/163pieezmcl.html

[R13] for 计数循环
来源：http://www.aibaodan.cn/163ijmnuxlg.html

for i in {1..10}; do echo "$i"; done
来源：http://www.aibaodan.cn/163jpfwmdww.html

[R14] C 风格 for
来源：http://www.xuanzx.com/163cnxoeuaf.html

for ((i = 0; i < 10; i++)); do echo "$i"; done
来源：http://www.aibaodan.cn/163kclpgsjo.html

[R15] while 逐行读文件
来源：http://www.xuanzx.com/163qjuzvapv.html

while IFS= read -r line; do echo "$line"; done < file.txt
来源：http://www.aibaodan.cn/163uewnbjqd.html

[R16] until 等待条件
来源：http://www.sxryk.cn/163dwediubx.html

until [[ -f done.flag ]]; do sleep 1; done
来源：http://www.aibaodan.cn/163aumeocgw.html

[R17] 数组定义与取值
来源：http://www.aibaodan.cn/163gvplksjp.html

arr=(a b c); echo "${arr[0]}"
来源：http://www.sxryk.cn/163brhitfcp.html

[R18] 遍历数组
来源：http://www.aibaodan.cn/163ayezwzus.html

for x in "${arr[@]}"; do echo "$x"; done
来源：http://www.sxryk.cn/163khviujzh.html

[R19] 数组长度
来源：http://www.sxryk.cn/163hhdwbwom.html

echo "${#arr[@]}"
来源：http://www.aibaodan.cn/163zkmpsxsj.html

[R20] 关联数组（字典）
来源：http://www.aibaodan.cn/163njbhkkcq.html

declare -A m; m[k]=v; echo "${m[k]}"
来源：http://www.aibaodan.cn/163khyjgdrn.html

[R21] 字符串长度
来源：http://www.aibaodan.cn/163cahwubmm.html

echo "${#s}"
来源：http://www.aibaodan.cn/163fdxqtqlr.html

[R22] 截取子串
来源：http://www.aibaodan.cn/163xuhwsfnw.html

echo "${s:0:5}"
来源：http://www.sxryk.cn/163xwvorzmg.html

[R23] 字符串替换
来源：http://www.sxryk.cn/163ymhqvyxk.html

echo "${s/old/new}"; echo "${s//old/new}"    # 后者全部替换
来源：http://www.xuanzx.com/163iduvqitl.html

[R24] 大小写转换
来源：http://www.sxryk.cn/163kwzmyoig.html

echo "${s^^}"; echo "${s,,}"
来源：http://www.aibaodan.cn/163qtcqqbof.html

[R25] 去后缀 / 去前缀
来源：http://www.sxryk.cn/163vqotrpop.html

echo "${f%.txt}"; echo "${f#./}"
来源：http://www.sxryk.cn/163ldqhzsdj.html

[R26] 命令替换
来源：http://www.aibaodan.cn/163jragluew.html

now=$(date +%F); echo "$now"
来源：http://www.xuanzx.com/163tclcdshw.html

[R27] 算术展开
来源：http://www.xuanzx.com/163icayrhbn.html

echo $((1 + 2 * 3))
来源：http://www.sxryk.cn/163apmaubfi.html

[R28] 浮点运算
来源：http://www.sxryk.cn/163zgmlrmic.html

echo "scale=2; 10/3" | bc
来源：http://www.xuanzx.com/163wofdhxcg.html

[R29] 定义函数
来源：http://www.aibaodan.cn/163xgdruedt.html

add() { echo $(($1 + $2)); }; add 1 2
来源：http://www.aibaodan.cn/163zefvfcny.html

[R30] 函数返回状态码
来源：http://www.sxryk.cn/163ikaiairr.html

f() { return 0; }; f || echo "失败了"
来源：http://www.xuanzx.com/163hkozpgmr.html

[R31] 局部变量
来源：http://www.sxryk.cn/163ulhfzuxg.html

f() { local x=1; echo "$x"; }
来源：http://www.xuanzx.com/163akdlozcn.html

[R32] 参数个数校验
来源：http://www.xuanzx.com/163ewobsten.html

[[ $# -lt 2 ]] && { echo "用法: $0 a b"; exit 1; }
来源：http://www.sxryk.cn/163igddwtxk.html

[R33] 捕获错误并提示行号
来源：http://www.sxryk.cn/163qjooqhjy.html

trap 'echo "出错于第 $LINENO 行"' ERR
来源：http://www.sxryk.cn/163stmxsokg.html

[R34] 退出时清理
来源：http://www.sxryk.cn/163cmzyggmq.html

trap 'rm -f "$tmp"' EXIT
来源：http://www.aibaodan.cn/163qaxzkmoz.html

[R35] 后台执行并等待
来源：http://www.xuanzx.com/163zuozvzfx.html

sleep 5 & pid=$!; wait "$pid"
来源：http://www.sxryk.cn/163hgruefrb.html

[R36] 并发执行多个任务
来源：http://www.sxryk.cn/163dieydvfh.html

for i in 1 2 3; do (sleep 1; echo "$i") & done; wait
来源：http://www.xuanzx.com/163mbifcdwy.html

[R37] 把输出赋给变量
来源：http://www.sxryk.cn/163aeagayzd.html

files=$(ls -1)
来源：http://www.aibaodan.cn/163lzhfrilm.html

[R38] 管道串联
来源：http://www.aibaodan.cn/163hrwijrqz.html

cat a.txt | grep -i error | wc -l
来源：http://www.aibaodan.cn/163fobzcdef.html

[R39] 重定向标准输出与错误
来源：http://www.aibaodan.cn/163wdqjicgw.html

cmd > out.log 2>&1
来源：http://www.aibaodan.cn/163stwznfwk.html

[R40] 追加写日志
来源：http://www.aibaodan.cn/163sifbdtnm.html

echo "log" >> out.log
来源：http://www.aibaodan.cn/163jjnlfmyk.html

[R41] 丢弃输出
来源：http://www.aibaodan.cn/163yghnroqi.html

cmd >/dev/null 2>&1
来源：http://www.sxryk.cn/163eemnmfbi.html

[R42] 输入重定向
来源：http://www.xuanzx.com/163ywleptcn.html

wc -l < a.txt
来源：http://www.xuanzx.com/163iuztbnrp.html

[R43] 按名字查找文件
来源：http://www.xuanzx.com/163maclxles.html

find . -name "*.log" -type f
来源：http://www.xuanzx.com/163xtgsynhg.html

[R44] 按修改时间查找
来源：http://www.xuanzx.com/163moenmqlf.html

find . -mtime -7 -type f
来源：http://www.sxryk.cn/163ywgbgevs.html

[R45] 批量删除
来源：http://www.xuanzx.com/163guayhayd.html

find . -name "*.tmp" -delete
来源：http://www.aibaodan.cn/163mgrblffx.html

[R46] 递归替换文件内容
来源：http://www.xuanzx.com/163zbrrbhdg.html

grep -rl 'old' . | xargs sed -i 's/old/new/g'
来源：http://www.sxryk.cn/163qrglalur.html

[R47] sed 单行替换
来源：http://www.sxryk.cn/163tvfgimty.html

sed -i 's/foo/bar/g' a.txt
来源：http://www.xuanzx.com/163mgbhmhcd.html

[R48] awk 取指定列
来源：http://www.aibaodan.cn/163vnhhoimv.html

awk '{print $1, $3}' a.txt
来源：http://www.sxryk.cn/163rdcncqxw.html

[R49] awk 带条件
来源：http://www.sxryk.cn/163lnquujvd.html

awk -F, '$3 > 100 {print $1}' a.csv
来源：http://www.xuanzx.com/163kqlmdadk.html

[R50] awk 求和
来源：http://www.xuanzx.com/163rbvnowqk.html

awk '{s += $2} END {print s}' a.txt
来源：http://www.sxryk.cn/163ivxehdsa.html

[R51] 排序去重取前几
来源：http://www.sxryk.cn/163ppcayetd.html

sort a.txt | uniq -c | sort -rn | head
来源：http://www.sxryk.cn/163myyejhzj.html

[R52] 统计行数
来源：http://www.aibaodan.cn/163adjdikhn.html

wc -l a.txt
来源：http://www.aibaodan.cn/163jaruthit.html

[R53] 查看文件头与实时尾
来源：http://www.aibaodan.cn/163kyodnnbg.html

head -n 20 a.txt;  tail -f -n 100 app.log
来源：http://www.aibaodan.cn/163tnohnbpv.html

[R54] 比较两个文件
来源：http://www.aibaodan.cn/163yjeshdfj.html

diff a.txt b.txt
来源：http://www.aibaodan.cn/163sjobokjs.html

[R55] 压缩与解压
来源：http://www.aibaodan.cn/163oujaabne.html

tar -czf x.tar.gz dir/;  tar -xzf x.tar.gz
来源：http://www.aibaodan.cn/163syxrtjpr.html

[R56] 远程拷贝
来源：http://www.sxryk.cn/163fptlgftv.html

scp file user@host:/path/
来源：http://www.aibaodan.cn/163omgpwsuo.html

[R57] 远程执行命令
来源：http://www.aibaodan.cn/163ufogbloo.html

ssh user@host 'uptime'
来源：http://www.sxryk.cn/163ekbvjmvq.html

[R58] 下载文件
来源：http://www.xuanzx.com/163lyobjnlg.html

curl -LO https://a.com/file.zip;  wget https://a.com/file.zip
来源：http://www.sxryk.cn/163soyozbjv.html

[R59] 发 POST JSON
来源：http://www.xuanzx.com/163evjqtxqo.html

curl -X POST -H 'Content-Type: application/json' -d '{"a":1}' https://api.example.com
来源：http://www.sxryk.cn/163pdrorrsu.html

[R60] 只看 HTTP 状态码
来源：http://www.xuanzx.com/163cvyoloki.html

curl -s -o /dev/null -w "%{http_code}\n" https://a.com
来源：http://www.sxryk.cn/163jtzktaga.html

[R61] 磁盘占用
来源：http://www.aibaodan.cn/163nsihkppb.html

df -h;  du -sh *
来源：http://www.xuanzx.com/163kdhbyudj.html

[R62] 找最占空间的文件
来源：http://www.sxryk.cn/163sqqqlygc.html

du -ah . | sort -rh | head -10
来源：http://www.aibaodan.cn/163salblotv.html

[R63] 内存与进程
来源：http://www.xuanzx.com/163umgwouun.html

free -h;  ps aux | grep nginx
来源：http://www.xuanzx.com/163tmshflju.html

[R64] 结束进程
来源：http://www.xuanzx.com/163qcecpbfp.html

kill -9 $(pgrep -f app.py)
来源：http://www.xuanzx.com/163kdfnpwnm.html

[R65] 查看端口占用
来源：http://www.sxryk.cn/163mwzztfqo.html

ss -tlnp | grep 8080;  lsof -i:8080
来源：http://www.sxryk.cn/163bvsjtijk.html

[R66] 定时任务
来源：http://www.sxryk.cn/163aqfqssma.html

crontab -e;  crontab -l
来源：http://www.sxryk.cn/163gueqvnqf.html

[R67] 生成随机十六进制串
来源：http://www.aibaodan.cn/163lhjpllbx.html

openssl rand -hex 16
来源：http://www.aibaodan.cn/163gbvzvolg.html

[R68] 计算文件校验值
来源：http://www.aibaodan.cn/163fabwtsva.html

sha256sum a.txt;  md5sum a.txt
来源：http://www.sxryk.cn/163jetqmvhd.html

[R69] 生成随机密码
来源：http://www.xuanzx.com/163hydigbdv.html

head -c 16 /dev/urandom | base64
来源：http://www.xuanzx.com/163wxoxyxxx.html

[R70] 时间戳与互转
来源：http://www.sxryk.cn/163hexdstyb.html

date +%s;  date -d @1700000000
来源：http://www.xuanzx.com/163osrcbhzx.html

[R71] 日期格式化
来源：http://www.aibaodan.cn/163tinngrtd.html

date +"%Y-%m-%d %H:%M:%S"
来源：http://www.sxryk.cn/163aqsarrdu.html

[R72] 等待端口就绪
来源：http://www.sxryk.cn/163mthrbtum.html

until nc -z localhost 3306; do sleep 1; done
来源：http://www.xuanzx.com/163gkcjjcyk.html

[R73] 分割大日志
来源：http://www.aibaodan.cn/163yazjrvcm.html

split -l 1000 big.log part_
来源：http://www.xuanzx.com/163dpvjtkfg.html

[R74] 批量重命名
来源：http://www.sxryk.cn/163rjfpqmgb.html

for f in *.jpeg; do mv "$f" "${f%.jpeg}.jpg"; done
来源：http://www.aibaodan.cn/163jaiutxtm.html

[R75] 导出环境变量
来源：http://www.sxryk.cn/163uislcaho.html

export PATH="$HOME/bin:$PATH"
来源：http://www.aibaodan.cn/163ideiwkbd.html

[R76] 使用临时文件
来源：http://www.sxryk.cn/163wwkmregz.html

tmp=$(mktemp); trap 'rm -f "$tmp"' EXIT
来源：http://www.xuanzx.com/163dxyujjbx.html

[R77] 读取用户输入
来源：http://www.sxryk.cn/163nfsqeuwd.html

read -rp "请输入: " ans
来源：http://www.xuanzx.com/163uaiqskjl.html

[R78] 交互式菜单
来源：http://www.xuanzx.com/163zwaiygah.html

select opt in a b c; do echo "$opt"; break; done
来源：http://www.aibaodan.cn/163jifisxyk.html

[R79] 解析命令行选项
来源：http://www.aibaodan.cn/163fxcdicpp.html

while getopts "v:f:" o; do case $o in v) V=$OPTARG ;; f) F=$OPTARG ;; esac; done
来源：http://www.sxryk.cn/163xoqgaltm.html

[R80] 查看脚本执行耗时
来源：http://www.aibaodan.cn/163xrhvnadq.html

time ./run.sh
来源：http://www.sxryk.cn/163yccbbosq.html

================================================================================
来源：http://www.xuanzx.com/163tvlaaras.html

S. C / C++ 专题
来源：http://www.xuanzx.com/163omfgdmiy.html

================================================================================
来源：http://www.sxryk.cn/163lpubgupn.html

[S01] C：Hello World
来源：http://www.xuanzx.com/163xglaubwq.html

#include <stdio.h>
来源：http://www.xuanzx.com/163sploqfqo.html

int main(void) { printf("Hello\n"); return 0; }
来源：http://www.aibaodan.cn/163ssbfztur.html

[S02] C：变量与格式化输出
来源：http://www.xuanzx.com/163arbhuzay.html

int a = 10; printf("%d\n", a);
来源：http://www.xuanzx.com/163ahaitgib.html

[S03] C：读入整数
来源：http://www.sxryk.cn/163bekolkll.html

int x; scanf("%d", &x);
来源：http://www.aibaodan.cn/163kfuhwisw.html

[S04] C：字符串复制
来源：http://www.sxryk.cn/163ggfseqct.html

char dst[32]; strcpy(dst, "hi");
来源：http://www.aibaodan.cn/163kqdnnelj.html

[S05] C：字符串长度
来源：http://www.xuanzx.com/163wttourph.html

strlen(s)
来源：http://www.xuanzx.com/163lpejwjck.html

[S06] C：字符串比较
来源：http://www.aibaodan.cn/163iujbjnnv.html

strcmp(a, b) == 0
来源：http://www.xuanzx.com/163nehjydxu.html

[S07] C：数组遍历求和
来源：http://www.aibaodan.cn/163agnuhrvi.html

for (int i = 0; i < n; i++) sum += a[i];
来源：http://www.aibaodan.cn/163hxfhhiup.html

[S08] C：动态内存分配与释放
来源：http://www.xuanzx.com/163tcfqawwj.html

int *p = malloc(sizeof(int) * n); ... free(p);
来源：http://www.sxryk.cn/163enlovtwi.html

[S09] C：结构体定义与初始化
来源：http://www.xuanzx.com/163qnfpjtal.html

struct Point { int x, y; };  struct Point p = {1, 2};
来源：http://www.xuanzx.com/163bowwhwzx.html

[S10] C：指针与解引用
来源：http://www.xuanzx.com/163mrsbjgwe.html

int *p = &a;  *p = 5;
来源：http://www.xuanzx.com/163etjtcxfv.html

[S11] C：逐行读文件
来源：http://www.sxryk.cn/163nowywbci.html

FILE *f = fopen("a.txt", "r");
来源：http://www.sxryk.cn/163siahqtte.html

while (fgets(buf, sizeof buf, f)) { }
来源：http://www.sxryk.cn/163fbausldn.html

fclose(f);
来源：http://www.sxryk.cn/163iksrmbwe.html

[S12] C：写文件
来源：http://www.xuanzx.com/163xbdpjcyh.html

FILE *f = fopen("a.txt", "w");  fprintf(f, "hi\n");  fclose(f);
来源：http://www.xuanzx.com/163tqcadttc.html

[S13] C：宏定义
来源：http://www.sxryk.cn/163kmvwdtwe.html

#define MAX(a, b) ((a) > (b) ? (a) : (b))
来源：http://www.xuanzx.com/163bgaxlgry.html

[S14] C：枚举
来源：http://www.xuanzx.com/163rtaaeyyi.html

enum Color { RED, GREEN, BLUE };
来源：http://www.aibaodan.cn/163gixwbqez.html

[S15] C：类型转换
来源：http://www.xuanzx.com/163tfxwwjnv.html

(double) a / b
来源：http://www.xuanzx.com/163gfubgqck.html

[S16] C：位操作置位
来源：http://www.sxryk.cn/163rqmidraj.html

x |= (1 << 3);
来源：http://www.sxryk.cn/163mkprysxg.html

[S17] C：安全拼接字符串
来源：http://www.sxryk.cn/163yewndeks.html

snprintf(buf, sizeof buf, "%s%s", a, b);
来源：http://www.xuanzx.com/163giabchsv.html

[S18] C：命令行参数
来源：http://www.xuanzx.com/163hblnizvo.html

int main(int argc, char **argv)
来源：http://www.sxryk.cn/163klhmryty.html

[S19] C：快速排序
来源：http://www.sxryk.cn/163nerlzlsi.html

qsort(a, n, sizeof(int), cmp);
来源：http://www.sxryk.cn/163wldokyyt.html

[S20] C：二分查找
来源：http://www.xuanzx.com/163eloulkaq.html

bsearch(&key, a, n, sizeof(int), cmp);
来源：http://www.xuanzx.com/163zewpylwh.html

[S21] C：字符类别判断
来源：http://www.xuanzx.com/163xmcrbpdn.html

isdigit(c);  isalpha(c);  isspace(c);
来源：http://www.aibaodan.cn/163luxuqmuc.html

[S22] C：字符串转数字
来源：http://www.sxryk.cn/163rzekglpi.html

atoi("42");  strtod("3.14", NULL);
来源：http://www.aibaodan.cn/163cmfrrmts.html

[S23] C：随机数
来源：http://www.aibaodan.cn/163npjydllz.html

srand(time(NULL));  int r = rand() % 100;
来源：http://www.sxryk.cn/163szsdkohv.html

[S24] C：获取本地时间
来源：http://www.aibaodan.cn/163eivqbpuh.html

time_t t = time(NULL);  struct tm *tm = localtime(&t);
来源：http://www.sxryk.cn/163fbalzdpw.html

[S25] C：内存拷贝
来源：http://www.aibaodan.cn/163gtkkoidn.html

memcpy(dst, src, n);
来源：http://www.aibaodan.cn/163afukauem.html

[S26] C：内存清零
来源：http://www.sxryk.cn/163bbbkpmvm.html

memset(a, 0, sizeof a);
来源：http://www.xuanzx.com/163rpydaiur.html

[S27] C：定义常量
来源：http://www.xuanzx.com/163leroaado.html

const double PI = 3.14159;
来源：http://www.aibaodan.cn/163ksleepny.html

[S28] C：静态变量
来源：http://www.sxryk.cn/163fejgjdmv.html

static int counter = 0;
来源：http://www.sxryk.cn/163gpotlych.html

[S29] C：变参函数
来源：http://www.sxryk.cn/163cczrktpx.html

va_list ap; va_start(ap, fmt); vprintf(fmt, ap); va_end(ap);
来源：http://www.sxryk.cn/163moyckzoe.html

[S30] C：头文件保护
来源：http://www.xuanzx.com/163sgtwjkfj.html

#ifndef X_H
来源：http://www.sxryk.cn/163tvmhuwbx.html

#define X_H
来源：http://www.sxryk.cn/163oinyfgjx.html

#endif
来源：http://www.sxryk.cn/163bqdlrclc.html

[S31] C++：Hello World
来源：http://www.aibaodan.cn/163rvjvdaay.html

#include <iostream>
来源：http://www.xuanzx.com/163mmkmvwih.html

int main() { std::cout << "Hello\n"; }
来源：http://www.aibaodan.cn/163wgksmeaq.html

[S32] C++：字符串
来源：http://www.aibaodan.cn/163iskyvuik.html

std::string s = "hi";  s += "!";
来源：http://www.xuanzx.com/163ylondarh.html


<!-- 参考信息 -->
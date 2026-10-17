外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163jpditktk.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163ldvktijs.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163xilajaml.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163jatumugj.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163bvoxgbwl.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.aibaodan.cn/163jwooheue.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163aoubkcvz.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163rwfbqaes.html

[H07] 断言
来源：http://www.xuanzx.com/163cdxjozsy.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163hyinwjlw.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163nsjddqtt.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163dmmrdbjy.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163boenvswj.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mymrrxvj.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.sxryk.cn/163cslyqpyn.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163rexmwlgc.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163xslynfii.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163eyhkdpif.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163iabfpnuh.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.xuanzx.com/163ddiuokkh.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163nhrtliuh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163vuqkaeaf.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163ojxgytpf.html

Go:   err.Error()
来源：http://www.xuanzx.com/163mlafmdpf.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163bmavsifb.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163xebywrtz.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163cknpkzks.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163cugnwndq.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163uagfdgia.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.aibaodan.cn/163xptrousu.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.aibaodan.cn/163ifojjaeu.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163jbnyrokr.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163lgzsqflu.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163mdkfmvez.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163eyyxteuh.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163mezdqxlk.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163qylsudgr.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163ohlpnqpj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163tdfifjyh.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163fucmnmwa.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163steatedi.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163wuqvuvwo.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163kmaerkvi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163heodkmsf.html

================================================================================
来源：http://www.aibaodan.cn/163ylybuasm.html

I. 正则表达式
来源：http://www.aibaodan.cn/163pwrcmxna.html

================================================================================
来源：http://www.xuanzx.com/163vvqdupzd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163udbiknfa.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ctbbybwv.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163owupntdn.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163mppvwcnt.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163aahgyfoi.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163rlonfgcy.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163jmewqvmw.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163evfonpep.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163czypgyag.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ezxbawzt.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163rxpuovrb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163iwnfohpz.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163ibyeknzr.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163kznlfmyc.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163likubatt.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163cdozxxes.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wdgatqgn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163ylqccqys.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ivyeqyya.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163xeldodry.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.aibaodan.cn/163vzklnxhz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163jtseifqd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vlxsxnex.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163cbpzkwxl.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.xuanzx.com/163xqhmljpk.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163dlmtugmt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163wsxmntpy.html

[I04] 正则替换
来源：http://www.xuanzx.com/163paykiodl.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163cebfcjym.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eauztjru.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ckgfrquo.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163dfnafsck.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163rriqegfg.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163yibesumq.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163cnzylbqb.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163yuyqxtuz.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163kxudssbx.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163gochavte.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163hxuhwfdo.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163cylyzsqz.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163fudtjpbh.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163awpkutvc.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163adzwdtzq.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163wmbqqwbz.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163xlykugmo.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163rrthxcqc.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163lmwdehum.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163xvthpkmh.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tcdtiwcz.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163rvmfkxmu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.sxryk.cn/163ivggvyln.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.xuanzx.com/163szsukvll.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163caujaohd.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163qmbnejtd.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163cnyfgbah.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163nfquufxr.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163yeqivvqv.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163ruylzcda.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163narocobz.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163wqgymppw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163qxjiicuw.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163fedkwpzm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163fvlncwsg.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163hetmyjgk.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163iugrcuqf.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163ypcnvrfm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163dgkidpuk.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tzowgwlm.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163ndnlvxrj.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.xuanzx.com/163hugvwsby.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163xbdshfhy.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163ejgmkhhf.html

================================================================================
来源：http://www.aibaodan.cn/163tftdlngd.html

J. 日期与时间
来源：http://www.aibaodan.cn/163beztzvfk.html

================================================================================
来源：http://www.aibaodan.cn/163bupvzkok.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163dgqmjdyq.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163amildigg.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163cppxnzrg.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163ekqfpeog.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163kwzpyydh.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163mrieqzun.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163tiyahdmq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163esbiaosh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163vsunygiv.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163spxljjur.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163udkinmxw.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163bjzuxijf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163yiuhywsr.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163txouygmn.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163kakmkxby.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163ipfczdwb.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ejddizjd.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163pedjxqom.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163tqlfbspq.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163mqbcvwdw.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163srxjudxb.html

JS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163llhorwoe.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163ordqvaok.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.aibaodan.cn/163nfobpoxf.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163oqpfajtb.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163ruhcanqn.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163pszzgbko.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163rfbqgtjk.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163qltjjxmy.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163bnuaetpf.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163ljugxgvn.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163iuumfwap.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163fndgrqoq.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163ejzngoay.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bsdqkkzt.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163rrplrxli.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163oyyzueet.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163ubznpjdm.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163nvssamwk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163iglodlbd.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163tlhjcdbq.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163zypihtsw.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163gqwykcwb.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163eczoohun.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163xevqcgqn.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163mwjwkrbn.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163denbxplo.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163iajyphvy.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163drfhnlbm.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163zeztemnc.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163eqtzixod.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163skcdkesu.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163fenoiens.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163zgvrrkkc.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163mbxbykqh.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ckalkesf.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163samluoqe.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ypbnfvsm.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lynosmfq.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163younjlhm.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.sxryk.cn/163ugxhgnuv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163isdbymgr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163oubboupo.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163heciwwqr.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163pyikoauz.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163pmsnnnsh.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163fvwprnfm.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163gxqkrdet.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163flagicpv.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163rhcqprez.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163qntzrmsy.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163qokamexn.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ialnsjsl.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ffhfhytp.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163lnbubjyo.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163pbhwsdtt.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163ioshdhrs.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163vggejnlv.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.xuanzx.com/163inkmcpmh.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163dvmgrnnf.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163skdohfnk.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163wyznfcwh.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.sxryk.cn/163tntfvnjx.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163xmbjlcej.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.aibaodan.cn/163fxlkepnc.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163dazhgike.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163onciqckt.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uvaujadw.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163pjteeilp.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163byhkhswy.html

================================================================================
来源：http://www.xuanzx.com/163flcmyosi.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163dugmrsch.html

================================================================================
来源：http://www.sxryk.cn/163pvvijxmb.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163dxqjgcbb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163itecgvyp.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163yzwdlrie.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163okkuxadz.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163klumvjme.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163wfbwgpfz.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163mnhwglia.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163hqzyexzg.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163pkzmnjsi.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ttvnlhdv.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163jldgfgrk.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163dmftfcgg.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163zkcmodcw.html

TS:   JSON.parse(s)
来源：http://www.sxryk.cn/163hnxrijyr.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163vdfkficb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163qzhmvcry.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163bkbgcsun.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163iwvzweue.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163mrjeyfdz.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163cdmkwdph.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163jxmtuzpn.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163fqnpeakr.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163yhhqklfw.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163edzvfeky.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163uvdgcmls.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163fjjqpyze.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163dpuqteeb.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163teenuwcb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163dtnfpkcd.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163rzivowct.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xrctbcks.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163gqidkdvq.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163xpnkfmnu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163cekhlnme.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gnoxoovp.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.xuanzx.com/163lkgogacf.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163etevruam.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163klhevuyz.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xcnsomhc.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163yfarylid.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163rxhidbsf.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163bvzlmujy.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163fougpcgl.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.aibaodan.cn/163yxdiqgiu.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163jzsxrroa.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163axppilxu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163qwsvwrnf.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163bmgapgrf.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163midaqlys.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163toixbkfd.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163gwvqujzc.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163ucmbnusy.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163asgkqram.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163meiqudsl.html

[K07] 进制转换
来源：http://www.sxryk.cn/163vglksmzu.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163ytrtizze.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163dozgcdgq.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163wjaeuvvs.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163nqquuazf.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dixpcrka.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163ndfftzxw.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.xuanzx.com/163edrgdbbc.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163qupmmqim.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163egdntllc.html

Py:   pickle.dumps(obj)
来源：http://www.xuanzx.com/163nhinooke.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163omwnpcod.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163wapmfxwy.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163loxiyzia.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163rbimcmtd.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jfugnkdd.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163mkpgxbhz.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163ntqyfudu.html

================================================================================
来源：http://www.xuanzx.com/163fgsugwlj.html

L. 网络请求
来源：http://www.xuanzx.com/163dvkexaho.html

================================================================================
来源：http://www.aibaodan.cn/163htyxgpuy.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qvgpstjb.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yopaauff.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.aibaodan.cn/163mflmykaa.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163rgwqmfur.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163kfejqzup.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163qprigwxq.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163ycfzhwcx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163pcvkfqrt.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163dlxfgukd.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163lubfctjh.html


<!-- 参考信息 -->
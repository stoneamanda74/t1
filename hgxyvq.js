外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163ccyznyns.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163atiyajpd.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163qjkpxbmh.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163semzozvw.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163fcicxysa.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163vurycujg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163dyipqlqc.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163wuvovths.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163akhcapmn.html

Go:   defer f.Close()
来源：http://www.xuanzx.com/163tlwdnams.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163exkrpfsm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163rpiitacv.html

================================================================================
来源：http://www.sxryk.cn/163dduodrrc.html

I. 正则表达式
来源：http://www.aibaodan.cn/163qzjpfpfx.html

================================================================================
来源：http://www.sxryk.cn/163tojxaupf.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163qcuhrklw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163xzyqoghj.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.xuanzx.com/163velqkcjg.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163kyaahomu.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163juzondja.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163fuaxuhsh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163ibhafmvg.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163jhivmzhb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163ievzscvb.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163ataqvtty.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163scerngyh.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163ffzneusj.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.xuanzx.com/163nllnjnnr.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163myaswdfw.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163kutpsevq.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.sxryk.cn/163tbuqfotz.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163mrbvknxf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163trtxekys.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163cpcotkwm.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.sxryk.cn/163vgtoaisu.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163ilerxije.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163qgzxspan.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.sxryk.cn/163mvwtuyhb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.aibaodan.cn/163vnrkhzww.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163jbfbkzua.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163zxqgttwa.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163fgrhdgil.html

[I04] 正则替换
来源：http://www.xuanzx.com/163rezeelzj.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163ewmwbvxn.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163spsyerjx.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163hndqegdq.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163oxoviwsy.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163wkhfhtka.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163laokfxsa.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163osfgthka.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163hhkwxjgx.html

[I05] 按正则拆分
来源：http://www.aibaodan.cn/163rbwrcogd.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163vqvansqe.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163dfpevovs.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163mqrchngg.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163nznnkbmd.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163ppgjdhhd.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163azdohmnx.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163wjhszvgs.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.aibaodan.cn/163ndpjukpu.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163dnfgmqjw.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163ujdwensi.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163caeshawy.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163tpzzmffx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163ubgehbhu.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163gedofbqo.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163hedbxsoi.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.sxryk.cn/163qvikiqch.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jdshpvgl.html

[I07] 忽略大小写与多行模式
来源：http://www.aibaodan.cn/163hpgpsyns.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163vmjgqzub.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163lfqfvdrx.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.sxryk.cn/163aopahzyl.html

TS:   /error/gim
来源：http://www.xuanzx.com/163tpcjovhk.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.xuanzx.com/163nqygsqey.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.xuanzx.com/163yncjcyhe.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163ltuvbbvl.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163iegrddeb.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163nujvyosd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163lhxnjwrv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163sienpvrm.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163tqcxrkcl.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163iovaqjdl.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163coqxdpvg.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163wdnzjbid.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mtmqvfho.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163zuhulwdq.html

================================================================================
来源：http://www.sxryk.cn/163syoblghi.html

J. 日期与时间
来源：http://www.aibaodan.cn/163sugmpgau.html

================================================================================
来源：http://www.sxryk.cn/163njxrurzd.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163oktwxmtu.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163eddgukmd.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163sxwlhkur.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163sjobjuej.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163yjtxyfsk.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163ndtcysoh.html

Go:   time.Now()
来源：http://www.sxryk.cn/163cagsgest.html

Ruby: Time.now
来源：http://www.xuanzx.com/163glwlsike.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163spqiafuu.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163zrmvppix.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163bypwgcjr.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163wdpfdovr.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163qwjnuepq.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163vitesvbc.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163xfbikswb.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163nozxcyzm.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163oxviulbt.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163fgzgyvnl.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163vcazpnyz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.xuanzx.com/163fysufaro.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163znebbwbg.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163thuycziv.html

TS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163iqybhmiu.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.sxryk.cn/163poeekyao.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163wmngvrlt.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163bwobovbd.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163gorsqrvv.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163qxxptijx.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163nfmarfls.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163obwmklbm.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163cjwujjqv.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163wauncvbo.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163wfrsdnpz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163qpezkavp.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163uxdjtsdo.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163bainytqk.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163lopdiesu.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163vbsiasbs.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163ovuqmjor.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163edpleshr.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163kprvpxux.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163pcustgyr.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163bvgiijxk.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163whhwfiob.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163gxuvcwzt.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163krfwfeqo.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163zdlpcdvi.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163ykcyywkg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163gyejtmmp.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163ikljeeok.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163tjoaojsr.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163kenozkfg.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163ejvgyaai.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163gtuhtjlk.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163hzvlvaig.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163rakeurvx.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163fmkchulg.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163hbecmecn.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163xlofxxwo.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.sxryk.cn/163wffztqnr.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xznejaew.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163cfoonwsq.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163iyasanyj.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163qzmzihsb.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163ykcdkhkh.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163nuhugxei.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163jclfehva.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163mdjuqjco.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163raljvvyw.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.xuanzx.com/163gjdgysxk.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163ezxreabw.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163ulkjyiex.html

[J09] 时区处理
来源：http://www.xuanzx.com/163jefcpelu.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163gxcifhqo.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tywdrxzg.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163phshtjxp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163pgkpfwsp.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163keeuoggf.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163txdixtmy.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163kfnmmnhr.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163ehfbnemu.html

[J10] 取今天 / 本月第一天
来源：http://www.aibaodan.cn/163avngrjjd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xdywpebc.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163pigzuwix.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163wczbygae.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163drdsfsrb.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163jptlxptb.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163vqsszled.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.xuanzx.com/163sgejsvca.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163zfogdsdr.html

================================================================================
来源：http://www.aibaodan.cn/163sjsnupdf.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163xmzbkloz.html

================================================================================
来源：http://www.xuanzx.com/163tqrkahun.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163eyqcrgig.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163kwrcvmda.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163ydyrgezo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163rybolmhi.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163xyotumjl.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163qeeravqm.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163xutgjuqn.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163bywkppsw.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163gyhzhsjj.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163bccftfpz.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163yjuawxog.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163twtrdlpw.html

JS:   JSON.parse(s)
来源：http://www.sxryk.cn/163bdnkxpmi.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163incyeedl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.xuanzx.com/163wstlmuws.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163wbonpcli.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163xshlevpn.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163fwbubjqw.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163atzyqciw.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163avidsvus.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163rpkcgdxe.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163wmgjeaib.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pagjtnns.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163wtiwywru.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163lfoapuma.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163tehsysmq.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163zmwiopca.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163zfkecfyy.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163jwtqmtqu.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163jgbyujru.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163rcesyvob.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163xrwhmkef.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ngbfapwc.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163ehepmzdv.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.xuanzx.com/163xipbbojb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163qvscjfbw.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163inzcsoqo.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163cvvomvwk.html

PHP:  unserialize(serialize($obj));
来源：http://www.aibaodan.cn/163xosghlfo.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163gnyxwvck.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163vltkpnbr.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.aibaodan.cn/163vllkfven.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163eooornst.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163mhrohwjg.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.sxryk.cn/163zalzzfxe.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163zkginvci.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163klvavqli.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163aamaacqx.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163sljtpmuf.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163jshpdruh.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163jyepkgkl.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163mmhudmok.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163vbqzbuvn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163zunbjtjx.html

[K07] 进制转换
来源：http://www.sxryk.cn/163kngqsykf.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163sckyzmhc.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.sxryk.cn/163ayovolko.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qqfjnyxj.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163dgirmotn.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163cgpbnbqd.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163qodbcfbk.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163vhxnpsdj.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163agurofld.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163hpbgilhj.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163ddgyhgmn.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163nylsqjsr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163rioftzxl.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163ausbidwb.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163lqijwfcc.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163jngwsjhz.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163chdttypq.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163adzlltcr.html

================================================================================
来源：http://www.sxryk.cn/163ghmrsahn.html

L. 网络请求
来源：http://www.aibaodan.cn/163lhltdbwj.html

================================================================================
来源：http://www.xuanzx.com/163jclydngx.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163qlzygqqa.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163poiihycu.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163wrrcrsub.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163ybcugbzo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163wdbcslkg.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163sivlojun.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163ljulcmwx.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163mxwqzgeq.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163jztxjtam.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163hbslhgnl.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.sxryk.cn/163juxqkdnl.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.aibaodan.cn/163pedavjcy.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163tkdrnyfm.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163ldlvltff.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163cxtjlopr.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163odzkrrwd.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ruyesvuc.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163huqpitsv.html

[L03] 设置自定义请求头
来源：http://www.xuanzx.com/163ombzwuhr.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163mpxxxobp.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.sxryk.cn/163ukpuawlq.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163lbvsntjm.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.xuanzx.com/163jinxdrwv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.sxryk.cn/163jjaojyvz.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163tzbeypgv.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163zogrpfir.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163rioyzuda.html

[L04] 设置超时
来源：http://www.aibaodan.cn/163xegtsbiy.html

Py:   requests.get(url, timeout=5)
来源：http://www.xuanzx.com/163cetdjmhn.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163wwjdnmlh.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.xuanzx.com/163gnzhmexc.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163yosfydmh.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.sxryk.cn/163apvqbnnx.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163trbvwwom.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163glehbdgm.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.sxryk.cn/163hotcdzdi.html

[L05] 上传文件（multipart）
来源：http://www.sxryk.cn/163bosujthu.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163bjgtxxlx.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.sxryk.cn/163nuoxmjql.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163wcvkeyhd.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.sxryk.cn/163kvkeljhy.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.sxryk.cn/163dskwylmp.html


<!-- 参考信息 -->
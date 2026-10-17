外链999!wailian999！

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163qtppuhdi.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163pkizasrq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163djzrczpu.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163gaqvnkde.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163ekaazcae.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163pdvbrpsf.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163tyfviqgx.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qczhzoow.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163kvxvbkxk.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163rqnyvslc.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163tbrmhsbi.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163zldhjntn.html

================================================================================
来源：http://www.sxryk.cn/163dvwcamqw.html

I. 正则表达式
来源：http://www.sxryk.cn/163gclgdgbj.html

================================================================================
来源：http://www.aibaodan.cn/163jclryeuu.html

[I01] 判断是否匹配
来源：http://www.aibaodan.cn/163ghulbpfi.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163dykhilhf.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163jdmtqckt.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163dcapltli.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163gxkdtriw.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.sxryk.cn/163panrxrrf.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.aibaodan.cn/163owkwbkzv.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163xmcmgywo.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163cglwochd.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rhxmhlva.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163tyqrgyca.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163nvpbzyba.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163cnzxltcl.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163gnwyrkbs.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163emtsjmqd.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163powlaaks.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163nzqpdmpf.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.xuanzx.com/163ycpjtwny.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163eqljijbx.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163cidajrym.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163atvnqrzz.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163uchqplwc.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163nsvmbkwj.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163govowqmj.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163eapkfheu.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163ncdyiunh.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163dyeqdqdd.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163mthrthqv.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163mhftwxnf.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163zhrhvkac.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163jahlonuc.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163ostlzzam.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.aibaodan.cn/163knkjugcx.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.xuanzx.com/163mgaihqjf.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163cvtxhpvn.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163napuktep.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163pskqqcel.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163leoawtyd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163wmxqcogr.html

JS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163obxurkvf.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163febyakhl.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163bvxeypmw.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163lolnzzhz.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163ackbbjvy.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163jrhmqgvx.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163phdsypuh.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163jxfoycve.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163cyazonoo.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.sxryk.cn/163yvyksqjx.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163ooqlpuqj.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163hzmlvauh.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163bdorciqa.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163svlfcypk.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163pcqffsxo.html

[I07] 忽略大小写与多行模式
来源：http://www.xuanzx.com/163lyvzxxjf.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163wytqxzyl.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.sxryk.cn/163rsemglzt.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163jgmyxfqq.html

TS:   /error/gim
来源：http://www.sxryk.cn/163lvdorrxr.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163rjgnykmw.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163vsiabfsx.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163yqjyzcfo.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163nvqafcqk.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163olkxygyy.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163xihwfxnp.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163ybeswdgg.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163guwnklzd.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163wiyiwubz.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163sbcoytgm.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163uzcqogkx.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163mzkjsvaj.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163gybyimoa.html

================================================================================
来源：http://www.aibaodan.cn/163ldsropcu.html

J. 日期与时间
来源：http://www.sxryk.cn/163cdiweuyf.html

================================================================================
来源：http://www.aibaodan.cn/163hajtbirj.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163wfvzgaqa.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ckthpcyr.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163ehomldpf.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163ihewjhlt.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163sczpbgvt.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163izhjluif.html

Go:   time.Now()
来源：http://www.xuanzx.com/163utqxrsgy.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163nxgpisrh.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.xuanzx.com/163qufrakpj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163iopexzfb.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163tcudbwmo.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163zjenmnqf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163umjjhjyc.html

TS:   d.toISOString()
来源：http://www.xuanzx.com/163wlqqpbhz.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163cwulirts.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163sqmtsxdt.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163yvgvflac.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163gcskrbaf.html

[J03] 字符串解析为日期
来源：http://www.sxryk.cn/163qmpnbwop.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163kvrqjffo.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163nzyqwrux.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163kcviewcj.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163icexxgnf.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163xdsweqtw.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163sgmcwgki.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163rlwzsqtv.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163qjdjgcad.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163lzteiqlq.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163yhlxjhvm.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163uztjcmip.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163idsycjqi.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163jnucnvpx.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163mqxkymtv.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163uinbansn.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163dzdfkmnk.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.sxryk.cn/163wlbfbvie.html

[J05] 时间加减（加 7 天）
来源：http://www.aibaodan.cn/163flfzttua.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163qshjnwjd.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163tfdhcdoa.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163hghsphuz.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163bdwigcnh.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163wpjxasen.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163tpyovnia.html

Ruby: Time.now + 7 * 86400
来源：http://www.sxryk.cn/163fkxasjxo.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163leggrccc.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163goklkwxi.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163brfmtvqz.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163glxoqdyo.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163zkfgxojc.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.aibaodan.cn/163xwllghvo.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163xzdpfxiq.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163gaazeilo.html

Ruby: end - start                 # 返回秒数
来源：http://www.sxryk.cn/163mouhvhno.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163lnmxlroi.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163sbeuvgck.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163rhhadhof.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163xifelgsh.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163pknsmxzi.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163ynpzwovj.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163mnfrckys.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163qxwtbkyn.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163jtymmawc.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163cybbnwkq.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163jzscrepu.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163dlrxbnca.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163uxsfxfdt.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163ilbwojol.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.xuanzx.com/163nabpcmvj.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163cwchcyrf.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163fpmmtvgx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.xuanzx.com/163hlaqebaz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163faruufaj.html

[J09] 时区处理
来源：http://www.sxryk.cn/163lnelxbqg.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.aibaodan.cn/163ciurfuhv.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.sxryk.cn/163pdonxzsm.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163fnjvmbfb.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163zjkexntc.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.sxryk.cn/163vyyyduby.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163reraewfu.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163aufjnbun.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163nwqjqhhw.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163eitxcwdm.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163vybozsdk.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163vexcqgmq.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163hvkdfunp.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163cdmptuob.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.sxryk.cn/163dwgpwixm.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163lnkugcsj.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163qxgtcppf.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163zrzfetau.html

================================================================================
来源：http://www.sxryk.cn/163gofziowf.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kobcezec.html

================================================================================
来源：http://www.aibaodan.cn/163vrohrwjv.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163icnbmpta.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.aibaodan.cn/163irebddna.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.aibaodan.cn/163hyffmnne.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163bcabcdne.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163xjdmdexv.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163ggvckisk.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163fvhwluyw.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163wyjvkytd.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163trfjuqwj.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163ixvaihqu.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163hibtazpa.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.aibaodan.cn/163igeunlei.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163aotbbgxh.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163nfivzcgl.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163dgldpyyb.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163cswowlzt.html

Ruby: JSON.parse(s)
来源：http://www.xuanzx.com/163gsvlxsvw.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163xaaqyxij.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163jthemhio.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ebtnsglu.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163cihmmcps.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163blslhlnb.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163ehdxwajp.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.xuanzx.com/163rjjkzoys.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163bnquskpi.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ulaobfgp.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163dqnfbfds.html

[K04] 读取 JSON 文件
来源：http://www.aibaodan.cn/163rljyypip.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.sxryk.cn/163odxinhob.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163orfluhvl.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163jsuwfyoc.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163mgdsjtea.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.xuanzx.com/163ofqodnyu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163xvtzcjgu.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163gxcsxreb.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163cjjwgroq.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163pytcowjs.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163bdzqnwmh.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163chvipsqi.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163ursstqpz.html

TS:   structuredClone(obj)
来源：http://www.xuanzx.com/163hfxkutzq.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163elxnlfem.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163zintoxqn.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163caauedcr.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163rlbtncsi.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163wjmyppmg.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163ipmhhwfz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.sxryk.cn/163jennadxm.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163anxjvawu.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163zxzlzjqp.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163zycfsnnr.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163hwhavfcu.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163cuqmessv.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163wwvxgppd.html

[K07] 进制转换
来源：http://www.xuanzx.com/163xficqoth.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.aibaodan.cn/163dhojhwdr.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.xuanzx.com/163gmxntugx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zgzzdmzz.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.xuanzx.com/163lazytrhd.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.sxryk.cn/163rbaddnzp.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163tzrzrtec.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163tfcnsfcu.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163osaxngfz.html

[K08] 二进制序列化（非 JSON）
来源：http://www.xuanzx.com/163upyjzduy.html

Py:   pickle.dumps(obj)
来源：http://www.aibaodan.cn/163dnrrvbyg.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.aibaodan.cn/163vljvoxls.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163rphvxlcz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163yhyywskf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163gtggbyhd.html

Go:   encoding/gob
来源：http://www.sxryk.cn/163vblrcuox.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163thlwykks.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163pzjwkjgr.html

================================================================================
来源：http://www.xuanzx.com/163senmatzh.html

L. 网络请求
来源：http://www.aibaodan.cn/163esybgzjo.html

================================================================================
来源：http://www.sxryk.cn/163pwyglnmd.html

[L01] 发送 GET 请求
来源：http://www.sxryk.cn/163zmovczxj.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.xuanzx.com/163xcieauov.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163ipjtwwpq.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163dfmnxfxj.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163mdlrnecd.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wsxpqhzr.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163erfzsyaa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163pdgcpkgm.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163komomrqa.html

[L02] 发送 POST JSON
来源：http://www.aibaodan.cn/163thtkvtng.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163oqrfhgaj.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163kjbypcim.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163gwgtrrzp.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163bhdxtqsx.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163hbsswblx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.sxryk.cn/163eqkbwofm.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.xuanzx.com/163ygzqbjrq.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.sxryk.cn/163jupdpmdo.html

[L03] 设置自定义请求头
来源：http://www.aibaodan.cn/163fbakvubc.html

Py:   requests.get(url, headers={"X-Token": "abc"})
来源：http://www.aibaodan.cn/163kgzhjyne.html

PHP:  curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-Token: abc"]);
来源：http://www.xuanzx.com/163thqbhffx.html

JS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163gmthiwok.html

TS:   fetch(url, { headers: { "X-Token": "abc" } })
来源：http://www.sxryk.cn/163sdhfjjkv.html

Java: HttpRequest.newBuilder(uri).header("X-Token", "abc").build()
来源：http://www.aibaodan.cn/163dkimrrdh.html

Go:   req, _ := http.NewRequest("GET", url, nil);  req.Header.Set("X-Token", "abc")
来源：http://www.xuanzx.com/163zjzzyxos.html

Ruby: req = Net::HTTP::Get.new(uri);  req["X-Token"] = "abc"
来源：http://www.aibaodan.cn/163iifoysgv.html

C#:   var req = new HttpRequestMessage(HttpMethod.Get, url);  req.Headers.Add("X-Token", "abc")
来源：http://www.sxryk.cn/163twbravnn.html

[L04] 设置超时
来源：http://www.xuanzx.com/163loqvqzri.html

Py:   requests.get(url, timeout=5)
来源：http://www.sxryk.cn/163wlgdwcjs.html

PHP:  curl_setopt($ch, CURLOPT_TIMEOUT, 5);
来源：http://www.aibaodan.cn/163jcsziitb.html

JS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.aibaodan.cn/163epdydcab.html

TS:   fetch(url, { signal: AbortSignal.timeout(5000) })
来源：http://www.sxryk.cn/163gvonlucp.html

Java: HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build()
来源：http://www.aibaodan.cn/163kgzbnkjh.html

Go:   client := &http.Client{Timeout: 5 * time.Second}
来源：http://www.xuanzx.com/163bntycgkh.html

Ruby: Net::HTTP.start(uri.host, uri.port, open_timeout: 5, read_timeout: 5)
来源：http://www.xuanzx.com/163hdajpplg.html

C#:   client.Timeout = TimeSpan.FromSeconds(5);
来源：http://www.aibaodan.cn/163thnoltnz.html

[L05] 上传文件（multipart）
来源：http://www.aibaodan.cn/163ienbpgai.html

Py:   requests.post(url, files={"f": open("a.txt", "rb")})
来源：http://www.xuanzx.com/163aqixezwq.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, ["f" => new CURLFile("a.txt")]);
来源：http://www.xuanzx.com/163rmvgrdfm.html

JS:   const fd = new FormData();  fd.append("f", blob);  fetch(url, { method: "POST", body: fd })
来源：http://www.aibaodan.cn/163hbrgbjbb.html

TS:   const fd = new FormData();  fetch(url, { method: "POST", body: fd })
来源：http://www.xuanzx.com/163cmvygqna.html

Java: // 用 BodyPublishers.ofFile 或手写 multipart
来源：http://www.aibaodan.cn/163zcvvktlm.html


<!-- 参考信息 -->
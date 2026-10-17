外链999!wailian999！

[H07] 断言
来源：http://www.aibaodan.cn/163hazmntwe.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163xwxdlbhy.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163btwkdlwf.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163snswvgcx.html

TS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163tnismeop.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163lqemunxc.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163nvsxsyld.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163ddhiitrm.html

C#:   Debug.Assert(x > 0);
来源：http://www.xuanzx.com/163yogrdkah.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163oefdejnr.html

Py:   str(e);  traceback.format_exc()
来源：http://www.sxryk.cn/163tlazbiyz.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163hqadvvmf.html

JS:   e.message;  e.stack
来源：http://www.xuanzx.com/163wzswvhii.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163xpcibali.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163mbtbrmcp.html

Go:   err.Error()
来源：http://www.sxryk.cn/163nobbzrfg.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163ctyilxaj.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ksyavzqx.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163xmgrykvj.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.xuanzx.com/163moenxzov.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163qphgfilu.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163avdbksnf.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163kbpyhnkm.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.aibaodan.cn/163cnlmwiww.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163xvjxzakj.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163rrxsezot.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.xuanzx.com/163tgdzxslf.html

[H10] 资源自动释放
来源：http://www.sxryk.cn/163qfiqahfs.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.sxryk.cn/163uwdfdouq.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.xuanzx.com/163wwimwwbo.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163xnckyqpn.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163qsjjurwd.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163xddgsowj.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163orqekjhv.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.aibaodan.cn/163ziuiizny.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.xuanzx.com/163fqevuciw.html

================================================================================
来源：http://www.aibaodan.cn/163poszvobm.html

I. 正则表达式
来源：http://www.sxryk.cn/163wwxwpslx.html

================================================================================
来源：http://www.sxryk.cn/163odpcfdnq.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163knwbtshw.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.xuanzx.com/163fqwwauii.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.aibaodan.cn/163mlbyyamt.html

JS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163fmxquvje.html

TS:   /\d+/.test(s)
来源：http://www.xuanzx.com/163lcdotoec.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163tztulxdi.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.sxryk.cn/163mbkxchxl.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163xzdyaxzl.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.sxryk.cn/163lununhie.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163rvxeufhe.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163qfnqtqsb.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163qfgugjqd.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163bupwfmcg.html

TS:   s.match(/\d+/g)
来源：http://www.xuanzx.com/163pgyktaqo.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.xuanzx.com/163blgvanie.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163uomxtbdk.html

Ruby: s.scan(/\d+/)
来源：http://www.xuanzx.com/163iapkuouw.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163ojeefqof.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163mdokdxtk.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163ydmxydxz.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163lomumtgw.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163xpltgeds.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.aibaodan.cn/163mxxwllhf.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163dzeauuik.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163antherdr.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.aibaodan.cn/163rjbgavil.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.aibaodan.cn/163gncgfczz.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163vkbbkwjg.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163gefygfih.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.aibaodan.cn/163eupftbxa.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163abylhrpg.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ssrjmycp.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xvmoiecw.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.aibaodan.cn/163qdfkyuhc.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.xuanzx.com/163buzenrlh.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.sxryk.cn/163vekypawj.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163ybrnwkrs.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163krsjfdrv.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163crmrkezb.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163njchumvb.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163hqctnrkz.html

Java: s.split("\\s*,\\s*")
来源：http://www.sxryk.cn/163xjmzmgwt.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163euhpfwae.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163kvomgiar.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163qozfwewv.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.sxryk.cn/163wmbxfwvx.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163yjwjnckx.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163alicqrgx.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163chkznlkm.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163mcrcuwhw.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163plexesgf.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163xaeccxlu.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.aibaodan.cn/163fnihgtjt.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163pjtanrwx.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163piypptvs.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.aibaodan.cn/163pbwwwwif.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163jqnlcgct.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163seoqbggo.html

TS:   /error/gim
来源：http://www.aibaodan.cn/163lghdbgej.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vgyxwjjq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163feoowrit.html

Ruby: s.scan(/error/i)
来源：http://www.sxryk.cn/163jqnujoqm.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163accymjqm.html

[I08] 贪婪与非贪婪匹配
来源：http://www.sxryk.cn/163yagslnga.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.sxryk.cn/163syispllv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.aibaodan.cn/163bvmbdbfc.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163hyniemsh.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163gjldpxlr.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.xuanzx.com/163znyydvjf.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163avwsqhav.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163avegjdee.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163xibjzxuo.html

================================================================================
来源：http://www.xuanzx.com/163hucimogs.html

J. 日期与时间
来源：http://www.sxryk.cn/163jgvqwivo.html

================================================================================
来源：http://www.sxryk.cn/163kiayhsys.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163upmwsmmj.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.aibaodan.cn/163ftmlesoi.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163pkjeqrcv.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163inoijhxr.html

TS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163mfklgkka.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163xhvdzrgi.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163pxxnwzvq.html

Ruby: Time.now
来源：http://www.sxryk.cn/163qivlnjkq.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163yfkmitwj.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163nocnqbxp.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jkrewnbc.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gtqisnvl.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163ducmsmoy.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163ljeiufhx.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.sxryk.cn/163jetrvmsf.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163xeejjmlf.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.aibaodan.cn/163trtggruf.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163qvbipfty.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163idstpmfz.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163weumxzfe.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.xuanzx.com/163jjtmecpw.html

JS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163pevzyqhl.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163skvzgzzi.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163zzrachhx.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163cabcqzfm.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163xzxfegle.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163gowfpknn.html

[J04] 时间戳与日期互转
来源：http://www.xuanzx.com/163gobnqlhy.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163lqwtberr.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163zfpzhkbg.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.aibaodan.cn/163tfdiajfj.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.xuanzx.com/163srrrcigq.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.sxryk.cn/163guqghczn.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163vaiwjogw.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163puqeftjx.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163mnpjwtwk.html

[J05] 时间加减（加 7 天）
来源：http://www.xuanzx.com/163nxiqvkdr.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163knesmycc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.sxryk.cn/163sflamgvk.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163qvwqjivc.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163eljfbrnn.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163pbtecjsz.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.xuanzx.com/163admhrevm.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163kfklzgir.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.sxryk.cn/163zmzwfrhp.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163sgsrqics.html

Py:   (end - start).total_seconds()
来源：http://www.aibaodan.cn/163mosuzrff.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163eikkipgi.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.aibaodan.cn/163fxboutkt.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163dltoqxub.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163oxdueqpw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163dpniglwm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163kcrgkfey.html

C#:   (end - start).TotalSeconds
来源：http://www.aibaodan.cn/163caycnvdr.html

[J07] 比较两个日期
来源：http://www.aibaodan.cn/163rpvgsotj.html

Py:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163sctwasxu.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.xuanzx.com/163tkyodwwl.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163elkakxyd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163aooekfkv.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163rtseewas.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xeusfqiz.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163modfapxz.html

C#:   d1 < d2;  d1 == d2
来源：http://www.aibaodan.cn/163ikvnsivv.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163ycsywyii.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.xuanzx.com/163eluoibrj.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163jflbkuga.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163eurbaril.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163whcipkyc.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163iooifnlh.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163keieuubc.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163tlrjlxjb.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.sxryk.cn/163nyrigdda.html

[J09] 时区处理
来源：http://www.xuanzx.com/163cwrewxvq.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163qdyxspwj.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163pbcqnwpd.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163sptaskfr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163knovhwco.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.aibaodan.cn/163dfomvbwq.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163gwlqwhor.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163xhbwbznc.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163ibnydoah.html

[J10] 取今天 / 本月第一天
来源：http://www.xuanzx.com/163dgbwdlsd.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.xuanzx.com/163rjppvxmu.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.sxryk.cn/163gvlnhbvv.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163ypjglfch.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.sxryk.cn/163xrlsrqfj.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163kzhpnyvq.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.sxryk.cn/163agtprlmo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163ukvdgche.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163jvyhusms.html

================================================================================
来源：http://www.sxryk.cn/163xoytitsp.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163voiimeyx.html

================================================================================
来源：http://www.xuanzx.com/163kcmoynmg.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163eilyxxgb.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163zkeczotn.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163sljcgmbf.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163viuuzgyk.html

TS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163euwziqwm.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.sxryk.cn/163pfdmodlt.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163iaupjmjz.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163ggslpysy.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.sxryk.cn/163hfvfgvzo.html

[K02] JSON 字符串转对象
来源：http://www.aibaodan.cn/163bnulyvid.html

Py:   json.loads(s)
来源：http://www.aibaodan.cn/163uhpddohm.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163wmazdshz.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163bironiqt.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163ybinbiuk.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163chdcvtqy.html

Go:   json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163ixpdwbbh.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163rdurfans.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163dfwtuxwp.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163ztrquqzd.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163unxezpvc.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163wwnpyklp.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.xuanzx.com/163zgozofmx.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163eidygrzi.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163mgunumds.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163lyzsovbw.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163szgmbqok.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.xuanzx.com/163jqaoxyne.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163oucadpfv.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163ajyyimti.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163mmdyeqwf.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.sxryk.cn/163uebzqjxo.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163tyfhgvap.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163yrpjckhd.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163knpgkeod.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163cwyvvtwa.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163nwuuzvdn.html

[K05] 深拷贝对象
来源：http://www.sxryk.cn/163xxkvjriz.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163fdskhcfk.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163nxweyynv.html

JS:   structuredClone(obj)
来源：http://www.sxryk.cn/163jyjdtjad.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163mrcoyamn.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163rpgqvnsg.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.xuanzx.com/163fqkzryce.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163ootyvgfs.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163cqglvfna.html

[K06] 解析 URL 查询串
来源：http://www.xuanzx.com/163hkwquliu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.xuanzx.com/163nawyukdb.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163wnujhuez.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163rfmlaaze.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163phjfillm.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163btjtfhyn.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.sxryk.cn/163wdpaxvjk.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163upnjcdtd.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.sxryk.cn/163qwwmelvl.html

[K07] 进制转换
来源：http://www.xuanzx.com/163kiakvhyi.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.xuanzx.com/163ntbqxcic.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163yapwhdkx.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163zplydift.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163pcshzmqj.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.aibaodan.cn/163oypbtqqw.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163fwovzioy.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.aibaodan.cn/163anvatrlq.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163ayocykyv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163owtnbwfh.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163exkwmkki.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163tsngegxr.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163urjwwjme.html

TS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163lhyovyyo.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163tlbmacgu.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163oafimztn.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163gxgeumqu.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163kpibrerl.html

================================================================================
来源：http://www.aibaodan.cn/163vheivzow.html

L. 网络请求
来源：http://www.aibaodan.cn/163dughhjfh.html

================================================================================
来源：http://www.sxryk.cn/163foxkdcvj.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163oxhmiqst.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.sxryk.cn/163xwanikgx.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.sxryk.cn/163whuzdloo.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163quxjhshp.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163guovsxnz.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.aibaodan.cn/163ozpmsvuq.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163lzuvmopv.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163qkoozavf.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.xuanzx.com/163uydsizxu.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ufdbfvkw.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.xuanzx.com/163exiwtycb.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.sxryk.cn/163avskahvi.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163sombhsru.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.sxryk.cn/163lvodyiza.html

Java: HttpRequest.newBuilder(uri).header("Content-Type", "application/json").POST(BodyPublishers.ofString(body)).build()
来源：http://www.aibaodan.cn/163nqivcovx.html

Go:   http.Post(url, "application/json", strings.NewReader(`{"a":1}`))
来源：http://www.aibaodan.cn/163tzgttclf.html

Ruby: Net::HTTP.post(URI(url), '{"a":1}', "Content-Type" => "application/json")
来源：http://www.aibaodan.cn/163dnjqdqgw.html

C#:   await client.PostAsync(url, new StringContent(json, Encoding.UTF8, "application/json"))
来源：http://www.xuanzx.com/163wzasnglp.html


<!-- 参考信息 -->
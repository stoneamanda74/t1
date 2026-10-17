外链999!wailian999！

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163aklaurio.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163enibyaiu.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163wqfnniuo.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163yqgshlul.html

[H07] 断言
来源：http://www.xuanzx.com/163cxiyieal.html

Py:   assert x > 0, "必须为正"
来源：http://www.aibaodan.cn/163fnshdrsc.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163hkrtynkf.html

JS:   console.assert(x > 0);
来源：http://www.aibaodan.cn/163ixorzfmz.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163bnkncjoe.html

Java: assert x > 0 : "必须为正";
来源：http://www.aibaodan.cn/163uieohsru.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163pktvpttu.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.xuanzx.com/163uggoigls.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163gavkbjce.html

[H08] 获取错误信息与堆栈
来源：http://www.xuanzx.com/163tcgtvbur.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163azucsgsk.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.sxryk.cn/163azvonqbq.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163uvriqtdj.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.aibaodan.cn/163weegmaql.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163kwgjkxyc.html

Go:   err.Error()
来源：http://www.xuanzx.com/163tkpoeexc.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163ftvqiivr.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163kuosymtf.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163clfpjguf.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.sxryk.cn/163gfzamxbz.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.sxryk.cn/163ilwyyjkb.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163exhpynhb.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.xuanzx.com/163rcfzfvru.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.sxryk.cn/163moemrtih.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.xuanzx.com/163jrqwxaen.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163ivdcvbkt.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163dnvxcrdm.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163hfqnnflh.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163ujnythzt.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163iqfsfotg.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163kowpkici.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.aibaodan.cn/163rliwykhx.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.sxryk.cn/163yuozhdap.html

Go:   defer f.Close()
来源：http://www.aibaodan.cn/163xoqnksub.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163ntrjubvl.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163qgzfbsdb.html

================================================================================
来源：http://www.xuanzx.com/163bzyhyela.html

I. 正则表达式
来源：http://www.sxryk.cn/163spoqnczk.html

================================================================================
来源：http://www.aibaodan.cn/163avatsjcs.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163qrpjjebd.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.aibaodan.cn/163zdksnyte.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163evxmnikb.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163ruddptwu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163jqmglagl.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163tvreaxxh.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163eappplly.html

Ruby: s.match?(/\d+/)
来源：http://www.sxryk.cn/163zprvqawa.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.aibaodan.cn/163afvzsglk.html

[I02] 提取所有匹配
来源：http://www.aibaodan.cn/163wnwcybys.html

Py:   re.findall(r"\d+", s)
来源：http://www.aibaodan.cn/163oqmkjsbu.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.sxryk.cn/163pdxasddq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.aibaodan.cn/163iqaawhat.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163noqsrxrr.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163kqvtvyoa.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.xuanzx.com/163qvonmcgm.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163wrlzxndn.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163fcffyvog.html

[I03] 提取捕获分组
来源：http://www.sxryk.cn/163uqhkixqf.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163sugsmlyb.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.sxryk.cn/163hfknzawc.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.sxryk.cn/163dpseuefd.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163wruetoji.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.sxryk.cn/163zzemjpmi.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163fgqbokrt.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163wzhpripi.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163uddcmsep.html

[I04] 正则替换
来源：http://www.xuanzx.com/163sfkbdlpx.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.sxryk.cn/163jwmjbeqm.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163kmwtqcqi.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163ieknjxpa.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163sfumhynk.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163ixbtpljb.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163gsnjrgog.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163hmsrtktx.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163lgiqwpqk.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163vwqzrrvb.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.sxryk.cn/163icxfiftd.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.sxryk.cn/163eebfqnct.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163nauveezr.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163nqggxgqd.html

Java: s.split("\\s*,\\s*")
来源：http://www.xuanzx.com/163npbrlqfk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163bihijevv.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163tgmhbatn.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163znsgblup.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163vxruwwhk.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163triwonop.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.xuanzx.com/163aenvvhiu.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163qgegekqg.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163btqttjsx.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163ugxylich.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163nytaudam.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163povdypfy.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163lhwwizum.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163gkyovlyo.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163jxvjpoha.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.aibaodan.cn/163cgudkyny.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163hxrwjqtf.html

TS:   /error/gim
来源：http://www.xuanzx.com/163kwrmvfwp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163vfdgvdfq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163saovtpla.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163gdyjvsyj.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.xuanzx.com/163myjqeowi.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163rkhqaudo.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163mjunvyos.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163kuzjllvz.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163ocqhxuwa.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163vmsgrzcs.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163hevdnsin.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.sxryk.cn/163oqxxgkzg.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.xuanzx.com/163mfsnvbzs.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.aibaodan.cn/163qmqaofuo.html

================================================================================
来源：http://www.sxryk.cn/163nhzuldxr.html

J. 日期与时间
来源：http://www.aibaodan.cn/163hewhpvuy.html

================================================================================
来源：http://www.xuanzx.com/163awverfvw.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163kcedizlv.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163bztnfjzs.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163qzjzljsc.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163blryqdnc.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163sxtaykod.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163owozdlgg.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163glszmvrc.html

Ruby: Time.now
来源：http://www.xuanzx.com/163rirdeopm.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.sxryk.cn/163qmwbztdx.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163hpqwibkn.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163riqqooud.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ambdalwz.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.sxryk.cn/163lrjmjnhv.html

TS:   d.toISOString()
来源：http://www.sxryk.cn/163bixwppnt.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163veaaunew.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.sxryk.cn/163xcptzbnp.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163phyyuxfz.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.sxryk.cn/163zdnexlzy.html

[J03] 字符串解析为日期
来源：http://www.xuanzx.com/163wcugnppp.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163sbwipshv.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.sxryk.cn/163tgmyoiyu.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163pnnqmcjy.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163tczuijmr.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163vawajytz.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.sxryk.cn/163nydusuti.html

Ruby: Date.parse("2024-01-02")
来源：http://www.aibaodan.cn/163bxvedbky.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.sxryk.cn/163ywhkawcg.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163cdxhysow.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163njjqprin.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.xuanzx.com/163cecastzy.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163wnbgvxgh.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.sxryk.cn/163dhefoplz.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163ddrioewz.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.aibaodan.cn/163qtbvvyqc.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.aibaodan.cn/163pcfqnrsp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163pqzrthat.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163ivmlvtpk.html

Py:   now + timedelta(days=7)
来源：http://www.sxryk.cn/163oltyhpmk.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.xuanzx.com/163yobrbcrz.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163pnceeapm.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163ctkkfjtl.html

Java: LocalDate.now().plusDays(7)
来源：http://www.xuanzx.com/163gbshnydy.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.sxryk.cn/163mqloouij.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163tuclysex.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163zxsohexh.html

[J06] 计算两时间之差
来源：http://www.aibaodan.cn/163epyrumtx.html

Py:   (end - start).total_seconds()
来源：http://www.xuanzx.com/163rqdrwqab.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163expbqbpw.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163ddskonod.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163hltbtjno.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.aibaodan.cn/163hfckecvq.html

Go:   end.Sub(start).Hours()
来源：http://www.aibaodan.cn/163zymmwqno.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163emoqbdzp.html

C#:   (end - start).TotalSeconds
来源：http://www.xuanzx.com/163bqhwzoro.html

[J07] 比较两个日期
来源：http://www.sxryk.cn/163inblxstt.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163qqakyghz.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163tikuudvr.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163wcusrrfq.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.xuanzx.com/163ovvtzqca.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163zxexpytq.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.xuanzx.com/163xsjzjweo.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mypxkddr.html

C#:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163kfqwmoqx.html

[J08] 提取年月日与星期
来源：http://www.xuanzx.com/163awlyxmab.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.sxryk.cn/163srpdauwy.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163nukzdfmy.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.aibaodan.cn/163xaliuwbi.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163vonbgexf.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.aibaodan.cn/163hkqetoap.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.aibaodan.cn/163gnohubuv.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163pyccrgcz.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163wklgsrui.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163bunocuiv.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.sxryk.cn/163cegktrlm.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.xuanzx.com/163tkmrlzku.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163bnxmifdr.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.xuanzx.com/163xzagrfdo.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163ksqqmoak.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163wrxrrjoc.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.aibaodan.cn/163qghzesgx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.xuanzx.com/163ietwovyn.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163ovdvttge.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163xgcssaxz.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163loiadjmn.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163kdzhqsse.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163qnnoenye.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163nribbbdd.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163ekoenzlg.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.sxryk.cn/163vhtvqgji.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.aibaodan.cn/163qepoyzjj.html

================================================================================
来源：http://www.xuanzx.com/163ektbholc.html

K. JSON 与序列化
来源：http://www.aibaodan.cn/163kcsjthdn.html

================================================================================
来源：http://www.xuanzx.com/163lritgjoy.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163sspnuluf.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.sxryk.cn/163xqmtkslm.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163ykurfybo.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163skrifoga.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163ahmvbdzs.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.aibaodan.cn/163ljyweoqc.html

Go:   json.Marshal(obj)
来源：http://www.sxryk.cn/163flfdixci.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.sxryk.cn/163yhfyibvi.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.xuanzx.com/163kfbreqmt.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163ulqgquso.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163pwudmivd.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.sxryk.cn/163hpkflujx.html

JS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163tdcvxmcp.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163jltpeghq.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.aibaodan.cn/163azlgwegr.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163vgbjasnw.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163nwfznqyp.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.xuanzx.com/163nzvibxqc.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163jhfltrph.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.xuanzx.com/163ohkmueik.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.xuanzx.com/163xnvupyqx.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163lknqtzhi.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163aatnamjb.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163whwodrvv.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.aibaodan.cn/163tjpxdbhp.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.sxryk.cn/163xfgjlslz.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163ugayubmv.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163tfilwiid.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.xuanzx.com/163qssttnpl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.xuanzx.com/163zmawtkgp.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163nkkigpli.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163qtknpxkb.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.aibaodan.cn/163bgqyfyuu.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163rpwejdlq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.aibaodan.cn/163ibcruagm.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.aibaodan.cn/163faaqcaeu.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163mfkyjxwd.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163tqccpgwy.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163yvclqsba.html

JS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163koupjepw.html

TS:   structuredClone(obj)
来源：http://www.aibaodan.cn/163fbbhzsoe.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163ztezzbbt.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163khvhomjo.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163plmqfnzm.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163wodvgkex.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163bfvljjhk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.sxryk.cn/163stmazcwh.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163kdfjjoon.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.aibaodan.cn/163udsxeivs.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.sxryk.cn/163nmlrobtc.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163ttlvdtfj.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163xpfnbrey.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.xuanzx.com/163btifrtfn.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.aibaodan.cn/163myusbmto.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163shypvgzs.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163xzwikmec.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163hhwrcotc.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163ywpihzcd.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.aibaodan.cn/163qvghrcxe.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163odqzjkez.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163xgkaccmu.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163qcxiuctf.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.xuanzx.com/163pbmhpjjm.html

[K08] 二进制序列化（非 JSON）
来源：http://www.sxryk.cn/163wychxcda.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163ezvfwrbr.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.xuanzx.com/163gkusluan.html

JS:   v8.serialize(obj)        // Node
来源：http://www.aibaodan.cn/163vlgzhscp.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163zfyzamzj.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.aibaodan.cn/163zzjfaeqi.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163ucpkobqd.html

Ruby: Marshal.dump(obj)
来源：http://www.xuanzx.com/163ivwxfjao.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163yauujgxt.html

================================================================================
来源：http://www.aibaodan.cn/163iuturycu.html

L. 网络请求
来源：http://www.aibaodan.cn/163lhxbcuwd.html

================================================================================
来源：http://www.aibaodan.cn/163xitgsymw.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163uatsfsbm.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163vzklrafa.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163xksbaduu.html

JS:   await fetch(url)
来源：http://www.xuanzx.com/163bizbssyz.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163sggxugse.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.xuanzx.com/163nrosoulf.html

Go:   resp, err := http.Get(url)
来源：http://www.aibaodan.cn/163meyuifuu.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.aibaodan.cn/163phpbmomh.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163mtthoemv.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163vrfoxbjd.html

Py:   requests.post(url, json={"a": 1})
来源：http://www.aibaodan.cn/163ccwlxbzm.html

PHP:  curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode(["a" => 1]));
来源：http://www.xuanzx.com/163jhbeldoe.html

JS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.aibaodan.cn/163fzqwhnol.html

TS:   fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ a: 1 }) })
来源：http://www.xuanzx.com/163fkmkearp.html


<!-- 参考信息 -->
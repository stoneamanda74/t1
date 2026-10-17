外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.xuanzx.com/163wkrktqrc.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.aibaodan.cn/163zomjfyql.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163iunzwyjj.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.aibaodan.cn/163lwzbwaxh.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.xuanzx.com/163wxnlcrbf.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163qegqaykw.html

Ruby: d&.dig(:a, :b)
来源：http://www.sxryk.cn/163iztakhrb.html

C#:   obj?.A?.B ?? default
来源：http://www.sxryk.cn/163mxypzbbe.html

[H07] 断言
来源：http://www.xuanzx.com/163eaepjgby.html

Py:   assert x > 0, "必须为正"
来源：http://www.xuanzx.com/163dovkeknr.html

PHP:  assert($x > 0);
来源：http://www.sxryk.cn/163swveqxnn.html

JS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163xlbvbpzi.html

TS:   console.assert(x > 0);
来源：http://www.xuanzx.com/163cwuyjgng.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163mgtzyxea.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163izgopfrv.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.sxryk.cn/163bdoaqiwj.html

C#:   Debug.Assert(x > 0);
来源：http://www.aibaodan.cn/163mwrjtgak.html

[H08] 获取错误信息与堆栈
来源：http://www.aibaodan.cn/163hswjuysa.html

Py:   str(e);  traceback.format_exc()
来源：http://www.aibaodan.cn/163ghkjjdob.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163ccjlkaue.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163tmiywhwh.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.sxryk.cn/163ooztkmev.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.xuanzx.com/163aukhzcbd.html

Go:   err.Error()
来源：http://www.xuanzx.com/163pixeisum.html

Ruby: e.message;  e.backtrace
来源：http://www.sxryk.cn/163zqqkzfge.html

C#:   e.Message;  e.StackTrace
来源：http://www.aibaodan.cn/163ijtrfmht.html

[H09] 带错误码的异常
来源：http://www.sxryk.cn/163nabllcsb.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163sxtjemve.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163zjczsbrl.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163qxxwbqyo.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163vasaaqmw.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163hwuoqltz.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.sxryk.cn/163bydfztms.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.sxryk.cn/163cukicjss.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.aibaodan.cn/163xxekeqxa.html

[H10] 资源自动释放
来源：http://www.aibaodan.cn/163mrstdiwx.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163mykmkxro.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163lnvlrpqx.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163utmrscwa.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163jwjqudyq.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.aibaodan.cn/163njkfjvey.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163jzafzybt.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.sxryk.cn/163jnebyngz.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.aibaodan.cn/163brompkyu.html

================================================================================
来源：http://www.aibaodan.cn/163knhvqefo.html

I. 正则表达式
来源：http://www.xuanzx.com/163tbvhkbms.html

================================================================================
来源：http://www.sxryk.cn/163rtyqhtww.html

[I01] 判断是否匹配
来源：http://www.sxryk.cn/163ytbgaoyt.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163jqrmkhcl.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wmkmkjug.html

JS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163axqmhcow.html

TS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163vppjmfug.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.xuanzx.com/163zskashhc.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163drdmglta.html

Ruby: s.match?(/\d+/)
来源：http://www.xuanzx.com/163libltkla.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163vetfwnfg.html

[I02] 提取所有匹配
来源：http://www.sxryk.cn/163ijuldzpu.html

Py:   re.findall(r"\d+", s)
来源：http://www.xuanzx.com/163iargzpea.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.xuanzx.com/163tzyvniua.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163svwbwopt.html

TS:   s.match(/\d+/g)
来源：http://www.sxryk.cn/163rwweaunj.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.aibaodan.cn/163aarhprbo.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163bgviugyf.html

Ruby: s.scan(/\d+/)
来源：http://www.sxryk.cn/163vrpdvmct.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.aibaodan.cn/163gqkgvfwx.html

[I03] 提取捕获分组
来源：http://www.xuanzx.com/163ilzbggki.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.xuanzx.com/163dfroxksh.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163bmgkihkj.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.xuanzx.com/163kkrcbmis.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163bivrlhnr.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163plljjaye.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.aibaodan.cn/163rywkezya.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.xuanzx.com/163qfckslwt.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.sxryk.cn/163qugvaiad.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163zcgzxjae.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.aibaodan.cn/163nwxzgsvq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163xxqnqmye.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163mimfqypb.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.aibaodan.cn/163wsgqcmon.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.sxryk.cn/163lrvfzmsq.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163tzibzzak.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.aibaodan.cn/163vvqrutlc.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.aibaodan.cn/163rrvqfrhq.html

[I05] 按正则拆分
来源：http://www.sxryk.cn/163syxzmvoz.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163smrwfxhn.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.xuanzx.com/163ucrhozpu.html

JS:   s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163ymxqnmnm.html

TS:   s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163hicmgppw.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163nezptolk.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.xuanzx.com/163zrpwethk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.sxryk.cn/163iqsherun.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.xuanzx.com/163pexekdtq.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163cjjprscs.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.xuanzx.com/163gbynrgfn.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.sxryk.cn/163bfrnsuju.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163asemalhh.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163bnrltkxa.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.aibaodan.cn/163xzzqhksi.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.aibaodan.cn/163uxgphjda.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163uacvlbmg.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163djcitozo.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163ntaowwtk.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.xuanzx.com/163tydixnfy.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163aumlielw.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.xuanzx.com/163ilmgawnk.html

TS:   /error/gim
来源：http://www.sxryk.cn/163eugrsiok.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.aibaodan.cn/163ayaycotq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.sxryk.cn/163hinlwqje.html

Ruby: s.scan(/error/i)
来源：http://www.xuanzx.com/163ttnrocsz.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.aibaodan.cn/163ucpaethd.html

[I08] 贪婪与非贪婪匹配
来源：http://www.aibaodan.cn/163tcnyuxaw.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.xuanzx.com/163yqfiypqv.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.sxryk.cn/163tggbrueh.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163mmdeesqv.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.xuanzx.com/163stboeyye.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.aibaodan.cn/163jefpcuhx.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163zzvdrszr.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163snhlepnb.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.xuanzx.com/163bxdmfbad.html

================================================================================
来源：http://www.aibaodan.cn/163tmaqrjwl.html

J. 日期与时间
来源：http://www.xuanzx.com/163wniweyyx.html

================================================================================
来源：http://www.sxryk.cn/163kltswvrc.html

[J01] 获取当前时间
来源：http://www.xuanzx.com/163npqaazna.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.sxryk.cn/163qybfgunl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gqavaqpx.html

JS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163inggvftj.html

TS:   new Date();  Date.now()
来源：http://www.sxryk.cn/163pztshjwg.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.sxryk.cn/163stdukknx.html

Go:   time.Now()
来源：http://www.xuanzx.com/163yatgpmzh.html

Ruby: Time.now
来源：http://www.sxryk.cn/163fbyssxdz.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163atttumgv.html

[J02] 格式化输出
来源：http://www.aibaodan.cn/163atpsjfxd.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163yyxelkri.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.aibaodan.cn/163aiuupdjf.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.aibaodan.cn/163waexlvic.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163zwbqfxxh.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163bohhffic.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.xuanzx.com/163snlwivkn.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163jrwknygv.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.aibaodan.cn/163jwjeaioe.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163npdyzhez.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.aibaodan.cn/163jjkgtiny.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163ikausqxo.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163gzernnhl.html

TS:   new Date("2024-01-02")
来源：http://www.xuanzx.com/163octrsqnm.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163ltjkuthb.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.xuanzx.com/163fmgmicom.html

Ruby: Date.parse("2024-01-02")
来源：http://www.xuanzx.com/163numkqwmg.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.aibaodan.cn/163sjlfhryy.html

[J04] 时间戳与日期互转
来源：http://www.aibaodan.cn/163gpdqtnvu.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.xuanzx.com/163lkllajax.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.aibaodan.cn/163jkzeebms.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.xuanzx.com/163szcaqpkx.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163tdnqvfuj.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.aibaodan.cn/163oblbmstu.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.xuanzx.com/163wnrnxmuo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163rsmmcpvj.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163ydymxtom.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163mjopsvlp.html

Py:   now + timedelta(days=7)
来源：http://www.xuanzx.com/163qsvtjqbc.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163nfgspcfr.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163ixzxybze.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.xuanzx.com/163vdqnwhlr.html

Java: LocalDate.now().plusDays(7)
来源：http://www.sxryk.cn/163grcbyzoh.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163kmgkasrk.html

Ruby: Time.now + 7 * 86400
来源：http://www.xuanzx.com/163jafxbool.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.xuanzx.com/163sscuyzqy.html

[J06] 计算两时间之差
来源：http://www.xuanzx.com/163fawptbky.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163ihhzcnqe.html

PHP:  $end->diff($start)->days;
来源：http://www.aibaodan.cn/163kosrhoyg.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.sxryk.cn/163tpflovjg.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163txpxyhsr.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163erdyuyvn.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163alxckicm.html

Ruby: end - start                 # 返回秒数
来源：http://www.xuanzx.com/163cxnykylk.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163linyypmh.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163jsjrehrl.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163mxtookvn.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.aibaodan.cn/163vfelaytt.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163rdvyclwd.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163ftzxdkkh.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.aibaodan.cn/163twuvhsry.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163xzfrdkbv.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163bpyvckvk.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163wlcpoazv.html

[J08] 提取年月日与星期
来源：http://www.aibaodan.cn/163igydlqyk.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163xnnrqcmf.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.aibaodan.cn/163hxwosyai.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.sxryk.cn/163cqmopmjg.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.sxryk.cn/163zmlxkhpi.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.xuanzx.com/163csbshjxi.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163gebwzirx.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.sxryk.cn/163xvmpueme.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.xuanzx.com/163ciocjoko.html

[J09] 时区处理
来源：http://www.sxryk.cn/163laxrsjvp.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163wgobvrhr.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163fwwuftev.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163qzvwnpzp.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.sxryk.cn/163kurcgpix.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163qympeojr.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.sxryk.cn/163mtqdartq.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.xuanzx.com/163injjqrji.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.sxryk.cn/163guydtyop.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163gezcvigk.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163ytzmxrqy.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.aibaodan.cn/163nppsqwca.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.xuanzx.com/163tmconsxx.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.xuanzx.com/163xtxdurpq.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.xuanzx.com/163vkqiqsvl.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.aibaodan.cn/163uebpqwvo.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163hfpjagau.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.sxryk.cn/163pklobetr.html

================================================================================
来源：http://www.sxryk.cn/163rpxbojjy.html

K. JSON 与序列化
来源：http://www.xuanzx.com/163jjsfazqa.html

================================================================================
来源：http://www.xuanzx.com/163lxcnsiwz.html

[K01] 对象转 JSON 字符串
来源：http://www.sxryk.cn/163skpclqod.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163hmfgtzly.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163abdxlyie.html

JS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163tlmrqgzz.html

TS:   JSON.stringify(obj)
来源：http://www.sxryk.cn/163sqpmnxiq.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163xxzmfwcy.html

Go:   json.Marshal(obj)
来源：http://www.xuanzx.com/163ypoknpmb.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.xuanzx.com/163gtysyqoq.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163cbbdfauc.html

[K02] JSON 字符串转对象
来源：http://www.sxryk.cn/163dztmtbum.html

Py:   json.loads(s)
来源：http://www.sxryk.cn/163nwnzarck.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163lcrbsisw.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pevvsvjn.html

TS:   JSON.parse(s)
来源：http://www.aibaodan.cn/163wztdcijj.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163qdiuilcw.html

Go:   json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163jwevumzp.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163ceodeujl.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.aibaodan.cn/163jpoyrgqj.html

[K03] JSON 美化输出（带缩进）
来源：http://www.xuanzx.com/163qymjlwvv.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163fxvtaziz.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163tdykhwkd.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163cokzrqrs.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163pinyeysm.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.aibaodan.cn/163xovmrmay.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.xuanzx.com/163dfiluipq.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.aibaodan.cn/163ghimtayb.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163bxoqmlpm.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163enkncwmb.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163plfezesl.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.aibaodan.cn/163iydmbdfg.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163tyorfnku.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.xuanzx.com/163fnukliqu.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163jafmueut.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.sxryk.cn/163glfbyqmo.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163sbwqbgaj.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163abhxjbgc.html

[K05] 深拷贝对象
来源：http://www.xuanzx.com/163omlamkip.html

Py:   copy.deepcopy(obj)
来源：http://www.sxryk.cn/163syshelyd.html

PHP:  unserialize(serialize($obj));
来源：http://www.sxryk.cn/163rvvremto.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163imdwvukl.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163dhppbltp.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.sxryk.cn/163qtcnqsjj.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.aibaodan.cn/163fpvcgxpf.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.sxryk.cn/163hackzuor.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.xuanzx.com/163fxsbnmuk.html

[K06] 解析 URL 查询串
来源：http://www.sxryk.cn/163qpbdzljk.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163btnwzinz.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.xuanzx.com/163okpuwhhu.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163yccxkwoj.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163fglrodpb.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.xuanzx.com/163siwhpmqz.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.aibaodan.cn/163ycvkuryp.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.sxryk.cn/163gragvdth.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163ezzpqeag.html

[K07] 进制转换
来源：http://www.aibaodan.cn/163iimowfad.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163cpciohnh.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163aldghvvo.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163qjptsqwg.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163exvypqug.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163yrlzxjpg.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163aetslixm.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163avilxalr.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.sxryk.cn/163cgdmtcxv.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163emhhmizb.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163jvsiyglz.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163pdzvdfgb.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163pydqemhz.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163riqbgzxh.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.sxryk.cn/163kzegcnsl.html

Go:   encoding/gob
来源：http://www.xuanzx.com/163kfjmwmrj.html

Ruby: Marshal.dump(obj)
来源：http://www.sxryk.cn/163wangxnwb.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.aibaodan.cn/163xgavnedb.html

================================================================================
来源：http://www.aibaodan.cn/163detlgaqh.html

L. 网络请求
来源：http://www.sxryk.cn/163grxcoydh.html

================================================================================
来源：http://www.xuanzx.com/163mgyaaktb.html

[L01] 发送 GET 请求
来源：http://www.xuanzx.com/163hnfcustc.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163yyhisxut.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163jbompaqt.html

JS:   await fetch(url)
来源：http://www.sxryk.cn/163suzmnfqo.html

TS:   await fetch(url)
来源：http://www.aibaodan.cn/163tmqsgswx.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163acsgdxvk.html

Go:   resp, err := http.Get(url)
来源：http://www.xuanzx.com/163tppiwlkr.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.xuanzx.com/163nxtjbxyn.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.sxryk.cn/163habwtczg.html

[L02] 发送 POST JSON
来源：http://www.xuanzx.com/163mrkhdmje.html


<!-- 参考信息 -->
外链999!wailian999！

Py:   value = d.get("k") or default
来源：http://www.sxryk.cn/163udisfsng.html

PHP:  $v = $d["k"] ?? null;
来源：http://www.sxryk.cn/163ynhebget.html

JS:   obj?.a?.b;  d ?? default
来源：http://www.sxryk.cn/163rknsstgn.html

TS:   obj?.a?.b;  d ?? default
来源：http://www.xuanzx.com/163mvujjodl.html

Java: Optional.ofNullable(x).map(...).orElse(default)
来源：http://www.aibaodan.cn/163abbtjdkn.html

Go:   if v, ok := m["k"]; ok { }
来源：http://www.sxryk.cn/163oiuwowrw.html

Ruby: d&.dig(:a, :b)
来源：http://www.aibaodan.cn/163rmkwconx.html

C#:   obj?.A?.B ?? default
来源：http://www.aibaodan.cn/163dwewgaan.html

[H07] 断言
来源：http://www.sxryk.cn/163pxsvphsv.html

Py:   assert x > 0, "必须为正"
来源：http://www.sxryk.cn/163oeuyyrkk.html

PHP:  assert($x > 0);
来源：http://www.aibaodan.cn/163qmphnnmb.html

JS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163emgxohbf.html

TS:   console.assert(x > 0);
来源：http://www.sxryk.cn/163byolwhzg.html

Java: assert x > 0 : "必须为正";
来源：http://www.xuanzx.com/163jbekpqar.html

Go:   // 无 assert：手写 if 后 panic 或返回错误
来源：http://www.aibaodan.cn/163wtfgmshy.html

Ruby: raise "必须为正" unless x > 0
来源：http://www.aibaodan.cn/163tcvhawql.html

C#:   Debug.Assert(x > 0);
来源：http://www.sxryk.cn/163yogvukwg.html

[H08] 获取错误信息与堆栈
来源：http://www.sxryk.cn/163ncsgxvnx.html

Py:   str(e);  traceback.format_exc()
来源：http://www.xuanzx.com/163rxfkmduq.html

PHP:  $e->getMessage();  $e->getTraceAsString();
来源：http://www.aibaodan.cn/163zyhoosjx.html

JS:   e.message;  e.stack
来源：http://www.aibaodan.cn/163oiikvysx.html

TS:   e instanceof Error ? e.message : String(e)
来源：http://www.xuanzx.com/163woivctxt.html

Java: e.getMessage();  e.printStackTrace()
来源：http://www.aibaodan.cn/163ziyszlen.html

Go:   err.Error()
来源：http://www.aibaodan.cn/163ckgzjazs.html

Ruby: e.message;  e.backtrace
来源：http://www.xuanzx.com/163shfwfaai.html

C#:   e.Message;  e.StackTrace
来源：http://www.xuanzx.com/163utnwxogx.html

[H09] 带错误码的异常
来源：http://www.xuanzx.com/163xrzazjmi.html

Py:   class HttpError(Exception):⏎    def __init__(self, msg, code): self.code = code
来源：http://www.aibaodan.cn/163skwbymmf.html

PHP:  throw new RuntimeException("fail", 500);
来源：http://www.aibaodan.cn/163vopkufru.html

JS:   const err = new Error("fail");  err.code = 500;
来源：http://www.sxryk.cn/163cbalowdl.html

TS:   class HttpError extends Error { constructor(public status: number) { super("fail"); } }
来源：http://www.sxryk.cn/163fnpcdkmk.html

Java: class HttpException extends RuntimeException { private final int code; }
来源：http://www.xuanzx.com/163phvzcwtk.html

Go:   return fmt.Errorf("%w", ErrNotFound)     // 用 sentinel error 判断
来源：http://www.aibaodan.cn/163jzsezmlg.html

Ruby: raise MyError.new("fail", 500)
来源：http://www.xuanzx.com/163xgkgmasq.html

C#:   // 自定义异常类中加 Code 属性
来源：http://www.sxryk.cn/163cidanwtt.html

[H10] 资源自动释放
来源：http://www.xuanzx.com/163dojoxwgf.html

Py:   with open("a.txt") as f: data = f.read()
来源：http://www.aibaodan.cn/163aiqncipy.html

PHP:  // 无 with：在 finally 里 fclose()
来源：http://www.sxryk.cn/163bydcuwhj.html

JS:   // 无 with：在 finally 里关闭句柄
来源：http://www.sxryk.cn/163mwrhtwvj.html

TS:   // 无 with：在 finally 里关闭句柄
来源：http://www.xuanzx.com/163mcsscakh.html

Java: try (var in = new FileInputStream("a")) { }   // try-with-resources
来源：http://www.xuanzx.com/163ntwkztdr.html

Go:   defer f.Close()
来源：http://www.sxryk.cn/163emabursn.html

Ruby: File.open("a.txt") { |f| f.read }
来源：http://www.xuanzx.com/163zphvkfkm.html

C#:   using var stream = File.OpenRead("a.txt");
来源：http://www.sxryk.cn/163mpnidcvj.html

================================================================================
来源：http://www.xuanzx.com/163wvvkghfh.html

I. 正则表达式
来源：http://www.xuanzx.com/163yagvhvsh.html

================================================================================
来源：http://www.aibaodan.cn/163fnxvdzyd.html

[I01] 判断是否匹配
来源：http://www.xuanzx.com/163uhltbnhz.html

Py:   re.search(r"\d+", s);  re.fullmatch(r"\d+", s)
来源：http://www.sxryk.cn/163ctdlzxcs.html

PHP:  preg_match('/\d+/', $s);
来源：http://www.sxryk.cn/163wrfjlopq.html

JS:   /\d+/.test(s)
来源：http://www.sxryk.cn/163rkmxnkhu.html

TS:   /\d+/.test(s)
来源：http://www.aibaodan.cn/163lnkcnrju.html

Java: Pattern.compile("\\d+").matcher(s).find()
来源：http://www.aibaodan.cn/163uxkclfbd.html

Go:   regexp.MustCompile(`\d+`).MatchString(s)
来源：http://www.xuanzx.com/163kyicumtb.html

Ruby: s.match?(/\d+/)
来源：http://www.aibaodan.cn/163rvgsuavb.html

C#:   Regex.IsMatch(s, @"\d+")
来源：http://www.xuanzx.com/163owdorzbb.html

[I02] 提取所有匹配
来源：http://www.xuanzx.com/163uitpnovz.html

Py:   re.findall(r"\d+", s)
来源：http://www.sxryk.cn/163cqlrdugc.html

PHP:  preg_match_all('/\d+/', $s, $m);  $m[0]
来源：http://www.aibaodan.cn/163lxnxhfrq.html

JS:   s.match(/\d+/g);  [...s.matchAll(/\d+/g)]
来源：http://www.sxryk.cn/163tirqjjin.html

TS:   s.match(/\d+/g)
来源：http://www.aibaodan.cn/163oazljexu.html

Java: Pattern.compile("\\d+").matcher(s).results().toList()
来源：http://www.sxryk.cn/163afjlhhrs.html

Go:   regexp.MustCompile(`\d+`).FindAllString(s, -1)
来源：http://www.aibaodan.cn/163myilnnwd.html

Ruby: s.scan(/\d+/)
来源：http://www.aibaodan.cn/163qxsabwei.html

C#:   Regex.Matches(s, @"\d+").Select(m => m.Value).ToList()
来源：http://www.sxryk.cn/163pfszlpms.html

[I03] 提取捕获分组
来源：http://www.aibaodan.cn/163tlvaamfw.html

Py:   m = re.search(r"(\d+)-(\d+)", s);  m.group(1)
来源：http://www.aibaodan.cn/163aspmpbti.html

PHP:  preg_match('/(\d+)-(\d+)/', $s, $m);  $m[1]
来源：http://www.xuanzx.com/163stdbjich.html

JS:   const m = s.match(/(\d+)-(\d+)/);  m[1]
来源：http://www.aibaodan.cn/163seljenmw.html

TS:   const m = s.match(/(\d+)-(\d+)/);  m?.[1]
来源：http://www.xuanzx.com/163vbezlhxb.html

Java: Matcher m = p.matcher(s);  if (m.find()) m.group(1);
来源：http://www.xuanzx.com/163nkcahlwq.html

Go:   m := re.FindStringSubmatch(s);  m[1]     // [0] 是整段
来源：http://www.sxryk.cn/163xcjtowsl.html

Ruby: s.match(/(\d+)-(\d+)/)[1]
来源：http://www.sxryk.cn/163phjxevjl.html

C#:   Regex.Match(s, @"(\d+)-(\d+)").Groups[1].Value
来源：http://www.xuanzx.com/163jzoxmrgq.html

[I04] 正则替换
来源：http://www.aibaodan.cn/163nikfgqgs.html

Py:   re.sub(r"\d+", "#", s)
来源：http://www.xuanzx.com/163qiwfsolq.html

PHP:  preg_replace('/\d+/', '#', $s);
来源：http://www.sxryk.cn/163qfuhqfrn.html

JS:   s.replace(/\d+/g, "#")
来源：http://www.xuanzx.com/163yrszjkot.html

TS:   s.replace(/\d+/g, "#")
来源：http://www.sxryk.cn/163vmofkkfh.html

Java: s.replaceAll("\\d+", "#")
来源：http://www.xuanzx.com/163xkexhrbp.html

Go:   re.ReplaceAllString(s, "#")
来源：http://www.sxryk.cn/163nftezjyy.html

Ruby: s.gsub(/\d+/, "#")
来源：http://www.sxryk.cn/163lowmudqw.html

C#:   Regex.Replace(s, @"\d+", "#")
来源：http://www.xuanzx.com/163vhmnwfdo.html

[I05] 按正则拆分
来源：http://www.xuanzx.com/163eorjambv.html

Py:   re.split(r"\s*,\s*", s)
来源：http://www.aibaodan.cn/163kxrwhnkk.html

PHP:  preg_split('/\s*,\s*/', $s);
来源：http://www.aibaodan.cn/163wpsxpkhk.html

JS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163saihjfwu.html

TS:   s.split(/\s*,\s*/)
来源：http://www.xuanzx.com/163yrqaodda.html

Java: s.split("\\s*,\\s*")
来源：http://www.aibaodan.cn/163fqbazaes.html

Go:   regexp.MustCompile(`\s*,\s*`).Split(s, -1)
来源：http://www.aibaodan.cn/163artfnpnk.html

Ruby: s.split(/\s*,\s*/)
来源：http://www.aibaodan.cn/163lddjcxoq.html

C#:   Regex.Split(s, @"\s*,\s*")
来源：http://www.sxryk.cn/163bnnopnyc.html

[I06] 常用校验模式（邮箱 / 手机号）
来源：http://www.aibaodan.cn/163ccizcbcn.html

Py:   r"[^@]+@[^@]+\.[^@]+"；r"^1[3-9]\d{9}$"
来源：http://www.aibaodan.cn/163sfszgluj.html

PHP:  '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'；'/^1[3-9]\d{9}$/'
来源：http://www.aibaodan.cn/163voubqusl.html

JS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.xuanzx.com/163poawzrsd.html

TS:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/；/^1[3-9]\d{9}$/
来源：http://www.aibaodan.cn/163uxzeitmv.html

Java: "^[\\w.+-]+@[\\w-]+\\.[\\w.]+$"；"^1[3-9]\\d{9}$"
来源：http://www.xuanzx.com/163yirocrqu.html

Go:   `^[\w.+-]+@[\w-]+\.[\w.]+$`   // RE2 不支持反向引用与前瞻
来源：http://www.sxryk.cn/163fyjkssdl.html

Ruby: /\A[\w.+-]+@[\w-]+\.[\w.]+\z/；/\A1[3-9]\d{9}\z/
来源：http://www.xuanzx.com/163wokvdqqq.html

C#:   @"^[\w.+-]+@[\w-]+\.[\w.]+$"；@"^1[3-9]\d{9}$"
来源：http://www.sxryk.cn/163wejjaxnc.html

[I07] 忽略大小写与多行模式
来源：http://www.sxryk.cn/163nyuqpucq.html

Py:   re.findall(r"error", s, re.I | re.M)
来源：http://www.sxryk.cn/163exekfkep.html

PHP:  preg_match_all('/error/im', $s, $m);
来源：http://www.xuanzx.com/163kvxpdhpu.html

JS:   /error/gim；new RegExp("error", "gim")
来源：http://www.aibaodan.cn/163xpndmeuv.html

TS:   /error/gim
来源：http://www.sxryk.cn/163uadnlnbp.html

Java: Pattern.compile("error", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE)
来源：http://www.sxryk.cn/163adarahsq.html

Go:   regexp.MustCompile(`(?im)error`)
来源：http://www.aibaodan.cn/163yiqlrtob.html

Ruby: s.scan(/error/i)
来源：http://www.aibaodan.cn/163efpakbqb.html

C#:   Regex.Match(s, "error", RegexOptions.IgnoreCase | RegexOptions.Multiline)
来源：http://www.sxryk.cn/163xczqzxsu.html

[I08] 贪婪与非贪婪匹配
来源：http://www.xuanzx.com/163fkpdygrd.html

Py:   re.findall(r"<b>.*?</b>", s)       # 加 ? 变非贪婪
来源：http://www.aibaodan.cn/163sshscbre.html

PHP:  preg_match_all('/<b>.*?<\/b>/', $s, $m);
来源：http://www.xuanzx.com/163hmpnbihe.html

JS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.sxryk.cn/163ulfayxxw.html

TS:   s.match(/<b>.*?<\/b>/g)
来源：http://www.aibaodan.cn/163tmwycaoe.html

Java: Pattern.compile("<b>.*?</b>")
来源：http://www.sxryk.cn/163pgtsbmhq.html

Go:   `<b>.*?</b>`                      # RE2 默认贪婪，同样用 ? 抑制
来源：http://www.aibaodan.cn/163bcuxfbzd.html

Ruby: s.scan(/<b>.*?<\/b>/)
来源：http://www.sxryk.cn/163pyccvkqw.html

C#:   Regex.Matches(s, @"<b>.*?</b>")
来源：http://www.sxryk.cn/163eswevvgv.html

================================================================================
来源：http://www.xuanzx.com/163tjogqkwa.html

J. 日期与时间
来源：http://www.sxryk.cn/163ztfllmhr.html

================================================================================
来源：http://www.sxryk.cn/163nbomysua.html

[J01] 获取当前时间
来源：http://www.sxryk.cn/163sruxzphs.html

Py:   datetime.now();  datetime.now(UTC)
来源：http://www.xuanzx.com/163wilzotfl.html

PHP:  new DateTimeImmutable();  date("Y-m-d H:i:s");
来源：http://www.xuanzx.com/163gqehnzqi.html

JS:   new Date();  Date.now()
来源：http://www.aibaodan.cn/163qoitildk.html

TS:   new Date();  Date.now()
来源：http://www.xuanzx.com/163kxkbkdbc.html

Java: LocalDateTime.now();  Instant.now()
来源：http://www.aibaodan.cn/163lhewapzb.html

Go:   time.Now()
来源：http://www.aibaodan.cn/163xyutqykz.html

Ruby: Time.now
来源：http://www.aibaodan.cn/163mvbihgpw.html

C#:   DateTime.Now;  DateTime.UtcNow
来源：http://www.aibaodan.cn/163kxvztvbe.html

[J02] 格式化输出
来源：http://www.xuanzx.com/163derbvone.html

Py:   now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.xuanzx.com/163ekcnwvzb.html

PHP:  (new DateTime())->format("Y-m-d H:i:s");
来源：http://www.sxryk.cn/163ydbunmbo.html

JS:   d.toISOString();  d.toLocaleString("zh-CN")
来源：http://www.xuanzx.com/163tjhzcszz.html

TS:   d.toISOString()
来源：http://www.aibaodan.cn/163wwcsjlay.html

Java: DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss").format(LocalDateTime.now())
来源：http://www.aibaodan.cn/163rippamgy.html

Go:   time.Now().Format("2006-01-02 15:04:05")     // Go 用参考时间做格式
来源：http://www.aibaodan.cn/163gmxtkkjg.html

Ruby: Time.now.strftime("%Y-%m-%d %H:%M:%S")
来源：http://www.sxryk.cn/163rfbolbae.html

C#:   DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss")
来源：http://www.xuanzx.com/163wavywjbh.html

[J03] 字符串解析为日期
来源：http://www.aibaodan.cn/163iyunfjjg.html

Py:   datetime.strptime("2024-01-02", "%Y-%m-%d")
来源：http://www.sxryk.cn/163ixdfhcxr.html

PHP:  DateTimeImmutable::createFromFormat("Y-m-d", "2024-01-02");
来源：http://www.aibaodan.cn/163muzjjwyv.html

JS:   new Date("2024-01-02")
来源：http://www.sxryk.cn/163wjhxpiel.html

TS:   new Date("2024-01-02")
来源：http://www.aibaodan.cn/163lfcecodx.html

Java: LocalDate.parse("2024-01-02")
来源：http://www.xuanzx.com/163fysatkxp.html

Go:   time.Parse("2006-01-02", "2024-01-02")
来源：http://www.aibaodan.cn/163myaumnuq.html

Ruby: Date.parse("2024-01-02")
来源：http://www.sxryk.cn/163awdrjcbm.html

C#:   DateTime.Parse("2024-01-02");  DateTime.ParseExact("2024-01-02", "yyyy-MM-dd", null)
来源：http://www.xuanzx.com/163stvxqtgd.html

[J04] 时间戳与日期互转
来源：http://www.sxryk.cn/163gjosmysw.html

Py:   int(now.timestamp());  datetime.fromtimestamp(ts)
来源：http://www.sxryk.cn/163etsomyom.html

PHP:  time();  (new DateTime())->getTimestamp();
来源：http://www.sxryk.cn/163kqgnfrwj.html

JS:   Math.floor(Date.now() / 1000);  new Date(ts * 1000)
来源：http://www.sxryk.cn/163snhrgzio.html

TS:   Math.floor(Date.now() / 1000)
来源：http://www.aibaodan.cn/163txrktxzf.html

Java: Instant.now().getEpochSecond();  Instant.ofEpochSecond(ts)
来源：http://www.xuanzx.com/163zepfunxs.html

Go:   time.Now().Unix();  time.Unix(ts, 0)
来源：http://www.sxryk.cn/163lrexuogo.html

Ruby: Time.now.to_i;  Time.at(ts)
来源：http://www.xuanzx.com/163bsfivxjp.html

C#:   DateTimeOffset.UtcNow.ToUnixTimeSeconds();  DateTimeOffset.FromUnixTimeSeconds(ts)
来源：http://www.xuanzx.com/163almdbial.html

[J05] 时间加减（加 7 天）
来源：http://www.sxryk.cn/163qfaoqclj.html

Py:   now + timedelta(days=7)
来源：http://www.aibaodan.cn/163wnsnwtny.html

PHP:  (new DateTime())->modify("+7 days");
来源：http://www.aibaodan.cn/163ixfgogjp.html

JS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.sxryk.cn/163sqwxetcx.html

TS:   new Date(Date.now() + 7 * 86400000)
来源：http://www.aibaodan.cn/163xzyfvaou.html

Java: LocalDate.now().plusDays(7)
来源：http://www.aibaodan.cn/163mhaeyqrl.html

Go:   time.Now().AddDate(0, 0, 7)
来源：http://www.aibaodan.cn/163vhtpiung.html

Ruby: Time.now + 7 * 86400
来源：http://www.aibaodan.cn/163zqcuhbhl.html

C#:   DateTime.Now.AddDays(7)
来源：http://www.aibaodan.cn/163mfylkkmx.html

[J06] 计算两时间之差
来源：http://www.sxryk.cn/163ymkkehql.html

Py:   (end - start).total_seconds()
来源：http://www.sxryk.cn/163pmryjkel.html

PHP:  $end->diff($start)->days;
来源：http://www.sxryk.cn/163egbwdaly.html

JS:   (end - start) / 1000        // 毫秒差转秒
来源：http://www.xuanzx.com/163dlxznjce.html

TS:   (end.getTime() - start.getTime()) / 1000
来源：http://www.xuanzx.com/163ttiznrvt.html

Java: Duration.between(start, end).toSeconds()
来源：http://www.xuanzx.com/163wldijzxw.html

Go:   end.Sub(start).Hours()
来源：http://www.sxryk.cn/163qpdumcrl.html

Ruby: end - start                 # 返回秒数
来源：http://www.aibaodan.cn/163yokeyexg.html

C#:   (end - start).TotalSeconds
来源：http://www.sxryk.cn/163zoqzsgkg.html

[J07] 比较两个日期
来源：http://www.xuanzx.com/163nhqvfsud.html

Py:   d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163urvydmrl.html

PHP:  $d1 < $d2;  $d1 == $d2;
来源：http://www.sxryk.cn/163gmmfvxsj.html

JS:   d1.getTime() < d2.getTime()
来源：http://www.sxryk.cn/163jnohckak.html

TS:   d1.getTime() < d2.getTime()
来源：http://www.aibaodan.cn/163lyuxnywg.html

Java: d1.isBefore(d2);  d1.isEqual(d2)
来源：http://www.xuanzx.com/163aispdndp.html

Go:   d1.Before(d2);  d1.Equal(d2)
来源：http://www.aibaodan.cn/163zvnsvojb.html

Ruby: d1 < d2;  d1 == d2
来源：http://www.sxryk.cn/163ecyftgau.html

C#:   d1 < d2;  d1 == d2
来源：http://www.xuanzx.com/163uxlbkxbz.html

[J08] 提取年月日与星期
来源：http://www.sxryk.cn/163mrihsurs.html

Py:   d.year;  d.month;  d.day;  d.weekday()
来源：http://www.aibaodan.cn/163cfsdfjeq.html

PHP:  (int) date("Y");  (int) date("n");  (int) date("j");  (int) date("w");
来源：http://www.xuanzx.com/163rngnwrer.html

JS:   d.getFullYear();  d.getMonth() + 1;  d.getDate();  d.getDay()
来源：http://www.xuanzx.com/163eokecavd.html

TS:   d.getFullYear();  d.getMonth() + 1;  d.getDate()
来源：http://www.aibaodan.cn/163vvngrhen.html

Java: ld.getYear();  ld.getMonthValue();  ld.getDayOfMonth()
来源：http://www.sxryk.cn/163yhexhsts.html

Go:   t.Year();  int(t.Month());  t.Day();  int(t.Weekday())
来源：http://www.sxryk.cn/163sqientmi.html

Ruby: d.year;  d.month;  d.day;  d.wday
来源：http://www.aibaodan.cn/163kfhzibbm.html

C#:   d.Year;  d.Month;  d.Day;  (int)d.DayOfWeek
来源：http://www.aibaodan.cn/163jihlbvde.html

[J09] 时区处理
来源：http://www.aibaodan.cn/163ztcmcemx.html

Py:   ZoneInfo("Asia/Shanghai");  now.astimezone(tz)
来源：http://www.xuanzx.com/163mbdxepfh.html

PHP:  new DateTimeZone("Asia/Shanghai");
来源：http://www.aibaodan.cn/163iokafxmb.html

JS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163tctstyko.html

TS:   Intl.DateTimeFormat("zh-CN", { timeZone: "Asia/Shanghai" }).format(d)
来源：http://www.aibaodan.cn/163owmwvdly.html

Java: ZoneId.of("Asia/Shanghai");  ZonedDateTime.now(zone)
来源：http://www.xuanzx.com/163degkmwwp.html

Go:   time.LoadLocation("Asia/Shanghai");  time.Now().In(loc)
来源：http://www.aibaodan.cn/163fgwzpmyg.html

Ruby: Time.now.getlocal("+08:00")
来源：http://www.sxryk.cn/163uogyfdfx.html

C#:   TimeZoneInfo.FindSystemTimeZoneById("China Standard Time")
来源：http://www.aibaodan.cn/163xqsdybyi.html

[J10] 取今天 / 本月第一天
来源：http://www.sxryk.cn/163iilgldya.html

Py:   date.today();  date.today().replace(day=1)
来源：http://www.aibaodan.cn/163pvwegbqs.html

PHP:  new DateTime("today");  new DateTime("first day of this month");
来源：http://www.xuanzx.com/163hytqjotc.html

JS:   new Date().setHours(0, 0, 0, 0);  new Date(y, m, 1)
来源：http://www.sxryk.cn/163zdznzcqn.html

TS:   new Date().setHours(0, 0, 0, 0)
来源：http://www.aibaodan.cn/163grbvqsfp.html

Java: LocalDate.now();  LocalDate.now().withDayOfMonth(1)
来源：http://www.aibaodan.cn/163vqueujjk.html

Go:   now := time.Now();  time.Date(now.Year(), now.Month(), 1, 0, 0, 0, 0, now.Location())
来源：http://www.xuanzx.com/163kjwvdcwc.html

Ruby: Date.today;  Date.today.next_month - Date.today.day   # 本月最后一天思路
来源：http://www.aibaodan.cn/163kkdbwffb.html

C#:   DateTime.Today;  new DateTime(now.Year, now.Month, 1)
来源：http://www.xuanzx.com/163urpjlhcs.html

================================================================================
来源：http://www.aibaodan.cn/163kxklaozz.html

K. JSON 与序列化
来源：http://www.sxryk.cn/163ebolthij.html

================================================================================
来源：http://www.xuanzx.com/163yzyuyvvj.html

[K01] 对象转 JSON 字符串
来源：http://www.xuanzx.com/163wcnqxthy.html

Py:   json.dumps(obj, ensure_ascii=False)
来源：http://www.xuanzx.com/163eyehpieg.html

PHP:  json_encode($obj, JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163jvxpcvht.html

JS:   JSON.stringify(obj)
来源：http://www.xuanzx.com/163ccslsihb.html

TS:   JSON.stringify(obj)
来源：http://www.aibaodan.cn/163akgygjwc.html

Java: new ObjectMapper().writeValueAsString(obj)      // Jackson
来源：http://www.xuanzx.com/163grvptmkb.html

Go:   json.Marshal(obj)
来源：http://www.aibaodan.cn/163fubuxlxa.html

Ruby: obj.to_json                                     // require "json"
来源：http://www.aibaodan.cn/163mxywuiqj.html

C#:   JsonSerializer.Serialize(obj)
来源：http://www.aibaodan.cn/163owyyrpnl.html

[K02] JSON 字符串转对象
来源：http://www.xuanzx.com/163dimlihnp.html

Py:   json.loads(s)
来源：http://www.xuanzx.com/163suujfhlt.html

PHP:  json_decode($s, true);                          // true 得关联数组
来源：http://www.xuanzx.com/163ngigvzsv.html

JS:   JSON.parse(s)
来源：http://www.xuanzx.com/163xbcmbhec.html

TS:   JSON.parse(s)
来源：http://www.xuanzx.com/163pidqrcgh.html

Java: new ObjectMapper().readValue(s, Map.class)
来源：http://www.sxryk.cn/163ccxreabi.html

Go:   json.Unmarshal(data, &v)
来源：http://www.aibaodan.cn/163aimmpdsq.html

Ruby: JSON.parse(s)
来源：http://www.sxryk.cn/163chbiyesv.html

C#:   JsonSerializer.Deserialize<T>(s)
来源：http://www.sxryk.cn/163qdjfpovh.html

[K03] JSON 美化输出（带缩进）
来源：http://www.sxryk.cn/163wdikrtmx.html

Py:   json.dumps(obj, indent=2, ensure_ascii=False)
来源：http://www.sxryk.cn/163jnpkptuj.html

PHP:  json_encode($obj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
来源：http://www.sxryk.cn/163egteereh.html

JS:   JSON.stringify(obj, null, 2)
来源：http://www.aibaodan.cn/163nostndsn.html

TS:   JSON.stringify(obj, null, 2)
来源：http://www.sxryk.cn/163fuvobjes.html

Java: mapper.writerWithDefaultPrettyPrinter().writeValueAsString(obj)
来源：http://www.sxryk.cn/163zzcrlnct.html

Go:   json.MarshalIndent(obj, "", "  ")
来源：http://www.sxryk.cn/163nonznesd.html

Ruby: JSON.pretty_generate(obj)
来源：http://www.xuanzx.com/163soultozt.html

C#:   JsonSerializer.Serialize(obj, new JsonSerializerOptions { WriteIndented = true })
来源：http://www.aibaodan.cn/163xvtyxzzy.html

[K04] 读取 JSON 文件
来源：http://www.sxryk.cn/163crdxnqgj.html

Py:   json.load(open("a.json", encoding="utf-8"))
来源：http://www.aibaodan.cn/163uheozuca.html

PHP:  json_decode(file_get_contents("a.json"), true);
来源：http://www.sxryk.cn/163oxfrrzsh.html

JS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163feodrocw.html

TS:   JSON.parse(fs.readFileSync("a.json", "utf8"))
来源：http://www.aibaodan.cn/163pbzvscop.html

Java: mapper.readValue(new File("a.json"), Map.class)
来源：http://www.sxryk.cn/163pjmcxkau.html

Go:   data, _ := os.ReadFile("a.json");  json.Unmarshal(data, &v)
来源：http://www.xuanzx.com/163nahiicuq.html

Ruby: JSON.parse(File.read("a.json"))
来源：http://www.sxryk.cn/163goibpaie.html

C#:   JsonSerializer.Deserialize<T>(File.ReadAllText("a.json"))
来源：http://www.sxryk.cn/163sutuoamf.html

[K05] 深拷贝对象
来源：http://www.aibaodan.cn/163oezuarxv.html

Py:   copy.deepcopy(obj)
来源：http://www.aibaodan.cn/163zxokfsnm.html

PHP:  unserialize(serialize($obj));
来源：http://www.xuanzx.com/163ziuxbdcw.html

JS:   structuredClone(obj)
来源：http://www.xuanzx.com/163kitteszo.html

TS:   structuredClone(obj)
来源：http://www.sxryk.cn/163gicopnvl.html

Java: // 手写拷贝构造，或序列化往返
来源：http://www.xuanzx.com/163wxawhhej.html

Go:   // 结构体值赋值即复制（注意指针/切片字段）
来源：http://www.sxryk.cn/163qemjhjok.html

Ruby: Marshal.load(Marshal.dump(obj))
来源：http://www.xuanzx.com/163lcuwwjed.html

C#:   // 序列化往返，或自定义 Clone
来源：http://www.aibaodan.cn/163dmkvnspe.html

[K06] 解析 URL 查询串
来源：http://www.aibaodan.cn/163bpbhspfu.html

Py:   parse_qs("a=1&b=2");  urlencode({"a": 1})
来源：http://www.aibaodan.cn/163aavkmrwm.html

PHP:  parse_str("a=1&b=2", $out);  http_build_query(["a" => 1]);
来源：http://www.aibaodan.cn/163htcevrbk.html

JS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163ozaorofs.html

TS:   new URLSearchParams("a=1&b=2").get("a")
来源：http://www.xuanzx.com/163nwlkhxho.html

Java: // 手动 split & 与 =，或 UriComponentsBuilder
来源：http://www.aibaodan.cn/163hkcwkymi.html

Go:   url.ParseQuery("a=1&b=2")
来源：http://www.xuanzx.com/163zyttiqjm.html

Ruby: URI.decode_www_form("a=1&b=2")
来源：http://www.aibaodan.cn/163zyqoasrr.html

C#:   HttpUtility.ParseQueryString("a=1&b=2")
来源：http://www.xuanzx.com/163hjkbuiyr.html

[K07] 进制转换
来源：http://www.xuanzx.com/163ayhvvigm.html

Py:   bin(10);  hex(255);  int("ff", 16)
来源：http://www.sxryk.cn/163kxzrxojx.html

PHP:  decbin(10);  dechex(255);  hexdec("ff");
来源：http://www.aibaodan.cn/163jomnvboh.html

JS:   (10).toString(2);  (255).toString(16);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163mdyseipp.html

TS:   (10).toString(2);  parseInt("ff", 16)
来源：http://www.sxryk.cn/163kvkdnydp.html

Java: Integer.toBinaryString(10);  Integer.toHexString(255);  Integer.parseInt("ff", 16)
来源：http://www.xuanzx.com/163rscvszmm.html

Go:   strconv.FormatInt(10, 2);  strconv.ParseInt("ff", 16, 64)
来源：http://www.aibaodan.cn/163kjnhhuds.html

Ruby: 10.to_s(2);  255.to_s(16);  "ff".to_i(16)
来源：http://www.sxryk.cn/163bdxgtmdz.html

C#:   Convert.ToString(10, 2);  Convert.ToString(255, 16);  Convert.ToInt32("ff", 16)
来源：http://www.aibaodan.cn/163rafpkide.html

[K08] 二进制序列化（非 JSON）
来源：http://www.aibaodan.cn/163szirbsoy.html

Py:   pickle.dumps(obj)
来源：http://www.sxryk.cn/163hdsjcszl.html

PHP:  serialize($obj);  unserialize($s);
来源：http://www.sxryk.cn/163uahhgbhp.html

JS:   v8.serialize(obj)        // Node
来源：http://www.xuanzx.com/163eprjqisw.html

TS:   v8.serialize(obj)        // Node
来源：http://www.sxryk.cn/163onggvaxf.html

Java: // 用 Kryo / Protobuf；Java 原生序列化已不推荐
来源：http://www.xuanzx.com/163jjbxanvl.html

Go:   encoding/gob
来源：http://www.aibaodan.cn/163gczuupvc.html

Ruby: Marshal.dump(obj)
来源：http://www.aibaodan.cn/163mkvnppno.html

C#:   // BinaryFormatter 已弃用，改用 MessagePack / System.Text.Json
来源：http://www.sxryk.cn/163bhwsdjka.html

================================================================================
来源：http://www.xuanzx.com/163gcrooynd.html

L. 网络请求
来源：http://www.sxryk.cn/163cmurjxyj.html

================================================================================
来源：http://www.sxryk.cn/163zgsuyfha.html

[L01] 发送 GET 请求
来源：http://www.aibaodan.cn/163tymhwbmv.html

Py:   requests.get(url)                        # 第三方库 requests
来源：http://www.aibaodan.cn/163pdhxovkr.html

PHP:  file_get_contents($url);                 // 简单场景；复杂用 curl
来源：http://www.xuanzx.com/163dhipqnzg.html

JS:   await fetch(url)
来源：http://www.aibaodan.cn/163tnezpblw.html

TS:   await fetch(url)
来源：http://www.xuanzx.com/163bnkgwjeq.html

Java: HttpClient.newHttpClient().send(HttpRequest.newBuilder(URI.create(url)).build(), BodyHandlers.ofString())
来源：http://www.sxryk.cn/163wjlemhts.html

Go:   resp, err := http.Get(url)
来源：http://www.sxryk.cn/163nthkccqa.html

Ruby: Net::HTTP.get(URI(url))
来源：http://www.sxryk.cn/163ettsfdxk.html

C#:   await new HttpClient().GetStringAsync(url)
来源：http://www.aibaodan.cn/163zxotssre.html

[L02] 发送 POST JSON
来源：http://www.sxryk.cn/163ltslhjcp.html


<!-- 参考信息 -->